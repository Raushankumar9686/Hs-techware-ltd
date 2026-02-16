import { NextResponse } from "next/server"
import { getContactRequests, addContactRequest } from "@/lib/data"

export async function GET() {
  return NextResponse.json(getContactRequests())
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("POST /api/contact body:", body)
    const { name, email, phone, service, message } = body

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const item = addContactRequest({ name, email, phone, service, message })
    console.log("New contact added (server):", item)
    console.log("Current contactRequests (server):", getContactRequests())
    return NextResponse.json(item, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
