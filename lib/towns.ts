import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_TELEPHONE,
  SITE_URL,
  pageMetadata,
  postalAddressJsonLd,
} from "@/lib/site"

export type Town = {
  id: string
  city: string
  county: string
  slug: string
  description: string
  paragraphs: string[]
}

export const TOWNS: Town[] = [
  {
    id: "nacogdoches",
    city: "Nacogdoches",
    county: "Nacogdoches County",
    slug: "managed-it-nacogdoches-tx",
    description:
      "Managed IT, cybersecurity, and HIPAA support for Nacogdoches businesses from ETX IT Solutions in Lufkin, about 20 miles away. Call 936-674-5440.",
    paragraphs: [
      "Nacogdoches is about 20 miles north of Lufkin on US 59. ETX IT Solutions works from 315 E. Lufkin Ave. in Lufkin. There is no Nacogdoches office.",
      "It is the county seat of Nacogdoches County. Stephen F. Austin State University sits on the north side of town. Hospitals, clinics, county offices, and timber and retail businesses are the local employers.",
    ],
  },
  {
    id: "diboll",
    city: "Diboll",
    county: "Angelina County",
    slug: "managed-it-diboll-tx",
    description:
      "Managed IT support for Diboll businesses from ETX IT Solutions in Lufkin, about 11 miles away. Security, HIPAA, and cabling help. Call 936-674-5440.",
    paragraphs: [
      "Diboll is about 11 miles south of Lufkin, in Angelina County, on US 59. The office at 315 E. Lufkin Ave. is a short drive. There is no separate Diboll office.",
      "The town grew up around the Southern Pine Lumber Company mill. Forest products, the school district, and the shops along the highway are still the local economy.",
    ],
  },
  {
    id: "livingston",
    city: "Livingston",
    county: "Polk County",
    slug: "managed-it-livingston-tx",
    description:
      "Managed IT and cybersecurity for Livingston and Polk County from ETX IT Solutions in Lufkin, about 45 miles away. Call 936-674-5440.",
    paragraphs: [
      "Livingston is the county seat of Polk County, about 45 miles south of Lufkin on US 59, usually under an hour. ETX IT Solutions works from 315 E. Lufkin Ave. in Lufkin. There is no Livingston office.",
      "The courthouse square, the school district, clinics, and timber shops are the weekday economy. Lake Livingston, west of town, adds marinas, lodges, and seasonal businesses.",
    ],
  },
  {
    id: "crockett",
    city: "Crockett",
    county: "Houston County",
    slug: "managed-it-crockett-tx",
    description:
      "Managed IT support for Crockett and Houston County from the ETX office in Lufkin, about 46 miles away. Call 936-674-5440.",
    paragraphs: [
      "Crockett is the county seat of Houston County, about 46 miles west of Lufkin, generally under an hour. The country between the two towns includes the Davy Crockett National Forest. ETX IT Solutions works from 315 E. Lufkin Ave. in Lufkin. There is no Crockett office.",
      "County offices, the school district, clinics, agriculture, and timber businesses on the square and the loop are the local work. On-site visits are scheduled. Ordinary support is handled from Lufkin.",
    ],
  },
  {
    id: "huntington",
    city: "Huntington",
    county: "Angelina County",
    slug: "managed-it-huntington-tx",
    description:
      "Managed IT support for Huntington businesses from ETX IT Solutions in Lufkin, about 10 miles away. Call 936-674-5440.",
    paragraphs: [
      "Huntington is about 10 miles southeast of Lufkin on US 69, in Angelina County. Most trips from 315 E. Lufkin Ave. take about 15 minutes. There is no separate office.",
      "Huntington ISD, the city, and the timber, ranch, and highway businesses along US 69 make up the town. Many of the offices are a room off a shop.",
    ],
  },
  {
    id: "groveton",
    city: "Groveton",
    county: "Trinity County",
    slug: "managed-it-groveton-tx",
    description:
      "Managed IT support for Groveton and Trinity County from ETX IT Solutions in Lufkin, about 30 miles away. Call 936-674-5440.",
    paragraphs: [
      "Groveton is the county seat of Trinity County, about 30 miles southwest of Lufkin on TX 94, which meets US 287 in town. ETX IT Solutions works from 315 E. Lufkin Ave. in Lufkin. There is no Groveton office.",
      "The courthouse, the school district, timber, and the businesses around the square are the local work. On-site visits are scheduled. Ordinary support is handled from Lufkin.",
    ],
  },
  {
    id: "corrigan",
    city: "Corrigan",
    county: "Polk County",
    slug: "managed-it-corrigan-tx",
    description:
      "Managed IT support for Corrigan businesses from ETX IT Solutions in Lufkin, about 25 miles south. Call 936-674-5440.",
    paragraphs: [
      "Corrigan is in Polk County, about 25 miles south of Lufkin on US 59, between Diboll and Livingston. ETX IT Solutions works from 315 E. Lufkin Ave. in Lufkin. There is no Corrigan office.",
      "Timber, the school district, and the businesses along US 59 are the local work. On-site visits are scheduled. Ordinary support is handled from Lufkin.",
    ],
  },
]

export function getTown(id: string) {
  const town = TOWNS.find((entry) => entry.id === id)
  if (!town) {
    throw new Error(`Unknown town: ${id}`)
  }
  return town
}

export function townPath(town: Town) {
  return `/${town.slug}`
}

export function townMetadata(town: Town) {
  return pageMetadata({
    title: `Managed IT Support in ${town.city}, TX | ${SITE_NAME}`,
    description: town.description,
    path: townPath(town),
  })
}

export function townJsonLd(town: Town) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: SITE_NAME,
    url: `${SITE_URL}${townPath(town)}`,
    telephone: SITE_TELEPHONE,
    email: SITE_EMAIL,
    description: town.description,
    address: postalAddressJsonLd(),
    areaServed: [
      { "@type": "City", name: town.city },
      { "@type": "AdministrativeArea", name: `${town.county}, Texas` },
    ],
  }
}
