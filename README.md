# Blocks Admin — páginas Nuxt UI

## Relevo para una nueva sesión — leer primero

Este apartado permite continuar **sin el historial del chat**. Estado comprobado el **14 de octubre de 2026**; al retomar, contrastarlo con Git antes de editar. Las instrucciones actuales sustituyen el antiguo plan del piloto/MR.

### Objetivo, prioridad y punto exacto de continuación

- **Solicitud vigente:** completar todas las páginas faltantes, revisando y corrigiendo **toda su interfaz** y habilitando **bloques Vue copiables y autónomos**, con pruebas, commit y push **por página**. No es solo añadir botones ni convertir archivos masivamente.
- **Rama de trabajo:** `main`, publicación directa en `origin/main`; el piloto ya está integrado. No crear otra rama/MR ni un PR de `main` hacia sí misma salvo nueva instrucción del usuario.
- **Avance:** 23/261 páginas de contenido completadas según el procedimiento, 238 pendientes; el catálogo local contiene 31 registros y 92 bloques exportables. Además hay 2 rutas auxiliares pendientes. Tener un archivo Vue o figurar en el menú **no** significa estar validada.
- **Fase actual:** clientes terminados (9/9); gestión de proyectos en curso (3/32 páginas completadas). **Página en revisión: `/project-management/dashboard-4`**, archivo [`app/pages/project-management/dashboard-4.vue`](app/pages/project-management/dashboard-4.vue). Los seis bloques y sus interacciones pasan la verificación individual, incluido copiado/pegado, claro/oscuro y 320 px. Este WIP se publica en `main`, pero no se marca terminada: la regresión de navegador `--all` falló en `/ecommerce/dashboard-1`, el typecheck global falla en bloques de `inbox-1` y no se pudo arrancar el servidor de producción en Windows.
- **Después:** recorrer las casillas pendientes de `/project-management/*` en el orden del inventario; luego las demás pendientes fuera de `/ai-chat/*`, también en el orden del inventario; IA al final. La lista general es alfabética, no una instrucción para empezar por IA.
- **Última página completada según este ToDo:** `/project-management/dashboard-3`, commit `498cf51390b4acfe1759415984c98731799bfd7f`. La página siguiente ya tiene una implementación local pendiente de revisión y publicación. Estos SHA son referencias históricas, no se espera que sigan siendo el HEAD tras nuevos commits.
- **Ejecución:** se detuvieron los servidores 3030 (dev) y 3031 (pegado) iniciados para esta validación. El servidor 3020 preexistente no se detuvo. No hay pruebas continuando en segundo plano.

