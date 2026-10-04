import { createServer } from 'node:http'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

// Development-only importer: downloads the inspected reference as portable block data.
const directory = resolve('app/data/reference')
await mkdir(directory, { recursive: true })
createServer(async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (request.method === 'OPTIONS') { response.writeHead(204).end(); return }
  if (request.method !== 'POST') { response.writeHead(405).end(); return }
  try {
    let body = ''
    for await (const chunk of request) body += chunk
    const payload = JSON.parse(body)
    const name = payload.kind === 'navigation' ? 'navigation' : payload.path.replace(/^\//, '').replace(/[^a-zA-Z0-9-]/g, '_')
    await writeFile(resolve(directory, `${name}.json`), JSON.stringify(payload, null, 2))
    response.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify({ saved: name }))
  } catch (error) { response.writeHead(500).end(String(error)) }
}).listen(4319, '0.0.0.0', () => console.log('Reference importer listening on :4319'))
