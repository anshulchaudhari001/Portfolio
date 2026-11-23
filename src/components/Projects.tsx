"use client";

import React from "react";
import { PROJECTS } from "@/data/portfolioData";
import { ArrowUpRight, Code2, Check } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-zinc-200 dark:border-zinc-800/60">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Featured Projects</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          A selection of projects where I tackled real architectural trade-offs, state management, and database performance.
        </p>

        <div className="mt-10 space-y-10">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 p-6 sm:p-8 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-colors shadow-sm dark:shadow-none"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">{project.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex items-center space-x-3 text-xs">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                    >
                      <Code2 className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors font-medium"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* The "Why" / Problem Solved */}
              <div className="mt-5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/60 p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  The Problem Solved
                </span>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{project.problemSolved}</p>
              </div>

              {/* Architectural Highlights */}
              <div className="mt-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Technical Architecture
                </span>
                <ul className="mt-2 space-y-1.5">
                  {project.architectureHighlights.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
