import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/modern-office-workspace-with-computers-and-technol.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">East Texas IT Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
            Where <span className="text-primary">deep tech</span> meets{" "}
            <span className="text-muted-foreground">human mindset.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            We are your dedicated digital partner, guiding you through the intricate world of information technology.
            From managed IT support to cybersecurity, we ensure your business thrives in today&apos;s digital landscape.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary bg-transparent"
            >
              Explore Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "200+", label: "Clients Served" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
