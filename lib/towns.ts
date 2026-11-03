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
      "Nacogdoches is about 20 miles north of Lufkin on US 59, usually under half an hour in the car. ETX IT Solutions serves the town from our office at 315 E. Lufkin Ave. in Lufkin. There is no Nacogdoches storefront. When a problem should be handled in person, that drive is a normal part of the job.",
      "Nacogdoches is the county seat of Nacogdoches County, and people here still call it the oldest town in Texas. Stephen F. Austin State University anchors the north side of the community. The campus, the offices that support it, and the businesses along University Drive and North Street all depend on networks that have to work through a school year, a summer session, and the weeks in between. Downtown still behaves like a courthouse town. County offices, professional firms, and independent retailers share older buildings, mixed phone and internet circuits, and equipment that was added one project at a time.",
      "Healthcare is a large local employer. Hospitals and clinics keep schedules, images, and billing records that patients expect to stay private. ETX helps practices with the same HIPAA consultation we do across East Texas: who can get into which system, how the network is separated, and a practical path through the compliance process. We look at the office you actually have and write down what should change.",
      "Timber and forest products still shape the county, next to trades, light manufacturing, and the small businesses on the commercial corridors. A common shop has a front office, a yard, and nobody whose job title is IT. Managed support from ETX is the ordinary list those companies call about. New user accounts, vendor coordination, backups of the files people are afraid to lose, patching, and a network that still works after someone adds a camera or a point-of-sale terminal.",
      "The same Lufkin crew handles infrastructure and security: network security, cybersecurity, cameras, and access control. Website and social media help is there when a firm needs a current page. Structured cabling is available when the building, not just the firewall, is the problem. None of that requires a second office in Nacogdoches. It requires someone who will drive up US 59, learn how the place is wired, and stay on the account after the project invoice is paid.",
      "If you run a practice, a campus office, a county department, or a storefront in Nacogdoches, call 936-674-5440 or send a note through the contact form. Say what is breaking, what you are planning, and whether you want ongoing support or a single project. We answer from 315 E. Lufkin Ave.",
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
      "Diboll is about 11 miles south of Lufkin, in Angelina County, typically 15 to 20 minutes down US 59. ETX IT Solutions works there from the office at 315 E. Lufkin Ave. A site visit is a short trip, not an out-of-town project. We do not keep a separate Diboll office, and the distance does not call for one.",
      "The town grew up around the Southern Pine Lumber Company mill that T. L. L. Temple started in the 1890s. Forest products still organize a lot of daily life: woodyards and mill operations, the contractors who supply them, and the small businesses that serve the people who hold those jobs. The History Center keeps that lumber-town record in public view. Around it are the city, the school district, and the shops along the highway. Those are the offices that call. A server in a closet, a shared inbox, a door camera, and a phone system someone inherited are ordinary here, not a special case.",
      "That kind of building is hard on casual IT. Heat, dust, and shifts that do not match a desk schedule are normal. Managed support has to fit the office that exists. We set up accounts for new hires, patch what can be patched, back up the files that would hurt to lose, and build a network that reaches the front office and the outbuildings you actually use. When a vendor owns part of the stack, the phone carrier, the line-of-business software, or the copier contract, we talk to them instead of handing you the translation.",
      "Clinics in Diboll are smaller than the hospital campuses up the highway, and they still keep private patient information. HIPAA consultation is part of the work when a practice wants a clearer handle on access and safeguards. Infrastructure and security covers network security, cybersecurity, cameras, and access control for yards and offices. Website and social media help is there when a company has outgrown a page that no longer matches the work. Cabling projects, including a cleanup of old runs, are handled by the same Lufkin crew when the wire itself is the issue.",
      "Diboll companies rarely need a complicated pitch. They need someone who will show up, label what they touch, and answer the phone the next time a printer or a server misbehaves. The drive from 315 E. Lufkin Ave. is short enough that we would rather see the closet than guess from a ticket. Tell us whether the job is ongoing support or one project, and we will say which it is after we have heard how the office runs.",
      "Call 936-674-5440 or use the contact form. Say what the building is, who uses the computers, and what has been failing. We follow up from the Lufkin office.",
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
      "Livingston is the county seat of Polk County, about 45 miles south of Lufkin. The drive down US 59 usually takes under an hour. ETX IT Solutions serves the town from 315 E. Lufkin Ave. in Lufkin. We do not keep a Livingston office. When a job needs someone on site, that drive is part of the work, and we would rather plan it than pretend every fix is remote.",
      "The courthouse square is still the center of a lot of professional life. County offices, attorneys, title companies, and independent businesses share a small-city downtown. Polk County government, the school district, and the clinics that refer into the local hospital all run on systems that have to get through a storm season and a busy Monday. The work is not exotic. It is accounts, backups, a network diagram that matches the building, and a person in Lufkin who already knows which vendor owns the phone system.",
      "Lake Livingston, west of town, adds a second economy. Marinas, lodges, real estate offices, and service companies swell and shrink with the season. Their problems are concrete. A point-of-sale system has to work on a Saturday. Guest Wi-Fi has to stay off the office network. Cameras sit on buildings that are quiet midweek and busy on a holiday weekend. We set those pieces up so the seasonal staff can use them without sharing the password that opens the books.",
      "Timber and light industry have not left the county. Shops along the highway often have a capable office manager and no IT staff. Managed support from ETX is built for that shape of company: user accounts, vendor coordination, backups, patching, and the network itself, explained in plain language before we change anything. If a change will take the counter offline, we say so before we start.",
      "Healthcare practices around Livingston keep records that should not sit on an unlocked workstation. HIPAA consultation walks a practice through safeguards and access, then helps put the practical pieces in place. It is consultation and hands-on support, not a certificate to hang in the lobby. Infrastructure and security also includes cybersecurity, network security, cameras, and access control. If the public face of the business is a dated website, we can help with the site and with social media. Cabling is available when a remodel or a new counter needs drops that are labeled and tested.",
      "Livingston is far enough from Lufkin that an on-site day should be scheduled, and close enough that Polk County is already inside the East Texas territory we drive. Call 936-674-5440 or send a message through the contact form. Tell us about the office, the clinic, the marina, or the department you run. We reply from 315 E. Lufkin Ave.",
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
      "Crockett is the county seat of Houston County, about 46 miles west of Lufkin, generally under an hour by car. The country between the two towns is pine woods, including the Davy Crockett National Forest. ETX IT Solutions serves Crockett from 315 E. Lufkin Ave. in Lufkin. There is no Crockett office. We drive over when the work should be done on site, and we handle the rest from Lufkin.",
      "Houston County runs on county government, the school district, agriculture, timber, and the small businesses on the square and along the loop. Law offices, clinics, feed and equipment dealers, and family retailers often share the same pattern. A few computers, a line-of-business program nobody wants to reinstall, and a person who became the IT contact because they were willing to try. Managed IT support is that job done by a company whose actual office is in Lufkin. Accounts, backups, patching, vendor calls, and a network that matches the building are the core of it.",
      "The square is a good picture of the work. Older buildings, additions out back, and wiring that followed each tenant. We do not assume a clean server room. We look at where the equipment actually sits, which circuit it uses, and who depends on it during the day. Remote administration covers password resets, monitoring, and a lot of vendor calls. Hands are for the jobs a ticket cannot see: a firewall that has to be swapped, a camera run, a server move, a closet of unlabeled cable.",
      "Clinics in Crockett keep schedules, billing, and medical records that patients expect to stay private. HIPAA consultation from ETX is the same service we offer healthcare groups elsewhere in East Texas. We look at safeguards and access, then help put the practical pieces in place. Infrastructure and security covers cybersecurity, network security, cameras, and access control for offices and yards. Website and social media support is there when the business needs a current page. Structured cabling is there when a remodel, a new office, or a mess of old wire needs to be pulled, labeled, and tested.",
      "Distance is part of the first conversation, not a footnote. We will tell you what we can do from Lufkin and what needs a scheduled visit, after we know the building. Call 936-674-5440 or use the contact form. Describe the Houston County operation you want help with. Include whether people will be in the office while the work happens. We answer from 315 E. Lufkin Ave.",
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
      "Huntington is about 10 miles southeast of Lufkin, in Angelina County, a short drive out US 69. Most trips from the ETX office at 315 E. Lufkin Ave. take about 15 minutes. An on-site visit is ordinary, not a scheduled expedition. We support the town from that Lufkin office. There is no separate storefront, and the distance does not justify one.",
      "Huntington is a small city. Huntington ISD sits near the center of community life, along with the churches, the city, and the businesses people use every week. Highway commercial property lines US 69. Timber, ranching, and the trades fill in around them. Many of those firms are owner-operated. The office may be a room off the shop. The internet circuit may be whatever was available when the building went up. The people who need email, a shared drive, and a working phone are often the same people loading a truck or meeting a customer.",
      "Managed IT support has to respect that shape. We set up accounts, keep backups, apply patches, and coordinate the vendors who own the phone line or the accounting software. We do not ask a small shop to behave like it has a corporate IT department. If the useful fix is a labeled switch in the closet and a backup that actually ran last night, that is the work. We will say so instead of selling a platform you do not need.",
      "Healthcare for Huntington residents is largely in Lufkin, but local clinics and professional offices still keep private records and still need orderly access. When a practice wants help with HIPAA safeguards, that consultation is part of our work. Security services, including cybersecurity, network security, cameras, and access control, matter on a highway strip where the building is empty at night and the office computer holds the books. A website that still lists old hours does not help a customer who looked you up on a phone. We can rebuild that page and help with social media when you want it.",
      "Because the drive is short, we would rather see the rack, the Wi-Fi dead spot, and the way the front desk actually uses the system than guess from a ticket. Cabling fits the same pattern. A shop adding an office, or a closet that has turned into a knot of old cable, can be walked, quoted, and installed by the Lufkin crew. We label both ends and leave the test results with the job.",
      "Call 936-674-5440 or send the contact form. Tell us whether you need steady managed support or help with one project, and what the building is used for during the day. We follow up from 315 E. Lufkin Ave. in Lufkin.",
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

export const serviceAreaLinks = TOWNS.map((town) => ({
  name: `${town.city}, TX`,
  href: townPath(town),
}))
