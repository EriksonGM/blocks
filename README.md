# Blocks Admin — Nuxt UI

Conversión de [Shadcnblocks Admin](https://shadcnblocks-admin.vercel.app) a **Nuxt 4 + Nuxt UI 4**.

- **219 entradas de navegación** con los nombres, grupos, variantes y URLs originales.
- **261 páginas** incluyendo detalles de productos, tareas y enlaces internos adicionales.
- Navegación adaptable con **`USidebar`**, `UNavigationMenu` y búsqueda global con `⌘/Ctrl + K`.
- Bloques reutilizables para dashboards, listas, formularios, detalles, Kanban, calendarios, chat, workflows, ajustes y autenticación.
- Tema claro/oscuro, imágenes y documentos locales, iconos Lucide locales y tipografía Inter.
- Carga diferida del contenido de cada página.

## Ejecutar

```sh
pnpm install
pnpm dev
```

Abrir **http://localhost:3020**. La raíz redirige a `/ecommerce/dashboard-1`.

```sh
pnpm typecheck
pnpm check:blocks
pnpm build
pnpm preview --port 3020
```

Con el servidor en funcionamiento se pueden comprobar todas las páginas:

```sh
node scripts/verify-blocks.mjs --http
```

`BLOCKS_BASE_URL` permite indicar otra URL para esta comprobación.

## Estructura

```text
app/
  components/
    app/                    # USidebar, cabecera, búsqueda y diálogos
    blocks/                 # Componentes Nuxt UI y bloques de composición
  composables/
    usePageBlocks.ts         # Carga diferida de una página
    useBlockCatalog.ts       # Selección de bloques individuales
    useBlockActions.ts       # Acciones e interacción de demostración
  data/
    reference/              # Contenido y layouts portables de cada página
    pages.json              # Inventario de las 261 páginas
  pages/[...slug].vue         # Resolución de las URLs originales
public/reference/            # Recursos locales de los bloques
docs/BLOCKS.md               # Guía de reutilización
```

## Reutilizar un bloque

Los componentes se autoimportan siguiendo las convenciones de Nuxt:

```vue
<template>
  <BlocksDashboard domain="ecommerce" :variant="1" />
  <BlocksDataList domain="ecommerce" entity="product" :variant="2" />
  <BlocksProductForm :variant="2" />
  <BlocksKanban :variant="1" />
</template>
```

También se puede reutilizar cualquier página o un bloque concreto sin incluir la navegación:

```vue
<script setup lang="ts">
const { blocks } = await useBlockCatalog('/ecommerce/dashboard-1')
const revenue = blocks.find(block => blockText(block).includes('Total Revenue'))
</script>

<template>
  <BlocksRenderer v-if="revenue" :node="revenue" />
</template>
```

Ver [docs/BLOCKS.md](docs/BLOCKS.md) para las propiedades, variantes y formas de personalización.

## Datos e interacciones

Los contenidos de referencia están separados de los componentes en un esquema `BlockNode` tipado. `BlocksRenderer` convierte sus elementos en componentes Nuxt UI: `UCard`, `UTable`, `UForm`, `UInput`, `UTextarea`, `USelect`, `UCheckbox`, `USwitch`, `UTabs`, `UAvatar`, `UBadge`, `UChatPrompt` y otros.

Las tablas permiten buscar, ordenar y seleccionar filas; los desplegables y pestañas conservan las opciones capturadas; los campos de formularios persisten localmente; se incluyen exportación CSV y composición de mensajes. Los gráficos mantienen la geometría SVG de la referencia.

Esta aplicación es una **biblioteca de interfaces con datos de demostración**. Las acciones de negocio, la autenticación, las respuestas de IA y los canvases utilizan datos locales y necesitan conectarse a las APIs de la aplicación que reutilice los bloques. El componente `BlocksComposer` emite `submit` para integrar un proveedor de IA.

Los scripts `reference-capture.mjs` y `prepare-blocks.mjs` son herramientas de importación de desarrollo; no son necesarios para ejecutar ni desplegar la aplicación.
