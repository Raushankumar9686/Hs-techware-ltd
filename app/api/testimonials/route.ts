import { NextResponse } from "next/server"
import { getTestimonials, addTestimonial } from "@/lib/data"

export async function GET() {
  return NextResponse.json(getTestimonials())
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, review, rating } = body

    if (!name || !company || !review || rating === undefined) {
      return NextResponse.json(
        { error: "Name, company, review, and rating are required" },
        { status: 400 }
      )
    }

    const initials = name
      .split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)

    const item = addTestimonial({
      name,
      company,
      review,
      rating: Math.min(5, Math.max(1, Number(rating))),
      avatar: initials,
    })
    return NextResponse.json(item, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
