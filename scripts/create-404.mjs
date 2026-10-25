import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const distDir = resolve(process.cwd(), 'dist')

// GitHub Pages no aplica fallback de SPA: al recargar /quienes-somos
// responde 404. Publicar el mismo index como 404.html permite que
// React Router resuelva la ruta en el navegador.
await copyFile(resolve(distDir, 'index.html'), resolve(distDir, '404.html'))

console.log('GitHub Pages: se creó dist/404.html como fallback de SPA.')
