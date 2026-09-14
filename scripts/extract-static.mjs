import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const input = process.argv[2]
if (!input) throw new Error('Uso: node scripts/extract-static.mjs <Nuxt .output/public/index.html>')

let html = readFileSync(resolve(input), 'utf8')
if (!html.includes('https://estate.vylaris.ar/') || !html.includes('Vylaris Estate')) {
  throw new Error('El HTML no corresponde a la landing Estate para la raíz del dominio')
}

// Esta landing es estática: quitar hidratación evita publicar chunks de otras rutas privadas.
html = html
  .replace(/<link rel="(?:modulepreload|preload|prefetch|stylesheet)"[^>]*>/g, '')
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
  .replace(/<meta property="og:image(?:\:type)?"[^>]*>/g, '')
  .replace(/<link rel="icon"[^>]*>/g, '<link rel="icon" type="image/svg+xml" href="/favicon.svg">')
  .replace('</head>', '<style>html,body{margin:0;padding:0}body{min-width:320px}</style><script defer src="/estate-analytics.js"></script></head>')

if (html.includes('/_nuxt/') || html.includes('i.ibb.co')) {
  throw new Error('Quedaron dependencias de Nuxt o imágenes externas en la landing')
}

writeFileSync(new URL('../index.html', import.meta.url), html)
