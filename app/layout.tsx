import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: {
    default: "HS Techware Limited - Complete Software & Hardware Solutions",
    template: "%s | HS Techware Limited",
  },
  description:
    "HS Techware Limited provides comprehensive IT services including web development, e-commerce solutions, custom software, laptop repair, screen replacement, and annual maintenance contracts in Vadodara, Gujarat.",
  keywords: [
    "IT services",
    "web development",
    "laptop repair",
    "software development",
    "Vadodara",
    "Gujarat",
    "HS Techware",
  ],
}

export const viewport = {
  themeColor: "#2563eb",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
