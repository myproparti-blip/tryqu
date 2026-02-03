import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BeforeAfter } from "./_components/before-after"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Camera, Grid2X2, Scissors, Wand2 } from "lucide-react"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "3D Product Rendering | TryQu Tech - Enterprise 3D Solutions",
  description: "Professional 3D product rendering services for marketing materials, e-commerce, and digital presentations. Photorealistic renders for your business needs.",
}

export default function Page() {
  const features = [
    {
      icon: <Camera className="h-5 w-5" />,
      title: "Photorealistic Renders",
      desc: "Industry-standard quality 3D renders suitable for marketing materials and product launches.",
    },
    {
      icon: <Grid2X2 className="h-5 w-5" />,
      title: "Custom Lighting Setup",
      desc: "Professional lighting configurations that showcase your products in the best possible way.",
    },
    {
      icon: <Scissors className="h-5 w-5" />,
      title: "Quick Turnaround",
      desc: "Fast delivery without compromising on quality - typically 5-10 business days.",
    },
    {
      icon: <Wand2 className="h-5 w-5" />,
      title: "Post-Production",
      desc: "Advanced post-processing and color grading for polished, professional results.",
    },
  ]

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-[#0a0a0a] text-white py-20 sm:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Professional 3D
                <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
                  Product Rendering
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
                Transform your products with photorealistic 3D renders. Perfect for e-commerce, marketing materials, and digital presentations.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button
                  asChild
                  className="bg-lime-400 text-black font-medium rounded-lg px-8 py-3 hover:bg-lime-300 hover:shadow-md hover:scale-[1.02] transition-all"
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Why Choose Our <span className="text-lime-300">Rendering Services</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="liquid-glass border border-white/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-lime-300/10 flex items-center justify-center text-lime-300 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-300">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Our <span className="text-lime-300">Recent Work</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl group">
                <Image
                  src={`/placeholder-3d-${i}.jpg?height=500&width=600`}
                  alt={`3D Render ${i}`}
                  width={600}
                  height={500}
                  className="h-auto w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Product Render {i}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Our <span className="text-lime-300">Process</span>
          </h2>
          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Concept", desc: "Discuss your vision and requirements" },
              { step: "02", title: "Modeling", desc: "Create detailed 3D models of your product" },
              { step: "03", title: "Rendering", desc: "Render photorealistic high-quality images" },
              { step: "04", title: "Delivery", desc: "Final polish and format delivery" },
            ].map((item, i) => (
              <Card key={i} className="liquid-glass border border-white/20 text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-lime-300 mb-2">{item.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Simple <span className="text-lime-300">Pricing</span>
          </h2>
          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$499",
                includes: ["5 Product Renders", "Basic Lighting", "2 Revisions", "5 Business Days"],
              },
              {
                name: "Professional",
                price: "$999",
                includes: ["15 Product Renders", "Advanced Lighting", "5 Revisions", "3 Business Days"],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                includes: ["Unlimited Renders", "Custom Setup", "Unlimited Revisions", "Priority Support"],
              },
            ].map((plan, i) => (
              <Card
                key={i}
                className={`liquid-glass border ${
                  plan.popular ? "border-lime-300 ring-1 ring-lime-300/30" : "border-white/20"
                }`}
              >
                <CardHeader>
                  {plan.popular && (
                    <Badge className="w-fit bg-lime-300/20 text-lime-300 border-lime-300/30">Popular</Badge>
                  )}
                  <CardTitle className="text-white mt-2">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-lime-300 mt-2">{plan.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.includes.map((item, idx) => (
                      <li key={idx} className="text-neutral-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-300"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-lime-400 text-black font-semibold hover:bg-lime-300 rounded-lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
            Frequently Asked <span className="text-lime-300">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  q: "What file formats do you need for 3D modeling?",
                  a: "We accept most industry standard formats including STEP, IGES, OBJ, FBX, and native CAD files from AutoCAD, SolidWorks, Fusion 360, and others.",
                },
                {
                  q: "How many revisions are included?",
                  a: "Revisions vary by plan. Starter includes 2, Professional includes 5, and Enterprise plans have unlimited revisions within the agreed scope.",
                },
                {
                  q: "What is your typical turnaround time?",
                  a: "Standard projects take 5-10 business days. We offer expedited services for an additional fee - as fast as 2-3 business days.",
                },
                {
                  q: "Do you provide animation services?",
                  a: "Yes! We offer 360-degree product rotations, exploded views, assembly animations, and cinematic walkthrough animations.",
                },
                {
                  q: "Can you work with my existing 3D model?",
                  a: "Absolutely. We can take your existing CAD or 3D model and create professional renders with our custom lighting and materials.",
                },
                {
                  q: "What's included in post-production?",
                  a: "Color grading, background options, shadow details, reflections, and any requested adjustments to make your renders perfect.",
                },
              ].map((faq, i) => (
                <Card key={i} className="liquid-glass border border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-300">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <Card className="liquid-glass border border-lime-300/20 bg-gradient-to-r from-lime-300/5 to-purple-500/5">
            <CardContent className="pt-12 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Ready to Showcase Your Products?
              </h2>
              <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                Let TryQu Tech create stunning 3D renders that will elevate your marketing materials and impress your customers.
              </p>
              <Button
                asChild
                className="bg-lime-400 text-black font-medium rounded-lg px-8 py-3 hover:bg-lime-300 hover:shadow-md hover:scale-[1.02] transition-all"
              >
                <a href="#contact">Request a Quote</a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <AppverseFooter />
    </>
  )
}
