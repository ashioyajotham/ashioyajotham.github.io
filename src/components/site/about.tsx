"use client";

import { ScrollReveal } from "./scroll-reveal";
import { TITLES } from "./data";

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
                Machine Learning Researcher focused on{" "}
                <span className="text-px-gold">AI safety</span>,{" "}
                <span className="text-px-blue">mechanistic interpretability</span>, and{" "}
                <span className="text-px-pink">chain-of-thought faithfulness</span>.
              </p>
              <p className="font-terminal text-lg sm:text-xl text-px-white leading-relaxed">
                Currently exploring technical AI safety at{" "}
                <span className="text-px-green">Bluedot</span>, where I work on
                understanding how neural networks form safety-relevant representations
                and developing methods to ensure AI systems remain aligned with
                human intentions as they scale.
              </p>
              <p className="font-terminal text-lg sm:text-xl text-px-white leading-relaxed">
                I&apos;m passionate about building the AI safety research community
                in Africa. As a{" "}
                <span className="text-px-gold">Google Developer Expert for AI</span> and{" "}
                <span className="text-px-blue">GDG Pwani community lead</span>,
                I organize workshops, mentor researchers, and create spaces for
                rigorous technical discussion on making AI systems safer and more
                interpretable.
              </p>
              <p className="font-terminal text-lg sm:text-xl text-px-white leading-relaxed">
                My work sits at the intersection of{" "}
                <span className="text-px-green">rigorous research</span> and{" "}
                <span className="text-px-blue">open-source tooling</span> — I believe
                safety research should be transparent, reproducible, and accessible
                to researchers everywhere.
              </p>
            </div>

            {/* Title badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {TITLES.map((t) => (
                <div
                  key={t.label}
                  className="pixel-card-gold pixel-card p-3 sm:p-4 flex items-start gap-3"
                >
                  <span className="font-pixel text-xs text-px-gold mt-1">
                    ★
                  </span>
                  <div>
                    <div className="font-pixel text-xs text-px-gold">
                      {t.abbr}
                    </div>
                    <div className="font-terminal text-base text-px-gray mt-1">
                      {t.label}
                    </div>
                    <div className="font-terminal text-sm text-px-dim">
                      {t.field}
                    </div>
                  </div>
                </div>
              ))}
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