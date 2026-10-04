import { readFile, writeFile, mkdir, access } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { themeClass, themeStyle, themeColor, pageStyles, chartStyles, canvasStyles } from './migration/theme.mjs'

// One-time source migration. There is no renderer or reference-data dependency at runtime.
const root = resolve('.')
const manifest = JSON.parse(await readFile(resolve(root, 'app/data/pages.json'), 'utf8'))
const navigation = JSON.parse(await readFile(resolve(root, 'app/data/reference/navigation.json'), 'utf8'))
const links = navigation.groups.flatMap(group => group.items.flatMap(item => item.links))
const paths = manifest.map(page => page.path)
const standalone = new Set(['/login', '/register', '/forgot-password', '/401', '/403', '/404', '/error', '/503', '/terms', '/privacy'])

const escapeAttribute = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const escapeText = value => escapeAttribute(value).replaceAll('{', '&#123;').replaceAll('}', '&#125;')
const literal = value => JSON.stringify(value)
const bind = (name, expression) => ` ${name}="${/^[:@]|^v-/.test(name) ? String(expression).replaceAll('"', '&quot;') : escapeAttribute(expression)}"`
const attr = (name, value) => value === undefined || value === null ? '' : bind(name, value)
const camel = value => {
  let name = String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]+(.)/g, (_, next) => next.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '')
  name = name.charAt(0).toLowerCase() + name.slice(1)
  return /^[a-zA-Z]/.test(name) ? name.slice(0, 64) : `field${name}`
}
const text = node => node?.text ?? (node?.children || []).map(text).join('')
const find = (node, predicate) => [...(predicate(node) ? [node] : []), ...(node.children || []).flatMap(child => find(child, predicate))]
const checkbox = node => find(node, child => child.attrs?.role === 'checkbox' || child.attrs?.type === 'checkbox').length > 0
const interactive = node => find(node, child => ['input', 'textarea', 'select'].includes(child.tag) || ['checkbox', 'switch', 'combobox'].includes(child.attrs?.role)).length > 0
const caption = node => text(find(node, child => /^h[1-6]$/.test(child.tag || '') || /font-semibold/.test(child.attrs?.class || ''))[0] || node).trim().slice(0, 90)
const comment = value => `<!-- ${String(value).replaceAll('--', '—').replaceAll('>', '')} -->`
const voidTags = new Set(['img', 'br', 'wbr', 'source', 'area', 'base', 'col', 'embed', 'link', 'meta', 'param', 'track'])
const colorAttributes = new Set(['fill', 'stroke', 'stop-color', 'flood-color'])

function pageFile(path) {
  const directory = path.slice(1)
  return `app/pages/${directory}${paths.some(other => other.startsWith(`${path}/`)) ? '/index' : ''}.vue`
}

class PageWriter {
  constructor(page) {
    this.page = page
    this.fields = new Map()
    this.fieldKeys = new Map()
    this.usedNames = new Set()
    this.declarations = []
    this.tables = []
    this.tabs = []
    this.canvasCount = 0
    this.composerCount = 0
    this.menuCount = 0
    this.cardCount = 0
    this.chartCount = 0
    this.hasDialog = false
    this.hasCopy = false
    this.hasExport = false
    this.hasSubmit = false
    this.hasToast = false
    this.hasPrint = false
    this.searchFields = []
  }

  field(node, hint = '', initial) {
    const identity = /search|filter/i.test(node.attrs?.placeholder || '') ? `search:${node.attrs.placeholder}` : node.attrs?.id || node.attrs?.name || node.key
    if (this.fieldKeys.has(identity)) return this.fieldKeys.get(identity)
    let base = node.attrs?.name || node.attrs?.id || hint || node.attrs?.placeholder || `field ${this.fields.size + 1}`
    if (/^[:_]|radix/i.test(base)) base = hint || node.attrs?.placeholder || `field ${this.fields.size + 1}`
    base = camel(base)
    let name = base || `field${this.fields.size + 1}`
    let suffix = 2
    while (this.usedNames.has(name)) name = `${base}${suffix++}`
    this.usedNames.add(name)
    const value = initial ?? node.attrs?.value ?? ''
    this.fields.set(name, value)
    this.fieldKeys.set(identity, name)
    if (/search|filter/i.test(String(node.attrs?.placeholder || ''))) this.searchFields.push(name)
    return name
  }

  normalized(name, value, node) {
    if (name === 'class') {
      let classes = themeClass(value)
      if (/^h[1-6]$/.test(node.tag) || node.tag === 'p' && /font-semibold|font-bold/.test(classes)) classes += ' text-highlighted'
      if (classes.split(' ').some(token => /(?:^|:)border(?:-[trblxy])?$/.test(token)) && !/border-(?:default|muted|accented|inverted|primary|success|error|warning|info|secondary)/.test(classes)) classes += ' border-default'
      return classes.trim()
    }
    if (name === 'style') return themeStyle(value)
    if (colorAttributes.has(name)) return themeColor(value)
    return value
  }

