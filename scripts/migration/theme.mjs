// Build-time migration helpers. Generated pages only use Nuxt UI's public tokens.
const tokens = {
  background: ['default', '--ui-bg'], card: ['default', '--ui-bg'], popover: ['default', '--ui-bg'],
  foreground: ['highlighted', '--ui-text-highlighted'], 'card-foreground': ['default', '--ui-text'],
  'popover-foreground': ['default', '--ui-text'], 'muted-foreground': ['muted', '--ui-text-muted'],
  'secondary-foreground': ['default', '--ui-text'], 'accent-foreground': ['default', '--ui-text'],
  'primary-foreground': ['inverted', '--ui-text-inverted'], 'destructive-foreground': ['inverted', '--ui-text-inverted'],
  muted: ['muted', '--ui-bg-muted'], secondary: ['elevated', '--ui-bg-elevated'], accent: ['elevated', '--ui-bg-elevated'],
  destructive: ['error', '--ui-error'], input: ['default', '--ui-border'], border: ['default', '--ui-border'],
  ring: ['accented', '--ui-border-accented'], sidebar: ['muted', '--ui-bg-muted'],
  'sidebar-foreground': ['default', '--ui-text'], 'sidebar-accent': ['elevated', '--ui-bg-elevated'],
  'sidebar-accent-foreground': ['default', '--ui-text'], 'sidebar-border': ['default', '--ui-border'],
}
const semantic = { red: 'error', rose: 'error', emerald: 'success', green: 'success', lime: 'success', amber: 'warning', yellow: 'warning', orange: 'warning', sky: 'info', blue: 'info', cyan: 'info', teal: 'info', purple: 'secondary', violet: 'secondary', indigo: 'secondary', pink: 'secondary', fuchsia: 'secondary' }

function neutralToken(kind, shade, dark) {
  if (['bg', 'from', 'to', 'via'].includes(kind)) {
    if (dark) return shade >= 900 ? ['default', '--ui-bg'] : shade >= 700 ? ['elevated', '--ui-bg-elevated'] : shade >= 500 ? ['accented', '--ui-bg-accented'] : ['inverted', '--ui-bg-inverted']
    return shade <= 50 ? ['default', '--ui-bg'] : shade <= 100 ? ['muted', '--ui-bg-muted'] : shade <= 200 ? ['elevated', '--ui-bg-elevated'] : shade <= 400 ? ['accented', '--ui-bg-accented'] : ['inverted', '--ui-bg-inverted']
  }
  if (['border', 'ring', 'divide', 'outline'].includes(kind)) return shade <= 200 || dark && shade >= 700 ? ['default', '--ui-border'] : ['accented', '--ui-border-accented']
  if (dark) return shade <= 100 ? ['highlighted', '--ui-text-highlighted'] : shade <= 300 ? ['default', '--ui-text'] : shade <= 400 ? ['muted', '--ui-text-muted'] : ['dimmed', '--ui-text-dimmed']
  return shade >= 800 ? ['highlighted', '--ui-text-highlighted'] : shade >= 700 ? ['default', '--ui-text'] : shade >= 600 ? ['toned', '--ui-text-toned'] : shade >= 500 ? ['muted', '--ui-text-muted'] : shade >= 400 ? ['dimmed', '--ui-text-dimmed'] : ['inverted', '--ui-text-inverted']
}

