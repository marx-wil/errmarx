import TopNav from "@/components/ui/TopNav";
import MobileNav from "@/components/ui/MobileNav";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />

      {/* Loading screen — animates out once progress reaches 100% */}
      <LoadingScreen />

      {/* Fixed navigation layers */}
      <TopNav />
      <MobileNav />

      {/* Persistent noise texture */}
      <div className="fixed inset-0 noise-texture z-[100] pointer-events-none" />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
