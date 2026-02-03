import { NextRequest, NextResponse } from "next/server"

interface SupportQuestion {
  id: string
  name: string
  email: string
  question: string
  category: string
  status: "open" | "in-progress" | "resolved"
  createdAt: string
  response?: string
  respondedAt?: string
  respondedBy?: string
}

// In-memory storage (replace with database in production)
let supportQuestions: SupportQuestion[] = []

// Admin credentials
const ADMIN_EMAIL = "admin@tryqu.com"
const ADMIN_PASSWORD = "TryQu@2025Secure"

function verifyAdminAuth(authHeader: string | null): boolean {
  if (!authHeader) return false
  
  const credentials = authHeader.replace("Basic ", "")
  const [email, password] = Buffer.from(credentials, "base64").toString().split(":")
  
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, isAdmin, authHeader } = body

    // Submit a new question (public)
    if (action === "submit-question") {
      const { name, email, question, category } = body

      if (!name || !email || !question || !category) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        )
      }

      const newQuestion: SupportQuestion = {
        id: `q_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name,
        email,
        question,
        category,
        status: "open",
        createdAt: new Date().toISOString(),
      }

      supportQuestions.push(newQuestion)

      return NextResponse.json(
        {
          success: true,
          message: "Question submitted successfully. Our support team will respond soon.",
          questionId: newQuestion.id,
        },
        { status: 201 }
      )
    }

    // Get all questions (admin only)
    if (action === "get-all-questions") {
      if (!verifyAdminAuth(authHeader)) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        )
      }

      return NextResponse.json({
        success: true,
        questions: supportQuestions,
        total: supportQuestions.length,
      })
    }

    // Respond to a question (admin only)
    if (action === "respond-to-question") {
      if (!verifyAdminAuth(authHeader)) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        )
      }

      const { questionId, response, respondedBy } = body

      if (!questionId || !response) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        )
      }

      const question = supportQuestions.find((q) => q.id === questionId)

      if (!question) {
        return NextResponse.json(
          { error: "Question not found" },
          { status: 404 }
        )
      }

      question.response = response
      question.respondedAt = new Date().toISOString()
      question.respondedBy = respondedBy || "Support Team"
      question.status = "resolved"

      return NextResponse.json({
        success: true,
        message: "Response sent successfully",
        question,
      })
    }

    // Update question status (admin only)
    if (action === "update-status") {
      if (!verifyAdminAuth(authHeader)) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        )
      }

      const { questionId, status } = body

      if (!questionId || !status) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        )
      }

      const question = supportQuestions.find((q) => q.id === questionId)

      if (!question) {
        return NextResponse.json(
          { error: "Question not found" },
          { status: 404 }
        )
      }

      question.status = status

      return NextResponse.json({
        success: true,
        message: "Status updated",
        question,
      })
    }

    return NextResponse.json(
      { error: "Invalid action" },
      { status: 400 }
    )
  } catch (error) {
    console.error("Support API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    const { searchParams } = new URL(request.url)
    const action = searchParams.get("action")
    const questionId = searchParams.get("id")

    // Get single question (admin or user via email)
    if (action === "get-question") {
      if (!questionId) {
        return NextResponse.json(
          { error: "Missing question ID" },
          { status: 400 }
        )
      }

      const question = supportQuestions.find((q) => q.id === questionId)

      if (!question) {
        return NextResponse.json(
          { error: "Question not found" },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        question,
      })
    }

    // Get questions for a specific email (user tracking their questions)
    if (action === "user-questions") {
      const email = searchParams.get("email")

      if (!email) {
        return NextResponse.json(
          { error: "Email is required" },
          { status: 400 }
        )
      }

      const userQuestions = supportQuestions.filter((q) => q.email === email)

      return NextResponse.json({
        success: true,
        questions: userQuestions,
        total: userQuestions.length,
      })
    }

    return NextResponse.json(
      { error: "Invalid action" },
      { status: 400 }
    )
  } catch (error) {
    console.error("Support GET error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
