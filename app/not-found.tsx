import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="text-center">
          <p className="text-8xl font-bold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Sorry, we could not find the page you are looking for. It may have
            been moved or does not exist.
          </p>
          <Button asChild className="mt-8">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
