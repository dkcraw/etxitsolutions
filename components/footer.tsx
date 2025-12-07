import Link from "next/link"

const footerLinks = {
  services: [
    { name: "Managed IT Support", href: "#services" },
    { name: "Infrastructure & Security", href: "#services" },
    { name: "HIPAA Compliance", href: "#services" },
    { name: "Websites & Social Media", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Client Portal", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-primary">ETX</span>
                <span className="text-foreground"> IT</span>
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Solutions</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Your dedicated digital partner, guiding East Texas businesses through the intricate world of information
              technology.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ETX IT Solutions. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Proudly serving East Texas</p>
        </div>
      </div>
    </footer>
  )
}
