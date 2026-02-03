"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Award, Briefcase, TrendingUp, Users, Globe, Zap, Target, Code, Shield, Rocket, BookOpen } from "lucide-react"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

// Rich unique member data
const teamMembersData = {
  "1": {
    id: 1,
    name: "Ashish Patel",
    role: "Chief Executive Officer - India Region",
    description: "Enterprise strategy and operations across Asia Pacific. 15+ years in IT transformation and cloud infrastructure.",
    image: "/images/boss.jpeg",
    email: "ashish.patel@tryqu.com",
    department: "Executive Leadership",
    specialty: "Cloud Architecture & Digital Transformation",
    experience: "15+ years",
    color: "#4ade80",
    accentColor: "from-green-500 to-emerald-600",
    achievements: [
      { icon: "🏆", title: "Led 50+ Enterprise Transformations", desc: "Successfully guided major corporations through digital modernization" },
      { icon: "☁️", title: "AWS & Azure Expert", desc: "Certified architect with expertise in multi-cloud strategies" },
      { icon: "👥", title: "Built 200+ Team Members", desc: "Developed and mentored leadership across APAC region" },
      { icon: "📈", title: "300% Revenue Growth", desc: "Driven exponential business expansion in Asia Pacific markets" },
    ],
    stats: {
      projectsLed: 87,
      clientsSatisfaction: 98,
      infrastructureServers: 2500,
      teamSize: 340,
    },
    initiatives: [
      { name: "APAC Cloud Initiative", status: "Completed", progress: 100, impact: "Saved $50M annually" },
      { name: "AI/ML Integration", status: "In Progress", progress: 75, impact: "8 new AI projects" },
      { name: "Security Enhancement", status: "Completed", progress: 100, impact: "99.99% uptime" },
      { name: "Team Development", status: "In Progress", progress: 85, impact: "45 promotions" },
    ],
    keyMetrics: [
      { label: "Project Success Rate", value: 96, unit: "%" },
      { label: "Client Retention", value: 98, unit: "%" },
      { label: "Team Satisfaction", value: 92, unit: "%" },
      { label: "Infrastructure Uptime", value: 99.99, unit: "%" },
    ],
    expertise: ["AWS", "Azure", "Kubernetes", "DevOps", "Enterprise Architecture", "Digital Strategy"],
    awards: [
      "CIO of the Year 2023",
      "Tech Leader Excellence Award",
      "Innovation Pioneer 2022",
      "APAC Business Excellence"
    ]
  },
  "2": {
    id: 2,
    name: "Abhishek",
    role: "Chief Executive Officer - Americas",
    description: "Strategic leadership for North American market. Expertise in enterprise architecture and digital modernization.",
    image: "/images/teammembe.jpeg",
    email: "abhishek@tryqu.com",
    department: "Executive Leadership",
    specialty: "Enterprise Architecture & Market Expansion",
    experience: "18+ years",
    color: "#60a5fa",
    accentColor: "from-blue-500 to-cyan-600",
    achievements: [
      { icon: "🌍", title: "Expanded to 15 US Cities", desc: "Built strong market presence across North American regions" },
      { icon: "🏢", title: "Fortune 500 Partnerships", desc: "Established relationships with leading enterprise clients" },
      { icon: "💼", title: "250M+ Revenue Generated", desc: "Delivered exceptional business growth in Americas" },
      { icon: "🎯", title: "98% Client Retention Rate", desc: "Built unparalleled customer relationships and trust" },
    ],
    stats: {
      enterpriseClients: 156,
      revenueBillion: 250,
      teamMembers: 450,
      yearsInRegion: 8,
    },
    initiatives: [
      { name: "Enterprise Expansion", status: "Completed", progress: 100, impact: "$80M revenue" },
      { name: "Market Intelligence", status: "In Progress", progress: 88, impact: "45 new leads" },
      { name: "Strategic Partnerships", status: "In Progress", progress: 92, impact: "12 alliances" },
      { name: "North American Hub", status: "Completed", progress: 100, impact: "$15M investment" },
    ],
    keyMetrics: [
      { label: "Enterprise Deals Closed", value: 156, unit: "" },
      { label: "Market Share Growth", value: 34, unit: "%" },
      { label: "Partnership Success", value: 95, unit: "%" },
      { label: "Revenue Target Hit", value: 108, unit: "%" },
    ],
    expertise: ["Enterprise Sales", "Market Strategy", "Partnership Development", "Business Development", "P&L Management"],
    awards: [
      "Americas Leader of the Year 2023",
      "Business Growth Excellence",
      "Strategic Visionary Award",
      "Client Champion 2023"
    ]
  },
  "3": {
    id: 3,
    name: "Divaya",
    role: "Chief Executive Officer - Europe",
    description: "Regional expansion and regulatory compliance. Specializes in GDPR, enterprise governance, and cloud operations.",
    image: "/images/member.jpeg",
    email: "divaya@tryqu.com",
    department: "Executive Leadership",
    specialty: "Compliance, Governance & Regulatory Excellence",
    experience: "16+ years",
    color: "#f87171",
    accentColor: "from-rose-500 to-pink-600",
    achievements: [
      { icon: "🔒", title: "GDPR Compliance Master", desc: "Ensured 100% compliance across all European operations" },
      { icon: "📋", title: "8 Regulatory Certifications", desc: "ISO 27001, SOC 2, HIPAA, and more" },
      { icon: "🌐", title: "Expanded to 22 Countries", desc: "Built presence across EMEA region with local expertise" },
      { icon: "⚖️", title: "Zero Compliance Issues", desc: "Maintained perfect regulatory record for 5+ years" },
    ],
    stats: {
      countriesOperated: 22,
      complianceCertifications: 8,
      enterpriseAuditsPassed: 98,
      regulatoryScore: 100,
    },
    initiatives: [
      { name: "GDPR Implementation", status: "Completed", progress: 100, impact: "0 violations" },
      { name: "European Expansion", status: "In Progress", progress: 78, impact: "6 new offices" },
      { name: "Data Governance", status: "Completed", progress: 100, impact: "Enterprise-grade" },
      { name: "Risk Management", status: "In Progress", progress: 82, impact: "99.9% secure" },
    ],
    keyMetrics: [
      { label: "Compliance Score", value: 100, unit: "%" },
      { label: "Countries Operational", value: 22, unit: "" },
      { label: "Audit Pass Rate", value: 98, unit: "%" },
      { label: "Data Security Rating", value: 9.8, unit: "/10" },
    ],
    expertise: ["GDPR", "Data Protection", "Risk Management", "Regulatory Compliance", "Enterprise Governance", "Audit Management"],
    awards: [
      "Compliance Excellence 2023",
      "Regulatory Leader Award",
      "Data Privacy Champion",
      "European Business Excellence"
    ]
  },
}

