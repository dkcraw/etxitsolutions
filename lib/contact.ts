import { z } from "zod"

function validPhone(value: string) {
  if (value === "") return true
  if (!/^[0-9+().\-\s]+$/.test(value)) return false
  const digits = value.replace(/\D/g, "")
  return digits.length >= 7 && digits.length <= 15
}

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .max(200, "Email is too long.")
    .email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .refine(validPhone, "Enter a phone number we can call, or leave this blank."),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few more words so we know how to help.")
    .max(5000, "Message is too long."),
  company_website: z.string().optional(),
})

export type ContactInput = z.infer<typeof contactSchema>

export function fieldErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {}
  for (const issue of error.issues) {
    const key = issue.path[0]
    if (typeof key === "string" && errors[key] === undefined) {
      errors[key] = issue.message
    }
  }
  return errors
}

export function honeypotTripped(value: string | undefined) {
  return typeof value === "string" && value.trim().length > 0
}
