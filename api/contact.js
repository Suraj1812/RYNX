import { createContactSubmission, parseJsonBody } from '../server/contact-handler.js'

function writeJson(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method !== 'POST') {
    writeJson(res, 405, { success: false, message: 'Method not allowed.' })
    return
  }

  try {
    const payload = await parseJsonBody(req)
    const result = await createContactSubmission(payload, process.env)

    if (result.error) {
      console.error('Resend delivery error', result.error)
    }

    writeJson(res, result.status, result.body)
  } catch (error) {
    console.error('Contact handler failed', error)
    writeJson(res, 500, {
      success: false,
      message: 'Something went wrong while sending the enquiry.',
    })
  }
}

