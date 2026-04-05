import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "StructureGPT - AI-Powered UK Building Regulations Compliance",
  description:
    "Get instant, accurate answers to building regulations questions with StructureGPT. Save 10+ hours of research per project with AI-powered assistance.",
  keywords: [
    "building regulations",
    "UK construction",
    "AI architecture",
    "approved documents",
    "building compliance",
    "StructureGPT",
    "construction technology",
    "GPT-4",
    "AI assistant",
  ],
  icons: {
    icon: [
      { url: "/structuregpt-favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/structuregpt-favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/structuregpt-apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "StructureGPT - AI-Powered UK Building Regulations",
    description: "Save 10+ hours per project with StructureGPT. Instant AI-powered building regulations answers.",
    siteName: "StructureGPT by Atlasync AI",
    images: [{ url: "/StructureGPT logo.png", width: 512, height: 512, alt: "StructureGPT Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "StructureGPT - AI-Powered UK Building Regulations",
    description: "Save 10+ hours per project with AI-powered compliance",
    images: ["/StructureGPT logo.png"],
  },
}

export default function StructureGPTLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
