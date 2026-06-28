"use client";

import { TITLES } from "./data";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-16">
      {/* Pixel elephant decoration */}
      <div className="mb-6 anim-fade">
        <span className="font-terminal text-5xl sm:text-6xl pixel-float" role="img" aria-label="Elephant">
          🐘
        </span>
      </div>

      <h1 className="font-pixel text-px-green text-center text-sm sm:text-base md:text-lg leading-relaxed anim-fade anim-d1">
        &gt; hello world_
        <br />
        <span className="text-px-white">
          I&apos;m{" "}
          <span className="text-px-green">Ashioya Jotham Victor</span>
        </span>
      </h1>

      {/* Tagline */}
      <p className="font-terminal text-lg sm:text-xl md:text-2xl text-px-gold text-center mt-6 max-w-2xl anim-fade anim-d2 leading-relaxed">
        Exploring the mechanics of reasoning in language models
        <br className="hidden sm:block" /> through mechanistic interpretability
      </p>

      {/* Title badges — linked */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6 anim-fade anim-d3">
        {TITLES.map((t) => (
          <a
            key={t.label}
            href={t.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`pixel-tag no-underline ${
              t.abbr === "GDE" ? "pixel-tag-gold" : "pixel-tag-blue"
            }`}
          >
            {t.abbr} — {t.field}
          </a>
        ))}
        <span className="pixel-tag">Bluedot</span>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-10 anim-fade anim-d4">
        <button onClick={scrollToProjects} className="pixel-btn">
          &gt; View Projects
        </button>
        <button onClick={scrollToContact} className="pixel-btn-ghost">
          &gt; Get in Touch
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 anim-fade anim-d5 flex flex-col items-center gap-2">
        <span className="font-terminal text-xs text-px-dim">scroll down</span>
        <span className="font-pixel text-xs text-px-dim pixel-float">▼</span>
      </div>
    </section>
  );
}