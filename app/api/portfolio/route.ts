import { NextResponse } from "next/server"
import { getPortfolioItems, addPortfolioItem } from "@/lib/data"

export async function GET() {
  return NextResponse.json(getPortfolioItems())
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description, technologies, category, image, client } = body

    if (!title || !description || !category || !client) {
      return NextResponse.json(
        { error: "Title, description, category, and client are required" },
        { status: 400 }
      )
    }

    const item = addPortfolioItem({
      title,
      description,
      technologies: technologies || [],
      category,
      image: image || "",
      client,
    })
    return NextResponse.json(item, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
