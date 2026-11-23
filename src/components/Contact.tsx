"use client";

import React from "react";
import { Mail, Code2, Globe, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Let&apos;s Connect</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
          I&apos;m currently open to full-time software engineering roles or impactful freelance work.
          Whether you want to chat about a job opportunity, system architecture, or a project, feel free to reach out.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <a
            href="mailto:anshulchaudhari001@gmail.com"
            className="inline-flex items-center space-x-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 px-4 py-2.5 font-medium text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>anshulchaudhari001@gmail.com</span>
          </a>

          <a
            href="https://github.com/anshulchaudhari001"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-4 py-2.5 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <Code2 className="h-4 w-4" />
            <span>GitHub</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-4 py-2.5 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <Globe className="h-4 w-4" />
            <span>LinkedIn</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-900 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; 2026 Anshul Chaudhari. Built with Next.js & Tailwind CSS.</span>
          <span>Designed with care, clarity, and simplicity.</span>
        </div>
      </div>
    </section>
  );
}
