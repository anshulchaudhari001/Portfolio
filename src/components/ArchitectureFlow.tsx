"use client";

import React, { useState } from "react";
import { ARCHITECTURE_NODES, ArchitectureNode } from "@/data/telemetryData";
import { Network, ArrowRight, Zap, CheckCircle2, ShieldAlert } from "lucide-react";

export function ArchitectureFlow() {
  const [activeNode, setActiveNode] = useState<ArchitectureNode>(ARCHITECTURE_NODES[1]);

  return (
    <section id="architecture" className="py-16 border-b border-zinc-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-2">
          <Network className="h-4 w-4" />
          <span>LIFECYCLE OBSERVABILITY &bull; REQUEST JOURNEY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Production Request Lifecycle & System Boundaries
        </h2>
        <p className="mt-2 text-sm text-zinc-400 max-w-3xl">
          Click any component in the request pipeline below to inspect the architectural trade-offs,
          security validation, and latency budgets engineered into each boundary.
        </p>

        {/* Interactive Pipeline Graph */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {ARCHITECTURE_NODES.map((node) => {
            const isSelected = activeNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`flex flex-col text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10"
                    : "border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-900"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">
                    {node.role.split(" ")[0]}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isSelected ? "bg-emerald-400" : "bg-zinc-600"
                    }`}
                  />
                </div>
                <div className="mt-2 font-semibold text-sm text-zinc-100">{node.name}</div>
                <div className="mt-1 font-mono text-[11px] text-emerald-400">{node.latency}</div>
              </button>
            );
          })}
        </div>

        {/* Active Node Inspector Details Pane */}
        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-white">{activeNode.name}</span>
                <span className="rounded bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-xs font-mono text-emerald-400">
                  {activeNode.status.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">{activeNode.role}</p>
            </div>

            <div className="flex items-center space-x-4 font-mono text-xs">
              <div className="rounded border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-zinc-300">
                <span className="text-zinc-500">THROUGHPUT: </span>
                <span className="text-emerald-400 font-bold">{activeNode.throughput}</span>
              </div>
              <div className="rounded border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-zinc-300">
                <span className="text-zinc-500">P99 LATENCY: </span>
                <span className="text-cyan-400 font-bold">{activeNode.latency}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Responsibilities */}
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-300 mb-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>CORE SYSTEM RESPONSIBILITIES</span>
              </div>
              <ul className="space-y-2">
                {activeNode.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-2 text-xs text-zinc-300 leading-relaxed"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Trade-offs & Engineering Decisions */}
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-zinc-300 mb-3">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span>ENGINEERING DECISIONS & TRADE-OFFS</span>
              </div>
              <ul className="space-y-2">
                {activeNode.tradeOffs.map((trade, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-2 text-xs text-zinc-400 leading-relaxed bg-zinc-950/50 p-2.5 rounded-lg border border-zinc-800/60"
                  >
                    <span>{trade}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>TECH IMPLEMENTATION:</span>
            <span className="text-zinc-300">{activeNode.technology}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
