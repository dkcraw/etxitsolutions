"use client"

import type React from "react"

import { useState } from "react"
import { Send, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary border-border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary border-border"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-secondary border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your IT needs..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary border-border resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
