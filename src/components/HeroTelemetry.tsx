"use client";

import React from "react";
import { TELEMETRY_METRICS } from "@/data/telemetryData";
import { Terminal, Database, Server, GitBranch, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function HeroTelemetry() {
  return (
    <section className="relative pt-12 pb-16 border-b border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Operational Banner */}
        <div className="inline-flex items-center space-x-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400 mb-6">
          <CheckCircle2 className="h-3.5 w-3.5" />
          <span>PRODUCTION TELEMETRY ACTIVE &bull; ALL CLUSTERS HEALTHY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Headline & Identity */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Building Scalable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">
                Full-Stack Systems
              </span>{" "}
              & Cloud Architectures
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Software engineer focused on high-availability web services, relational data modeling,
              sub-50ms API response budgets, and end-to-end production standards.
            </p>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                <span>Inspect System Architectures</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#terminal"
                className="inline-flex items-center space-x-2 rounded-lg border border-zinc-700 bg-zinc-900/80 px-5 py-2.5 text-sm font-mono text-zinc-300 hover:border-zinc-500 hover:text-white transition-all"
              >
                <Terminal className="h-4 w-4 text-emerald-400" />
                <span>Execute Live API Sandbox</span>
              </a>
            </div>

            {/* Core Architectural Pillars */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-zinc-800/80 pt-6">
              <div>
                <div className="flex items-center space-x-1.5 text-zinc-300 text-xs font-mono">
                  <Server className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Resilient APIs</span>
                </div>
                <p className="mt-1 text-[11px] text-zinc-500">Idempotency & Rate Limiting</p>
              </div>
              <div>
                <div className="flex items-center space-x-1.5 text-zinc-300 text-xs font-mono">
                  <Database className="h-3.5 w-3.5 text-cyan-400" />
                  <span>ACID Databases</span>
                </div>
                <p className="mt-1 text-[11px] text-zinc-500">PostgreSQL & Redis Caching</p>
              </div>
              <div>
                <div className="flex items-center space-x-1.5 text-zinc-300 text-xs font-mono">
                  <GitBranch className="h-3.5 w-3.5 text-indigo-400" />
                  <span>CI/CD & Docker</span>
                </div>
                <p className="mt-1 text-[11px] text-zinc-500">Automated Testing & Ship</p>
              </div>
            </div>
          </div>

          {/* Telemetry HUD Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  <span className="font-mono text-xs text-zinc-300 tracking-wider">
                    PRODUCTION_METRICS_HUD
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">REFRESH: 5s POLLING</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {TELEMETRY_METRICS.map((metric, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3 hover:border-zinc-700 transition-colors"
                  >
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      {metric.label}
                    </div>
                    <div className="mt-1 font-mono text-2xl font-bold text-white tracking-tight">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-[11px] text-emerald-400/90 font-mono">
                      {metric.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status footer inside HUD */}
              <div className="mt-4 rounded border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span>SECURITY ENCRYPTION:</span>
                <span className="text-emerald-400">AES-256-GCM / TLS 1.3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
