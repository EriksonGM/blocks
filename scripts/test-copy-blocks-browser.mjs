import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises'
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
  } else if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'warning') {
    const warning = message.params.args.map(arg => arg.value || arg.description).join(' ')
    if (/hydration/i.test(warning)) errors.push(warning)
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
  await evaluate(`(() => { const element = document.activeElement; if (element?.matches('input, textarea')) element.blur(); })()`)
  await evaluate(`document.querySelector(${JSON.stringify(selector)}).scrollIntoView({ block: 'nearest' })`)
  // Like Playwright's stable-element check: allow the toolbar to finish layout.
  await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))')
  await evaluate(`(async () => { const element = document.querySelector(${JSON.stringify(selector)}); let previous; let stable = 0; const deadline = Date.now() + 5000; while (stable < 3) { if (Date.now() > deadline) throw new Error('Element did not settle: ' + ${JSON.stringify(selector)}); await new Promise(resolve => requestAnimationFrame(resolve)); const r = element.getBoundingClientRect(); const current = [r.left, r.top, r.width, r.height]; stable = previous && current.every((value, index) => Math.abs(value - previous[index]) < 0.5) ? stable + 1 : 0; previous = current; } })()`)
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
async function chooseOption(selector, label) {
  await click(selector)
  await waitFor(`document.querySelector(${JSON.stringify(selector)}).getAttribute('aria-expanded') === 'true'`)
  await evaluate(`Promise.allSettled(document.getAnimations().filter(animation => Number.isFinite(animation.effect?.getComputedTiming().endTime)).map(animation => animation.finished))`)
  await waitFor(`[...document.querySelectorAll('[role=option]')].some(option => option.textContent.trim() === ${JSON.stringify(label)} && !option.closest('[data-state="closed"]'))`)
  await evaluate(`(() => { document.querySelectorAll('[data-browser-choice]').forEach(option => option.removeAttribute('data-browser-choice')); const option = [...document.querySelectorAll('[role=option]')].find(option => option.textContent.trim() === ${JSON.stringify(label)} && !option.closest('[data-state="closed"]')); if (!option) throw new Error('Missing option'); option.setAttribute('data-browser-choice', 'selected'); })()`)
  await click('[data-browser-choice="selected"]')
  await waitFor(`document.querySelector(${JSON.stringify(selector)}).getAttribute('aria-expanded') === 'false' && document.querySelector(${JSON.stringify(selector)}).textContent.includes(${JSON.stringify(label)})`)
  await evaluate(`Promise.allSettled(document.getAnimations().filter(animation => Number.isFinite(animation.effect?.getComputedTiming().endTime)).map(animation => animation.finished))`)
  await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))')
}

async function setInput(selector, value) {
  await evaluate(`(() => { const input = document.querySelector(${JSON.stringify(selector)}); input.focus({ preventScroll: true }); input.value = ${JSON.stringify(value)}; input.dispatchEvent(new Event('input', { bubbles: true })); })()`)
}
async function chooseTab(root, label) {
  await evaluate(`(() => { document.querySelectorAll('[data-browser-tab]').forEach(tab => tab.removeAttribute('data-browser-tab')); const tab = [...document.querySelectorAll(${JSON.stringify(root + ' [role=tab]')})].find(tab => tab.textContent.trim() === ${JSON.stringify(label)}); if (!tab) throw new Error('Missing tab: ' + ${JSON.stringify(label)}); tab.setAttribute('data-browser-tab', 'selected'); })()`)
  await click('[data-browser-tab="selected"]')
  await waitFor(`document.querySelector('[data-browser-tab="selected"]').getAttribute('aria-selected') === 'true'`)
}
async function checkDemoApiKeys(root) {
  const firstValue = root + ' [data-demo-key-id="demo-key-1"] input'
  const firstCopy = root + ' button[aria-label="Copy Server integration demo key"]'
  const initialValue = await evaluate(`document.querySelector(${JSON.stringify(firstValue)}).value`)
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(firstValue)}).type`), 'password')
  await click(root + ' button[aria-label="Reveal Server integration demo key"]')
  await waitFor(`document.querySelector(${JSON.stringify(firstValue)}).type === 'text'`)
  await click(root + ' button[aria-label="Hide Server integration demo key"]')
  await click(firstCopy)
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('copied to clipboard.')`)
  assert.equal(await evaluate('navigator.clipboard.readText()'), initialValue, 'Native key copy must copy its actual value, not its button label')
  await click(root + ' button[aria-label="Rotate Server integration demo key"]')
  await click('button[aria-label="Cancel demo key rotation"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(firstValue)}).value`), initialValue)
  await click(root + ' button[aria-label="Rotate Server integration demo key"]')
  await click('button[aria-label="Confirm demo key rotation"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  const rotated = await evaluate(`document.querySelector(${JSON.stringify(firstValue)}).value`)
  assert.notEqual(rotated, initialValue)
  assert.ok(rotated.startsWith('demo_sk_live_') && rotated.endsWith('_not_a_real_key'))
  await click(root + ' button[aria-label="Create secret demo key"]')
  await click('button[aria-label="Confirm demo key creation"]')
  await waitFor(`document.querySelector('[role=dialog]')?.textContent.includes('Enter a name for the demo key.')`)
  await setInput('[role=dialog] input[name="demoKeyName"]', 'Portable secret')
  await chooseOption('[aria-label="New demo key environment"]', 'Development')
  await click('button[aria-label="Confirm demo key creation"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root)}).textContent.includes('Portable secret')`)
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-demo-key-id]')}).length`), 3)
  await click(root + ' button[aria-label="Create publishable demo key"]')
  await setInput('[role=dialog] input[name="demoKeyName"]', 'Portable storefront')
  await click('button[aria-label="Confirm demo key creation"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root)}).textContent.includes('Portable storefront')`)
  await chooseTab(root, 'Account')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('4 in this environment · 6 total')`)
  await chooseTab(root, 'API Keys')
  await chooseOption(root + ' [aria-label="API key environment"]', 'Production')
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-demo-key-id]')}).length`), 2)
  await click(root + ' button[aria-label="Open demo key usage guide"]')
  await waitFor(`document.querySelector('[role=dialog]')?.textContent.includes('trusted server')`)
  await click('button[aria-label="Close demo key usage guide"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  await evaluate(`Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: () => Promise.reject(new Error('Denied')) } })`)
  await click(firstCopy)
  await waitFor(`document.querySelector('textarea[aria-label="Demo key for manual copying"]')`)
  assert.equal(await evaluate(`document.querySelector('textarea[aria-label="Demo key for manual copying"]').value`), rotated)
  await screenshot('demo-key-manual-copy.png')
  await click('button[aria-label="Close manual demo key copying"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  await evaluate('delete navigator.clipboard')
  result.demoApiKeys = { clipboard: true, reveal: true, rotation: true, creation: true, environments: true, account: true, fallback: true }
}

async function checkEventLogs(root) {
  const rows = `document.querySelectorAll(${JSON.stringify(root + ' tbody tr')}).length`
  const text = `document.querySelector(${JSON.stringify(root)}).textContent`
  await waitFor(`${rows} === 7`)
  assert.equal(await evaluate(`${text}.includes('$2,500')`), false, 'Log records must not include a currency total')
  await click(root + ' [aria-label="Filter warning logs"]')
  await waitFor(`${rows} === 2`)
  await click(root + ' [aria-label="Filter error logs"]')
  await waitFor(`${rows} === 3`)
  await click(root + ' [aria-label="Filter warning logs"]')
  await waitFor(`${rows} === 1`)
  await click(root + ' button[aria-label="Reset log filters"]')
  await chooseOption(root + ' [aria-label="Log environment"]', 'Development')
  await waitFor(`${rows} === 2`)
  await chooseOption(root + ' [aria-label="Log event type"]', 'Cache')
  await waitFor(`${rows} === 1`)
  await click(root + ' button[aria-label="Reset log filters"]')
  await chooseOption(root + ' [aria-label="Log time period"]', 'Past 5 minutes')
  await waitFor(`${rows} === 2`)
  await chooseOption(root + ' [aria-label="Log time period"]', 'Custom')
  await setInput(root + ' [aria-label="Log range start UTC"]', '2026-10-03T10:32')
  await setInput(root + ' [aria-label="Log range end UTC"]', '2026-10-03T10:34')
  await waitFor(`${rows} === 2`)
  await setInput(root + ' [aria-label="Log range end UTC"]', '2026-10-03T10:31')
  await waitFor(`${text}.includes('Enter a valid UTC range') && ${text}.includes('No logs match')`)
  await click(root + ' button[aria-label="Reset log filters"]')
  await setInput(root + ' [aria-label="Search event logs"]', 'database')
  await waitFor(`${rows} === 1`)
  await setInput(root + ' [aria-label="Search event logs"]', '')
  await click(root + ' button[aria-label="Sort event timestamps"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' tbody tr')}).textContent.includes('10:36:05')`)
  await click(root + ' button[aria-label="Toggle log filters"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' button[aria-label="Toggle log filters"]')}).getAttribute('aria-expanded') === 'false'`)
  await click(root + ' button[aria-label="Toggle log filters"]')
  await click(root + ' button[aria-label="Import local log JSON"]')
  assert.notEqual(await evaluate(`document.querySelector('[aria-label="Local log JSON"]').getAttribute('aria-invalid')`), 'true', 'Fresh import form must not show an error')
  await setInput('[aria-label="Local log JSON"]', '{')
  await click('button[aria-label="Confirm local log import"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Enter valid JSON')`)
  await setInput('[aria-label="Local log JSON"]', '[{"timestamp":"2026-10-03T10:38:00Z","level":"INFO","message":"Invalid nested field","source":"example.js","environment":["Development"],"type":"Request"}]')
  await click('button[aria-label="Confirm local log import"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('1–100 records')`)
  await click('button[aria-label="Load example log JSON"]')
  await screenshot('event-log-import.png')
  await click('button[aria-label="Confirm local log import"]')
  await waitFor(`!document.querySelector('[role=dialog]') && ${rows} === 1 && ${text}.includes('Imported demonstration event')`)
  await click(root + ' button[aria-label="Reload example logs"]')
  await waitFor(`${rows} === 7`)
  result.eventLogs = { levels: true, environment: true, type: true, search: true, period: true, customRange: true, sorting: true, importValidation: true, import: true, reload: true }
}
async function checkVisitorSummary(root, referrers = false) {
  await chooseTab(root, referrers ? 'UTM Parameters' : 'Routes')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes(${JSON.stringify(referrers ? 'utm_source=newsletter' : 'GET /api/users')})`)
  if (!referrers) await chooseTab(root, 'Hostnames')
  await click(root + ` button[aria-label="View all ${referrers ? 'referrer' : 'visitor'} records"]`)
  await waitFor(`document.querySelector('[role=dialog]')?.textContent.includes(${JSON.stringify(referrers ? 'utm_medium=social' : 'preview.example.com')})`)
  assert.equal(await evaluate(`document.querySelectorAll('[role=dialog] input, [role=dialog] textarea').length`), 0)
  await click(`button[aria-label="Close ${referrers ? 'referrer' : 'visitor'} records"]`)
  await waitFor(`!document.querySelector('[role=dialog]')`)
  await chooseTab(root, referrers ? 'Referrers' : 'Pages')
  result.visitorBreakdowns = true
}

async function checkOverviewMetrics(root) {
  const expected = async (selector, value) => {
    const present = await evaluate(`!!document.querySelector(${JSON.stringify(root + ' ' + selector)})`)
    if (present) await waitFor(`document.querySelector(${JSON.stringify(root + ' ' + selector)}).textContent.trim() === ${JSON.stringify(value)}`)
  }
  await expected('[data-overview-success]', '270')
  await expected('[data-overview-failed]', '6')
  await expected('[data-overview-average]', '260 ms')
  await expected('[data-overview-desktop]', '24,828')
  await expected('[data-overview-mobile]', '25,010')
  const visitorButton = root + ' button[aria-label="Show mobile visitors"]'
  if (await evaluate(`!!document.querySelector(${JSON.stringify(visitorButton)})`)) {
    const plot = root + ' svg[aria-label^="Desktop visitors per week"] polyline'
    const desktopPoints = await evaluate(`document.querySelector(${JSON.stringify(plot)}).getAttribute('points')`)
    await click(visitorButton)
    await waitFor(`document.querySelector(${JSON.stringify(root + ' svg[aria-label^="Mobile visitors per week"]')})`)
    const mobilePoints = await evaluate(`document.querySelector(${JSON.stringify(root + ' svg[aria-label^="Mobile visitors per week"] polyline')}).getAttribute('points')`)
    assert.notEqual(mobilePoints, desktopPoints, 'Device controls must change the visitor chart')
    await click(root + ' button[aria-label="Show desktop visitors"]')
  }
  await chooseOption(root + ' [aria-label="Overview environment"]', 'Development')
  await expected('[data-overview-success]', '66')
  await expected('[data-overview-failed]', '2')
  await expected('[data-overview-average]', '170 ms')
  await expected('[data-overview-desktop]', '1,100')
  await expected('[data-overview-mobile]', '860')
  await chooseOption(root + ' [aria-label="Overview time period"]', 'Last 3 weeks')
  await expected('[data-overview-success]', '43')
  await expected('[data-overview-average]', '153 ms')
  await chooseOption(root + ' [aria-label="Overview environment"]', 'Production')
  await expected('[data-overview-success]', '176')
  await expected('[data-overview-failed]', '4')
  await expected('[data-overview-average]', '187 ms')
  await expected('[data-overview-desktop]', '13,528')
  await expected('[data-overview-mobile]', '13,610')
  assert.equal(await evaluate(`[...document.querySelectorAll(${JSON.stringify(root + ' svg')})].every(svg => svg.querySelectorAll('circle').length === 3)`), true, 'Period selector must update every chart series')
  await chooseOption(root + ' [aria-label="Overview time period"]', 'All 6 weeks')
  result.overviewMetrics = { environment: true, period: true, totals: true, deviceSeries: true }
}

async function checkWorkspaceIssues(root) {
  const rows = `document.querySelectorAll(${JSON.stringify(root + ' tbody tr')}).length`
  await waitFor(`${rows} === 8`)
  await chooseTab(root, 'Assigned to me')
  await waitFor(`${rows} === 2`)
  await chooseTab(root, 'Reported by me')
  await waitFor(`${rows} === 4`)
  await chooseTab(root, 'Watching')
  await waitFor(`${rows} === 6`)
  await chooseTab(root, 'Updates')
  await waitFor(`document.querySelectorAll(${JSON.stringify(root + ' [aria-label="Workspace issue updates"] > li')}).length === 2`)
  await chooseTab(root, 'Overview')
  await setInput(root + ' input[aria-label="Search workspace issues"]', 'RFC-103')
  await waitFor(`${rows} === 1`)
  await setInput(root + ' input[aria-label="Search workspace issues"]', 'no-matching-issue')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('No issues match your filters.')`)
  await setInput(root + ' input[aria-label="Search workspace issues"]', '')
  await chooseOption(root + ' [aria-label="Workspace issue status"]', 'Review')
  await waitFor(`${rows} === 2`)
  await chooseOption(root + ' [aria-label="Workspace issue status"]', 'All statuses')
  await click(root + ' button[aria-label="Sort workspace issues"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' tbody tr')}).textContent.includes('RFC-108')`)
  await click(root + ' button[aria-label="Edit RFC-102"]')
  await waitFor(`document.querySelector('input[name="workspaceIssueTitle"]')?.value === 'Review gantt interaction states'`)
  await setInput('input[name="workspaceIssueTitle"]', '')
  await click('button[aria-label="Save workspace issue changes"]')
  await waitFor(`document.querySelector('[role=dialog]')?.textContent.includes('Enter an issue title.')`)
  await setInput('input[name="workspaceIssueTitle"]', 'Reviewed gantt interactions')
  await chooseOption('[aria-label="Edited issue status"]', 'Done')
  await chooseOption('[aria-label="Edited issue assignee"]', 'Nina Oliver')
  await click('button[aria-label="Save workspace issue changes"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root)}).textContent.includes('Reviewed gantt interactions')`)
  await chooseTab(root, 'Assigned to me')
  await waitFor(`${rows} === 3`)
  await chooseTab(root, 'Updates')
  await waitFor(`document.querySelectorAll(${JSON.stringify(root + ' [aria-label="Workspace issue updates"] > li')}).length === 3`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root + ' [aria-label="Workspace issue updates"] > li')}).textContent.includes('RFC-102')`))
  await chooseTab(root, 'Overview')
  const statusSelector = '[data-workspace-status="Done"]'
  if (await evaluate(`!!document.querySelector(${JSON.stringify(statusSelector)})`)) {
    assert.equal(await evaluate(`document.querySelector(${JSON.stringify(statusSelector)}).textContent.trim()`), '2', 'Issue status summary updates with edited rows')
  }
  result.workspaceIssues = { views: true, filters: true, sorting: true, validation: true, correctRow: true, localSave: true, updates: true }
}
async function checkWorkspaceHours(root) {
  await waitFor(`document.querySelector(${JSON.stringify(root + ' [data-work-total]')}).textContent === '38 hours · 12 mins'`)
  const initial = await evaluate(`document.querySelector(${JSON.stringify(root + ' svg polyline')}).getAttribute('points')`)
  await click(root + ' button[aria-label="Work history 2W"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' [data-work-total]')}).textContent === '74 hours · 12 mins'`)
  assert.notEqual(await evaluate(`document.querySelector(${JSON.stringify(root + ' svg polyline')}).getAttribute('points')`), initial)
  await click(root + ' button[aria-label="Work history 1Y"]')
  await waitFor(`document.querySelectorAll(${JSON.stringify(root + ' svg circle')}).length === 4`)
  await click(root + ' button[aria-label="Work history 5D"]')
  result.workspaceHours = true
}
async function checkWorkspaceTimer(root) {
  const display = `document.querySelector(${JSON.stringify(root + ' [data-work-timer]')}).textContent`
  await click(root + ' button[aria-label="Toggle workspace timer"]')
  await waitFor(`${display} !== '00:00:00'`)
  await click(root + ' button[aria-label="Toggle workspace timer"]')
  const paused = await evaluate(display)
  await evaluate('new Promise(resolve => setTimeout(resolve, 1100))')
  assert.equal(await evaluate(display), paused, 'Paused timer must not continue counting')
  await click(root + ' button[aria-label="Toggle workspace timer"]')
  await waitFor(`${display} !== ${JSON.stringify(paused)}`)
  await click(root + ' button[aria-label="Reset workspace timer"]')
  await waitFor(`${display} === '00:00:00'`)
  await chooseOption(root + ' [aria-label="Tracked issue"]', 'RFC-102 · Review gantt interaction states')
  result.workspaceTimer = { start: true, pause: true, resume: true, reset: true, issueSelection: true }
}
async function checkWorkspacePanel(root) {
  await chooseTab(root, 'Events')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('Product demo')`)
  await chooseTab(root, 'Focus')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('Architecture focus block')`)
  await chooseTab(root, 'Meetings')
  await click(root + ' button[aria-label="Toggle Timeline planning review details"]')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('Example Google Meet room')`)
  await click(root + ' button[aria-label="Edit workspace profile"]')
  await setInput('input[name="workspaceProfileEmail"]', 'invalid-email')
  await click('button[aria-label="Save workspace profile changes"]')
  await waitFor(`document.querySelector('[role=dialog]')?.textContent.includes('Enter a valid example email address.')`)
  await setInput('input[name="workspaceProfileEmail"]', 'nina.updated@example.com')
  await setInput('input[name="workspaceProfileName"]', 'Nina Updated')
  await chooseOption('[aria-label="Workspace profile timezone"]', 'Europe/London')
  await screenshot('workspace-profile-edit.png')
  await click('button[aria-label="Save workspace profile changes"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root)}).textContent.includes('Nina Updated')`)
  result.workspacePanel = { distinctTabs: true, expandDetails: true, validation: true, profileSave: true }
}

