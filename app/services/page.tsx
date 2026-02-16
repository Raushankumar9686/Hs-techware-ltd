import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesGrid } from "@/components/services-grid"
import { services } from "@/lib/data"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive IT and hardware services including web development, e-commerce, laptop repair, and more.",
}

export default function ServicesPage() {
  const itServices = services.filter((s) => s.category === "it")
  const hwServices = services.filter((s) => s.category === "hardware")

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary px-4 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Our Services
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
                From custom software solutions to expert hardware services, we
                have everything your business needs to thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* IT & Software Services */}
        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                IT & Software Services
              </h2>
              <p className="mt-2 text-muted-foreground">
                Modern software solutions to digitize and grow your business.
              </p>
            </div>
            <ServicesGrid services={itServices} />
          </div>
        </section>

        {/* Hardware Services */}
        <section className="border-t bg-muted/30 px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Computer & Hardware Services
              </h2>
              <p className="mt-2 text-muted-foreground">
                Expert hardware repair, maintenance, and accessories for all your devices.
              </p>
            </div>
            <ServicesGrid services={hwServices} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
