<script setup lang="ts">
import { blocks, loaders } from '#build/copy-blocks.mjs'
import type { BlockSource } from '~/types/block-catalog'
import type { DropdownMenuItem } from '@nuxt/ui'

const props = defineProps<{ page: string }>()
const toast = useToast()
const pageBlocks = computed(() => blocks.filter(block => block.page === props.page))
const sources = shallowRef<BlockSource[]>([])
const loading = ref(false)
const activeId = ref('')
const activeElement = shallowRef<HTMLElement>()
const toolbar = useTemplateRef<HTMLElement>('toolbar')
const picker = useTemplateRef<HTMLElement>('picker')
const codeElement = useTemplateRef<HTMLElement>('codeElement')
const source = computed(() => sources.value.find(block => block.id === activeId.value))
const activeTitle = computed(() => pageBlocks.value.find(block => block.id === activeId.value)?.title)
const menuOpen = ref(false)
const pickerMenuOpen = ref(false)
const viewerOpen = ref(false)
const viewerSource = shallowRef<BlockSource>()
const viewerMode = ref<'component' | 'template'>('component')
const clipboardError = ref(false)
const copiedId = ref('')
const copiedMode = ref<'component' | 'template'>('component')
const visible = ref(false)
const outlineStyle = ref<Record<string, string>>({})
const toolbarStyle = ref<Record<string, string>>({})
const pickerStyle = ref<Record<string, string>>({ bottom: '16px' })
const displayedCode = computed(() => viewerSource.value?.[viewerMode.value] || '')
let pendingLoad: Promise<void> | undefined
let hideTimer: ReturnType<typeof setTimeout> | undefined
let copiedTimer: ReturnType<typeof setTimeout> | undefined
let frame = 0
let observer: ResizeObserver | undefined
let disposed = false

function loadSources() {
  if (sources.value.length) return Promise.resolve()
  if (pendingLoad) return pendingLoad
  loading.value = true
  pendingLoad = (async () => {
    try {
      const loader = loaders[props.page]
      if (!loader) throw new Error('Unknown catalogue page')
      const result = await loader()
      if (!disposed) sources.value = result
    } catch {
      if (!disposed) toast.add({ title: 'No se pudo cargar el código', description: 'Vuelve a intentarlo con «Ver código».', color: 'error' })
    } finally {
      loading.value = false
      pendingLoad = undefined
    }
  })()
  return pendingLoad
}

function keepVisible() {
  clearTimeout(hideTimer)
}

function scheduleHide() {
  keepVisible()
  if (menuOpen.value || viewerOpen.value) return
  hideTimer = setTimeout(() => {
    const focused = document.activeElement
    if (activeElement.value?.contains(focused) || toolbar.value?.contains(focused)) return
    visible.value = false
  }, 180)
}

function visibleControlRects(controls: Iterable<HTMLElement>) {
  const ancestors = new Map<Element, { rect: DOMRect, clipX: boolean, clipY: boolean }>()
  return [...controls].map(control => {
    const rect = control.getBoundingClientRect()
    let left = Math.max(0, rect.left), right = Math.min(window.innerWidth, rect.right)
    let top = Math.max(64, rect.top), bottom = Math.min(window.innerHeight, rect.bottom)
    // Off-screen rows in an internal scroller must not block empty space above it.
    for (let parent = control.parentElement; parent; parent = parent.parentElement) {
      let clip = ancestors.get(parent)
      if (!clip) {
        const style = getComputedStyle(parent)
        clip = { rect: parent.getBoundingClientRect(), clipX: /auto|scroll|hidden|clip/.test(style.overflowX), clipY: /auto|scroll|hidden|clip/.test(style.overflowY) }
        ancestors.set(parent, clip)
      }
      if (clip.clipX) { left = Math.max(left, clip.rect.left); right = Math.min(right, clip.rect.right) }
      if (clip.clipY) { top = Math.max(top, clip.rect.top); bottom = Math.min(bottom, clip.rect.bottom) }
    }
    return new DOMRect(left, top, Math.max(0, right - left), Math.max(0, bottom - top))
  }).filter(rect => rect.width && rect.height)
}

