"use client";

import { useState, useEffect } from "react";
import { TYPING_PHRASES } from "./data";

export function Hero() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const current = TYPING_PHRASES[phraseIdx];

      if (!isDeleting) {
        charIdx++;
        setDisplayText(current.slice(0, charIdx));
        if (charIdx >= current.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, 2000);
          return;
        }
        timeoutId = setTimeout(tick, 60);
      } else {
        charIdx--;
        setDisplayText(current.slice(0, charIdx));
        if (charIdx <= 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % TYPING_PHRASES.length;
          timeoutId = setTimeout(tick, 400);
          return;
        }
        timeoutId = setTimeout(tick, 30);
      }
    }

    timeoutId = setTimeout(tick, 600);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

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

      {/* Typing effect */}
      <div className="mt-6 h-10 flex items-center justify-center anim-fade anim-d2">
        <span className="font-terminal text-2xl sm:text-3xl md:text-4xl text-px-gold">
          {displayText}
          <span className="cursor-blink text-px-gold">_</span>
        </span>
      </div>

      {/* Subtitle */}
      <p className="font-terminal text-lg sm:text-xl text-px-gray text-center mt-4 max-w-2xl anim-fade anim-d3">
        Building safer AI, one circuit at a time.
      </p>

      {/* Title badges */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6 anim-fade anim-d4">
        <span className="pixel-tag pixel-tag-gold">GDE — AI</span>
        <span className="pixel-tag pixel-tag-blue">GDG Pwani</span>
        <span className="pixel-tag">Bluedot</span>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-10 anim-fade anim-d5">
        <button onClick={scrollToProjects} className="pixel-btn">
          &gt; View Projects
        </button>
        <button onClick={scrollToContact} className="pixel-btn-ghost">
          &gt; Get in Touch
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 anim-fade anim-d6 flex flex-col items-center gap-2">
        <span className="font-terminal text-xs text-px-dim">scroll down</span>
        <span className="font-pixel text-xs text-px-dim pixel-float">▼</span>
      </div>
    </section>
  );
}