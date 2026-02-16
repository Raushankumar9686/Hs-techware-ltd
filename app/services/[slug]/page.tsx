import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Globe,
  ShoppingCart,
  FileCode,
  Code,
  Laptop,
  Monitor,
  Keyboard,
  Wrench,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { services } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  Globe, ShoppingCart, FileCode, Code, Laptop, Monitor, Keyboard, Wrench,
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return { title: "Service Not Found" }
  return {
    title: service.title,
    description: service.description,
  }
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const Icon = iconMap[service.icon] || Globe
  const relatedServices = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary px-4 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="mb-4 text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </Button>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10">
                <Icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <Badge
                  variant="secondary"
                  className="mb-1 bg-primary-foreground/10 text-primary-foreground"
                >
                  {service.category === "it" ? "IT & Software" : "Hardware"}
                </Badge>
                <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                  {service.title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {service.longDescription}
                </p>

                <h2 className="mb-6 mt-10 text-2xl font-bold">
                  What We Offer
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10 rounded-xl bg-primary/5 p-8">
                  <h3 className="text-xl font-bold">
                    Interested in this service?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Get a personalized quote for your project. We will review
                    your requirements and get back to you within 24 hours.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Button asChild>
                      <Link href="/quote">Get a Quote</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-6">
                {relatedServices.length > 0 && (
                  <div>
                    <h3 className="mb-4 text-lg font-semibold">
                      Related Services
                    </h3>
                    <div className="flex flex-col gap-3">
                      {relatedServices.map((rs) => {
                        const RSIcon = iconMap[rs.icon] || Globe
                        return (
                          <Link key={rs.slug} href={`/services/${rs.slug}`}>
                            <Card className="transition-shadow hover:shadow-md">
                              <CardHeader className="flex-row items-center gap-3 p-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                  <RSIcon className="h-5 w-5 text-primary" />
                                </div>
                                <CardTitle className="text-sm">
                                  {rs.title}
                                </CardTitle>
                              </CardHeader>
                            </Card>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">Need Help?</h3>
                    <p className="mt-2 text-sm text-primary-foreground/80">
                      Not sure which service is right for you? Our team is happy
                      to help you find the best solution.
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      asChild
                      className="mt-4"
                    >
                      <Link href="/contact">
                        Talk to Us
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
