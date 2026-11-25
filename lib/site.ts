import type { Metadata } from "next"

export const SITE_URL = "https://etxitsolutions.com"
export const SITE_NAME = "ETX IT Solutions"

export const SITE_TITLE = "IT Company in Lufkin, TX | Managed IT & Cybersecurity"

export const SITE_DESCRIPTION =
  "IT company in Lufkin, TX for managed IT, cybersecurity, and business IT support across East Texas. ETX IT Solutions. Call 936-674-5440."

/** E.164 form for schema; visible site number is 936-674-5440. */
export const SITE_TELEPHONE = "+1-936-674-5440"

export const SITE_ADDRESS = {
  streetAddress: "315 E. Lufkin Ave.",
  addressLocality: "Lufkin",
  addressRegion: "TX",
  postalCode: "75901",
  addressCountry: "US",
} as const

export const SITE_EMAIL = "contact@etxitsolutions.com"

export const SITE_LOGO = `${SITE_URL}/etx-logo.png`

export const SITE_GEO = {
  "@type": "GeoCoordinates" as const,
  latitude: 31.338449,
  longitude: -94.726371,
}

export const SITE_SAME_AS = [
  "https://www.facebook.com/ETXITSOLUTIONS/",
  "https://members.lufkintexas.org/list/member/etx-it-solutions-7955",
]

export const SITE_OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
]

export function postalAddressJsonLd() {
  return {
    "@type": "PostalAddress" as const,
    ...SITE_ADDRESS,
  }
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: "/modern-office-workspace-with-computers-and-technol.jpg",
          alt: "ETX IT Solutions — managed IT and cybersecurity in Lufkin, Texas",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: SITE_NAME,
  url: SITE_URL,
  logo: SITE_LOGO,
  telephone: SITE_TELEPHONE,
  email: SITE_EMAIL,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    ...SITE_ADDRESS,
  },
  geo: SITE_GEO,
  openingHoursSpecification: SITE_OPENING_HOURS,
  sameAs: SITE_SAME_AS,
  areaServed: [
    { "@type": "City", name: "Lufkin" },
    { "@type": "AdministrativeArea", name: "Angelina County" },
    { "@type": "Place", name: "East Texas" },
  ],
}