function updatePickerPosition() {
  if (!picker.value || pickerMenuOpen.value || viewerOpen.value) return
  const page = [...document.querySelectorAll<HTMLElement>('[data-page]')].find(element => element.dataset.page === props.page)
  if (!page) return
  const rect = picker.value.getBoundingClientRect()
  const left = Math.max(12, window.innerWidth - rect.width - 16)
  const controls = visibleControlRects(page.querySelectorAll<HTMLElement>('button, a, input, textarea, select, [role="button"], [role="combobox"]'))
  const bottom = window.innerHeight - rect.height - 16
  const candidates = [bottom, ...controls.flatMap(control => [control.top - rect.height - 4, control.bottom + 4])]
    .filter(top => top >= 64 && top <= bottom).sort((a, b) => b - a)
  const top = candidates.find(top => !controls.some(control => left < control.right && left + rect.width > control.left && top < control.bottom && top + rect.height > control.top)) ?? bottom
  if (pickerStyle.value.top !== `${top}px`) {
    pickerStyle.value = { top: `${top}px` }
    // Reposition the toolbar after Vue applies the picker's new coordinates.
    void nextTick(() => { if (!disposed) queuePosition() })
  }
}

function updatePosition() {
  frame = 0
  updatePickerPosition()
  const element = activeElement.value
  if (!element?.isConnected) { visible.value = false; return }
  const rect = element.getBoundingClientRect()
  if (rect.bottom < 64 || rect.top > window.innerHeight || rect.right < 0 || rect.left > window.innerWidth) {
    visible.value = false
    return
  }
  const width = toolbar.value?.offsetWidth || Math.min(320, window.innerWidth - 24)
  const height = toolbar.value?.offsetHeight || 38
  const left = Math.max(12, Math.min(rect.right - width, window.innerWidth - width - 12))
  // The fixed mobile/keyboard picker also occupies space outside the page.
  // Long blocks can otherwise place the Copy button underneath that picker.
  const nativeControls = visibleControlRects([...(element.closest('[data-page]')?.querySelectorAll<HTMLElement>('button, a, input, textarea, select, [role="button"], [role="combobox"]') || []),
    ...document.querySelectorAll<HTMLElement>('[data-copy-tools] button')]
    .filter(control => !control.closest('[role="toolbar"]')))
  const candidates = [rect.top - height - 4, rect.top + 4, rect.top + 48, rect.bottom + 4,
    // A two-pixel clearance also fits fractional-pixel gaps in production fonts.
    ...nativeControls.flatMap(control => [control.top - height - 2, control.bottom + 2]), 64]
    .map(top => Math.max(64, Math.min(top, window.innerHeight - height - 12)))
  const top = candidates.find(top => !nativeControls.some(control => left < control.right && left + width > control.left && top < control.bottom && top + height > control.top)) ?? candidates[0]!
  outlineStyle.value = { top: `${rect.top}px`, left: `${rect.left}px`, width: `${rect.width}px`, height: `${rect.height}px` }
  toolbarStyle.value = {
    top: `${top}px`,
    left: `${left}px`,
  }
}

function queuePosition() {
  if (!frame) frame = requestAnimationFrame(updatePosition)
}

function activate(element: HTMLElement) {
  const id = element.dataset.copyBlock
  if (!pageBlocks.value.some(block => block.id === id)) return
  keepVisible()
  if (element !== activeElement.value) {
    observer?.disconnect()
    observer?.observe(element)
  }
  activeElement.value = element
  activeId.value = id!
  visible.value = true
  updatePosition()
  void nextTick(() => { if (!disposed) updatePosition() })
  void loadSources()
}

function inspectTarget(event: Event) {
  if (viewerOpen.value || menuOpen.value) return
  const target = event.target
  if (!(target instanceof Element)) return
  if (target.closest('[data-copy-tools]')) { keepVisible(); return }
  const block = target.closest<HTMLElement>('[data-copy-block]')
  if (block?.closest('[data-page]')?.getAttribute('data-page') === props.page) {
    if (block === activeElement.value && visible.value) keepVisible()
    else activate(block)
  }
  else scheduleHide()
}

function onEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && !viewerOpen.value && !menuOpen.value) {
    visible.value = false
    keepVisible()
  }
}