export function themeClass(value = '') {
  return value.split(/\s+/).filter(Boolean).map(original => {
    if (/^lucide(?:-|$)/.test(original)) return ''
    let token = original.replaceAll('react-flow', 'workflow-canvas').replaceAll('xyflow__', 'workflow-canvas__').replaceAll('recharts', 'chart')
    token = token.replace(/(bg|text|border|ring|divide|outline|fill|stroke|from|via|to)-(sidebar-accent-foreground|sidebar-accent|sidebar-foreground|sidebar-border|card-foreground|popover-foreground|secondary-foreground|accent-foreground|primary-foreground|destructive-foreground|muted-foreground|background|foreground|destructive|secondary|popover|sidebar|accent|muted|card|input|border|ring)(?:\/(\d+))?(?=$|[^\w-])/g, (match, kind, color, opacity) => {
      const [alias, variable] = tokens[color]
      const appropriate = kind === 'bg' && variable.startsWith('--ui-bg') || kind === 'text' && (variable.startsWith('--ui-text') || alias === 'error') || ['border', 'ring', 'divide', 'outline'].includes(kind) && variable.startsWith('--ui-border')
      if (!appropriate || opacity || ['fill', 'stroke', 'from', 'via', 'to'].includes(kind)) return `${kind}-(${variable})${opacity ? `/${opacity}` : ''}`
      return `${kind}-${alias}`
    })
    token = token.replace(/(bg|text|border|ring|divide|outline|fill|stroke|from|via|to)-(neutral|slate|gray|zinc|stone)-(\d+)(?:\/(\d+))?(?=$|[^\w-])/g, (match, kind, palette, shade, opacity) => {
      const [alias, variable] = neutralToken(kind, Number(shade), original.includes('dark:'))
      return opacity || ['fill', 'stroke', 'from', 'via', 'to'].includes(kind) ? `${kind}-(${variable})${opacity ? `/${opacity}` : ''}` : `${kind}-${alias}`
    })
    token = token.replace(/(bg|text|border|ring|divide|outline|fill|stroke|from|via|to)-(red|rose|emerald|green|lime|amber|yellow|orange|sky|blue|cyan|teal|purple|violet|indigo|pink|fuchsia)-(\d+)(?:\/(\d+))?(?=$|[^\w-])/g, (match, kind, palette, shade, opacity) => {
      const color = semantic[palette]
      const alpha = opacity || (kind === 'bg' && Number(shade) < 300 ? '10' : kind === 'border' && Number(shade) < 400 ? '20' : '')
      return `${kind}-${color}${alpha ? `/${alpha}` : ''}`
    })
    token = token.replace(/(bg|text|border|ring|divide|outline|fill|stroke|from|via|to)-(white|black)(?:\/(\d+))?(?=$|[^\w-])/g, (match, kind, color, opacity) => {
      const background = ['bg', 'from', 'via', 'to'].includes(kind)
      const variable = background ? color === 'white' ? '--ui-bg' : '--ui-bg-inverted' : color === 'white' ? '--ui-text-inverted' : '--ui-text-highlighted'
      const alias = background ? color === 'white' ? 'default' : 'inverted' : color === 'white' ? 'inverted' : 'highlighted'
      return opacity || ['fill', 'stroke', 'from', 'via', 'to'].includes(kind) ? `${kind}-(${variable})${opacity ? `/${opacity}` : ''}` : `${kind}-${alias}`
    })
    token = token.replace(/(bg|text|border|ring|fill|stroke)-\[(#[\da-fA-F]{3,8})\]/g, (_, kind, color) => `${kind}-[${themeColor(color, kind === 'bg')}]`)
    token = replaceVariables(token)
    token = token.replace(/\[stroke=['"]#[\da-fA-F]+['"]\]/g, '')
    token = token.replace(/rgba?\([^)]*\)/g, match => themeColor(match).replaceAll(' ', '_'))
    return token
  }).filter(Boolean).join(' ')
}

export function themeColor(value, background = false) {
  if (!value || ['none', 'transparent', 'currentColor', 'inherit'].includes(value) || value.startsWith('url(') || value.startsWith('var(')) return replaceVariables(value || '')
  let rgb
  const hex = value.match(/^#([\da-f]{3,8})$/i)
  if (hex) {
    let digits = hex[1]
    if (digits.length === 3 || digits.length === 4) digits = [...digits].map(c => c + c).join('')
    rgb = [0, 2, 4].map(index => Number.parseInt(digits.slice(index, index + 2), 16))
  } else {
    const match = value.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/)
    if (match) rgb = match.slice(1, 4).map(Number)
  }
  if (!rgb) {
    if (/^(white|black)$/i.test(value)) return `var(${value === 'white' ? background ? '--ui-bg' : '--ui-text-inverted' : background ? '--ui-bg-inverted' : '--ui-text-highlighted'})`
    const lab = value.match(/^lab\(([-\d.]+)%/)
    if (lab) {
      const lightness = Number(lab[1])
      if (lightness >= 85) return 'var(--ui-bg)'
      if (lightness <= 25) return 'var(--ui-text-highlighted)'
      return lightness < 60 ? 'var(--ui-text-muted)' : 'var(--ui-text-dimmed)'
    }
    if (/^(hsl|oklch|oklab|color\()/.test(value)) return 'var(--ui-primary)'
    return replaceVariables(value)
  }
  const [r, g, b] = rgb
  const max = Math.max(...rgb), min = Math.min(...rgb), average = (r + g + b) / 3
  const alpha = value.match(/^rgba\([^)]*,\s*([\d.]+)\)$/)?.[1]
  if (alpha !== undefined && Number(alpha) < 1) {
    const opaque = themeColor(`rgb(${r},${g},${b})`, background)
    return `color-mix(in oklab, ${opaque} ${Number(alpha) * 100}%, transparent)`
  }
  if (max - min < 24) {
    if (background) return `var(${average > 240 ? '--ui-bg' : average > 220 ? '--ui-bg-muted' : average > 170 ? '--ui-bg-accented' : '--ui-bg-inverted'})`
    return `var(${average > 235 ? '--ui-bg' : average > 170 ? '--ui-text-dimmed' : average > 90 ? '--ui-text-muted' : average > 50 ? '--ui-text-toned' : '--ui-text-highlighted'})`
  }
  return `var(${r > g * 1.3 && r > b * 1.3 ? g > b * 1.3 ? '--ui-warning' : '--ui-error' : g > r * 1.2 && g > b * 1.1 ? '--ui-success' : b > r * 1.3 ? '--ui-info' : '--ui-secondary'})`
}

export function replaceVariables(value = '') {
  const map = { background: '--ui-bg', foreground: '--ui-text-highlighted', border: '--ui-border', muted: '--ui-bg-muted', 'muted-foreground': '--ui-text-muted', primary: '--ui-primary', 'primary-foreground': '--ui-text-inverted', 'color-border': '--ui-border', 'color-background': '--ui-bg', 'color-foreground': '--ui-text-highlighted', 'color-muted-foreground': '--ui-text-muted', 'color-primary-foreground': '--ui-text-inverted' }
  return value.replace(/var\(--([\w-]+)([^)]*)\)/g, (match, name, fallback) => map[name] ? `var(${map[name]}${fallback})` : match)
}

export function themeStyle(value = '') {
  value = replaceVariables(value)
  value = value.replace(/#[\da-fA-F]{3,8}(?![\w-])/g, match => themeColor(match))
  value = value.replace(/(?:rgba?|lab|oklch|oklab|hsla?)\([^)]*\)/g, match => themeColor(match))
  value = value.replace(/var\(--color-(neutral|gray|zinc|slate|stone)-(\d+)\)/g, (match, palette, shade) => `var(${neutralToken('text', Number(shade), false)[1]})`)
  value = value.replace(/var\(--color-(red|rose|emerald|green|lime|amber|yellow|orange|sky|blue|cyan|teal|purple|violet|indigo|pink|fuchsia)-\d+\)/g, (match, palette) => `var(--ui-${semantic[palette]})`)
  value = value.replace(/(--color-[\w-]+):var\(--ui-text-highlighted\)/g, '$1:var(--ui-primary)')
  value = value.replace(/(?:^|;)\s*--(?:primary|background|foreground|border|muted|muted-foreground):[^;]*(?=;|$)/g, '')
  return value
}

export const pageStyles = `
.page-content { min-height: 0; color: var(--ui-text); --chart-1: var(--ui-primary); --chart-2: var(--ui-text-highlighted); --chart-3: var(--ui-text-muted); --chart-4: var(--ui-text-dimmed); --chart-5: var(--ui-border-accented); --chart-6: var(--ui-border); --radius: var(--ui-radius); }
.page-content > div { min-height: 100%; }
.page-content *, .page-content ::before, .page-content ::after { border-color: var(--ui-border); }
.page-content [data-slot="scroll-area-viewport"] { overflow: auto !important; scrollbar-width: thin; }
.page-content [data-slot="scroll-area-scrollbar"] { display: none; }
.page-content pre { overflow: auto; }
.page-content img { object-fit: cover; }
`
export const chartStyles = `
.chart-container { min-width: 0; }
.chart-wrapper { width: 100% !important; }
.chart-responsive-container > div { width: 100% !important; height: 100% !important; }
svg.chart-surface { width: 100%; overflow: visible; }
.chart-cartesian-axis-tick text { fill: var(--ui-text-muted); font-size: 11px; }
.chart-cartesian-grid line { stroke: var(--ui-border); }
`
export const canvasStyles = `
.workflow-canvas { position: relative; overflow: hidden; touch-action: none; }
.workflow-canvas__renderer, .workflow-canvas__pane, .workflow-canvas__container { position: absolute; inset: 0; }
.workflow-canvas__viewport { transform-origin: 0 0; z-index: 2; }
.workflow-canvas__nodes, .workflow-canvas__edges, .workflow-canvas__edgelabel-renderer { position: absolute; inset: 0; pointer-events: none; }
.workflow-canvas__node { position: absolute; user-select: none; pointer-events: auto; cursor: grab; }
.workflow-canvas__node:active { cursor: grabbing; }
.workflow-canvas__edges svg { position: absolute; width: 100%; height: 100%; overflow: visible; }
.workflow-canvas__edge-path { fill: none; stroke: var(--ui-text-muted); stroke-width: 1.5; }
.workflow-canvas__edge-interaction { fill: none; stroke-opacity: 0; }
.workflow-canvas__background-pattern { fill: var(--ui-border-accented); }
.workflow-canvas__handle { position: absolute; width: 6px; height: 6px; border-radius: 100%; background: var(--ui-text-muted); }
.workflow-canvas__handle-left { left: 0; top: 50%; transform: translate(-50%, -50%); }
.workflow-canvas__handle-right { right: 0; top: 50%; transform: translate(50%, -50%); }
.workflow-canvas__handle-top { top: 0; left: 50%; transform: translate(-50%, -50%); }
.workflow-canvas__handle-bottom { bottom: 0; left: 50%; transform: translate(-50%, 50%); }
.workflow-canvas__panel { position: absolute; z-index: 5; margin: 12px; }
.workflow-canvas__panel.top { top: 0; }
.workflow-canvas__panel.bottom { bottom: 0; }
.workflow-canvas__panel.left { left: 0; }
.workflow-canvas__panel.right { right: 0; }
.workflow-canvas__controls { display: flex; flex-direction: column; }
.workflow-canvas__controls button { padding: 8px; }
.workflow-canvas__controls svg { width: 14px; height: 14px; }
.workflow-canvas__attribution { font-size: 10px; opacity: 0.6; }
`
