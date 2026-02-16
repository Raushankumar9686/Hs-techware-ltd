import type { Metadata } from "next"
import Link from "next/link"
import {
  Target,
  Eye,
  Shield,
  Lightbulb,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about HS Techware Limited - your trusted IT services partner in Vadodara, Gujarat.",
}

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We maintain the highest standards of honesty and transparency in all our dealings with clients and partners.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of technology trends to deliver modern, future-proof solutions to our clients.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description:
      "Our clients are at the heart of everything we do. We listen, understand, and deliver beyond expectations.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We deliver on our promises, meeting deadlines and maintaining consistent quality across all projects.",
  },
]

const reasons = [
  {
    title: "Full-Service IT Partner",
    description:
      "From software development to hardware repair, we provide end-to-end technology solutions under one roof.",
  },
  {
    title: "Experienced Professionals",
    description:
      "Our team of certified engineers and developers brings over a decade of combined industry experience.",
  },
  {
    title: "Proven Track Record",
    description:
      "200+ successful projects delivered across diverse industries with consistently high client satisfaction.",
  },
  {
    title: "Competitive Pricing",
    description:
      "We offer transparent, competitive pricing with no hidden charges. Quality service that fits your budget.",
  },
  {
    title: "After-Sales Support",
    description:
      "Our relationship does not end at delivery. We provide ongoing support, maintenance, and updates.",
  },
  {
    title: "Local Presence, Global Standards",
    description:
      "Based in Vadodara with international quality standards, serving clients locally and remotely.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary px-4 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                About HS Techware
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
                A decade of delivering trusted IT solutions to businesses and
                individuals across Gujarat and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Founded in 2015 in Vadodara, Gujarat, HS Techware Limited
                  started as a small computer repair shop with a big vision: to
                  be the one-stop solution for all technology needs in the
                  region.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Over the years, we expanded our services to include web
                  development, e-commerce solutions, custom software
                  development, and comprehensive IT support. Today, we serve
                  over 150 clients ranging from small businesses to large
                  enterprises.
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Our success is built on a simple principle: treat every client
                  like a partner, understand their unique challenges, and deliver
                  technology solutions that drive real business results.
                </p>
              </div>
              <div className="rounded-xl bg-muted/50 p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">200+</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Projects Delivered
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">150+</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Happy Clients
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">10+</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Years in Business
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary">25+</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Team Members
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-y bg-muted/30 px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-primary/20">
                <CardContent className="flex flex-col gap-4 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    To empower businesses and individuals with reliable,
                    innovative, and affordable technology solutions that drive
                    growth, improve efficiency, and create lasting value.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="flex flex-col gap-4 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="leading-relaxed text-muted-foreground">
                    To be the most trusted and preferred technology partner in
                    Gujarat, known for excellence in service delivery, customer
                    satisfaction, and innovation in IT solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Our Core Values
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                The principles that guide everything we do at HS Techware.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardContent className="flex flex-col items-center gap-3 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-t bg-muted/30 px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Why Choose HS Techware?
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason.title} className="rounded-lg bg-background p-6 shadow-sm">
                  <h3 className="font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
