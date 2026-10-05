export const SITE_URL = "https://etxitsolutions.com"
export const SITE_NAME = "ETX IT Solutions"

export const SITE_TITLE =
  "Managed IT & Cybersecurity in Lufkin, TX | ETX IT Solutions"

export const SITE_DESCRIPTION =
  "ETX IT Solutions provides managed IT, cybersecurity, HIPAA compliance, and infrastructure support for businesses in Lufkin and East Texas. Call (936) 674-5440."

/** E.164 form for schema; visible site number is 936-674-5440. */
export const SITE_TELEPHONE = "+1-936-674-5440"

export const SITE_ADDRESS = {
  streetAddress: "315 E. Lufkin Ave.",
  addressLocality: "Lufkin",
  addressRegion: "TX",
  postalCode: "75901",
  addressCountry: "US",
} as const

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: SITE_NAME,
  url: SITE_URL,
  telephone: SITE_TELEPHONE,
  email: "info@etxitsolutions.com",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    ...SITE_ADDRESS,
  },
  areaServed: [
    { "@type": "City", name: "Lufkin" },
    { "@type": "AdministrativeArea", name: "Angelina County" },
    { "@type": "Place", name: "East Texas" },
  ],
}