async function checkPlanningActions(root) {
  for (const kind of ['issue', 'milestone', 'sprint', 'project']) {
    await click(root + ` button[aria-label="Create demo ${kind}"]`)
    await click('button[aria-label="Save planning record"]')
    await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Enter a name for this record.')`)
    await setInput('input[name="planningRecordName"]', `Portable ${kind}`)
    if (kind === 'issue') {
      await setInput('[aria-label="Planning record end"]', '2026-04-14')
      await click('button[aria-label="Save planning record"]')
      await waitFor(`document.querySelector('[role=dialog]').textContent.includes('end date must be on or after')`)
      await setInput('[aria-label="Planning record end"]', '2026-04-20')
    }
    await click('button[aria-label="Save planning record"]')
    await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root)}).textContent.includes(${JSON.stringify(`“Portable ${kind}” created locally.`)})`)
  }
  result.planningActions = { issue: true, milestone: true, sprint: true, project: true, validation: true }
}
async function checkPlanningMap(root) {
  const count = `document.querySelectorAll(${JSON.stringify(root + ' [data-issue-map-row]')}).length`
  await waitFor(`${count} === 2`)
  const initial = await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-issue-map-row="RFC-103"] button')}).getAttribute('style')`)
  await chooseTab(root, 'Month')
  await waitFor(`${count} === 6`)
  assert.notEqual(await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-issue-map-row="RFC-103"] button')}).getAttribute('style')`), initial, 'Range changes must reposition timeline bars')
  await chooseTab(root, 'Quarter')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('2026-06-30')`)
  await click(root + ' button[aria-label="Open RFC-102 timeline details"]')
  await waitFor(`document.querySelector('[role=dialog]')?.textContent.includes('Review gantt interaction states')`)
  assert.equal(await evaluate(`document.querySelectorAll('[role=dialog] input, [role=dialog] textarea').length`), 0)
  await click('button[aria-label="Close timeline issue details"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  await chooseTab(root, 'Week')
  result.planningMap = { ranges: true, clipping: true, correctDetails: true }
}
async function checkCurrentProjects(root) {
  const count = `document.querySelectorAll(${JSON.stringify(root + ' [data-planning-project]')}).length`
  const before = await evaluate(count)
  await setInput(root + ' input[aria-label="Search current projects"]', 'ONB-118')
  await waitFor(`${count} === 1`)
  await click(root + ' button[aria-label="Open ONB-118 project details"]')
  await waitFor(`document.querySelector('[role=dialog]')?.textContent.includes('Cameron Williamson')`)
  assert.ok(await evaluate(`document.querySelector('[role=dialog]').textContent.includes('Enterprise Onboarding Flow')`))
  await click('button[aria-label="Close current project details"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  await setInput(root + ' input[aria-label="Search current projects"]', 'does-not-exist')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('No projects match your search.')`)
  await setInput(root + ' input[aria-label="Search current projects"]', '')
  await click(root + ' button[aria-label="Add current demo project"]')
  await setInput('input[name="planningRecordName"]', 'Portable additional project')
  await click('button[aria-label="Save planning record"]')
  await waitFor(`!document.querySelector('[role=dialog]') && ${count} === ${before + 1}`)
  result.currentProjects = { search: true, details: true, creation: true }
}
async function checkPlanningNotes(root) {
  await click(root + ' [aria-label="Complete note 1"]')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('3 of 3 notes complete')`)
  await click(root + ' button[aria-label="Add planning note"]')
  await click('button[aria-label="Save planning note"]')
  await waitFor(`document.querySelector('[role=dialog]')?.textContent.includes('Enter a note title.')`)
  await setInput('input[name="planningNoteTitle"]', 'Portable planning note')
  await setInput('textarea[name="planningNoteDescription"]', 'Local notes test')
  await click('button[aria-label="Save planning note"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root)}).textContent.includes('3 of 4 notes complete')`)
  result.planningNotes = { completion: true, validation: true, creation: true }
}
async function checkPlanningMembers(root) {
  await click(root + ' button[aria-label="Add planning demo member"]')
  await click('button[aria-label="Save demo member"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Enter a member name.')`)
  await setInput('input[name="planningMemberName"]', 'Portable member')
  await setInput('input[name="planningMemberEmail"]', 'kiara@example.com')
  await click('button[aria-label="Save demo member"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('already belongs to a demo member')`)
  await setInput('input[name="planningMemberEmail"]', 'portable@example.com')
  await chooseOption('[aria-label="Demo member role"]', 'Editor')
  await click('button[aria-label="Save demo member"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root)}).textContent.includes('Portable member added locally. No invitation was sent.')`)
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' ul > li')}).length`), 6)
  result.planningMembers = { validation: true, duplicates: true, localAdd: true }
}
async function checkPlanningActivity(root) {
  await click(root + ' button[aria-label="Open planning activity log"]')
  await waitFor(`document.querySelector('[role=dialog]')?.textContent.includes('Checkout flow screens moved to review')`)
  await click('button[aria-label="Close planning activity log"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  await click(root + ' button[aria-label="Open planning notifications"]')
  await click('button[aria-label="Mark planning notifications read"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('No unread demo notifications.')`)
  await click('button[aria-label="Close planning notifications"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  result.planningActivity = true
}
async function checkPlanningMilestones(root) {
  await chooseOption(root + ' [aria-label="Milestone history range"]', '1 Year')
  await waitFor(`document.querySelectorAll(${JSON.stringify(root + ' svg rect')}).length === 24`)
  await chooseOption(root + ' [aria-label="Milestone history range"]', '3 Months')
  await waitFor(`document.querySelectorAll(${JSON.stringify(root + ' svg rect')}).length === 6`)
  await chooseOption(root + ' [aria-label="Milestone history range"]', '1 Month')
  await waitFor(`document.querySelectorAll(${JSON.stringify(root + ' svg rect')}).length === 2`)
  result.planningMilestones = true
}

