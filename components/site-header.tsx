"use client"


import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Tag, HelpCircle, FileText, Info, Building2, Package, BookOpen, Briefcase, ChevronDown, MessageCircle, Mail } from "lucide-react"
import { getTechEmoji } from "@/lib/tech-emojis-config"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
    const pathname = usePathname()

    const services = [
        {
            href: "/services",
            label: "All Services",
            icon: Building2,
            description: "Complete Try Qu solutions",
        },
        {
            href: "/cloud-infrastructure",
            label: "Cloud Infrastructure",
            icon: Building2,
            description: "Scalable cloud solutions with AWS, Azure & GCP expertise",
        },
        {
            href: "/custom-development",
            label: "Custom Software Development",
            icon: Package,
            description: "Bespoke applications for enterprise needs",
        },
        {
            href: "/devops-automation",
            label: "DevOps & Automation",
            icon: Package,
            description: "CI/CD pipelines, infrastructure automation & monitoring",
        },
    ]

    const technologyGroups = [
        {
            label: "Frontend Technologies",
            path: "/technologies/frontend",
            description: "User Interface & Experience"
        },
        {
            label: "Backend Technologies",
            path: "/technologies/backend",
            description: "Business Logic & APIs"
        },
        {
            label: "Cloud & Infrastructure",
            path: "/technologies/cloud",
            description: "Scalable & Secure Cloud Platforms"
        },
        {
            label: "DevOps & Automation",
            path: "/technologies/devops",
            description: "Automation, Deployment & Scalability"
        },
        {
            label: "Databases & Data",
            path: "/technologies/databases",
            description: "Data Storage & Performance"
        },
        {
            label: "Testing & QA",
            path: "/technologies/testing",
            description: "Quality, Stability & Reliability"
        },
        {
            label: "Security & Compliance",
            path: "/technologies/security",
            description: "Enterprise Security & Governance"
        },
    ]

    const links = [
        { href: "/faq", label: "FAQ", icon: HelpCircle },
        { href: "/training", label: "Training", icon: BookOpen },
        { href: "/outsourcing", label: "Outsourcing", icon: Briefcase },
        { href: "/About", label: "About", icon: Info },
    ]

    return (
        <>
            <header className="sticky top-0 z-50 p-3">
                <div className="w-full">
                    <div className="flex h-16 items-center justify-between px-6 liquid-glass-header rounded-2xl">
                        {/* Brand Logo */}
                        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                            <div className="p-2.5 rounded-xl bg-gradient-to-br from-lime-400/20 to-lime-400/5 border border-lime-400/30">
                                <Image src="/icons/skitbit-white.svg" alt="TryQu Tech logo" width={24} height={24} className="h-6 w-6" />
                            </div>
                            <span className="text-lg font-bold bg-gradient-to-r from-lime-300 to-white bg-clip-text text-transparent whitespace-nowrap">TryQu Tech</span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden items-center gap-1 text-sm text-white/90 lg:flex flex-1 justify-center px-6">
                            <Link
                                href="/services"
                                className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${pathname === "/services"
                                    ? "text-lime-300 bg-lime-400/10"
                                    : "hover:text-lime-300 hover:bg-lime-400/5"
                                    }`}
                            >
                                Services
                            </Link>

                            {/* Technologies Dropdown */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center gap-1 px-3 py-2 rounded-lg transition-all whitespace-nowrap hover:text-lime-300 hover:bg-lime-400/5">
                                        Technologies
                                        <ChevronDown className="h-4 w-4" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start" className="w-auto bg-black/98 border border-purple-500/30 backdrop-blur-xl p-6">
                                    <div className="mb-6">
                                        <h3 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                                            Technology Groups
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">Organized by purpose & function</p>
                                    </div>
                                    <div className="space-y-2">
                                        {technologyGroups.map((group) => (
                                            <Link
                                                key={group.path}
                                                href={group.path}
                                                className="group flex flex-col px-3 py-2.5 rounded-lg hover:bg-purple-500/20 transition-all duration-200 min-w-64"
                                            >
                                                <span className="font-semibold text-sm text-white group-hover:text-purple-300 transition-colors">{group.label}</span>
                                                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{group.description}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {links.map((l) => {
                                const isActive = pathname === l.href
                                return (
                                    <Link
                                        key={l.href}
                                        href={l.href}
                                        className={`px-3 py-2 rounded-lg transition-all whitespace-nowrap ${isActive
                                            ? "text-lime-300 bg-lime-400/10"
                                            : "hover:text-lime-300 hover:bg-lime-400/5"
                                            }`}
                                    >
                                        {l.label}
                                    </Link>
                                )
                            })}

                        </nav>

                        {/* Contact Us Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="hidden lg:flex ml-4 px-7 py-2 items-center gap-2 rounded-2xl border-2 border-lime-400 bg-transparent text-base font-bold text-lime-400 hover:bg-lime-400/20 hover:border-lime-300 hover:text-lime-200 transition-all duration-200 shadow-lg hover:shadow-lime-400/40 whitespace-nowrap cursor-pointer">
                                    Contact Us
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-auto bg-black/98 border border-lime-400/40 backdrop-blur-xl p-4">
                                <div className="mb-4">
                                    <h3 className="text-sm font-bold text-lime-400">Get in Touch</h3>
                                </div>
                                <div className="space-y-2">
                                    <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg hover:bg-lime-400/20 transition-all text-white text-sm font-medium">
                                        <svg className="h-5 w-5 flex-shrink-0 text-lime-400" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.52-2.52 2.527 2.527 0 0 1 2.524 2.52v6.31A2.528 2.528 0 0 1 8.833 24a2.528 2.528 0 0 1-2.52-2.525v-6.31zM8.833 5.042a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.833 0a2.528 2.528 0 0 1 2.524 2.522v2.52H8.833zM8.833 6.313a2.527 2.527 0 0 1 2.524 2.52 2.527 2.527 0 0 1-2.524 2.524H2.524A2.528 2.528 0 0 1 0 8.833a2.528 2.528 0 0 1 2.524-2.52h6.31zM18.958 8.833a2.528 2.528 0 0 1 2.52-2.52A2.528 2.528 0 0 1 24 8.833a2.528 2.528 0 0 1-2.522 2.524h-2.52V8.833zM17.687 8.833a2.527 2.527 0 0 1-2.52 2.524 2.527 2.527 0 0 1-2.524-2.524V2.524A2.528 2.528 0 0 1 15.167 0a2.528 2.528 0 0 1 2.52 2.524v6.31zM15.167 18.958a2.528 2.528 0 0 1 2.52 2.52A2.528 2.528 0 0 1 15.167 24a2.528 2.528 0 0 1-2.524-2.522v-2.52h2.524zM15.167 17.687a2.527 2.527 0 0 1-2.524-2.52 2.527 2.527 0 0 1 2.524-2.524h6.31a2.528 2.528 0 0 1 2.522 2.524 2.528 2.528 0 0 1-2.522 2.52h-6.31z" />
                                        </svg>
                                        <span>Slack</span>
                                    </a>
                                    <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg hover:bg-lime-400/20 transition-all text-white text-sm font-medium">
                                        <svg className="h-5 w-5 flex-shrink-0 text-lime-400" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm10 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm3.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM4 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4 8.5a1.5 1.5 0 111-3 1.5 1.5 0 01-1 3zm6 0a1.5 1.5 0 111-3 1.5 1.5 0 01-1 3zm8-2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        </svg>
                                        <span>Teams</span>
                                    </a>
                                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg hover:bg-lime-400/20 transition-all text-white text-sm font-medium">
                                        <svg className="h-5 w-5 flex-shrink-0 text-lime-400" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.982 1.313c-1.557.83-2.982 2.119-4.058 3.724-1.058 1.589-1.648 3.423-1.628 5.318.037 3.924 3.232 7.12 7.158 7.12h.009c1.44 0 2.84-.352 4.116-1.021l5.35 1.401-.001-5.404c.755-1.159 1.171-2.515 1.171-3.907 0-5.34-4.359-9.68-9.73-9.68m8.81 18.108l-.854 2.846c-1.948.881-4.084 1.368-6.312 1.368-6.656 0-12.08-5.424-12.08-12.08 0-2.227.484-4.357 1.357-6.299L2.255.015h2.846c1.948-.881 4.084-1.368 6.312-1.368 6.656 0 12.08 5.424 12.08 12.08 0 2.227-.484 4.357-1.357 6.299l1.127 6.09z" />
                                        </svg>
                                        <span>WhatsApp</span>
                                    </a>
                                    <a href="mailto:contact@tryqu.com" className="flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-lg hover:bg-lime-400/20 transition-all text-white text-sm font-medium">
                                        <Mail className="h-5 w-5 flex-shrink-0 text-lime-400" />
                                        <span>Email</span>
                                    </a>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>



                        {/* Mobile Nav */}
                        <div className="lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="border-neutral-700 bg-neutral-900/80 text-neutral-200 hover:bg-neutral-800 h-10 w-10"
                                    >
                                        <Menu className="h-5 w-5" />
                                        <span className="sr-only">Open menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="liquid-glass border-neutral-800 p-0 w-72 flex flex-col">
                                    {/* Brand Header */}
                                    <div className="flex items-center gap-2 px-4 py-5 border-b border-neutral-800">
                                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-lime-400/20 to-lime-400/5 border border-lime-400/30">
                                            <Image src="/icons/skitbit-white.svg" alt="TryQu Tech logo" width={24} height={24} className="h-6 w-6" />
                                        </div>
                                        <span className="font-bold bg-gradient-to-r from-lime-300 to-white bg-clip-text text-transparent text-base">TryQu Tech</span>
                                    </div>

                                    {/* Nav Links */}
                                    <nav className="flex flex-col gap-0.5 mt-3 px-2 text-neutral-200 overflow-y-auto flex-1">
                                        <Link
                                            href="/services"
                                            className={`flex items-center gap-3 px-4 py-3 transition-all rounded-lg ${pathname === "/services"
                                                ? "bg-lime-400/10 text-lime-300 border-l-2 border-lime-300"
                                                : "hover:bg-lime-400/5 hover:text-lime-300"
                                                }`}
                                        >
                                            <span className="inline-flex items-center justify-center w-5 h-5">
                                                <Building2 className="h-4 w-4" />
                                            </span>
                                            <span className="text-sm font-medium">Services</span>
                                        </Link>

                                        {/* Technologies Collapsible */}
                                        <details className="group">
                                            <summary className="flex items-center gap-3 px-4 py-3 transition-all rounded-lg cursor-pointer hover:bg-lime-400/5 hover:text-lime-300">
                                                <span className="inline-flex items-center justify-center w-5 h-5">
                                                    <Package className="h-4 w-4" />
                                                </span>
                                                <span className="text-sm font-medium">Technologies</span>
                                                <ChevronDown className="h-4 w-4 ml-auto transition-transform group-open:rotate-180" />
                                            </summary>
                                            <div className="bg-neutral-950/60 border-l-2 border-neutral-700 ml-6 mt-0.5">
                                                {technologyGroups.map((group) => (
                                                    <Link key={group.path} href={group.path} className="flex flex-col px-4 py-2.5 text-xs text-neutral-400 hover:text-lime-300 hover:bg-neutral-900/50 transition-colors cursor-pointer block">
                                                        <span className="font-medium text-neutral-300">{group.label}</span>
                                                        <span className="text-neutral-500 text-xs">{group.description}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </details>

                                        {links.map((l) => {
                                            const isActive = pathname === l.href
                                            return (
                                                <Link
                                                    key={l.href}
                                                    href={l.href}
                                                    className={`flex items-center gap-3 px-4 py-3 transition-all rounded-lg ${isActive
                                                        ? "bg-lime-400/10 text-lime-300 border-l-2 border-lime-300"
                                                        : "hover:bg-lime-400/5 hover:text-lime-300"
                                                        }`}
                                                >
                                                    <span className="inline-flex items-center justify-center w-5 h-5">
                                                        <l.icon className="h-4 w-4" />
                                                    </span>
                                                    <span className="text-sm font-medium">{l.label}</span>
                                                </Link>
                                            )
                                        })}

                                        {/* Contact Us Collapsible */}
                                        <details className="group">
                                            <summary className="flex items-center gap-3 px-4 py-3 transition-all rounded-lg cursor-pointer hover:bg-lime-400/5 hover:text-lime-300">
                                                <span className="inline-flex items-center justify-center w-5 h-5">
                                                    <MessageCircle className="h-4 w-4" />
                                                </span>
                                                <span className="text-sm font-medium">Contact Us</span>
                                                <ChevronDown className="h-4 w-4 ml-auto transition-transform group-open:rotate-180" />
                                            </summary>
                                            <div className="bg-neutral-950/60 border-l-2 border-neutral-700 ml-6 mt-0.5">
                                                <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 text-neutral-400 hover:text-lime-300 hover:bg-neutral-900/50 transition-colors">
                                                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.52-2.52 2.527 2.527 0 0 1 2.524 2.52v6.31A2.528 2.528 0 0 1 8.833 24a2.528 2.528 0 0 1-2.52-2.525v-6.31zM8.833 5.042a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.833 0a2.528 2.528 0 0 1 2.524 2.522v2.52H8.833zM8.833 6.313a2.527 2.527 0 0 1 2.524 2.52 2.527 2.527 0 0 1-2.524 2.524H2.524A2.528 2.528 0 0 1 0 8.833a2.528 2.528 0 0 1 2.524-2.52h6.31zM18.958 8.833a2.528 2.528 0 0 1 2.52-2.52A2.528 2.528 0 0 1 24 8.833a2.528 2.528 0 0 1-2.522 2.524h-2.52V8.833zM17.687 8.833a2.527 2.527 0 0 1-2.52 2.524 2.527 2.527 0 0 1-2.524-2.524V2.524A2.528 2.528 0 0 1 15.167 0a2.528 2.528 0 0 1 2.52 2.524v6.31zM15.167 18.958a2.528 2.528 0 0 1 2.52 2.52A2.528 2.528 0 0 1 15.167 24a2.528 2.528 0 0 1-2.524-2.522v-2.52h2.524zM15.167 17.687a2.527 2.527 0 0 1-2.524-2.52 2.527 2.527 0 0 1 2.524-2.524h6.31a2.528 2.528 0 0 1 2.522 2.524 2.528 2.528 0 0 1-2.522 2.52h-6.31z" />
                                                    </svg>
                                                    <span className="text-sm">Slack</span>
                                                </a>
                                                <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 text-neutral-400 hover:text-lime-300 hover:bg-neutral-900/50 transition-colors">
                                                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M19.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10 7.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm10 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm3.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM4 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4 8.5a1.5 1.5 0 111-3 1.5 1.5 0 01-1 3zm6 0a1.5 1.5 0 111-3 1.5 1.5 0 01-1 3zm8-2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                                    </svg>
                                                    <span className="text-sm">Teams</span>
                                                </a>
                                                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 text-neutral-400 hover:text-lime-300 hover:bg-neutral-900/50 transition-colors">
                                                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.982 1.313c-1.557.83-2.982 2.119-4.058 3.724-1.058 1.589-1.648 3.423-1.628 5.318.037 3.924 3.232 7.12 7.158 7.12h.009c1.44 0 2.84-.352 4.116-1.021l5.35 1.401-.001-5.404c.755-1.159 1.171-2.515 1.171-3.907 0-5.34-4.359-9.68-9.73-9.68m8.81 18.108l-.854 2.846c-1.948.881-4.084 1.368-6.312 1.368-6.656 0-12.08-5.424-12.08-12.08 0-2.227.484-4.357 1.357-6.299L2.255.015h2.846c1.948-.881 4.084-1.368 6.312-1.368 6.656 0 12.08 5.424 12.08 12.08 0 2.227-.484 4.357-1.357 6.299l1.127 6.09z" />
                                                    </svg>
                                                    <span className="text-sm">WhatsApp</span>
                                                </a>
                                                <a href="mailto:contact@tryqu.com" className="flex items-center gap-3 px-4 py-2.5 text-neutral-400 hover:text-lime-300 hover:bg-neutral-900/50 transition-colors">
                                                    <Mail className="h-4 w-4" />
                                                    <span className="text-sm">Email</span>
                                                </a>
                                            </div>
                                        </details>
                                    </nav>


                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
