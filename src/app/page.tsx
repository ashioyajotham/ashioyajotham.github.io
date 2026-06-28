"use client";

import { Navigation } from "@/components/site/navigation";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Research } from "@/components/site/research";
import { Projects } from "@/components/site/projects";
import { Writing } from "@/components/site/writing";
import { Now } from "@/components/site/now";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <hr className="pixel-divider max-w-5xl mx-auto" />
        <About />
        <hr className="pixel-divider max-w-5xl mx-auto" />
        <Research />
        <hr className="pixel-divider max-w-5xl mx-auto" />
        <Projects />
        <hr className="pixel-divider max-w-5xl mx-auto" />
        <Writing />
        <hr className="pixel-divider max-w-5xl mx-auto" />
        <Now />
        <hr className="pixel-divider max-w-5xl mx-auto" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}