async function showCode(mode: 'component' | 'template' = 'component') {
  keepVisible()
  const id = activeId.value
  await loadSources()
  const selected = sources.value.find(block => block.id === id)
  if (!selected || disposed) return
  viewerSource.value = selected
  viewerMode.value = mode
  clipboardError.value = false
  viewerOpen.value = true
}

async function copy(mode: 'component' | 'template', selected = source.value) {
  if (!selected) return
  try {
    // The source is already loaded: write during the user's click, including Safari.
    if (!window.isSecureContext || !navigator.clipboard?.writeText) throw new Error('Clipboard unavailable')
    await navigator.clipboard.writeText(selected[mode])
    if (disposed) return
    clipboardError.value = false
    copiedId.value = selected.id
    copiedMode.value = mode
    clearTimeout(copiedTimer)
    copiedTimer = setTimeout(() => { copiedId.value = '' }, 2000)
    // Inline feedback avoids stacking toasts on top of other blocks' copy tools.
  } catch {
    if (disposed) return
    viewerSource.value = selected
    viewerMode.value = mode
    clipboardError.value = true
    viewerOpen.value = true
  }
}

function selectCode() {
  if (!codeElement.value) return
  const range = document.createRange()
  range.selectNodeContents(codeElement.value)
  const selection = window.getSelection()
  selection?.removeAllRanges()
  selection?.addRange(range)
}

const copyItems = computed<DropdownMenuItem[]>(() => [
  { label: 'Copiar componente completo', icon: 'i-lucide-copy', disabled: !source.value, onSelect: () => { void copy('component') } },
  { label: 'Copiar solo plantilla', icon: 'i-lucide-code', disabled: !source.value, onSelect: () => { void copy('template') } },
  { label: 'Ver código', icon: 'i-lucide-file-code', onSelect: () => { void showCode() } },
])
const blockItems = computed<DropdownMenuItem[]>(() => pageBlocks.value.map(block => ({
  label: block.title,
  icon: 'i-lucide-square-dashed',
  onSelect: () => {
    const element = [...document.querySelectorAll<HTMLElement>('[data-copy-block]')].find(element => element.dataset.copyBlock === block.id)
    if (!element) return
    element.scrollIntoView({ block: 'center', behavior: 'instant' })
    element.focus({ preventScroll: true })
    activate(element)
  },
})))

watch(menuOpen, open => { if (open) keepVisible(); else scheduleHide() })
watch(pickerMenuOpen, open => { if (!open) queuePosition() })
watch(viewerOpen, open => { if (open) keepVisible(); else scheduleHide() })

