import { CONTACT_RECIPIENT, type ContactInput } from "@/lib/contact"

const RESEND_ENDPOINT = "https://api.resend.com/emails"
const DEFAULT_TO = CONTACT_RECIPIENT
const DEFAULT_FROM = "ETX IT Solutions <notifications@etxitsolutions.com>"

export type SendResult = { status: "sent" } | { status: "not_configured" } | { status: "failed" }

function readEnv(name: string) {
  const value = process.env[name]
  if (typeof value !== "string") return undefined
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : undefined
}

function toAddress() {
  const value = readEnv("CONTACT_TO_EMAIL")
  if (value && /^[^\s@]+@[^\s@]+$/.test(value)) return value
  return DEFAULT_TO
}

function fromAddress() {
  const value = readEnv("CONTACT_FROM_EMAIL")
  if (value && value.includes("@")) return value
  return DEFAULT_FROM
}

function endpoint() {
  // Ignored in production so a stray env var cannot redirect mail off Resend.
  if (process.env.NODE_ENV === "production") return RESEND_ENDPOINT
  return readEnv("RESEND_API_URL") ?? RESEND_ENDPOINT
}

export async function sendContactEmail(input: ContactInput): Promise<SendResult> {
  const apiKey = readEnv("RESEND_API_KEY")
  if (!apiKey) return { status: "not_configured" }

  const subjectName = input.name.replace(/[\r\n]+/g, " ").slice(0, 80)
  const text = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone || "(not provided)"}`,
    "",
    "Message:",
    input.message,
  ].join("\n")

  try {
    const response = await fetch(endpoint(), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress(),
        to: [toAddress()],
        reply_to: input.email,
        subject: `Website inquiry from ${subjectName}`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    })

    if (!response.ok) {
      console.error("Contact form delivery failed", response.status)
      return { status: "failed" }
    }

    return { status: "sent" }
  } catch {
    console.error("Contact form delivery could not reach the mail API")
    return { status: "failed" }
  }
}
