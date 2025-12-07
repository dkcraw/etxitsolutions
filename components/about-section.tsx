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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/it-team-collaboration.png"
                alt="ETX IT Solutions team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card border border-border p-6 rounded-lg shadow-xl max-w-xs hidden lg:block">
              <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Client satisfaction rate</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Your Trusted Digital Partner in East Texas
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              We are here to be your dedicated partner, guiding you through the intricate world of information
              technology. Our expertise spans various domains, including providing insightful guidance for strategic
              marketing, optimizing media choices, and crafting effective security responses.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Our aim is to empower you to make informed decisions that will not only address your immediate needs but
              also ensure your thriving success in today&apos;s dynamic digital landscape.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
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
        </div>
      </div>
    </section>
  )
}