async function checkCustomerCreation(root) {
  const text = `document.querySelector(${JSON.stringify(root)}).textContent`
  await click(root + ' button[aria-label="Submit demo customer"]')
  await waitFor(`${text}.includes('Enter a first name.')`)
  await setInput(root + ' input[name="customerFirstName"]', 'Portable')
  await setInput(root + ' input[name="customerLastName"]', 'Customer')
  await setInput(root + ' input[name="customerContactEmail0"]', 'invalid-email')
  await click(root + ' button[aria-label="Submit demo customer"]')
  await waitFor(`${text}.includes('Enter a valid example email address.')`)
  await setInput(root + ' input[name="customerContactEmail0"]', 'portable@example.com')
  await click(root + ' button[aria-label="Add customer contact"]')
  await waitFor(`document.querySelectorAll(${JSON.stringify(root + ' [data-customer-contact]')}).length === 2`)
  await setInput(root + ' input[name="customerContactEmail1"]', 'secondary@example.com')
  const contactId = await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-customer-contact]')})[1].dataset.customerContact`)
  await click(root + ` button[aria-label="Remove customer contact ${contactId}"]`)
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(root + ' button[aria-label="Remove customer contact 1"]')}).disabled`), true)
  await chooseOption(root + ' [aria-label="Customer preferred channel"]', 'SMS')
  await click(root + ' button[aria-label="Submit demo customer"]')
  await waitFor(`${text}.includes('A phone number is required for SMS or Phone.')`)
  await setInput(root + ' input[name="customerContactPhone0"]', '+1 206 555 0198')
  await chooseOption(root + ' [aria-label="Customer preferred channel"]', 'Email')
  await setInput(root + ' input[name="customerBillingstreet"]', '123 Demo Street')
  await click(root + ' button[aria-label="Submit demo customer"]')
  await waitFor(`${text}.includes('Complete this address field')`)
  await setInput(root + ' input[name="customerBillingcity"]', 'Seattle')
  await setInput(root + ' input[name="customerBillingpostalCode"]', '98102')
  await click(root + ' button[aria-label="Add customer shipping"]')
  const shippingId = await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-customer-shipping]')})[1].dataset.customerShipping`)
  await click(root + ` button[aria-label="Remove customer shipping ${shippingId}"]`)
  await setInput(root + ' input[name="customerShipping0street"]', '456 Example Avenue')
  await setInput(root + ' input[name="customerShipping0city"]', 'Seattle')
  await setInput(root + ' input[name="customerShipping0postalCode"]', '98102')
  await click(root + ' button[aria-label="Add customer demo card"]')
  await setInput(root + ' input[name="customerCardLast40"]', 'abcd')
  await setInput(root + ' input[name="customerCardExpiry0"]', '13/28')
  await setInput(root + ' input[name="customerCardHolder0"]', 'Portable Customer')
  await click(root + ' button[aria-label="Submit demo customer"]')
  await waitFor(`${text}.includes('Enter exactly four demonstration digits.') && ${text}.includes('Use MM/YY with a valid month.')`)
  await setInput(root + ' input[name="customerCardLast40"]', '4242')
  await setInput(root + ' input[name="customerCardExpiry0"]', '08/28')
  await click(root + ' button[aria-label="Add customer demo card"]')
  await setInput(root + ' input[name="customerCardLast41"]', '1034')
  await setInput(root + ' input[name="customerCardExpiry1"]', '03/29')
  await setInput(root + ' input[name="customerCardHolder1"]', 'Portable Customer')
  const cardId = await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-customer-card]')})[1].dataset.customerCard`)
  await click(root + ` button[aria-label="Set customer card ${cardId} default"]`)
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(root + ` button[aria-label="Set customer card ${cardId} default"]`)}).disabled`), true)
  await click(root + ` button[aria-label="Remove customer card ${cardId}"]`)
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-customer-card] button[aria-label^="Set customer card"]')}).disabled`), true, 'Removing the preferred card selects the remaining card')
  await click(root + ' button[aria-label="Go to customer preferences"]')
  await waitFor(`document.activeElement?.id.endsWith('-preferences')`)
  await setInput(root + ' input[name="customerSegment"]', 'VIP')
  await click(root + ' button[aria-label="Add customer segment"]')
  await setInput(root + ' input[name="customerSegment"]', 'vip')
  await click(root + ' button[aria-label="Add customer segment"]')
  await waitFor(`${text}.includes('This segment already exists.')`)
  await click(root + ' button[aria-label="Remove customer segment VIP"]')
  await setInput(root + ' input[name="customerSegment"]', 'High retention')
  await click(root + ' button[aria-label="Add customer segment"]')
  await click(root + ' button[role="switch"]')
  await click(root + ' button[aria-label="Save customer draft"]')
  await setInput(root + ' input[name="customerFirstName"]', 'Unsaved change')
  await click(root + ' button[aria-label="Reset customer form"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' input[name="customerFirstName"]')}).value === ''`)
  await click(root + ' button[aria-label="Restore customer draft"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' input[name="customerFirstName"]')}).value === 'Portable'`)
  await click(root + ' button[aria-label="Submit demo customer"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' [data-customer-snapshot]')})`)
  const customer = JSON.parse(await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-customer-snapshot]')}).textContent`))
  assert.equal(customer.firstName, 'Portable')
  assert.equal(customer.contacts.length, 1)
  assert.equal(customer.shipping.length, 1)
  assert.equal(customer.cards.length, 1)
  assert.equal(customer.defaultCardId, customer.cards[0].id)
  assert.equal(customer.marketingOptIn, true)
  assert.deepEqual(customer.segments, ['High retention'])
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' form form')}).length`), 0, 'Customer editor must not nest forms')
  result.customerCreation = { validation: true, contacts: true, addresses: true, cardMetadata: true, singleDefaultCard: true, segments: true, navigation: true, draft: true, reset: true, localPreview: true }
}

async function checkCustomerEditing(root) {
  const text = `document.querySelector(${JSON.stringify(root)}).textContent`
  const submit = root + ' button[aria-label="Submit demo customer"]'
  const firstName = root + ' input[name="customerFirstName"]'
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(firstName)}).value`), 'Theo')
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(submit)}).disabled`), true, 'Unchanged record must not report a save')
  assert.equal(await evaluate(`document.querySelector('input[aria-label="Immutable demo customer ID"]').readOnly`), true)
  await setInput(firstName, '')
  await click(submit)
  await waitFor(`${text}.includes('Enter a first name.')`)
  await setInput(firstName, 'Theo Updated')
  await setInput(root + ' input[name="customerContactEmail0"]', 'invalid-email')
  await click(submit)
  await waitFor(`${text}.includes('Enter a valid example email address.')`)
  await setInput(root + ' input[name="customerContactEmail0"]', 'theo.updated@example.com')
  await click(root + ' button[aria-label="Add customer contact"]')
  await waitFor(`document.querySelectorAll(${JSON.stringify(root + ' [data-customer-contact]')}).length === 2`)
  await setInput(root + ' input[name="customerContactEmail1"]', 'secondary@example.com')
  const contactId = await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-customer-contact]')})[1].dataset.customerContact`)
  await click(root + ` button[aria-label="Remove customer contact ${contactId}"]`)
  await click(root + ' button[aria-label="Add customer shipping"]')
  const addressId = await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-customer-shipping]')})[1].dataset.customerShipping`)
  await click(root + ` button[aria-label="Remove customer shipping ${addressId}"]`)
  await click(root + ' button[aria-label="Set customer card 2 default"]')
  await click(root + ' button[aria-label="Remove customer card 2"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' button[aria-label="Set customer card 1 default"]')}).disabled`)
  await click(root + ' button[aria-label="Add customer demo card"]')
  await setInput(root + ' input[name="customerCardLast41"]', 'abcd')
  await setInput(root + ' input[name="customerCardExpiry1"]', '00/29')
  await setInput(root + ' input[name="customerCardHolder1"]', 'Theo Updated')
  await click(submit)
  await waitFor(`${text}.includes('Enter exactly four demonstration digits.') && ${text}.includes('Use MM/YY with a valid month.')`)
  await setInput(root + ' input[name="customerCardLast41"]', '9000')
  await setInput(root + ' input[name="customerCardExpiry1"]', '07/30')
  const newCardId = await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-customer-card]')})[1].dataset.customerCard`)
  assert.notEqual(newCardId, '1', 'New rows must not reuse existing card IDs')
  await click(root + ` button[aria-label="Set customer card ${newCardId} default"]`)
  await click(root + ' button[aria-label="Remove customer segment VIP"]')
  await setInput(root + ' input[name="customerSegment"]', 'SKINCARE ROUTINE')
  await click(root + ' button[aria-label="Add customer segment"]')
  await waitFor(`${text}.includes('This segment already exists.')`)
  await setInput(root + ' input[name="customerSegment"]', 'Portable segment')
  await click(root + ' button[aria-label="Add customer segment"]')
  await chooseOption(root + ' [aria-label="Customer account status"]', 'Active')
  await click(root + ' button[role="switch"]')
  await setInput(root + ' textarea[name="customerNotes"]', 'Updated local example notes')
  await click(root + ' button[aria-label="Save customer draft"]')
  await setInput(firstName, 'Unsaved change')
  await click(root + ' button[aria-label="Reset customer form"]')
  await waitFor(`document.querySelector(${JSON.stringify(firstName)}).value === 'Theo'`)
  await click(root + ' button[aria-label="Restore customer draft"]')
  await waitFor(`document.querySelector(${JSON.stringify(firstName)}).value === 'Theo Updated'`)
  await click(submit)
  await waitFor(`document.querySelector(${JSON.stringify(root + ' [data-customer-snapshot]')})`)
  const customer = JSON.parse(await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-customer-snapshot]')}).textContent`))
  assert.equal(customer.customerId, 'CUS-1742')
  assert.equal(customer.firstName, 'Theo Updated')
  assert.equal(customer.cards.length, 2)
  assert.equal(customer.defaultCardId, Number(newCardId))
  assert.equal(customer.cards[1].last4, '9000')
  assert.equal(customer.marketingOptIn, false)
  assert.ok(customer.segments.includes('Portable segment') && !customer.segments.includes('VIP'))
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(submit)}).disabled`), true)
  await setInput(firstName, 'Later unsaved change')
  await click(root + ' button[aria-label="Reset customer form"]')
  await waitFor(`document.querySelector(${JSON.stringify(firstName)}).value === 'Theo Updated'`)
  result.customerEditing = { immutableId: true, validation: true, collections: true, singleDefaultCard: true, segments: true, draft: true, latestSavedReset: true, localSave: true }
}

async function checkCommandPortfolio(root) {
  const selected = `document.querySelector(${JSON.stringify(root + ' [data-command-selected]')}).textContent`
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-command-summary]')}).textContent.includes('$8,700,000 / $14,100,000')`))
  await click(root + ' [aria-label="Refresh command summary"]')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('no server was contacted')`)
  await chooseOption(root + ' [aria-label="Command selected project"]', 'Public API v1')
  await waitFor(`${selected}.includes('Off Track') && ${selected}.includes('Ben Lewis')`)
  await click(root + ' [aria-label="Browse command projects"]')
  await waitFor(`document.querySelector('input[name="commandProjectSearch"]')`)
  await setInput('input[name="commandProjectSearch"]', '  ONB-118  ')
  await waitFor(`document.querySelector('[data-command-project-count]').textContent.startsWith('1 of 4')`)
  await click('[aria-label="Select command project ONB-118"]')
  await waitFor(`!document.querySelector('[role=dialog]') && ${selected}.includes('Onboarding flow launch') && ${selected}.includes('Riya Sharma')`)
  await click(root + ' [aria-label="Browse command projects"]')
  await waitFor(`document.querySelector('input[name="commandProjectSearch"]')`)
  await setInput('input[name="commandProjectSearch"]', 'not-present')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('No projects match')`)
  await click('[aria-label="Close command project browser"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
  result.commandPortfolio = { calculatedBudget: true, projectSelection: true, idSearch: true, emptyResults: true, localRefresh: true }
}

async function checkCommandSprint(root) {
  const total = `document.querySelector(${JSON.stringify(root + ' [data-command-sprint-total]')}).textContent`
  assert.ok(await evaluate(`${total}.includes('32 / 47 points · 68%')`))
  const points = await evaluate(`document.querySelector(${JSON.stringify(root + ' polyline')}).getAttribute('points')`)
  await chooseOption(root + ' [aria-label="Command sprint period"]', 'Previous sprint')
  await waitFor(`${total}.includes('40 / 44 points · 91%')`)
  assert.notEqual(await evaluate(`document.querySelector(${JSON.stringify(root + ' polyline')}).getAttribute('points')`), points)
  await click(root + ' summary')
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' tbody tr')}).length`), 7)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root + ' tbody tr:last-child')}).textContent.includes('40') && document.querySelector(${JSON.stringify(root + ' tbody tr:last-child')}).textContent.includes('44')`))
  await chooseOption(root + ' [aria-label="Command sprint period"]', 'This sprint')
  result.commandSprint = { periodSwitch: true, calculatedProgress: true, dynamicSvg: true, accessibleData: true, noPrinting: true }
}

async function checkCommandBudget(root) {
  const total = `document.querySelector(${JSON.stringify(root + ' [data-command-budget-total]')}).textContent`
  assert.ok(await evaluate(`${total}.includes('$8,700,000 / $14,100,000 USD · 62%')`))
  const points = await evaluate(`document.querySelector(${JSON.stringify(root + ' polyline')}).getAttribute('points')`)
  await chooseOption(root + ' [aria-label="Command fiscal year"]', 'FY2025')
  await waitFor(`${total}.includes('$7,200,000 / $12,000,000 USD · 60%')`)
  assert.notEqual(await evaluate(`document.querySelector(${JSON.stringify(root + ' polyline')}).getAttribute('points')`), points)
  await click(root + ' summary')
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' tbody tr')}).length`), 9)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root + ' tbody tr:last-child')}).textContent.includes('Forecast') && document.querySelector(${JSON.stringify(root + ' tbody tr:last-child')}).textContent.includes('$11,400,000')`))
  await chooseOption(root + ' [aria-label="Command fiscal year"]', 'FY2026')
  result.commandBudget = { fiscalYears: true, calculatedBurn: true, dynamicSvg: true, actualVsForecast: true, accessibleData: true }
}

async function checkCommandMilestones(root) {
  const count = `document.querySelector(${JSON.stringify(root + ' [data-command-milestone-count]')}).textContent`
  await waitFor(`${count}.startsWith('3 shown')`)
  await click(root + ' [aria-label="Toggle all command milestones"]')
  await waitFor(`${count}.startsWith('5 shown')`)
  await chooseOption(root + ' [aria-label="Command milestone status"]', 'At Risk')
  await waitFor(`${count}.startsWith('2 shown')`)
  await click(root + ' [aria-label="View command milestone ONB-118"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('invite-step blocker')`)
  await chooseOption('[aria-label="Command milestone draft status"]', 'Completed')
  await click('[aria-label="Cancel command milestone edit"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-command-milestone="ONB-118"]')}).textContent.includes('At Risk')`))
  await click(root + ' [aria-label="View command milestone ONB-118"]')
  await chooseOption('[aria-label="Command milestone draft status"]', 'Completed')
  await click('[aria-label="Save command milestone status"]')
  await waitFor(`!document.querySelector('[role=dialog]') && ${count}.startsWith('1 shown')`)
  await chooseOption(root + ' [aria-label="Command milestone status"]', 'Completed')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' [data-command-milestone="ONB-118"]')})`)
  await chooseOption(root + ' [aria-label="Command milestone status"]', 'All statuses')
  result.commandMilestones = { filters: true, showAll: true, correctRecord: true, cancel: true, localStatusSave: true }
}

async function checkCommandTeam(root) {
  const count = `document.querySelector(${JSON.stringify(root + ' [data-command-team-count]')}).textContent`
  await waitFor(`${count}.startsWith('8 of 8')`)
  await chooseOption(root + ' [aria-label="Command team status"]', 'Absent'); await waitFor(`${count}.startsWith('2 of 8')`)
  await chooseOption(root + ' [aria-label="Command team status"]', 'Invited'); await waitFor(`${count}.startsWith('0 of 8')`)
  await click(root + ' [aria-label="Open command invite preview"]')
  await waitFor(`document.querySelector('input[name="commandInviteName"]')`)
  await click('[aria-label="Save command invite preview"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('between 1 and 100')`)
  await setInput('input[name="commandInviteName"]', 'Local Teammate')
  await setInput('input[name="commandInviteEmail"]', 'invalid')
  await click('[aria-label="Save command invite preview"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('valid example email')`)
  await setInput('input[name="commandInviteEmail"]', 'KIARA@example.com')
  await click('[aria-label="Save command invite preview"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('already in the team')`)
  await click('[aria-label="Cancel command invite"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-command-member]')}).length`), 0)
  await click(root + ' [aria-label="Open command invite preview"]')
  await waitFor(`document.querySelector('input[name="commandInviteName"]')`)
  await setInput('input[name="commandInviteName"]', 'Local Teammate')
  await setInput('input[name="commandInviteEmail"]', 'local@example.com')
  await click('[aria-label="Save command invite preview"]')
  await waitFor(`!document.querySelector('[role=dialog]') && ${count}.startsWith('9 of 9')`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root)}).textContent.includes('no email was sent')`))
  await chooseOption(root + ' [aria-label="Command team status"]', 'Invited'); await waitFor(`${count}.startsWith('1 of 9')`)
  await chooseOption(root + ' [aria-label="Command team status"]', 'All statuses')
  result.commandTeam = { statusFilters: true, nameEmailValidation: true, duplicateEmail: true, cancel: true, localInvite: true, noDelivery: true }
}

