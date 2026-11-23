"use client";

import React, { useState } from "react";
import { FEATURED_PROJECTS, Project } from "@/data/telemetryData";
import { Layers, Database, Shield, Cpu, ExternalLink, Code2 } from "lucide-react";

export function ProjectConsole() {
  const [viewModes, setViewModes] = useState<Record<string, "user" | "system">>({
    "telemetry-engine": "system",
    "enterprise-saas": "user",
    "realtime-collaboration": "system",
  });

  const toggleView = (projectId: string, mode: "user" | "system") => {
    setViewModes((prev) => ({ ...prev, [projectId]: mode }));
  };

  return (
    <section id="projects" className="py-16 border-b border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-2">
          <Layers className="h-4 w-4" />
          <span>PRODUCTION-READY SYSTEMS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Engineered Systems & Full-Stack Projects
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-3xl">
          Toggle between <strong>User Experience View</strong> (features and outcomes) and{" "}
          <strong>System Specs View</strong> (data schemas, caching, and security boundaries).
        </p>

        <div className="mt-10 space-y-8">
          {FEATURED_PROJECTS.map((project) => {
            const currentView = viewModes[project.id] || "user";

            return (
              <div
                key={project.id}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden backdrop-blur-sm transition-all hover:border-zinc-700"
              >
                {/* Project Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 bg-zinc-950/60 px-6 py-4">
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">{project.title}</h3>
                  </div>

                  {/* Dual-View Toggle Switch */}
                  <div className="flex items-center rounded-lg border border-zinc-800 bg-zinc-900 p-1 font-mono text-xs">
                    <button
                      onClick={() => toggleView(project.id, "user")}
                      className={`px-3 py-1 rounded transition-colors ${
                        currentView === "user"
                          ? "bg-zinc-800 text-white font-medium"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      User View
                    </button>
                    <button
                      onClick={() => toggleView(project.id, "system")}
                      className={`px-3 py-1 rounded transition-colors ${
                        currentView === "system"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      System Specs
                    </button>
                  </div>
                </div>

                {/* Body Content depending on Mode */}
                <div className="p-6">
                  {currentView === "user" ? (
                    <div>
                      <p className="text-sm text-zinc-300 leading-relaxed">{project.summary}</p>

                      {/* Performance Metrics Badges */}
                      <div className="mt-5 grid grid-cols-3 gap-3">
                        {project.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3"
                          >
                            <span className="text-[10px] font-mono text-zinc-500 uppercase">
                              {m.label}
                            </span>
                            <div className="mt-0.5 text-base font-bold text-emerald-400 font-mono">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Deep Technical System Specs View */
                    <div className="space-y-4">
                      <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-4">
                        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
                          <Database className="h-3.5 w-3.5" />
                          <span>DATABASE MODELING & SCHEMA OPTIMIZATION</span>
                        </div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {project.systemSpecs.databaseSchema}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-4">
                          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-1">
                            <Cpu className="h-3.5 w-3.5" />
                            <span>CACHING & THROUGHPUT STRATEGY</span>
                          </div>
                          <p className="text-xs text-zinc-300 leading-relaxed">
                            {project.systemSpecs.cachingStrategy}
                          </p>
                        </div>

                        <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-4">
                          <div className="flex items-center space-x-2 text-xs font-mono text-indigo-400 mb-1">
                            <Shield className="h-3.5 w-3.5" />
                            <span>SECURITY & VALIDATION BOUNDARIES</span>
                          </div>
                          <ul className="space-y-1">
                            {project.systemSpecs.securityProtocols.map((sec, i) => (
                              <li key={i} className="text-xs text-zinc-300 flex items-center space-x-1.5">
                                <span className="h-1 w-1 rounded-full bg-indigo-400"></span>
                                <span>{sec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-3 text-xs font-mono text-zinc-400">
                        <span className="text-zinc-500">ARCHITECTURAL NOTES: </span>
                        {project.systemSpecs.architectureNotes}
                      </div>
                    </div>
                  )}

                  {/* Tech stack pills & links */}
                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[11px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-3 text-xs font-mono">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center space-x-1 text-zinc-400 hover:text-white transition-colors"
                        >
                          <Code2 className="h-3.5 w-3.5" />
                          <span>Code Repository</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>Live System</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
