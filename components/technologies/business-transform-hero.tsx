'use client';

import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';

export function BusinessTransformHero() {
    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center py-24 px-6 lg:px-12">
            {/* Background gradient */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                    Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Business</span>?
                </h1>

                <p className="text-lg lg:text-xl text-gray-300 mb-6">
                    Start your digital modernization journey with a no-obligation expert consultation
                </p>

                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    Connect with our expert team to discuss your enterprise IT needs and discover how TryQu Tech can drive innovation and growth for your organization.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                    <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2 group">
                        <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Talk to an Expert
                    </button>
                    <button className="px-8 py-4 border-2 border-green-500/50 text-white font-semibold rounded-lg hover:border-green-400 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-2 group">
                        <Calendar className="w-5 h-5" />
                        Schedule Free Consultation
                    </button>
                </div>

                {/* Trust section */}
                <div className="space-y-4">
                    <p className="text-gray-500 text-sm">Trusted by Fortune 500 enterprises worldwide</p>
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>24/7 Expert Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>No Obligation Consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>Response in 24 Hours</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
