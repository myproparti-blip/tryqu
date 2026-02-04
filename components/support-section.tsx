"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  Phone,
  Clock,
} from "lucide-react"

interface SupportQuestion {
  id: string
  name: string
  email: string
  question: string
  category: string
  status: "open" | "in-progress" | "resolved"
  createdAt: string
  response?: string
  respondedAt?: string
  respondedBy?: string
}

const supportCategories = [
  { value: "billing", label: "Billing & Pricing" },
  { value: "technical", label: "Technical Support" },
  { value: "general", label: "General Inquiry" },
  { value: "feature-request", label: "Feature Request" },
  { value: "bug-report", label: "Bug Report" },
  { value: "other", label: "Other" },
]

export function SupportSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [question, setQuestion] = useState("")
  const [category, setCategory] = useState("general")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [submittedQuestionId, setSubmittedQuestionId] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "submit-question",
          name,
          email,
          question,
          category,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit question")
      }

      setSubmitted(true)
      setSubmittedQuestionId(data.questionId)
      setName("")
      setEmail("")
      setQuestion("")
      setCategory("general")

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
        setIsOpen(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-lime-300/20 mb-4">
            <MessageSquare className="w-6 h-6 text-lime-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Support
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Have questions? Our support team is here to help. Submit your question below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Support Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Support Card */}
          <Card className="bg-neutral-900/50 border-neutral-800 hover:border-lime-300/30 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-lime-300/20">
                  <Mail className="w-5 h-5 text-lime-300" />
                </div>
                <CardTitle className="text-white">Email Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-neutral-400 text-sm">
                Send us an email and we'll respond within 24 hours
              </p>
              <a
                href="mailto:info@tryqu.com"
                className="text-lime-300 hover:text-lime-400 font-medium text-sm inline-flex items-center gap-2 transition-colors"
              >
                support@tryqu.com
                <span className="text-xs">→</span>
              </a>
            </CardContent>
          </Card>

          {/* Phone Support Card */}
          <Card className="bg-neutral-900/50 border-neutral-800 hover:border-lime-300/30 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-lime-300/20">
                  <Phone className="w-5 h-5 text-lime-300" />
                </div>
                <CardTitle className="text-white">Phone Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-neutral-400 text-sm">
                Call us for urgent support matters
              </p>
              <a
                href="tel:+918238177000"
                className="text-lime-300 hover:text-lime-400 font-medium text-sm inline-flex items-center gap-2 transition-colors"
              >
                +91 823-817-7000
                <span className="text-xs">→</span>
              </a>
            </CardContent>
          </Card>

          {/* Response Time Card */}
          <Card className="bg-neutral-900/50 border-neutral-800 hover:border-lime-300/30 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-lime-300/20">
                  <Clock className="w-5 h-5 text-lime-300" />
                </div>
                <CardTitle className="text-white">Response Time</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-neutral-400 text-sm">
                Most questions answered within 24 hours
              </p>
              <div className="text-lime-300 font-medium text-sm">
                Average: 4-8 hours
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submit Question Dialog */}
        <div className="flex justify-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-lime-300 text-black hover:bg-lime-400 font-semibold px-8 py-6 text-lg flex items-center gap-2">
                <Send className="w-5 h-5" />
                Submit Your Question
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-neutral-900 border-neutral-800 max-w-md">
              <DialogHeader>
                <DialogTitle className="text-white">Submit Support Question</DialogTitle>
                <DialogDescription className="text-neutral-400">
                  Tell us about your question or issue. Our team will respond as soon as possible.
                </DialogDescription>
              </DialogHeader>

              {submitted ? (
                <div className="space-y-4 py-4">
                  <Alert className="bg-green-500/10 border-green-500/30 text-green-300">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Thank you for your question! We've received it and our support team will respond soon.
                    </AlertDescription>
                  </Alert>
                  <div className="bg-neutral-800/50 rounded-lg p-4 space-y-2">
                    <p className="text-sm text-neutral-400">Your question ID:</p>
                    <p className="text-white font-mono text-sm break-all">{submittedQuestionId}</p>
                    <p className="text-xs text-neutral-500">
                      Save this ID to track your question status
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <Alert className="bg-red-500/10 border-red-500/30 text-red-300">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-neutral-200">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-neutral-200">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-neutral-200">
                      Category
                    </Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-800 border-neutral-700">
                        {supportCategories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value} className="text-white">
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="question" className="text-neutral-200">
                      Your Question
                    </Label>
                    <Textarea
                      id="question"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Please describe your question or issue in detail..."
                      className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-lime-300 text-black hover:bg-lime-400 font-semibold"
                  >
                    {isLoading ? "Submitting..." : "Submit Question"}
                  </Button>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
