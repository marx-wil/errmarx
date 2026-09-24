import type { Metadata } from "next";
import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import CustomCursor from "@/components/ui/CustomCursor";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import LoadingScreen from "@/components/ui/LoadingScreen";
import MobileNav from "@/components/ui/MobileNav";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import TopNav from "@/components/ui/TopNav";

export const metadata: Metadata = {
  title: "Interface Lab",
  description: "The original interactive portfolio experience.",
  alternates: {
    canonical: "/lab",
  },
  openGraph: {
    title: "Interface Lab — Wilmarx",
    description: "The original interactive portfolio experience.",
    url: "/lab",
  },
  twitter: {
    title: "Interface Lab — Wilmarx",
    description: "The original interactive portfolio experience.",
  },
};

export default function LabPage() {
  return (
    <div className="lab-theme min-h-screen bg-background text-on-surface">
      <CustomCursor />
      <LoadingScreen />
      <TopNav />
      <MobileNav />

      <div className="fixed inset-0 noise-texture z-[100] pointer-events-none" />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
