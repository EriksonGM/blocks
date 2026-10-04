# Configuración de temas Nuxt UI

## Paletas

`app/app.config.ts` utiliza los alias oficiales de Nuxt UI:

```ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'neutral',
      secondary: 'violet',
      neutral: 'neutral',
      success: 'emerald',
      info: 'blue',
      warning: 'amber',
      error: 'red'
    }
  }
})
```

Por ejemplo, se pueden cambiar `primary` a `blue` y `neutral` a `slate`. Los botones primarios, elementos activos de navegación, controles y gráficos utilizarán las paletas configuradas.

El menú **Choose theme** de la cabecera permite comprobar estos cambios en la aplicación. Utiliza `updateAppConfig` para cambiar las paletas semánticas; no sustituye variables CSS ni aplica colores fijos.

## Superficies y contraste

Las páginas utilizan `bg-default`, `bg-muted`, `bg-elevated`, `bg-inverted`, `text-default`, `text-muted`, `text-highlighted`, `text-inverted` y `border-default`.

Los estilos de gráficos y lienzos consultan `--ui-primary`, `--ui-text`, `--ui-text-highlighted`, `--ui-text-muted`, `--ui-bg` y `--ui-border`. Sus variables locales `--chart-*` se derivan de esos tokens.

`main.css` importa `tailwindcss` y `@nuxt/ui`, declara la tipografía Inter y no sobrescribe los valores de los tokens de color de Nuxt UI. Las páginas incluyen sus estilos específicos en `<style scoped>`.

## Modo claro y oscuro

`useColorMode`, `UColorModeButton` y el menú de apariencia están en `app/layouts/default.vue`. La configuración de Nuxt fija la preferencia inicial en `light`; el usuario puede seleccionar `dark` o `system`.

No se duplican colores fijos mediante reglas `.dark`: Nuxt UI resuelve las superficies, los bordes y el contraste según el modo seleccionado.

## Validación

```sh
pnpm check:pages
pnpm typecheck
pnpm build
```

`check:pages` comprueba que todas las rutas tengan archivos Vue, que no utilicen bloques o renderizadores externos y que no incluyan paletas fijas, utilidades de temas de shadcn o sobrescrituras de tokens de color de Nuxt UI.

Para comprobar también el renderizado HTTP de las páginas:

```sh
node scripts/verify-pages.mjs --http
```
