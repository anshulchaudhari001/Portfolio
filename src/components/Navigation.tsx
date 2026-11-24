"use client";

import React, { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-[#090a0b]/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 sm:px-6 py-3.5">
        <a
          href="#"
          className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-white transition-colors tracking-tight text-sm sm:text-base"
        >
          Anshul Choudhari
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-5 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Experience
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

          <ThemeToggle />
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#090a0b]/95 backdrop-blur-md px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <a
              href="#about"
              onClick={closeMenu}
              className="px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={closeMenu}
              className="px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={closeMenu}
              className="px-2 py-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="px-2 py-1.5 rounded-md text-emerald-600 dark:text-emerald-400 font-semibold"
            >
              Contact Me &rarr;
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
