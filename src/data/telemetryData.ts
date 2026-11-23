export interface ArchitectureNode {
  id: string;
  name: string;
  role: string;
  technology: string;
  status: "nominal" | "optimized" | "active";
  throughput: string;
  latency: string;
  tradeOffs: string[];
  responsibilities: string[];
}

export interface ProjectSystemSpec {
  databaseSchema: string;
  cachingStrategy: string;
  securityProtocols: string[];
  throughputSpecs: string;
  architectureNotes: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack System" | "Distributed Service" | "Cloud Application";
  summary: string;
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  systemSpecs: ProjectSystemSpec;
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Production-Tested";
    details: string;
  }[];
}

export const TELEMETRY_METRICS = [
  {
    label: "SYSTEM AVAILABILITY",
    value: "99.99%",
    detail: "Zero-Downtime Deployment SLA",
    status: "optimal",
  },
  {
    label: "P99 INGRESS LATENCY",
    value: "< 42ms",
    detail: "Edge Cached & Redis Layered",
    status: "optimal",
  },
  {
    label: "API ERROR BUDGET",
    value: "0.01%",
    detail: "Strict RFC 7807 Error Handling",
    status: "optimal",
  },
  {
    label: "TEST COVERAGE & INTEGRITY",
    value: "94%+",
    detail: "Unit, Integration & Contract Tests",
    status: "optimal",
  },
];

