"use client";

import React from "react";
import { Mail, ShieldCheck, Heart, Code2, Globe } from "lucide-react";

export function FooterConsole() {
  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Bio & Open to Work */}
          <div className="md:col-span-7">
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>OPEN FOR SOFTWARE ENGINEERING OPPORTUNITIES</span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm max-w-xl leading-relaxed">
              Designed and built from scratch with Next.js App Router, TypeScript, and Tailwind CSS.
              Engineered with production-grade standards, strict contracts, and zero template dependencies.
            </p>
            <div className="mt-4 flex items-center space-x-4 text-xs font-mono text-zinc-500">
              <span>LOC: Global / Remote</span>
              <span>&bull;</span>
              <span>SLA: 99.99%</span>
              <span>&bull;</span>
              <span>ENCRYPT: TLS 1.3</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-5 flex flex-wrap md:justify-end items-center gap-3 font-mono text-xs">
            <a
              href="https://github.com/anshulchaudhari001"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Code2 className="h-3.5 w-3.5 text-zinc-400" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Globe className="h-3.5 w-3.5 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center space-x-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-3 py-2 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Initiate Contact</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-600 gap-2">
          <span>&copy; 2026 Anshul Chaudhari. All rights reserved.</span>
          <span>Engineered for Reliability, Performance & Scale.</span>
        </div>
      </div>
    </footer>
  );
}