  attributes(node, context = {}, exclude = []) {
    let result = ''
    for (const [name, original] of Object.entries(node.attrs || {})) {
      if (exclude.includes(name) || ['checked', 'value', 'disabled', 'required', 'role'].includes(name) && context.control || ['data-state', 'aria-haspopup'].includes(name)) continue
      if (name === 'role' && ['tab', 'tablist', 'tabpanel', 'combobox', 'checkbox', 'switch'].includes(original)) continue
      if (name === 'viewBox' && (node.attrs?.class || '').includes('react-flow')) continue
      const value = this.normalized(name, original, node)
      const dynamic = context.properties?.get(`${node.key}:attr:${name}`)
      const enumType = name === 'stroke-linecap' ? " as 'round' | 'butt' | 'square' | 'inherit'" : name === 'stroke-linejoin' ? " as 'round' | 'miter' | 'bevel' | 'inherit'" : ''
      const presentation = name === 'class' && context.card ? value.split(' ').filter(token => !['border', 'border-default', 'bg-default', 'text-default'].includes(token)).join(' ') : value
      result += dynamic ? bind(`:${name}`, `row.original.${dynamic}${enumType}`) : attr(name, presentation)
    }
    return result
  }

  children(node, depth, context = {}) {
    const chunks = []
    let inlineText = ''
    const flush = () => {
      if (inlineText) chunks.push('  '.repeat(depth) + inlineText)
      inlineText = ''
    }
    for (const child of node.children || []) {
      if (child.text !== undefined) {
        const property = context.properties?.get(`${child.key}:text`)
        inlineText += property ? `{{ row.original.${property} }}` : escapeText(child.text)
      } else {
        flush()
        chunks.push(this.render(child, depth, context))
      }
    }
    flush()
    return chunks.join('\n')
  }

  element(tag, attributes, children, depth) {
    const indent = '  '.repeat(depth)
    if (!children) return `${indent}<${tag}${attributes} />`
    return `${indent}<${tag}${attributes}>\n${children}\n${indent}</${tag}>`
  }

  action(label, context = {}) {
    const lower = label.toLowerCase().trim()
    const domain = this.page.path.split('/')[1]
    const direct = links.find(link => link.path.startsWith(`/${domain}/`) && link.label.toLowerCase() === lower)
    if (direct && direct.path !== this.page.path) return `navigateTo(${literal(direct.path)})`
    if (/^(go home|back to home|back to dashboard|log ?in|sign ?in|sign ?up|register|create an account)$/.test(lower)) return `navigateTo('/ecommerce/dashboard-1')`
    if (/^(cancel|back|go back)$/.test(lower)) {
      const target = links.find(link => link.path.startsWith(`/${domain}/`) && /list-1|transactions$|customers$/.test(link.path))
      return `navigateTo(${literal(target?.path || '/ecommerce/dashboard-1')})`
    }
    if (context.canvas && ['zoom in', 'zoom out', 'fit view'].includes(lower)) return lower === 'fit view' ? `fitCanvas(${context.canvas})` : `zoomCanvas(${context.canvas}, ${lower === 'zoom in' ? '1.15' : '1 / 1.15'})`
    if (context.composer && (/send|submit/.test(lower) || !label)) return `sendMessage(${literal(context.composer)})`
    if (/export|download|csv/.test(lower)) { this.hasExport = true; return 'exportCsv()' }
    if (/copy/.test(lower)) { this.hasCopy = true; this.hasToast = true; return `copyValue(${literal(label)})` }
    if (/print/.test(lower)) { this.hasPrint = true; return 'printPage()' }
    this.hasDialog = true
    this.hasToast = true
    return `openAction(${literal(label || 'Actions')}${context.table ? `, row.original._id, ${context.table}` : ''})`
  }

  menu(node, context = {}) {
    const items = (node.options || []).map(label => `{ label: ${literal(label)}, onSelect: () => ${this.action(label, context)} }`)
    if (context.table) return `[${items.join(', ')}]`
    const name = `menu${++this.menuCount}Items`
    this.declarations.push(`const ${name} = [\n  ${items.join(',\n  ')}\n]`)
    return name
  }

