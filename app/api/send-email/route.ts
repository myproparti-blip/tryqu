import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
    try {
        // Verify Resend API key
        const apiKey = process.env.RESEND_API_KEY
        if (!apiKey || apiKey.trim() === '') {
            console.error('[Email API] Resend API key not configured. Available env keys:', Object.keys(process.env).filter(k => k.includes('RESEND') || k.includes('EMAIL')))
            return NextResponse.json(
                { error: 'Email service is not configured. Please add RESEND_API_KEY to environment variables.' },
                { status: 500 }
            )
        }

        const resend = new Resend(apiKey)

        const body = await request.json()
        const { name, email, company, service, message, preferredDate, preferredTime, preferredDay } = body

        // Validate required fields
        if (!name || !email || !service || !message) {
            console.error('[Email API] Missing required fields:', { name, email, service, message })
            return NextResponse.json(
                { error: 'Missing required fields: name, email, service, and message are required' },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Email subject
        const emailSubject = `New Consultation Request from ${name}`

        // Send email to admin
        // Use Resend's testing domain for development, verified domain for production
        const fromEmail = process.env.NODE_ENV === 'production'
            ? 'TryQu <noreply@tryqu.com>'
            : 'TryQu <onboarding@resend.dev>';

        // In development, use registered Resend email for testing
        // In production, use actual business email with verified domain
        const toEmail = process.env.NODE_ENV === 'production'
            ? 'info@tryqu.com'
            : 'maste1432ra@gmail.com';  // Your registered Resend account email

        const adminEmailResult = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            subject: emailSubject,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1a1a1a; border-bottom: 2px solid #00d4ff; padding-bottom: 10px;">New Consultation Request</h2>
                    <table style="width: 100%; margin: 20px 0; border-collapse: collapse;">
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold; width: 150px; color: #00d4ff;">Name:</td>
                            <td style="padding: 10px;">${name}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold; color: #00d4ff;">Email:</td>
                            <td style="padding: 10px;"><a href="mailto:${email}" style="color: #00d4ff; text-decoration: none;">${email}</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold; color: #00d4ff;">Company:</td>
                            <td style="padding: 10px;">${company || 'Not provided'}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold; color: #00d4ff;">Service:</td>
                            <td style="padding: 10px;">${service}</td>
                        </tr>
                        ${preferredDay && preferredDate && preferredTime ? `
                        <tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px; font-weight: bold; color: #00d4ff;">Preferred Consultation:</td>
                            <td style="padding: 10px;">${preferredDay}, ${preferredDate} at ${preferredTime}</td>
                        </tr>
                        ` : ''}
                    </table>
                    <div style="margin: 20px 0;">
                        <h3 style="color: #00d4ff;">Message:</h3>
                        <p style="background-color: #f5f5f5; padding: 15px; border-left: 3px solid #00d4ff; line-height: 1.6;">
                            ${message.replace(/\n/g, '<br />')}
                        </p>
                    </div>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="color: #999; font-size: 12px; text-align: center;">
                        Submitted at: ${new Date().toLocaleString()}
                    </p>
                </div>
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
            fromEmail,
            environment: process.env.NODE_ENV,
            timestamp: new Date().toISOString(),
        })

        // Success message varies based on environment
        const successMessage = process.env.NODE_ENV === 'production'
            ? 'Consultation request received. Check your email for confirmation from info@tryqu.com.'
            : 'Consultation request received. (Development mode: email sent to maste1432ra@gmail.com for testing)';

        return NextResponse.json(
            {
                success: true,
                message: successMessage,
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
