"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StructureGPTLogo, StructureGPTLogoWithText } from "@/components/StructureGPTLogo"
import {
  Zap,
  FileCheck,
  Upload,
  Shield,
  Menu,
  X,
  Moon,
  Sun,
  Clock,
  PoundSterling,
  AlertCircle,
  Check,
  ChevronRight,
  PlayCircle,
  Search,
  Image as ImageIcon,
  FileUp,
  Bell,
  Eye,
  Lock,
  Star,
  HelpCircle,
} from "lucide-react"

// ============================================
// 🚀 EASY TOGGLE: Change this to switch modes
// ============================================
// true  = "Launch App" button → direct access
// false = "Join Waitlist" button → collect signups
const APP_LIVE = false
// ============================================

export default function LandingPage() {
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
            <StructureGPTLogoWithText size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#waitlist" className="text-foreground/80 hover:text-foreground transition-colors">
                Waitlist
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
                Contact
              </a>
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
                <a href="#waitlist">
                  <Button className="hidden md:inline-flex bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                    Join Waitlist
                  </Button>
                </a>
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
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Features
              </a>
              <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Pricing
              </a>
              <a href="#waitlist" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Waitlist
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors py-2">
                Contact
              </a>
              {APP_LIVE ? (
                <a href="https://structuregpt.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600">Launch App</Button>
                </a>
              ) : (
                <a href="#waitlist">
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600">Join Waitlist</Button>
                </a>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* StructureGPT Logo */}
              <div className="flex justify-center lg:justify-start mb-6">
                <StructureGPTLogo size="xl" className="md:w-28 md:h-28 lg:w-32 lg:h-32" />
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600/10 border border-teal-600/20 text-sm font-medium text-teal-600 dark:text-teal-400 mb-6">
                <Shield className="w-4 h-4" />
                Now in Early Access
              </div>

              <div className="mb-3">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  StructureGPT by Atlasync AI
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Find UK Building Regulations{" "}
                <span className="text-teal-600 dark:text-teal-400">10x Faster</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                AI-powered research tool for UK construction professionals. Get instant, accurate answers with full
                citations. <strong className="text-foreground">Save 10+ hours of research per project.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {APP_LIVE ? (
                  <>
                    <a href="https://structuregpt.vercel.app" target="_blank" rel="noopener noreferrer">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-8 py-6 shadow-lg shadow-teal-600/25"
                      >
                        Launch App
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </a>
                    <a href="#pricing">
                      <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 bg-transparent">
                        View Pricing
                      </Button>
                    </a>
                  </>
                ) : (
                  <>
                    <a href="#waitlist">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-8 py-6 shadow-lg shadow-teal-600/25"
                      >
                        Join Waitlist
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </a>
                    <a href="#features">
                      <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 bg-transparent">
                        Learn More
                      </Button>
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Right Side - Mockup */}
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
                  <div className="p-6 space-y-4 min-h-[400px]">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        You
                      </div>
                      <div className="bg-teal-600/10 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-sm">What's the minimum ceiling height for habitable rooms under Part K?</p>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-muted rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                        <p className="text-sm mb-2">
                          Under Approved Document K (Protection from falling), the minimum ceiling height for habitable
                          rooms is 2.3m...
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
      </section>

      {/* Subtle Professional Disclaimer */}
      <div className="py-6 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-sm text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Professional research tool for UK construction professionals. Find building regulations{" "}
            <strong className="text-foreground">10x faster</strong> than manual searches. Built for preliminary
            research and compliance documentation. Always verify project-specific requirements with qualified
            professionals.
          </p>
        </div>
      </div>

      {/* Demo Video Section */}
      <section id="demo-video" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600/10 border border-teal-600/20 text-sm font-medium text-teal-600 dark:text-teal-400 mb-6">
              <PlayCircle className="w-4 h-4" />
              See It In Action
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Watch StructureGPT in Action
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              See how AI-powered building regulations compliance works in under 2 minutes
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-600/20 bg-black">
              <video
                controls
                className="w-full"
                preload="metadata"
              >
                <source src="/demo_structureGPT.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Real demonstration of StructureGPT answering UK Building Regulations queries
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-balance">
            Find Answers <span className="text-teal-600 dark:text-teal-400">10x Faster</span> Than Manual Research
          </h2>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-4">
            Stop wasting time searching through hundreds of pages of Approved Documents
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Pain Point 1 */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-2">
              <div className="w-16 h-16 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">10+ Hours Lost Per Project</h3>
              <p className="text-muted-foreground text-pretty">
                Architects spend days searching through Approved Documents
              </p>
            </Card>

            {/* Pain Point 2 */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-2">
              <div className="w-16 h-16 rounded-2xl bg-orange-600/10 flex items-center justify-center mb-6">
                <PoundSterling className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">£1,200+ Wasted on Research</h3>
              <p className="text-muted-foreground text-pretty">Time spent on regulations compliance adds up fast</p>
            </Card>

            {/* Pain Point 3 */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-2">
              <div className="w-16 h-16 rounded-2xl bg-yellow-600/10 flex items-center justify-center mb-6">
                <AlertCircle className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Compliance Anxiety</h3>
              <p className="text-muted-foreground text-pretty">Missing a regulation can delay projects by months</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Everything You Need to Work{" "}
              <span className="text-teal-600 dark:text-teal-400">10x Faster</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              AI-powered research tools that accelerate your workflow without sacrificing accuracy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1: Smart RAG Search */}
            <Card className="p-8 hover:shadow-xl transition-all hover:scale-105 duration-300 border-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Smart RAG Search <span className="text-xs text-blue-600 font-normal">(10x faster)</span>
              </h3>
              <p className="text-muted-foreground text-pretty">
                Ask questions in natural language. Get precise answers with sources from UK Building Regulations
                instantly — no more manual searching.
              </p>
            </Card>

            {/* Feature 2: AI Image Generation */}
            <Card className="p-8 hover:shadow-xl transition-all hover:scale-105 duration-300 border-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mb-6">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Image Generation</h3>
              <p className="text-muted-foreground text-pretty">
                Generate technical diagrams and illustrations instantly with AI image generation.
              </p>
            </Card>

            {/* Feature 3: Document Upload */}
            <Card className="p-8 hover:shadow-xl transition-all hover:scale-105 duration-300 border-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center mb-6">
                <FileUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Document Upload</h3>
              <p className="text-muted-foreground text-pretty">
                Upload your own documents for AI-powered search and analysis. Multi-tenant secure.
              </p>
            </Card>

            {/* Feature 4: Real-time Updates */}
            <Card className="p-8 hover:shadow-xl transition-all hover:scale-105 duration-300 border-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center mb-6">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Real-time Updates</h3>
              <p className="text-muted-foreground text-pretty">
                Automatic monthly monitoring of regulation changes. Stay compliant effortlessly.
              </p>
            </Card>

            {/* Feature 5: Multimodal AI */}
            <Card className="p-8 hover:shadow-xl transition-all hover:scale-105 duration-300 border-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Multimodal AI</h3>
              <p className="text-muted-foreground text-pretty">
                Understand text, tables, and diagrams. Claude AI with vision analyzes complex documentation.
              </p>
            </Card>

            {/* Feature 6: Enterprise Security */}
            <Card className="p-8 hover:shadow-xl transition-all hover:scale-105 duration-300 border-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-muted-foreground text-pretty">
                Azure AD authentication, multi-tenancy, role-based access control.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">How It Works</h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Arrows (hidden on mobile) */}
              <div
                className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-teal-600 to-cyan-600"
                style={{ width: "calc(66.666% - 8rem)" }}
              >
                <ChevronRight className="absolute right-0 -top-3 w-6 h-6 text-cyan-600" />
              </div>

              {/* Step 1 */}
              <div className="relative">
                <Card className="p-8 text-center border-2 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-4">Ask Your Question</h3>
                  <p className="text-muted-foreground text-pretty">
                    Type your building regulations query in plain English
                  </p>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <Card className="p-8 text-center border-2 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-4">Get AI-Powered Answer</h3>
                  <p className="text-muted-foreground text-pretty">
                    StructureGPT analyzes all relevant Approved Documents instantly
                  </p>
                </Card>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <Card className="p-8 text-center border-2 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-4">Review Citations</h3>
                  <p className="text-muted-foreground text-pretty">
                    See exact references to regulations with confidence
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use StructureGPT Effectively */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              How to Use StructureGPT Effectively
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Work faster without compromising accuracy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Column 1: When to Use */}
            <Card className="p-8 border-2 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-6">When to Use StructureGPT</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Preliminary research and feasibility studies{" "}
                    <strong className="text-foreground">(10x faster)</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Quick regulation lookups during design work</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Understanding building code requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Generating preliminary compliance checklists</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Cross-referencing multiple Approved Documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Learning UK Building Regulations</span>
                </li>
              </ul>
            </Card>

            {/* Column 2: When to Consult Professionals */}
            <Card className="p-8 border-2 border-blue-600/50 hover:shadow-xl transition-shadow bg-blue-50/50 dark:bg-blue-950/20">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">When to Consult Professionals</h3>
              <p className="text-sm text-muted-foreground mb-4">Always engage qualified professionals for:</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Building control approval applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Structural calculations and safety assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Fire safety risk assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Complex or unusual building scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Project-specific compliance verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Final sign-off and certification</span>
                </li>
              </ul>
            </Card>

            {/* Column 3: Built for Accuracy */}
            <Card className="p-8 border-2 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Built for Accuracy</h3>
              <p className="text-sm text-muted-foreground mb-4">Every StructureGPT answer includes:</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Citations to official Approved Documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Document section and page references</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Confidence scoring for reliability</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Links to verify against GOV.UK sources</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-semibold text-center text-foreground">
                  Work <span className="text-teal-600 dark:text-teal-400">10x faster</span> without compromising
                  accuracy
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="early-access" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">Early Access Now Open</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 text-pretty">
              StructureGPT is currently in early access. Join architects and engineers testing the future of building
              regulations compliance.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold mb-2">Built on Official Sources</h3>
                  <p className="text-sm text-muted-foreground">
                    Grounded in GOV.UK Approved Documents and real UK Building Regulations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold mb-2">AI-Powered Intelligence</h3>
                  <p className="text-sm text-muted-foreground">Powered by Claude AI (Anthropic) and Microsoft Azure</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold mb-2">Research-Backed Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Developed by AI & Data Science researchers specializing in construction tech
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold mb-2">Regulatory Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Always up-to-date with latest UK Building Regulations amendments
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#waitlist">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-lg px-8 py-6 shadow-lg"
                >
                  Join Waitlist
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="#demo-video">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Join the Waitlist</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Be the first to access StructureGPT when we launch. Join the growing community of UK construction
                professionals.
              </p>
            </div>

            <Card className="p-10 md:p-12 border-4 border-teal-600/30 shadow-2xl bg-background">
              {/* Tally Embed */}
              <div className="rounded-lg overflow-hidden border-2 border-border">
                <iframe
                  src="https://tally.so/embed/QKeRGA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="600"
                  title="Atlasync AI Waitlist"
                  style={{ border: 0 }}
                ></iframe>
              </div>

              <p className="text-sm text-muted-foreground text-center mt-8">
                We respect your privacy. No spam, ever. Read our{" "}
                <a href="/privacy" className="text-teal-600 hover:underline font-medium">
                  Privacy Policy
                </a>
                .
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Choose the plan that fits your needs. Upgrade or downgrade at any time.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Free Plan */}
            <Card className="p-8 border-2 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold">£0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">Try the product, regulation search only</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Access to UK building regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Email support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Basic search capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">No document uploads</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">No AI image generation</span>
                </li>
              </ul>

              {APP_LIVE ? (
                <a href="https://structuregpt.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-2">
                    Get Started
                  </Button>
                </a>
              ) : (
                <a href="#waitlist">
                  <Button variant="outline" className="w-full border-2">
                    Join Waitlist
                  </Button>
                </a>
              )}
            </Card>

            {/* Basic Plan - POPULAR */}
            <Card className="p-8 border-4 border-blue-600 shadow-2xl relative hover:shadow-3xl transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm font-bold">
                POPULAR
              </div>

              <h3 className="text-2xl font-bold mb-2 mt-4">Basic</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold">£19</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">For individual architects and engineers</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">5 document uploads per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">10 AI-generated images per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Full chat</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority email support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced search with semantic ranking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Conversation history</span>
                </li>
              </ul>

              {APP_LIVE ? (
                <a href="https://structuregpt.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white dark:text-white font-semibold border-0">
                    Subscribe Now
                  </Button>
                </a>
              ) : (
                <a href="#waitlist">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white dark:text-white font-semibold border-0">
                    Join Waitlist
                  </Button>
                </a>
              )}
            </Card>

            {/* Premium Plan - BEST VALUE */}
            <Card className="p-8 border-4 border-purple-600 shadow-2xl relative hover:shadow-3xl transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-6 py-1.5 rounded-full text-sm font-bold">
                BEST VALUE
              </div>

              <h3 className="text-2xl font-bold mb-2 mt-4">Premium</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold">£69</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">For architecture firms and teams</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">25 document uploads per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">100 AI-generated images per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Full chat</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority support with 24h response</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Team collaboration features</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited conversation history</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom regulation uploads</span>
                </li>
              </ul>

              {APP_LIVE ? (
                <a href="https://structuregpt.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white dark:text-white font-semibold border-0">
                    Subscribe Now
                  </Button>
                </a>
              ) : (
                <a href="#waitlist">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white dark:text-white font-semibold border-0">
                    Join Waitlist
                  </Button>
                </a>
              )}
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-2">Can I change plans later?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! You can upgrade or downgrade your plan at any time from your dashboard settings.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-2">What payment methods do you accept?</h4>
                    <p className="text-sm text-muted-foreground">
                      We accept all major credit and debit cards through our secure Stripe payment gateway.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-2">Can I cancel my subscription?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, you can cancel your subscription at any time. Your plan will remain active until the end of
                      your billing period.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-2">When do quotas reset?</h4>
                    <p className="text-sm text-muted-foreground">
                      All quotas (document uploads and AI images) reset monthly on the 1st of each month.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-2">What happens if I exceed my quota?</h4>
                    <p className="text-sm text-muted-foreground">
                      You'll receive a warning notification when you reach 80% of your quota. Once exceeded, you'll
                      need to upgrade your plan or wait until the next monthly reset.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-3">
                  <HelpCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold mb-2">Need a custom plan?</h4>
                    <p className="text-sm text-muted-foreground">
                      Need a custom plan for your organization?{" "}
                      <a href="mailto:support@atlasync.co.uk" className="text-teal-600 hover:underline">
                        Contact us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Common Features */}
          <div className="max-w-5xl mx-auto mt-16 p-8 bg-background rounded-2xl border-2">
            <h3 className="text-xl font-bold text-center mb-8">Features Common to All Plans</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">Secure document storage with Azure</p>
                  <p className="text-xs text-muted-foreground">Enterprise-grade security</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">Multi-tenant data isolation</p>
                  <p className="text-xs text-muted-foreground">Your data stays private</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">GDPR compliant</p>
                  <p className="text-xs text-muted-foreground">Full data protection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">99.9% uptime SLA</p>
                  <p className="text-xs text-muted-foreground">Always available</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">Automatic regulation updates</p>
                  <p className="text-xs text-muted-foreground">Stay current automatically</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium mb-1">Email notifications</p>
                  <p className="text-xs text-muted-foreground">Get regulatory change alerts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-600 opacity-10 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            {APP_LIVE ? "Ready to Save 10+ Hours Per Project?" : "Join the Waitlist"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            {APP_LIVE
              ? "Join UK architects and engineers using StructureGPT"
              : "Be among the first to access StructureGPT"}
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
            <a href="#waitlist">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-xl px-12 py-8 shadow-2xl shadow-teal-600/25"
              >
                Join Waitlist
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </a>
          )}
          <p className="text-sm text-muted-foreground mt-4">
            {APP_LIVE
              ? "£69/month • Cancel anytime • No credit card required"
              : "Be first to access • No commitment required • Early access pricing"}
          </p>
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
                AI-powered tools for UK construction professionals. StructureGPT is our flagship product for building
                regulations compliance.
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
              <p className="text-sm text-muted-foreground">Registered Office:</p>
              <p className="text-sm text-muted-foreground">3rd Floor, 86-90 Paul Street</p>
              <p className="text-sm text-muted-foreground">London, EC2A 4NE, United Kingdom</p>
              <p className="text-sm text-muted-foreground mt-2">Company No: 16935402</p>
              <p className="text-sm text-muted-foreground">Atlasync AI Ltd</p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#careers" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed text-center max-w-5xl mx-auto mb-8">
              StructureGPT retrieves information from official UK Building Regulations for research and documentation
              purposes. It is not a substitute for professional architectural, structural engineering, or building
              control services. Building regulations are complex and subject to interpretation. Users are responsible
              for verifying information and consulting qualified professionals for project-specific applications.
              Atlasync AI Ltd provides this tool 'as is' and is not liable for decisions made based on information
              provided.
            </p>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Atlasync AI Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/atlasync-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
