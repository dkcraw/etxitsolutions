"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Send, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactSchema, fieldErrors } from "@/lib/contact"

type FormState = {
  name: string
  email: string
  phone: string
  message: string
  company_website: string
}

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  company_website: "",
}

type Status = "idle" | "submitting" | "success" | "error"

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>("idle")
  const [errorCode, setErrorCode] = useState<string | null>(null)
  const successRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (status === "success") successRef.current?.focus()
  }, [status])

  const update = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setErrorCode(null)

    const parsed = contactSchema.safeParse(formData)
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error))
      setStatus("idle")
      return
    }

    setErrors({})
    setStatus("submitting")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      })
      const body = (await response.json().catch(() => null)) as
        | { ok?: boolean; code?: string; errors?: Record<string, string> }
        | null

      if (response.ok && body?.ok) {
        setStatus("success")
        setFormData(emptyForm)
        return
      }

      if (body?.code === "validation" && body.errors) {
        setErrors(body.errors)
        setStatus("idle")
        return
      }

      setErrorCode(body?.code ?? "delivery_failed")
      setStatus("error")
    } catch {
      setErrorCode("delivery_failed")
      setStatus("error")
    }
  }

  const fallback =
    errorCode === "not_configured"
      ? "This form is not delivering messages yet."
      : "We could not send that message."

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Let&apos;s discuss your IT needs
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Take the first step with confidence – schedule a consultation with us, and let&apos;s work together to
              secure the comprehensive IT support you truly deserve.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Address</div>
                  <div className="text-muted-foreground text-sm">{"315 E. Lufkin Ave.\nLufkin, Texas 75901"}        </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Phone</div>
                  <a
                    href="tel:936-674-5440"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    936-674-5440
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Email</div>
                  <a
                    href="mailto:info@etxitsolutions.com"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    info@etxitsolutions.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            {status === "success" ? (
              <div className="space-y-4" role="status">
                <h3 ref={successRef} tabIndex={-1} className="text-xl font-semibold text-foreground outline-none">
                  Message sent
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your note is on its way to{" "}
                  <a href="mailto:info@etxitsolutions.com" className="text-primary hover:underline">
                    info@etxitsolutions.com
                  </a>
                  . If you would rather talk now, call{" "}
                  <a href="tel:936-674-5440" className="text-primary hover:underline">
                    936-674-5440
                  </a>
                  .
                </p>
                <button
                  type="button"
                  className="text-sm font-medium text-primary hover:underline"
                  onClick={() => {
                    setStatus("idle")
                    setErrorCode(null)
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="relative space-y-6">
                <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="company_website">Company website</label>
                  <input
                    id="company_website"
                    name="company_website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company_website}
                    onChange={update("company_website")}
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={update("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="bg-secondary border-border"
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-2 text-sm text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={update("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="bg-secondary border-border"
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-2 text-sm text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={update("phone")}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="bg-secondary border-border"
                  />
                  {errors.phone ? (
                    <p id="phone-error" className="mt-2 text-sm text-destructive">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your IT needs..."
                    rows={4}
                    value={formData.message}
                    onChange={update("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="bg-secondary border-border resize-none"
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-2 text-sm text-destructive">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                {status === "error" ? (
                  <div
                    role="alert"
                    className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground"
                  >
                    <p>{fallback}</p>
                    <p className="mt-2 text-muted-foreground">
                      Call{" "}
                      <a href="tel:936-674-5440" className="font-medium text-primary hover:underline">
                        936-674-5440
                      </a>{" "}
                      or email{" "}
                      <a href="mailto:info@etxitsolutions.com" className="font-medium text-primary hover:underline">
                        info@etxitsolutions.com
                      </a>
                      .
                    </p>
                  </div>
                ) : null}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