async function checkCommandActivity(root) {
  const count = `document.querySelector(${JSON.stringify(root + ' [data-command-activity-count]')}).textContent`
  await waitFor(`${count}.startsWith('3 shown')`)
  await click(root + ' [aria-label="Toggle all command activity"]'); await waitFor(`${count}.startsWith('5 shown')`)
  await chooseOption(root + ' [aria-label="Command activity filter"]', 'Unread only'); await waitFor(`${count}.startsWith('2 shown')`)
  await click(root + ' [aria-label="View command activity RFC-112"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('review caching and query plans')`)
  await click('[aria-label="Close command activity"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
  await click(root + ' [aria-label="View command activity RFC-112"]')
  await click('[aria-label="Mark command activity read"]')
  await waitFor(`!document.querySelector('[role=dialog]') && ${count}.startsWith('1 shown')`)
  await click(root + ' [aria-label="View command activity RFC-126"]')
  await click('[aria-label="Mark command activity read"]')
  await waitFor(`!document.querySelector('[role=dialog]') && ${count}.startsWith('0 shown')`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root)}).textContent.includes('No activity matches')`))
  await chooseOption(root + ' [aria-label="Command activity filter"]', 'All activity')
  result.commandActivity = { showAll: true, correctEvent: true, readState: true, unreadFilter: true, emptyResults: true }
}

async function checkCommandThroughput(root) {
  const total = `document.querySelector(${JSON.stringify(root + ' [data-command-throughput-total]')}).textContent`
  assert.ok(await evaluate(`${total}.includes('100 completed / 118 planned issues · 85%')`))
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' svg rect')}).length`), 8)
  await chooseOption(root + ' [aria-label="Command throughput range"]', 'Last 8 weeks')
  await waitFor(`${total}.includes('180 completed / 208 planned issues · 87%')`)
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' svg rect')}).length`), 16)
  await click(root + ' summary')
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' tbody tr')}).length`), 8)
  await chooseOption(root + ' [aria-label="Command throughput range"]', 'Last 4 weeks')
  result.commandThroughput = { actualChart: true, ranges: true, calculatedTotals: true, accessibleData: true }
}

const commandBlockChecks = { 'command-portfolio': checkCommandPortfolio, 'command-sprint': checkCommandSprint, 'command-budget': checkCommandBudget, 'command-milestones': checkCommandMilestones, 'command-team': checkCommandTeam, 'command-activity': checkCommandActivity, 'command-throughput': checkCommandThroughput }

async function checkCustomerOverview(root) {
  const text = `document.querySelector(${JSON.stringify(root)}).textContent`
  const count = `document.querySelector(${JSON.stringify(root + ' [data-overview-count]')}).textContent`
  await waitFor(`${count}.startsWith('3 of 3')`)
  assert.ok(await evaluate(`${text}.includes('$20,820.00') && ${text}.includes('$2,880.00') && ${text}.includes('$1,840.00')`))
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-overview-subscription]')}).length`), 2)
  await chooseOption(root + ' [aria-label="Overview transaction status"]', 'Declined')
  await waitFor(`${count}.startsWith('1 of 3')`)
  await setInput(root + ' input[name="overviewTransactionSearch"]', 'Visa')
  await waitFor(`${count}.startsWith('0 of 3')`)
  await chooseOption(root + ' [aria-label="Overview transaction status"]', 'All statuses')
  await waitFor(`${count}.startsWith('1 of 3')`)
  await setInput(root + ' input[name="overviewTransactionSearch"]', '')
  await click(root + ' [aria-label="Edit overview customer profile"]')
  await waitFor(`document.querySelector('input[name="overviewCustomerName"]')`)
  await setInput('input[name="overviewCustomerName"]', '')
  await click('[aria-label="Save overview customer profile"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('between 1 and 100')`)
  await setInput('input[name="overviewCustomerName"]', 'Northstar Updated')
  await setInput('input[name="overviewCustomerEmail"]', 'invalid')
  await click('[aria-label="Save overview customer profile"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('valid example email')`)
  await click('[aria-label="Cancel overview customer edit"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
  assert.ok(await evaluate(`${text}.includes('Northstar Supply Co.') && !${text}.includes('Northstar Updated')`))
  await click(root + ' [aria-label="Edit overview customer profile"]')
  await waitFor(`document.querySelector('input[name="overviewCustomerName"]')`)
  await setInput('input[name="overviewCustomerName"]', 'Northstar Updated')
  await setInput('input[name="overviewCustomerEmail"]', 'updated@example.com')
  await click('[aria-label="Save overview customer profile"]')
  await waitFor(`!document.querySelector('[role=dialog]') && ${text}.includes('Northstar Updated')`)
  assert.ok(await evaluate(`${text}.includes('cus_0Nc5kjuQhtcEhS2p6SOxz') && ${text}.includes('updated@example.com') && ${text}.includes('$20,820.00')`))
  await click(root + ' [aria-label="Remove overview demo customer"]')
  await waitFor(`document.querySelector('input[name="overviewDeleteConfirmation"]')`)
  assert.equal(await evaluate(`document.querySelector('[aria-label="Confirm overview customer removal"]').disabled`), true)
  await setInput('input[name="overviewDeleteConfirmation"]', 'wrong-id')
  assert.equal(await evaluate(`document.querySelector('[aria-label="Confirm overview customer removal"]').disabled`), true)
  await click('[aria-label="Cancel overview customer removal"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
  assert.ok(await evaluate(`${text}.includes('Northstar Updated')`))
  await click(root + ' [aria-label="Remove overview demo customer"]')
  await waitFor(`document.querySelector('input[name="overviewDeleteConfirmation"]')`)
  await setInput('input[name="overviewDeleteConfirmation"]', 'cus_0Nc5kjuQhtcEhS2p6SOxz')
  await click('[aria-label="Confirm overview customer removal"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root + ' [data-overview-removed]')})`)
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-overview-transaction], ' + root + ' [data-overview-subscription], ' + root + ' [data-overview-summary]')}).length`), 0)
  await click(root + ' [aria-label="Restore overview customer demo"]')
  await waitFor(`${count}.startsWith('3 of 3') && ${text}.includes('Northstar Supply Co.')`)
  assert.equal(await evaluate(`${text}.includes('updated@example.com')`), false)
  result.customerOverview = { accurateTotals: true, transactionFilters: true, validatedProfile: true, immutableId: true, cancellation: true, typedRemoval: true, coherentClearing: true, freshRestore: true }
}

async function checkSubscriptionProfile(root) {
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root)}).textContent.includes('$40,800.00') && document.querySelector(${JSON.stringify(root)}).textContent.includes('$3,070.00')`))
  await click(root + ' [aria-label="Edit subscription customer profile"]')
  await waitFor(`document.querySelector('input[name="subscriptionCustomerName"]')`)
  await setInput('input[name="subscriptionCustomerName"]', '')
  await click('[aria-label="Save subscription customer profile"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Enter a company name')`)
  await setInput('input[name="subscriptionCustomerName"]', 'Northstar Local')
  await setInput('input[name="subscriptionCustomerEmail"]', 'invalid')
  await click('[aria-label="Save subscription customer profile"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('valid example email')`)
  await setInput('input[name="subscriptionCustomerEmail"]', 'local@example.com')
  await setInput('input[name="subscriptionCustomerPhone"]', 'abc')
  await click('[aria-label="Save subscription customer profile"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('valid demo phone')`)
  await click('[aria-label="Cancel subscription customer profile"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-subscription-name]')}).textContent.includes('Northstar Supply Co.')`))
  await click(root + ' [aria-label="Edit subscription customer profile"]')
  await waitFor(`document.querySelector('input[name="subscriptionCustomerName"]')`)
  await setInput('input[name="subscriptionCustomerName"]', 'Northstar Local')
  await setInput('input[name="subscriptionCustomerEmail"]', 'local@example.com')
  await setInput('input[name="subscriptionCustomerPhone"]', '')
  await click('[aria-label="Save subscription customer profile"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root)}).textContent.includes('Northstar Local')`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root)}).textContent.includes('Not provided') && document.querySelector(${JSON.stringify(root)}).textContent.includes('cus_9Kx41L')`))
  result.subscriptionProfile = { calculatedBalances: true, validatedEditing: true, cancellation: true, immutableId: true, optionalPhone: true, localSave: true }
}

async function checkSubscriptionLedger(root, standalone = false) {
  const count = `document.querySelector(${JSON.stringify(root + ' [data-subscription-count]')}).textContent`
  await waitFor(`${count}.startsWith('7 of 7')`)
  await chooseOption(root + ' [aria-label="Subscription invoice status"]', 'Open'); await waitFor(`${count}.startsWith('2 of 7')`)
  await chooseOption(root + ' [aria-label="Subscription invoice status"]', 'Paid'); await waitFor(`${count}.startsWith('4 of 7')`)
  await chooseOption(root + ' [aria-label="Subscription invoice status"]', 'Overdue'); await waitFor(`${count}.startsWith('1 of 7')`)
  await click(root + ' [aria-label="View subscription invoice INV-20198"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('$480.00 + $9,000.00 = $9,480.00')`)
  assert.ok(await evaluate(`document.querySelector('[role=dialog]').textContent.includes('Product design sprint') && document.querySelector('[role=dialog]').textContent.includes('Jun 28, 2026')`))
  await click('[aria-label="Close subscription invoice details"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
  const downloadPath = resolve(profile, standalone ? 'paste-subscription-csv' : 'catalog-subscription-csv')
  await mkdir(downloadPath, { recursive: true }); await send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath }, null)
  await click(root + ' [aria-label="Download demo CSV INV-20198"]')
  const csvPath = resolve(downloadPath, 'INV-20198-demo.csv'), deadline = Date.now() + 10000
  while (!existsSync(csvPath)) { assert.ok(Date.now() < deadline, 'Subscription CSV download timed out'); await new Promise(resolve => setTimeout(resolve, 50)) }
  const csv = await readFile(csvPath, 'utf8')
  assert.equal(csv.split('\r\n').length, 2)
  assert.ok(csv.includes('INV-20198') && csv.includes('Product design sprint') && csv.includes('"9480"') && !csv.includes('INV-20486'))
  await send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: profile }, null)
  await click(root + ' [aria-label="Reset subscription invoice filters"]')
  await click(root + ' [aria-label="Sort subscription invoices by amount"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' [data-subscription-group="retainer"] [data-subscription-invoice]')}).textContent.includes('INV-19890')`)
  await click(root + ' [aria-label="Sort subscription invoices by amount"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' [data-subscription-group="retainer"] [data-subscription-invoice]')}).textContent.includes('INV-20041')`)
  await setInput(root + ' input[name="subscriptionInvoiceSearch"]', '  Brand identity  ')
  await waitFor(`${count}.startsWith('2 of 7')`)
  await setInput(root + ' input[name="subscriptionInvoiceSearch"]', 'not-present')
  await waitFor(`${count}.startsWith('0 of 7')`)
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-subscription-invoice]')}).length`), 0)
  await click(root + ' [aria-label="Reset subscription invoice filters"]')
  result.subscriptionLedger = { groups: true, filters: true, numericSort: true, correctInvoice: true, amountBreakdown: true, actualCsv: true, emptyResults: true }
}

async function checkBillingPlan(root) {
  await click(root + ' [aria-label="Edit demo billing plan"]')
  await setInput('input[name="billingMembers"]', '0')
  await click('[aria-label="Save demo billing plan"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('between 1 and 100')`)
  await setInput('input[name="billingMembers"]', '12.5')
  await click('[aria-label="Save demo billing plan"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('whole number')`)
  await chooseOption('[aria-label="Demo billing plan"]', 'Team Standard')
  await chooseOption('[aria-label="Demo billing cycle"]', 'Annual')
  await setInput('input[name="billingMembers"]', '20')
  await click('[aria-label="Cancel demo billing plan"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-billing-plan]')}).textContent.includes('Team Premium')`))
  await click(root + ' [aria-label="Edit demo billing plan"]')
  await chooseOption('[aria-label="Demo billing plan"]', 'Team Standard')
  await chooseOption('[aria-label="Demo billing cycle"]', 'Annual')
  await setInput('input[name="billingMembers"]', '20')
  await click('[aria-label="Save demo billing plan"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root + ' [data-billing-price]')}).textContent.includes('$600.00')`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root)}).textContent.includes('20 members') && document.querySelector(${JSON.stringify(root)}).textContent.includes('December 20, 2027')`))
  result.billingPlan = { validation: true, cancellation: true, localSave: true, computedPricing: true, datesUTC: true }
}

async function checkBillingCards(root) {
  const rows = root + ' [data-billing-card]'
  await click(root + ' [aria-label="Add demo billing card"]')
  await setInput('input[name="billingCardLast4"]', '123')
  await click('[aria-label="Save demo billing card"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('exactly four digits')`)
  await setInput('input[name="billingCardLast4"]', '9862')
  await click('[aria-label="Save demo billing card"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('already exists')`)
  await setInput('input[name="billingCardLast4"]', '9000')
  await setInput('input[name="billingCardExpiry"]', '2026-11')
  await click('[aria-label="Save demo billing card"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('on or after December 2026')`)
  await setInput('input[name="billingCardExpiry"]', '2031-01')
  await click('[role=dialog] [role=checkbox]')
  await click('[aria-label="Save demo billing card"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelectorAll(${JSON.stringify(rows)}).length === 4`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-billing-card="4"]')}).textContent.includes('Default')`))
  assert.equal(await evaluate(`[...document.querySelectorAll(${JSON.stringify(rows)})].filter(row => row.textContent.includes('Default')).length`), 1)
  await click(root + ' [aria-label="Manage demo billing card 2"]')
  await waitFor(`document.querySelector('input[name="billingCardLast4"]').value === '7299'`)
  await setInput('input[name="billingCardLast4"]', '1111')
  await click('[aria-label="Cancel demo billing card"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-billing-card="2"]')}).textContent.includes('7299')`))
  await click(root + ' [aria-label="Manage demo billing card 4"]')
  await click('[aria-label="Remove demo billing card"]')
  await click('[aria-label="Cancel demo billing card"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(rows)}).length`), 4)
  await click(root + ' [aria-label="Manage demo billing card 4"]')
  await click('[aria-label="Remove demo billing card"]')
  await click('[aria-label="Confirm demo billing card removal"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelectorAll(${JSON.stringify(rows)}).length === 3`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-billing-card="1"]')}).textContent.includes('Default')`))
  result.billingCards = { lastFourOnly: true, duplicateValidation: true, expiryValidation: true, uniqueDefault: true, correctCard: true, cancellation: true, confirmedRemoval: true }
}

async function checkBillingInvoices(root) {
  const count = `document.querySelector(${JSON.stringify(root + ' [data-billing-invoice-count]')}).textContent`
  await waitFor(`${count}.startsWith('5 of 5')`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root)}).textContent.includes('$520.00')`))
  await chooseOption(root + ' [aria-label="Billing invoice status"]', 'Declined')
  await waitFor(`${count}.startsWith('1 of 5')`)
  await click(root + ' [aria-label="Toggle invoice SD862840-45-1"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' [role=region]')}).textContent.includes('No retry or charge')`)
  await click(root + ' [aria-label="Reset billing invoice filters"]')
  await chooseOption(root + ' [aria-label="Billing invoice sort"]', 'Amount')
  await click(root + ' [aria-label="Toggle billing invoice order"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' [data-billing-invoice]')}).textContent.includes('$120.00')`)
  await setInput(root + ' input[name="billingInvoiceSearch"]', '  SD862840-46  ')
  await waitFor(`${count}.startsWith('1 of 5')`)
  await click(root + ' [aria-label="Toggle invoice SD862840-46"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' [role=region]')}).textContent.includes('$120.00 + usage $20.00 = $140.00')`)
  await setInput(root + ' input[name="billingInvoiceSearch"]', 'not-found')
  await waitFor(`${count}.startsWith('0 of 5')`)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root)}).textContent.includes('No invoices match')`))
  await click(root + ' [aria-label="Reset billing invoice filters"]')
  result.billingInvoices = { independentFilters: true, statusFilter: true, numericSort: true, amountBreakdown: true, expansion: true, noCharge: true, emptyResults: true }
}

async function checkPaymentAccountSummary(root) {
  for (const [label, value] of [['Active customers', '6'], ['Lifetime spend (USD)', '$1,172,700'], ['Open invoices (USD)', '$116,000'], ['Needs review', '3']]) {
    assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root + ` [data-account-metric="${label}"]`)}).textContent.includes(${JSON.stringify(value)})`), `Computed account metric: ${label}`)
  }
  result.paymentAccountSummary = true
}

