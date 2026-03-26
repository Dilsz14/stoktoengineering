import React from "react";
import { cn } from "@/lib/utils";

interface StotkoLogoProps {
  className?: string;
  variant?: "dark" | "light";
  showText?: boolean;
}

export default function StotkoLogo({ className, variant = "dark", showText = true }: StotkoLogoProps) {
  const iconFill = variant === "dark" ? "#000000" : "#ffffff";
  const textColor = variant === "dark" ? "text-stotko-black" : "text-white";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* SE geometric block logo */}
      <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top-left white block */}
        <rect x="0" y="0" width="14" height="12" fill={iconFill} />
        {/* Top-right white block */}
        <rect x="16" y="0" width="28" height="12" fill={iconFill} />
        {/* Middle block (S shape) */}
        <rect x="0" y="14" width="28" height="10" fill={iconFill} />
        {/* Bottom-left block */}
        <rect x="0" y="26" width="14" height="12" fill={iconFill} />
        {/* Bottom-right block */}
        <rect x="16" y="26" width="28" height="12" fill={iconFill} />
        {/* Outer border rectangle (the square frame from logo) */}
        <rect x="0" y="0" width="44" height="38" stroke={iconFill} strokeWidth="2" fill="none" opacity="0.3" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn("text-lg font-black tracking-[0.25em] uppercase", textColor)}>
            STOTKO ENGINEERING
          </span>
          <span className={cn("text-xs tracking-[0.4em] uppercase", variant === "dark" ? "text-stotko-gray-text" : "text-white/60")}>
            Pty Ltd
          </span>
        </div>
      )}
    </div>
  );
}
