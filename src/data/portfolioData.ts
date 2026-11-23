export interface Project {
  title: string;
  description: string;
  problemSolved: string;
  architectureHighlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "ApexFlow — Real-time Event Processor",
    description:
      "A high-throughput event ingestion pipeline built to handle high write volumes without blocking HTTP clients.",
    problemSolved:
      "Direct database writes under high concurrent traffic caused connection starvation and write locks. I decoupled the ingestion layer using Redis as a write buffer and background queue workers.",
    architectureHighlights: [
      "API returns 202 Accepted immediately, pushing payloads into an in-memory queue",
      "Worker process consumes batches every 500ms and performs bulk inserts into PostgreSQL",
      "Redis sliding-window rate limiter prevents abuse per IP address",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Redis", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/anshulchaudhari001",
    liveUrl: "https://apexflow-demo.vercel.app",
  },
  {
    title: "CloudVault — Multi-Tenant SaaS Workspace",
    description:
      "A full-stack collaborative application featuring workspace management, role-based access control (RBAC), and transactional billing.",
    problemSolved:
      "Ensuring strict data isolation between tenants while keeping queries simple. Implemented PostgreSQL Row-Level Security (RLS) to enforce tenant separation at the database layer.",
    architectureHighlights: [
      "Row-Level Security (RLS) policies prevent cross-tenant data leaks",
      "Stateless JWT sessions backed by Redis cache for instant permission revocation",
      "Webhook receiver for Stripe billing with idempotency keys to prevent duplicate charges",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/anshulchaudhari001",
    liveUrl: "https://cloudvault-demo.vercel.app",
  },
  {
    title: "SyncPulse — Collaborative Real-Time Editor",
    description:
      "A lightweight collaborative workspace supporting multi-user presence, shared document cursors, and concurrent edits.",
    problemSolved:
      "Resolved socket message storms and state collisions when multiple users edit simultaneously using operational transformation concepts and Redis Pub/Sub.",
    architectureHighlights: [
      "WebSocket server horizontally scalable via Redis Pub/Sub channel adapters",
      "Optimistic client-side updates with conflict resolution on the server",
      "Heartbeat ping/pong mechanism to automatically clean up orphaned client connections",
    ],
    techStack: ["TypeScript", "WebSockets", "Node.js", "Redis Pub/Sub", "React"],
    githubUrl: "https://github.com/anshulchaudhari001",
  },
];

export const SKILLS_DATA = [
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express", "RESTful APIs", "JWT Auth & RBAC", "WebSockets", "Rate Limiting", "Zod Validation"],
  },
  {
    category: "Databases & Storage",
    skills: ["PostgreSQL", "Redis (Caching & Pub/Sub)", "Prisma ORM", "Schema Migrations", "B-Tree Indexing", "MongoDB"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "HTML5 & Semantic Web", "State Management"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git & GitHub Actions (CI/CD)", "Linux / Bash", "Postman", "Vercel / Cloudflare"],
  },
];
