import { ContactCta, Eyebrow, InfoCards, InteriorShell } from "@/components/interior"
import { townJsonLd, type Town } from "@/lib/towns"

const serviceSummary = [
  {
    title: "Managed IT Support",
    text: "Accounts, backups, patching, vendor coordination, and a network that matches how the office actually runs.",
    href: "/#services",
  },
  {
    title: "Infrastructure & Security",
    text: "Network security, cybersecurity, cameras, and access control for offices, clinics, and shops.",
    href: "/#services",
  },
  {
    title: "HIPAA Compliance",
    text: "Consultation for practices that need a practical path to safeguarding patient information.",
    href: "/#services",
  },
  {
    title: "Websites & Social Media",
    text: "Help when the website or the social pages no longer match the business.",
    href: "/#services",
  },
  {
    title: "Structured Cabling & Projects",
    text: "Cat6, Cat6A, and fiber, including retrofits in occupied buildings and network room build-outs.",
    href: "/structured-cabling",
  },
]

export function TownPage({ town }: { town: Town }) {
  return (
    <InteriorShell jsonLd={townJsonLd(town)}>
      <article className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>East Texas</Eyebrow>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl text-balance">
            Managed IT Support in {town.city}, TX
          </h1>
          <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            {town.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <InfoCards title={`Services for ${town.city}`} items={serviceSummary} />
          <ContactCta
            heading={`Talk with the Lufkin office about ${town.city}`}
            body={`Call 936-674-5440 or send a message about the ${town.city} office, clinic, or shop you want help with. We work from 315 E. Lufkin Ave. in Lufkin.`}
          />
        </div>
      </article>
    </InteriorShell>
  )
}
