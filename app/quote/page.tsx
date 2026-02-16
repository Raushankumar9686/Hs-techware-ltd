import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free quote for web development, software development, hardware repair, or any IT service from HS Techware.",
}

const processSteps = [
  {
    step: "1",
    title: "Submit Your Requirements",
    description: "Fill out the form with your project details and budget range.",
  },
  {
    step: "2",
    title: "We Review & Analyze",
    description:
      "Our team reviews your requirements and prepares a detailed proposal.",
  },
  {
    step: "3",
    title: "Receive Your Quote",
    description:
      "We send you a comprehensive quote within 24-48 hours with timeline and pricing.",
  },
  {
    step: "4",
    title: "Start Your Project",
    description:
      "Once approved, we begin work immediately with regular progress updates.",
  },
]

export default function QuotePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary px-4 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Get a Free Quote
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
                Tell us about your project and we will prepare a detailed
                proposal tailored to your needs and budget.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Form */}
              <div className="lg:col-span-3">
                <h2 className="mb-6 text-2xl font-bold">
                  Tell Us About Your Project
                </h2>
                <QuoteForm />
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-6 lg:col-span-2">
                <h2 className="text-2xl font-bold">How It Works</h2>
                <div className="flex flex-col gap-4">
                  {processSteps.map((step) => (
                    <Card key={step.step}>
                      <CardContent className="flex items-start gap-4 p-5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-medium">{step.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-muted/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold">What You Get</h3>
                    <ul className="mt-3 flex flex-col gap-2">
                      {[
                        "Free consultation",
                        "Detailed project breakdown",
                        "Transparent pricing",
                        "Realistic timeline",
                        "No obligation to proceed",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