export default function TeamMemberDetail({ params }: { params: { memberId: string } }) {
  const router = useRouter()
  const [member, setMember] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'achievements' | 'initiatives' | 'analytics'>('overview')

  useEffect(() => {
    const memberData = teamMembersData[params.memberId as keyof typeof teamMembersData]
    if (!memberData) {
      router.push('/')
      return
    }
    setMember(memberData)
  }, [params.memberId, router])

  if (!member) {
    return null
  }

  const performanceChartData = member.keyMetrics.map((m: any) => ({
    name: m.label.split(' ')[0],
    value: m.value,
  }))

  const initiativeChartData = member.initiatives.map((i: any) => ({
    name: i.name.split(' ')[0],
    progress: i.progress,
  }))

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="mb-8 border-lime-400/30 text-lime-400 hover:bg-lime-400/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {/* Hero Section - Member Profile */}
          <div className="relative mb-12 overflow-hidden rounded-2xl">
            <div className={`absolute inset-0 bg-gradient-to-r ${member.accentColor} opacity-20 blur-3xl`} />
            <Card className={`relative border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl overflow-hidden`}>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-12">
                  {/* Left: Profile Image */}
                  <div className="lg:col-span-2 flex flex-col justify-center items-center">
                    <div className="relative w-64 h-64 mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.accentColor} opacity-20 rounded-3xl blur-2xl`} />
                      <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-white/20">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full ${i === 0 ? `bg-[${member.color}]` : 'bg-white/20'}`}
                          style={{
                            width: i === 0 ? '32px' : '12px',
                            backgroundColor: i === 0 ? member.color : undefined,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right: Profile Info */}
                  <div className="lg:col-span-3 flex flex-col justify-center space-y-6">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-2">Executive Profile</p>
                      <h1 className="text-5xl font-bold text-white mb-2">{member.name}</h1>
                      <p className="text-2xl font-semibold" style={{ color: member.color }}>
                        {member.role}
                      </p>
                    </div>

                    <div>
                      <p className="text-lg text-white/80 leading-relaxed mb-4">{member.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20">
                          <span className="text-sm text-white/90">{member.specialty}</span>
                        </div>
                        <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20">
                          <span className="text-sm text-white/90">{member.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 pt-6 border-t border-white/10">
                      {member.stats && Object.entries(member.stats).map(([key, value]: [string, any], i) => (
                        <div key={i}>
                          <p className="text-2xl font-bold" style={{ color: member.color }}>
                            {typeof value === 'number' ? (value > 100 ? `${(value / 1000).toFixed(0)}k+` : value + (key.includes('satisfaction') || key.includes('Satisfaction') ? '%' : '')) : value}
                          </p>
                          <p className="text-xs text-white/60 uppercase tracking-wider mt-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-8 border-b border-white/10 overflow-x-auto pb-0">
            {(['overview', 'achievements', 'initiatives', 'analytics'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap capitalize ${
                  activeTab === tab
                    ? `border-[${member.color}] text-white`
                    : 'border-transparent text-white/60 hover:text-white/80'
                }`}
                style={{
                  borderColor: activeTab === tab ? member.color : undefined,
                  color: activeTab === tab ? 'white' : undefined,
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Key Metrics */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Key Performance Indicators</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {member.keyMetrics.map((metric: any, i: number) => (
                      <Card key={i} className="border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all">
                        <CardContent className="p-6">
                          <p className="text-sm text-white/60 mb-3">{metric.label}</p>
                          <div className="flex items-end gap-2">
                            <p className="text-4xl font-bold text-white">{metric.value}</p>
                            <p className="text-sm text-white/60 mb-1">{metric.unit}</p>
                          </div>
                          <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-1000"
                              style={{
                                width: `${Math.min(metric.value, 100)}%`,
                                backgroundColor: member.color,
                              }}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-3">
                    {member.expertise.map((skill: string, i: number) => (
                      <div
                        key={i}
                        className="px-6 py-3 rounded-full border border-white/20 bg-gradient-to-r from-white/10 to-white/5 hover:border-white/40 transition-all cursor-pointer group"
                      >
                        <span className="text-white/90 group-hover:text-white transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Awards */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Awards & Recognition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {member.awards.map((award: string, i: number) => (
                      <Card key={i} className="border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all group">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Award className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: member.color }} />
                            <p className="text-white/90 group-hover:text-white transition-colors">{award}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {member.achievements.map((achievement: any, i: number) => (
                  <Card
                    key={i}
                    className="border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all group overflow-hidden"
                  >
                    <CardContent className="p-8 relative">
                      <div className="absolute top-0 right-0 w-20 h-20 text-6xl opacity-20 group-hover:opacity-40 transition-all">
                        {achievement.icon}
                      </div>
                      <p className="text-3xl mb-4 text-white">{achievement.icon}</p>
                      <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                      <p className="text-white/70">{achievement.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Initiatives Tab */}
            {activeTab === 'initiatives' && (
              <div className="space-y-4">
                {member.initiatives.map((initiative: any, i: number) => (
                  <Card key={i} className="border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-white">{initiative.name}</h4>
                          <p className="text-sm text-white/60 mt-1">{initiative.impact}</p>
                        </div>
                        <span
                          className={`px-4 py-2 rounded-full text-xs font-semibold ${
                            initiative.status === 'Completed'
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-blue-500/20 text-blue-300'
                          }`}
                        >
                          {initiative.status}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-white/60">Progress</span>
                          <span style={{ color: member.color }} className="font-bold">
                            {initiative.progress}%
                          </span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${initiative.progress}%`,
                              backgroundColor: member.color,
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Performance Metrics Chart */}
                <Card className="border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-white">Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={performanceChartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                        <XAxis dataKey="name" stroke="#ffffff60" style={{ fontSize: '12px' }} />
                        <YAxis stroke="#ffffff60" style={{ fontSize: '12px' }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#1a1a1a',
                            border: `1px solid ${member.color}`,
                            borderRadius: '8px',
                          }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Bar dataKey="value" fill={member.color} radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Initiatives Progress */}
                <Card className="border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-white">Initiatives Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={initiativeChartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                        <XAxis dataKey="name" stroke="#ffffff60" style={{ fontSize: '12px' }} />
                        <YAxis stroke="#ffffff60" style={{ fontSize: '12px' }} domain={[0, 100]} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#1a1a1a',
                            border: `1px solid ${member.color}`,
                            borderRadius: '8px',
                          }}
                          labelStyle={{ color: '#fff' }}
                        />
                        <Bar dataKey="progress" fill={member.color} radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Card className="border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-widest font-semibold mb-2">Email</p>
                    <a href={`mailto:${member.email}`} className="text-lg font-semibold text-white hover:opacity-80 transition-opacity">
                      {member.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-widest font-semibold mb-2">Department</p>
                    <p className="text-lg font-semibold text-white">{member.department}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-widest font-semibold mb-2">Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <p className="text-lg font-semibold text-white">Active</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <AppverseFooter />
    </div>
  )
}
