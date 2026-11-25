import { CONTACT_RECIPIENT, type ContactInput } from "@/lib/contact"

export type SendResult = { status: "sent" } | { status: "not_configured" } | { status: "failed" }

type MailerBinding = {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>
}

type CloudflareContext = {
  env?: {
    MAILER?: MailerBinding
  }
}

const REQUEST_CONTEXT_SYMBOL = Symbol.for("__cloudflare-request-context__")

function getMailerBinding(): MailerBinding | undefined {
  const context = (globalThis as Record<symbol, unknown>)[REQUEST_CONTEXT_SYMBOL] as CloudflareContext | undefined
  const mailer = context?.env?.MAILER
  if (mailer && typeof mailer.fetch === "function") {
    return mailer
  }
  return undefined
}

export async function sendContactEmail(input: ContactInput): Promise<SendResult> {
  const mailer = getMailerBinding()
  if (!mailer) return { status: "not_configured" }

  const subjectName = input.name.replace(/[\r\n]+/g, " ").slice(0, 80)
  const text = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone || "(not provided)"}`,
    `To: ${CONTACT_RECIPIENT}`,
    "",
    "Message:",
    input.message,
  ].join("\n")

  try {
    const response = await mailer.fetch("https://mailer.internal/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        replyTo: input.email,
        subject: `Website inquiry from ${subjectName}`,
        text,
      }),
    })

    if (!response.ok) {
      console.error("Contact form delivery failed", response.status)
      return { status: "failed" }
    }

    return { status: "sent" }
  } catch {
    console.error("Contact form delivery could not reach the mailer service")
    return { status: "failed" }
  }
}
