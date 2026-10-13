# Bloques copiables: piloto y ampliación por página

El piloto inicial está disponible en estas tres páginas:

- `/ecommerce/dashboard-1`: seis tarjetas independientes.
- `/developers/webhooks`: tabla con búsqueda, ordenación y copia de identificadores.
- `/ai-chat/composer-1`: compositor con conversación de demostración.

Las páginas adicionales se habilitan individualmente; consulta el [ToDo del README](../README.md#todo-por-página-261-páginas-de-contenido) para conocer el estado de validación y publicación. `/401`, `/403`, `/404` y `/503` añaden pantallas de estado como componentes independientes; mantenimiento incluye un modal informativo, no una integración con un servicio real. `/ai-chat/agent-activity` añade once tarjetas de ejecuciones con detalle, expansión y exportación local de CSV.

Pasa el cursor sobre un bloque o enfócalo con Tab. Aparecerán el contorno y las acciones **Ver código**, **Copiar** y **Más opciones de copia**. El botón **N bloques copiables** permite elegir un bloque también desde el teclado o una pantalla táctil. Escape oculta las herramientas.

**Copiar** coloca un componente `.vue` completo en el portapapeles: su plantilla original, estado, funciones y estilos necesarios. **Copiar solo plantilla** excluye deliberadamente el script y CSS. El visor permite seleccionar el texto manualmente si el navegador no da acceso al portapapeles (por ejemplo, una URL HTTP que no sea localhost).

## Usar el resultado

1. Crea un archivo `.vue` en `app/components/` de un proyecto Nuxt 4 con Nuxt UI 4 configurado.
2. Pega el componente y úsalo como cualquier otro componente Vue.
3. El proyecto debe tener los iconos Lucide disponibles y `UApp` en su raíz para los modales y notificaciones.

Los ocho bloques del piloto no necesitan recursos de `public/reference/`, el layout del catálogo ni sus herramientas de copia. Los datos e interacciones son ejemplos locales, no integraciones de negocio. Los gráficos conservan la geometría SVG de la demostración.

## Una única fuente de verdad

Este piloto conserva los componentes Nuxt UI directamente en las páginas existentes, sin introducir un renderizador de bloques. `data-copy-block` identifica el elemento exportable. Las regiones `@copy` delimitan explícitamente su script y CSS; `data-copy-fragment` identifica fragmentos auxiliares, como un modal utilizado por el bloque.

Cada página habilitada tiene un archivo JSON en `app/data/copy-blocks/` con `path`, `file`, `key` y `blocks`. Cada bloque declara `id`, `title` y, cuando hacen falta, `script`, `style` y `fragments`. El JSON contiene solo metadatos; el contenido permanece en el archivo Vue.

`script` puede ser una lista ordenada de regiones para combinar los datos y funciones compartidos sin duplicarlos manualmente en las páginas. Cada SFC exportado recibe sus dependencias y es independiente del catálogo. Las pruebas de `/ai-chat/agent-activity` incluyen filtros, los once componentes pegados, expansión y descarga del CSV de una ejecución.

`/developers/api-keys` exporta el resumen de versión y el gestor de claves completo. Sus valores `demo_*_not_a_real_key` no autentican peticiones; creación y rotación son operaciones locales, sin persistencia. El gestor incluye cuenta, guía, confirmación de rotación, ocultar/revelar y copia manual ante rechazo del portapapeles. Las pruebas comprueban estos controles tanto en el catálogo como en el SFC pegado.

`/developers/events-&-logs` exporta el explorador de logs y dos resúmenes independientes de visitantes/fuentes. Los períodos relativos terminan en una hora fija del ejemplo, no en el reloj del usuario. La importación reemplaza únicamente datos locales: exige un array de 1–100 registros, UTC válido, niveles y campos de texto conocidos; limita el JSON a 100 KB. No se sube información ni se conecta un flujo en vivo. Los resúmenes son datos de ejemplo independientes de los filtros de logs.

`/developers/overview` exporta solicitudes, tiempos de respuesta, visitantes y actividades como cuatro SFC independientes. Las tres métricas añaden el fragmento de filtros de entorno/período para funcionar fuera del catálogo; esos selectores aparecen después de la tarjeta al pegarla. Los totales, medias, tendencias y puntos SVG se calculan desde las mismas series locales. El selector de dispositivo cambia la gráfica de visitantes, no abre un formulario genérico.

`/project-management/dashboard-1` exporta seis bloques: resumen personal, estados de incidencias, historial de horas, temporizador, incidencias y perfil/agenda. Tabla y tarjetas móviles usan los mismos registros. La edición actualiza solo estado local; los resúmenes del catálogo se recalculan, mientras que cada SFC pegado mantiene su propia instancia de los datos. El temporizador usa tiempo monotónico, puede pausarse/reanudarse/reiniciarse y limpia su intervalo al desmontarse. El historial es un ejemplo fijo independiente del temporizador, no un registro de horas real. La agenda muestra categorías distintas, con horas UTC explícitas y sin conexiones a calendarios o videollamadas.

`/project-management/dashboard-2` exporta nueve bloques de planificación: acciones rápidas, totales, mapa temporal, proyectos, hitos, notas, actividad, miembros y estados. Crear un proyecto/incidencia/hito/sprint modifica colecciones locales y recalcula los indicadores del catálogo. El mapa utiliza rangos fijos de abril–junio 2026 y recorta barras a los límites seleccionados, con desplazamiento interno en móvil. El gráfico de hitos es un historial fijo de 2025, explícitamente independiente de los hitos planificados. La gestión de miembros valida emails y duplicados, pero no envía invitaciones. Los modales necesarios se incluyen en cada componente exportado, incluido el fragmento compartido de creación.

`/ecommerce/add-customer` exporta el editor completo, no tarjetas de campos aisladas: así conserva la validación y las reglas compartidas entre cuenta, contactos, direcciones, tarjetas y preferencias. Permite añadir/quitar registros, mantener una única tarjeta predeterminada y gestionar segmentos sin duplicados. El borrador y la vista previa se guardan únicamente en memoria; no se usa `localStorage` para datos de clientes. Las tarjetas contienen metadatos de demostración (últimos cuatro dígitos, marca y expiración), nunca PAN completo, CVC ni credenciales de pago. No se crean clientes, pagos ni suscripciones de marketing externos.

`scripts/block-catalog.mjs` extrae el marcado desde el AST Vue, elimina los atributos de herramientas y agrega solo las dependencias registradas. `modules/block-catalog.mjs` genera fuentes por página durante `dev`, `build` y `generate`, y las actualiza al editar las páginas. No hay una segunda copia manual del código ni un endpoint que exponga archivos arbitrarios. Reinicia `pnpm dev` después de añadir o modificar un registro JSON para incorporar sus bloques y chunks.

`app/components/BlockCopyTools.vue` muestra herramientas flotantes sin modificar el layout y carga el código de esa página cuando se selecciona un bloque. No se incluye en las exportaciones. Los componentes copiados no requieren los módulos ni archivos del catálogo.

## Validar

```sh
pnpm check:copy-blocks
pnpm check:copy-blocks --page=/ecommerce/dashboard-1
pnpm check:pages
pnpm typecheck
pnpm build
node scripts/verify-copy-blocks.mjs --http
pnpm preview:copy-blocks --typecheck
pnpm preview:copy-blocks
```

La comprobación compila los ocho SFC exportados y sus plantillas, comprueba referencias a estado y evita dependencias del catálogo. `preview:copy-blocks` crea una aplicación temporal independiente, pega los ocho componentes exportados y la sirve en el puerto 3031. Reutiliza las dependencias instaladas, pero no el módulo, layout, tema, CSS ni las herramientas del catálogo. `--typecheck` comprueba los tipos de esa aplicación en vez de iniciar un servidor.

Los scripts históricos de migración **no deben ejecutarse sobre páginas habilitadas para copia**: podrían borrar las marcas y los cambios revisados. `materialize-pages.mjs` se detiene antes de sobrescribirlas. El [ToDo del README](../README.md#todo-por-página-261-páginas-de-contenido) define la cola, criterios de validación y los commits/push por página. Las rutas no marcadas como terminadas todavía no han pasado el proceso completo.

Con el catálogo de producción en el puerto 3030 y la aplicación de pegado en 3031, `pnpm check:copy-browser` comprueba la copia real de los ocho bloques, el visor, la copia de plantilla, la alternativa manual, el selector móvil y el renderizado independiente. En Windows detecta Chrome o Edge; en otros entornos indica su ejecutable mediante `CHROME_PATH`. `BLOCKS_BASE_URL` y `BLOCKS_PASTE_URL` permiten cambiar las URLs. Las capturas se guardan en una carpeta temporal; el contenido anterior del portapapeles se restaura al terminar.

Usa `pnpm check:copy-browser --page=/401` para comprobar solo la página actual o `--all` para todas las páginas registradas. Las pruebas también verifican el cambio de tema y el desbordamiento móvil; no sustituyen la inspección visual de las capturas y de los controles de cada página.
