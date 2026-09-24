import type { Metadata } from "next";
import {
  Fraunces,
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    document.documentElement.dataset.theme =
      savedTheme === "dark" ? "dark" : "light";
  } catch {
    document.documentElement.dataset.theme = "light";
  }
`;

export const metadata: Metadata = {
  title: "Wilmarx - Systems Engineer",
  description:
    "Backend platforms engineered for stability, scalability, and fault tolerance. Chief Information Officer at Stappl Inc.",
  keywords: [
    "systems engineer",
    "backend architect",
    "reliability engineering",
    "distributed systems",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
  ],
  authors: [{ name: "Wilmarx", url: "https://github.com/marx-wil" }],
  openGraph: {
    title: "Wilmarx - Systems Engineer",
    description:
      "Backend platforms engineered for stability, scalability, and fault tolerance.",
    type: "website",
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
      className={`${fraunces.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-background text-foreground font-body antialiased overflow-x-hidden">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
