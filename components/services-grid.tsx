import Link from "next/link"
import {
  Globe,
  ShoppingCart,
  FileCode,
  Code,
  Laptop,
  Monitor,
  Keyboard,
  Wrench,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Service } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  Globe,
  ShoppingCart,
  FileCode,
  Code,
  Laptop,
  Monitor,
  Keyboard,
  Wrench,
}

interface ServicesGridProps {
  services: Service[]
  showCategory?: boolean
}

export function ServicesGrid({ services, showCategory = false }: ServicesGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => {
        const Icon = iconMap[service.icon] || Globe
        return (
          <Link key={service.slug} href={`/services/${service.slug}`}>
            <Card className="group h-full transition-shadow hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                {showCategory && (
                  <Badge variant="secondary" className="mb-2 w-fit text-xs">
                    {service.category === "it" ? "IT & Software" : "Hardware"}
                  </Badge>
                )}
                <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
