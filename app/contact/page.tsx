import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { GoogleMap } from "@/components/google-map"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with HS Techware Limited for IT services, hardware repair, or any technology needs.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: ["123 Tech Park, Alkapuri", "Vadodara, Gujarat 390007", "India"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 265 123 4567", "+91 98765 43210"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@hstechware.com", "support@hstechware.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday", "9:00 AM - 7:00 PM", "Sunday: Closed"],
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary px-4 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
                Have a question or need our services? Reach out to us and we
                will get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Form */}
              <div className="lg:col-span-3">
                <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
                <ContactForm />
              </div>

              {/* Info Sidebar */}
              <div className="flex flex-col gap-6 lg:col-span-2">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                {contactInfo.map((info) => (
                  <Card key={info.title}>
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{info.title}</h3>
                        {info.details.map((d) => (
                          <p
                            key={d}
                            className="text-sm text-muted-foreground"
                          >
                            {d}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <GoogleMap />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
