import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full-Stack Software Engineer | Portfolio",
  description: "Full-stack developer portfolio showcasing system architecture, production standards, and scalable web engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 font-sans selection:bg-indigo-500/20 selection:text-indigo-300">
        {children}
      </body>
    </html>
  );
}
