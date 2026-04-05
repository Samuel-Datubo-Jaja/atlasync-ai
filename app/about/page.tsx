"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Shield, Users, Building2 } from "lucide-react"

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Atlasync AI</h1>
            <p className="text-xl text-teal-600 mb-12">Synchronizing AI Where It Matters</p>

            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Atlasync AI was founded with a simple belief: AI should solve real problems in complex industries, not
                just generate hype.
              </p>
              <p className="text-muted-foreground mb-6">
                Our name comes from "synchronizing AI across the atlas" — bringing intelligent solutions to industries
                worldwide, starting with construction and building regulations in the UK.
              </p>
              <p className="text-muted-foreground mb-6">
                We combine cutting-edge AI technology with authoritative data sources to create tools that professionals
                can actually trust.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                To make complex regulations accessible and understandable through AI that is accurate, transparent, and
                grounded in official sources.
              </p>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <BookOpen className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="text-xl font-bold mb-2">Accuracy First</h3>
                  <p className="text-muted-foreground">
                    Every answer must be traceable to an official source. We never guess.
                  </p>
                </Card>

                <Card className="p-6">
                  <Shield className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="text-xl font-bold mb-2">Transparency</h3>
                  <p className="text-muted-foreground">
                    We show our sources. Users can verify everything we say.
                  </p>
                </Card>

                <Card className="p-6">
                  <Users className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="text-xl font-bold mb-2">Real Problems</h3>
                  <p className="text-muted-foreground">
                    We build tools that solve genuine pain points, not technology for its own sake.
                  </p>
                </Card>

                <Card className="p-6">
                  <Building2 className="w-8 h-8 text-teal-600 mb-3" />
                  <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
                  <p className="text-muted-foreground">
                    We listen to users and constantly improve our products.
                  </p>
                </Card>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-muted/30 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Company Information</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Company Name:</strong> Atlasync AI Ltd
                </li>
                <li>
                  <strong className="text-foreground">Company Number:</strong> 16935402
                </li>
                <li>
                  <strong className="text-foreground">Incorporated:</strong> 30 December 2025
                </li>
                <li>
                  <strong className="text-foreground">Registered Address:</strong> 3rd Floor, 86-90 Paul Street,
                  London, EC2A 4NE, United Kingdom
                </li>
                <li>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:info@atlasync.co.uk" className="text-teal-600 hover:underline">
                    info@atlasync.co.uk
                  </a>
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
