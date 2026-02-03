"use client"

import { useState } from "react"
import { X, Check, Calendar } from "lucide-react"

interface ScheduleConsultationForm {
    name: string
    email: string
    company: string
    service: string
    preferredDay: string
    preferredDate: string
    preferredTime: string
    message: string
}

interface ScheduleConsultationModalProps {
    isOpen: boolean
    onClose: () => void
    serviceOptions?: Array<{ value: string; label: string }>
}

export function ScheduleConsultationModal({
    isOpen,
    onClose,
    serviceOptions = [
        { value: "development", label: "Full-Stack Development" },
        { value: "qa", label: "Quality Assurance & Testing" },
        { value: "devops", label: "CI/CD & DevOps" },
        { value: "performance", label: "Performance Testing" },
    ],
}: ScheduleConsultationModalProps) {
    const [formData, setFormData] = useState<ScheduleConsultationForm>({
        name: "",
        email: "",
        company: "",
        service: "",
        preferredDay: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const emailResponse = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const emailData = await emailResponse.json()

            if (!emailResponse.ok) {
                alert(emailData.error || "Failed to submit consultation request")
                return
            }

            setSubmitSuccess(true)

            setTimeout(() => {
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    service: "",
                    preferredDay: "",
                    preferredDate: "",
                    preferredTime: "",
                    message: "",
                })
                onClose()
                setSubmitSuccess(false)
            }, 3000)
        } catch (error) {
            console.error("Error submitting consultation:", error)
            alert("An error occurred. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div className="bg-gray-900 rounded-2xl border border-cyan-500/20 w-full max-w-[95vw] sm:max-w-sm md:max-w-md shadow-2xl max-h-[95vh] overflow-y-auto">
                {/* Header */}
                <div className="p-4 md:p-6 border-b border-cyan-500/10 flex justify-between items-start md:items-center gap-3 sticky top-0 bg-gray-900">
                    <div className="flex items-start md:items-center gap-2 md:gap-3 min-w-0">
                        <Calendar className="w-5 md:w-6 h-5 md:h-6 text-cyan-400 flex-shrink-0 mt-1 md:mt-0" />
                        <h2 className="text-lg md:text-2xl font-bold text-white leading-tight break-words">Schedule Free Consultation</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                    >
                        <X className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

                {/* Content */}
                {!submitSuccess ? (
                    <form onSubmit={handleFormSubmit} className="p-4 md:p-8 space-y-3 md:space-y-4">
                        <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6 leading-relaxed">
                            Let's discuss your enterprise IT needs. We'll guide you every step of the way.
                        </p>

                        <div>
                            <label className="block text-xs md:text-sm font-semibold text-white mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                                required
                                className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all text-sm"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-semibold text-white mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                required
                                className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all text-sm"
                                placeholder="john@company.com"
                            />
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-semibold text-white mb-2">Company</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleFormChange}
                                className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all text-sm"
                                placeholder="Your Company"
                            />
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-semibold text-white mb-2">Service of Interest</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleFormChange}
                                required
                                className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-white/10 bg-gray-800 text-white focus:outline-none focus:border-cyan-400/50 transition-all appearance-none cursor-pointer text-sm"
                            >
                                <option value="" className="bg-gray-800 text-white">
                                    Select a service
                                </option>
                                {serviceOptions.map((option) => (
                                    <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-semibold text-white mb-2">Preferred Day</label>
                            <select
                                name="preferredDay"
                                value={formData.preferredDay}
                                onChange={handleFormChange}
                                required
                                className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-white/10 bg-gray-800 text-white focus:outline-none focus:border-cyan-400/50 transition-all appearance-none cursor-pointer text-sm"
                            >
                                <option value="" className="bg-gray-800 text-white">
                                    Select day
                                </option>
                                <option value="Monday" className="bg-gray-800 text-white">
                                    Monday
                                </option>
                                <option value="Tuesday" className="bg-gray-800 text-white">
                                    Tuesday
                                </option>
                                <option value="Wednesday" className="bg-gray-800 text-white">
                                    Wednesday
                                </option>
                                <option value="Thursday" className="bg-gray-800 text-white">
                                    Thursday
                                </option>
                                <option value="Friday" className="bg-gray-800 text-white">
                                    Friday
                                </option>
                                <option value="Saturday" className="bg-gray-800 text-white">
                                    Saturday
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-semibold text-white mb-2">Preferred Date & Time</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                                <input
                                    type="date"
                                    name="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={handleFormChange}
                                    required
                                    min={new Date().toISOString().split("T")[0]}
                                    className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all cursor-pointer text-sm"
                                />
                                <select
                                    name="preferredTime"
                                    value={formData.preferredTime}
                                    onChange={handleFormChange}
                                    required
                                    className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-white/10 bg-gray-800 text-white focus:outline-none focus:border-cyan-400/50 transition-all appearance-none cursor-pointer text-sm"
                                >
                                    <option value="" className="bg-gray-800 text-white">
                                        Select time
                                    </option>
                                    <option value="09:00" className="bg-gray-800 text-white">
                                        09:00 AM
                                    </option>
                                    <option value="10:00" className="bg-gray-800 text-white">
                                        10:00 AM
                                    </option>
                                    <option value="11:00" className="bg-gray-800 text-white">
                                        11:00 AM
                                    </option>
                                    <option value="14:00" className="bg-gray-800 text-white">
                                        02:00 PM
                                    </option>
                                    <option value="15:00" className="bg-gray-800 text-white">
                                        03:00 PM
                                    </option>
                                    <option value="16:00" className="bg-gray-800 text-white">
                                        04:00 PM
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs md:text-sm font-semibold text-white mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleFormChange}
                                required
                                rows={2}
                                className="w-full px-3 md:px-4 py-2 md:py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all resize-none text-sm"
                                placeholder="Tell us about your needs..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full mt-4 md:mt-6 py-2.5 md:py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm md:text-base hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50"
                        >
                            {isSubmitting ? "Scheduling..." : "Schedule Consultation"}
                        </button>

                        <p className="text-xs text-gray-500 text-center mt-3">
                            We'll follow up within 24 hours.
                        </p>
                    </form>
                ) : (
                    <div className="p-4 md:p-8 text-center">
                        <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mx-auto mb-3 md:mb-4">
                            <Check className="w-5 md:w-6 h-5 md:h-6 text-green-400" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">Consultation Scheduled!</h3>
                        <p className="text-xs md:text-sm text-gray-400 mb-3 leading-relaxed">Thank you for booking. Check your email for confirmation details.</p>
                        <p className="text-xs text-gray-500">Our team will be in touch shortly.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
