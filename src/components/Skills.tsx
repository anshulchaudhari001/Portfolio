"use client";

import React from "react";
import { SKILLS_DATA } from "@/data/portfolioData";

export function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-zinc-800/60">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-white">Skills & Technologies</h2>
        <p className="mt-2 text-sm text-zinc-400">
          Tools, languages, and frameworks I use on a regular basis in full-stack development.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILLS_DATA.map((cat, idx) => (
            <div key={idx} className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
              <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-300"
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
