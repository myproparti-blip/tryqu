/**
 * Client-side helper for leads API
 */

export async function fetchAllLeads() {
  try {
    const response = await fetch("/api/admin/leads")
    if (!response.ok) throw new Error("Failed to fetch leads")
    return await response.json()
  } catch (error) {
    console.error("Error fetching leads:", error)
    throw error
  }
}

export async function fetchLeadById(leadId: string) {
  try {
    const response = await fetch(`/api/admin/leads?id=${leadId}`)
    if (!response.ok) throw new Error("Failed to fetch lead")
    return await response.json()
  } catch (error) {
    console.error("Error fetching lead:", error)
    throw error
  }
}

export async function updateLeadStatus(
  leadId: string,
  status: "new" | "contacted" | "qualified" | "converted" | "lost",
  notes?: string
) {
  try {
    const response = await fetch("/api/admin/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ leadId, status, notes })
    })
    if (!response.ok) throw new Error("Failed to update lead")
    return await response.json()
  } catch (error) {
    console.error("Error updating lead:", error)
    throw error
  }
}

export async function exportLeadsAsCSV() {
  try {
    const { leads } = await fetchAllLeads()
    
    const headers = ["Lead ID", "Name", "Email", "Company", "Intent", "Budget", "Status", "Qualified At", "Notification Sent"]
    const rows = leads.map((lead: any) => [
      lead.id,
      lead.name,
      lead.email,
      lead.company || "N/A",
      lead.intent,
      lead.budget || "N/A",
      lead.metadata?.status || "new",
      new Date(lead.qualifiedAt).toLocaleDateString(),
      lead.notificationSent ? "Yes" : "No"
    ])

    const csv = [headers, ...rows]
      .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leads_${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error("Error exporting CSV:", error)
    throw error
  }
}
