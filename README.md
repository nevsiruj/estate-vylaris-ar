# Vylaris Estate — sitio publicado

Este repositorio contiene solo los archivos estáticos publicados para `estate.vylaris.ar`. El código fuente se mantiene en el repositorio privado `vylaris-nuxt`.

La página de origen es `pages/realstate/index.vue`; para publicar en la raíz del subdominio se genera como `pages/index.vue` en un checkout temporal, sin cambiar la portada principal de `vylaris.ar`. Luego `node scripts/extract-static.mjs <ruta al index.html generado>` extrae un HTML independiente de Nuxt. Solo se publica ese HTML y el favicon.
