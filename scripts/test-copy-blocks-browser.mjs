import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { mkdir, mkdtemp, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { spawn } from 'node:child_process'
import { buildPageBlocks, catalogPages, pilotPages } from './block-catalog.mjs'

// Dependency-free Chromium smoke test using its DevTools protocol and real clipboard.
// Run the catalogue and `pnpm preview:copy-blocks` before this script.
const base = process.env.BLOCKS_BASE_URL || 'http://127.0.0.1:3030'
const pasteBase = process.env.BLOCKS_PASTE_URL || 'http://127.0.0.1:3031'
const selectedPath = process.argv.find(argument => argument.startsWith('--page='))?.slice(7)
const selectedPages = selectedPath ? catalogPages.filter(page => page.path === selectedPath) : process.argv.includes('--all') ? catalogPages : pilotPages
assert.ok(selectedPages.length, `No registered pages: ${selectedPath || 'pilot'}`)
const exports = (await Promise.all(selectedPages.map(page => buildPageBlocks(page)))).flat()
const lastBlock = exports.at(-1)
const chrome = process.env.CHROME_PATH || [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find(existsSync)
assert.ok(chrome, 'Set CHROME_PATH to an installed Chromium browser')
const temp = process.platform === 'win32'
  ? resolve(process.env.LOCALAPPDATA, 'Temp/opencode')
  : resolve(process.env.TMPDIR || '/tmp', 'opencode')
await mkdir(temp, { recursive: true })
const profile = await mkdtemp(resolve(temp, 'blocks-browser-'))
const browser = spawn(chrome, ['--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`, '--no-first-run', '--no-default-browser-check', 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'], windowsHide: true })
const address = await new Promise((resolve, reject) => {
  let output = ''
  const timeout = setTimeout(() => reject(new Error('Browser startup timed out')), 30000)
  browser.stderr.on('data', data => {
    output += data.toString()
    const match = output.match(/DevTools listening on (ws:\/\/[^\s]+)/)
    if (match) { clearTimeout(timeout); resolve(match[1]) }
  })
  browser.on('error', error => { clearTimeout(timeout); reject(error) })
  browser.on('exit', code => { clearTimeout(timeout); reject(new Error(`Browser exited: ${code}`)) })
})
const socket = new WebSocket(address)
await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once: true }); socket.addEventListener('error', reject, { once: true }) })
let sequence = 0
const pending = new Map()
const events = new Map()
let sessionId
let errors = []
socket.addEventListener('message', event => {
  const message = JSON.parse(event.data)
  if (events.has(message.method) && message.sessionId === sessionId) {
    const event = events.get(message.method)
    clearTimeout(event.timeout)
    events.delete(message.method)
    event.resolve(message.params)
  }
  if (message.id) {
    const request = pending.get(message.id)
    if (!request) return
    pending.delete(message.id)
    clearTimeout(request.timeout)
    if (message.error) request.reject(new Error(JSON.stringify(message.error)))
    else request.resolve(message.result)
  } else if (message.method === 'Runtime.exceptionThrown') {
    errors.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text)
  } else if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') {
    errors.push(message.params.args.map(arg => arg.value || arg.description).join(' '))
  }
})
function send(method, params = {}, session = sessionId) {
  return new Promise((resolve, reject) => {
    const id = ++sequence
    const timeout = setTimeout(() => { pending.delete(id); reject(new Error(`CDP timeout: ${method}`)) }, 45000)
    pending.set(id, { resolve, reject, timeout })
    socket.send(JSON.stringify({ id, method, params, ...(session ? { sessionId: session } : {}) }))
  })
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text)
  return result.result.value
}
async function waitFor(expression) {
  return evaluate(`(async () => { const deadline = Date.now() + 30000; while (!(${expression})) { if (Date.now() > deadline) throw new Error('DOM condition timed out: ' + ${JSON.stringify(expression)}); await new Promise(resolve => setTimeout(resolve, 50)); } return true; })()`)
}
async function navigate(url, selector) {
  errors = []
  const loaded = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => { events.delete('Page.loadEventFired'); reject(new Error(`Navigation timed out: ${url}`)) }, 45000)
    events.set('Page.loadEventFired', { resolve, reject, timeout })
  })
  await send('Page.navigate', { url })
  await loaded
  await waitFor(`document.querySelector(${JSON.stringify(selector)}) && document.querySelector('#__nuxt')?.__vue_app__`)
  if (selector === '[data-copy-block]') await waitFor(`document.querySelector('button[aria-label="Elegir un bloque para copiar"]')`)
}
async function click(selector) {
  await waitFor(`document.querySelector(${JSON.stringify(selector)}) && !document.querySelector(${JSON.stringify(selector)}).disabled`)
  // Like Playwright's stable-element check: allow the toolbar to finish layout.
  await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))')
  const point = await evaluate(`(() => { const element = document.querySelector(${JSON.stringify(selector)}); const r = element.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; })()`)
  await send('Input.dispatchMouseEvent', { type: 'mouseMoved', ...point })
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', button: 'left', clickCount: 1, ...point })
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', button: 'left', clickCount: 1, ...point })
}
async function selectBlock(id) {
  await evaluate(`(() => { const element = document.querySelector('[data-copy-block="${id}"]'); element.scrollIntoView({ block: 'center' }); element.focus({ preventScroll: true }); })()`)
  await waitFor(`document.querySelector('[role="toolbar"][data-copy-selected="${id}"]') && !document.querySelector('button[aria-label="Copiar componente completo"]').disabled`)
  await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))')
}
async function tap(selector) {
  const point = await evaluate(`(() => { const r = document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; })()`)
  await send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ ...point, radiusX: 1, radiusY: 1 }] })
  await send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
}
async function screenshot(name) {
  await evaluate(`Promise.allSettled(document.getAnimations().filter(animation => Number.isFinite(animation.effect?.getComputedTiming().endTime)).map(animation => animation.finished))`)
  const result = await send('Page.captureScreenshot', { format: 'png' })
  await writeFile(resolve(profile, name), Buffer.from(result.data, 'base64'))
}

