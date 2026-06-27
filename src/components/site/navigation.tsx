"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { NAV_LINKS } from "./data";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all"
        style={{
          background: scrolled
            ? "color-mix(in srgb, var(--px-bg) 95%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled
            ? "2px solid color-mix(in srgb, var(--px-green) 15%, transparent)"
            : "2px solid transparent",
        }}
      >
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-pixel text-xs sm:text-sm text-px-green no-underline tracking-wider"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            ashioyajotham
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link-pixel">
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="font-pixel text-px-green text-sm p-2"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu fixed inset-0 z-40 md:hidden ${
          mobileOpen ? "open" : ""
        }`}
        style={{
          background: "var(--px-bg)",
          paddingTop: "60px",
        }}
      >
        <div className="flex flex-col items-center gap-8 pt-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-pixel text-sm text-px-green no-underline"
              onClick={() => setMobileOpen(false)}
            >
              &gt; {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}