async function checkPaymentAccounts(root, standalone = false) {
  const count = root + ' [data-account-count]'
  const expectCount = async value => waitFor(`document.querySelector(${JSON.stringify(count)}).textContent.startsWith(${JSON.stringify(value)})`)
  const firstRow = `document.querySelector(${JSON.stringify(root + ' tbody tr')}).textContent`
  const headers = `document.querySelector(${JSON.stringify(root + ' thead')}).textContent`
  const search = root + ' input[name="paymentAccountSearch"]'
  const reset = root + ' button[aria-label="Reset payment account filters"]'
  const exportButton = root + ' button[aria-label="Export filtered payment accounts"]'
  await expectCount('10 of 10')
  await waitFor(`document.querySelectorAll(${JSON.stringify(root + ' tbody tr')}).length === 10`)
  await chooseOption(root + ' [aria-label="Payment account status filter"]', 'Review'); await expectCount('3 of 10')
  await chooseTab(root, 'Risk & KYC')
  await waitFor(`${headers}.includes('KYC') && !${headers}.includes('Lifetime spend')`)
  assert.ok(await evaluate(`${firstRow}.includes('Aster Labs') && ${firstRow}.includes('Pending')`))
  await chooseOption(root + ' [aria-label="Payment account method filter"]', 'ACH'); await expectCount('1 of 10')
  await click(root + ' button[aria-label="View payment account cus_8Vn20P"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('finance.aster@example.com') && document.querySelector('[role=dialog]').textContent.includes('Pending')`)
  assert.equal(await evaluate(`document.querySelectorAll('[role=dialog] input, [role=dialog] textarea').length`), 0)
  await click('button[aria-label="Close payment account details"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
  await click(reset)
  await chooseTab(root, 'Payment Methods')
  await waitFor(`${headers}.includes('Payment method') && !${headers}.includes('KYC') && !${headers}.includes('Risk status')`)
  await chooseOption(root + ' [aria-label="Payment account method filter"]', 'Wire'); await expectCount('1 of 10')
  assert.ok(await evaluate(`${firstRow}.includes('Nomad Robotics') && ${firstRow}.includes('Wire enabled')`))
  await click(reset)
  await chooseTab(root, 'All Customers')
  await chooseOption(root + ' [aria-label="Payment account date range"]', 'June 2026'); await expectCount('6 of 10')
  await chooseOption(root + ' [aria-label="Payment account date range"]', 'May 2026'); await expectCount('4 of 10')
  await chooseOption(root + ' [aria-label="Payment account date range"]', 'Custom range')
  await setInput(root + ' input[name="paymentAccountFrom"]', '2026-06-09')
  await setInput(root + ' input[name="paymentAccountTo"]', '2026-06-12'); await expectCount('3 of 10')
  await setInput(root + ' input[name="paymentAccountFrom"]', '2026-06-13'); await expectCount('0 of 10')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('Start date must not be after end date.')`)
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(exportButton)}).disabled`), true)
  await setInput(root + ' input[name="paymentAccountFrom"]', '')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('Choose both valid UTC dates.')`)
  await click(reset)
  await click(root + ' button[aria-label="Sort payment accounts by spend"]')
  await waitFor(`${firstRow}.includes('Rivergate Studios')`)
  await click(root + ' button[aria-label="Sort payment accounts by spend"]')
  await waitFor(`${firstRow}.includes('Nomad Robotics')`)
  await click(reset)
  await click(root + ' button[aria-label="Sort payment accounts by lastPayment"]')
  await waitFor(`${firstRow}.includes('Luma Learning')`)
  await chooseOption(root + ' [aria-label="Payment account sort field"]', 'Customer')
  await waitFor(`${firstRow}.includes('Aster Labs')`)
  await setInput(search, '  CUS_6bd19q  '); await expectCount('1 of 10')
  await click(root + ' button[aria-label="View payment account cus_6Bd19Q"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Rivergate Studios') && document.querySelector('[role=dialog]').textContent.includes('Rejected')`)
  await screenshot(`payment-accounts-${standalone ? 'paste' : 'catalog'}-details.png`)
  await click('button[aria-label="Close payment account details"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
  await setInput(search, 'not-present'); await expectCount('0 of 10')
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(exportButton)}).disabled`), true)
  await click(reset)
  await chooseOption(root + ' [aria-label="Payment account method filter"]', 'ACH'); await expectCount('3 of 10')
  await chooseOption(root + ' [aria-label="Payment account sort field"]', 'Customer')
  await click(root + ' button[aria-label="Toggle payment account sort direction"]')
  const downloadPath = resolve(profile, standalone ? 'paste-account-csv' : 'catalog-account-csv')
  await mkdir(downloadPath, { recursive: true })
  await send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath }, null)
  for (const [tab, view, expectedHeader, firstCustomer] of [
    ['All Customers', 'customers', 'Risk status', 'Aster Labs'],
    ['Payment Methods', 'methods', 'Payment method', 'Aster Labs'],
    ['Risk & KYC', 'risk', 'KYC', 'Aster Labs'],
  ]) {
    await chooseTab(root, tab)
    await click(exportButton)
    const csvPath = resolve(downloadPath, `payment-accounts-${view}.csv`)
    const deadline = Date.now() + 10000
    while (!existsSync(csvPath)) {
      assert.ok(Date.now() < deadline, 'Account CSV download timed out')
      await new Promise(resolve => setTimeout(resolve, 50))
    }
    const csv = await readFile(csvPath, 'utf8')
    const lines = csv.split('\r\n')
    assert.equal(lines.length, 4, 'Export headers plus all three filtered accounts')
    assert.ok(lines[0].includes(expectedHeader) && lines[1].includes(firstCustomer))
    assert.ok(csv.includes('cus_8Vn20P') && csv.includes('cus_5Zp62T') && csv.includes('cus_0Aj27K') && !csv.includes('Nomad'))
    if (view === 'risk') assert.ok(!lines[0].includes('Last payment') && csv.includes('Pending') && csv.includes('8500'))
    if (view === 'methods') assert.ok(csv.includes('ACH verified') && !lines[0].includes('KYC'))
  }
  await send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: profile }, null)
  await screenshot(`payment-accounts-${standalone ? 'paste' : 'catalog'}-risk.png`)
  await click(reset); await chooseTab(root, 'All Customers')
  result.paymentAccounts = { realTabs: true, combinedFilters: true, inclusiveUTC: true, invalidRange: true, numericSort: true, chronologicalSort: true, correctDetails: true, emptyResults: true, csvAllViews: true }
}

async function checkProcessorCustomers(root) {
  const count = root + ' [data-processor-count]'
  const pager = root + ' [data-processor-pagination]'
  const expectCount = async value => waitFor(`document.querySelector(${JSON.stringify(count)}).textContent.startsWith(${JSON.stringify(value)})`)
  await expectCount('10 of 10')
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' tbody tr')}).length`), 5)
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(root + ' button[aria-label="Previous processor customers"]')}).disabled`), true)
  await click(root + ' button[aria-label="Next processor customers"]')
  await waitFor(`document.querySelector(${JSON.stringify(pager)}).textContent.includes('6–10 of 10')`)
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(root + ' button[aria-label="Next processor customers"]')}).disabled`), true)
  await chooseOption(root + ' [aria-label="Processor customer status filter"]', 'Blocked')
  await expectCount('2 of 10')
  await waitFor(`document.querySelector(${JSON.stringify(pager)}).textContent.includes('Page 1 / 1')`)
  await chooseOption(root + ' [aria-label="Processor customer status filter"]', 'Review'); await expectCount('3 of 10')
  await chooseOption(root + ' [aria-label="Processor customer status filter"]', 'Active'); await expectCount('5 of 10')
  await click(root + ' button[aria-label="Reset processor customer filters"]')
  await chooseOption(root + ' [aria-label="Processor customer date range"]', 'May 2026'); await expectCount('6 of 10')
  await chooseOption(root + ' [aria-label="Processor customer date range"]', 'April 2026'); await expectCount('4 of 10')
  await chooseOption(root + ' [aria-label="Processor customer date range"]', 'Custom range')
  await setInput(root + ' input[name="processorCustomerFrom"]', '2026-05-21')
  await setInput(root + ' input[name="processorCustomerTo"]', '2026-05-23')
  await expectCount('2 of 10')
  await setInput(root + ' input[name="processorCustomerFrom"]', '2026-05-24')
  await expectCount('0 of 10')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('Start date must not be after end date.')`)
  await setInput(root + ' input[name="processorCustomerFrom"]', '')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('Choose both UTC dates.')`)
  await click(root + ' button[aria-label="Reset processor customer filters"]')
  await setInput(root + ' input[name="processorCustomerSearch"]', 'cus_M7pQ1fC8yLw4DkS2nAaR5'); await expectCount('1 of 10')
  await click(root + ' button[aria-label="View processor customer cus_M7pQ1fC8yLw4DkS2nAaR5"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Maya Chen') && document.querySelector('[role=dialog]').textContent.includes('maya.chen@example.com')`)
  assert.equal(await evaluate(`document.querySelectorAll('[role=dialog] input, [role=dialog] textarea').length`), 0)
  await click('button[aria-label="Close processor customer details"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  await setInput(root + ' input[name="processorCustomerSearch"]', 'not-present'); await expectCount('0 of 10')
  await waitFor(`document.querySelector(${JSON.stringify(pager)}).textContent.includes('0–0 of 0')`)
  await click(root + ' button[aria-label="Reset processor customer filters"]')
  await click(root + ' button[aria-label="Sort processor customers by name"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' tbody tr')}).textContent.includes('Avery Stone')`)
  await click(root + ' button[aria-label="Sort processor customers by name"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' tbody tr')}).textContent.includes('Theo Ramirez')`)
  await chooseOption(root + ' [aria-label="Processor customers per page"]', '10 per page')
  await waitFor(`document.querySelectorAll(${JSON.stringify(root + ' tbody tr')}).length === 10`)
  await chooseOption(root + ' [aria-label="Processor customer sort field"]', 'Created at')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' tbody tr')}).textContent.includes('Avery Stone')`)
  await click(root + ' button[aria-label="Toggle processor sort direction"]')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' tbody tr')}).textContent.includes('Cobalt Press')`)
  result.processorCustomers = { accurateCounts: true, pagination: true, pageReset: true, statusFilter: true, datesUTC: true, customRangeValidation: true, searchById: true, correctDetails: true, dateSorting: true, pageSize: true, emptyResults: true }
}

async function checkCustomerProfile(root) {
  await click(root + ' button[aria-label="Compose customer message"]')
  await click('button[aria-label="Save customer message draft"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Enter a subject.') && document.querySelector('[role=dialog]').textContent.includes('Enter a message.')`)
  await setInput('input[name="customerMessageSubject"]', 'Portable draft')
  await setInput('textarea[name="customerMessageBody"]', 'This example is not sent to a customer.')
  await click('button[aria-label="Close customer message"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  assert.equal(await evaluate('document.querySelectorAll("[data-customer-message]").length'), 0)
  await click(root + ' button[aria-label="Compose customer message"]')
  await waitFor(`document.querySelector('input[name="customerMessageSubject"]')?.value === 'Portable draft'`)
  await click('button[aria-label="Save customer message draft"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector('[data-customer-message]')?.textContent.includes('Portable draft')`)
  assert.ok(await evaluate(`document.querySelector('[data-customer-message]').textContent.includes('Not sent')`))
  await click(root + ' button[aria-label="Compose customer message"]')
  await waitFor(`document.querySelector('input[name="customerMessageSubject"]')?.value === ''`)
  await click('button[aria-label="Close customer message"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  result.customerProfile = { validatedDraft: true, closeReopen: true, noSendClaim: true, savedPreview: true }
}

