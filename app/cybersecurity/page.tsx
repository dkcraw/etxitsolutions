import type { Metadata } from "next"
import { ContactCta, InteriorShell } from "@/components/interior"
import { SITE_EMAIL, SITE_NAME, SITE_TELEPHONE, SITE_URL, pageMetadata, postalAddressJsonLd } from "@/lib/site"

const description =
  "Cybersecurity and HIPAA compliance support for East Texas medical, dental, and finance offices from ETX IT Solutions in Lufkin. Call 936-674-5440."

export const metadata: Metadata = pageMetadata({
  title: "Cybersecurity & HIPAA Support in East Texas | ETX IT Solutions",
  description,
  path: "/cybersecurity",
})

const paragraphs = [
  "ETX IT Solutions provides managed cybersecurity and HIPAA compliance support for medical clinics, dental practices, and finance offices across Lufkin, Nacogdoches, and East Texas. We work from 315 E. Lufkin Ave. in Lufkin.",
  "Regulated offices need practical controls that hold up during an audit without getting in the way of staff seeing patients or serving customers. We keep security and day-to-day IT under one team so patches, backups, and access rules stay current.",
]

const coverage = [
  "Endpoint protection, patching, and multi-factor authentication",
  "Email security, phishing filtering, and Microsoft 365 hardening",
  "Firewalls, network segmentation, and encrypted backups",
  "HIPAA risk assessments, access controls, and audit documentation",
  "Security cameras and physical access control",
]

const cybersecurityJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cybersecurity & HIPAA Support",
  serviceType: "Managed cybersecurity and HIPAA compliance support",
  url: `${SITE_URL}/cybersecurity`,
  description,
  provider: {
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: SITE_NAME,
    url: SITE_URL,
    telephone: SITE_TELEPHONE,
    email: SITE_EMAIL,
    address: postalAddressJsonLd(),
  },
  areaServed: [
    { "@type": "City", name: "Lufkin" },
    { "@type": "City", name: "Nacogdoches" },
    { "@type": "Place", name: "East Texas" },
  ],
}

export default function Page() {
  return (
    <InteriorShell jsonLd={cybersecurityJsonLd}>
      <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Cybersecurity &amp; HIPAA Support in East Texas
          </h1>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h2 className="mt-10 text-xl font-semibold text-foreground mb-3">What we cover</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            {coverage.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ContactCta
            heading="Talk with us about security or HIPAA"
            body="Call 936-674-5440 or send a message. Tell us about your clinic or office and what systems you run."
          />
        </div>
      </article>
    </InteriorShell>
  )
}
