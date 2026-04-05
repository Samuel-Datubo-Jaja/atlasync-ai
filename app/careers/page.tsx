"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket, Brain, TrendingUp, Globe } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Atlasync AI</h1>
            <p className="text-xl text-muted-foreground mb-16">
              Help us build the future of AI for regulated industries
            </p>

            {/* Why Join */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Why Join Us?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <Rocket className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="text-xl font-bold mb-2">Early Stage Impact</h3>
                  <p className="text-muted-foreground">Shape the product and company from the ground up</p>
                </Card>

                <Card className="p-6">
                  <Brain className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="text-xl font-bold mb-2">Learn Cutting-Edge AI</h3>
                  <p className="text-muted-foreground">Work with RAG systems, LLMs, and cloud architecture</p>
                </Card>

                <Card className="p-6">
                  <TrendingUp className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="text-xl font-bold mb-2">Growth Potential</h3>
                  <p className="text-muted-foreground">
                    Potential for future paid roles and equity as we grow
                  </p>
                </Card>

                <Card className="p-6">
                  <Globe className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="text-xl font-bold mb-2">Remote-Friendly</h3>
                  <p className="text-muted-foreground">Work from anywhere in the UK</p>
                </Card>
              </div>
            </div>

            {/* Current Opportunities */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Current Opportunities</h2>
              <p className="text-muted-foreground mb-8">
                We're currently in early stages and building our team. Check back soon for opportunities, or reach out
                to us directly.
              </p>

              <div className="bg-teal-50 dark:bg-teal-950/20 border-2 border-teal-200 dark:border-teal-900 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-2 text-teal-900 dark:text-teal-100">Interested in joining?</h3>
                <p className="text-teal-900/90 dark:text-teal-100/90 mb-4">
                  We're always looking for talented, passionate individuals who want to work on meaningful AI problems.
                </p>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>

            {/* What You'll Get */}
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">What Future Team Members Get</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Real project experience on a production AI product</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Mentorship and learning opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Reference letters and recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Potential for future paid roles as company grows</span>
                </li>
              </ul>
            </div>
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
