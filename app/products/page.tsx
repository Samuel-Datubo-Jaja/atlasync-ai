"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ChevronRight, Leaf, Zap } from "lucide-react"

// ============================================
// 🚀 EASY TOGGLE: Change this to switch modes
// ============================================
// true  = "Launch App" button → direct access
// false = "Join Waitlist" button → collect signups
const APP_LIVE = true
// ============================================

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Atlasync AI" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold">Atlasync AI</span>
            </Link>
            <Link href="/">
              <Button variant="ghost">← Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              AI-powered solutions for complex, regulated industries
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* StructureGPT */}
            <Card className="p-8 border-2 border-teal-600 relative">
              <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                NOW LIVE
              </div>
              <div className="mb-6">
                <Image
                  src="/StructureGPT logo.png"
                  alt="StructureGPT"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h2 className="text-2xl font-bold mb-3">StructureGPT</h2>
              <p className="text-muted-foreground mb-4">
                AI-Powered UK Building Regulations Compliance
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Get instant, accurate answers to building regulations questions with full citations to official
                Approved Documents.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>UK Building Regulations A-T</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Document upload & analysis</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Change monitoring alerts</span>
                </li>
              </ul>
              <div className="text-2xl font-bold mb-4">From £0/month</div>
              <div className="flex flex-col gap-3">
                <a href="https://www.structuregpt.co.uk" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                    Try StructureGPT free <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <Link href="/structuregpt">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </Card>

            {/* CarbonLens - Coming Soon */}
            <Card className="p-8 border-2 opacity-75 relative">
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-3">CarbonLens</h2>
              <p className="text-muted-foreground mb-4">AI-Powered Net Zero Compliance</p>
              <p className="text-sm text-muted-foreground mb-6">
                Supporting the UK's Net Zero 2050 Vision. Navigate carbon reporting requirements, sustainability
                regulations, and net zero pathways with AI assistance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span>Carbon reporting guidance</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span>Sustainability compliance</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span>Net zero planning</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </Card>

            {/* Enterprise - Coming Soon */}
            <Card className="p-8 border-2 opacity-75 md:col-span-2">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-bold">Enterprise Solutions</h2>
                    <span className="bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded-full">
                      COMING SOON
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">Custom AI for Your Industry</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Bespoke AI solutions for organizations in regulated industries. Custom-built to your compliance
                    needs with private deployment and integration support.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline">
                      Contact Us <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Atlasync AI Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