onMounted(() => {
  observer = new ResizeObserver(queuePosition)
  void nextTick(queuePosition)
  // pointerover also fires when scrolling moves content beneath a stationary
  // cursor. Only real movement should replace a keyboard-selected block.
  document.addEventListener('pointermove', inspectTarget)
  document.addEventListener('focusin', inspectTarget)
  document.addEventListener('focusout', scheduleHide)
  document.addEventListener('scroll', queuePosition, true)
  document.addEventListener('keydown', onEscape)
  window.addEventListener('resize', queuePosition)
  window.addEventListener('blur', scheduleHide)
})
onBeforeUnmount(() => {
  disposed = true
  keepVisible()
  clearTimeout(copiedTimer)
  cancelAnimationFrame(frame)
  observer?.disconnect()
  document.removeEventListener('pointermove', inspectTarget)
  document.removeEventListener('focusin', inspectTarget)
  document.removeEventListener('focusout', scheduleHide)
  document.removeEventListener('scroll', queuePosition, true)
  document.removeEventListener('keydown', onEscape)
  window.removeEventListener('resize', queuePosition)
  window.removeEventListener('blur', scheduleHide)
})
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <span role="status" aria-live="polite" class="sr-only">{{ copiedId ? `Código ${copiedMode === 'component' ? 'del componente' : 'de la plantilla'} copiado: ${copiedId}.vue` : '' }}</span>
      <div v-if="visible && !viewerOpen" data-copy-tools>
        <div class="pointer-events-none fixed z-40 rounded-xl outline-2 outline-offset-2 outline-primary" :style="outlineStyle" aria-hidden="true" />
        <div ref="toolbar" role="toolbar" :data-copy-selected="activeId" :aria-label="`Código de ${activeTitle}`" class="fixed z-40 flex max-w-[calc(100vw-24px)] items-center gap-1 rounded-lg border border-default bg-elevated p-1 shadow-lg" :style="toolbarStyle" @pointerenter="keepVisible" @pointerleave="scheduleHide">
          <span class="hidden max-w-32 truncate px-2 text-xs font-medium text-muted sm:block">{{ activeTitle }}</span>
          <UTooltip text="Ver código del bloque">
            <UButton icon="i-lucide-code" color="neutral" variant="ghost" size="sm" aria-label="Ver código del bloque" @click="showCode()" />
          </UTooltip>
          <UButton :icon="copiedId === activeId && copiedMode === 'component' ? 'i-lucide-check' : 'i-lucide-copy'" :label="copiedId === activeId && copiedMode === 'component' ? 'Copiado' : 'Copiar'" size="sm" :loading="loading" :disabled="!source" aria-label="Copiar componente completo" @click="copy('component')" />
          <UDropdownMenu v-model:open="menuOpen" :items="copyItems" :content="{ align: 'end' }">
            <UButton icon="i-lucide-chevron-down" color="neutral" variant="ghost" size="sm" aria-label="Más opciones de copia" />
          </UDropdownMenu>
        </div>
      </div>
      <div ref="picker" data-copy-tools class="fixed right-4 z-40" :style="pickerStyle">
        <UDropdownMenu v-model:open="pickerMenuOpen" :items="blockItems" :content="{ side: 'top', align: 'end' }">
          <UButton icon="i-lucide-copy" color="neutral" variant="outline" size="sm" class="bg-default shadow-sm" :label="`${pageBlocks.length} ${pageBlocks.length === 1 ? 'bloque copiable' : 'bloques copiables'}`" aria-label="Elegir un bloque para copiar" />
        </UDropdownMenu>
      </div>
    </Teleport>

    <UModal v-model:open="viewerOpen" :title="viewerSource?.title || 'Código del bloque'" description="Código original Vue, sin herramientas ni dependencias del catálogo." :ui="{ content: 'sm:max-w-5xl' }">
      <template #body>
        <div class="space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex gap-2">
              <UButton label="Componente" color="neutral" :variant="viewerMode === 'component' ? 'solid' : 'outline'" size="sm" :aria-pressed="viewerMode === 'component'" @click="viewerMode = 'component'" />
              <UButton label="Solo plantilla" color="neutral" :variant="viewerMode === 'template' ? 'solid' : 'outline'" size="sm" :aria-pressed="viewerMode === 'template'" @click="viewerMode = 'template'" />
            </div>
            <UBadge color="neutral" variant="subtle">{{ viewerSource?.filename }}</UBadge>
          </div>
          <p class="text-sm text-muted">Requiere Nuxt 4, Nuxt UI 4 y los iconos Lucide. No necesita recursos del catálogo.</p>
          <UAlert v-if="viewerMode === 'template'" color="warning" variant="soft" title="Solo marcado Vue" description="Si este bloque usa estado o estilos, copia también su script y CSS desde «Componente»." />
          <UAlert v-if="clipboardError" color="warning" variant="soft" title="El navegador no permite copiar" description="Utiliza HTTPS o localhost. También puedes seleccionar el código y copiarlo manualmente." />
          <pre class="max-h-[55dvh] overflow-auto rounded-lg border border-default bg-muted p-4 text-xs leading-relaxed text-default" tabindex="0" aria-label="Código Vue del bloque"><code ref="codeElement">{{ displayedCode }}</code></pre>
        </div>
      </template>
      <template #footer>
        <div class="flex w-full flex-wrap justify-end gap-2">
          <UButton label="Seleccionar código" color="neutral" variant="outline" @click="selectCode" />
          <UButton label="Cerrar" color="neutral" variant="ghost" @click="viewerOpen = false" />
          <UButton :icon="copiedId === viewerSource?.id && copiedMode === viewerMode ? 'i-lucide-check' : 'i-lucide-copy'" aria-label="Copiar código mostrado" :label="copiedId === viewerSource?.id && copiedMode === viewerMode ? 'Copiado' : viewerMode === 'component' ? 'Copiar componente' : 'Copiar plantilla'" @click="copy(viewerMode, viewerSource)" />
        </div>
      </template>
    </UModal>
  </ClientOnly>
</template>
