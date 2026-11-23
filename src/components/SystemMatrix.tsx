"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/telemetryData";
import { Cpu, CheckCircle2 } from "lucide-react";

export function SystemMatrix() {
  return (
    <section className="py-16 border-b border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-2">
          <Cpu className="h-4 w-4" />
          <span>PRODUCTION READINESS &bull; CAPABILITY MATRIX</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Full-Stack Capabilities & Engineering Standards
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-3xl">
          A clear categorization of tools, frameworks, and architecture patterns used across the stack,
          graded by production readiness.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur-sm"
            >
              <h3 className="text-base font-bold text-white tracking-tight flex items-center justify-between">
                <span>{cat.category}</span>
                <span className="text-[10px] font-mono text-emerald-400 uppercase border border-emerald-500/20 bg-emerald-500/5 px-2 py-0.5 rounded">
                  VERIFIED
                </span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1 mb-4">{cat.description}</p>

              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-200">{skill.name}</span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        [{skill.level}]
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-zinc-400 leading-relaxed">
                      {skill.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
