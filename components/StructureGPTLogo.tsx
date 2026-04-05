import Image from "next/image"

interface StructureGPTLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const sizeMap = {
  sm: { width: 32, height: 32, class: "w-8 h-8" },
  md: { width: 48, height: 48, class: "w-12 h-12" },
  lg: { width: 96, height: 96, class: "w-24 h-24" },
  xl: { width: 128, height: 128, class: "w-32 h-32" },
}

export function StructureGPTLogo({ size = "md", className = "" }: StructureGPTLogoProps) {
  const { width, height, class: sizeClass } = sizeMap[size]

  return (
    <div className={`relative ${className}`}>
      {/* Logo adapts automatically - teal/cyan works on both light and dark */}
      <Image
        src="/StructureGPT logo.png"
        alt="StructureGPT Logo"
        width={width}
        height={height}
        className={`${sizeClass} transition-all duration-300`}
        priority
      />
    </div>
  )
}

// Horizontal version with text
interface StructureGPTLogoWithTextProps {
  size?: "sm" | "md" | "lg"
  showSubtext?: boolean
  className?: string
}

export function StructureGPTLogoWithText({
  size = "md",
  showSubtext = true,
  className = "",
}: StructureGPTLogoWithTextProps) {
  const logoSize = size === "sm" ? "sm" : size === "lg" ? "md" : "sm"
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-xl"
  const subtextSize = size === "sm" ? "text-[10px]" : size === "lg" ? "text-sm" : "text-xs"

  return (
    <div className={`flex items-center gap-3 md:gap-4 ${className}`}>
      <StructureGPTLogo size={logoSize} />
      <div className="flex flex-col">
        <span className={`${textSize} font-bold leading-tight`}>StructureGPT</span>
        {showSubtext && <span className={`${subtextSize} text-muted-foreground leading-tight`}>by Atlasync AI</span>}
      </div>
    </div>
  )
}
