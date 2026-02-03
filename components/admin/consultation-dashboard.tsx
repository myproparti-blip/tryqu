"use client"

import { useState, useEffect, useCallback } from "react"
import { Wifi, WifiOff, RefreshCw, Filter, Search, Mail, Phone, Clock } from "lucide-react"
import { useConsultationRealtime } from "@/hooks/useConsultationRealtime"

interface Consultation {
    id: string
    name: string
    email: string
    company: string
    service: string
    message: string
    timestamp: string
    status: 'pending' | 'contacted' | 'scheduled' | 'completed'
}

export function ConsultationDashboard() {
    const [consultations, setConsultations] = useState<Consultation[]>([])
    const [filteredConsultations, setFilteredConsultations] = useState<Consultation[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const { isConnected } = useConsultationRealtime((data) => {
        // Add new consultation to list when received in real-time
        if (data && data.id) {
            setConsultations(prev => {
                const exists = prev.find(c => c.id === data.id)
                if (exists) return prev
                return [data, ...prev]
            })
        }
    })

    // Load consultations
    const loadConsultations = useCallback(async () => {
        try {
            setIsLoading(true)
            setError(null)

            const url = new URL('/api/consultations', window.location.origin)
            if (statusFilter) {
                url.searchParams.append('status', statusFilter)
            }
            if (searchTerm) {
                url.searchParams.append('email', searchTerm)
            }

            const response = await fetch(url.toString())
            if (!response.ok) throw new Error('Failed to load consultations')

            const result = await response.json()
            setConsultations(result.data || [])
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to load consultations'
            setError(message)
        } finally {
            setIsLoading(false)
        }
    }, [statusFilter, searchTerm])

    // Load consultations on mount and when filters change
    useEffect(() => {
        loadConsultations()
    }, [loadConsultations])

    // Filter consultations
    useEffect(() => {
        let filtered = consultations

        if (searchTerm) {
            filtered = filtered.filter(c =>
                c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                c.company.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        if (statusFilter) {
            filtered = filtered.filter(c => c.status === statusFilter)
        }

        setFilteredConsultations(filtered)
    }, [consultations, searchTerm, statusFilter])

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
            case 'contacted': return 'bg-blue-500/10 border-blue-500/30 text-blue-400'
            case 'scheduled': return 'bg-purple-500/10 border-purple-500/30 text-purple-400'
            case 'completed': return 'bg-green-500/10 border-green-500/30 text-green-400'
            default: return 'bg-gray-500/10 border-gray-500/30 text-gray-400'
        }
    }

    const formatDate = (timestamp: string) => {
        return new Date(timestamp).toLocaleString()
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Consultation Dashboard</h1>
                        <p className="text-gray-400">Manage and track all consultation requests in real-time</p>
                    </div>

                    {/* Real-time Connection Status */}
                    <div className="flex items-center gap-2">
                        {isConnected ? (
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400">
                                <Wifi className="w-4 h-4 animate-pulse" />
                                <span className="text-sm">Connected</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400">
                                <WifiOff className="w-4 h-4 animate-pulse" />
                                <span className="text-sm">Reconnecting...</span>
                            </div>
                        )}

                        <button
                            onClick={loadConsultations}
                            disabled={isLoading}
                            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50"
                            title="Refresh consultations"
                        >
                            <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-gray-400 text-sm">Total Consultations</p>
                        <p className="text-3xl font-bold text-cyan-400">{consultations.length}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-gray-400 text-sm">Pending</p>
                        <p className="text-3xl font-bold text-yellow-400">
                            {consultations.filter(c => c.status === 'pending').length}
                        </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-gray-400 text-sm">Scheduled</p>
                        <p className="text-3xl font-bold text-purple-400">
                            {consultations.filter(c => c.status === 'scheduled').length}
                        </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-gray-400 text-sm">Completed</p>
                        <p className="text-3xl font-bold text-green-400">
                            {consultations.filter(c => c.status === 'completed').length}
                        </p>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="mb-6 flex gap-4 flex-wrap">
                <div className="flex-1 min-w-64">
                    <div className="relative">
                        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search by name, email, or company..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-400" />
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400/50"
                    >
                        <option value="">All Statuses</option>
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                    {error}
                </div>
            )}

            {/* Consultations List */}
            <div className="space-y-4">
                {isLoading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin">
                            <RefreshCw className="w-8 h-8 text-cyan-400" />
                        </div>
                        <p className="mt-4 text-gray-400">Loading consultations...</p>
                    </div>
                ) : filteredConsultations.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                        No consultations found
                    </div>
                ) : (
                    filteredConsultations.map((consultation) => (
                        <div
                            key={consultation.id}
                            className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-semibold text-white">{consultation.name}</h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(consultation.status)}`}>
                                            {consultation.status.charAt(0).toUpperCase() + consultation.status.slice(1)}
                                        </span>
                                    </div>

                                    <p className="text-sm text-gray-500">{consultation.id}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="flex items-start gap-3">
                                    <Mail className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Email</p>
                                        <a href={`mailto:${consultation.email}`} className="text-white hover:text-cyan-400">
                                            {consultation.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">Company</p>
                                        <p className="text-white">{consultation.company || 'Not provided'}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                <p className="text-xs text-gray-400 mb-2 uppercase">Service</p>
                                <p className="text-cyan-400 font-semibold uppercase">{consultation.service}</p>
                            </div>

                            <div className="mb-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                <p className="text-xs text-gray-400 mb-2 uppercase">Message</p>
                                <p className="text-gray-200 whitespace-pre-wrap text-sm">{consultation.message}</p>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Clock className="w-4 h-4" />
                                {formatDate(consultation.timestamp)}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {filteredConsultations.length > 0 && (
                <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400">
                    Showing {filteredConsultations.length} of {consultations.length} consultations
                </div>
            )}
        </div>
    )
}
