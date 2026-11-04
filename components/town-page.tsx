import { ContactCta, InteriorShell } from "@/components/interior"
import { townJsonLd, type Town } from "@/lib/towns"

const services = [
  "Managed IT support",
  "Infrastructure and security",
  "HIPAA compliance",
  "Websites and social media",
  "Structured cabling",
]

export function TownPage({ town }: { town: Town }) {
  return (
    <InteriorShell jsonLd={townJsonLd(town)}>
      <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Managed IT Support in {town.city}, TX
          </h1>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            {town.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h2 className="mt-10 text-xl font-semibold text-foreground mb-3">Services</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <ContactCta
            heading={`Call about ${town.city}`}
            body={`Call 936-674-5440, or send a message. ETX works from 315 E. Lufkin Ave. in Lufkin.`}
          />
        </div>
      </article>
    </InteriorShell>
  )
}
