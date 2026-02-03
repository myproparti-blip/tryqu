import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
    try {
        // Verify Resend API key
        const apiKey = process.env.RESEND_API_KEY
        if (!apiKey || apiKey.trim() === '') {
            console.error('[Email API] Resend API key not configured')
            return NextResponse.json(
                { error: 'Email service is not configured' },
                { status: 500 }
            )
        }

        const resend = new Resend(apiKey)

        const { name, email, company, service, message, preferredDate, preferredTime, preferredDay } = await request.json()

        // Validate required fields
        if (!name || !email || !service || !message || !preferredDate || !preferredTime || !preferredDay) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, service, message, preferredDate, preferredTime, and preferredDay are required' },
                { status: 400 }
            )
        }

        // Email subject
        const emailSubject = `New Consultation Request from ${name}`

        // Send email to admin
        const adminEmailResult = await resend.emails.send({
            from: 'Consultation <onboarding@resend.dev>',
            to: 'maste1432ra@gmail.com',
            subject: emailSubject,
            html: `
                  <h2>New Consultation Request</h2>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                  <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                  <p><strong>Service:</strong> ${service}</p>
                  <p><strong>Preferred Consultation:</strong> ${preferredDay}, ${preferredDate} at ${preferredTime}</p>
                  <h3>Message:</h3>
                  <p>${message.replace(/\n/g, '<br>')}</p>
                  <hr>
                  <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
              `,
        })

        if (adminEmailResult.error) {
            console.error('[Email API] Failed to send admin email:', adminEmailResult.error)
            throw new Error(`Admin email failed: ${adminEmailResult.error.message}`)
        }

        // Note: User confirmation email skipped due to Resend testing mode limitations
        // Enable this when Resend account is upgraded to production
        // if (process.env.NODE_ENV === 'production') {
        //     const userEmailResult = await resend.emails.send({...})
        // }
        console.log('[Email API] User confirmation email skipped (Resend in testing mode)')

        console.log('[Email API] Consultation email sent successfully', {
            name,
            email,
            service,
            preferredDay,
            preferredDate,
            preferredTime,
            timestamp: new Date().toISOString(),
        })

        return NextResponse.json(
            {
                success: true,
                message: 'Consultation request received. Check your email for confirmation.',
                data: { name, email, company, service, preferredDay, preferredDate, preferredTime },
            },
            { status: 200 }
        )
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error'

        console.error('[Email API Error]', {
            message: errorMessage,
            timestamp: new Date().toISOString(),
            ...(process.env.NODE_ENV === 'development' && { stack: error instanceof Error ? error.stack : undefined }),
        })

        return NextResponse.json(
            {
                error: 'Failed to send email',
                ...(process.env.NODE_ENV === 'development' && { details: errorMessage }),
            },
            { status: 500 }
        )
    }
}
