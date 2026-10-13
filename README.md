# Blocks Admin — páginas Nuxt UI

## Bloques copiables y seguimiento

En las páginas marcadas en el ToDo, pasa el cursor sobre un bloque para **copiar su componente Vue**, copiar solo su plantilla o ver el código. También hay un selector de bloques accesible desde teclado y móvil. El piloto comprende `/ecommerce/dashboard-1`, `/developers/webhooks` y `/ai-chat/composer-1`; también están habilitadas `/401`, `/403`, `/404` y `/503`. Consulta [docs/COPYABLE-BLOCKS.md](docs/COPYABLE-BLOCKS.md).

`pnpm check:copy-blocks` valida todos los bloques registrados. `--page=/401` limita la comprobación a una página.

La ampliación se realiza **una página a la vez sobre `main`**, según la instrucción actual del usuario. La rama `feat/copyable-blocks-pilot` ya se integró y publicó en `main` mediante `0bf9584`. El ToDo de este README es el registro de pendientes; no se marcará una página como terminada solo por añadir un botón de copia.

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
   **Prioridad actual:** avanzar primero con `/project-management/*`, según la instrucción más reciente del usuario. Después continuar con las demás rutas fuera de `/ai-chat/*` (incluidas las auxiliares); dejar `/ai-chat/*` para el final. El inventario conserva su orden alfabético, pero no determina la prioridad entre estas fases. Siguiente ruta pendiente: `/project-management/dashboard-3`.
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

Avance: **13 de 261 páginas de contenido guardadas; 248 pendientes**, además de las 2 rutas auxiliares. Gestión de proyectos: **2 de 32 páginas**. Las casillas reflejan páginas guardadas; la columna commit/push confirma su publicación. Actualiza esta tabla al terminar una página o encontrar un bloqueo; no dar a entender que la cola continúa ejecutándose en segundo plano cuando no hay una ejecución activa.

### ToDo por página (261 páginas de contenido)

Cada casilla exige las dos tareas solicitadas: **validar la coherencia de toda la interfaz y corregir errores**, e **implementar y validar la copia de sus bloques**, además del flujo de commit/push anterior. El enlace abre el archivo fuente. Empezar por guardar las tres páginas del piloto y continuar en el orden de esta lista.

**Orden de ejecución actualizado:** primero `/project-management/*`, después las demás pendientes fuera de `/ai-chat/*`, y finalmente `/ai-chat/*`. No deshacer las páginas de IA ya terminadas. Al retomar configuración, inspeccionar el stash indicado arriba y recuperar sus cambios con cuidado: incluye el SFC, su registro JSON y pruebas compartidas que pueden requerir reconciliación con las nuevas pruebas. La casilla sigue pendiente.

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
- [ ] [/ecommerce/add-customer](app/pages/ecommerce/add-customer.vue)
- [ ] [/ecommerce/add-order](app/pages/ecommerce/add-order.vue)
- [ ] [/ecommerce/add-product-2](app/pages/ecommerce/add-product-2.vue)
- [ ] [/ecommerce/add-product](app/pages/ecommerce/add-product.vue)
- [ ] [/ecommerce/add-shipping](app/pages/ecommerce/add-shipping.vue)
- [ ] [/ecommerce/customer-detail-1](app/pages/ecommerce/customer-detail-1.vue)
- [ ] [/ecommerce/customer-list-1](app/pages/ecommerce/customer-list-1.vue)
- [x] [/ecommerce/dashboard-1](app/pages/ecommerce/dashboard-1.vue)
- [ ] [/ecommerce/dashboard-2](app/pages/ecommerce/dashboard-2.vue)
- [ ] [/ecommerce/dashboard-3](app/pages/ecommerce/dashboard-3.vue)
- [ ] [/ecommerce/dashboard-4](app/pages/ecommerce/dashboard-4.vue)
- [ ] [/ecommerce/dashboard-5](app/pages/ecommerce/dashboard-5.vue)
- [ ] [/ecommerce/dashboard-6](app/pages/ecommerce/dashboard-6.vue)
- [ ] [/ecommerce/dashboard-7](app/pages/ecommerce/dashboard-7.vue)
- [ ] [/ecommerce/dashboard-8](app/pages/ecommerce/dashboard-8.vue)
- [ ] [/ecommerce/dashboard-9](app/pages/ecommerce/dashboard-9.vue)
- [ ] [/ecommerce/edit-customer/cus-1742](app/pages/ecommerce/edit-customer/cus-1742.vue)
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
- [ ] [/payment-processor/customer-detail-2](app/pages/payment-processor/customer-detail-2.vue)
- [ ] [/payment-processor/customer-detail-3](app/pages/payment-processor/customer-detail-3.vue)
- [ ] [/payment-processor/customer-detail](app/pages/payment-processor/customer-detail.vue)
- [ ] [/payment-processor/customers-list-2](app/pages/payment-processor/customers-list-2.vue)
- [ ] [/payment-processor/customers](app/pages/payment-processor/customers.vue)
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
- [ ] [/project-management/dashboard-3](app/pages/project-management/dashboard-3.vue)
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

Los contenidos y acciones de negocio utilizan datos de demostración. Las APIs de autenticación, pagos e IA se conectan en las funciones locales de cada página.

Los archivos de `app/data/reference/` y los scripts de migración se conservan únicamente como entradas históricas de la conversión. La aplicación no los importa ni los utiliza para renderizar las páginas.