let previousClipboard
const normalize = value => value.replaceAll('\r\n', '\n')
const result = { copied: [], pasteTests: [], screenshots: profile }
try {
  const target = await send('Target.createTarget', { url: 'about:blank' }, null)
  sessionId = (await send('Target.attachToTarget', { targetId: target.targetId, flatten: true }, null)).sessionId
  await send('Page.enable')
  await send('Runtime.enable')
  await send('Browser.grantPermissions', { origin: new URL(base).origin, permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'] }, null)
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false })
  for (const page of selectedPages) {
    await navigate(base + page.path, '[data-copy-block]')
    if (previousClipboard === undefined) previousClipboard = await evaluate('navigator.clipboard.readText()')
    const hoverPoint = await evaluate(`(() => { const r = document.querySelector('[data-copy-block]').getBoundingClientRect(); return { x: r.left + 16, y: r.top + 16 }; })()`)
    await send('Input.dispatchMouseEvent', { type: 'mouseMoved', ...hoverPoint })
    await waitFor('document.querySelector("[role=toolbar]")')
    for (const block of exports.filter(block => block.page === page.path)) {
      await selectBlock(block.id)
      const overlapsControls = await evaluate(`(() => { const toolbar = document.querySelector('[role=toolbar]').getBoundingClientRect(); return [...document.querySelector('[data-page]').querySelectorAll('button, a, input, textarea, select, [role=button], [role=combobox]')].some(element => { const r = element.getBoundingClientRect(); return r.width && r.height && toolbar.left < r.right && toolbar.right > r.left && toolbar.top < r.bottom && toolbar.bottom > r.top; }); })()`)
      assert.equal(overlapsControls, false, `${block.id}: tools overlap native controls`)
      await click('button[aria-label="Copiar componente completo"]')
      await waitFor(`document.querySelector('button[aria-label="Copiar componente completo"]')?.textContent.includes('Copiado')`)
      const copied = normalize(await evaluate('navigator.clipboard.readText()'))
      assert.ok(copied === normalize(block.component), `${block.id}: wrong clipboard source (${copied.split('\n')[0]})`)
      result.copied.push(block.id)
    }
    assert.deepEqual(errors, [], `${page.path}: browser errors`)
    await screenshot(page.key + '.png')
    const lightColor = await evaluate(`getComputedStyle(document.querySelector('[data-page]')).color`)
    await evaluate(`document.documentElement.classList.add('dark')`)
    await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))')
    assert.notEqual(await evaluate(`getComputedStyle(document.querySelector('[data-page]')).color`), lightColor, `${page.path}: dark theme must update semantic text`)
    await screenshot(page.key + '-dark.png')
    await evaluate(`document.documentElement.classList.remove('dark')`)
  }
  await click('button[aria-label="Ver código del bloque"]')
  await waitFor('document.querySelector("[role=dialog] pre code")')
  assert.equal(await evaluate('document.querySelector("[role=dialog] pre code").textContent'), lastBlock.component)
  await screenshot('code.png')
  await click('button[aria-pressed="false"]')
  await click('button[aria-label="Copiar código mostrado"]')
  await waitFor(`document.querySelector('[role="dialog"] pre code')?.textContent === ${JSON.stringify(lastBlock.template)}`)
  await waitFor(`(await navigator.clipboard.readText()).replaceAll('\\r\\n', '\\n') === ${JSON.stringify(lastBlock.template)}`)
  assert.equal(normalize(await evaluate('navigator.clipboard.readText()')), normalize(lastBlock.template), 'Template clipboard contents')
  result.viewerAndTemplate = true
  for (let i = 0; i < 2; i++) {
    await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 })
    await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 })
  }
  await waitFor('!document.querySelector("[role=dialog]") && !document.querySelector("[role=toolbar]")')
  result.keyboardEscape = true

  // Clipboard rejection must open the manual-selection fallback, not report success.
  await navigate(base + lastBlock.page, '[data-copy-block]')
  await evaluate(`Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: () => Promise.reject(new Error('Denied')) } })`)
  await selectBlock(lastBlock.id)
  await click('button[aria-label="Copiar componente completo"]')
  await waitFor('document.querySelector("[role=dialog]")?.textContent.includes("El navegador no permite copiar")')
  await evaluate(`(() => { const b = [...document.querySelectorAll('[role=dialog] button')].find(b => b.textContent.includes('Seleccionar código')); b.click(); })()`)
  assert.ok(normalize(await evaluate('window.getSelection().toString()')).trimEnd() === normalize(lastBlock.component).trimEnd(), 'Manual selection must include the complete component')
  result.clipboardFallback = true

  // Touch selection must fit the viewport and leave native controls usable.
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true })
  await send('Emulation.setTouchEmulationEnabled', { enabled: true })
  for (const page of selectedPages) {
    await navigate(base + page.path, '[data-copy-block]')
    assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true, `${page.path}: mobile horizontal overflow`)
    await tap('button[aria-label="Elegir un bloque para copiar"]')
    await waitFor('document.querySelector("[role=menuitem]")')
    await tap('[role="menuitem"]')
    await waitFor('document.querySelector("[role=toolbar]")')
    assert.equal(await evaluate(`(() => { const r = document.querySelector('[role=toolbar]').getBoundingClientRect(); return r.left >= 0 && r.right <= window.innerWidth; })()`), true)
    await screenshot(page.key + '-mobile.png')
    assert.deepEqual(errors, [], `${page.path}: mobile browser errors`)
  }
  result.mobileSelector = true

  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false })
  await send('Emulation.setTouchEmulationEnabled', { enabled: false })
  for (const block of exports) {
    await navigate(pasteBase + '/' + block.id, '[data-paste-test]')
    assert.equal(await evaluate('document.querySelectorAll("[data-copy-tools], [data-copy-block]").length'), 0)
    assert.deepEqual(errors, [], `${block.id}: standalone browser errors`)
    if (block.id === 'webhooks-table') {
      await evaluate(`(() => { const input=document.querySelector('input'); input.value='tall-alert'; input.dispatchEvent(new Event('input', { bubbles:true })); })()`)
      await waitFor('document.querySelectorAll("tbody tr").length === 1')
    }
    if (block.id === 'chat-composer') {
      await evaluate(`(() => { const input=document.querySelector('textarea'); input.value='Portable block test'; input.dispatchEvent(new Event('input', { bubbles:true })); })()`)
      await click('button[aria-label="Send message"]')
      await waitFor('document.querySelector("[data-paste-test]").textContent.includes("Your message has been added")')
      assert.equal(await evaluate('document.querySelector("textarea").value'), '')
    }
    if (block.id === 'unauthorized-screen') {
      const destination = await evaluate(`document.querySelector('a').getAttribute('href')`)
      assert.equal(destination, '/', 'Portable home link')
      await navigate(pasteBase + '/', 'main')
      await navigate(pasteBase + '/' + block.id, '[data-paste-test]')
      await click('[data-paste-test] button')
      await waitFor(`location.pathname === '/'`)
      result.goBack = true
    }
    result.pasteTests.push(block.id)
  }
  console.log(JSON.stringify(result, null, 2))
} catch (error) {
  await screenshot('failure.png').catch(() => {})
  console.error(JSON.stringify({ screenshot: resolve(profile, 'failure.png'), errors, page: await evaluate(`({ url: location.href, activeBlock: document.activeElement?.getAttribute('data-copy-block'), toolbar: document.querySelector('[role=toolbar]')?.textContent, toasts: [...document.querySelectorAll('[data-sonner-toast], [role=alert]')].map(element => element.textContent) })`).catch(() => null) }, null, 2))
  throw error
} finally {
  if (previousClipboard !== undefined) {
    await navigate(base + lastBlock.page, '[data-copy-block]').catch(() => {})
    await evaluate(`navigator.clipboard.writeText(${JSON.stringify(previousClipboard)})`).catch(() => {})
  }
  await send('Browser.close', {}, null).catch(() => browser.kill())
  socket.close()
}
