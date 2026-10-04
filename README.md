# Blocks Admin — páginas Nuxt UI

La aplicación contiene **261 páginas completas**, escritas directamente con **Nuxt 4 y Nuxt UI 4**, y conserva las **219 entradas del menú original** de [Shadcnblocks Admin](https://shadcnblocks-admin.vercel.app).

Cada ruta tiene su propio archivo `.vue` dentro de **`app/pages/`** (el directorio de páginas de Nuxt 4). La plantilla, los datos de ejemplo, el estado, las acciones y los estilos específicos están en ese archivo. No se utilizan componentes de bloques, renderizadores genéricos ni contenido JSON en tiempo de ejecución.

## Ejecutar

```sh
pnpm install
pnpm dev
```

Abrir **http://localhost:3020**.

```sh
pnpm typecheck
pnpm check:pages
pnpm build
pnpm preview --port 3020
```

Con un servidor en ejecución se pueden comprobar las 261 rutas:

```sh
node scripts/verify-pages.mjs --http
```

`BLOCKS_BASE_URL` permite indicar otra URL.

## Dónde encontrar el código

```text
app/pages/
  ecommerce/
    dashboard-1.vue
    product-list-1.vue
    add-product.vue
    edit-product/radiance-ritual-set.vue
  project-management/
    issue-kanban-1.vue
    issue-calendar-2.vue
  payment-processor/
    create-invoice-3.vue
  ai-chat/
    composer-1.vue
    workflow-1.vue
  todo/index.vue
  original/settings/index.vue
  developers/events-&-logs.vue
  login.vue
```

- **[docs/PAGES.md](docs/PAGES.md)**: índice de las 261 rutas, con enlaces a sus archivos y número de tarjetas, tablas, gráficos y lienzos.
- `app/layouts/default.vue`: navegación común escrita directamente con `USidebar`, `UNavigationMenu`, `UCommandPalette` y otros componentes Nuxt UI.
- `app/app.config.ts`: paletas semánticas y configuración global de componentes.
- `app/assets/css/main.css`: imports oficiales, tipografía local y reglas globales mínimas.

## Copiar una página o un bloque

1. Busca la ruta en `app/pages/` o en [docs/PAGES.md](docs/PAGES.md).
2. Copia el archivo Vue completo o la sección que necesites de su `<template>`.
3. Incluye las variables y funciones locales utilizadas por esa sección, y sus estilos `<style scoped>` si los necesita.
4. Copia los recursos de `public/reference/` utilizados por las imágenes o documentos.

Las secciones incluyen comentarios `Card`, `Table`, `Chart`, `Form`, `Chat composer` y `Workflow canvas` para localizarlas rápidamente.

## Temas Nuxt UI

Los colores se configuran en `app/app.config.ts` mediante `ui.colors`: `primary`, `secondary`, `neutral`, `success`, `info`, `warning` y `error`.

Las páginas utilizan componentes Nuxt UI, utilidades semánticas (`bg-default`, `text-muted`, `text-highlighted`, `border-default`, etc.) y variables públicas `--ui-*`. No se fijan `--ui-primary`, `--ui-text` ni los colores de los modos claro/oscuro. Los gráficos y los lienzos usan estos mismos tokens.

Los cambios de paleta y el modo claro/oscuro se aplican sin modificar las páginas. Consulta [docs/THEMING.md](docs/THEMING.md).

Los contenidos y acciones de negocio utilizan datos de demostración. Las APIs de autenticación, pagos e IA se conectan en las funciones locales de cada página.

Los archivos de `app/data/reference/` y los scripts de migración se conservan únicamente como entradas históricas de la conversión. La aplicación no los importa ni los utiliza para renderizar las páginas.
