import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { faqItems } from "@/lib/data"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about HS Techware's services, pricing, and support.",
}

export default function FaqPage() {
  const generalFaqs = faqItems.filter((f) => f.category === "General")
  const itFaqs = faqItems.filter((f) => f.category === "IT Services")
  const hwFaqs = faqItems.filter((f) => f.category === "Hardware")

  const sections = [
    { title: "General", items: generalFaqs },
    { title: "IT & Software Services", items: itFaqs },
    { title: "Hardware Services", items: hwFaqs },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary px-4 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
                Find answers to common questions about our services, processes,
                and support options.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            {sections.map((section) => (
              <div key={section.title} className="mb-10 last:mb-0">
                <h2 className="mb-4 text-xl font-bold">{section.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left text-sm font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {/* CTA */}
            <div className="mt-12 rounded-xl bg-muted/50 p-8 text-center">
              <h3 className="text-xl font-bold">Still have questions?</h3>
              <p className="mt-2 text-muted-foreground">
                Can&apos;t find what you&apos;re looking for? Our team is happy to help.
              </p>
              <Button asChild className="mt-4">
                <Link href="/contact">
                  Contact Us
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