  renderTable(node, depth) {
    const number = this.tables.length + 1
    const prefix = `table${number}`
    const headers = find(node, child => child.tag === 'th')
    const sourceRows = find(node, child => child.tag === 'tr' && child.children?.some(cell => cell.tag === 'td'))
    const names = new Set()
    const columns = headers.map((header, index) => {
      let base = camel(text(header).trim() || (checkbox(header) ? 'selection' : 'actions'))
      if (!base) base = `column${index + 1}`
      let name = base, suffix = 2
      while (names.has(name)) name = `${base}${suffix++}`
      names.add(name)
      return { name, label: text(header).trim(), header, selection: checkbox(header), groups: [] }
    })
    if (!columns.length && sourceRows.length) sourceRows[0].children.filter(cell => cell.tag === 'td').forEach((cell, index) => columns.push({ name: `column${index + 1}`, label: `Column ${index + 1}`, header: { tag: 'th' }, selection: false, groups: [] }))
    const rows = sourceRows.map((row, index) => {
      const record = { _id: String(index + 1) }
      const cells = row.children.filter(cell => cell.tag === 'td')
      columns.forEach((column, cellIndex) => {
        const cell = cells[cellIndex] || { tag: 'td', children: [] }
        record[column.name] = text(cell).trim()
        if (column.selection) return
        const shape = child => child.text !== undefined ? 'text' : `${child.tag}[${Object.keys(child.attrs || {}).filter(key => !['value', 'checked'].includes(key)).sort().join(',')}](${(child.children || []).map(shape).join(',')})`
        const signature = shape(cell) + (interactive(cell) ? cell.key : '')
        let group = column.groups.find(group => group.signature === signature)
        if (!group) {
          group = { signature, cell, properties: new Map(), number: column.groups.length }
          let counter = 0
          const register = child => {
            if (child.text !== undefined) group.properties.set(`${child.key}:text`, `${column.name}Text${++counter}`)
            for (const name of Object.keys(child.attrs || {})) group.properties.set(`${child.key}:attr:${name}`, `${column.name}${name.replace(/[^a-zA-Z0-9]/g, '').replace(/^./, char => char.toUpperCase())}${++counter}`)
            child.children?.forEach(register)
          }
          register(cell)
          column.groups.push(group)
        }
        record[`${column.name}Group`] = String(group.number)
        const pair = (original, sample) => {
          if (original.text !== undefined) record[group.properties.get(`${sample.key}:text`)] = original.text
          for (const [name, value] of Object.entries(original.attrs || {})) {
            const property = group.properties.get(`${sample.key}:attr:${name}`)
            if (property) record[property] = this.normalized(name, value, original)
          }
          original.children?.forEach((child, childIndex) => pair(child, sample.children[childIndex]))
        }
        pair(cell, group.cell)
      })
      return record
    })
    // Keep stable styling in the template. Row data only stores values that vary.
    for (const column of columns) {
      for (const group of column.groups) {
        const records = rows.filter(row => row[`${column.name}Group`] === String(group.number))
        for (const [location, property] of [...group.properties]) {
          if (location.endsWith(':text') && records.every(row => row[column.name].trim() === String(row[property] || '').trim())) {
            group.properties.set(location, column.name)
          } else if (new Set(records.map(row => row[property])).size < 2) {
            group.properties.delete(location)
          }
        }
      }
    }
    const usedProperties = new Set(['_id', ...columns.flatMap(column => [column.name, ...(column.groups.length > 1 ? [`${column.name}Group`] : []), ...column.groups.flatMap(group => [...group.properties.values()])])])
    for (const row of rows) for (const property of Object.keys(row)) if (!usedProperties.has(property)) delete row[property]
    const keys = [...new Set(rows.flatMap(row => Object.keys(row)))]
    const completeRows = rows.map(row => Object.fromEntries(keys.map(key => [key, row[key] ?? ''])))
    const table = { number, prefix, columns, rows: completeRows }
    this.tables.push(table)
    let slots = ''
    for (const column of columns) {
      const indent = '  '.repeat(depth + 1)
      if (column.selection) {
        slots += `\n${indent}<template #${column.name}-header="{ table }">\n${indent}  <UCheckbox :model-value="table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected()" aria-label="Select all rows" @update:model-value="table.toggleAllPageRowsSelected(Boolean($event))" />\n${indent}</template>\n${indent}<template #${column.name}-cell="{ row }">\n${indent}  <UCheckbox :model-value="row.getIsSelected()" aria-label="Select row" @update:model-value="row.toggleSelected(Boolean($event))" />\n${indent}</template>`
        continue
      }
      if (column.label) slots += `\n${indent}<template #${column.name}-header="{ column }">\n${indent}  <UButton color="neutral" variant="ghost" size="xs"${attr('label', column.label)} :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />\n${indent}</template>`
      slots += `\n${indent}<template #${column.name}-cell="{ row }">`
      for (const group of column.groups) {
        const cellContext = { properties: group.properties, table: number }
        if (column.groups.length === 1) slots += `\n${this.children(group.cell, depth + 2, cellContext)}`
        else slots += `\n${indent}  <template v-if="row.original.${column.name}Group === '${group.number}'">\n${this.children(group.cell, depth + 3, cellContext)}\n${indent}  </template>`
      }
      slots += `\n${indent}</template>`
    }
    return `${'  '.repeat(depth)}${comment(`Table ${number}: ${headers.map(header => text(header).trim()).filter(Boolean).join(' / ')}`)}\n${this.element('UTable', bind('v-model:sorting', `${prefix}Sorting`) + bind('v-model:row-selection', `${prefix}Selection`) + bind(':data', `${prefix}FilteredRows`) + bind(':columns', `${prefix}Columns`) + this.attributes(node, {}, ['role', 'id']) + ` :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }"`, slots.trimStart(), depth)}`
  }

  renderTabs(node, depth, context) {
    const index = this.tabs.length + 1
    const buttons = find(node, child => child.attrs?.role === 'tab')
    const content = node.panels || buttons.map((button, itemIndex) => ({ label: text(button).trim(), tree: find(node, child => child.attrs?.role === 'tabpanel')[itemIndex] }))
    const items = content.map((panel, itemIndex) => ({ label: panel.label, value: String(itemIndex) }))
    const active = Math.max(0, buttons.findIndex(button => button.attrs?.['data-state'] === 'active'))
    this.tabs.push({ index, items, active: String(active) })
    if (!content.some(panel => panel.tree)) return this.element('UTabs', bind('v-model', `tabs${index}Active`) + bind(':items', `tabs${index}Items`) + ' :content="false" color="primary" variant="link"' + this.attributes(node, context, ['role', 'id']), '', depth)
    const panels = content.map((panel, itemIndex) => panel.tree ? `${'  '.repeat(depth + 2)}<template v-if="item.value === '${itemIndex}'">\n${this.render(panel.tree, depth + 3, context)}\n${'  '.repeat(depth + 2)}</template>` : '').join('\n')
    const inner = `${'  '.repeat(depth + 1)}<template #content="{ item }">\n${panels}\n${'  '.repeat(depth + 1)}</template>`
    return this.element('UTabs', bind('v-model', `tabs${index}Active`) + bind(':items', `tabs${index}Items`) + ' color="primary" variant="link"' + this.attributes(node, context, ['role', 'id']) + ` :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }"`, inner, depth)
  }

  renderComposer(node, depth, context) {
    const field = find(node, child => child.tag === 'textarea')[0]
    const name = this.field(field, `prompt${++this.composerCount}`)
    const addons = node.children?.filter(child => child.attrs?.['data-slot'] === 'input-group-addon') || []
    const indent = '  '.repeat(depth)
    const messages = `${indent}<div v-if="messages.length" class="my-4 space-y-4">\n${indent}  <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />\n${indent}</div>`
    const footer = `${indent}  <template #footer>\n${addons.map(addon => this.render(addon, depth + 2, { ...context, composer: name })).join('\n')}\n${indent}  </template>`
    return `${indent}${comment(`Chat composer: form.${name}`)}\n${messages}\n${this.element('UChatPrompt', bind('v-model', `form.${name}`) + ' :autofocus="false" color="primary" :rows="3"' + attr('placeholder', field.attrs?.placeholder) + this.attributes(node, context, ['role']) + bind('@submit', `sendMessage(${literal(name)})`) + ` :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }"`, footer, depth)}`
  }

  render(node, depth = 0, context = {}) {
    const indent = '  '.repeat(depth)
    if (node.text !== undefined) {
      const property = context.properties?.get(`${node.key}:text`)
      return indent + (property ? `{{ row.original.${property} }}` : escapeText(node.text))
    }
    const tag = node.tag === 'body' ? 'div' : node.tag || 'span'
    const data = node.attrs || {}
    const slot = data['data-slot']
    if (tag === 'icon') {
      const name = context.properties?.get(`${node.key}:attr:name`)
      const classes = context.properties?.get(`${node.key}:attr:class`)
      return `${indent}<UIcon${name ? bind(':name', `row.original.${name}`) : attr('name', data.name)}${classes ? bind(':class', `row.original.${classes} || 'size-4'`) : attr('class', themeClass(data.class) || 'size-4')} />`
    }
    if (tag === 'table') return this.renderTable(node, depth)
    if (slot === 'tabs' || data.role === 'tablist') return this.renderTabs(node, depth, context)
    if (slot === 'input-group' && find(node, child => child.tag === 'textarea').length) return this.renderComposer(node, depth, context)
    if (String(data.class).split(' ').includes('react-flow')) {
      const number = ++this.canvasCount
      return `${indent}${comment(`Workflow canvas ${number}: local pointer and zoom handlers`)}\n${this.element('div', this.attributes(node, context, ['role']) + ' role="application"' + bind(':ref', `element => setCanvasRoot(${number}, element)`) + bind('@pointerdown', `canvasPointerDown(${number}, $event)`) + bind('@pointermove', 'canvasPointerMove($event)') + ' @pointerup="canvasDrag = undefined" @pointercancel="canvasDrag = undefined"' + bind('@wheel.ctrl.prevent', `zoomCanvas(${number}, $event.deltaY < 0 ? 1.1 : 1 / 1.1)`), this.children(node, depth + 1, { ...context, canvas: number }), depth)}`
    }
    if (slot === 'field' && data['data-orientation'] !== 'horizontal') {
      const label = node.children?.find(child => child.tag === 'label')
      const control = find(node, child => ['input', 'textarea', 'select'].includes(child.tag) || child.attrs?.role === 'combobox')[0]
      if (label && control && control.attrs?.type !== 'file') {
        const initial = control.attrs?.type === 'number' ? Number(control.attrs.value || 0) : control.attrs?.type === 'checkbox' ? control.attrs.checked === 'true' : control.attrs?.role === 'combobox' ? text(control).trim() : undefined
        const name = this.field(control, text(label).trim(), initial)
        const inner = (node.children || []).filter(child => child !== label).map(child => this.render(child, depth + 1, { ...context, formField: name })).join('\n')
        return this.element('UFormField', attr('label', text(label).trim()) + attr('name', name) + this.attributes(node, context, ['role', 'id', 'data-orientation']) + (control.attrs?.required !== undefined ? ' required' : ''), inner, depth)
      }
    }
    if (data.role === 'checkbox' || data.role === 'switch' || tag === 'input' && data.type === 'checkbox') {
      const name = this.field(node, context.formField || data['aria-label'] || 'enabled', data.checked === 'true' || data['data-state'] === 'checked')
      return this.element(data.role === 'switch' ? 'USwitch' : 'UCheckbox', bind('v-model', `form.${name}`) + attr('aria-label', data['aria-label'] || 'Toggle setting'), '', depth)
    }
    if (data.role === 'combobox' && tag === 'button' || tag === 'select') {
      const label = text(node).trim()
      const name = this.field(node, context.formField || label || 'option', label)
      const options = node.options?.length ? node.options : tag === 'select' ? (node.children || []).map(text) : [label].filter(Boolean)
      const items = `${name}Options`
      if (!this.declarations.some(declaration => declaration.startsWith(`const ${items} `))) this.declarations.push(`const ${items} = ${JSON.stringify(options, null, 2)}`)
      return this.element('USelect', bind('v-model', `form.${name}`) + bind(':items', items) + attr('aria-label', data['aria-label'] || label || 'Select option') + this.attributes(node, { ...context, control: true }, ['id', 'type', 'name', 'aria-label', 'role']), '', depth)
    }
    if (tag === 'input' || tag === 'textarea') {
      const name = this.field(node, context.formField, data.type === 'number' ? Number(data.value || 0) : undefined)
      const type = data.type || 'text'
      const inputClasses = themeClass(data.class || 'w-full').split(' ').filter(token => !/^(?:file:|placeholder:|focus-visible:|disabled:|border(?:-|$)|px-|py-|shadow-|bg-transparent$|transition-)/.test(token)).join(' ')
      const attributes = this.attributes(node, { ...context, control: true }, ['id', 'name', 'type', 'role', 'class']) + attr('name', name) + (!context.formField ? attr('id', data.id) : '') + attr('class', inputClasses || 'w-full') + (data.required !== undefined ? ' required' : '') + (data.disabled !== undefined ? ' disabled' : '')
      if (type === 'hidden') return `${indent}<input type="hidden"${bind(':value', `form.${name}`)}${attributes} />`
      if (type === 'file') return this.element('UInput', ` type="file"${attributes}` + bind('@change', `form.${name} = ($event.target as HTMLInputElement).files?.[0]?.name || ''`), '', depth)
      return this.element(tag === 'textarea' ? 'UTextarea' : 'UInput', bind(type === 'number' ? 'v-model.number' : 'v-model', `form.${name}`) + (tag === 'input' ? attr('type', type) : ' :rows="4"') + attributes + ` :ui="{ base: 'h-full' }"`, '', depth)
    }
    if (tag === 'button') {
      const label = (text(node) || data['aria-label'] || '').trim()
      const solid = /bg-primary(?!\/)|bg-foreground|bg-neutral-900|bg-black/.test(data.class || '')
      const variant = solid ? 'solid' : /border-input|\bborder\b/.test(data.class || '') ? 'outline' : /bg-secondary|bg-muted|bg-accent/.test(data.class || '') ? 'soft' : 'ghost'
      const send = context.composer && (/send|submit/i.test(label) || find(node, child => child.tag === 'icon' && /arrow-up$|send$/.test(child.attrs?.name || '')).length)
      const ariaLabel = context.properties?.get(`${node.key}:attr:aria-label`)
      const attributes = attr('color', solid ? 'primary' : 'neutral') + attr('variant', variant) + this.attributes(node, { ...context, control: true }, ['type', 'aria-label', 'id', 'name']) + (ariaLabel ? bind(':aria-label', `row.original.${ariaLabel}`) : attr('aria-label', label || 'Actions')) + attr('type', send ? 'button' : data.type === 'submit' ? 'submit' : 'button')
      const inner = this.children(node, depth + 1, context)
      if (node.options?.length) return this.element('UDropdownMenu', bind(':items', this.menu(node, context)), this.element('UButton', attributes, inner, depth + 1), depth)
      return this.element('UButton', attributes + (send ? bind(':disabled', `!form.${context.composer}.trim()`) : data.disabled !== undefined ? ' disabled' : '') + (data.type === 'submit' && !send ? '' : bind('@click', send ? `sendMessage(${literal(context.composer)})` : this.action(label, context))), inner, depth)
    }
    if (tag === 'form') {
      this.hasSubmit = true; this.hasToast = true
      return `${indent}${comment('Form: controls and draft state are declared in this page')}\n${this.element('UForm', ' :state="form" @submit="saveForm"' + this.attributes(node, context, ['role']), this.children(node, depth + 1, context), depth)}`
    }
    if (slot === 'avatar') {
      const image = find(node, child => child.tag === 'img')[0]
      const imageSource = image && context.properties?.get(`${image.key}:attr:src`)
      const imageAlt = image && context.properties?.get(`${image.key}:attr:alt`)
      return this.element('UAvatar', (imageSource ? bind(':src', `row.original.${imageSource}`) : attr('src', image?.attrs?.src)) + (imageAlt ? bind(':alt', `row.original.${imageAlt}`) : attr('alt', image?.attrs?.alt || text(node))) + this.attributes(node, context, ['role', 'id', 'data-slot']), '', depth)
    }
    if (data.role === 'progressbar' || slot === 'progress') {
      const translate = Number(String(node.children?.[0]?.attrs?.style || '').match(/translateX\(-([\d.]+)%\)/)?.[1] || 0)
      return this.element('UProgress', bind(':model-value', String(Number(data['aria-valuenow'] || 100 - translate))) + ' color="primary" size="sm"' + this.attributes(node, context, ['role', 'id', 'aria-valuenow', 'aria-valuemax', 'aria-valuemin']), '', depth)
    }
    if (data.role === 'separator' || tag === 'hr') return this.element('USeparator', attr('orientation', data['data-orientation'] === 'vertical' ? 'vertical' : 'horizontal') + this.attributes(node, context, ['role', 'id']), '', depth)
    if (tag === 'kbd') return `${indent}<UKbd${this.attributes(node, context, ['role'])}>${escapeText(text(node))}</UKbd>`
    const isCard = slot === 'card' || tag === 'div' && /\bbg-card\b/.test(data.class || '') && /\bborder\b/.test(data.class || '')
    if (isCard) {
      this.cardCount++
      return `${indent}${comment(`Card ${this.cardCount}: ${caption(node)}`)}\n${this.element('UCard', this.attributes(node, { ...context, card: true }, ['role']) + ` :ui="{ body: 'contents' }"`, this.children(node, depth + 1, context), depth)}`
    }
    const isBadge = slot === 'badge' || tag === 'span' && /rounded-(full|md)/.test(data.class || '') && /inline-flex/.test(data.class || '') && /text-\[|text-xs/.test(data.class || '')
    if (isBadge) return this.element('UBadge', ' color="neutral" variant="subtle"' + this.attributes(node, context, ['role']), this.children(node, depth + 1, context), depth)
    if (tag === 'a') {
      const external = String(data.href).startsWith('/reference/') || /^https?:/.test(data.href || '')
      return this.element('NuxtLink', this.attributes(node, context, ['href', 'role']) + (context.properties?.get(`${node.key}:attr:href`) ? bind(':to', `row.original.${context.properties.get(`${node.key}:attr:href`)}`) : attr('to', data.href || '#')) + (external ? ' external' : ''), this.children(node, depth + 1, context), depth)
    }
    if (slot === 'chart' || String(data.class).includes('recharts-responsive-container')) {
      this.chartCount++
      return `${indent}${comment(`Chart ${this.chartCount}: SVG geometry and theme tokens are local to this page`)}\n${this.element('div', this.attributes(node, context, ['role']) + ' role="img" aria-label="Analytics chart"', this.children(node, depth + 1, context), depth)}`
    }
    let attributes = this.attributes(node, context)
    if (tag === 'svg' && String(data.class).includes('recharts-surface')) attributes += ' preserveAspectRatio="none"'
    if (tag === 'img') attributes += ' loading="lazy"'
    if (voidTags.has(tag)) return `${indent}<${tag}${attributes} />`
    if (node.children?.length && node.children.every(child => child.text !== undefined)) {
      const content = node.children.map(child => {
        const property = context.properties?.get(`${child.key}:text`)
        return property ? `{{ row.original.${property} }}` : escapeText(child.text)
      }).join('')
      return `${indent}<${tag}${attributes}>${content}</${tag}>`
    }
    return this.element(tag, attributes, this.children(node, depth + 1, context), depth)
  }

  script() {
    const sections = [`const route = useRoute()`, `useHead({ title: ${literal(`${this.page.label} · Blocks Admin`)} })`]
    const encodedPath = this.page.path.split('/').map(segment => encodeURIComponent(segment)).join('/')
    const meta = { ...(standalone.has(this.page.path) ? { layout: false } : {}), ...(encodedPath !== this.page.path ? { alias: [encodedPath] } : {}) }
    if (Object.keys(meta).length) sections.unshift(`definePageMeta(${JSON.stringify(meta)})`)
    if (this.hasToast || this.composerCount) sections.push('const toast = useToast()')
    if (this.fields.size) sections.push(commentJS('Page-local form values. Edit these defaults when copying the page.'), `const form = reactive(${JSON.stringify(Object.fromEntries(this.fields), null, 2)})`)
    else if (this.hasSubmit) sections.push('const form = reactive({})')
    this.tabs.forEach(tab => sections.push(`const tabs${tab.index}Active = ref(${literal(tab.active)})`, `const tabs${tab.index}Items = ${JSON.stringify(tab.items, null, 2)}`))
    sections.push(...this.declarations)
    this.tables.forEach(table => {
      const { prefix, columns, rows } = table
      const rowsDeclaration = rows.length ? `const ${prefix}Rows = ref(${JSON.stringify(rows, null, 2)})\ntype Table${table.number}Row = (typeof ${prefix}Rows.value)[number]` : `type Table${table.number}Row = { _id: string, ${columns.map(column => `${column.name}: string`).join(', ')} }\nconst ${prefix}Rows = ref<Table${table.number}Row[]>([])`
      sections.push(commentJS(`Table ${table.number}: edit the rows and column definitions here.`), rowsDeclaration, `const ${prefix}Columns: TableColumn<Table${table.number}Row>[] = ${JSON.stringify(columns.map(column => ({ accessorKey: column.name, header: column.label, ...(column.selection ? { enableSorting: false } : {}) })), null, 2)}`, `const ${prefix}Sorting = ref<{ id: string, desc: boolean }[]>([])`, `const ${prefix}Selection = ref<Record<string, boolean>>({})`)
      const search = this.searchFields.length ? `String(form.${this.searchFields[0]} || '').toLowerCase()` : "''"
      sections.push(`const ${prefix}FilteredRows = computed(() => {\n  const query = ${search}\n  const keys = ${JSON.stringify(columns.filter(column => !column.selection).map(column => column.name))} as const\n  return ${prefix}Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))\n})`)
    })
    if (this.fields.size) sections.push(`// Restore drafts after hydration; the first client render matches SSR.\nonMounted(() => {\n  const key = 'nuxt-ui-page:' + route.path\n  try {\n    const draft = localStorage.getItem(key)\n    if (draft) Object.assign(form, JSON.parse(draft))\n  } catch { /* Use the defaults when no draft exists. */ }\n  watch(form, value => localStorage.setItem(key, JSON.stringify(value)), { deep: true, flush: 'sync' })\n})`)
    if (this.hasSubmit) sections.push(`function saveForm() {\n${['/login', '/register'].includes(this.page.path) ? "  return navigateTo('/ecommerce/dashboard-1')" : `  toast.add({ title: ${literal(this.page.path === '/forgot-password' ? 'Reset link requested' : 'Changes saved')}, color: 'success', icon: 'i-lucide-check' })`}\n}`)
    if (this.hasDialog) {
      const removeRows = this.tables.length ? `  if (actionDialog.mode === 'delete' && actionDialog.recordId) {\n${this.tables.map(table => `    if (actionDialog.table === ${table.number}) ${table.prefix}Rows.value = ${table.prefix}Rows.value.filter(row => row._id !== actionDialog.recordId)`).join('\n')}\n  }\n` : ''
      sections.push(`const actionDialog = reactive({ open: false, title: '', mode: 'edit', name: '', description: '', recordId: '', table: 0 })\nfunction openAction(label: string, recordId = '', table = 0) {\n  Object.assign(actionDialog, { open: true, title: label, mode: /delete|remove|archive/i.test(label) ? 'delete' : 'edit', recordId, table })\n}\nfunction confirmAction() {\n${removeRows}  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })\n  actionDialog.open = false\n}`)
    }
    if (this.hasCopy) sections.push(`async function copyValue(value: string) {\n  await navigator.clipboard.writeText(value)\n  toast.add({ title: 'Copied to clipboard', color: 'success' })\n}`)
    if (this.hasPrint) sections.push('function printPage() { window.print() }')
    if (this.hasExport) {
      const table = this.tables[0]
      const source = table ? `${table.prefix}FilteredRows.value.map(row => ${JSON.stringify(table.columns.map(column => column.name))}.map(key => String(row[key as keyof typeof row])))` : this.fields.size ? 'Object.entries(form).map(([name, value]) => [name, String(value)])' : '[[route.path]]'
      sections.push(`function exportCsv() {\n  const rows = ${source}\n  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\\n')\n  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))\n  const anchor = document.createElement('a')\n  anchor.href = url\n  anchor.download = ${literal(this.page.path.slice(1).replaceAll('/', '-') + '.csv')}\n  anchor.click()\n  URL.revokeObjectURL(url)\n}`)
    }
    if (this.composerCount) sections.push(`const messages = ref<{ id: string, role: 'user' | 'assistant', text: string }[]>([])\nfunction sendMessage(field: keyof typeof form) {\n  const message = String(form[field]).trim()\n  if (!message) return\n  messages.value.push({ id: 'user-' + messages.value.length, role: 'user', text: message })\n  messages.value.push({ id: 'assistant-' + messages.value.length, role: 'assistant', text: 'Your message has been added to this demo conversation. Connect sendMessage to your AI API for real responses.' })\n  Object.assign(form, { [field]: '' })\n}`)
    if (this.canvasCount) sections.push(canvasScript)
    return `<script setup lang="ts">\n${this.tables.length ? "import type { TableColumn } from '@nuxt/ui'\n\n" : ''}${sections.filter(Boolean).join('\n\n')}\n</script>`
  }

  dialogTemplate() {
    if (!this.hasDialog) return ''
    return `\n    <!-- Page-local action dialog -->\n    <UModal v-model:open="actionDialog.open" :title="actionDialog.title" description="Update the details below.">\n      <template #body>\n        <p v-if="actionDialog.mode === 'delete'" class="text-sm text-muted">Are you sure you want to remove this item?</p>\n        <div v-else class="space-y-4">\n          <UFormField label="Name"><UInput v-model="actionDialog.name" class="w-full" /></UFormField>\n          <UFormField label="Description"><UTextarea v-model="actionDialog.description" class="w-full" /></UFormField>\n        </div>\n      </template>\n      <template #footer>\n        <div class="flex w-full justify-end gap-2">\n          <UButton color="neutral" variant="outline" @click="actionDialog.open = false">Cancel</UButton>\n          <UButton :color="actionDialog.mode === 'delete' ? 'error' : 'primary'" @click="confirmAction">{{ actionDialog.mode === 'delete' ? 'Remove' : 'Save changes' }}</UButton>\n        </div>\n      </template>\n    </UModal>`
  }

  output() {
    const template = this.render(this.page.tree, 2)
    return `<!-- Page: ${this.page.path} | All content, state and styles live in this file. -->\n${this.script()}\n\n<template>\n  <div class="page-content flex h-full min-h-0 w-full flex-col text-default"${attr('data-page', this.page.path)}>\n${template}${this.dialogTemplate()}\n  </div>\n</template>\n\n<style scoped>\n${pageStyles}${this.chartCount ? chartStyles : ''}${this.canvasCount ? canvasStyles : ''}</style>\n`
  }
}

