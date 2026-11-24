"use client";

import React from "react";
import { EXPERIENCES, EDUCATION_DATA } from "@/data/portfolioData";
import { Briefcase, GraduationCap, MapPin, Calendar, Check } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-zinc-200 dark:border-zinc-800/60 scroll-mt-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Work Experience */}
        <div>
          <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 mb-2">
            <Briefcase className="h-5 w-5" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Work Experience
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Professional track record building client-facing web applications, API integrations, and networking infrastructure.
          </p>

          <div className="mt-8 space-y-6 sm:space-y-8">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 p-5 sm:p-7 shadow-sm dark:shadow-none"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col sm:items-end gap-3 sm:gap-0.5 text-xs text-zinc-500 dark:text-zinc-400 mt-1 sm:mt-0">
                    <span className="flex items-center space-x-1 font-medium">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                    >
                      <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex flex-wrap gap-1.5">
                  {exp.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 pt-12 border-t border-zinc-200/60 dark:border-zinc-800/40">
          <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 mb-2">
            <GraduationCap className="h-5 w-5" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Education
            </h3>
          </div>

          <div className="mt-6 space-y-4">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 p-5 sm:p-6 shadow-sm dark:shadow-none flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {edu.institution} &bull; {edu.location}
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start">
                  <span className="inline-block rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {edu.score}
                  </span>
                  <div className="text-xs text-zinc-500 sm:mt-1">{edu.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