async function checkCustomerHistory(root) {
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-customer-purchase]')}).length`), 3)
  assert.ok(await evaluate(`document.querySelector(${JSON.stringify(root + ' [data-customer-purchase="ORD-34021"]')}).textContent.includes('$389.00') && document.querySelector(${JSON.stringify(root + ' [data-customer-purchase="ORD-33682"]')}).textContent.includes('Qty 2')`))
  await chooseTab(root, 'Reviews')
  await waitFor(`document.querySelectorAll(${JSON.stringify(root + ' [data-customer-review]')}).length === 2`)
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-customer-purchase]')}).length`), 0)
  await chooseTab(root, 'Activity')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' [data-customer-activity]')})`)
  assert.equal(await evaluate(`document.querySelectorAll(${JSON.stringify(root + ' [data-customer-review]')}).length`), 0)
  await chooseTab(root, 'Purchases')
  result.customerHistory = { distinctTabs: true, calculatedItemTotals: true, reviewRatings: true, activity: true }
}

async function checkCustomerDetails(root) {
  await click(root + ' button[aria-label="Edit customer contact information"]')
  await waitFor(`document.querySelector('input[name="detailCustomerName"]')?.value === 'Theo Hammond'`)
  await setInput('input[name="detailCustomerName"]', '')
  await setInput('input[name="detailCustomerEmail"]', 'invalid')
  await setInput('input[name="detailCustomerPhone"]', 'abc')
  await click('button[aria-label="Save customer detail edit"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Enter a customer name.') && document.querySelector('[role=dialog]').textContent.includes('Enter a valid example email.') && document.querySelector('[role=dialog]').textContent.includes('6–15 digits')`)
  await setInput('input[name="detailCustomerName"]', 'Theo Local')
  await setInput('input[name="detailCustomerEmail"]', 'theo.local@example.com')
  await setInput('input[name="detailCustomerPhone"]', '+1 206 555 0110')
  await chooseOption('[aria-label="Detail customer status"]', 'Active')
  await click('button[aria-label="Save customer detail edit"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root)}).textContent.includes('theo.local@example.com')`)
  await click(root + ' button[aria-label="Edit customer shipping address"]')
  await setInput('input[name="detailAddresscity"]', '')
  await click('button[aria-label="Save customer detail edit"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Complete this address field.')`)
  await setInput('input[name="detailAddresscity"]', 'Vancouver')
  await setInput('input[name="detailAddressstate"]', 'BC')
  await setInput('input[name="detailAddresspostalCode"]', 'V6B 1A1')
  await setInput('input[name="detailAddresscountry"]', 'Canada')
  await click('button[aria-label="Save customer detail edit"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root)}).textContent.includes('Vancouver, BC')`)
  await click(root + ' button[aria-label="Edit customer detail segments"]')
  await setInput('textarea[name="detailCustomerSegments"]', 'VIP\nvip')
  await click('button[aria-label="Save customer detail edit"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Segment names must be unique.')`)
  await setInput('textarea[name="detailCustomerSegments"]', 'Portable segment\nHigh retention')
  await click('button[aria-label="Save customer detail edit"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root)}).textContent.includes('Portable segment')`)
  await click(root + ' button[aria-label="Edit customer contact information"]')
  await setInput('input[name="detailCustomerName"]', 'Cancelled edit')
  await click('button[aria-label="Cancel customer detail edit"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(root)}).textContent.includes('Cancelled edit')`), false)
  result.customerDetails = { contactValidation: true, localUpdate: true, addressValidation: true, locationSummary: true, uniqueSegments: true, cancellation: true }
}

