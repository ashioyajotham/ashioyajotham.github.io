"use client";

import { ScrollReveal } from "./scroll-reveal";
import { SOCIAL_LINKS } from "./data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto border-t-2 border-px-dark"
      style={{ background: "var(--px-surface)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left */}
            <div className="text-center sm:text-left">
              <p className="font-pixel text-xs text-px-green">
                ashioyajotham
              </p>
              <p className="font-terminal text-sm text-px-dim mt-1">
                &copy; {year} Ashioya Jotham Victor
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-terminal text-base text-px-dim hover:text-px-green transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="font-terminal text-base text-px-dim hover:text-px-green transition-colors"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                href={SOCIAL_LINKS.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="font-terminal text-base text-px-dim hover:text-px-green transition-colors"
                aria-label="Google Scholar"
              >
                Scholar
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="font-terminal text-base text-px-dim hover:text-px-green transition-colors"
                aria-label="Email"
              >
                Email
              </a>
            </div>

            {/* Right — full Noam quote */}
            <div className="text-center sm:text-right max-w-xs">
              <p className="font-terminal text-xs text-px-gray italic leading-relaxed">
                &ldquo;We offer no explanation as to why these architectures
                seem to work; we attribute their success, as all else, to
                divine benevolence.&rdquo;
              </p>
              <p className="font-terminal text-xs text-px-dim mt-1">
                &mdash;{" "}
                <a
                  href="https://arxiv.org/abs/2002.05202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="now-link"
                >
                  Noam Shazeer
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}