"use client";

import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-[#090a0b]/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-white transition-colors tracking-tight"
        >
          Anshul Chaudhari
        </a>

        <div className="flex items-center space-x-6">
          <nav className="flex items-center space-x-5 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Skills
            </a>
            <a
              href="#contact"
              className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Day / Night Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
