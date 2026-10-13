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
      const overlapsControls = await evaluate(`(() => { const toolbar = document.querySelector('[role=toolbar]').getBoundingClientRect(); return [...document.querySelector('[data-page]').querySelectorAll('button, a, input, textarea, select, [role=button], [role=combobox]')].some(element => { const r = element.getBoundingClientRect(); return r.width && r.height && toolbar.left < r.right && toolbar.right > r.left && toolbar.top < r.bottom && toolbar.bottom > r.top; }); })()`)
      assert.equal(overlapsControls, false, `${block.id}: tools overlap native controls`)
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
