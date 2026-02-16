import type { Metadata } from "next"
import { Star } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getTestimonials } from "@/lib/data"

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what our clients say about working with HS Techware Limited.",
}

export default function TestimonialsPage() {
  const testimonials = getTestimonials()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary px-4 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Client Testimonials
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
                Hear directly from our clients about their experience working
                with HS Techware.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <Card key={t.id} className="h-full">
                  <CardContent className="flex h-full flex-col justify-between p-6">
                    <div>
                      <div className="mb-4 flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < t.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="leading-relaxed text-muted-foreground">
                        {`"${t.review}"`}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 border-t pt-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary/10 font-semibold text-primary">
                          {t.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{t.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {t.company}
                        </p>
                      </div>
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
