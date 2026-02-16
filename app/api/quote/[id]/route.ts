import { NextResponse } from "next/server"
import { updateQuoteStatus, deleteQuoteRequest } from "@/lib/data"

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    const { status } = await request.json()
    if (!status) {
      return NextResponse.json({ error: "Status is required" }, { status: 400 })
    }
    const updated = updateQuoteStatus(id, status)
    if (!updated) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }
    return NextResponse.json(updated)
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const deleted = deleteQuoteRequest(id)
  if (!deleted) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  return NextResponse.json({ success: true })
}
