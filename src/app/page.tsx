import { Navigation } from "@/components/Navigation";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { ProjectConsole } from "@/components/ProjectConsole";
import { SystemMatrix } from "@/components/SystemMatrix";
import { LiveTerminal } from "@/components/LiveTerminal";
import { FooterConsole } from "@/components/FooterConsole";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 telemetry-grid">
      <Navigation />
      <HeroTelemetry />
      <ArchitectureFlow />
      <ProjectConsole />
      <SystemMatrix />
      <LiveTerminal />
      <FooterConsole />
    </main>
  );
}
