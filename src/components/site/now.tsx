"use client";

import { ScrollReveal } from "./scroll-reveal";
import { NOW_SECTIONS } from "./data";

const SECTION_COLORS = ["green", "blue", "gold", "pink"] as const;

export function Now() {
  return (
    <section id="now" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-pixel text-px-green text-xs sm:text-sm mb-3">
            <span className="text-px-dim">$</span> cat now.md
          </h2>
          <p className="font-terminal text-lg text-px-gray mb-10">
            What I&apos;m working on now
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          {NOW_SECTIONS.map((section, si) => {
            const color = SECTION_COLORS[si % SECTION_COLORS.length];
            return (
              <ScrollReveal key={section.title} delay={si * 120}>
                <div
                  className="pixel-card p-5 sm:p-6"
                  style={{
                    boxShadow: `4px 4px 0 0 var(--px-${color})`,
                    borderColor: `var(--px-${color})`,
                  }}
                >
                  {/* Section header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-terminal text-xl">
                      {section.icon}
                    </span>
                    <h3
                      className={`font-pixel text-xs sm:text-sm text-px-${color}`}
                    >
                      {section.title.toUpperCase()}
                    </h3>
                    <div
                      className="flex-1 h-px opacity-30"
                      style={{
                        background: `repeating-linear-gradient(to right, var(--px-${color}) 0px, var(--px-${color}) 4px, transparent 4px, transparent 8px)`,
                      }}
                    />
                  </div>

                  {/* Items */}
                  <div className="space-y-3">
                    {section.items.map((item, ii) => (
                      <p
                        key={ii}
                        className="font-terminal text-base sm:text-lg text-px-white leading-relaxed now-entry"
                        dangerouslySetInnerHTML={{ __html: item.html }}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={500}>
          <p className="font-terminal text-sm text-px-dim mt-8 text-center">
            Last updated: May 2026
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}