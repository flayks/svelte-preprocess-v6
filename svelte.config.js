import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { createSvelteConfig, globalSCSSImports } from './utils/config/svelte.js'

export const scssImports = globalSCSSImports(resolve(fileURLToPath(dirname(import.meta.url)), 'src/styles/_variables.scss'))

export default createSvelteConfig({
    scssImports,
})
