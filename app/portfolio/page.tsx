import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPortfolioItems } from "@/lib/data"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of successful projects across web development, e-commerce, and IT infrastructure.",
}

export default function PortfolioPage() {
  const items = getPortfolioItems()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary px-4 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Our Portfolio
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
                A showcase of projects we have delivered for our clients across
                various industries and technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <Card key={item.id} className="group overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-muted" />
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <CardTitle className="mt-2 text-lg">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <p className="mb-3 text-xs text-muted-foreground">
                      Client: {item.client}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
