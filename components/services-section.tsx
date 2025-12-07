import { Monitor, Shield, FileCheck, Globe, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Managed IT Support",
    description:
      "Outsource your IT support to ETX IT Solutions for comprehensive, timely solutions. Whether it's a specific project or expanding your network, we meet all your business needs with professional attention and care.",
    number: "01",
  },
  {
    icon: Shield,
    title: "Infrastructure & Security",
    description:
      "In our fast-paced world, technology is advancing rapidly. Our security experts ensure your information is protected and stays secure. Choose ETX IT Solutions for cameras, access control, network security, and cyber security.",
    number: "02",
  },
  {
    icon: FileCheck,
    title: "HIPAA Compliance",
    description:
      "Secure your patients' ePHI with our HIPAA Consultation services. ETX IT Solutions ensures the safety, security, and compliance of your valuable and private data. We guide you through the compliance process from start to finish.",
    number: "03",
  },
  {
    icon: Globe,
    title: "Websites & Social Media",
    description:
      "Over 90% of businesses leverage digital tools for growth. ETX IT Solutions can assist you in tapping into social media, websites, and online advertising to boost your leads, sales, and revenue using familiar platforms.",
    number: "04",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl text-balance">
            Our collection of tech services spans various needs at every stage of your{" "}
            <span className="text-muted-foreground">digital transformation.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-secondary/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-4xl font-bold text-border group-hover:text-primary/20 transition-colors">
                  {service.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>

              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

              <button className="flex items-center gap-2 text-sm text-primary font-medium group/btn">
                Read more
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