const commentJS = value => `// ${value}`
const canvasScript = `// Canvas interaction is local to this page; no graph renderer is imported.
const canvasRoots = new Map<number, HTMLElement>()
const canvasViews = new Map<number, { x: number, y: number, scale: number }>()
let canvasDrag: { canvas: number, element?: HTMLElement, startX: number, startY: number, x: number, y: number } | undefined
function setCanvasRoot(index: number, element: unknown) {
  if (element instanceof HTMLElement) { canvasRoots.set(index, element); nextTick(() => fitCanvas(index)) }
  else canvasRoots.delete(index)
}
function canvasView(index: number) {
  if (!canvasViews.has(index)) canvasViews.set(index, { x: 0, y: 0, scale: 1 })
  return canvasViews.get(index)!
}
function paintCanvas(index: number) {
  const element = canvasRoots.get(index)?.querySelector<HTMLElement>('.workflow-canvas__viewport')
  const view = canvasView(index)
  if (element) element.style.transform = 'translate(' + view.x + 'px, ' + view.y + 'px) scale(' + view.scale + ')'
}
function zoomCanvas(index: number, factor: number) {
  const view = canvasView(index)
  view.scale = Math.max(0.15, Math.min(2.5, view.scale * factor))
  paintCanvas(index)
}
function fitCanvas(index: number) {
  const root = canvasRoots.get(index)
  const nodes = root?.querySelectorAll<HTMLElement>('.workflow-canvas__node')
  if (!root || !nodes?.length || !root.clientWidth || !root.clientHeight) return
  const bounds = [...nodes].map(node => {
    const match = node.style.transform.match(/translate\\(([-\\d.]+)px,?\\s*([-\\d.]+)px\\)/)
    return { x: Number(match?.[1] || 0), y: Number(match?.[2] || 0), width: node.offsetWidth, height: node.offsetHeight }
  })
  const x = Math.min(...bounds.map(node => node.x)), y = Math.min(...bounds.map(node => node.y))
  const width = Math.max(...bounds.map(node => node.x + node.width)) - x
  const height = Math.max(...bounds.map(node => node.y + node.height)) - y
  const view = canvasView(index)
  view.scale = Math.max(0.15, Math.min(1, (root.clientWidth - 90) / width, (root.clientHeight - 130) / height))
  view.x = (root.clientWidth - width * view.scale) / 2 - x * view.scale
  view.y = (root.clientHeight - height * view.scale) / 2 - y * view.scale
  paintCanvas(index)
}
function canvasPointerDown(index: number, event: PointerEvent) {
  const target = event.target as HTMLElement
  if (target.closest('button, input, textarea, a, .nodrag')) return
  const element = target.closest<HTMLElement>('.workflow-canvas__node') || undefined
  const match = element?.style.transform.match(/translate\\(([-\\d.]+)px,?\\s*([-\\d.]+)px\\)/)
  const view = canvasView(index)
  canvasDrag = { canvas: index, element, startX: event.clientX, startY: event.clientY, x: element ? Number(match?.[1] || 0) : view.x, y: element ? Number(match?.[2] || 0) : view.y }
  canvasRoots.get(index)?.setPointerCapture(event.pointerId)
}
function canvasPointerMove(event: PointerEvent) {
  if (!canvasDrag) return
  const view = canvasView(canvasDrag.canvas)
  const dx = event.clientX - canvasDrag.startX, dy = event.clientY - canvasDrag.startY
  if (canvasDrag.element) canvasDrag.element.style.transform = 'translate(' + (canvasDrag.x + dx / view.scale) + 'px, ' + (canvasDrag.y + dy / view.scale) + 'px)'
  else { view.x = canvasDrag.x + dx; view.y = canvasDrag.y + dy; paintCanvas(canvasDrag.canvas) }
}`

