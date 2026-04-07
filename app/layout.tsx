import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://atlasync.co.uk"),
  title: "Atlasync AI - Synchronizing AI Where It Matters",
  description:
    "Building intelligent software for complex, regulated industries. Our flagship product StructureGPT helps UK architects and engineers navigate building regulations with AI-powered assistance.",
  keywords: [
    "building regulations",
    "UK construction",
    "AI architecture",
    "approved documents",
    "building compliance",
    "StructureGPT",
    "construction technology",
  ],
  authors: [{ name: "Atlasync AI Ltd" }],
  creator: "Atlasync AI Ltd",
  publisher: "Atlasync AI Ltd",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Atlasync AI - AI-Powered UK Building Regulations Compliance",
    description:
      "Save 10+ hours per project with StructureGPT. Instant AI-powered building regulations answers with full citations.",
    siteName: "Atlasync AI",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Atlasync AI Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlasync AI - AI-Powered UK Building Regulations",
    description: "Save 10+ hours per project with StructureGPT",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
<body className={`${inter.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
