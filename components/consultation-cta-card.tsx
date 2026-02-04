'use client';

import React, { useState } from 'react';
import { MessageCircle, Calendar, Check, X } from 'lucide-react';
import { useGeolocation } from '@/hooks/useGeolocation';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface ConsultationForm {
    name: string;
    email: string;
    company: string;
    service: string;
    preferredDate: string;
    preferredTime: string;
    preferredDay: string;
    message: string;
}

export function ConsultationCtaCard() {
    const { whatsappConfig } = useGeolocation();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState<ConsultationForm>({
        name: '',
        email: '',
        company: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        preferredDay: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);

    const handleTalkToExpert = () => {
        window.open(`https://wa.me/${whatsappConfig.phone}?text=Hi%20TryQu%20Tech%2C%20I%20would%20like%20to%20talk%20to%20an%20expert.`, '_blank');
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDateSelect = (date: Date | undefined) => {
        if (date) {
            const formattedDate = date.toISOString().split('T')[0];
            const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
            setFormData((prev) => ({
                ...prev,
                preferredDate: formattedDate,
                preferredDay: dayOfWeek
            }));
            setShowCalendar(false);
        }
    };

    // Generate time slots (15-minute intervals from 8:00 AM to 6:00 PM)
    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 8; hour < 18; hour++) {
            for (let minute of [0, 15, 30, 45]) {
                const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
                slots.push(timeString);
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitSuccess(true);
                setTimeout(() => {
                    handleCloseModal();
                }, 3000);
            } else {
                alert(data.error || 'Failed to submit consultation request');
            }
        } catch (error) {
            console.error('Error submitting consultation:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSubmitSuccess(false);
        setFormData({
            name: '',
            email: '',
            company: '',
            service: '',
            preferredDate: '',
            preferredTime: '',
            preferredDay: '',
            message: '',
        });
    };

    return (
        <>
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                {/* Background gradient elements */}
                <div className="absolute inset-0 -z-10 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl overflow-hidden p-12 lg:p-16">
                    {/* Main Content */}
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                            Ready to Transform Your Business?
                        </h2>

                        <p className="text-lg text-lime-300 font-semibold mb-4">
                            Start your digital modernization journey with a no-obligation expert consultation
                        </p>

                        <p className="text-base text-slate-300 leading-relaxed mb-8">
                            Connect with our expert team to discuss your enterprise IT needs and discover how TryQ Tech can drive innovation and growth for your organization.
                        </p>
                        {whatsappConfig && (
                            <p className="text-sm text-slate-400 mb-4">
                                📍 {whatsappConfig.country} • WhatsApp: {whatsappConfig.displayPhone}
                            </p>
                        )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button
                            onClick={handleTalkToExpert}
                            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-lime-400 to-lime-500 text-black font-bold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-lime-400/40 hover:scale-105 transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                            <span>Talk to an Expert</span>
                        </button>

                        <button
                            onClick={() => setShowModal(true)}
                            className="group relative px-8 py-4 rounded-full border-2 border-purple-400/50 bg-white/5 backdrop-blur-sm text-white font-bold flex items-center justify-center gap-2 hover:border-purple-400 hover:bg-purple-400/10 hover:shadow-xl hover:shadow-purple-400/20 hover:scale-105 transition-all duration-300"
                        >
                            <Calendar className="w-5 h-5 group-hover:animate-pulse" />
                            <span>Schedule Free Consultation</span>
                        </button>
                    </div>

                    {/* Trust Section */}
                    <div className="pt-8 border-t border-white/10">
                        <p className="text-slate-400 text-sm mb-4">
                            Trusted by Fortune 500 enterprises worldwide
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                <span className="w-2 h-2 rounded-full bg-lime-400"></span>
                                <span>24/7 Expert Support</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                                <span>No Obligation Consultation</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-300">
                                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                <span>Response in 24 Hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
                    <div className="bg-gray-900 rounded-2xl border border-cyan-500/20 max-w-md w-full shadow-2xl">
                        {/* Header */}
                        <div className="p-6 border-b border-cyan-500/10 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-white">Schedule Free Consultation</h2>
                            <button
                                onClick={handleCloseModal}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {/* Content */}
                        {!submitSuccess ? (
                            <form onSubmit={handleFormSubmit} className="p-8 space-y-4">
                                <p className="text-gray-400 mb-6">Let's discuss your enterprise IT needs. We'll guide you every step of the way.</p>

                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Service of Interest</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleFormChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-gray-800 text-white focus:outline-none focus:border-cyan-400/50 transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-gray-800 text-white">Select a service</option>
                                        <option value="development" className="bg-gray-800 text-white">Full-Stack Development</option>
                                        <option value="qa" className="bg-gray-800 text-white">Quality Assurance & Testing</option>
                                        <option value="devops" className="bg-gray-800 text-white">CI/CD & DevOps</option>
                                        <option value="consulting" className="bg-gray-800 text-white">Consulting & Strategy</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Preferred Date & Time</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="col-span-1">
                                            <label className="block text-xs text-gray-400 mb-1">Day</label>
                                            <div className="px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-sm">
                                                {formData.preferredDay || 'Select date'}
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <label className="block text-xs text-gray-400 mb-1">Date</label>
                                            <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                                                <PopoverTrigger asChild>
                                                    <button
                                                        type="button"
                                                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 focus:outline-none focus:border-cyan-400/50 transition-all text-left text-sm"
                                                    >
                                                        {formData.preferredDate ? new Date(formData.preferredDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Select'}
                                                    </button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0 bg-gray-800 border-cyan-500/20" align="start">
                                                    <CalendarComponent
                                                        mode="single"
                                                        selected={formData.preferredDate ? new Date(formData.preferredDate + 'T00:00:00') : undefined}
                                                        onSelect={handleDateSelect}
                                                        disabled={(date) => date < new Date(new Date().toISOString().split('T')[0] + 'T00:00:00')}
                                                        className="bg-gray-800 text-white"
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div className="col-span-1">
                                            <label className="block text-xs text-gray-400 mb-1">Time</label>
                                            <select
                                                name="preferredTime"
                                                value={formData.preferredTime}
                                                onChange={handleFormChange}
                                                required
                                                className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-gray-800 text-white focus:outline-none focus:border-cyan-400/50 transition-all cursor-pointer text-sm appearance-none"
                                            >
                                                <option value="" className="bg-gray-800 text-white">Select time</option>
                                                {timeSlots.map((slot) => (
                                                    <option key={slot} value={slot} className="bg-gray-800 text-white">
                                                        {slot}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleFormChange}
                                        required
                                        rows={3}
                                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all resize-none"
                                        placeholder="Tell us about your enterprise IT needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
                                </button>

                                <p className="text-xs text-gray-500 text-center">We'll follow up within 24 hours.</p>
                            </form>
                        ) : (
                            <div className="p-8 text-center">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Success!</h3>
                                <p className="text-gray-400">We'll be in touch within 24 hours.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
