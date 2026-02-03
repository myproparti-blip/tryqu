import fs from "fs"
import path from "path"

const DB_DIR = path.join(process.cwd(), ".data")
const LEADS_FILE = path.join(DB_DIR, "leads.json")
const CONVERSATIONS_FILE = path.join(DB_DIR, "conversations.json")

export interface Lead {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  intent: string
  budget?: string
  source: string
  qualifiedAt: string
  notificationSent: boolean
  notificationChannels: string[]
  metadata?: Record<string, any>
}

export interface Conversation {
  id: string
  leadId?: string
  messages: Array<{
    id: string
    type: "user" | "bot"
    content: string
    timestamp: string
  }>
  createdAt: string
  updatedAt: string
}

// Initialize DB directory
function ensureDbDir() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true })
  }
}

// Initialize files if they don't exist
function ensureFiles() {
  ensureDbDir()
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2))
  }
  if (!fs.existsSync(CONVERSATIONS_FILE)) {
    fs.writeFileSync(CONVERSATIONS_FILE, JSON.stringify([], null, 2))
  }
}

export function saveLead(lead: Lead): Lead {
  ensureFiles()
  const leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"))
  leads.push(lead)
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))
  return lead
}

export function getLead(id: string): Lead | null {
  ensureFiles()
  const leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"))
  return leads.find((l: Lead) => l.id === id) || null
}

export function getAllLeads(): Lead[] {
  ensureFiles()
  return JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"))
}

export function updateLead(id: string, updates: Partial<Lead>): Lead | null {
  ensureFiles()
  const leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"))
  const index = leads.findIndex((l: Lead) => l.id === id)
  if (index === -1) return null
  leads[index] = { ...leads[index], ...updates }
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))
  return leads[index]
}

export function saveConversation(conversation: Conversation): Conversation {
  ensureFiles()
  const conversations = JSON.parse(fs.readFileSync(CONVERSATIONS_FILE, "utf-8"))
  conversations.push(conversation)
  fs.writeFileSync(CONVERSATIONS_FILE, JSON.stringify(conversations, null, 2))
  return conversation
}

export function getConversation(id: string): Conversation | null {
  ensureFiles()
  const conversations = JSON.parse(fs.readFileSync(CONVERSATIONS_FILE, "utf-8"))
  return conversations.find((c: Conversation) => c.id === id) || null
}

export function getConversationByLeadId(leadId: string): Conversation | null {
  ensureFiles()
  const conversations = JSON.parse(fs.readFileSync(CONVERSATIONS_FILE, "utf-8"))
  return conversations.find((c: Conversation) => c.leadId === leadId) || null
}

export function updateConversation(id: string, updates: Partial<Conversation>): Conversation | null {
  ensureFiles()
  const conversations = JSON.parse(fs.readFileSync(CONVERSATIONS_FILE, "utf-8"))
  const index = conversations.findIndex((c: Conversation) => c.id === id)
  if (index === -1) return null
  conversations[index] = { ...conversations[index], ...updates, updatedAt: new Date().toISOString() }
  fs.writeFileSync(CONVERSATIONS_FILE, JSON.stringify(conversations, null, 2))
  return conversations[index]
}
