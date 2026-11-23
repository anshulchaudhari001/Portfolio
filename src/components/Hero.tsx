"use client";

import React from "react";
import { ArrowUpRight, Code2, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="py-20 border-b border-zinc-800/60">
      <div className="mx-auto max-w-4xl px-6">
        <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Open to Software Engineering roles</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Hey, I&apos;m Anshul.
        </h1>
        <p className="mt-4 text-lg text-zinc-300 font-normal leading-relaxed">
          I&apos;m a <strong>Full-Stack Software Engineer</strong> who loves building reliable web applications.
          My core focus is backend design—clean RESTful APIs, relational data modeling, and practical caching—paired with fast, clean React & Next.js frontends.
        </p>
        <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
          I care about the practical details: understanding why PostgreSQL beats MongoDB for transactional integrity, writing clean database migrations, managing concurrency without race conditions, and keeping codebases readable.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center space-x-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 hover:bg-white transition-colors"
          >
            <span>View Featured Projects</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/anshulchaudhari001"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
          >
            <Code2 className="h-4 w-4" />
            <span>GitHub Profile</span>
          </a>
          <a
            href="mailto:anshulchaudhari001@gmail.com"
            className="inline-flex items-center space-x-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-sm text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