const output = []
for (const item of manifest) {
  const data = JSON.parse(await readFile(resolve(root, 'app/data/reference', item.file), 'utf8'))
  const writer = new PageWriter(data)
  const file = pageFile(item.path)
  const content = writer.output()
  await mkdir(dirname(resolve(root, file)), { recursive: true })
  try {
    const previous = await readFile(resolve(root, file), 'utf8')
    if (!previous.startsWith('<!-- Page:') && !process.argv.includes('--overwrite')) throw new Error(`Existing page must be reviewed before overwrite: ${file}`)
  } catch (error) { if (error.code !== 'ENOENT') throw error }
  await writeFile(resolve(root, file), content)
  output.push({ ...item, source: file, cards: writer.cardCount, tables: writer.tables.length, charts: writer.chartCount, canvases: writer.canvasCount })
}

// The reference has transient webhook ids. Keep an explicit Nuxt dynamic page for them.
const webhookSource = output.find(page => page.path === '/developers/webhooks')
const webhookContent = (await readFile(resolve(root, webhookSource.source), 'utf8')).replace('<!-- Page: /developers/webhooks |', '<!-- Page: /developers/webhooks/[id] |').replace('data-page="/developers/webhooks"', ':data-page="route.path"')
await writeFile(resolve(root, 'app/pages/developers/webhooks/[id].vue'), webhookContent)

await writeFile(resolve(root, 'app/data/pages.json'), JSON.stringify(output, null, 2))
await writeFile(resolve(root, 'app/data/navigation.json'), JSON.stringify(navigation, null, 2))
await mkdir(resolve(root, 'docs'), { recursive: true })
await writeFile(resolve(root, 'docs/PAGES.md'), '# Índice de páginas\n\nCada enlace abre el archivo Vue que contiene directamente los componentes Nuxt UI, los datos, la interacción y los estilos de esa página.\n\n| Ruta | Archivo | Tarjetas | Tablas | Gráficos | Lienzos |\n| --- | --- | ---: | ---: | ---: | ---: |\n' + output.map(page => `| \`${page.path}\` | [${page.source}](../${page.source}) | ${page.cards} | ${page.tables} | ${page.charts} | ${page.canvases} |`).join('\n') + '\n')
console.log(JSON.stringify({ pages: output.length, dynamicPages: 1, cards: output.reduce((sum, page) => sum + page.cards, 0), tables: output.reduce((sum, page) => sum + page.tables, 0) }, null, 2))
