import { NextRequest, NextResponse } from "next/server"

// Admin credentials (in production, use database and hashed passwords)
// This should be from environment variables
const ADMIN_CREDENTIALS = {
  email: process.env.ADMIN_EMAIL || "admin@tryqu.tech",
  password: process.env.ADMIN_PASSWORD || "Admin@12345",
}

interface LoginRequest {
  email: string
  password: string
}

// Generate a simple JWT-like token (in production, use proper JWT)
function generateToken(adminId: string): string {
  const payload = {
    adminId,
    iat: Date.now(),
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  }
  // Simple base64 encoding (NOT secure for production - use proper JWT)
  return Buffer.from(JSON.stringify(payload)).toString("base64")
}

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      )
    }

    // Validate credentials
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      // Use email as consistent adminId for same admin
      const adminId = "admin_" + email.replace(/[^a-zA-Z0-9]/g, "_")
      const token = generateToken(adminId)

      return NextResponse.json({
        success: true,
        token,
        adminId,
        email: email,
      })
    } else {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error("Admin login error:", error)
    return NextResponse.json(
      { message: "An error occurred during login" },
      { status: 500 }
    )
  }
}
