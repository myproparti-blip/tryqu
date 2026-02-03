"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, Eye, EyeOff, Lock, Mail, Phone as PhoneIcon, Sparkles, ArrowRight } from "lucide-react"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [loginMode, setLoginMode] = useState<"email" | "phone">("email")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simple client-side authentication
    setTimeout(() => {
      const validEmails = ["admin@tryqu.com", "admin@tryqu-tech.com", "addy@tryqu.com"]
      const validPassword = "TryQu@2025Secure"
      const validPhone = "+919033452895"
      
      let isAuthenticated = false

      if (loginMode === "email") {
        // Email login validation
        if (validEmails.includes(email.toLowerCase()) && password === validPassword) {
          isAuthenticated = true
        }
      } else {
        // Phone login validation
        const cleanPhone = phone.replace(/\s+/g, "")
        if (cleanPhone === validPhone && password === validPassword) {
          isAuthenticated = true
        }
      }

      if (isAuthenticated) {
        // Set a cookie that expires in 24 hours
        const expiryDate = new Date()
        expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000)
        document.cookie = `admin-session=authenticated; path=/; expires=${expiryDate.toUTCString()}`
        // Navigate to admin dashboard with small delay to ensure cookie is set
        setTimeout(() => {
          router.push("/")
        }, 100)
      } else {
        setError(
          loginMode === "email"
            ? "Invalid email or password"
            : "Invalid phone number or password"
        )
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col md:flex-row overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Left side - Enhanced branding panel */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-600/10 via-cyan-600/10 to-purple-600/10 backdrop-blur-sm p-12 flex-col justify-between relative z-10">
        {/* Top branding */}
        <div>
          {/* TryQu Tech Header Logo */}
          <div className="flex items-center gap-3 mb-16">
            <div className="relative flex items-center justify-center">
              <Image 
                src="/icons/skitbit-white.svg" 
                alt="TryQu Tech" 
                width={32} 
                height={32}
                className="h-8 w-8"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-lime-300 to-lime-400 bg-clip-text text-transparent">TRYQU TECH</span>
          </div>

          {/* Welcome message */}
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-white leading-tight">
              Welcome to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">TryQu</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-md leading-relaxed">
              Manage your premium 3D animation content, pricing, and admin settings from one powerful dashboard.
            </p>
            
            {/* Feature highlights */}
            <div className="space-y-3 mt-8 pt-8 border-t border-slate-700">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Rich Visual Controls</p>
                  <p className="text-sm text-slate-400">Manage pricing, content, and animations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Secure Admin Panel</p>
                  <p className="text-sm text-slate-400">Enterprise-grade authentication and controls</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom showcase image */}
        <div className="mt-auto pt-12">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-4">
            <Image
              src="/images/admin-cover.png"
              alt="TryQu Admin Dashboard"
              width={500}
              height={300}
              className="rounded-lg w-full object-cover"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative z-10">
        {/* Mobile header - only visible on mobile */}
        <div className="flex md:hidden items-center gap-3 mb-12 w-full justify-center">
          <Image 
            src="/icons/skitbit-white.svg" 
            alt="TryQu Tech" 
            width={32} 
            height={32}
            className="h-8 w-8"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-lime-300 to-lime-400 bg-clip-text text-transparent">TRYQU TECH</span>
        </div>

        <div className="w-full max-w-md">
          {/* Form header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Sign in</h2>
            <p className="text-slate-400 text-sm">Enter your credentials to access the admin dashboard</p>
          </div>

          {/* Login Mode Toggle */}
          <div className="flex gap-2 mb-8 bg-slate-800/50 border border-slate-700 p-1 rounded-lg backdrop-blur">
            <button
              type="button"
              onClick={() => {
                setLoginMode("email")
                setPhone("")
                setError("")
              }}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-all flex items-center justify-center gap-2 ${
                loginMode === "email"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Mail className="h-4 w-4" />
              Email
            </button>
            <button
              type="button"
              onClick={() => {
                setLoginMode("phone")
                setEmail("")
                setError("")
              }}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-all flex items-center justify-center gap-2 ${
                loginMode === "phone"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <PhoneIcon className="h-4 w-4" />
              Phone
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 backdrop-blur text-red-300 px-4 py-3 rounded-lg flex items-start gap-3 animate-pulse">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {loginMode === "email" ? (
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200 font-medium text-sm">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@tryqu.com"
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 pl-10 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all"
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-200 font-medium text-sm">
                  Phone Number
                </Label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 9033452895"
                    className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 pl-10 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-200 font-medium text-sm">
                  Password
                </Label>
                <button type="button" className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-slate-800/50 border-slate-700 text-white placeholder-slate-500 pl-10 pr-10 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isLoading} 
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 font-semibold py-3 rounded-lg transition-all shadow-lg shadow-cyan-500/20 mt-2 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {/* Footer help text */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <p className="text-slate-400 text-xs text-center">
              Need help? Contact{" "}
              <a href="mailto:support@tryqu.com" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                support@tryqu.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
