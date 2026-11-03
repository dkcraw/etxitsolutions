import type { ReactNode } from "react"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export function InteriorShell({ jsonLd, children }: { jsonLd: unknown; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {children}
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }} />
    </main>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-12 bg-primary" />
      <span className="text-primary text-sm font-medium uppercase tracking-wider">{children}</span>
    </div>
  )
}

export function InfoCards({
  title,
  items,
}: {
  title: string
  items: { title: string; text: string; href?: string }[]
}) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">{title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.title} className="p-8 bg-secondary/50 border border-border rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            {item.href ? (
              <Link href={item.href} className="inline-block mt-6 text-sm font-medium text-primary hover:underline">
                Read more
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export function ContactCta({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="mt-16 bg-card border border-border rounded-lg p-8">
      <h2 className="text-2xl font-bold text-foreground mb-3">{heading}</h2>
      <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">{body}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="tel:936-674-5440">
            <Phone className="w-4 h-4" />
            936-674-5440
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-border text-foreground hover:bg-secondary bg-transparent"
        >
          <Link href="/#contact">Send a message</Link>
        </Button>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">ETX IT Solutions, 315 E. Lufkin Ave., Lufkin, Texas 75901</p>
    </section>
  )
}
