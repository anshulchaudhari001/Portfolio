"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Phone, Code2, Globe, ArrowUpRight, Check, Copy } from "lucide-react";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Let&apos;s Connect</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
          I&apos;m currently open to full-time Software Engineer and React.js Developer roles.
          Whether you want to discuss a job opening, a project collaboration, or review technical architectures, feel free to reach out.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          {/* Email button */}
          <div className="inline-flex items-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center space-x-2 px-3.5 py-2.5 text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-2.5 border-l border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
          </div>

          {/* Phone button */}
          <div className="inline-flex items-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 overflow-hidden">
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center space-x-2 px-3.5 py-2.5 text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <button
              onClick={handleCopyPhone}
              className="px-3 py-2.5 border-l border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
              title="Copy Phone Number"
            >
              {copiedPhone ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
          </div>

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 px-4 py-2.5 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <Code2 className="h-4 w-4" />
            <span>GitHub</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedin}
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
          <span>&copy; 2026 {PERSONAL_INFO.name}. All rights reserved.</span>
          <span>Full Stack Developer &bull; Nagpur, India</span>
        </div>
      </div>
    </section>
  );
}
