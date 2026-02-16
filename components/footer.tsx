import Link from "next/link"
import { Monitor, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/ecommerce-solutions", label: "E-Commerce Solutions" },
  { href: "/services/custom-software", label: "Custom Software" },
  { href: "/services/laptop-repair", label: "Laptop Repair" },
  { href: "/services/screen-replacement", label: "Screen Replacement" },
  { href: "/services/maintenance-amc", label: "AMC Plans" },
]

export function Footer() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Monitor className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">HS Techware</span>
            </Link>
            <p className="text-sm leading-relaxed opacity-70">
              Complete Software & Hardware Solutions Under One Trusted Brand.
              Serving businesses and individuals in Vadodara and beyond since
              2015.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Our Services</h3>
            <nav className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
                <span className="opacity-70">
                  123 Tech Park, Alkapuri, Vadodara, Gujarat 390007, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 opacity-70" />
                <span className="opacity-70">+91 265 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 opacity-70" />
                <span className="opacity-70">info@hstechware.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 opacity-70" />
                <span className="opacity-70">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm opacity-60">
            &copy; {new Date().getFullYear()} HS Techware Limited. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link
              href="/terms"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
