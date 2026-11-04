import { ContactCta, Eyebrow, InfoCards, InteriorShell } from "@/components/interior"
import { SITE_EMAIL, SITE_NAME, SITE_TELEPHONE, SITE_URL, postalAddressJsonLd } from "@/lib/site"

const paragraphs = [
  "Structured cabling is the permanent wiring in a building: the copper and fiber that phones, computers, cameras, and access control plug into. ETX IT Solutions does this as project work from the office at 315 E. Lufkin Ave. in Lufkin. It sits beside managed IT, not inside a monthly support plan. A client can hire one, the other, or both.",
  "A normal project is Cat6 or Cat6A to the desk, the camera, and the access-control panel, plus fiber where the distance or the speed calls for it. We set the racks, dress the cable, and label both ends so a port number on the patch panel matches the jack in the room. Each link is tested. The test report is the certification record for that run: the link met the category we installed. That is a property of the cable, not a credential we claim for the company. Closeout is the test results, a list of what was installed, and where each run lands. The next technician, and an auditor, will ask for that packet.",
  "ETX has been doing this kind of retrofit for banks. A branch is an occupied, regulated building. People are at the teller line, the vault and the cameras are not casual work zones, and the network is expected to be up when the doors open. We walk the branch before we pull cable. Work that can happen while the branch is open is separated from work that has to wait until after closing. A live circuit moves in a planned cut, not in the middle of a transaction. Cable is dressed so the ceiling is not left open and the floor is not left with a coil of scrap. Labels and the as-built are part of finishing, because a regulated site will ask where a run goes long after the crew is gone.",
  "We schedule around the hours the branch actually operates. Phasing the work is how the branch keeps doing business, and how the time any one system is down stays limited to what the building and the cutover require. We will not quote a downtime number before we have seen the closet and the path the cable has to take.",
  "Data center and network room build-outs are work ETX takes on. This is not a list of finished data centers. The scope is the room: racks and cabinets, pathways, copper and fiber into the cabinets, cable management, labeling, and test results turned over with the job. Some rooms are a closet that has to start behaving like a network room. Some are larger. We will say which one yours is after we have seen it. We do not describe a project we have not walked.",
  "If you have a branch, an office, or a room of equipment that needs the cable done properly, call 936-674-5440 or use the contact form. Tell us the address, whether people will be working during the install, and whether drawings already exist. We answer from 315 E. Lufkin Ave. in Lufkin.",
]

const included = [
  {
    title: "Cat6 and Cat6A",
    text: "Horizontal copper to desks, cameras, access control, and wireless access points, terminated and labeled.",
  },
  {
    title: "Fiber",
    text: "Fiber where the run length or the speed calls for it, into the rack with the copper, not as an afterthought.",
  },
  {
    title: "Racks and cable management",
    text: "Racks, cabinets, and the managers that keep a later move from becoming a tangle.",
  },
  {
    title: "Labeling",
    text: "Both ends marked so the patch panel and the jack in the room use the same name.",
  },
  {
    title: "Testing",
    text: "Each link tested, with the report that shows it met the category we pulled. We do not advertise a personal certification.",
  },
  {
    title: "Documentation",
    text: "As-builts and test results left with the job, so the next person is not tracing cable by hand.",
  },
]

export function cablingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Structured Cabling & Projects",
    serviceType: "Structured cabling installation",
    url: `${SITE_URL}/structured-cabling`,
    description:
      "Cat6, Cat6A, and fiber installation, including bank-branch retrofits and network room build-outs, from ETX IT Solutions in Lufkin, Texas.",
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
      { "@type": "Place", name: "East Texas" },
    ],
  }
}

export function CablingPage() {
  return (
    <InteriorShell jsonLd={cablingJsonLd()}>
      <article className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Projects</Eyebrow>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl text-balance">
            Structured Cabling & Projects
          </h1>
          <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <InfoCards title="What a cabling project includes" items={included} />
          <ContactCta
            heading="Tell us about the building"
            body="Call 936-674-5440 or send a message. Include the address, whether people will be working during the install, and whether you already have drawings."
          />
        </div>
      </article>
    </InteriorShell>
  )
}
