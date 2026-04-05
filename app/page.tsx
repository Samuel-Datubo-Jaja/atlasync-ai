"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Zap,
  Building2,
  Leaf,
  Shield,
  Menu,
  X,
  Moon,
  Sun,
  Check,
  ChevronRight,
  ArrowRight,
  Sparkles,
  BookOpen,
  Users,
} from "lucide-react"

// ============================================
// 🚀 EASY TOGGLE: Change this to switch modes
// ============================================
// true  = "Launch App" button → direct access
// false = "Join Waitlist" button → collect signups
const APP_LIVE = false
// ============================================

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Atlasync AI Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">Atlasync AI</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/products" className="text-foreground/80 hover:text-foreground transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/careers" className="text-foreground/80 hover:text-foreground transition-colors">
                Careers
              </Link>
              <Link href="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              {APP_LIVE ? (
                <a href="https://structuregpt.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Button className="hidden md:inline-flex bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                    Launch App
                  </Button>
                </a>
              ) : (
                <Link href="/structuregpt#waitlist">
                  <Button className="hidden md:inline-flex bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                    Join Waitlist
                  </Button>
                </Link>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/products" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Products
              </Link>
              <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                About
              </Link>
              <Link href="/careers" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Careers
              </Link>
              <Link href="/contact" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Contact
              </Link>
              {APP_LIVE ? (
                <a href="https://structuregpt.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600">Launch App</Button>
                </a>
              ) : (
                <Link href="/structuregpt#waitlist">
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600">Join Waitlist</Button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-cyan-600/10 to-background -z-10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20 -z-10" />

        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600/10 border border-teal-600/20 text-sm font-medium text-teal-600 dark:text-teal-400 mb-6">
              <Sparkles className="w-4 h-4" />
              Building AI for Complex Industries
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Synchronizing AI Where It Matters
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              We develop intelligent software that helps professionals navigate complex regulations and compliance
              requirements. AI that's accurate, transparent, and grounded in official sources.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-8 py-6 shadow-lg shadow-teal-600/25"
                >
                  Explore Our Products
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 bg-transparent">
                  Learn About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">What We Do</h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              We combine cutting-edge AI with authoritative data sources to deliver accurate, trustworthy solutions for
              regulated industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Focus Area 1 */}
            <Card className="p-8 hover:shadow-xl transition-all hover:scale-105 duration-300 border-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Construction & Building</h3>
              <p className="text-muted-foreground text-pretty">
                AI tools for UK building regulations compliance, helping architects and engineers save hours of research.
              </p>
            </Card>

            {/* Focus Area 2 */}
            <Card className="p-8 hover:shadow-xl transition-all hover:scale-105 duration-300 border-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-muted-foreground text-pretty">
                Solutions for net zero and environmental compliance (Coming Soon)
              </p>
            </Card>

            {/* Focus Area 3 */}
            <Card className="p-8 hover:shadow-xl transition-all hover:scale-105 duration-300 border-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise AI</h3>
              <p className="text-muted-foreground text-pretty">
                Custom AI solutions for regulated industries, built to your specific compliance needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-600 text-white text-sm font-medium mb-4">
                  Featured Product
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">StructureGPT</h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 text-pretty">
                  AI-powered UK Building Regulations compliance assistant. Get instant, accurate answers with citations
                  to official Approved Documents.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Covers all UK Approved Documents A-T</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>AI-powered search grounded in GOV.UK sources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Upload your own documents for project-specific queries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Automatic regulation change monitoring</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  {APP_LIVE ? (
                    <a href="https://structuregpt.vercel.app" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-8 py-6"
                      >
                        Launch App
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </a>
                  ) : (
                    <Link href="/structuregpt#waitlist">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-8 py-6"
                      >
                        Join Waitlist
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                  )}
                  <Link href="/structuregpt">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Product Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-teal-600/20 to-cyan-600/20 rounded-2xl p-8 backdrop-blur-sm border border-teal-600/20 shadow-2xl">
                  <div className="bg-background rounded-lg shadow-xl overflow-hidden">
                    {/* Chat Interface Mockup */}
                    <div className="bg-muted/50 p-4 border-b border-border flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-sm text-muted-foreground ml-2">StructureGPT</span>
                    </div>
                    <div className="p-6 space-y-4 min-h-[300px]">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          You
                        </div>
                        <div className="bg-teal-600/10 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                          <p className="text-sm">What's the minimum ceiling height for habitable rooms?</p>
                        </div>
                      </div>
                      <div className="flex gap-3 justify-end">
                        <div className="bg-muted rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                          <p className="text-sm mb-2">
                            Under Approved Document K, the minimum ceiling height for habitable rooms is 2.3m...
                          </p>
                          <div className="text-xs text-muted-foreground bg-background/50 rounded p-2 mt-2">
                            📚 Citation: Approved Document K, Section 1.2
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          AI
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Built on Trust & Accuracy</h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Our AI is designed to be reliable, transparent, and grounded in authoritative sources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-teal-600/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Official Sources</h3>
              <p className="text-sm text-muted-foreground">All answers grounded in official GOV.UK documents</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-teal-600/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">Azure-hosted with enterprise-grade data protection</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-teal-600/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Research-Backed</h3>
              <p className="text-sm text-muted-foreground">Developed from AI & Data Science research</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-teal-600/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">UK-Based</h3>
              <p className="text-sm text-muted-foreground">Registered company in England & Wales</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-600 opacity-10 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            {APP_LIVE ? "Ready to Experience AI-Powered Compliance?" : "Join the Waitlist"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            {APP_LIVE
              ? "Try StructureGPT and see how AI can transform your building regulations workflow."
              : "Be among the first to experience AI-powered building regulations compliance."}
          </p>
          {APP_LIVE ? (
            <a href="https://structuregpt.vercel.app" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-xl px-12 py-8 shadow-2xl shadow-teal-600/25"
              >
                Launch App
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </a>
          ) : (
            <Link href="/structuregpt#waitlist">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-xl px-12 py-8 shadow-2xl shadow-teal-600/25"
              >
                Join Waitlist
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-muted/50 py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Atlasync AI Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold">Atlasync AI</span>
              </div>
              <p className="text-muted-foreground mb-4 text-pretty">
                Synchronizing AI Where It Matters. Building intelligent software for complex, regulated industries.
              </p>
              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-2">Contact</p>
                <a
                  href="mailto:info@atlasync.co.uk"
                  className="text-sm text-teal-600 hover:text-teal-700 hover:underline"
                >
                  info@atlasync.co.uk
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/structuregpt" className="text-muted-foreground hover:text-foreground transition-colors">
                    StructureGPT
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                    All Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Atlasync AI Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/atlasync-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs text-muted-foreground">Registered Office: 3rd Floor, 86-90 Paul Street, London, EC2A 4NE, United Kingdom</p>
              <p className="text-xs text-muted-foreground">Company No: 16935402 • Atlasync AI Ltd</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
