"use client";

import React from "react";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold text-zinc-100 hover:text-white transition-colors">
          Anshul Chaudhari
        </a>

        <nav className="flex items-center space-x-6 text-sm text-zinc-400">
          <a href="#about" className="hover:text-zinc-100 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">
            Skills
          </a>
          <a
            href="mailto:anshulchaudhari001@gmail.com"
            className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
