import Link from "next/link"
import { ArrowRight, Users, Briefcase, Award, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { services, getTestimonials } from "@/lib/data"

const stats = [
  { icon: Briefcase, value: "200+", label: "Projects Completed" },
  { icon: Users, value: "150+", label: "Happy Clients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Headphones, value: "24/7", label: "Support Available" },
]

export default function HomePage() {
  const testimonials = getTestimonials()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        {/* Services Overview */}
        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Comprehensive IT and hardware solutions tailored to meet your
                business and personal technology needs.
              </p>
            </div>
            <ServicesGrid services={services} showCategory />
            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y bg-muted/50 px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-3xl font-bold">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                  Your Trusted Technology Partner
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  HS Techware Limited has been serving businesses and individuals
                  in Vadodara and across Gujarat since 2015. We combine technical
                  expertise with a deep understanding of our clients&apos; needs to
                  deliver solutions that truly make a difference.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Whether you need a cutting-edge web application, reliable IT
                  infrastructure, or expert hardware repair, our team of
                  certified professionals is here to help.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-primary/5 p-6">
                  <h3 className="font-semibold">Expert Team</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Certified professionals with years of industry experience.
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-6">
                  <h3 className="font-semibold">Quality First</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We never compromise on quality, using best practices and modern tools.
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-6">
                  <h3 className="font-semibold">On-Time Delivery</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We respect deadlines and deliver projects on schedule, every time.
                  </p>
                </div>
                <div className="rounded-lg bg-primary/5 p-6">
                  <h3 className="font-semibold">Affordable Pricing</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Competitive pricing without hidden costs. Transparent quotes always.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t bg-muted/30 px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Hear from businesses and individuals who trust HS Techware for
                their technology needs.
              </p>
            </div>
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary px-4 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              Get in touch with us today for a free consultation and quote. Let
              us help you bring your ideas to life.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
