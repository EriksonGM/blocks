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

`/ecommerce/edit-customer/cus-1742` exporta el editor precargado del cliente ficticio. El ID es de solo lectura; guardar actualiza el snapshot local de referencia y reset restaura ese último guardado, no una copia fija ni un backend. Borrador y guardado son estados separados y volátiles. Los campos relacionados se validan conjuntamente y los IDs de nuevas filas no reutilizan los de las tarjetas existentes. Mantiene como máximo una tarjeta predeterminada y nunca opera sobre métodos de pago reales.

`/ecommerce/customer-list-1` exporta un resumen calculado y un directorio autónomo. Comparten los datos en la página; cada SFC pegado obtiene su propia colección. Los indicadores abarcan toda la colección, no los resultados filtrados. Las fechas usan la referencia fija del 22 de marzo de 2026; el filtro de última compra excluye clientes sin pedidos y el valor usa gasto acumulado. Tabla y tarjetas móviles tienen los mismos filtros/orden y columnas opcionales. Los nombres abren el editor del registro correspondiente en vez de enlazar todos a Theo. Crear, editar y eliminar solo cambian memoria; se validan nombres/emails y duplicados, y eliminar requiere confirmación.

`/ecommerce/customer-detail-1` exporta perfil/borradores, historial con tres pestañas reales y detalles editables. Los tres comparten perfil/actividad en la página, pero cada componente pegado conserva su instancia independiente. Guardar borradores y editar perfil/dirección/segmentos registra actividad local, sin afirmar envío ni actualización de servicios externos. Las compras son tres muestras, no el historial completo de 96 pedidos; los totales se calculan por cantidad × precio. El bloque de dirección muestra un resumen de ubicación, no un mapa cargando ni una geocodificación real. La navegación a otros ejemplos queda fuera de los bloques copiados y no comparte datos guardados entre rutas.

`/payment-processor/customers` exporta un directorio de solo lectura con diez registros ficticios, páginas reales de 5/10 filas y detalle del cliente seleccionado. Las fechas contienen año y zona UTC explícitos; el rango personalizado incluye ambos días y rechaza fechas vacías/invertidas. Filtrar, ordenar o cambiar tamaño vuelve a la primera página. Tabla y tarjetas móviles usan la misma página y orden. Los estados Active/Review/Blocked son etiquetas de demostración, no decisiones de riesgo; el modal muestra datos, nunca un formulario que afirme actualizar cuentas o efectuar cobros.

`/payment-processor/customers-list-2` exporta un resumen calculado y un directorio con tres vistas reales: clientes, métodos de pago y riesgo/KYC. Los cuatro indicadores abarcan los diez registros completos; el gasto es acumulado, no volumen procesado mensual. Las tres vistas comparten búsqueda, estado, método, fechas UTC inclusivas y orden numérico/cronológico, también en tarjetas móviles. El CSV incluye encabezados y todos los resultados filtrados en el orden mostrado, con columnas de la pestaña activa y cantidades USD sin formato. Los métodos son metadatos ficticios, sin números de cuenta, PAN completo ni CVC; riesgo/KYC no ejecutan verificaciones. Cada componente pegado tiene su propia colección de ejemplo, sin recursos internos ni persistencia. La barra de copia evita el selector y este se recoloca para no tapar controles de la página; su posición queda fija mientras su menú está abierto.

`scripts/block-catalog.mjs` extrae el marcado desde el AST Vue, elimina los atributos de herramientas y agrega solo las dependencias registradas. `modules/block-catalog.mjs` genera fuentes por página durante `dev`, `build` y `generate`, y las actualiza al editar las páginas. No hay una segunda copia manual del código ni un endpoint que exponga archivos arbitrarios. Reinicia `pnpm dev` después de añadir o modificar un registro JSON para incorporar sus bloques y chunks.

`/payment-processor/customer-detail` exporta tres bloques de facturación. Editar plan cambia nombre/ciclo/miembros y calcula el precio local, sin alterar las facturas históricas ni cobrar. Las tarjetas solo contienen marca, cuatro dígitos y mes; se validan duplicados y expiración contra diciembre de 2026. Guardar mantiene una predeterminada; quitarla requiere confirmación y selecciona la primera restante, sin permitir vaciar la colección. Las facturas filtran exclusivamente el historial, no las tarjetas; el total pagado excluye el intento rechazado y los detalles desglosan base y uso. Cada SFC mantiene su propio estado, IDs de formularios/regiones generados con `useId` y componentes Nuxt UI; la tabla semántica de metadatos no requiere un motor de tabla ni recursos externos.

`app/components/BlockCopyTools.vue` muestra herramientas flotantes sin modificar el layout y carga el código de esa página cuando se selecciona un bloque. No se incluye en las exportaciones. Los componentes copiados no requieren los módulos ni archivos del catálogo.

`/project-management/dashboard-3` exporta siete bloques independientes. El portfolio calcula presupuesto/gasto/porcentajes desde cuatro proyectos de muestra, conserva el estado de selección y ofrece búsqueda por nombre/ID/manager. Sprint, presupuesto y throughput tienen SVG responsive sin dependencias de gráficas, series que cambian con los selectores y tablas de datos mediante `details`; las herramientas compartidas evitan también sus controles `summary`. Sprint usa puntos acumulados (32/47 o 40/44), throughput usa incidencias semanales (100/118 en cuatro semanas o 180/208 en ocho); no son la misma métrica. El presupuesto distingue actual de forecast y mayo es un corte parcial al día 11, no un cierre futuro. Hitos permiten cambiar únicamente el estado del registro elegido; actividad mantiene estados leídos y un filtro de notificaciones; equipo valida nombre/email/duplicados y crea una invitación local sin enviarla. Los bloques editables no modifican los snapshots independientes de otros bloques, ni usan almacenamiento persistente o imágenes del catálogo. Actualizar el resumen recalcula los datos locales, sin fingir una consulta de red ni un nuevo timestamp.

`/payment-processor/customer-detail-3` exporta un único workspace porque el perfil, resumen y colecciones comparten el ciclo de eliminación/restauración. Los totales ($20,820 pagados, $2,880 base mensual y $1,840 pendientes) se calculan de los registros, excluyendo intentos rechazados. Editar nombre/email no altera ID ni historia. Retirar el ejemplo exige escribir su ID y vacía todas las colecciones; restaurar clona los datos originales y no recupera cambios anteriores. Solo hay operaciones en memoria. El selector/barra compartido considera el recorte de scrollers y dos píxeles de separación para aprovechar huecos con medidas fraccionales en producción sin cubrir controles.

`/payment-processor/customer-detail-2` exporta perfil/resumen y un ledger de tres suscripciones. El saldo pendiente suma Open + Overdue ($40,800), no facturas pagadas; la cuota mensual base suma $3,070 y excluye uso. Los importes históricos desglosan base + uso para no confundirlos con el próximo precio de renovación. Búsqueda, estado y orden se aplican a los tres grupos y a sus tarjetas móviles. Cada botón de descarga genera un CSV con encabezados y únicamente la factura elegida, nunca un formulario de acciones ni un documento legal. Perfil/contactos/ubicación/ID fiscal ficticio se editan solo en memoria; el ID del cliente y el historial no cambian. No se oculta el perfil en pantallas pequeñas ni se usan imágenes internas.

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
