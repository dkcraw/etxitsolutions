export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 })
    }

    let payload
    try {
      payload = await request.json()
    } catch {
      return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 })
    }

    const { replyTo, subject, text } = payload ?? {}
    if (typeof subject !== "string" || !subject.trim() || typeof text !== "string" || !text.trim()) {
      return Response.json({ ok: false, error: "Missing subject or text" }, { status: 400 })
    }

    try {
      const result = await env.EMAIL.send({
        to: env.TO_ADDRESS || "contact@etxitsolutions.com",
        from: {
          email: env.FROM_ADDRESS || "notifications@etxitsolutions.com",
          name: env.FROM_NAME || "ETX IT Solutions",
        },
        ...(typeof replyTo === "string" && replyTo.trim() ? { replyTo: replyTo.trim() } : {}),
        subject: subject.trim(),
        text: text.trim(),
      })
      return Response.json({ ok: true, messageId: result?.messageId ?? null }, { status: 200 })
    } catch (error) {
      const code = error && typeof error === "object" && "code" in error ? error.code : undefined
      console.error("Email Sending failed", code, error instanceof Error ? error.message : String(error))
      return Response.json({ ok: false, code: code ?? "E_DELIVERY_FAILED" }, { status: 502 })
    }
  },
}
