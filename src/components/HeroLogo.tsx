import React from "react";

/**
 * The main logo of the application.
 *
 * Consists of a colored box with "QR" text and the "NG" text next to it.
 * The box padding and alignment have been adjusted as per requirements.
 *
 * @param size - Defines the size of the logo. Options are "header" (default) or "hero".
 * @returns The main logo of the application as a React component.
 */
export function HeroLogo({ size = "header" }: { size?: "header" | "hero" }) {
  const isHero = size === "hero";
  const boxPadding = "p-[5px]"; // 5px padding for the colored box
  const fontSize = isHero ? "text-[105px]" : "text-[70px]"; // Hero is 1.5x header size
  const boxSize = isHero ? "w-auto h-auto" : "w-auto h-auto";
  const textAlignment = "flex items-center justify-center"; // Ensures QR is centered inside the box
  const gap = isHero ? "gap-6" : "gap-4"; // Increased gap for hero size

  return (
    <div className={`flex items-center ${gap}`}>
      {/* Colored box with "QR" */}
      <div
        className={`bg-foreground text-background ${boxPadding} ${textAlignment} ${boxSize} font-bold ${fontSize} leading-none`}
      >
        QR
      </div>
      {/* "NG" Text */}
      <span className={`font-bold ${fontSize} leading-none`}>NG</span>
    </div>
  );
}
