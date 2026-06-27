"use client";

import { ScrollReveal } from "./scroll-reveal";
import { RESEARCH_INTERESTS } from "./data";

const COLOR_MAP = {
  green: {
    border: "border-px-green",
    text: "text-px-green",
    card: "pixel-card",
  },
  blue: {
    border: "border-px-blue",
    text: "text-px-blue",
    card: "pixel-card-blue pixel-card",
  },
  gold: {
    border: "border-px-gold",
    text: "text-px-gold",
    card: "pixel-card-gold pixel-card",
  },
  pink: {
    border: "border-px-pink",
    text: "text-px-pink",
    card: "pixel-card-pink pixel-card",
  },
} as const;

export function Research() {
  return (
    <section id="research" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-pixel text-px-green text-xs sm:text-sm mb-3">
            <span className="text-px-dim">$</span> ls research/
          </h2>
          <p className="font-terminal text-lg text-px-gray mb-10">
            Core areas of investigation
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {RESEARCH_INTERESTS.map((interest, i) => {
            const colors = COLOR_MAP[interest.color];
            return (
              <ScrollReveal key={interest.title} delay={i * 100}>
                <div className={`${colors.card} p-5 sm:p-6 h-full`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="font-pixel text-xs text-px-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`font-pixel text-xs sm:text-sm ${colors.text}`}
                    >
                      {interest.title}
                    </h3>
                  </div>
                  <p className="font-terminal text-base sm:text-lg text-px-white leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}