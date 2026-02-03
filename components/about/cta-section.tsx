'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Phone, Mail, X, Check } from 'lucide-react';

interface ConsultationForm {
  name: string
  email: string
  company: string
  service: string
  message: string
}

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState<ConsultationForm>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
     e.preventDefault()
     setIsSubmitting(true)
     try {
       const response = await fetch('/api/send-email', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       })

       const data = await response.json()

       if (response.ok) {
         // Show success message
         setSubmitSuccess(true)
         // Reset form after delay
         setTimeout(() => {
           handleCloseModal()
         }, 3000)
       } else {
         alert(data.error || 'Failed to submit consultation request')
       }
     } catch (error) {
       console.error('Error submitting consultation:', error)
       alert('An error occurred. Please try again.')
     } finally {
       setIsSubmitting(false)
     }
   }

  const handleCloseModal = () => {
    setShowModal(false)
    setSubmitSuccess(false)
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    })
  }

  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Main CTA */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400">
              Ready to Transform
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Your Enterprise?
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can architect intelligent, scalable solutions that drive your organization forward. 
            Our experts are ready to understand your challenges and design your future.
          </p>
        </div>

        {/* CTA Buttons */}
         <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 ${
           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
         }`}>
           <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-lime-400 to-lime-500 text-black font-semibold hover:shadow-lg hover:shadow-lime-400/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
             Talk to an Expert
             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
           </button>
           <button onClick={() => setShowModal(true)} className="px-8 py-4 rounded-xl border-2 border-purple-400/50 bg-white/5 backdrop-blur-sm text-white font-semibold hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 hover:scale-105">
             Schedule Free Consultation
           </button>
         </div>

        {/* Contact Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-all duration-300">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">Sales Inquiry</h3>
                <p className="text-sm text-slate-400">TryQu Tech</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              Our sales team is ready to discuss how we can help scale your infrastructure.
            </p>
            <a href="tel:+1-800-TECH-NOW" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold text-sm">
              +1 (800) TECH-NOW
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">Technical Discussion</h3>
                <p className="text-sm text-slate-400">Architecture & implementation</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              Get technical insights from our engineering leadership and solution architects.
            </p>
            <a href="mailto:tryqutech@gmail.com" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold text-sm">
              tryqutech@gmail.com
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Features List */}
        <div className={`p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-8">What Happens Next</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Discovery Call</h4>
                  <p className="text-sm text-slate-300">30-minute conversation about your goals and challenges.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Technical Assessment</h4>
                  <p className="text-sm text-slate-300">Deep dive into your current infrastructure and needs.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Custom Proposal</h4>
                  <p className="text-sm text-slate-300">Tailored solution architecture and roadmap.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Partnership Launch</h4>
                  <p className="text-sm text-slate-300">Begin your transformation journey together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-slate-400 text-sm mb-6">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['Fortune 500', 'Global 2000', 'Unicorns', 'Startups', 'Government'].map((org, i) => (
              <div key={i} className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 text-sm font-medium">
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

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
                  {isSubmitting ? "Submitting..." : "Schedule Consultation"}
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
      </section>
      );
      }
