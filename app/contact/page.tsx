"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Linkedin } from "lucide-react"

export default function ContactPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Have questions? We'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Email</h3>
                        <a
                          href="mailto:info@atlasync.co.uk"
                          className="text-teal-600 hover:text-teal-700 hover:underline"
                        >
                          info@atlasync.co.uk
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">Registered Office</h3>
                        <p className="text-sm text-muted-foreground">3rd Floor, 86-90 Paul Street</p>
                        <p className="text-sm text-muted-foreground">London, EC2A 4NE</p>
                        <p className="text-sm text-muted-foreground">United Kingdom</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Linkedin className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">LinkedIn</h3>
                        <a
                          href="https://www.linkedin.com/company/atlasync-ai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 hover:text-teal-700 hover:underline"
                        >
                          linkedin.com/company/atlasync-ai
                        </a>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Company Details */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Company Information</h2>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      <strong className="text-foreground">Company Name:</strong>
                      <br />
                      Atlasync AI Ltd
                    </li>
                    <li>
                      <strong className="text-foreground">Company Number:</strong>
                      <br />
                      16935402
                    </li>
                    <li>
                      <strong className="text-foreground">Incorporated:</strong>
                      <br />
                      30 December 2025
                    </li>
                    <li>
                      <strong className="text-foreground">Location:</strong>
                      <br />
                      England & Wales
                    </li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-teal-50 dark:bg-teal-950/20 border-2 border-teal-200 dark:border-teal-900 rounded-lg">
                  <h3 className="font-bold mb-2 text-teal-900 dark:text-teal-100">Interested in our products?</h3>
                  <p className="text-sm text-teal-900/90 dark:text-teal-100/90 mb-4">
                    Check out StructureGPT, our AI-powered building regulations assistant.
                  </p>
                  <Link href="/structuregpt">
                    <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
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