El [procedimiento obligatorio](#procedimiento-obligatorio-por-página) y la [lista de pendientes](#todo-por-página-261-páginas-de-contenido) gobiernan la cola. El [registro de avance](#registro-de-avance) contiene resultados históricos por página; su columna «siguiente acción» no sustituye el punto de continuación de este apartado.

### Antes de tocar archivos: preservar trabajo y comprobar publicación

Desde la raíz del repositorio (entorno anterior: Windows/PowerShell, `D:\Code\blocks`):

```sh
git status --short
git diff
git diff --cached
git log -8 --oneline --decorate
git stash list --format="%H %gd %s"
git ls-remote origin refs/heads/main
```

No hacer `reset --hard`, `checkout --`, descartar archivos, borrar stashes ni sobrescribir cambios desconocidos. Si el remoto avanzó o el árbol tiene cambios distintos del snapshot, investigarlos y reconciliarlos antes de continuar; no asumir que son residuos.

**Pruebas compartidas:** los cambios en `scripts/test-copy-blocks-browser.mjs` añaden cobertura de interacciones y vista móvil para `dashboard-4`. La regresión global ejecutada con esta versión quedó bloqueada por el `<style>` inválido de `ecommerce/dashboard-9.vue:669` (detalles en el registro de validación).

**WIP aplazado de IA:** stash `1474bce9569566d438973ec4f62f671e25f86d5c` (actualmente `stash@{0}`), con `app/pages/ai-chat/agent-configuration.vue`, cambios en pruebas y el JSON no rastreado `app/data/copy-blocks/agent-configuration.json`. Inspección sin aplicar:

```sh
git stash show --stat 1474bce9569566d438973ec4f62f671e25f86d5c
git stash show -p 1474bce9569566d438973ec4f62f671e25f86d5c
git ls-tree -r --name-only '1474bce9569566d438973ec4f62f671e25f86d5c^3'
git show '1474bce9569566d438973ec4f62f671e25f86d5c^3:app/data/copy-blocks/agent-configuration.json'
```

El tercer padre conserva los archivos no rastreados, que no aparecen en el `stash show` normal. Recuperar y reconciliar este WIP **solo en la fase de IA**, sin hacer `stash pop` a ciegas: las pruebas compartidas han cambiado. No marcar esa página terminada ni activar su registro ahora.

La línea local y el stash **no están publicados en el remoto**: una nueva sesión sobre este mismo árbol debe preservarlos; un clon limpio puede no tenerlos. Si no existen, registrar esa diferencia, no reconstruirlos de memoria ni considerar completado el WIP de IA.

### Mapa técnico mínimo para implementar la siguiente página

| Archivo / referencia | Uso al continuar |
| --- | --- |
| `app/pages/project-management/dashboard-4.vue` | Leer completo primero; revisar diseño y cada interacción. Todo contenido/estado específico permanece en la página. |
| `app/pages/project-management/dashboard-3.vue` + `app/data/copy-blocks/project-command-center.json` | Referencia reciente de 7 bloques autónomos, regiones compartidas, gráficas SVG/tablas y modales incluidos en la copia. No sustituir una página por otra sin revisarla. |
| `app/pages/project-management/dashboard-2.vue` + `app/data/copy-blocks/project-dashboard-2.json` | Referencia de estado compartido entre bloques de la página y fragmentos de modales exportados. |
| `app/data/copy-blocks/*.json` | Un registro por página: `path`, `file`, `key`, `blocks`; IDs de bloque y claves únicos. Contiene metadatos, no una segunda implementación del contenido. |
| `scripts/block-catalog.mjs`, `modules/block-catalog.mjs` | Extracción AST/regiones y generación/carga de las fuentes. No editar a mano `.nuxt/`, `.output/` ni las exportaciones temporales. |
| `scripts/test-copy-blocks-browser.mjs` | Añadir pruebas de negocio de la ruta en catálogo, móvil y pegado. Registrar un bloque **no añade automáticamente** pruebas de sus filtros/formularios. Usar las funciones `checkCommand*` y `commandBlockChecks` como ejemplo. |
| `app/components/BlockCopyTools.vue` | Herramientas comunes; deben evitar controles, incluidos `summary`, y respetar scrollers/viewport. Cualquier cambio aquí exige regresión `--all`. |
| `app/data/pages.json`, `docs/PAGES.md` | Inventario de archivos/rutas. El estado de revisión se mantiene en este README, no en los conteos históricos de tarjetas de `docs/PAGES.md`. |
| `docs/COPYABLE-BLOCKS.md`, `docs/THEMING.md` | Contrato de portabilidad, pruebas y tokens de tema. |

**Límites de implementación:** conservar la composición y el propósito de cada página; corregir controles engañosos, valores incoherentes y gráficos vacíos. Usar datos ficticios, acciones locales y mensajes honestos; no añadir APIs reales, cobros, emails enviados ni persistencia de datos sensibles. Los SFC copiados deben incluir sus imports/estado/estilos/modales, funcionar fuera del catálogo y no depender de sus rutas/layout/recursos internos. Si varios fragmentos necesitan reglas comunes para funcionar, copiarlos como un bloque coherente en vez de campos aislados. Usar tokens semánticos Nuxt UI y mantener los `.vue` con LF (`.gitattributes`). No ejecutar scripts históricos de regeneración: pueden borrar trabajo revisado; el guard de `materialize-pages.mjs` protege las páginas registradas, no justifica regenerar las demás.

### Receta de pruebas reproducible (PowerShell)

Requisitos: dependencias de `pnpm-lock.yaml`, Node con `fetch`/`WebSocket` global (última ejecución con Node 24), pnpm y Chrome/Edge para CDP. Desde la raíz:

```powershell
pnpm install
pnpm check:pages
pnpm check:copy-blocks --page=/project-management/dashboard-4
pnpm typecheck
pnpm preview:copy-blocks --typecheck
```

La comprobación `--page` solo funciona **después de registrar** la nueva página. Usar estos comandos tras implementar, no interpretar «Unregistered page» en una pendiente como fallo de la infraestructura.

Abrir dos terminales y esperar a que cada servidor esté listo:

```powershell
# Terminal A: catálogo de desarrollo (puerto explícito, distinto de pnpm dev = 3020)
pnpm exec nuxt dev --port 3030 --host 0.0.0.0
```

```powershell
# Terminal B: aplicación independiente de pegado, puerto 3031
pnpm preview:copy-blocks
```

```powershell
# Terminal C: definir ambas URLs para no depender de defaults distintos
$env:BLOCKS_BASE_URL = 'http://127.0.0.1:3030'
$env:BLOCKS_PASTE_URL = 'http://127.0.0.1:3031'
pnpm check:copy-blocks --page=/project-management/dashboard-4 --http
pnpm check:copy-browser --page=/project-management/dashboard-4
# Regresión conjunta (obligatoria al cambiar herramientas o pruebas compartidas)
pnpm check:copy-blocks --http
pnpm check:copy-browser --all
node scripts/verify-pages.mjs --http
```

`check:copy-browser` **sin argumentos solo prueba el piloto**, no todo el catálogo. Los scripts HTTP usan 3020 por defecto; el de navegador usa 3030, y pegado 3031. `CHROME_PATH` permite especificar el ejecutable si no se detecta Chrome/Edge. En shell POSIX, usar `export BLOCKS_BASE_URL=...` / `export BLOCKS_PASTE_URL=...` en vez de `$env:`.

**Regenerar fixtures:** reiniciar el catálogo tras añadir/cambiar registros JSON. Reiniciar `preview:copy-blocks` tras cambiar registros **o código exportado**: crea un snapshot de todos los SFC al arrancar, no se sincroniza con los cambios posteriores de la página. `--typecheck` crea otra fixture y sale, no actualiza el servidor de pegado que ya esté abierto. Las fixtures Windows están bajo `node_modules/.cache/copy-blocks-preview/`; no son archivos para commitear.

**Producción:** detener el dev del catálogo antes del build para evitar competir por `.nuxt/`; ejecutar `pnpm build` y, en otra terminal, iniciar:

```powershell
$env:PORT = '3032'
$env:HOST = '0.0.0.0'
node .output/server/index.mjs
```

En la terminal de pruebas cambiar `BLOCKS_BASE_URL` a `http://127.0.0.1:3032` y repetir las comprobaciones HTTP/navegador; mantener pegado en 3031. Si se reconstruye, reiniciar el servidor de producción. Revisar capturas (claro/oscuro, escritorio, 390 y 320 px), teclado/foco, consola, eventos `window`, enlaces/recursos e interacciones; no basta el resultado automático. El script imprime la carpeta de capturas, en Windows bajo `C:\Users\erikm\AppData\Local\Temp\opencode\blocks-browser-*` en este entorno. Terminar únicamente los procesos iniciados para estas pruebas (Ctrl+C o sus PID registrados), sin detener servidores ajenos.

### Última evidencia, incidencias y cierre de sesión

- **Última validación publicada:** `498cf51`: build, tipos catálogo/pegado, compilación/exportación HTTP de 70 SFC, navegador `--all` con 70 copias/pegados y HTTP de 261 rutas aprobados. Capturas históricas de producción: `C:\Users\erikm\AppData\Local\Temp\opencode\blocks-browser-RKZj7n`. Para `dashboard-4`, pasan `check:pages`, `check:copy-blocks` global (92 SFC), `check:copy-blocks --http` global (92), `verify-pages --http` (261 rutas) y `check:copy-browser --page` (seis bloques, interacciones, copiado/pegado, temas y 320 px). `pnpm build` terminó con `NUXT_IGNORE_LOCK=1`, pero el servidor generado no arranca en Windows (`ERR_INVALID_ARG_VALUE`, `createRequire('file:///_entry.js')`). `preview:copy-blocks --typecheck` informa TS2339 en `inbox-agent.vue`, `inbox-compose.vue` e `inbox-message.vue` (campo `status`). La regresión `check:copy-browser --all` falla al visitar `/ecommerce/dashboard-1`; Vite identifica como origen una etiqueta `<style>` en el template de `app/pages/ecommerce/dashboard-9.vue:669`. No se atribuyen estos bloqueos ajenos a dashboard-4 ni se declara completada.
- **Incidencia global abierta:** `ResizeObserver loop completed with undelivered notifications` aparece en logs de desarrollo del catálogo/pegado durante redimensionado e interacciones. CDP captura excepciones, `console.error` y avisos de hidratación, pero no todos los eventos `window.error`/`unhandledrejection`. Las capturas adicionales con listeners fueron comprobaciones puntuales, **no una corrección global** ni prueba de consola siempre limpia. Investigar origen y ampliar captura por separado; no ocultar errores para hacer pasar las pruebas.
- **Enlaces pendientes:** `app/pages/original/users.vue` contiene diez detalles `/original/users/*` sin ruta. La prueba HTTP recorre el inventario, **no valida esos destinos de enlaces**. Corregirlos al revisar esa página; no declararlos resueltos ni inventar rutas para silenciar avisos.
- **Sin bloqueo de publicación conocido:** los commits anteriores se publicaron. Si las nuevas pruebas, recursos o el push fallan, registrar el fallo exacto y detener el avance de esa página; no saltar validaciones ni marcarla completa.
- **Al terminar cada página:** actualizar casilla, conteos, fila de avance y este relevo (última página, siguiente ruta, cambios locales/WIP, evidencia, incidencias y procesos activos). Hacer el commit/push indicado abajo y confirmar el remoto; una confirmación documental posterior puede citar el SHA, sin mezclar la próxima implementación. Al pausar, indicar qué queda pendiente y no afirmar continuación en segundo plano.

## Bloques copiables y seguimiento

En las páginas marcadas en el ToDo, pasa el cursor sobre un bloque para **copiar su componente Vue**, copiar solo su plantilla o ver el código. También hay un selector de bloques accesible desde teclado y móvil. El piloto histórico comprende `/ecommerce/dashboard-1`, `/developers/webhooks` y `/ai-chat/composer-1`; las 23 páginas habilitadas actualmente figuran en el registro de avance. Consulta [docs/COPYABLE-BLOCKS.md](docs/COPYABLE-BLOCKS.md).

`pnpm check:copy-blocks` valida todos los bloques registrados. `--page=/401` limita la comprobación a una página.

La ampliación se realiza **una página a la vez sobre `main`**, según la instrucción actual del usuario. La rama `feat/copyable-blocks-pilot` ya se integró y publicó en `main` mediante `0bf9584`. El ToDo de este README es el registro de pendientes; no se marcará una página como terminada solo por añadir un botón de copia.

La aplicación contiene archivos para **261 páginas de contenido**, escritos directamente con **Nuxt 4 y Nuxt UI 4**, y conserva las **219 entradas del menú original** de [Shadcnblocks Admin](https://shadcnblocks-admin.vercel.app). Son las páginas de la conversión original; solo las casillas marcadas han completado la revisión funcional/visual y de copia actual.

Cada ruta tiene su propio archivo `.vue` dentro de **`app/pages/`** (el directorio de páginas de Nuxt 4). La plantilla, los datos de ejemplo, el estado, las acciones y los estilos específicos están en ese archivo. No se utilizan renderizadores genéricos ni JSON histórico para renderizar el contenido de las páginas; los metadatos de navegación y copia son infraestructura separada.

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

En las páginas habilitadas, usa **Copiar** para obtener un SFC `.vue` completo, **Más opciones de copia → Copiar solo plantilla** para obtener el marcado o **Ver código** para inspeccionarlo. Pega el componente en `app/components/` de un proyecto Nuxt 4 con Nuxt UI 4, iconos Lucide y `UApp`. La plantilla sola puede necesitar el script y CSS del componente completo.

Para las páginas todavía pendientes, la copia manual sigue disponible:

1. Busca la ruta en `app/pages/` o en [docs/PAGES.md](docs/PAGES.md).
2. Copia el archivo Vue completo o la sección que necesites de su `<template>`.
3. Incluye las variables y funciones locales utilizadas por esa sección, y sus estilos `<style scoped>` si los necesita.
4. Copia los recursos de `public/reference/` utilizados por las imágenes o documentos.

Las secciones incluyen comentarios `Card`, `Table`, `Chart`, `Form`, `Chat composer` y `Workflow canvas` para localizarlas rápidamente.

### Cómo se implementó la copia

- **Fuente única:** el código que se muestra y el que se copia provienen del mismo archivo en `app/pages/`. No se copia HTML del navegador ni se mantienen cadenas de código duplicadas.
- **Bloques:** `data-copy-block="id-unico"` identifica la raíz del bloque. `tabindex="0"` permite seleccionarlo con el teclado.
- **Dependencias explícitas:** las regiones `// @copy:nombre:start/end` delimitan el script; el campo `script` admite un nombre o una lista ordenada de regiones compartidas. `/* @copy:nombre:start/end */` delimita el CSS. `data-copy-fragment="nombre"` identifica piezas auxiliares como un modal. Incluye solo estado, funciones y estilos que utiliza ese bloque.
- **Registro y extracción:** cada página tiene un registro JSON independiente en `app/data/copy-blocks/`, con ruta, archivo fuente, clave y dependencias de sus bloques. `scripts/block-catalog.mjs` lee esos registros, analiza el AST Vue, extrae el código original y elimina los atributos de las herramientas. Los JSON contienen metadatos, no una copia del contenido de los bloques.
- **Build y carga diferida:** `modules/block-catalog.mjs` genera las fuentes por página en Nuxt; el cliente las carga al seleccionar un bloque. No existe un endpoint para leer archivos arbitrarios.
- **Controles del catálogo:** `app/components/BlockCopyTools.vue` usa componentes Nuxt UI y herramientas flotantes, sin cambiar el layout ni incluirse en el código copiado. Incluye visor, selección con teclado/móvil y alternativa manual si falla el portapapeles. La copia automática requiere HTTPS o localhost.
- **Portabilidad:** excluye navegación y estado del catálogo, recursos internos y herramientas de copia. Si una nueva página necesita imágenes, fuentes o documentos, deben eliminarse las dependencias innecesarias o documentarse los recursos necesarios; no declarar un bloque autónomo si todavía depende de ellos.

Consulta [docs/COPYABLE-BLOCKS.md](docs/COPYABLE-BLOCKS.md) para los detalles, pruebas y aplicación independiente de pegado. No ejecutes la regeneración histórica sobre páginas revisadas: `materialize-pages.mjs` protege el piloto de sobrescrituras.

### Procedimiento obligatorio por página

1. Seleccionar **una** ruta pendiente, leer su archivo completo y delimitar sus bloques. No aplicar una conversión masiva sin revisar cada página.
   **Prioridad actual:** completar todas las páginas faltantes manteniendo este procedimiento. Las 9 páginas de clientes de Ecommerce y Payment Processor están terminadas; continuar con gestión de proyectos y las demás rutas fuera de `/ai-chat/*`; dejar IA para el final. El inventario conserva su orden alfabético, pero no determina la prioridad entre estas fases. Siguiente ruta tras publicar Command Center: `/project-management/dashboard-4`.
2. **Validar toda la interfaz:** composición visual, responsive de escritorio/móvil, tema claro/oscuro, foco y etiquetas accesibles, consola e hidratación, recursos y enlaces. Probar filtros, formularios, menús, modales y demás interacciones locales; corregir errores y controles engañosos. No añadir APIs reales a estas demostraciones.
3. **Implementar la copia de bloques:** registrar cada bloque y sus dependencias, añadir las marcas y `BlockCopyTools`, comprobar que no tapa controles y que el componente copiado conserva su diseño y comportamiento.
4. **Probar:** compilar los SFC exportados, ejecutar `pnpm check:pages`, `pnpm check:copy-blocks` y `pnpm typecheck`; comprobar la ruta en navegador, el portapapeles real y el pegado en un proyecto Nuxt UI independiente. Registrar comandos, resultados, incidencias y recursos necesarios. Un HTTP 200 no equivale a una revisión visual.
5. Actualizar el ToDo y el registro de avance, guardar los archivos de esa página y sus dependencias compartidas necesarias, revisar `git diff --check` y crear **un commit por página**. No mezclar la implementación de la siguiente página.
6. Hacer **push inmediatamente** después de cada commit y antes de empezar otra página. Si falla, detener la cola y dejar anotado el bloqueo; no marcar el push como completado ni crear un MR anticipadamente.

```sh
git add README.md <archivo-de-la-pagina> <registro-y-dependencias-revisadas>
git commit -m "feat(blocks): validate and enable copying for /ruta"
git push origin main
```

La casilla de una página representa **interfaz revisada + copia funcional + pruebas aprobadas + commit realizado**. El push se confirma en el registro de avance y se exige antes de continuar; si no se ha publicado, esa página permanece bloqueada. El SHA puede consultarse con `git log --oneline -- <archivo-de-la-pagina>`; no incluir el SHA del propio commit dentro de ese mismo commit.

### ToDo de cierre

- [ ] Completar todas las páginas de la lista siguiente, sin saltar validaciones.
- [ ] Verificar que todos los commits por página están publicados en `origin`.
- [ ] Ejecutar `pnpm build` y las pruebas finales del catálogo completo, incluyendo navegación entre páginas y limpieza de las herramientas al salir.
- [x] Integrar el piloto en `main` y publicar el merge (`0bf9584`). La instrucción posterior del usuario sustituyó el MR final por integración directa y continuación sobre `main`.
- [ ] Publicar el resumen final, resultados de pruebas e incidencias conocidas una vez completadas todas las páginas. No crear un PR de `main` hacia sí misma.

### Registro de avance

| Página / tarea | Interfaz | Copia | Pruebas | Commit / push | Siguiente acción |
| --- | --- | --- | --- | --- | --- |
| Documentación y cola de trabajo | No aplica | No aplica | Inventario comprobado: 261 entradas únicas + 2 rutas auxiliares; `git diff --check` aprobado | `c30377a`, push confirmado | Plan publicado |
| Infraestructura compartida de copia | No aplica | Visor, portapapeles, extracción y registros independientes | `pnpm check:copy-blocks`, `pnpm check:pages` y `pnpm typecheck` aprobados | `8d40a3f`, push confirmado | Publicada |
| `/ecommerce/dashboard-1` | Piloto revisado; finales de línea LF fijados para evitar discrepancias de hidratación de los SVG en Windows | 6 bloques | `check:pages`, tipos, exportación HTTP y `check:copy-browser --all` aprobados: 23 copias/pegados, sin avisos de hidratación | `ccacd15` y corrección `e57e496`, push confirmado | Terminada |
| `/developers/webhooks` | Piloto revisado; copia de ID y enlaces corregidos | 1 bloque | Tipos, build, navegador, búsqueda y pegado aprobados; ruta/exportación repetida con `--page=/developers/webhooks --http` | `af80828`, push confirmado | Terminada |
| `/ai-chat/composer-1` | Piloto revisado; formularios anidados, tokens CSS y recurso externo corregidos | 1 bloque | Tipos, build, envío de mensajes, navegador, teclado/móvil y pegado aprobados; ruta/exportación repetida con `--page=/ai-chat/composer-1 --http` | `d5a52e2`, push confirmado | Terminada |
| `/401` | Escritorio, móvil y tema oscuro revisados; controles Nuxt UI nativos; vuelta atrás real; eliminados residuos del sitio original | 1 bloque autónomo, sin recursos externos | `check:pages`, `check:copy-blocks --page=/401 --http`, `typecheck` y `check:copy-browser --page=/401` aprobados; portapapeles, plantilla, fallback, pegado y navegación probados | `5b41fbc`, push confirmado e integrado en `main` | Terminada |
| `/403` | Pantalla y texto revisados en escritorio/móvil y claro/oscuro; navegación atrás funcional; retirados residuos originales | 1 bloque autónomo | `check:pages`, `check:copy-blocks --page=/403 --http`, `typecheck`, `preview:copy-blocks --typecheck` y `check:copy-browser --page=/403` aprobados | `2195ad6`, push confirmado en `main` | Terminada |
| `/404` | Composición, texto, botones nativos y navegación revisados; escritorio/móvil y claro/oscuro sin errores | 1 bloque autónomo | `check:pages`, `check:copy-blocks --page=/404 --http`, `typecheck`, `preview:copy-blocks --typecheck` y `check:copy-browser --page=/404` aprobados | `42a5e0b`, push confirmado en `main` | Terminada |
| `/503` | Escritorio/móvil y claro/oscuro revisados; «Learn more» muestra información de mantenimiento, no un formulario de edición | 1 bloque autónomo con su modal y estado | `check:pages`, `check:copy-blocks --page=/503 --http`, `typecheck`, `preview:copy-blocks --typecheck` y `check:copy-browser --page=/503` aprobados; modal copiado probado | `c3a3db6`, push confirmado en `main` | Terminada |
| `/ai-chat/agent-activity` | Búsqueda/período/estado funcionales; detalle expandible; diálogos informativos; CSV de la ejecución seleccionada; móvil y temas revisados | 11 tarjetas independientes, cada una con estado y modal necesarios | `check:pages`, `check:copy-blocks --http`, tipos del catálogo/pegado, navegador individual y `check:copy-browser --all` aprobados; 11 copias/pegados, filtros, expansión, política/revisión y CSV real comprobados | `ebfff6d`, push confirmado en `main` | Terminada antes del cambio de prioridad |
| `/ai-chat/agent-configuration` | Trabajo incompleto aplazado por instrucción del usuario | 2 bloques en borrador, no habilitados en `main` | Compilación/estructura/tipos aprobados; navegador y revisión visual pendientes | WIP local preservado en stash `1474bce9569566d438973ec4f62f671e25f86d5c`, sin commit de página | Retomar solo tras completar las rutas fuera de `/ai-chat/*` |
| `/developers/api-keys` | Entorno funcional; creación/rotación local con confirmación, valores reales de demostración al copiar, ocultar/revelar, cuenta y guía coherentes; móvil/claro/oscuro revisados | 2 bloques: versión y gestor completo con pestañas y modales; ningún secreto real ni API | `check:pages`, `check:copy-blocks --page=/developers/api-keys --http`, tipos del catálogo/pegado y navegador individual/conjunto aprobados; fallback nativo y modal móvil probados | `46b0a50`, push confirmado en `main` | Terminada |
| `/developers/events-&-logs` | Filtros funcionales, UTC coherente, importación JSON validada, sin total monetario ajeno a logs; pestañas/resúmenes y modales móviles revisados | 3 bloques autónomos: explorador de logs, visitantes y fuentes | Estructura, exportación HTTP, tipos del catálogo/pegado y navegador aprobados; filtros/orden/importación/recarga/pestañas; prueba conjunta de 28 bloques y revalidación individual tras corregir error visual del formulario | `f0b88f9`, push confirmado en `main` | Terminada |
| `/developers/overview` | Entorno/período y dispositivo funcionales; gráficas SVG responsive y semánticas; totales, medias y tendencias calculados; estados de actividades legibles en oscuro | 4 bloques independientes; las 3 métricas incluyen sus filtros al copiar | Estructura, tipos del catálogo/pegado, HTTP y navegador individual/conjunto aprobados; build de producción aprobado; 32 copias/pegados en producción y HTTP de las 261 rutas sin fallos | `970ab05`, push confirmado en `main` | Terminada |
| `/project-management/dashboard-1` | Contadores calculados; temporizador real con pausa/reinicio; filtros y edición de la fila correcta; móvil/escritorio con los mismos datos; perfil y agenda locales sin imágenes internas | 6 bloques autónomos: resumen, estados, horas, temporizador, incidencias y panel de perfil/agenda | `check:pages`, `check:copy-blocks --page=/project-management/dashboard-1 --http`, tipos del catálogo/pegado y navegador aprobados; 6 copias/pegados; filtros/orden/validación/guardado/agenda/temporizador; móvil y claro/oscuro revisados | `25394d0`, push confirmado en `main` | Terminada |
| `/project-management/dashboard-2` | Acciones crean registros locales; totales coherentes; búsqueda/detalles de proyectos; mapa recortado por rango; notas, miembros y notificaciones funcionales; contrastes y móvil corregidos | 9 bloques autónomos, con modales y datos explícitos; sin imágenes internas ni servicios externos | Tipos, estructura, HTTP, pegado y navegador aprobados; fechas/nombres/emails/duplicados validados; producción: build, 47 copias/pegados y HTTP de 261 rutas sin fallos | `4387d5b`, push confirmado en `main` | Terminada |
| `/ecommerce/add-customer` | Alta local validada, campos etiquetados; contactos/direcciones/tarjetas ficticias y segmentos dinámicos; una tarjeta predeterminada; navegación y borrador/reset funcionales; móvil/claro/oscuro revisados | 1 editor completo autónomo: conserva la validación entre todas las secciones sin formularios anidados | Estructura, HTTP, tipos del catálogo/pegado y navegador individual/conjunto aprobados; 48 copias/pegados; emails/teléfono/direcciones/últimos 4/mes y segmentos comprobados; vista previa sin API ni almacenamiento persistente | `f43e4f2`, push confirmado en `main` | Terminada |
| `/ecommerce/edit-customer/cus-1742` | Registro precargado con ID de solo lectura; validación y cambios locales; borrador/restauración; reset a la última versión guardada; contactos/direcciones/tarjetas/segmentos funcionales | 1 editor completo autónomo; se excluyen rutas, persistencia y herramientas del catálogo | Estructura, HTTP, tipos del catálogo/pegado y navegador aprobados; ID, guardado limpio/sucio, reset antes/después de guardar, metadatos y predeterminada única comprobados; móvil/claro/oscuro revisados | `d321c65`, push confirmado en `main` | Terminada |
| `/ecommerce/customer-list-1` | Indicadores calculados; filtros compartidos entre tabla/tarjetas móviles; orden numérico, columnas opcionales y edición de la fila correcta; creación/eliminación local validada | 2 bloques: resumen y directorio con sus modales; sin imágenes internas, rutas de clientes falsas ni persistencia | Estructura, HTTP, tipos y pegado independiente aprobados; navegador individual/conjunto: 51 copias/pegados, filtros, duplicados, creación, cancelación/eliminación y móvil/temas comprobados | `5cd0d54`, push confirmado en `main` | Terminada |
| `/ecommerce/customer-detail-1` | Purchases/Reviews/Activity muestran contenido distinto; totales por artículos calculados; perfil/contacto/dirección/segmentos editables localmente; borradores validados sin envío; retirado mapa que nunca cargaba | 3 bloques autónomos: perfil/borradores, historial y detalles con sus editores; sin recursos internos ni mapas/API externos | Estructura, HTTP, tipos catálogo/pegado y navegador aprobados; 3 copias/pegados; validación, cancelación, segmentos únicos, actividad compartida, móvil y claro/oscuro revisados | `79ac130`, push confirmado en `main` | Terminada |
| `/payment-processor/customers` | Contador/paginación coherentes con 10 registros; filtros de estado/fecha y rango UTC validado; orden sincronizado en tabla/móvil; detalles del cliente correcto | 1 directorio autónomo con modal de solo lectura; sin API de pagos, imágenes internas ni persistencia | Estructura, HTTP, tipos catálogo/pegado y navegador aprobados; paginación, reset de página, tamaño, búsqueda por ID, rango inválido/vacío, orden cronológico, móvil y claro/oscuro comprobados | `91cf4f7`, push confirmado en `main` mediante fetch y comparación con `origin/main` | Terminada |
| `/payment-processor/customers-list-2` | Tres vistas con columnas reales; métricas calculadas; filtros combinados; fechas UTC inclusivas; orden numérico/cronológico; detalle correcto y CSV por vista; etiquetas móviles sin truncar | 2 bloques autónomos: resumen y directorio con su modal; sin recursos internos, API ni persistencia | Estructura, HTTP, tipos catálogo/pegado, build y navegador aprobados; regresión conjunta: 57 copias/pegados; producción: 261 rutas y prueba individual del script preparado para commit; revisión visual 320/390 px, temas, foco y limpieza al navegar; colisiones del selector/barra corregidas incluyendo recorte de scrollers internos | `99e2f15`, push confirmado en `main` mediante `git ls-remote` | Terminada; siguiente: `/payment-processor/customer-detail` |
| `/payment-processor/customer-detail` | Plan local con validación, precio calculado y fecha UTC; tarjetas ficticias con predeterminada única, duplicados/expiración y retirada confirmada; búsqueda de facturas independiente y detalles reales | 3 bloques autónomos: plan/perfil, metadatos de tarjetas e historial; sin imágenes internas, PAN/CVC, APIs o persistencia | `check:pages`, `check:copy-blocks --http` (60 SFC), tipos catálogo/pegado y navegador individual aprobados; 3 copias/pegados; temas, 320/390 px, modales/foco y filtros comprobados; captura adicional de eventos `window`: sin errores en esta ruta/pegado | `6c96d86`, push confirmado en `main` | Terminada |
| `/payment-processor/customer-detail-2` | Perfil editable validado, visible también en móvil; saldo pendiente y cuota base calculados; tres grupos de facturas con filtros/orden y desglose; descarga real de CSV de la fila elegida | 2 bloques autónomos: perfil/resumen y ledger agrupado; fechas UTC explícitas; sin APIs, persistencia ni documentos internos | `check:pages`, exportación HTTP (62 SFC), tipos catálogo/pegado y navegador aprobados; 2 copias/pegados, CSV real, estados, orden numérico y cancelación; móvil/claro/oscuro; eventos `window` sin errores en comprobación adicional; fixture de pegado regenerado tras detectar registro anterior sin nuevas rutas | `44be0d2`, push confirmado en `main` | Terminada |
| `/payment-processor/customer-detail-3` | Perfil validado con ID fijo; transacciones y filtros, totales calculados sin intentos rechazados; eliminación local con confirmación del ID, limpieza coherente y restauración fresca | 1 workspace autónomo: las colecciones dependientes permanecen juntas al copiar o retirar el cliente; sin imágenes internas, API o persistencia | Estructura, tipos catálogo/pegado, exportación y navegador individual aprobados; temas/móvil 320/390 px; regresión de producción con el script preparado para commit: 63 copias/pegados; build y HTTP de 261 rutas aprobados. Corregida colisión global de barra causada por un hueco fraccional en producción | `82861c2`, push confirmado en `main` | Terminada |
| `/project-management/dashboard-3` | Resumen calculado de 4 proyectos; búsqueda/selección de registro correcto; sprint/FY/rango cambian gráficas y tablas; hitos editables, invitación local validada y notificaciones con estado leído; throughput real también en escritorio | 7 bloques autónomos: portfolio/proyecto, sprint, presupuesto, hitos, equipo, actividad y throughput; sin imágenes internas, servicios o persistencia | Estructura, tipos catálogo/pegado y build aprobados; navegador individual y regresión de producción con script preparado para commit: 70 copias/pegados; exportación HTTP y 261 rutas sin fallos; 320/390 px, temas, Tab/Escape/foco y limpieza al navegar; captura `window` adicional sin errores para ruta/pegado. Selector/barra y pruebas consideran controles `summary` | `498cf51`, push confirmado en `main` mediante `git ls-remote` | Terminada; siguiente: `/project-management/dashboard-4` |
| `/project-management/dashboard-4` | Filtros/columnas y cambio de estado conectados; CSV con encabezados; acciones locales etiquetadas como demo; salud y lista crítica basadas en estados; canvas fijo identificado claramente; revisado claro/oscuro y móvil 320 px | 6 bloques autónomos; SFC incorporan scripts/regiones y estilos necesarios, sin APIs ni persistencia | Check estático global y HTTP (92 bloques), 261 rutas HTTP e individual de navegador/copiar/pegar aprobados; interacciones probadas: filtros, recuentos, estado, columnas, modal local y CSV. Incompleta: regresión `--all` falla por `<style>` en el template de `ecommerce/dashboard-9.vue:669`; typecheck del fixture falla en `inbox-1`; servidor `.output` no arranca en Windows. Build terminó, pero falta validar producción | WIP: commit y push incluidos en esta publicación; página no completada | Pendiente: resolver bloqueos globales y repetir regresión/validación de producción |

Avance: **23 de 261 páginas completadas según el procedimiento; 238 pendientes**, además de las 2 rutas auxiliares. Clientes: **9 de 9 páginas** (Ecommerce y Payment Processor completos). Gestión de proyectos: **3 de 32 páginas completadas**. `dashboard-4` está publicada como WIP, pero sigue pendiente hasta completar validaciones y corregir los bloqueos registrados. Las casillas reflejan páginas completadas; la columna commit/push confirma su publicación. Actualiza esta tabla al terminar una página o encontrar un bloqueo; no dar a entender que la cola continúa ejecutándose en segundo plano cuando no hay una ejecución activa.

### Descripción de bloques copiables por página

Este índice documenta los **92 bloques registrados en 31 páginas** en el momento de esta actualización. Cada descripción resume el contenido y el propósito del SFC exportado; las páginas sin registro en el catálogo aún no tienen bloques copiables documentados. Los identificadores entre `backticks` coinciden con los registros de `app/data/copy-blocks/`.

#### `/401`
- `unauthorized-screen` — Pantalla de acceso no autorizado con explicación del estado y navegación para volver a una ubicación válida.

#### `/403`
- `forbidden-screen` — Pantalla de permiso denegado con mensaje orientativo y salida de navegación.

#### `/404`
- `not-found-screen` — Estado de página no encontrada con explicación y acciones para regresar o continuar navegando.

#### `/503`
- `maintenance-screen` — Aviso de mantenimiento del servicio con información complementaria en un diálogo local.

#### `/ai-chat/agent-activity`
- `agent-refund-run` — Tarjeta de ejecución de reembolso con resumen del caso y su resultado de demostración.
- `agent-report-run` — Ejecución de informe que presenta resultados y pasos de revisión antes de considerarlos listos.
- `agent-discount-run` — Ejecución de descuento con comprobaciones de política y límites de aprobación.
- `agent-reconcile-run` — Resumen de conciliación de pagos con importes y diferencias ficticias para revisar.
- `agent-renewal-run` — Pronóstico de renovaciones con señales y datos de ejemplo de la ejecución.
- `agent-archive-run` — Ejecución de archivo de tickets con recuento y estado de los elementos procesados.
- `agent-purchase-run` — Resumen de generación de orden de compra y sus datos de demostración.
- `agent-digest-run` — Ejecución de resumen semanal con actividad agrupada para consulta.
- `agent-support-run` — Ejecución de enrutamiento de soporte con información del destino y resultado simulado.
- `agent-vendor-run` — Revisión de proveedor con criterios y estado de la evaluación de ejemplo.
- `agent-billing-run` — Resumen de exportación de facturación con periodo y resultado ficticio.

#### `/ai-chat/composer-1`
- `chat-composer` — Compositor de conversación con entrada de texto, controles auxiliares y envío local de mensajes de ejemplo.

#### `/developers/api-keys`
- `developer-api-version` — Resumen compacto de la versión de API y la información necesaria para identificarla.
- `developer-api-key-manager` — Gestor de claves de demostración con listado, visibilidad, creación/rotación local y controles de estado; no usa secretos ni API reales.

#### `/developers/events-&-logs`
- `developer-log-explorer` — Explorador de eventos con búsqueda, filtros, selección de periodo y visualización/importación local de registros.
- `developer-visitor-summary` — Desglose de visitantes por fuente para comparar su distribución.
- `developer-referrer-summary` — Desglose de dominios de referencia con sus métricas de ejemplo.

#### `/developers/overview`
- `developer-request-metrics` — Métricas de solicitudes de API con periodo, valores agregados y visualización de tendencia.
- `developer-response-metrics` — Tiempos de respuesta con distribución y evolución para el intervalo elegido.
- `developer-visitor-metrics` — Métricas de visitantes segmentadas por tipo de dispositivo.
- `developer-recent-activities` — Lista de actividad reciente de desarrollo con eventos, marcas temporales y estados.

#### `/developers/webhooks`
- `webhooks-table` — Tabla de endpoints webhook con sus datos de configuración/estado y acciones de consulta o copia.

#### `/ecommerce/add-customer`
- `ecommerce-add-customer-editor` — Editor integral para crear un cliente de muestra, con datos de contacto, direcciones, tarjetas ficticias, segmentos y validación local.

#### `/ecommerce/customer-detail-1`
- `ecommerce-customer-profile` — Perfil del cliente y borradores de mensajes asociados, editables localmente sin enviar comunicaciones.
- `ecommerce-customer-history` — Historial del cliente que reúne compras, reseñas y actividad en una sola sección.
- `ecommerce-customer-details` — Datos ampliados del cliente con editores locales de contacto, dirección y segmentos.

#### `/ecommerce/customer-list-1`
- `ecommerce-customer-metrics` — Indicadores agregados del directorio de clientes calculados a partir de sus registros.
- `ecommerce-customer-directory` — Directorio con búsqueda, filtros, orden, columnas y acciones locales de alta, edición o retirada.

#### `/ecommerce/dashboard-1`
- `commerce-metrics` — Resumen de métricas comerciales para el periodo mostrado.
- `commerce-revenue` — Indicador de ingresos totales con comparación respecto al periodo de referencia.
- `commerce-channels` — Visualización comparativa de ingresos por canal de venta.
- `commerce-order-value` — Indicador del valor medio de pedido y su variación.
- `commerce-sales` — Métrica de ventas promedio con referencia temporal.
- `commerce-categories` — Desglose visual de ventas por categoría de producto.

#### `/ecommerce/edit-customer/cus-1742`
- `ecommerce-edit-customer-editor` — Espacio de edición precargado para un cliente, con ID fijo, validación, borrador local y restauración de cambios.

#### `/payment-processor/customer-detail`
- `processor-billing-plan` — Plan de facturación ficticio con datos del plan, precio calculado y controles locales de edición.
- `processor-billing-cards` — Metadatos de tarjetas de ejemplo con gestión local de predeterminada, duplicados, expiración y retirada; no contiene PAN ni CVC.
- `processor-billing-invoices` — Historial de facturas de muestra con estados, búsqueda y consulta del detalle correspondiente.

#### `/payment-processor/customer-detail-2`
- `processor-subscription-profile` — Perfil de suscripción y balances calculados para el cliente de demostración.
- `processor-subscription-ledger` — Libro de facturas agrupado por periodo, con estados, filtros, orden y desglose de importes.

#### `/payment-processor/customer-detail-3`
- `processor-customer-overview` — Resumen del cliente y sus datos/transacciones relacionados, con retirada local coherente y confirmación explícita.

#### `/payment-processor/customers`
- `processor-customer-directory` — Directorio paginado de clientes de pago con búsqueda, filtros de estado/fecha, orden y detalle de solo lectura.

#### `/payment-processor/customers-list-2`
- `payment-account-summary` — Resumen de métricas de cuentas de pago de clientes.
- `payment-account-directory` — Directorio de cuentas con vistas, filtros combinables, orden, métodos de pago, señales de riesgo y exportación CSV por vista.

#### `/project-management/dashboard-1`
- `project-workspace-summary` — Resumen personal de incidencias y trabajo asignado.
- `project-workspace-status` — Distribución de las incidencias por estado.
- `project-work-hours` — Análisis de horas registradas con desglose visual.
- `project-time-tracker` — Temporizador local de trabajo asociado a una incidencia, con controles de inicio, pausa y reinicio.
- `project-my-issues` — Lista de incidencias personales con estado y controles de búsqueda/edición de muestra.
- `project-workspace-panel` — Panel de perfil del espacio de trabajo y agenda local.

#### `/project-management/dashboard-2`
- `project-planning-actions` — Acciones rápidas de planificación que crean elementos locales de demostración.
- `project-planning-metrics` — Totales y métricas agregadas del plan de proyectos.
- `project-issue-map` — Mapa temporal de incidencias para situar trabajo y fechas en el periodo seleccionado.
- `project-current-projects` — Lista de proyectos de muestra con consulta de sus detalles.
- `project-milestone-tracker` — Seguimiento de hitos y sus fechas/estados.
- `project-planning-notes` — Notas de planificación editables localmente.
- `project-planning-activity` — Registro de actividad relacionada con la planificación.
- `project-planning-members` — Lista de miembros ficticios del proyecto y su información de participación.
- `project-planning-status` — Resumen de incidencias y su estado dentro del plan.

#### `/project-management/dashboard-3`
- `command-portfolio` — Resumen del portfolio y navegador de proyectos con búsqueda y selección del registro.
- `command-sprint` — Estado del sprint con puntos de historia y datos del periodo seleccionado.
- `command-budget` — Comparación de presupuesto real y pronosticado para el ejercicio elegido.
- `command-milestones` — Próximos hitos con sus fechas y estado.
- `command-team` — Estado del equipo y vista previa local de invitación.
- `command-activity` — Actividad reciente y notificaciones locales con estado de lectura.
- `command-throughput` — Volumen semanal de incidencias completadas, presentado como tendencia.

#### `/project-management/dashboard-4`
- `project-toolbar` — Breadcrumb, título, búsqueda y controles superiores del mapa de dependencias.
- `project-workflow-canvas` — Canvas de dependencias de proyecto de muestra con nodos/relaciones arrastrables y controles de zoom; incluye sus estilos.
- `project-table-1` — Tabla de proyectos con filtro por estado, visibilidad de columnas, orden y cambio local del estado.
- `project-health` — Gráfico de anillo y leyenda que calculan la distribución de salud desde los estados de la tabla.
- `project-critical-path` — Lista derivada de proyectos bloqueados o en riesgo con responsable y fecha.
- `project-needs-attention` — Panel de proyectos bloqueados con indicaciones locales de seguimiento.

#### `/project-management/inbox-1`
- `inbox-message` — Vista de la conversación seleccionada con participantes, mensajes y marcas de tiempo.
- `inbox-compose` — Compositor de respuesta para redactar y añadir una respuesta local al hilo.
- `inbox-agent` — Panel de asistencia con señales del hilo y sugerencias/contexto para quien responde.

#### `/project-management/issue-kanban-1`
- `kanban-toolbar` — Barra del tablero con búsqueda y filtros locales para incidencias.
- `kanban-counts` — Recuentos de incidencias por columna/estado.
- `kanban-board` — Columnas Kanban con tarjetas de incidencias y sus datos principales.

#### `/project-management/issue-list-1`
- `issue-list-toolbar` — Barra del proyecto con búsqueda, filtros y acciones locales de creación.
- `issue-list-board` — Incidencias agrupadas por estado para consultar el trabajo de cada grupo.

#### `/project-management/issue-list-2`
- `issue-list2-toolbar` — Barra de proyecto con controles de filtro y acciones locales de creación.
- `issue-list2-board` — Lista agrupada de incidencias con sus atributos y estado.

#### `/project-management/member-list-2`
- `member2-toolbar` — Barra del directorio de miembros con búsqueda y controles de consulta.
- `member2-grid` — Tarjetas de miembros con información de contacto.

#### `/project-management/member-list-3`
- `member3-invite` — Formulario local para preparar invitaciones de miembros por correo electrónico.
- `member3-directory` — Directorio que reúne miembros, invitaciones y sugerencias de personas.

#### `/project-management/project-list-1`
- `project-list-toolbar` — Barra para buscar, filtrar y crear proyectos de muestra.
- `project-list-directory` — Tarjetas de proyectos con detalles consultables en el estado local de demostración.

Las incidencias abiertas y cambios locales que deben preservarse se detallan en [el relevo](#última-evidencia-incidencias-y-cierre-de-sesión). Las salidas con código 1 de servidores deliberadamente detenidos después de las pruebas no indican por sí mismas un fallo de build.

### ToDo por página (261 páginas de contenido)

Cada casilla exige las dos tareas solicitadas: **validar la coherencia de toda la interfaz y corregir errores**, e **implementar y validar la copia de sus bloques**, además del flujo de commit/push anterior. El enlace abre el archivo fuente. El piloto ya está publicado; continuar desde la ruta y fase del relevo, no reiniciar las páginas terminadas.

**Orden de ejecución actualizado:** primero clientes (`add-customer`, `edit-customer`, `customer-list`/`customers` y `customer-detail` en Ecommerce/Payment Processor), después retomar `/project-management/*` y las demás pendientes fuera de `/ai-chat/*`, y finalmente IA. No deshacer las páginas ya terminadas. Al retomar configuración de IA, inspeccionar el stash indicado arriba y recuperar sus cambios con cuidado: incluye el SFC, su registro JSON y pruebas compartidas que pueden requerir reconciliación con las nuevas pruebas. La casilla sigue pendiente.

- [x] [/401](app/pages/401.vue)
- [x] [/403](app/pages/403.vue)
- [x] [/404](app/pages/404.vue)
- [x] [/503](app/pages/503.vue)
- [x] [/ai-chat/agent-activity](app/pages/ai-chat/agent-activity.vue)
- [ ] [/ai-chat/agent-configuration](app/pages/ai-chat/agent-configuration.vue)
- [ ] [/ai-chat/agent-detail](app/pages/ai-chat/agent-detail.vue)
- [ ] [/ai-chat/agent-factory-1](app/pages/ai-chat/agent-factory-1.vue)
- [ ] [/ai-chat/agent-studio/builder](app/pages/ai-chat/agent-studio/builder.vue)
- [ ] [/ai-chat/agent-studio/integrations](app/pages/ai-chat/agent-studio/integrations.vue)
- [ ] [/ai-chat/agent-studio/skills](app/pages/ai-chat/agent-studio/skills.vue)
- [ ] [/ai-chat/agent-traces](app/pages/ai-chat/agent-traces.vue)
- [ ] [/ai-chat/api-keys](app/pages/ai-chat/api-keys.vue)
- [ ] [/ai-chat/api-requests](app/pages/ai-chat/api-requests.vue)
- [ ] [/ai-chat/artifact-version-review](app/pages/ai-chat/artifact-version-review.vue)
- [ ] [/ai-chat/audio-playground](app/pages/ai-chat/audio-playground.vue)
- [ ] [/ai-chat/automation-1](app/pages/ai-chat/automation-1.vue)
- [ ] [/ai-chat/automation-run-history](app/pages/ai-chat/automation-run-history.vue)
- [ ] [/ai-chat/batch-jobs](app/pages/ai-chat/batch-jobs.vue)
- [ ] [/ai-chat/billing](app/pages/ai-chat/billing.vue)
- [ ] [/ai-chat/canvas-workbench](app/pages/ai-chat/canvas-workbench.vue)
- [x] [/ai-chat/composer-1](app/pages/ai-chat/composer-1.vue)
- [ ] [/ai-chat/composer-2](app/pages/ai-chat/composer-2.vue)
- [ ] [/ai-chat/composer-3](app/pages/ai-chat/composer-3.vue)
- [ ] [/ai-chat/composer-4](app/pages/ai-chat/composer-4.vue)
- [ ] [/ai-chat/composer-5](app/pages/ai-chat/composer-5.vue)
- [ ] [/ai-chat/composer-6](app/pages/ai-chat/composer-6.vue)
- [ ] [/ai-chat/composer-7](app/pages/ai-chat/composer-7.vue)
- [ ] [/ai-chat/conversation-1](app/pages/ai-chat/conversation-1.vue)
- [ ] [/ai-chat/conversation-10](app/pages/ai-chat/conversation-10.vue)
- [ ] [/ai-chat/conversation-11](app/pages/ai-chat/conversation-11.vue)
- [ ] [/ai-chat/conversation-12](app/pages/ai-chat/conversation-12.vue)
- [ ] [/ai-chat/conversation-13](app/pages/ai-chat/conversation-13.vue)
- [ ] [/ai-chat/conversation-14](app/pages/ai-chat/conversation-14.vue)
- [ ] [/ai-chat/conversation-15](app/pages/ai-chat/conversation-15.vue)
- [ ] [/ai-chat/conversation-16](app/pages/ai-chat/conversation-16.vue)
- [ ] [/ai-chat/conversation-17](app/pages/ai-chat/conversation-17.vue)
- [ ] [/ai-chat/conversation-18](app/pages/ai-chat/conversation-18.vue)
- [ ] [/ai-chat/conversation-19](app/pages/ai-chat/conversation-19.vue)
- [ ] [/ai-chat/conversation-2](app/pages/ai-chat/conversation-2.vue)
- [ ] [/ai-chat/conversation-20](app/pages/ai-chat/conversation-20.vue)
- [ ] [/ai-chat/conversation-23](app/pages/ai-chat/conversation-23.vue)
- [ ] [/ai-chat/conversation-3](app/pages/ai-chat/conversation-3.vue)
- [ ] [/ai-chat/conversation-4](app/pages/ai-chat/conversation-4.vue)
- [ ] [/ai-chat/conversation-5](app/pages/ai-chat/conversation-5.vue)
- [ ] [/ai-chat/conversation-6](app/pages/ai-chat/conversation-6.vue)
- [ ] [/ai-chat/conversation-7](app/pages/ai-chat/conversation-7.vue)
- [ ] [/ai-chat/conversation-8](app/pages/ai-chat/conversation-8.vue)
- [ ] [/ai-chat/conversation-9](app/pages/ai-chat/conversation-9.vue)
- [ ] [/ai-chat/creative-canvas](app/pages/ai-chat/creative-canvas.vue)
- [ ] [/ai-chat/credit-usage](app/pages/ai-chat/credit-usage.vue)
- [ ] [/ai-chat/deliverable-file-cabinet](app/pages/ai-chat/deliverable-file-cabinet.vue)
- [ ] [/ai-chat/document-comparison](app/pages/ai-chat/document-comparison.vue)
- [ ] [/ai-chat/document-writing-workspace](app/pages/ai-chat/document-writing-workspace.vue)
- [ ] [/ai-chat/embedded-commerce-copilot](app/pages/ai-chat/embedded-commerce-copilot.vue)
- [ ] [/ai-chat/evaluations](app/pages/ai-chat/evaluations.vue)
- [ ] [/ai-chat/evidence-comparison-matrix](app/pages/ai-chat/evidence-comparison-matrix.vue)
- [ ] [/ai-chat/generation-pipeline](app/pages/ai-chat/generation-pipeline.vue)
- [ ] [/ai-chat/incidents](app/pages/ai-chat/incidents.vue)
- [ ] [/ai-chat/knowledge-base](app/pages/ai-chat/knowledge-base.vue)
- [ ] [/ai-chat/mixed-agent-canvas](app/pages/ai-chat/mixed-agent-canvas.vue)
- [ ] [/ai-chat/mobile-screen-workspace](app/pages/ai-chat/mobile-screen-workspace.vue)
- [ ] [/ai-chat/model-benchmarks](app/pages/ai-chat/model-benchmarks.vue)
- [ ] [/ai-chat/model-catalog](app/pages/ai-chat/model-catalog.vue)
- [ ] [/ai-chat/model-detail](app/pages/ai-chat/model-detail.vue)
- [ ] [/ai-chat/model-pricing](app/pages/ai-chat/model-pricing.vue)
- [ ] [/ai-chat/model-usage](app/pages/ai-chat/model-usage.vue)
- [ ] [/ai-chat/organization-settings](app/pages/ai-chat/organization-settings.vue)
- [ ] [/ai-chat/parent-child-conversations](app/pages/ai-chat/parent-child-conversations.vue)
- [ ] [/ai-chat/pdf-evidence-chat](app/pages/ai-chat/pdf-evidence-chat.vue)
- [ ] [/ai-chat/plugins](app/pages/ai-chat/plugins.vue)
- [ ] [/ai-chat/profile](app/pages/ai-chat/profile.vue)
- [ ] [/ai-chat/project-settings](app/pages/ai-chat/project-settings.vue)
- [ ] [/ai-chat/research-brief-builder](app/pages/ai-chat/research-brief-builder.vue)
- [ ] [/ai-chat/response-review](app/pages/ai-chat/response-review.vue)
- [ ] [/ai-chat/skill-library](app/pages/ai-chat/skill-library.vue)
- [ ] [/ai-chat/skills-manager](app/pages/ai-chat/skills-manager.vue)
- [ ] [/ai-chat/tokenizer](app/pages/ai-chat/tokenizer.vue)
- [ ] [/ai-chat/usage-insights](app/pages/ai-chat/usage-insights.vue)
- [ ] [/ai-chat/visual-inspection](app/pages/ai-chat/visual-inspection.vue)
- [ ] [/ai-chat/web-answer](app/pages/ai-chat/web-answer.vue)
- [ ] [/ai-chat/workflow-1](app/pages/ai-chat/workflow-1.vue)
- [ ] [/ai-chat/workflow-2](app/pages/ai-chat/workflow-2.vue)
- [ ] [/ai-chat/workflow-3](app/pages/ai-chat/workflow-3.vue)
- [x] [/developers/api-keys](app/pages/developers/api-keys.vue)
- [x] [/developers/events-&amp;-logs](app/pages/developers/events-%26-logs.vue)
- [x] [/developers/overview](app/pages/developers/overview.vue)
- [x] [/developers/webhooks](app/pages/developers/webhooks/index.vue)
- [ ] [/developers/webhooks/44ecb04e-9f49-4b2d-9626-01e6dc54eb6e](app/pages/developers/webhooks/44ecb04e-9f49-4b2d-9626-01e6dc54eb6e.vue)
- [ ] [/developers/webhooks/4ba1ee0e-1364-4d98-94b5-71f53098e02a](app/pages/developers/webhooks/4ba1ee0e-1364-4d98-94b5-71f53098e02a.vue)
- [ ] [/developers/webhooks/530f5f19-d5fe-43bc-a6ca-dd5893b48078](app/pages/developers/webhooks/530f5f19-d5fe-43bc-a6ca-dd5893b48078.vue)
- [ ] [/developers/webhooks/6acc5263-e689-4921-9afd-bf0f7d72b2a2](app/pages/developers/webhooks/6acc5263-e689-4921-9afd-bf0f7d72b2a2.vue)
- [ ] [/developers/webhooks/c69a8ebb-b12a-43fc-88a6-2cd2417cd839](app/pages/developers/webhooks/c69a8ebb-b12a-43fc-88a6-2cd2417cd839.vue)
- [ ] [/developers/webhooks/ce83557d-10f7-48ec-b266-96862228c2e2](app/pages/developers/webhooks/ce83557d-10f7-48ec-b266-96862228c2e2.vue)
- [ ] [/developers/webhooks/ff32e83f-7841-4c07-a27a-9c5b5a42fc52](app/pages/developers/webhooks/ff32e83f-7841-4c07-a27a-9c5b5a42fc52.vue)
- [x] [/ecommerce/add-customer](app/pages/ecommerce/add-customer.vue)
- [ ] [/ecommerce/add-order](app/pages/ecommerce/add-order.vue)
- [ ] [/ecommerce/add-product-2](app/pages/ecommerce/add-product-2.vue)
- [ ] [/ecommerce/add-product](app/pages/ecommerce/add-product.vue)
- [ ] [/ecommerce/add-shipping](app/pages/ecommerce/add-shipping.vue)
- [x] [/ecommerce/customer-detail-1](app/pages/ecommerce/customer-detail-1.vue)
- [x] [/ecommerce/customer-list-1](app/pages/ecommerce/customer-list-1.vue)
- [x] [/ecommerce/dashboard-1](app/pages/ecommerce/dashboard-1.vue)
- [ ] [/ecommerce/dashboard-2](app/pages/ecommerce/dashboard-2.vue)
- [ ] [/ecommerce/dashboard-3](app/pages/ecommerce/dashboard-3.vue)
- [ ] [/ecommerce/dashboard-4](app/pages/ecommerce/dashboard-4.vue)
- [ ] [/ecommerce/dashboard-5](app/pages/ecommerce/dashboard-5.vue)
- [ ] [/ecommerce/dashboard-6](app/pages/ecommerce/dashboard-6.vue)
- [ ] [/ecommerce/dashboard-7](app/pages/ecommerce/dashboard-7.vue)
- [ ] [/ecommerce/dashboard-8](app/pages/ecommerce/dashboard-8.vue)
- [ ] [/ecommerce/dashboard-9](app/pages/ecommerce/dashboard-9.vue)
- [x] [/ecommerce/edit-customer/cus-1742](app/pages/ecommerce/edit-customer/cus-1742.vue)
- [ ] [/ecommerce/edit-order/so-654](app/pages/ecommerce/edit-order/so-654.vue)
- [ ] [/ecommerce/edit-product-2/radiance-ritual-set](app/pages/ecommerce/edit-product-2/radiance-ritual-set.vue)
- [ ] [/ecommerce/edit-product/barrier-repair-drops](app/pages/ecommerce/edit-product/barrier-repair-drops.vue)
- [ ] [/ecommerce/edit-product/botanical-body-polish](app/pages/ecommerce/edit-product/botanical-body-polish.vue)
- [ ] [/ecommerce/edit-product/cloud-silk-toner](app/pages/ecommerce/edit-product/cloud-silk-toner.vue)
- [ ] [/ecommerce/edit-product/dew-reset-essence](app/pages/ecommerce/edit-product/dew-reset-essence.vue)
- [ ] [/ecommerce/edit-product/hydrabloom-night-cream](app/pages/ecommerce/edit-product/hydrabloom-night-cream.vue)
- [ ] [/ecommerce/edit-product/micro-peel-serum](app/pages/ecommerce/edit-product/micro-peel-serum.vue)
- [ ] [/ecommerce/edit-product/overnight-recovery-mask](app/pages/ecommerce/edit-product/overnight-recovery-mask.vue)
- [ ] [/ecommerce/edit-product/pureessence-soap-trio](app/pages/ecommerce/edit-product/pureessence-soap-trio.vue)
- [ ] [/ecommerce/edit-product/radiance-ritual-set](app/pages/ecommerce/edit-product/radiance-ritual-set.vue)
- [ ] [/ecommerce/edit-product/radiant-lock-mist](app/pages/ecommerce/edit-product/radiant-lock-mist.vue)
- [ ] [/ecommerce/edit-product/timeless-renewal-cream](app/pages/ecommerce/edit-product/timeless-renewal-cream.vue)
- [ ] [/ecommerce/edit-product/velvet-cleanse-balm](app/pages/ecommerce/edit-product/velvet-cleanse-balm.vue)
- [ ] [/ecommerce/edit-shipping](app/pages/ecommerce/edit-shipping.vue)
- [ ] [/ecommerce/order-detail-1](app/pages/ecommerce/order-detail-1.vue)
- [ ] [/ecommerce/order-detail-2](app/pages/ecommerce/order-detail-2.vue)
- [ ] [/ecommerce/order-list-1](app/pages/ecommerce/order-list-1.vue)
- [ ] [/ecommerce/order-list-2](app/pages/ecommerce/order-list-2.vue)
- [ ] [/ecommerce/order-list-3](app/pages/ecommerce/order-list-3.vue)
- [ ] [/ecommerce/product-detail-1](app/pages/ecommerce/product-detail-1.vue)
- [ ] [/ecommerce/product-detail-2](app/pages/ecommerce/product-detail-2.vue)
- [ ] [/ecommerce/product-detail/barrier-repair-drops](app/pages/ecommerce/product-detail/barrier-repair-drops.vue)
- [ ] [/ecommerce/product-detail/botanical-body-polish](app/pages/ecommerce/product-detail/botanical-body-polish.vue)
- [ ] [/ecommerce/product-detail/cloud-silk-toner](app/pages/ecommerce/product-detail/cloud-silk-toner.vue)
- [ ] [/ecommerce/product-detail/dew-reset-essence](app/pages/ecommerce/product-detail/dew-reset-essence.vue)
- [ ] [/ecommerce/product-detail/hydrabloom-night-cream](app/pages/ecommerce/product-detail/hydrabloom-night-cream.vue)
- [ ] [/ecommerce/product-detail/micro-peel-serum](app/pages/ecommerce/product-detail/micro-peel-serum.vue)
- [ ] [/ecommerce/product-detail/overnight-recovery-mask](app/pages/ecommerce/product-detail/overnight-recovery-mask.vue)
- [ ] [/ecommerce/product-detail/pureessence-soap-trio](app/pages/ecommerce/product-detail/pureessence-soap-trio.vue)
- [ ] [/ecommerce/product-detail/radiance-ritual-set](app/pages/ecommerce/product-detail/radiance-ritual-set.vue)
- [ ] [/ecommerce/product-detail/radiant-lock-mist](app/pages/ecommerce/product-detail/radiant-lock-mist.vue)
- [ ] [/ecommerce/product-detail/timeless-renewal-cream](app/pages/ecommerce/product-detail/timeless-renewal-cream.vue)
- [ ] [/ecommerce/product-detail/velvet-cleanse-balm](app/pages/ecommerce/product-detail/velvet-cleanse-balm.vue)
- [ ] [/ecommerce/product-list-1](app/pages/ecommerce/product-list-1.vue)
- [ ] [/ecommerce/product-list-2](app/pages/ecommerce/product-list-2.vue)
- [ ] [/ecommerce/product-list-3](app/pages/ecommerce/product-list-3.vue)
- [ ] [/ecommerce/product-list-4](app/pages/ecommerce/product-list-4.vue)
- [ ] [/ecommerce/shipment-detail-1](app/pages/ecommerce/shipment-detail-1.vue)
- [ ] [/ecommerce/shipment-list-1](app/pages/ecommerce/shipment-list-1.vue)
- [ ] [/error](app/pages/error.vue)
- [ ] [/forgot-password](app/pages/forgot-password.vue)
- [ ] [/login](app/pages/login.vue)
- [ ] [/original/dashboard-10](app/pages/original/dashboard-10.vue)
- [ ] [/original/dashboard-11](app/pages/original/dashboard-11.vue)
- [ ] [/original/dashboard-12](app/pages/original/dashboard-12.vue)
- [ ] [/original/settings](app/pages/original/settings/index.vue)
- [ ] [/original/settings/billing](app/pages/original/settings/billing.vue)
- [ ] [/original/settings/connected-apps](app/pages/original/settings/connected-apps.vue)
- [ ] [/original/settings/notifications](app/pages/original/settings/notifications.vue)
- [ ] [/original/settings/plans](app/pages/original/settings/plans.vue)
- [ ] [/original/settings/profile](app/pages/original/settings/profile.vue)
- [ ] [/original/tasks](app/pages/original/tasks/index.vue)
- [ ] [/original/tasks/TASK-1138](app/pages/original/tasks/TASK-1138.vue)
- [ ] [/original/tasks/TASK-1280](app/pages/original/tasks/TASK-1280.vue)
- [ ] [/original/tasks/TASK-5160](app/pages/original/tasks/TASK-5160.vue)
- [ ] [/original/tasks/TASK-5562](app/pages/original/tasks/TASK-5562.vue)
- [ ] [/original/tasks/TASK-7184](app/pages/original/tasks/TASK-7184.vue)
- [ ] [/original/tasks/TASK-7262](app/pages/original/tasks/TASK-7262.vue)
- [ ] [/original/tasks/TASK-7839](app/pages/original/tasks/TASK-7839.vue)
- [ ] [/original/tasks/TASK-7878](app/pages/original/tasks/TASK-7878.vue)
- [ ] [/original/tasks/TASK-8686](app/pages/original/tasks/TASK-8686.vue)
- [ ] [/original/tasks/TASK-8782](app/pages/original/tasks/TASK-8782.vue)
- [ ] [/original/users](app/pages/original/users.vue)
- [ ] [/payment-processor/create-invoice-2](app/pages/payment-processor/create-invoice-2.vue)
- [ ] [/payment-processor/create-invoice-3](app/pages/payment-processor/create-invoice-3.vue)
- [ ] [/payment-processor/create-invoice](app/pages/payment-processor/create-invoice.vue)
- [ ] [/payment-processor/create-subscription](app/pages/payment-processor/create-subscription.vue)
- [x] [/payment-processor/customer-detail-2](app/pages/payment-processor/customer-detail-2.vue)
- [x] [/payment-processor/customer-detail-3](app/pages/payment-processor/customer-detail-3.vue)
- [x] [/payment-processor/customer-detail](app/pages/payment-processor/customer-detail.vue)
- [x] [/payment-processor/customers-list-2](app/pages/payment-processor/customers-list-2.vue)
- [x] [/payment-processor/customers](app/pages/payment-processor/customers.vue)
- [ ] [/payment-processor/dashboard-1](app/pages/payment-processor/dashboard-1.vue)
- [ ] [/payment-processor/dashboard-2](app/pages/payment-processor/dashboard-2.vue)
- [ ] [/payment-processor/dashboard-3](app/pages/payment-processor/dashboard-3.vue)
- [ ] [/payment-processor/dashboard-4](app/pages/payment-processor/dashboard-4.vue)
- [ ] [/payment-processor/dashboard-5](app/pages/payment-processor/dashboard-5.vue)
- [ ] [/payment-processor/dashboard-6](app/pages/payment-processor/dashboard-6.vue)
- [ ] [/payment-processor/delivery-simulator](app/pages/payment-processor/delivery-simulator.vue)
- [ ] [/payment-processor/enterprise-client-detail](app/pages/payment-processor/enterprise-client-detail.vue)
- [ ] [/payment-processor/invoice-detail-2](app/pages/payment-processor/invoice-detail-2.vue)
- [ ] [/payment-processor/invoice-detail-3](app/pages/payment-processor/invoice-detail-3.vue)
- [ ] [/payment-processor/invoice-detail](app/pages/payment-processor/invoice-detail.vue)
- [ ] [/payment-processor/invoice-list-2](app/pages/payment-processor/invoice-list-2.vue)
- [ ] [/payment-processor/invoice-list-3](app/pages/payment-processor/invoice-list-3.vue)
- [ ] [/payment-processor/invoice-list-4](app/pages/payment-processor/invoice-list-4.vue)
- [ ] [/payment-processor/invoice-list-5](app/pages/payment-processor/invoice-list-5.vue)
- [ ] [/payment-processor/invoice-list](app/pages/payment-processor/invoice-list.vue)
- [ ] [/payment-processor/payment-workflow](app/pages/payment-processor/payment-workflow.vue)
- [ ] [/payment-processor/subscription-detail](app/pages/payment-processor/subscription-detail.vue)
- [ ] [/payment-processor/subscriptions-2](app/pages/payment-processor/subscriptions-2.vue)
- [ ] [/payment-processor/subscriptions-3](app/pages/payment-processor/subscriptions-3.vue)
- [ ] [/payment-processor/subscriptions-4](app/pages/payment-processor/subscriptions-4.vue)
- [ ] [/payment-processor/subscriptions](app/pages/payment-processor/subscriptions.vue)
- [ ] [/payment-processor/transaction-detail-2](app/pages/payment-processor/transaction-detail-2.vue)
- [ ] [/payment-processor/transaction-detail](app/pages/payment-processor/transaction-detail.vue)
- [ ] [/payment-processor/transactions-list-2](app/pages/payment-processor/transactions-list-2.vue)
- [ ] [/payment-processor/transactions](app/pages/payment-processor/transactions.vue)
- [ ] [/payment-processor/webhooks](app/pages/payment-processor/webhooks.vue)
- [ ] [/privacy](app/pages/privacy.vue)
- [x] [/project-management/dashboard-1](app/pages/project-management/dashboard-1.vue)
- [x] [/project-management/dashboard-2](app/pages/project-management/dashboard-2.vue)
- [x] [/project-management/dashboard-3](app/pages/project-management/dashboard-3.vue)
- [ ] [/project-management/dashboard-4](app/pages/project-management/dashboard-4.vue)
- [ ] [/project-management/inbox-1](app/pages/project-management/inbox-1.vue)
- [ ] [/project-management/inbox-2](app/pages/project-management/inbox-2.vue)
- [ ] [/project-management/inbox-3](app/pages/project-management/inbox-3.vue)
- [ ] [/project-management/inbox-4](app/pages/project-management/inbox-4.vue)
- [ ] [/project-management/inbox-email-1](app/pages/project-management/inbox-email-1.vue)
- [ ] [/project-management/issue-calendar-1](app/pages/project-management/issue-calendar-1.vue)
- [ ] [/project-management/issue-calendar-2](app/pages/project-management/issue-calendar-2.vue)
- [ ] [/project-management/issue-detail-1](app/pages/project-management/issue-detail-1.vue)
- [ ] [/project-management/issue-detail-2](app/pages/project-management/issue-detail-2.vue)
- [ ] [/project-management/issue-gantt-1](app/pages/project-management/issue-gantt-1.vue)
- [ ] [/project-management/issue-kanban-1](app/pages/project-management/issue-kanban-1.vue)
- [ ] [/project-management/issue-kanban-2](app/pages/project-management/issue-kanban-2.vue)
- [ ] [/project-management/issue-kanban-3](app/pages/project-management/issue-kanban-3.vue)
- [ ] [/project-management/issue-list-1](app/pages/project-management/issue-list-1.vue)
- [ ] [/project-management/issue-list-2](app/pages/project-management/issue-list-2.vue)
- [ ] [/project-management/issue-spreadsheet-1](app/pages/project-management/issue-spreadsheet-1.vue)
- [ ] [/project-management/member-list-1](app/pages/project-management/member-list-1.vue)
- [ ] [/project-management/member-list-2](app/pages/project-management/member-list-2.vue)
- [ ] [/project-management/member-list-3](app/pages/project-management/member-list-3.vue)
- [ ] [/project-management/project-detail-1](app/pages/project-management/project-detail-1.vue)
- [ ] [/project-management/project-detail-2](app/pages/project-management/project-detail-2.vue)
- [ ] [/project-management/project-list-1](app/pages/project-management/project-list-1.vue)
- [ ] [/project-management/project-list-2](app/pages/project-management/project-list-2.vue)
- [ ] [/project-management/project-list-3](app/pages/project-management/project-list-3.vue)
- [ ] [/project-management/project-list-4](app/pages/project-management/project-list-4.vue)
- [ ] [/project-management/team-list-1](app/pages/project-management/team-list-1.vue)
- [ ] [/project-management/team-list-2](app/pages/project-management/team-list-2.vue)
- [ ] [/project-management/team-list-3](app/pages/project-management/team-list-3.vue)
- [ ] [/register](app/pages/register.vue)
- [ ] [/terms](app/pages/terms.vue)
- [ ] [/todo](app/pages/todo/index.vue)
- [ ] [/todo/activity](app/pages/todo/activity.vue)
- [ ] [/todo/deleted](app/pages/todo/deleted.vue)
- [ ] [/todo/important](app/pages/todo/important.vue)
- [ ] [/todo/notifications](app/pages/todo/notifications.vue)
- [ ] [/todo/projects/fitness](app/pages/todo/projects/fitness.vue)
- [ ] [/todo/projects/learning](app/pages/todo/projects/learning.vue)
- [ ] [/todo/projects/personal](app/pages/todo/projects/personal.vue)
- [ ] [/todo/projects/shopping](app/pages/todo/projects/shopping.vue)
- [ ] [/todo/projects/work](app/pages/todo/projects/work.vue)
- [ ] [/todo/settings](app/pages/todo/settings.vue)
- [ ] [/todo/tasks/new](app/pages/todo/tasks/new.vue)
- [ ] [/todo/today](app/pages/todo/today.vue)
- [ ] [/todo/upcoming](app/pages/todo/upcoming.vue)

### Rutas auxiliares (2 archivos adicionales)

- [ ] [`/` — redirección de entrada](app/pages/index.vue): revisar navegación y ausencia de herramientas residuales; no tiene bloques propios para copiar.
- [ ] [`/developers/webhooks/:id` — resolución de detalle](app/pages/developers/webhooks/%5Bid%5D.vue): revisar rutas válidas/no existentes y determinar qué contenido merece un bloque exportable, sin duplicar los detalles estáticos listados arriba.

## Temas Nuxt UI

Los colores se configuran en `app/app.config.ts` mediante `ui.colors`: `primary`, `secondary`, `neutral`, `success`, `info`, `warning` y `error`.

Las páginas utilizan componentes Nuxt UI, utilidades semánticas (`bg-default`, `text-muted`, `text-highlighted`, `border-default`, etc.) y variables públicas `--ui-*`. No se fijan `--ui-primary`, `--ui-text` ni los colores de los modos claro/oscuro. Los gráficos y los lienzos usan estos mismos tokens.

Los cambios de paleta y el modo claro/oscuro se aplican sin modificar las páginas. Consulta [docs/THEMING.md](docs/THEMING.md).

Los contenidos y acciones de negocio utilizan datos de demostración. **No hay integraciones reales de autenticación, pagos o IA en el alcance de esta tarea**; las funciones locales son puntos de extensión para quien reutilice las páginas, no una instrucción para conectar APIs durante esta revisión.

Los archivos de `app/data/reference/` y los scripts de migración se conservan únicamente como entradas históricas de la conversión. La aplicación no los importa ni los utiliza para renderizar las páginas.
