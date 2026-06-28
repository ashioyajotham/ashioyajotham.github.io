"use client";

import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";
import { PROJECTS, type Project } from "./data";

const VARIANT_CARD: Record<string, string> = {
  green: "pixel-card",
  gold: "pixel-card-gold pixel-card",
  blue: "pixel-card-blue pixel-card",
  pink: "pixel-card-pink pixel-card",
};

const VARIANT_TAG: Record<string, string> = {
  green: "pixel-tag",
  gold: "pixel-tag-gold pixel-tag",
  blue: "pixel-tag-blue pixel-tag",
  pink: "pixel-tag-pink pixel-tag",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardClass = VARIANT_CARD[project.variant] || "pixel-card";
  const tagClass = VARIANT_TAG[project.variant] || "pixel-tag";

  return (
    <ScrollReveal delay={index * 80}>
      <div className={`${cardClass} p-0 overflow-hidden flex flex-col h-full`}>
        {/* Thumbnail area */}
        {project.thumbnail ? (
          <div className="relative w-full aspect-video bg-px-surface overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              fill
              className="pixel-img object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 40%, var(--px-bg) 100%)",
              }}
            />
            {/* Badge overlay */}
            {project.badge && (
              <span
                className="absolute top-3 left-3 pixel-tag"
                style={{ fontSize: "6px" }}
              >
                {project.badge}
              </span>
            )}
          </div>
        ) : (
          /* No thumbnail — icon + badge header */
          <div className="p-4 sm:p-5 flex items-center gap-3">
            <span className="font-pixel text-xl text-px-purple">⚙</span>
            {project.badge && (
              <span
                className={tagClass}
                style={{ fontSize: "6px" }}
              >
                {project.badge}
              </span>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col flex-1">
          <h3 className="font-pixel text-xs sm:text-sm text-px-green mb-3">
            &gt; {project.title}
          </h3>
          <p className="font-terminal text-base sm:text-lg text-px-white leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className={tagClass}>
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-sm"
              >
                Visit ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-ghost"
                style={{ padding: "8px 14px", fontSize: "8px" }}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-pixel text-px-green text-xs sm:text-sm mb-3">
            <span className="text-px-dim">$</span> ls projects/
          </h2>
          <p className="font-terminal text-lg text-px-gray mb-10">
            Things I&apos;ve built and contributed to
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}