async function checkCustomerDirectory(root, metrics = false) {
  const count = `${root} [data-directory-count]`
  const expectCount = async value => waitFor(`document.querySelector(${JSON.stringify(count)}).textContent.startsWith(${JSON.stringify(value)})`)
  await expectCount('11 of 11')
  await chooseTab(root, 'VIP'); await expectCount('4 of 11')
  await chooseTab(root, 'Active'); await expectCount('5 of 11')
  await chooseTab(root, 'At risk'); await expectCount('2 of 11')
  await chooseTab(root, 'All customers')
  await chooseOption(root + ' [aria-label="Directory date range"]', 'Last 30 days'); await expectCount('9 of 11')
  await chooseOption(root + ' [aria-label="Directory date range"]', 'Last 90 days'); await expectCount('11 of 11')
  await chooseOption(root + ' [aria-label="Directory value band"]', 'High value'); await expectCount('3 of 11')
  await chooseOption(root + ' [aria-label="Directory value band"]', 'Mid value'); await expectCount('4 of 11')
  await chooseOption(root + ' [aria-label="Directory value band"]', 'Entry value'); await expectCount('4 of 11')
  await click(root + ' button[aria-label="Clear directory filters"]')
  await setInput(root + ' input[name="directorySearch"]', 'avery.brooks'); await expectCount('1 of 11')
  await setInput(root + ' input[name="directorySearch"]', 'not-present'); await expectCount('0 of 11')
  await waitFor(`document.querySelector(${JSON.stringify(root)}).textContent.includes('No customers match')`)
  await click(root + ' button[aria-label="Clear directory filters"]')
  await chooseOption(root + ' [aria-label="Directory sort"]', 'Spend: high to low')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' tbody tr')}).textContent.includes('CUS-1742')`)
  await chooseOption(root + ' [aria-label="Directory sort"]', 'Name A–Z')
  await waitFor(`document.querySelector(${JSON.stringify(root + ' tbody tr')}).textContent.includes('CUS-7102')`)
  await click(root + ' button[aria-label="Manage customer columns"]')
  await click('button[aria-label="Show customer average"]')
  await click('button[aria-label="Close customer columns"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(root + ' thead')}).textContent.includes('Avg. order value')`), false)
  await click(root + ' button[aria-label="Edit directory customer CUS-7102"]')
  await waitFor(`document.querySelector('input[name="directoryCustomerName"]')?.value === 'Avery Brooks'`)
  await setInput('input[name="directoryCustomerName"]', 'Avery Updated')
  await setInput('input[name="directoryCustomerEmail"]', 'theo.hammond@example.com')
  await click('button[aria-label="Save directory customer"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('already belongs')`)
  await setInput('input[name="directoryCustomerEmail"]', 'avery.updated@example.com')
  await chooseOption('[aria-label="Directory customer status"]', 'VIP')
  await click('button[aria-label="Save directory customer"]')
  await waitFor(`!document.querySelector('[role=dialog]') && document.querySelector(${JSON.stringify(root)}).textContent.includes('Avery Updated')`)
  await click(root + ' button[aria-label="Create directory customer"]')
  await click('button[aria-label="Save directory customer"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Enter a customer name.')`)
  await setInput('input[name="directoryCustomerName"]', 'Portable Customer')
  await setInput('input[name="directoryCustomerEmail"]', 'invalid-email')
  await click('button[aria-label="Save directory customer"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Enter a valid example email.')`)
  await setInput('input[name="directoryCustomerEmail"]', 'portable@example.com')
  await click('button[aria-label="Save directory customer"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  await expectCount('12 of 12')
  if (metrics) {
    await waitFor(`document.querySelector('[data-customer-metric="count"]').textContent.includes('12') && document.querySelector('[data-customer-metric="repeat"]').textContent.includes('91.7%') && document.querySelector('[data-customer-metric="new"]').textContent.includes('1')`)
  }
  await chooseOption(root + ' [aria-label="Directory date range"]', 'This year'); await expectCount('11 of 12')
  await click(root + ' button[aria-label="Clear directory filters"]')
  await click(root + ' button[aria-label="Remove directory customer CUS-9001"]')
  await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Portable Customer')`)
  await click('button[aria-label="Cancel customer removal"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  await expectCount('12 of 12')
  await click(root + ' button[aria-label="Remove directory customer CUS-9001"]')
  await click('button[aria-label="Confirm customer removal"]')
  await waitFor(`!document.querySelector('[role=dialog]')`)
  await expectCount('11 of 11')
  assert.equal(await evaluate(`document.querySelector(${JSON.stringify(root)}).textContent.includes('Portable Customer')`), false)
  result.customerDirectory = { filters: true, numericSort: true, columns: true, correctRecordEditing: true, duplicateEmail: true, validatedCreation: true, cancelledRemoval: true, localRemoval: true, noOrderDates: true }
}

let previousClipboard
const normalize = value => value.replaceAll('\r\n', '\n')
// Visible geometry, including ancestor clipping: a hidden row's un-clipped
// bounding box is not an interactive control above its internal scroll viewport.
const visibleControlRect = `(element) => {
  const rect = element.getBoundingClientRect()
  let left = Math.max(0, rect.left), right = Math.min(innerWidth, rect.right), top = Math.max(64, rect.top), bottom = Math.min(innerHeight, rect.bottom)
  for (let parent = element.parentElement; parent; parent = parent.parentElement) {
    const style = getComputedStyle(parent), bounds = parent.getBoundingClientRect()
    if (/auto|scroll|hidden|clip/.test(style.overflowX)) { left = Math.max(left, bounds.left); right = Math.min(right, bounds.right) }
    if (/auto|scroll|hidden|clip/.test(style.overflowY)) { top = Math.max(top, bounds.top); bottom = Math.min(bottom, bounds.bottom) }
  }
  return { left, right, top, bottom, width: Math.max(0, right - left), height: Math.max(0, bottom - top) }
}`
const result = { copied: [], pasteTests: [], screenshots: profile }
try {
  const target = await send('Target.createTarget', { url: 'about:blank' }, null)
  sessionId = (await send('Target.attachToTarget', { targetId: target.targetId, flatten: true }, null)).sessionId
  await send('Page.enable')
  await send('Runtime.enable')
  await send('Browser.setDownloadBehavior', { behavior: 'allow', downloadPath: profile }, null)
  await send('Browser.grantPermissions', { origin: new URL(base).origin, permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'] }, null)
  await send('Browser.grantPermissions', { origin: new URL(pasteBase).origin, permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite'] }, null)
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false })
  for (const page of selectedPages) {
    await navigate(base + page.path, '[data-copy-block]')
    if (previousClipboard === undefined) previousClipboard = await evaluate('navigator.clipboard.readText()')
    const hoverPoint = await evaluate(`(() => { const r = document.querySelector('[data-copy-block]').getBoundingClientRect(); return { x: r.left + 16, y: r.top + 16 }; })()`)
    await send('Input.dispatchMouseEvent', { type: 'mouseMoved', ...hoverPoint })
    await waitFor('document.querySelector("[role=toolbar]")')
    for (const block of exports.filter(block => block.page === page.path)) {
      await selectBlock(block.id)
      const controlsClear = `(() => { const visibleRect = ${visibleControlRect}; const toolbar = document.querySelector('[role=toolbar]').getBoundingClientRect(); return ![...document.querySelector('[data-page]').querySelectorAll('button, a, input, textarea, select, summary, [role=button], [role=combobox]'), document.querySelector('button[aria-label="Elegir un bloque para copiar"]')].some(element => { const r = visibleRect(element); return r.width && r.height && toolbar.left < r.right && toolbar.right > r.left && toolbar.top < r.bottom && toolbar.bottom > r.top; }); })()`
      await waitFor(controlsClear)
      assert.equal(await evaluate(controlsClear), true, `${block.id}: tools overlap native controls`)
      await click('button[aria-label="Copiar componente completo"]')
      await waitFor(`document.querySelector('button[aria-label="Copiar componente completo"]')?.textContent.includes('Copiado')`)
      const copied = normalize(await evaluate('navigator.clipboard.readText()'))
      assert.ok(copied === normalize(block.component), `${block.id}: wrong clipboard source (${copied.split('\n')[0]})`)
      result.copied.push(block.id)
    }
    if (page.path === '/ai-chat/agent-activity') {
      const rowCount = `document.querySelectorAll('ol[aria-label="Run timeline"] > li').length`
      await waitFor(`${rowCount} === 11`)
      await evaluate(`(() => { const input=document.querySelector('input[aria-label="Search runs or IDs"]'); input.value='run_84f2'; input.dispatchEvent(new Event('input', { bubbles:true })); })()`)
      await waitFor(`${rowCount} === 1`)
      assert.equal(await evaluate(`document.querySelector('[data-copy-block]').dataset.copyBlock`), 'agent-report-run')
      await evaluate(`(() => { const input=document.querySelector('input[aria-label="Search runs or IDs"]'); input.value=''; input.dispatchEvent(new Event('input', { bubbles:true })); })()`)
      await chooseOption('[aria-label="Time period"]', 'Last hour')
      await waitFor(`${rowCount} === 8`)
      await chooseOption('[aria-label="Time period"]', 'Last 24 hours')
      await waitFor(`${rowCount} === 11`)
      await click('button[aria-label="3 runs need attention"]')
      await waitFor(`${rowCount} === 3`)
      await chooseOption('[aria-label="Run status"]', 'Completed')
      await waitFor(`${rowCount} === 7`)
      await chooseOption('[aria-label="Run status"]', 'Cancelled')
      await waitFor(`${rowCount} === 0 && document.querySelector('[data-page]').textContent.includes('No runs match your filters.')`)
      await chooseOption('[aria-label="Run status"]', 'Status')
      await waitFor(`${rowCount} === 11`)
      assert.equal(await evaluate(`document.querySelector('button[aria-label="Resume paused runs"]').disabled`), true)
      await selectBlock(exports.filter(block => block.page === page.path).at(-1).id)
      result.activityFilters = true
    }
    if (page.path === '/developers/api-keys') {
      await checkDemoApiKeys('[data-copy-block="developer-api-key-manager"]')
      await selectBlock('developer-api-key-manager')
    }
    if (page.path === '/developers/events-&-logs') {
      await checkEventLogs('[data-copy-block="developer-log-explorer"]')
      await checkVisitorSummary('[data-copy-block="developer-visitor-summary"]')
      await checkVisitorSummary('[data-copy-block="developer-referrer-summary"]', true)
      await selectBlock('developer-referrer-summary')
    }
    if (page.path === '/developers/overview') {
      await checkOverviewMetrics('[data-page]')
      await selectBlock('developer-recent-activities')
    }
    if (page.path === '/project-management/dashboard-1') {
      await checkWorkspaceHours('[data-copy-block="project-work-hours"]')
      await checkWorkspaceTimer('[data-copy-block="project-time-tracker"]')
      await checkWorkspaceIssues('[data-copy-block="project-my-issues"]')
      await checkWorkspacePanel('[data-copy-block="project-workspace-panel"]')
      await selectBlock('project-workspace-panel')
    }
    if (page.path === '/project-management/dashboard-2') {
      await checkPlanningMap('[data-copy-block="project-issue-map"]')
      await checkPlanningActions('[data-copy-block="project-planning-actions"]')
      await waitFor(`document.querySelector('[data-planning-metric="Total projects"]').textContent === '3' && document.querySelector('[data-planning-metric="Total issues"]').textContent === '7'`)
      await checkCurrentProjects('[data-copy-block="project-current-projects"]')
      await checkPlanningMilestones('[data-copy-block="project-milestone-tracker"]')
      await checkPlanningNotes('[data-copy-block="project-planning-notes"]')
      await evaluate(`document.querySelector('[data-copy-block="project-milestone-tracker"]').scrollIntoView({ block: 'start' })`)
      await screenshot(page.key + '-milestones-notes.png')
      await checkPlanningMembers('[data-copy-block="project-planning-members"]')
      await checkPlanningActivity('[data-copy-block="project-planning-activity"]')
      assert.ok(await evaluate(`document.querySelector('[data-copy-block="project-milestone-tracker"]').textContent.includes('Portable milestone')`))
      assert.ok(await evaluate(`document.querySelector('[data-copy-block="project-planning-status"]').textContent.includes('7 issues')`))
      await selectBlock('project-planning-status')
    }
    if (page.path === '/ecommerce/add-customer') {
      await checkCustomerCreation('[data-copy-block="ecommerce-add-customer-editor"]')
      await click('button[aria-label="Go to customer account"]')
      await screenshot(page.key + '-account.png')
      await click('button[aria-label="Go to customer cards"]')
      await screenshot(page.key + '-cards.png')
      await click('button[aria-label="Go to customer preferences"]')
      await screenshot(page.key + '-preferences.png')
      await selectBlock('ecommerce-add-customer-editor')
    }
    if (page.path === '/ecommerce/edit-customer/cus-1742') {
      await checkCustomerEditing('[data-copy-block="ecommerce-edit-customer-editor"]')
      await click('button[aria-label="Go to customer account"]')
      await screenshot(page.key + '-account.png')
      await click('button[aria-label="Go to customer cards"]')
      await screenshot(page.key + '-cards.png')
      await selectBlock('ecommerce-edit-customer-editor')
    }
    if (page.path === '/ecommerce/customer-list-1') {
      await evaluate(`document.querySelector('[data-copy-block="ecommerce-customer-metrics"]').scrollIntoView({ block: 'start' })`)
      await screenshot(page.key + '-summary.png')
      await evaluate(`document.documentElement.classList.add('dark')`)
      await screenshot(page.key + '-summary-dark.png')
      await evaluate(`document.documentElement.classList.remove('dark')`)
      await checkCustomerDirectory('[data-copy-block="ecommerce-customer-directory"]', true)
      await selectBlock('ecommerce-customer-directory')
    }
    if (page.path === '/ecommerce/customer-detail-1') {
      await checkCustomerProfile('[data-copy-block="ecommerce-customer-profile"]')
      await checkCustomerHistory('[data-copy-block="ecommerce-customer-history"]')
      await checkCustomerDetails('[data-copy-block="ecommerce-customer-details"]')
      assert.ok(await evaluate(`document.querySelector('[data-copy-block="ecommerce-customer-profile"]').textContent.includes('Theo Local') && document.querySelector('[data-copy-block="ecommerce-customer-profile"]').textContent.includes('Active')`))
      await chooseTab('[data-copy-block="ecommerce-customer-history"]', 'Activity')
      await waitFor(`document.querySelectorAll('[data-customer-activity]').length === 7`)
      await screenshot(page.key + '-activity.png')
      await chooseTab('[data-copy-block="ecommerce-customer-history"]', 'Reviews')
      await screenshot(page.key + '-reviews.png')
      await chooseTab('[data-copy-block="ecommerce-customer-history"]', 'Purchases')
      await selectBlock('ecommerce-customer-details')
    }
    if (page.path === '/payment-processor/customers') {
      await checkProcessorCustomers('[data-copy-block="processor-customer-directory"]')
      await selectBlock('processor-customer-directory')
    }
    if (page.path === '/payment-processor/customers-list-2') {
      await checkPaymentAccountSummary('[data-copy-block="payment-account-summary"]')
      await evaluate(`document.querySelector('[data-copy-block="payment-account-summary"]').scrollIntoView({ block: 'start' })`)
      await screenshot(page.key + '-summary.png')
      await evaluate(`document.documentElement.classList.add('dark')`)
      await screenshot(page.key + '-summary-dark.png')
      await evaluate(`document.documentElement.classList.remove('dark')`)
      await checkPaymentAccounts('[data-copy-block="payment-account-directory"]')
      await selectBlock('payment-account-directory')
    }
    if (page.path === '/payment-processor/customer-detail') {
      await checkBillingPlan('[data-copy-block="processor-billing-plan"]')
      await checkBillingCards('[data-copy-block="processor-billing-cards"]')
      await checkBillingInvoices('[data-copy-block="processor-billing-invoices"]')
      await selectBlock('processor-billing-invoices')
    }
    if (page.path === '/payment-processor/customer-detail-2') {
      await checkSubscriptionProfile('[data-copy-block="processor-subscription-profile"]')
      await checkSubscriptionLedger('[data-copy-block="processor-subscription-ledger"]')
      await selectBlock('processor-subscription-ledger')
    }
    if (page.path === '/payment-processor/customer-detail-3') {
      await checkCustomerOverview('[data-copy-block="processor-customer-overview"]')
      await selectBlock('processor-customer-overview')
    }
    if (page.path === '/project-management/dashboard-3') {
      for (const [id, check] of Object.entries(commandBlockChecks)) {
        await check(`[data-copy-block="${id}"]`)
        await evaluate(`document.querySelector('[data-copy-block="${id}"]').scrollIntoView({ block: 'start' })`)
        await screenshot(page.key + '-' + id + '.png')
        await evaluate(`document.documentElement.classList.add('dark')`)
        await screenshot(page.key + '-' + id + '-dark.png')
        await evaluate(`document.documentElement.classList.remove('dark')`)
      }
      await selectBlock('command-throughput')
    }
    if (page.path === '/project-management/dashboard-4') {
      const rows = `document.querySelectorAll('[data-copy-block="project-table-1"] tbody tr').length`
      await waitFor(`${rows} === 7`)
      assert.ok(await evaluate(`document.querySelector('[data-copy-block="project-health"] svg[role="img"]').getAttribute('aria-label').includes('At Risk: 2')`), 'Health chart counts must match the project rows')
      await chooseOption('[aria-label="Filter projects by status"]', 'Blocked')
      await waitFor(`${rows} === 1 && document.querySelector('[data-copy-block="project-table-1"]').textContent.includes('API Stabilization')`)
      await click('button[aria-label="View all projects"]')
      await waitFor(`${rows} === 7`)

      await click('button[aria-label="Change status for API Stabilization"]')
      await waitFor(`[...document.querySelectorAll('[role="menuitem"]')].some(item => item.textContent.includes('Set status to On Track'))`)
      await evaluate(`(() => { const item = [...document.querySelectorAll('[role="menuitem"]')].find(item => item.textContent.includes('Set status to On Track')); item.setAttribute('data-browser-choice', 'status'); })()`)
      await click('[data-browser-choice="status"]')
      await waitFor(`document.querySelector('[data-copy-block="project-table-1"]').textContent.includes('On Track') && document.querySelector('[data-copy-block="project-health"]').textContent.includes('3')`)

      await click('button[aria-label="View options"]')
      await waitFor(`[...document.querySelectorAll('[role="menuitem"]')].some(item => item.textContent.includes('Hide owner column'))`)
      await evaluate(`(() => { const item = [...document.querySelectorAll('[role="menuitem"]')].find(item => item.textContent.includes('Hide owner column')); item.setAttribute('data-browser-choice', 'owner'); })()`)
      await click('[data-browser-choice="owner"]')
      await waitFor(`![...document.querySelectorAll('[data-copy-block="project-table-1"] thead th')].some(cell => cell.textContent.includes('Owner'))`)

      await click('button[aria-label="Create issue"]')
      await waitFor(`document.querySelector('[role="dialog"]')?.textContent.includes('Issue · local demo')`)
      await setInput('[role="dialog"] input[name="quickActionName"]', 'Portable issue')
      await click('[role="dialog"] button[type="submit"]')
      await waitFor(`document.querySelector('[data-page]').textContent.includes('Issue “Portable issue” added to this local demo.')`)

      await evaluate(`(() => { const original = URL.createObjectURL.bind(URL); URL.createObjectURL = blob => { window.__dashboard4CsvBlob = blob; return original(blob) } })()`)
      await evaluate(`document.querySelector('button[aria-label="Export"]').click()`)
      await waitFor(`window.__dashboard4CsvBlob instanceof Blob`)
      assert.ok(await evaluate(`(async () => (await window.__dashboard4CsvBlob.text()).startsWith('"Project","Status","Priority","Owner","Due date"'))()`), 'CSV export must contain column headers')
      result.dashboard4Interactions = true
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
  if (selectedPages.some(page => page.path === '/project-management/dashboard-4')) await selectBlock('project-needs-attention')
  await click('button[aria-label="Ver código del bloque"]')
  await waitFor('document.querySelector("[role=dialog] pre code")')
  assert.equal(await evaluate('document.querySelector("[role=dialog] pre code").textContent'), lastBlock.component)
  await screenshot('code.png')
  await click('[role=dialog] button[aria-pressed="false"]')
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
    // Menu closing, instant scrolling and the picker's new position settle asynchronously.
    await waitFor(`!document.querySelector('[role=menuitem]') && (() => { const visibleRect = ${visibleControlRect}; const picker = document.querySelector('button[aria-label="Elegir un bloque para copiar"]').getBoundingClientRect(); return ![...document.querySelector('[data-page]').querySelectorAll('button, a, input, textarea, select, summary, [role=button], [role=combobox]')].some(element => { const r = visibleRect(element); return r.width && r.height && picker.left < r.right && picker.right > r.left && picker.top < r.bottom && picker.bottom > r.top; }); })()`)
    await screenshot(page.key + '-mobile.png')
    if (page.path === '/developers/api-keys') {
      const root = '[data-copy-block="developer-api-key-manager"]'
      await evaluate(`document.querySelector(${JSON.stringify(root)}).scrollIntoView({ block: 'start' })`)
      await screenshot(page.key + '-mobile-manager.png')
      await chooseTab(root, 'Account')
      await screenshot(page.key + '-mobile-account.png')
      await chooseTab(root, 'API Keys')
      await click(root + ' button[aria-label="Create secret demo key"]')
      await waitFor(`document.querySelector('[role=dialog] input[name="demoKeyName"]')`)
      assert.equal(await evaluate(`(() => { const r = document.querySelector('[role=dialog]').getBoundingClientRect(); return r.left >= 0 && r.right <= window.innerWidth; })()`), true, 'Mobile creation modal fits the viewport')
      await screenshot(page.key + '-mobile-create.png')
      await click('button[aria-label="Cancel demo key creation"]')
      await waitFor(`!document.querySelector('[role=dialog]')`)
    }
    if (page.path === '/developers/events-&-logs') {
      const root = '[data-copy-block="developer-log-explorer"]'
      await click(root + ' button[aria-label="Toggle log filters"]')
      await screenshot(page.key + '-mobile-table.png')
      await click(root + ' button[aria-label="Import local log JSON"]')
      await waitFor(`document.querySelector('[role=dialog] textarea')`)
      await screenshot(page.key + '-mobile-import.png')
      await click('button[aria-label="Cancel log import"]')
      await waitFor(`!document.querySelector('[role=dialog]')`)
      await evaluate(`document.querySelector('[data-copy-block="developer-visitor-summary"]').scrollIntoView({ block: 'start' })`)
      await screenshot(page.key + '-mobile-summaries.png')
      assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true, 'Mobile log tables must scroll internally')
    }
    if (page.path === '/developers/overview') {
      await evaluate(`document.querySelector('[data-copy-block="developer-visitor-metrics"]').scrollIntoView({ block: 'start' })`)
      await click('button[aria-label="Show mobile visitors"]')
      await screenshot(page.key + '-mobile-visitors.png')
      await evaluate(`document.querySelector('[data-copy-block="developer-recent-activities"]').scrollIntoView({ block: 'start' })`)
      await screenshot(page.key + '-mobile-activities.png')
    }
    if (page.path === '/project-management/dashboard-1') {
      await evaluate(`document.querySelector('[data-copy-block="project-time-tracker"]').scrollIntoView({ block: 'start' })`)
      await screenshot(page.key + '-mobile-timer.png')
      await evaluate(`document.querySelector('[data-copy-block="project-my-issues"]').scrollIntoView({ block: 'start' })`)
      assert.equal(await evaluate('document.querySelectorAll("[data-workspace-issue]").length'), 8, 'Mobile uses all the same issues as desktop')
      await click('button[aria-label="Edit RFC-103 on mobile"]')
      await waitFor(`document.querySelector('input[name="workspaceIssueTitle"]')?.value === 'Sync issue filters with project views'`)
      await screenshot(page.key + '-mobile-issue-edit.png')
      await click('button[aria-label="Cancel workspace issue changes"]')
      await waitFor(`!document.querySelector('[role=dialog]')`)
      await evaluate(`document.querySelector('[data-copy-block="project-workspace-panel"]').scrollIntoView({ block: 'start' })`)
      await screenshot(page.key + '-mobile-agenda.png')
    }
    if (page.path === '/project-management/dashboard-2') {
      await evaluate(`document.querySelector('[data-copy-block="project-issue-map"]').scrollIntoView({ block: 'start' })`)
      await screenshot(page.key + '-mobile-map.png')
      await evaluate(`document.querySelector('[data-copy-block="project-current-projects"]').scrollIntoView({ block: 'start' })`)
      await click('button[aria-label="Add current demo project"]')
      await waitFor(`document.querySelector('input[name="planningRecordName"]')`)
      await screenshot(page.key + '-mobile-create.png')
      await click('button[aria-label="Cancel planning record"]')
      await waitFor(`!document.querySelector('[role=dialog]')`)
      await evaluate(`document.querySelector('[data-copy-block="project-planning-members"]').scrollIntoView({ block: 'start' })`)
      await screenshot(page.key + '-mobile-members.png')
      assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true, 'Planning timeline scrolls internally, not the entire page')
    }
    if (['/ecommerce/add-customer', '/ecommerce/edit-customer/cus-1742'].includes(page.path)) {
      await click('button[aria-label="Go to customer contacts"]')
      await screenshot(page.key + '-mobile-contacts.png')
      await click('button[aria-label="Go to customer cards"]')
      await click('button[aria-label="Add customer demo card"]')
      await screenshot(page.key + '-mobile-cards.png')
      assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true, 'Customer fields and navigation must fit mobile')
    }
    if (page.path === '/ecommerce/customer-list-1') {
      const root = '[data-copy-block="ecommerce-customer-directory"]'
      assert.equal(await evaluate('document.querySelectorAll("[data-directory-mobile]").length'), 11)
      await chooseTab(root, 'VIP')
      await waitFor('document.querySelectorAll("[data-directory-mobile]").length === 4')
      await chooseOption(root + ' [aria-label="Directory value band"]', 'High value')
      await waitFor('document.querySelectorAll("[data-directory-mobile]").length === 3')
      await click(root + ' button[aria-label="Edit mobile customer CUS-2465"]')
      await waitFor(`document.querySelector('input[name="directoryCustomerName"]')?.value === 'Sienna Blair'`)
      await screenshot(page.key + '-mobile-edit.png')
      await click('button[aria-label="Cancel directory edit"]')
      await waitFor(`!document.querySelector('[role=dialog]')`)
      await screenshot(page.key + '-mobile-filtered.png')
      assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true)
    }
    if (page.path === '/ecommerce/customer-detail-1') {
      await chooseTab('[data-copy-block="ecommerce-customer-history"]', 'Reviews')
      await screenshot(page.key + '-mobile-reviews.png')
      await click('button[aria-label="Edit customer shipping address"]')
      await waitFor(`document.querySelector('input[name="detailAddresscity"]')`)
      await screenshot(page.key + '-mobile-address.png')
      await click('button[aria-label="Cancel customer detail edit"]')
      await waitFor(`!document.querySelector('[role=dialog]')`)
      assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true)
    }
    if (page.path === '/payment-processor/customers') {
      const root = '[data-copy-block="processor-customer-directory"]'
      assert.equal(await evaluate('document.querySelectorAll("[data-processor-mobile]").length'), 5)
      await click(root + ' button[aria-label="Next processor customers"]')
      await waitFor(`document.querySelector('[data-processor-pagination]').textContent.includes('6–10 of 10')`)
      await chooseOption(root + ' [aria-label="Processor customer status filter"]', 'Review')
      await waitFor('document.querySelectorAll("[data-processor-mobile]").length === 3')
      await click('button[aria-label="View mobile processor customer cus_R4cV0mN8uBd6TzQ1xLfP9"]')
      await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Orbit Kitchen')`)
      await screenshot(page.key + '-mobile-details.png')
      await click('button[aria-label="Close processor customer details"]')
      await waitFor(`!document.querySelector('[role=dialog]')`)
      await screenshot(page.key + '-mobile-filtered.png')
      assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true)
    }
    if (page.path === '/payment-processor/customers-list-2') {
      const root = '[data-copy-block="payment-account-directory"]'
      await chooseOption(root + ' [aria-label="Payment account status filter"]', 'Blocked')
      await waitFor(`document.querySelectorAll('[data-account-mobile]').length === 1`)
      await chooseTab(root, 'Risk & KYC')
      await waitFor(`document.querySelector('[data-account-mobile]').textContent.includes('Rejected')`)
      await evaluate(`document.querySelector(${JSON.stringify(root + ' [role=tablist]')}).scrollIntoView({ block: 'start' })`)
      await screenshot(page.key + '-mobile-risk.png')
      await click('button[aria-label="View mobile payment account cus_6Bd19Q"]')
      await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Rivergate Studios')`)
      await screenshot(page.key + '-mobile-details.png')
      await click('button[aria-label="Close payment account details"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
      await click(root + ' button[aria-label="Reset payment account filters"]')
      await chooseTab(root, 'Payment Methods')
      await chooseOption(root + ' [aria-label="Payment account method filter"]', 'Wire')
      await waitFor(`document.querySelector('[data-account-mobile]').textContent.includes('Wire enabled')`)
      await evaluate(`document.querySelector(${JSON.stringify(root + ' [role=tablist]')}).scrollIntoView({ block: 'start' })`)
      assert.ok(await evaluate(`[...document.querySelectorAll(${JSON.stringify(root + ' [role=tab] [data-slot=label]')})].every(label => label.scrollWidth <= label.clientWidth)`), 'Mobile account tab labels must not truncate')
      await screenshot(page.key + '-mobile-methods.png')
      await evaluate(`document.documentElement.classList.add('dark')`)
      await screenshot(page.key + '-mobile-dark.png')
      await evaluate(`document.documentElement.classList.remove('dark')`)
      assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true)
      result.paymentAccountMobile = true
    }
    if (page.path === '/payment-processor/customer-detail') {
      await click('[aria-label="Manage mobile demo billing card 2"]')
      await waitFor(`document.querySelector('input[name="billingCardLast4"]').value === '7299'`)
      await screenshot(page.key + '-mobile-card.png')
      await click('[aria-label="Cancel demo billing card"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
      await chooseOption('[aria-label="Billing invoice status"]', 'Declined')
      await click('[aria-label="Toggle invoice SD862840-45-1"]')
      await screenshot(page.key + '-mobile-invoice.png')
      await evaluate(`document.documentElement.classList.add('dark')`)
      await screenshot(page.key + '-mobile-dark.png')
      await evaluate(`document.documentElement.classList.remove('dark')`)
      assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true)
    }
    if (page.path === '/payment-processor/customer-detail-2') {
      await click('[aria-label="Edit subscription customer profile"]')
      await waitFor(`document.querySelector('input[name="subscriptionCustomerEmail"]')`)
      await screenshot(page.key + '-mobile-profile.png')
      await click('[aria-label="Cancel subscription customer profile"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
      await chooseOption('[aria-label="Subscription invoice status"]', 'Overdue')
      await waitFor(`document.querySelectorAll('[data-subscription-mobile]').length === 1`)
      await click('[aria-label="View mobile subscription invoice INV-20198"]')
      await waitFor(`document.querySelector('[role=dialog]').textContent.includes('Product design sprint')`)
      await screenshot(page.key + '-mobile-invoice.png')
      await click('[aria-label="Close subscription invoice details"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
      await evaluate(`document.documentElement.classList.add('dark')`)
      await screenshot(page.key + '-mobile-dark.png')
      await evaluate(`document.documentElement.classList.remove('dark')`)
      assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true)
    }
    if (page.path === '/payment-processor/customer-detail-3') {
      await click('[aria-label="Edit overview customer profile"]')
      await waitFor(`document.querySelector('input[name="overviewCustomerName"]')`)
      await screenshot(page.key + '-mobile-profile.png')
      await click('[aria-label="Cancel overview customer edit"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
      await chooseOption('[aria-label="Overview transaction status"]', 'Declined')
      await evaluate(`document.querySelector('[data-overview-transaction]').scrollIntoView({ block: 'center' })`)
      await screenshot(page.key + '-mobile-transaction.png')
      await evaluate(`document.documentElement.classList.add('dark')`)
      await screenshot(page.key + '-mobile-dark.png')
      await evaluate(`document.documentElement.classList.remove('dark')`)
      assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true)
    }
    if (page.path === '/project-management/dashboard-3') {
      await chooseOption('[aria-label="Command sprint period"]', 'Previous sprint')
      await screenshot(page.key + '-mobile-sprint.png')
      await chooseOption('[aria-label="Command fiscal year"]', 'FY2025')
      await screenshot(page.key + '-mobile-budget.png')
      await click('[aria-label="Open command invite preview"]')
      await waitFor(`document.querySelector('input[name="commandInviteName"]')`)
      await screenshot(page.key + '-mobile-invite.png')
      await click('[aria-label="Cancel command invite"]'); await waitFor(`!document.querySelector('[role=dialog]')`)
      await evaluate(`document.querySelector('[data-copy-block="command-throughput"]').scrollIntoView({ block: 'start' })`)
      await screenshot(page.key + '-mobile-throughput.png')
      await evaluate(`document.documentElement.classList.add('dark')`)
      await screenshot(page.key + '-mobile-dark.png')
      await evaluate(`document.documentElement.classList.remove('dark')`)
      assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true)
    }
    if (page.path === '/project-management/dashboard-4') {
      await send('Emulation.setDeviceMetricsOverride', { width: 320, height: 740, deviceScaleFactor: 1, mobile: true })
      assert.equal(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), true, `${page.path}: 320px horizontal overflow`)
      await screenshot(page.key + '-mobile-320.png')
      await tap('button[aria-label="Elegir un bloque para copiar"]')
      await waitFor('document.querySelector("[role=menuitem]")')
      await tap('[role="menuitem"]')
      await waitFor(`(() => { const r = document.querySelector('[role=toolbar]').getBoundingClientRect(); return r.left >= 0 && r.right <= window.innerWidth; })()`)
      result.mobile320 = true
      await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true })
    }
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
    if (['unauthorized-screen', 'forbidden-screen', 'not-found-screen'].includes(block.id)) {
      const destination = await evaluate(`document.querySelector('a').getAttribute('href')`)
      assert.equal(destination, '/', 'Portable home link')
      await navigate(pasteBase + '/', 'main')
      await navigate(pasteBase + '/' + block.id, '[data-paste-test]')
      await click('[data-paste-test] button')
      await waitFor(`location.pathname === '/'`)
      result.goBack = true
    }
    if (block.id === 'maintenance-screen') {
      await click('[data-paste-test] button')
      await waitFor(`document.querySelector('[role=dialog]')?.textContent.includes('Routine maintenance')`)
      assert.equal(await evaluate(`document.querySelectorAll('[role=dialog] input, [role=dialog] textarea').length`), 0, 'Maintenance information must not show an edit form')
      await screenshot('maintenance-dialog.png')
      await click('button[aria-label="Close maintenance information"]')
      await waitFor(`!document.querySelector('[role=dialog]')`)
      result.maintenanceDialog = true
    }
    if (block.id === 'developer-api-key-manager') await checkDemoApiKeys('[data-paste-test]')
    if (block.id === 'developer-log-explorer') await checkEventLogs('[data-paste-test]')
    if (block.id === 'developer-visitor-summary') await checkVisitorSummary('[data-paste-test]')
    if (block.id === 'developer-referrer-summary') await checkVisitorSummary('[data-paste-test]', true)
    if (['developer-request-metrics', 'developer-response-metrics', 'developer-visitor-metrics'].includes(block.id)) await checkOverviewMetrics('[data-paste-test]')
    if (block.id === 'project-work-hours') await checkWorkspaceHours('[data-paste-test]')
    if (block.id === 'project-time-tracker') await checkWorkspaceTimer('[data-paste-test]')
    if (block.id === 'project-my-issues') await checkWorkspaceIssues('[data-paste-test]')
    if (block.id === 'project-workspace-panel') await checkWorkspacePanel('[data-paste-test]')
    if (block.id === 'ecommerce-add-customer-editor') await checkCustomerCreation('[data-paste-test]')
    if (block.id === 'ecommerce-edit-customer-editor') await checkCustomerEditing('[data-paste-test]')
    if (block.id === 'ecommerce-customer-directory') await checkCustomerDirectory('[data-paste-test]')
    if (block.id === 'ecommerce-customer-profile') await checkCustomerProfile('[data-paste-test]')
    if (block.id === 'ecommerce-customer-history') await checkCustomerHistory('[data-paste-test]')
    if (block.id === 'ecommerce-customer-details') await checkCustomerDetails('[data-paste-test]')
    if (block.id === 'processor-customer-directory') await checkProcessorCustomers('[data-paste-test]')
    if (block.id === 'processor-billing-plan') await checkBillingPlan('[data-paste-test]')
    if (block.id === 'processor-billing-cards') await checkBillingCards('[data-paste-test]')
    if (block.id === 'processor-billing-invoices') await checkBillingInvoices('[data-paste-test]')
    if (block.id === 'processor-subscription-profile') await checkSubscriptionProfile('[data-paste-test]')
    if (block.id === 'processor-subscription-ledger') await checkSubscriptionLedger('[data-paste-test]', true)
    if (block.id === 'processor-customer-overview') await checkCustomerOverview('[data-paste-test]')
    if (commandBlockChecks[block.id]) await commandBlockChecks[block.id]('[data-paste-test]')
    if (block.id === 'payment-account-summary') await checkPaymentAccountSummary('[data-paste-test]')
    if (block.id === 'payment-account-directory') await checkPaymentAccounts('[data-paste-test]', true)
    if (block.id === 'ecommerce-customer-metrics') {
      assert.equal(await evaluate('document.querySelectorAll("[data-customer-metric]").length'), 4)
      assert.ok(await evaluate(`document.querySelector('[data-customer-metric="count"]').textContent.includes('11') && document.querySelector('[data-customer-metric="repeat"]').textContent.includes('100.0%')`))
    }
    if (block.id === 'project-planning-actions') await checkPlanningActions('[data-paste-test]')
    if (block.id === 'project-issue-map') await checkPlanningMap('[data-paste-test]')
    if (block.id === 'project-current-projects') await checkCurrentProjects('[data-paste-test]')
    if (block.id === 'project-milestone-tracker') await checkPlanningMilestones('[data-paste-test]')
    if (block.id === 'project-planning-notes') await checkPlanningNotes('[data-paste-test]')
    if (block.id === 'project-planning-activity') await checkPlanningActivity('[data-paste-test]')
    if (block.id === 'project-planning-members') await checkPlanningMembers('[data-paste-test]')
    if (block.id === 'project-planning-status') {
      assert.equal(await evaluate(`document.querySelectorAll('[role=progressbar]').length`), 5)
      assert.ok(await evaluate(`[...document.querySelectorAll('[role=progressbar]')].every(element => Number(element.getAttribute('aria-valuenow')) >= 0 && Number(element.getAttribute('aria-valuenow')) <= 100 && element.hasAttribute('aria-valuenow'))`), 'Status progress bars must be determinate')
      assert.ok(await evaluate(`Math.abs([...document.querySelectorAll('[role=progressbar]')].reduce((sum, element) => sum + Number(element.getAttribute('aria-valuenow')), 0) - 100) < 0.01`), 'Status shares must sum to 100 percent')
    }
    if (block.id.startsWith('agent-') && block.id.endsWith('-run')) {
      if (['agent-report-run', 'agent-discount-run'].includes(block.id)) {
        const selector = '[data-paste-test] button[aria-expanded]'
        await click(selector)
        await waitFor(`document.querySelector(${JSON.stringify(selector)}).getAttribute('aria-expanded') === 'false'`)
        await click(selector)
        await waitFor(`document.querySelector(${JSON.stringify(selector)}).getAttribute('aria-expanded') === 'true'`)
        await click(`button[aria-label="${block.id === 'agent-report-run' ? 'Review' : 'View rule'}"]`)
        await waitFor(`document.querySelector('[role=dialog]')?.textContent.includes(${JSON.stringify(block.id === 'agent-report-run' ? '2,420 above the review threshold' : 'maximum of 20%')})`)
      } else {
        await click('[data-paste-test] button')
        await waitFor(`document.querySelector('[role=dialog]')?.textContent.includes('static example of an agent run')`)
      }
      assert.equal(await evaluate(`document.querySelectorAll('[role=dialog] input, [role=dialog] textarea').length`), 0, `${block.id}: details should not show an edit form`)
      if (block.id === 'agent-billing-run') {
        await click('button[aria-label="Export demo CSV"]')
        const deadline = Date.now() + 10000
        const csvPath = resolve(profile, 'run_62ca.csv')
        while (!existsSync(csvPath)) {
          assert.ok(Date.now() < deadline, 'CSV download timed out')
          await new Promise(resolve => setTimeout(resolve, 50))
        }
        const csv = await readFile(csvPath, 'utf8')
        assert.ok(csv.includes('run_62ca') && csv.includes('Validate monthly billing export') && !csv.includes('searchRunsOrIDs'), 'Export the selected run, not filter values')
        result.activityCsv = true
      }
      await click('button[aria-label="Close run details"]')
      await waitFor(`!document.querySelector('[role=dialog]')`)
    }
    assert.deepEqual(errors, [], `${block.id}: standalone interaction errors`)
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
