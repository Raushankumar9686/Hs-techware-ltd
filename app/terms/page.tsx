import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using HS Techware Limited services.",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary px-4 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-center text-4xl font-bold tracking-tight text-primary-foreground">
              Terms & Conditions
            </h1>
          </div>
        </section>

        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="prose prose-neutral mx-auto max-w-3xl">
            <p className="text-muted-foreground">Last updated: February 2026</p>

            <h2 className="mt-8 text-xl font-bold">1. Acceptance of Terms</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              By accessing and using the services provided by HS Techware Limited, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>

            <h2 className="mt-8 text-xl font-bold">2. Services</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              HS Techware Limited provides IT services including but not limited to web development, software development, hardware repair, and annual maintenance contracts. The specific scope of services will be defined in individual project agreements or service contracts.
            </p>

            <h2 className="mt-8 text-xl font-bold">3. Payment Terms</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Payment terms are specified in individual project proposals. Generally, projects require an advance payment before commencement, with the balance due upon completion. Hardware repair services are payable upon completion of repair.
            </p>

            <h2 className="mt-8 text-xl font-bold">4. Intellectual Property</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Upon full payment, clients receive ownership of deliverables created specifically for their project. HS Techware retains ownership of proprietary tools, frameworks, and code libraries used in the development process.
            </p>

            <h2 className="mt-8 text-xl font-bold">5. Warranty</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Software projects include a 30-day warranty period for bug fixes after delivery. Hardware repairs carry a warranty period as specified at the time of service. Extended warranty is available through our AMC plans.
            </p>

            <h2 className="mt-8 text-xl font-bold">6. Limitation of Liability</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              HS Techware Limited shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the client for the specific service in question.
            </p>

            <h2 className="mt-8 text-xl font-bold">7. Contact</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              For questions about these terms, contact us at legal@hstechware.com or visit our office in Vadodara, Gujarat.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
