import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for HS Techware Limited.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary px-4 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-center text-4xl font-bold tracking-tight text-primary-foreground">
              Privacy Policy
            </h1>
          </div>
        </section>

        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="prose prose-neutral mx-auto max-w-3xl">
            <p className="text-muted-foreground">Last updated: February 2026</p>

            <h2 className="mt-8 text-xl font-bold">1. Information We Collect</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We collect information you provide directly to us, including your name, email address, phone number, and project details when you fill out our contact or quote forms. We also collect basic usage data through standard web analytics.
            </p>

            <h2 className="mt-8 text-xl font-bold">2. How We Use Your Information</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We use the information collected to respond to your inquiries, provide our services, send project updates, and improve our website experience. We do not sell your personal information to third parties.
            </p>

            <h2 className="mt-8 text-xl font-bold">3. Data Security</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes secure data storage, encrypted communications, and access controls.
            </p>

            <h2 className="mt-8 text-xl font-bold">4. Data Retention</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.
            </p>

            <h2 className="mt-8 text-xl font-bold">5. Your Rights</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              You have the right to access, correct, or delete your personal data. You may also request that we stop processing your data. To exercise any of these rights, please contact us at privacy@hstechware.com.
            </p>

            <h2 className="mt-8 text-xl font-bold">6. Cookies</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Our website uses essential cookies to ensure proper functionality. We may also use analytics cookies to understand how visitors interact with our website. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="mt-8 text-xl font-bold">7. Contact</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              For privacy-related inquiries, contact our data protection team at privacy@hstechware.com or write to us at our Vadodara office.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
