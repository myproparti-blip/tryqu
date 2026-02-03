"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Mail, Phone, MessageSquare, X, CheckCircle, AlertCircle, Wifi, WifiOff } from "lucide-react"
import { useConsultationRealtime } from "@/hooks/useConsultationRealtime"

interface SubmittedData {
    name: string
    email: string
    company: string
    service: string
    message: string
    timestamp: string
    consultationId: string
}

export function ServiceCTARealtime() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null)
    const [showModal, setShowModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    // Real-time connection hook
    const { isConnected, error: connectionError } = useConsultationRealtime((data) => {
        // Handle incoming real-time updates
        console.log('Real-time update received:', data)
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrorMessage("")

        try {
            const response = await fetch("/api/consultations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || "Failed to send consultation request")
            }

            setSubmitStatus("success")
            setSubmittedData({
                ...formData,
                timestamp: new Date().toLocaleString(),
                consultationId: result.consultationId,
            })
            setShowModal(true)
            setFormData({ name: "", email: "", company: "", service: "", message: "" })

            // Auto-dismiss after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000)
        } catch (error) {
            let errorMsg = "Something went wrong. Please try again."

            if (error instanceof Error) {
                errorMsg = error.message
            } else if (typeof error === "string") {
                errorMsg = error
            }

            setErrorMessage(errorMsg)
            setSubmitStatus("error")

            // Auto-dismiss after 6 seconds for errors
            setTimeout(() => setSubmitStatus("idle"), 6000)
        } finally {
            setIsSubmitting(false)
        }
    }

    const closeModal = () => setShowModal(false)

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-blue-950/20 to-black relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            {/* Real-time Connection Status */}
            <div className="fixed top-4 right-4 z-40">
                {isConnected ? (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                        <Wifi className="w-4 h-4 animate-pulse" />
                        <span>Real-time connected</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm">
                        <WifiOff className="w-4 h-4 animate-pulse" />
                        <span>Reconnecting...</span>
                    </div>
                )}
            </div>

            <div className="relative container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: CTA Info */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-4 inline-block max-w-fit px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                            <p className="text-sm font-semibold text-cyan-400">GET IN TOUCH</p>
                        </div>

                        <h2 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-6">
                            Ready to Transform Your Enterprise?
                        </h2>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Our expert team is ready to discuss how we can help you achieve your digital transformation goals. Real-time consultation updates delivered instantly.
                        </p>

                        {/* Contact Options */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition-colors">
                                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-400">Call us anytime</p>
                                    <p className="text-lg font-semibold text-white"> 9033452895</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition-colors">
                                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-400">Email us</p>
                                    <p className="text-lg font-semibold text-white">tryqutech@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition-colors">
                                <MessageSquare className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-sm text-gray-400">Chat with us</p>
                                    <p className="text-lg font-semibold text-white">Live chat available 24/7</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                            <div>
                                <p className="text-3xl font-bold text-cyan-400">30+</p>
                                <p className="text-sm text-gray-400">Enterprise Clients</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-cyan-400">20+</p>
                                <p className="text-sm text-gray-400">Expert Engineers</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-cyan-400">99.99%</p>
                                <p className="text-sm text-gray-400">Uptime SLA</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="relative">
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 sm:p-12 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">Schedule a Consultation</h3>

                            <div className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name <span className="text-cyan-400">*</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        aria-label="Enter your full name"
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address <span className="text-cyan-400">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        aria-label="Enter your email address"
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        placeholder="Your company"
                                    />
                                </div>

                                {/* Service Interest */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Service of Interest <span className="text-cyan-400">*</span></label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        aria-label="Select service of interest"
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="design">UI/UX Design & Development</option>
                                        <option value="development">Custom Development</option>
                                        <option value="infrastructure">Infrastructure Management</option>
                                        <option value="transformation">Digital Transformation</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message <span className="text-cyan-400">*</span></label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        required
                                        aria-required="true"
                                        aria-label="Describe your project or inquiry"
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    aria-busy={isSubmitting}
                                    aria-label={isSubmitting ? "Sending consultation request" : "Send consultation request"}
                                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting
                                        ? "bg-cyan-500/50 text-white cursor-not-allowed opacity-75"
                                        : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95"
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </button>

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 flex items-center gap-2" role="alert">
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                        <span>Thank you! Your request has been submitted successfully.</span>
                                    </div>
                                )}
                                {submitStatus === "error" && (
                                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 flex items-start gap-2" role="alert">
                                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold">Error</p>
                                            <p className="text-sm mt-1">{errorMessage || "Something went wrong. Please try again or contact us directly."}</p>
                                            {errorMessage.includes("Email service") && (
                                                <p className="text-xs mt-2 opacity-80">
                                                    Please try calling us at 903-345-2895 or email tryqutech@gmail.com
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <p className="text-xs text-gray-500 mt-6">
                                We respect your privacy. Your information will be kept confidential and used only to contact you about your inquiry.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showModal && submittedData && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-gray-900 rounded-xl border border-cyan-500/30 max-w-2xl w-full my-8 shadow-2xl">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-b border-cyan-500/20 p-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-green-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">Consultation Submitted!</h2>
                            </div>
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            {/* Confirmation Message */}
                            <div className="mb-8 p-6 rounded-lg bg-green-500/5 border border-green-500/20">
                                <p className="text-green-400 font-semibold mb-2">✓ Request Received</p>
                                <p className="text-gray-300">
                                    Your consultation request has been received and confirmation emails have been sent to both you and our team. You can track updates in real-time.
                                </p>
                            </div>

                            {/* Reference ID */}
                            <div className="mb-8 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Reference ID</p>
                                <p className="text-lg font-mono font-semibold text-cyan-400">{submittedData.consultationId}</p>
                                <p className="text-xs text-gray-500 mt-2">Keep this ID for your records</p>
                            </div>

                            {/* Submitted Data Display */}
                            <h3 className="text-lg font-semibold text-white mb-4">Submission Details</h3>

                            <div className="space-y-4 mb-8">
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Full Name</p>
                                    <p className="text-lg font-semibold text-white">{submittedData.name}</p>
                                </div>

                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email Address</p>
                                    <p className="text-lg font-semibold text-white flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-cyan-400" />
                                        {submittedData.email}
                                    </p>
                                </div>

                                {submittedData.company && (
                                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Company</p>
                                        <p className="text-lg font-semibold text-white">{submittedData.company}</p>
                                    </div>
                                )}

                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Service of Interest</p>
                                    <p className="text-lg font-semibold text-cyan-400 uppercase">{submittedData.service}</p>
                                </div>

                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Message</p>
                                    <p className="text-gray-200 whitespace-pre-wrap">{submittedData.message}</p>
                                </div>

                                <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Submitted At</p>
                                    <p className="text-sm text-gray-300">{submittedData.timestamp}</p>
                                </div>
                            </div>

                            {/* Real-time Status Indicator */}
                            <div className="p-6 rounded-lg bg-blue-500/5 border border-blue-500/20 mb-8">
                                <div className="flex items-center gap-2 mb-3">
                                    {isConnected ? (
                                        <>
                                            <Wifi className="w-4 h-4 text-green-400 animate-pulse" />
                                            <p className="text-white font-semibold">Real-time Updates Enabled</p>
                                        </>
                                    ) : (
                                        <>
                                            <WifiOff className="w-4 h-4 text-orange-400" />
                                            <p className="text-white font-semibold">Connecting...</p>
                                        </>
                                    )}
                                </div>
                                <p className="text-sm text-gray-300">
                                    You'll receive live notifications as our team reviews and updates your consultation status.
                                </p>
                            </div>

                            {/* Next Steps */}
                            <div className="p-6 rounded-lg bg-blue-500/5 border border-blue-500/20 mb-8">
                                <h4 className="text-white font-semibold mb-3">What Happens Next?</h4>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400">✓</span>
                                        <span>Confirmation emails sent to your inbox</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400">✓</span>
                                        <span>Our team reviews your request within 24-48 hours</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400">✓</span>
                                        <span>You'll receive real-time updates on consultation status</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-cyan-400">✓</span>
                                        <span>Follow-up email to schedule your consultation</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Options */}
                            <div className="mb-8">
                                <p className="text-gray-400 text-sm mb-4">Need immediate assistance?</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <a
                                        href="tel:+18008798242"
                                        className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition-colors text-center"
                                    >
                                        <Phone className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                                        <p className="text-xs text-gray-400">Call</p>
                                        <p className="text-sm font-semibold text-white">+1 (800) TRYQ</p>
                                    </a>
                                    <a
                                        href="mailto:tryqutech@gmail.com"
                                        className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400/50 transition-colors text-center"
                                    >
                                        <Mail className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                                        <p className="text-xs text-gray-400">Email</p>
                                        <p className="text-sm font-semibold text-white">tryqutech@gmail.com</p>
                                    </a>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
