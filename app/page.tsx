import Hero from "@/components/executive/Hero";
import About from "@/components/executive/About";
import SelectedWork from "@/components/executive/SelectedWork";
import Expertise from "@/components/executive/Expertise";
import Experience from "@/components/executive/Experience";
import Contact from "@/components/executive/Contact";
import Footer from "@/components/executive/Footer";
import ThemeToggle from "@/components/executive/ThemeToggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Expertise />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
