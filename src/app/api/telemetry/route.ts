import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get("endpoint") || "status";

  const startTime = Date.now();

  const payload: Record<string, unknown> = {
    engineer: "Anshul Chaudhari",
    title: "Full-Stack Software Engineer",
    version: "2.6.4-prod",
    timestamp: new Date().toISOString(),
    environment: "production",
    ssl: "TLS_1_3_X25519",
  };

  if (endpoint === "skills") {
    payload.focus_areas = [
      "Distributed System Design & Microservices",
      "Next.js App Router & React 19 Client Islands",
      "PostgreSQL Query Optimization & ACID Transactions",
      "In-Memory Redis Caching & Distributed Locks",
      "Zero-Downtime CI/CD Pipelines & Docker Parity",
    ];
    payload.compliance = ["RFC 7807 Error Standards", "Zod Schema Validation", "OWASP Top 10 Hardened"];
  } else if (endpoint === "architecture") {
    payload.architecture_principles = {
      cache_invalidation: "Cache-Aside with TTL + Event-driven write invalidation",
      idempotency: "Unique transaction request tokens stored in distributed Redis",
      resilience: "Dead-letter queues with exponential backoff and circuit breakers",
      data_layer: "Strict relational integrity with connection pooling (PgBouncer)",
    };
  } else {
    payload.system_health = {
      uptime_sla: "99.99%",
      status: "HEALTHY",
      active_connections: 124,
      p99_latency_budget: "< 50ms",
      load_average: [0.12, 0.08, 0.05],
    };
  }

  const durationMs = Date.now() - startTime;

  return NextResponse.json(
    {
      status: 200,
      statusText: "OK",
      execution_time_ms: Math.max(durationMs, 1),
      data: payload,
    },
    {
      headers: {
        "x-system-status": "nominal",
        "x-served-by": "edge-runtime",
        "cache-control": "no-store, max-age=0",
      },
    }
  );
}
