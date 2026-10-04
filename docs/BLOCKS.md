# Guía de bloques reutilizables

## Bloques de composición

Todos los bloques funcionan sin `AppShell`. Para incluir la navegación se pueden colocar en una página que use el layout `default`.

| Componente | Propiedades | Ejemplo |
| --- | --- | --- |
| `BlocksDashboard` | `domain`, `variant` | Ecommerce 1–9; proyectos 1–4; pagos 1–6; original 10–12 |
| `BlocksDataList` | `domain`, `entity`, `variant`, `path` | `entity="product"`, `variant="2"` |
| `BlocksProductForm` | `variant: 1 \| 2`, `productId?` | Nuevo producto o edición por slug |
| `BlocksDetail` | `domain`, `entity`, `variant`, `path` | Detalles de producto, pedido, cliente o envío |
| `BlocksKanban` | `variant: 1 \| 2 \| 3` | Tableros de incidencias |
| `BlocksCalendar` | `variant: 1 \| 2` | Calendarios de incidencias |
| `BlocksChat` | `mode`, `variant` | `mode="composer"` o `mode="conversation"` |
| `BlocksWorkflow` | `variant: 1 \| 2 \| 3` | Workflows de IA |
| `BlocksSettings` | `section?` | General, profile, billing, plans, connected-apps, notifications |
| `BlocksAuth` | `mode` | login, register, forgot-password |
| `BlocksPreset` | `path`, `blockKey?`, `transform?` | Cualquier página o bloque del inventario |
| `BlocksPage` | `page: PageBlocks` | Página completa con su contenido portable |

Para rutas que no utilizan el sufijo `-list-N` o `-detail-N`, se pasa `path` directamente:

```vue
<BlocksDataList path="/payment-processor/transactions" />
<BlocksDetail path="/payment-processor/invoice-detail" />
<BlocksPreset path="/ai-chat/model-catalog" />
<BlocksPreset path="/project-management/issue-gantt-1" />
```

## Componentes de contenido

`Card`, `Table`, `Tabs`, `Select`, `Input`, `Button`, `Checkbox`, `Switch`, `Badge`, `Avatar`, `Progress`, `Chart` y `Composer` aceptan `node: BlockNode`. Sus nombres autoimportados tienen el prefijo `Blocks`.

`BlocksCanvas` permite desplazar el lienzo, utilizar los controles de zoom y mover nodos. Emite `nodeMove(id, position)` para conectar los cambios a un modelo de grafo propio. `BlocksSvg` renderiza los elementos vectoriales con el namespace SVG correcto durante SSR e hidratación.

Los elementos de estructura utilizan HTML semántico y clases Tailwind; los controles y contenedores se implementan con Nuxt UI. No se carga React ni shadcn/ui, y las páginas no se renderizan dentro de un iframe. La previsualización PDF de una factura utiliza un documento PDF local.

### Tarjeta de métrica con datos propios

```vue
<BlocksMetricCard
  title="Monthly revenue"
  value="$189,540.75"
  previous="$148,230.00"
  :change="27.9"
  icon="i-lucide-circle-dollar-sign"
/>
```

### Elegir un bloque individual

```vue
<script setup lang="ts">
const catalog = await useBlockCatalog('/ecommerce/dashboard-1')
const card = catalog.blocks.find(node => blockText(node).includes('Total Revenue'))
</script>

<template>
  <BlocksRenderer v-if="card" :node="card" />
</template>
```

Cada nodo tiene una clave estable `key`. Una vez elegida, se puede usar con `BlocksPreset`:

```vue
<BlocksPreset path="/ecommerce/dashboard-1" :block-key="card.key" />
```

### Personalizar el contenido de un preset

`transform` recibe una copia independiente del árbol para mantener el contenido original:

```vue
<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'

function customize(root: BlockNode) {
  for (const node of findBlocks(root, node => node.text === '$189,540.75')) {
    node.text = '$250,000.00'
  }
  return root
}
</script>

<template>
  <BlocksPreset path="/ecommerce/dashboard-1" :transform="customize" />
</template>
```

### Crear un bloque con el esquema portable

```vue
<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'

const card: BlockNode = {
  tag: 'div',
  attrs: { 'data-slot': 'card', class: 'rounded-xl border p-6' },
  children: [
    { tag: 'h2', attrs: { class: 'text-lg font-semibold' }, children: [{ text: 'Revenue' }] },
    { tag: 'p', attrs: { class: 'mt-2 text-3xl font-bold' }, children: [{ text: '$25,000' }] }
  ]
}
</script>

<template><BlocksCard :node="card" /></template>
```

Las clases nuevas se declaran en archivos Vue/TS o se añaden a un directorio incluido en `@source` para que Tailwind las genere.

## Integración de datos

- `usePageBlocks(path)` carga el contenido bajo demanda.
- `useBlockCatalog(path)` proporciona `page`, `blocks` y `get(key)`.
- `blockText(node)` obtiene el texto de un bloque.
- `findBlocks(node, predicate)` selecciona nodos del árbol.
- `BlocksComposer` emite `submit(text)` para sustituir la respuesta de demostración por un servicio real.
- `useBlockActions` centraliza navegación, exportación, formularios y estado de demostración.
- Los campos locales se guardan en `localStorage`, bajo `blocks-admin-values`.

## Inventario

`app/data/pages.json` contiene la lista completa de rutas, títulos y archivos de contenido. `app/data/reference/navigation.json` define los ocho grupos y las 219 entradas originales del menú. Los detalles adicionales se abren desde sus enlaces de contenido, sin modificar el menú original.

## Comprobaciones

```sh
pnpm typecheck
pnpm check:blocks
pnpm build
node scripts/verify-blocks.mjs --http
```

La comprobación valida rutas duplicadas, contenido incompleto y enlaces internos sin resolver. Con `--http` comprueba el renderizado de las 261 páginas.
