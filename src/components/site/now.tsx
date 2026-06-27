"use client";

import { ScrollReveal } from "./scroll-reveal";
import { QUEST_LOG } from "./data";

const STATUS_STYLES: Record<string, string> = {
  active: "text-px-green",
  ongoing: "text-px-gold",
  complete: "text-px-dim",
};

const STATUS_LABELS: Record<string, string> = {
  active: "● ACTIVE",
  ongoing: "◐ IN PROGRESS",
  complete: "✓ COMPLETE",
};

export function Now() {
  return (
    <section id="now" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-pixel text-px-green text-xs sm:text-sm mb-3">
            <span className="text-px-dim">$</span> cat quest_log.md
          </h2>
          <p className="font-terminal text-lg text-px-gray mb-10">
            What I&apos;m working on now
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-1"
            style={{
              background:
                "repeating-linear-gradient(to bottom, var(--px-green) 0px, var(--px-green) 4px, transparent 4px, transparent 8px)",
            }}
          />

          <div className="space-y-6">
            {QUEST_LOG.map((entry, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex gap-4 ml-1">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center mt-1">
                    <span className="font-terminal text-lg">
                      {entry.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className="pixel-card p-4 sm:p-5 flex-1"
                    style={{ boxShadow: "4px 4px 0 0 rgba(0,0,0,0.12)" }}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-terminal text-sm text-px-dim">
                        {entry.date}
                      </span>
                      <span
                        className={`font-pixel text-px ${STATUS_STYLES[entry.status]}`}
                        style={{ fontSize: "7px" }}
                      >
                        {STATUS_LABELS[entry.status]}
                      </span>
                    </div>
                    <p className="font-terminal text-base sm:text-lg text-px-white leading-relaxed">
                      {entry.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={600}>
          <p className="font-terminal text-sm text-px-dim mt-8 text-center">
            Last updated: January 2025
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}