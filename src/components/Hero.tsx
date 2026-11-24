"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUpRight, Code2, Mail, FileText, Briefcase } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-zinc-200 dark:border-zinc-800/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-600 dark:text-emerald-400 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
          <span className="font-medium text-[11px] sm:text-xs">
            1+ Year Professional Experience &bull; Open to Roles
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
          Hey, I&apos;m {PERSONAL_INFO.name}.
        </h1>
        <p className="mt-2 text-lg sm:text-xl font-medium text-emerald-600 dark:text-emerald-400">
          {PERSONAL_INFO.role}
        </p>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed">
          {PERSONAL_INFO.summary}
        </p>

        {/* Action Buttons - Fully responsive grid/flex */}
        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 rounded-lg bg-emerald-600 dark:bg-emerald-500 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white dark:text-zinc-950 hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors shadow-sm"
          >
            <FileText className="h-4 w-4" />
            <span>Download Resume</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center space-x-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 px-4 py-2.5 text-xs sm:text-sm font-medium text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white transition-colors"
          >
            <span>View Projects</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="#experience"
            className="inline-flex items-center space-x-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-4 py-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <Briefcase className="h-4 w-4" />
            <span>Experience</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-4 py-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <Code2 className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center space-x-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-4 py-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
