"use client";

import { ScrollReveal } from "./scroll-reveal";
import {
  RESEARCH_INTERESTS,
  RESEARCH_BELIEFS,
  RESEARCH_ARC,
  NOAM_QUOTE,
  PUBLICATIONS,
} from "./data";

const COLOR_MAP = {
  green: {
    text: "text-px-green",
    card: "pixel-card",
  },
  blue: {
    text: "text-px-blue",
    card: "pixel-card-blue pixel-card",
  },
  gold: {
    text: "text-px-gold",
    card: "pixel-card-gold pixel-card",
  },
  pink: {
    text: "text-px-pink",
    card: "pixel-card-pink pixel-card",
  },
} as const;

export function Research() {
  return (
    <section id="research" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <h2 className="font-pixel text-px-green text-xs sm:text-sm mb-3">
            <span className="text-px-dim">$</span> ls research/
          </h2>
          <p className="font-terminal text-lg text-px-gray mb-10">
            How I think about AI safety and interpretability
          </p>
        </ScrollReveal>

        {/* Hero: intro + beliefs panel */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 mb-12">
            {/* Intro text */}
            <div>
              <h3 className="font-terminal text-xl sm:text-2xl text-px-white leading-snug mb-4">
                I don&apos;t think scaling gets us to robust reasoning.
              </h3>
              <p className="font-terminal text-base sm:text-lg text-px-gray leading-relaxed mb-3">
                Language models exhibit what Ethan Mollick calls{" "}
                <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4573321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="now-link"
                >
                  &quot;jagged intelligence&quot;
                </a>
                : superhuman at some tasks, brittle at others humans find
                trivial. This jagged profile is why interpretability
                matters&mdash;we need to understand{" "}
                <em>where</em> and <em>why</em> systems break.
              </p>
              <p className="font-terminal text-base sm:text-lg text-px-gray leading-relaxed">
                My work traces how specific neurons, attention heads, and
                pathways give rise to model capabilities and failures.
                I&apos;m particularly drawn to{" "}
                <strong className="text-px-white">hallucinations</strong>:
                when models produce confident-but-wrong outputs.
              </p>
            </div>

            {/* Beliefs panel */}
            <div
              className="p-5 flex flex-col justify-center"
              style={{
                background: "var(--px-white)",
                color: "var(--px-bg)",
              }}
            >
              <h4
                className="font-pixel text-px-dim mb-4"
                style={{ fontSize: "7px" }}
              >
                WHERE I STAND
              </h4>
              <ul className="space-y-3">
                {RESEARCH_BELIEFS.map((belief, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-2 h-2 mt-2 flex-shrink-0"
                      style={{ background: "var(--px-green)" }}
                    />
                    <span
                      className="font-terminal text-base"
                      style={{ color: "var(--px-bg)" }}
                    >
                      {belief}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="https://open.substack.com/pub/ashioyajotham/p/my-research-ethos-for-alignment-and"
                target="_blank"
                rel="noopener noreferrer"
                className="font-terminal text-sm mt-4 inline-block hover:underline"
                style={{ color: "var(--px-dim)" }}
              >
                Full ethos &rarr;
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Noam Shazeer quote banner — prominently highlighted */}
        <ScrollReveal delay={200}>
          <div
            className="p-6 sm:p-8 mb-12 border-2"
            style={{
              background: "var(--px-white)",
              color: "var(--px-bg)",
              borderColor: "var(--px-gold)",
              boxShadow: `6px 6px 0 0 var(--px-gold)`,
            }}
          >
            <blockquote className="font-terminal text-lg sm:text-xl italic leading-relaxed mb-4">
              &ldquo;We offer no explanation as to why these architectures
              seem to work; we attribute their success, as all else, to
              divine benevolence.&rdquo;
            </blockquote>
            <div className="flex flex-wrap items-center gap-2 font-terminal text-sm" style={{ color: "var(--px-dim)" }}>
              <span>&mdash; Noam Shazeer,</span>
              <a
                href="https://arxiv.org/abs/2002.05202"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: "var(--px-gold)" }}
              >
                GLU Variants Improve Transformer
              </a>
              <span>(2020)</span>
            </div>
          </div>
        </ScrollReveal>

        {/* How I Got Here — arc narrative */}
        <ScrollReveal delay={250}>
          <h3 className="font-pixel text-xs text-px-blue mb-6">
            HOW I GOT HERE
          </h3>
        </ScrollReveal>

        <div className="space-y-6 mb-12">
          {RESEARCH_ARC.map((entry, i) => (
            <ScrollReveal key={entry.year} delay={300 + i * 100}>
              <div className="flex gap-4">
                <span className="font-pixel text-px-dim text-xs mt-1 flex-shrink-0 w-12 text-right">
                  {entry.year}
                </span>
                <div
                  className="w-px flex-shrink-0"
                  style={{
                    background:
                      "repeating-linear-gradient(to bottom, var(--px-blue) 0px, var(--px-blue) 4px, transparent 4px, transparent 8px)",
                  }}
                />
                <p
                  className="font-terminal text-base sm:text-lg text-px-white leading-relaxed arc-entry flex-1"
                  dangerouslySetInnerHTML={{ __html: entry.html }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <hr className="pixel-divider mb-12" />

        {/* Research interests grid */}
        <ScrollReveal delay={200}>
          <h3 className="font-pixel text-xs text-px-green mb-6">
            CORE AREAS OF INVESTIGATION
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {RESEARCH_INTERESTS.map((interest, i) => {
            const colors = COLOR_MAP[interest.color];
            return (
              <ScrollReveal key={interest.title} delay={250 + i * 100}>
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

        {/* Research Diary box */}
        <ScrollReveal delay={300}>
          <div className="pixel-card p-5 sm:p-6">
            <h3 className="font-pixel text-xs text-px-green mb-2">
              &#128221; RESEARCH DIARY
            </h3>
            <p className="font-terminal text-base sm:text-lg text-px-white leading-relaxed mb-3">
              Working notes, paper annotations, technical history from
              n-grams to Transformers.
            </p>
            <a
              href="https://github.com/ashioyajotham/ai_research"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn-sm"
            >
              Browse the repo &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}