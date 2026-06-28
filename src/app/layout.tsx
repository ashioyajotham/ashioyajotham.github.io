import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashioya Jotham Victor — AI Safety Researcher",
  description:
    "Researcher focused on mechanistic interpretability, chain-of-thought reasoning, and AI alignment. Google Developer Expert (GDE) - AI. Jr Research Fellow at ILINA Program.",
  keywords: [
    "AI Safety",
    "Machine Learning",
    "Interpretability",
    "AI Alignment",
    "Google Developer Expert",
    "GDE",
    "ILINA Program",
    "Jr Research Fellow",
    "Mechanistic Interpretability",
    "Chain-of-Thought",
    "GDG Pwani",
  ],
  authors: [{ name: "Ashioya Jotham Victor" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐘</text></svg>",
  },
  openGraph: {
    title: "Ashioya Jotham Victor — AI Safety Researcher",
    description:
      "Researcher focused on mechanistic interpretability, chain-of-thought reasoning, and AI alignment.",
    url: "https://ashioyajotham.github.io",
    siteName: "Ashioya Jotham Victor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashioya Jotham Victor — AI Safety Researcher",
    description:
      "Researcher focused on mechanistic interpretability, chain-of-thought reasoning, and AI alignment.",
    creator: "@ashioyajotham_",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${pressStart.variable} ${vt323.variable}`}
    >
      <body
        className="font-terminal antialiased pixel-grid"
        style={{ background: "var(--px-bg)", color: "var(--px-white)" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}