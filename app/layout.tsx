import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { FooterBar } from "@/components/FooterBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "AppCortex – Live App Market Intelligence",
  description:
    "AppCortex is a live dashboard for the global app economy – track apps, categories, regions, and trends in one place.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className="min-h-screen flex flex-col antialiased transition-colors duration-500"
        style={{
          backgroundColor: 'var(--bg-body)',
          color: 'var(--text-primary)'
        }}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="appcortex-theme"
        >
          <TopBar />
          <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
            {children}
          </main>
          <FooterBar />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
