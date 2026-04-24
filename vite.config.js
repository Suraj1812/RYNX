import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'
import { createContactSubmission, parseJsonBody } from './server/contact-handler.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function contactApiDevPlugin() {
  return {
    name: 'contact-api-dev-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const requestPath = req.url?.split('?')[0]

        if (requestPath !== '/api/contact') {
          next()
          return
        }

        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')

        if (req.method === 'OPTIONS') {
          res.statusCode = 204
          res.end()
          return
        }

        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end(JSON.stringify({ success: false, message: 'Method not allowed.' }))
          return
        }

        try {
          const payload = await parseJsonBody(req)
          const result = await createContactSubmission(payload, process.env)

          if (result.error) {
            console.error('Resend delivery error', result.error)
          }

          res.statusCode = result.status
          res.end(JSON.stringify(result.body))
        } catch (error) {
          console.error('Contact middleware failed', error)
          res.statusCode = 500
          res.end(JSON.stringify({
            success: false,
            message: 'Something went wrong while sending the enquiry.',
          }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    contactApiDevPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
