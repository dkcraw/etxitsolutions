import { NextResponse } from "next/server"
import { contactSchema, fieldErrors, honeypotTripped } from "@/lib/contact"
import { sendContactEmail } from "@/lib/send-contact-email"

export const runtime = "edge"
export const dynamic = "force-dynamic"

const MAX_BODY_BYTES = 20_000

function json(body: unknown, status: number) {
  return NextResponse.json(body, { status })
}

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin")
  if (!origin) return true
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host")
  if (!host) return false
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return json({ ok: false, code: "forbidden" }, 403)
  }

  let raw: string
  try {
    raw = await request.text()
  } catch {
    return json({ ok: false, code: "validation", errors: { message: "That submission could not be read." } }, 400)
  }

  if (raw.length > MAX_BODY_BYTES) {
    return json({ ok: false, code: "validation", errors: { message: "Message is too long." } }, 400)
  }

  let payload: unknown
  try {
    payload = JSON.parse(raw)
  } catch {
    return json({ ok: false, code: "validation", errors: { message: "That submission could not be read." } }, 400)
  }

  const parsed = contactSchema.safeParse(payload)
  if (!parsed.success) {
    return json({ ok: false, code: "validation", errors: fieldErrors(parsed.error) }, 400)
  }

  if (honeypotTripped(parsed.data.company_website)) {
    return json({ ok: true }, 200)
  }

  const result = await sendContactEmail(parsed.data)
  if (result.status === "not_configured") {
    return json({ ok: false, code: "not_configured" }, 503)
  }
  if (result.status === "failed") {
    return json({ ok: false, code: "delivery_failed" }, 502)
  }

  return json({ ok: true }, 200)
}
