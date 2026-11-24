import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anshul Chaudhari | Full-Stack Software Engineer",
  description:
    "Personal portfolio of Anshul Chaudhari, showcasing full-stack web applications, system design, and database engineering.",
  icons: {
    icon: "/letter-a.png",
    shortcut: "/letter-a.png",
    apple: "/letter-a.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-zinc-950">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
