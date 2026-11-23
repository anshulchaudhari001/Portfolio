"use client";

import React, { useState } from "react";
import { Terminal as TerminalIcon, Play, RefreshCw, CheckCircle2, ShieldCheck } from "lucide-react";

export function LiveTerminal() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<"status" | "skills" | "architecture">("status");
  const [loading, setLoading] = useState(false);
  const [responseOutput, setResponseOutput] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<{ status: number; duration: number } | null>(null);

  const executeApiQuery = async (endpoint: "status" | "skills" | "architecture") => {
    setSelectedEndpoint(endpoint);
    setLoading(true);
    const start = performance.now();

    try {
      const res = await fetch(`/api/telemetry?endpoint=${endpoint}`);
      const duration = Math.round(performance.now() - start);
      const data = await res.json();
      setMetrics({ status: res.status, duration });
      setResponseOutput(JSON.stringify(data, null, 2));
    } catch {
      setMetrics({ status: 500, duration: 0 });
      setResponseOutput(JSON.stringify({ error: "Failed to reach edge endpoint" }, null, 2));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="terminal" className="py-16 border-b border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-2">
          <TerminalIcon className="h-4 w-4" />
          <span>INTERACTIVE PROOF &bull; LIVE EDGE API SANDBOX</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Live API Terminal & Edge Endpoint Inspector
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-3xl">
          Click an endpoint query below to execute real HTTP requests against the live Next.js Edge API
          handler. Inspect real-time response payloads, status codes, and latency headers.
        </p>

        <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
          {/* Terminal Title Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 bg-zinc-900/80 px-4 py-3">
            <div className="flex items-center space-x-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 font-mono text-xs text-zinc-400">
                bash - edge-session@anshul-portfolio:~
              </span>
            </div>

            <div className="flex items-center space-x-3 text-xs font-mono">
              {metrics && (
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-400 font-bold">HTTP {metrics.status} OK</span>
                  <span className="text-zinc-500">&bull;</span>
                  <span className="text-cyan-400 font-bold">{metrics.duration}ms RTT</span>
                </div>
              )}
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800/80 bg-zinc-900/30 px-4 py-2.5 font-mono text-xs">
            <span className="text-zinc-500">QUERY:</span>
            <button
              onClick={() => executeApiQuery("status")}
              disabled={loading}
              className={`rounded px-2.5 py-1 transition-colors ${
                selectedEndpoint === "status"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              GET /api/telemetry?endpoint=status
            </button>
            <button
              onClick={() => executeApiQuery("skills")}
              disabled={loading}
              className={`rounded px-2.5 py-1 transition-colors ${
                selectedEndpoint === "skills"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              GET /api/telemetry?endpoint=skills
            </button>
            <button
              onClick={() => executeApiQuery("architecture")}
              disabled={loading}
              className={`rounded px-2.5 py-1 transition-colors ${
                selectedEndpoint === "architecture"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              GET /api/telemetry?endpoint=architecture
            </button>

            <button
              onClick={() => executeApiQuery(selectedEndpoint)}
              disabled={loading}
              className="ml-auto inline-flex items-center space-x-1 rounded bg-emerald-500 px-3 py-1 font-semibold text-zinc-950 hover:bg-emerald-400 transition-colors"
            >
              {loading ? (
                <RefreshCw className="h-3 w-3 animate-spin" />
              ) : (
                <Play className="h-3 w-3 fill-current" />
              )}
              <span>Execute</span>
            </button>
          </div>

          {/* Terminal Screen Output */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto min-h-[220px]">
            {responseOutput ? (
              <pre className="text-emerald-400/90 leading-relaxed">
                <code>{responseOutput}</code>
              </pre>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-zinc-500 text-center">
                <TerminalIcon className="h-8 w-8 mb-2 opacity-40 text-emerald-400" />
                <p>Click "Execute" or select any query above to fire an active request to the live API route.</p>
                <p className="text-[11px] text-zinc-600 mt-1">
                  Tests genuine serverless Next.js edge route handling and response time.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
