"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Insights on AI, building regulations, and the future of construction technology
            </p>

            <div className="bg-muted/30 p-12 rounded-lg">
              <p className="text-lg text-muted-foreground mb-6">Blog posts coming soon.</p>
              <p className="text-muted-foreground">
                We'll be sharing insights on AI, building regulations, and construction technology. Check back soon!
              </p>
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
