import { NextRequest, NextResponse } from "next/server"
import { getAllLeads, updateLead } from "@/lib/db"

/**
 * Admin Leads API
 * Get all leads and update their status
 */

export async function GET(request: NextRequest) {
  try {
    const leads = getAllLeads()
    const sortedLeads = leads.sort(
      (a, b) =>
        new Date(b.qualifiedAt).getTime() - new Date(a.qualifiedAt).getTime()
    )

    return NextResponse.json({
      success: true,
      count: sortedLeads.length,
      leads: sortedLeads
    })
  } catch (error) {
    console.error("[Admin Leads API Error]", error)
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { leadId, status, notes } = body

    if (!leadId) {
      return NextResponse.json(
        { error: "leadId required" },
        { status: 400 }
      )
    }

    // Update lead metadata
    const updated = updateLead(leadId, {
      metadata: {
        status,
        notes,
        updatedAt: new Date().toISOString()
      }
    })

    if (!updated) {
      return NextResponse.json(
        { error: "Lead not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      lead: updated
    })
  } catch (error) {
    console.error("[Admin Leads Update Error]", error)
    return NextResponse.json(
      { error: "Failed to update lead" },
      { status: 500 }
    )
  }
}
