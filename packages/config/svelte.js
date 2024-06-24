import { resolve } from 'path'
import { fileURLToPath } from 'url'
import preprocess from 'svelte-preprocess'

const globalStylesPath = `${resolve(fileURLToPath(import.meta.url), '../../../packages/styles')}`

export const globalSCSSImports = (projectVariables) => {
    const files = [
        `${globalStylesPath}/_variables.scss`,
        projectVariables,
        `${globalStylesPath}/imports.scss`,
    ]
    return files.map(file => `@import "${file}";`).join('\n')
}

/** @type {import('@sveltejs/kit').Config} */
export const createSvelteConfig = ({ scssImports, ...settings }) => {
    return {
        // Preprocessors docs: https://github.com/sveltejs/svelte-preprocess
        preprocess: preprocess({
            scss: {
                prependData: scssImports,
            }
        }),

        ...settings,
    }
}
