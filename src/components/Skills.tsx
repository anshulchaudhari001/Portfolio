"use client";

import React from "react";
import { SKILLS_CATEGORIES } from "@/data/portfolioData";

export function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-zinc-200 dark:border-zinc-800/60">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Technical Skills</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Core languages, frameworks, libraries, and tools I use across frontend, backend, and DevOps.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 p-6 shadow-sm dark:shadow-none"
            >
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-3 py-1.5 text-xs text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
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
