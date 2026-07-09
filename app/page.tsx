import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Timeline />
      </ScrollReveal>
      <ScrollReveal>
        <Certifications />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <Footer />
    </>
  );
}
