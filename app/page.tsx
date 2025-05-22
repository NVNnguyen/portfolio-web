import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground>
        <Hero />
      </AnimatedBackground>
      <AnimatedBackground>
        <About />
      </AnimatedBackground>
      <AnimatedBackground>
        <Experience />
      </AnimatedBackground>
      <AnimatedBackground>
        <Projects />
      </AnimatedBackground>
      <AnimatedBackground>
        <Skills />
      </AnimatedBackground>
      <AnimatedBackground>
        <Education />
      </AnimatedBackground>
      <AnimatedBackground>
        <Contact />
      </AnimatedBackground>
      <Footer />
    </main>
  );
}
