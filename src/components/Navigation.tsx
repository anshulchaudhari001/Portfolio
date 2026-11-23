"use client";

import React, { useState, useEffect } from "react";
import { Activity, ShieldCheck, Terminal, Cpu } from "lucide-react";

export function Navigation() {
  const [latency, setLatency] = useState(14);

  // Subtle real-time latency jitter simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 8) + 12);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand / Title */}
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Cpu className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold tracking-tight text-zinc-100">
                Anshul Chaudhari
              </span>
              <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
                v2.6.4-prod
              </span>
            </div>
            <p className="text-[11px] text-zinc-400">Full-Stack Software Engineer</p>
          </div>
        </div>

        {/* Real-time System Status Pills */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-emerald-400 font-medium">SYS_STATUS: NOMINAL</span>
          </div>

          <div className="flex items-center space-x-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400">
            <Activity className="h-3.5 w-3.5 text-cyan-400" />
            <span className="font-mono">RTT: {latency}ms</span>
          </div>

          <div className="flex items-center space-x-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span className="font-mono">SSL / TLS 1.3</span>
          </div>
        </div>

        {/* Quick Jump Links */}
        <nav className="flex items-center space-x-3 text-xs font-mono">
          <a
            href="#architecture"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            [Architecture]
          </a>
          <a
            href="#projects"
            className="text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            [Systems]
          </a>
          <a
            href="#terminal"
            className="flex items-center space-x-1 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 px-2.5 py-1 text-zinc-300 transition-colors"
          >
            <Terminal className="h-3 w-3 text-emerald-400" />
            <span>Sandbox</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
