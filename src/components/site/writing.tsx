"use client";

import { ScrollReveal } from "./scroll-reveal";
import { PUBLICATIONS, ESSAYS } from "./data";

export function Writing() {
  return (
    <section id="writing" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-pixel text-px-green text-xs sm:text-sm mb-3">
            <span className="text-px-dim">$</span> cat writing/
          </h2>
          <p className="font-terminal text-lg text-px-gray mb-10">
            Research papers and essays
          </p>
        </ScrollReveal>

        {/* Publications */}
        <ScrollReveal delay={100}>
          <h3 className="font-pixel text-xs text-px-gold mb-4">
            &#9733; Publications
          </h3>
        </ScrollReveal>

        <div className="space-y-4 mb-12">
          {PUBLICATIONS.map((pub, i) => (
            <ScrollReveal key={pub.title} delay={150 + i * 80}>
              <div className="pixel-card-gold pixel-card p-4 sm:p-5">
                <h4 className="font-pixel text-xs text-px-gold mb-2">
                  [{String(i + 1).padStart(2, "0")}] {pub.title}
                </h4>
                <p className="font-terminal text-base text-px-gray mb-1">
                  {pub.authors}
                </p>
                <p className="font-terminal text-base text-px-dim mb-3">
                  {pub.venue} &middot; {pub.year}
                </p>
                <div className="flex gap-3">
                  {pub.arxiv && (
                    <a
                      href={pub.arxiv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-btn-sm"
                    >
                      arXiv ↗
                    </a>
                  )}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-btn-ghost"
                      style={{ padding: "8px 14px", fontSize: "8px" }}
                    >
                      Paper
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Essays */}
        <ScrollReveal delay={300}>
          <h3 className="font-pixel text-xs text-px-blue mb-4">
            &#9998; Essays & Blog Posts
          </h3>
        </ScrollReveal>

        <div className="space-y-4">
          {ESSAYS.map((essay) => (
            <ScrollReveal key={essay.title} delay={350}>
              <div className="pixel-card-blue pixel-card p-4 sm:p-5">
                <h4 className="font-pixel text-xs text-px-blue mb-2">
                  &gt; {essay.title}
                </h4>
                <p className="font-terminal text-base text-px-white leading-relaxed mb-3">
                  {essay.description}
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-terminal text-sm text-px-dim">
                    {essay.date}
                  </span>
                  {essay.link && (
                    <a
                      href={essay.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-btn-sm"
                    >
                      Read ↗
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}