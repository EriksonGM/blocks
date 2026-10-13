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
  await evaluate(`document.querySelector(${JSON.stringify(selector)}).scrollIntoView({ block: 'nearest' })`)
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
  await evaluate(`(() => { const input = document.querySelector(${JSON.stringify(selector)}); input.value = ${JSON.stringify(value)}; input.dispatchEvent(new Event('input', { bubbles: true })); })()`)
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
