import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#090a0b] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      <Navigation />
      <Hero />
      <ExperienceSection />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
