import { Check } from "lucide-react"

const features = [
  "Strategic marketing guidance",
  "Optimized media solutions",
  "Effective security responses",
  "24/7 technical support",
  "Proactive monitoring",
  "Customized IT roadmaps",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-10 mb-8">
          <div className="min-w-0 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Your Trusted Digital Partner in East Texas
            </h2>
          </div>

          <div className="hidden lg:block shrink-0 bg-card border border-border p-6 rounded-lg shadow-xl max-w-xs">
            <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
            <div className="text-sm text-muted-foreground">Client satisfaction rate</div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          <p className="text-muted-foreground leading-relaxed">
            We are here to be your dedicated partner, guiding you through the intricate world of information
            technology. Our expertise spans various domains, including providing insightful guidance for strategic
            marketing, optimizing media choices, and crafting effective security responses.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Our aim is to empower you to make informed decisions that will not only address your immediate needs but
            also ensure your thriving success in today&apos;s dynamic digital landscape.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
