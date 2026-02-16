import { NextResponse } from "next/server"
import { getQuoteRequests, addQuoteRequest } from "@/lib/data"

export async function GET() {
  return NextResponse.json(getQuoteRequests())
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, serviceCategory, details, budget } = body

    if (!name || !email || !phone || !serviceCategory || !details || !budget) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const item = addQuoteRequest({ name, email, phone, serviceCategory, details, budget })
    return NextResponse.json(item, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