export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: "edge-client",
    name: "Edge Client & CDN",
    role: "Ingress & Edge Optimization",
    technology: "Next.js App Router / Vercel Edge / TLS 1.3",
    status: "nominal",
    throughput: "12.4k req/sec",
    latency: "15ms",
    responsibilities: [
      "Client-side Hydration & Static Pre-rendering (SSG/ISR)",
      "Strict Content Security Policy (CSP) & HTTP/3 termination",
      "Asset minification & image optimization pipeline",
    ],
    tradeOffs: [
      "Edge rendering eliminates cold starts but requires lightweight stateless handlers.",
      "Optimistic UI updates give sub-10ms perceived latency with background reconciliation.",
    ],
  },
  {
    id: "api-gateway",
    name: "API Gateway & Middleware",
    role: "Validation, Auth & Traffic Shaping",
    technology: "Node.js / Express / Zod / JWT",
    status: "active",
    throughput: "8.5k req/sec",
    latency: "8ms",
    responsibilities: [
      "Token Bucket Rate Limiting (DDoS & Brute Force mitigation)",
      "Runtime payload schema validation via Zod schemas",
      "Stateless JWT signature verification with cryptographic rotation",
    ],
    tradeOffs: [
      "Fail-fast input validation prevents downstream SQL or memory exhaustion attacks.",
      "Centralized middleware ensures consistent CORS and standard RFC 7807 problem details.",
    ],
  },
  {
    id: "cache-layer",
    name: "Distributed In-Memory Cache",
    role: "High-Throughput Sub-millisecond Storage",
    technology: "Redis / Upstash / In-Memory Store",
    status: "optimized",
    throughput: "25.0k ops/sec",
    latency: "1.2ms",
    responsibilities: [
      "Cache-aside pattern for hot read queries",
      "Distributed locks (Redlock) for idempotent operations",
      "Session state storage and active token revocation lists",
    ],
    tradeOffs: [
      "Trading eventual consistency for 10x query throughput improvements.",
      "TTL (Time-To-Live) expiration + write-through invalidation eliminates stale data.",
    ],
  },
  {
    id: "primary-db",
    name: "Relational Database Tier",
    role: "ACID Transactions & Structured Persistence",
    technology: "PostgreSQL / Prisma / Drizzle ORM",
    status: "nominal",
    throughput: "4.2k queries/sec",
    latency: "6ms",
    responsibilities: [
      "Strict foreign key relational constraints & index optimization",
      "PgBouncer connection pooling to avoid connection starvation",
      "Automated forward/backward migrations with zero schema downtime",
    ],
    tradeOffs: [
      "Normalized relational schema prevents anomalies; composite indexes tuned for P99 read paths.",
      "Read replicas handle heavy analytical queries while the primary node handles writes.",
    ],
  },
  {
    id: "async-workers",
    name: "Background Message Queue",
    role: "Asynchronous Workflows & Event Processing",
    technology: "BullMQ / Redis PubSub / Webhooks",
    status: "nominal",
    throughput: "1.8k jobs/sec",
    latency: "Async (Job Queue)",
    responsibilities: [
      "Transactional email and push notification dispatching",
      "Data pipeline aggregation and PDF/report generation",
      "Dead-letter queue (DLQ) retry strategies with exponential backoff",
    ],
    tradeOffs: [
      "Decouples heavy workloads from client HTTP request-response cycles.",
      "Guarantees at-least-once delivery with idempotent task IDs.",
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "telemetry-engine",
    title: "ApexFlow: Distributed Event Engine",
    tagline: "High-throughput telemetry ingestion & analytical event processor",
    category: "Distributed Service",
    summary:
      "Engineered an event aggregation pipeline designed to ingest, validate, and buffer 10,000+ telemetry events per second with sub-50ms query processing.",
    metrics: [
      { label: "THROUGHPUT", value: "10k+ events/s" },
      { label: "P99 LATENCY", value: "18ms" },
      { label: "DATA LOSS RATE", value: "0.00%" },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Redis", "PostgreSQL", "Docker"],
    systemSpecs: {
      databaseSchema:
        "Time-series partitioning on timestamp columns; composite B-Tree indexes on (tenant_id, event_type, created_at).",
      cachingStrategy:
        "Sliding-window Redis buffer aggregating batch writes to reduce disk I/O load on the primary relational database.",
      securityProtocols: [
        "HMAC SHA-256 API Key verification",
        "Strict IP-based Token Bucket rate limiting",
        "Role-Based Access Control (RBAC)",
      ],
      throughputSpecs: "10,000 requests/sec with graceful auto-scaling under peak load spikes.",
      architectureNotes:
        "Employs an asynchronous event bus pattern. The API gateway immediately returns 202 Accepted, offloading computation to background queue workers.",
    },
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "enterprise-saas",
    title: "CloudVault: Secure Multi-Tenant Cloud Platform",
    tagline: "Production SaaS application with granular RBAC & audit logging",
    category: "Full-Stack System",
    summary:
      "Architected a multi-tenant web application featuring row-level security, automated Stripe billing webhooks, real-time activity feeds, and cryptographic audit trails.",
    metrics: [
      { label: "AVAILABILITY", value: "99.98%" },
      { label: "DB RESPONSE", value: "4.8ms avg" },
      { label: "SECURITY AUDIT", value: "A+ Rating" },
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    systemSpecs: {
      databaseSchema:
        "Tenant isolation using PostgreSQL Row-Level Security (RLS) policies and foreign key cascading rules.",
      cachingStrategy:
        "Redis LRU cache for organization metadata, user session tokens, and permission manifests.",
      securityProtocols: [
        "HTTP-only, Secure SameSite cookies with CSRF tokens",
        "Zod strict validation on every mutation boundary",
        "Encrypted database columns for sensitive API credentials (AES-256-GCM)",
      ],
      throughputSpecs: "Engineered to comfortably sustain 2,500 active concurrent enterprise sessions.",
      architectureNotes:
        "Next.js App Router Server Components fetch data directly from co-located databases to eliminate network round-trip overhead.",
    },
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "realtime-collaboration",
    title: "SyncPulse: Low-Latency Collaborative Workspace",
    tagline: "Real-time state synchronization with Conflict-Free Replicated Data Types",
    category: "Cloud Application",
    summary:
      "Built a collaborative document editor enabling low-latency multi-user presence, optimistic concurrent updates, and automatic conflict resolution.",
    metrics: [
      { label: "SYNC LATENCY", value: "< 25ms" },
      { label: "SOCKET UPTIME", value: "99.99%" },
      { label: "CONCURRENCY", value: "500 peers/doc" },
    ],
    techStack: ["TypeScript", "WebSockets", "Node.js", "Redis Pub/Sub", "React", "Tailwind"],
    systemSpecs: {
      databaseSchema:
        "Document revision snapshots stored alongside append-only delta change logs.",
      cachingStrategy:
        "Redis Pub/Sub distributing ephemeral presence states across clustered socket servers.",
      securityProtocols: [
        "WSS encrypted WebSocket transport",
        "Connection handshake token verification",
        "Payload rate limiting per client connection",
      ],
      throughputSpecs: "Processes real-time delta broadcasts to thousands of subscribed clients concurrently.",
      architectureNotes:
        "Utilizes Redis adapter clustering to horizontally scale WebSocket connections across multiple worker instances.",
    },
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Architecture & Backend",
    description: "Robust services engineered for high availability, idempotency, and throughput",
    skills: [
      { name: "Node.js / Express / Next.js API", level: "Production-Tested", details: "Clean architecture, middleware pipelines, RFC 7807 error formats" },
      { name: "RESTful & GraphQL Protocols", level: "Production-Tested", details: "Resource-oriented design, pagination schemas, idempotent mutations" },
      { name: "Security & Authentication", level: "Production-Tested", details: "OAuth 2.0, JWT rotation, RBAC, CSRF, input sanitization via Zod" },
      { name: "Asynchronous Message Queuing", level: "Advanced", details: "BullMQ, background jobs, exponential backoff, dead-letter queues" },
    ],
  },
  {
    category: "Databases & Data Modeling",
    description: "Normalized transactional data design with high-performance caching",
    skills: [
      { name: "PostgreSQL & Relational Design", level: "Production-Tested", details: "ACID compliance, schema normalization, B-Tree indexing, migrations" },
      { name: "Redis Caching Patterns", level: "Production-Tested", details: "Cache-aside, distributed locks, rate-limiting counters, TTL strategies" },
      { name: "ORM & Query Performance", level: "Production-Tested", details: "Prisma, Drizzle, query profiling, avoiding N+1 bottlenecks" },
      { name: "NoSQL & Document Stores", level: "Core", details: "MongoDB, indexing, aggregation pipelines for denormalized workloads" },
    ],
  },
  {
    category: "Frontend & Client Engineering",
    description: "Responsive, accessible, and high-performance user interfaces",
    skills: [
      { name: "React 19 & Next.js App Router", level: "Production-Tested", details: "Server Components (RSC), Suspense streaming, client islands" },
      { name: "TypeScript (Strict Mode)", level: "Production-Tested", details: "Generics, type guards, discriminated unions, complete type safety" },
      { name: "Tailwind CSS & Design Tokens", level: "Production-Tested", details: "Fluid responsive layouts, design tokenization, zero-runtime overhead" },
      { name: "State & Optimistic UI", level: "Production-Tested", details: "Server Action mutations, optimistic state updates, client caching" },
    ],
  },
  {
    category: "DevOps & Production Reliability",
    description: "Continuous integration, containerization, and monitoring standards",
    skills: [
      { name: "Docker & Containerization", level: "Production-Tested", details: "Multi-stage Dockerfiles, minimal base images, local dev parity" },
      { name: "CI/CD Workflows", level: "Production-Tested", details: "GitHub Actions automated linting, test suites, preview deployments" },
      { name: "Observability & Logging", level: "Advanced", details: "Structured JSON logging, telemetry health checks, latency monitoring" },
      { name: "Cloud & Edge Deployment", level: "Production-Tested", details: "Vercel, Cloudflare, AWS services, edge CDN distribution" },
    ],
  },
];
