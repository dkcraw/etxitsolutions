const partners = [
  { name: "Dell", logo: "DELL" },
  { name: "IT Glue", logo: "ITGlue" },
  { name: "Datto", logo: "datto" },
  { name: "Kaseya", logo: "Kaseya" },
  { name: "Ubiquiti", logo: "UBIQUITI" },
  { name: "Autotask", logo: "Autotask" },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Trusted Technology Partners</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-default"
              title={partner.name}
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
