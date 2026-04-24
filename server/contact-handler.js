const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function normalizeValue(value) {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : ''
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function formatMessageHtml(message) {
  return escapeHtml(message).replaceAll('\n', '<br />')
}

function validateContactPayload(payload) {
  const normalized = {
    name: normalizeValue(payload.name),
    company: normalizeValue(payload.company),
    email: normalizeValue(payload.email).toLowerCase(),
    service: normalizeValue(payload.service),
    timeline: normalizeValue(payload.timeline),
    budget: normalizeValue(payload.budget),
    message: typeof payload.message === 'string' ? payload.message.trim() : '',
    website: normalizeValue(payload.website),
  }

  if (normalized.website) {
    return { ok: false, status: 400, message: 'Spam detection triggered.' }
  }

  if (normalized.name.length < 2) {
    return { ok: false, status: 400, message: 'Please provide a valid name.' }
  }

  if (!EMAIL_REGEX.test(normalized.email)) {
    return { ok: false, status: 400, message: 'Please provide a valid email address.' }
  }

  if (!normalized.service) {
    return { ok: false, status: 400, message: 'Please select the service you need.' }
  }

  if (!normalized.timeline) {
    return { ok: false, status: 400, message: 'Please select a timeline.' }
  }

  if (!normalized.budget) {
    return { ok: false, status: 400, message: 'Please select a budget range.' }
  }

  if (normalized.message.length < 20) {
    return {
      ok: false,
      status: 400,
      message: 'Please add a little more context so we can understand the project.',
    }
  }

  return { ok: true, data: normalized }
}

function buildEmailPayload(data, env) {
  const from = env.CONTACT_FROM_EMAIL || 'RYNX <onboarding@resend.dev>'
  const to = env.CONTACT_TO_EMAIL
  const subject = `New RYNX enquiry from ${data.name}${data.company ? ` at ${data.company}` : ''}`

  return {
    from,
    to: [to],
    reply_to: data.email,
    subject,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #172230;">
        <h2 style="margin-bottom: 12px;">New RYNX project enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.company || 'Not provided')}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Service:</strong> ${escapeHtml(data.service)}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(data.timeline)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(data.budget)}</p>
        <p><strong>Message:</strong></p>
        <p>${formatMessageHtml(data.message)}</p>
      </div>
    `,
    text: [
      'New RYNX project enquiry',
      `Name: ${data.name}`,
      `Company: ${data.company || 'Not provided'}`,
      `Email: ${data.email}`,
      `Service: ${data.service}`,
      `Timeline: ${data.timeline}`,
      `Budget: ${data.budget}`,
      '',
      'Message:',
      data.message,
    ].join('\n'),
  }
}

export async function parseJsonBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body
  }

  let rawBody = ''
  for await (const chunk of req) {
    rawBody += chunk
  }

  if (!rawBody) {
    return {}
  }

  try {
    return JSON.parse(rawBody)
  } catch {
    throw new Error('Invalid JSON body.')
  }
}

export async function createContactSubmission(payload, env = process.env) {
  const validation = validateContactPayload(payload)

  if (!validation.ok) {
    return {
      status: validation.status,
      body: { success: false, message: validation.message },
    }
  }

  const resendApiKey = env.RESEND_API_KEY
  const targetEmail = env.CONTACT_TO_EMAIL
  const isDevelopment = env.NODE_ENV !== 'production'

  if (!resendApiKey || !targetEmail) {
    if (isDevelopment) {
      return {
        status: 200,
        body: {
          success: true,
          message:
            'Development mode: enquiry validated locally. Add Resend environment variables to enable live delivery.',
        },
      }
    }

    return {
      status: 503,
      body: {
        success: false,
        message:
          'Contact delivery is not configured yet. Add RESEND_API_KEY and CONTACT_TO_EMAIL before going live.',
      },
    }
  }

  const emailPayload = buildEmailPayload(validation.data, env)
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailPayload),
  })

  const responseData = await response.json().catch(() => null)

  if (!response.ok) {
    return {
      status: 502,
      body: {
        success: false,
        message: 'Email delivery failed. Please retry shortly.',
      },
      error: responseData,
    }
  }

  return {
    status: 200,
    body: {
      success: true,
      message: 'Thanks. Your enquiry has been received and we will reply within one business day.',
    },
  }
}

