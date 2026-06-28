"use client";

import { ScrollReveal } from "./scroll-reveal";
import { TITLES } from "./data";

const TITLE_COLORS: Record<string, { card: string; text: string }> = {
  GDE: { card: "pixel-card-gold pixel-card", text: "text-px-gold" },
  GDG: { card: "pixel-card-blue pixel-card", text: "text-px-blue" },
  ILINA: { card: "pixel-card-pink pixel-card", text: "text-px-pink" },
};

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-pixel text-px-green text-xs sm:text-sm mb-8">
            <span className="text-px-dim">$</span> cat about.md
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="pixel-card p-5 sm:p-8">
            {/* Bio */}
            <div className="space-y-4">
              <p className="font-terminal text-lg sm:text-xl text-px-white leading-relaxed">
                I&apos;m <span className="text-px-green font-bold">Ashioya Jotham Victor</span>, a
                researcher passionate about making AI systems more interpretable and safe.
                My work sits at the intersection of{" "}
                <span className="text-px-gold">mechanistic interpretability</span>,{" "}
                <span className="text-px-blue">chain-of-thought reasoning</span>, and{" "}
                <span className="text-px-pink">AI alignment</span>.
              </p>
              <p className="font-terminal text-lg sm:text-xl text-px-white leading-relaxed">
                Currently investigating how faithful chain-of-thought reasoning emerges
                in transformer models — probing not just what models say, but whether their
                internal computations actually reflect the reasoning they output.
              </p>
              <p className="font-terminal text-lg sm:text-xl text-px-white leading-relaxed">
                I believe that understanding the mechanistic basis of reasoning is crucial
                for building AI systems we can truly trust.
              </p>
            </div>

            {/* Roles */}
            <div className="mt-8 flex flex-wrap gap-3">
              {TITLES.map((t) => {
                const colors = TITLE_COLORS[t.abbr] || TITLE_COLORS.GDE;
                return (
                  <a
                    key={t.label}
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.card} p-3 sm:p-4 flex items-start gap-3 no-underline`}
                  >
                    <span className={`font-pixel text-xs ${colors.text} mt-1`}>
                      ★
                    </span>
                    <div>
                      <div className={`font-pixel text-xs ${colors.text}`}>
                        {t.abbr}
                      </div>
                      <div className="font-terminal text-base text-px-gray mt-1">
                        {t.label}
                      </div>
                      <div className="font-terminal text-sm text-px-dim">
                        {t.field}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Terminal-style location & links */}
            <div className="mt-8 font-terminal text-base text-px-dim space-y-1">
              <p>
                <span className="text-px-green">📍</span> Mombasa, Kenya
              </p>
              <p>
                <span className="text-px-green">📧</span> victorashioya960@gmail.com
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}