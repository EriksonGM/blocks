import { mkdtemp, mkdir, writeFile, symlink } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { spawn } from 'node:child_process'
import { buildPageBlocks, catalogPages } from './block-catalog.mjs'

// A separate Nuxt UI app: paste the actual exports, not catalogue components.
const root = resolve('.')
// Nuxt's ignore/component scanner needs relative paths on Windows. Keep the
// fixture on the dependency drive; the repository's ignored cache is isolated.
const tempRoot = process.platform === 'win32'
  ? resolve(root, 'node_modules/.cache/copy-blocks-preview')
  : resolve(process.env.TMPDIR || '/tmp', 'opencode')
await mkdir(tempRoot, { recursive: true })
const directory = await mkdtemp(resolve(tempRoot, 'blocks-paste-'))
await mkdir(resolve(directory, 'app/components'), { recursive: true })
await mkdir(resolve(directory, 'app/pages'), { recursive: true })
await mkdir(resolve(directory, 'app/assets/css'), { recursive: true })
await symlink(resolve(root, 'node_modules'), resolve(directory, 'node_modules'), process.platform === 'win32' ? 'junction' : 'dir')
const blocks = (await Promise.all(catalogPages.map(page => buildPageBlocks(page, root)))).flat()
for (const block of blocks) await writeFile(resolve(directory, 'app/components', block.filename), block.component)
await writeFile(resolve(directory, 'package.json'), JSON.stringify({ name: 'blocks-paste-test', private: true, type: 'module', dependencies: { nuxt: '^4.5.2', '@nuxt/ui': '^4.11.3', vue: '^3.5.43' } }, null, 2))
await writeFile(resolve(directory, 'tsconfig.json'), JSON.stringify({ files: [], references: ['app', 'server', 'shared', 'node'].map(name => ({ path: `./.nuxt-portable/tsconfig.${name}.json` })) }, null, 2))
await writeFile(resolve(directory, 'nuxt.config.ts'), `export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  buildDir: '.nuxt-portable',
  devtools: { enabled: false },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  icon: { serverBundle: { collections: ['lucide'] } },
})\n`)
await writeFile(resolve(directory, 'app/assets/css/main.css'), '@import "tailwindcss";\n@import "@nuxt/ui";\n@source "../../components";\n@source "../../pages";\n')
await writeFile(resolve(directory, 'app/app.vue'), '<template><UApp><NuxtPage /></UApp></template>\n')
await writeFile(resolve(directory, 'app/pages/index.vue'), `<template><main class="space-y-3 p-6"><h1 class="text-xl font-semibold">Paste test: standalone Nuxt UI</h1>${blocks.map(block => `<NuxtLink class="block text-primary underline" to="/${block.id}">${block.title}</NuxtLink>`).join('')}</main></template>\n`)
await writeFile(resolve(directory, 'app/pages/[id].vue'), `<script setup lang="ts">
import type { Component } from 'vue'
const route = useRoute()
const components = import.meta.glob<Component>('../components/*.vue', { eager: true, import: 'default' })
const preview = computed(() => components['../components/' + route.params.id + '.vue'])
if (!preview.value) throw createError({ statusCode: 404 })
</script>
<template><main class="p-6" data-paste-test><component :is="preview" /></main></template>\n`)
console.log(JSON.stringify({ directory, blocks: blocks.map(block => block.id), port: 3031 }, null, 2))

const require = createRequire(resolve(root, 'package.json'))
const cli = resolve(dirname(require.resolve('nuxt/package.json')), 'bin/nuxt.mjs')
const typecheck = process.argv.includes('--typecheck')
const child = spawn(process.execPath, [cli, typecheck ? 'typecheck' : 'dev', ...(typecheck ? [] : ['--port', '3031', '--host', '0.0.0.0'])], { cwd: directory, stdio: 'inherit', windowsHide: true })
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal))
child.on('exit', code => { process.exitCode = code ?? 1 })
child.on('error', error => { console.error(error); process.exitCode = 1 })
