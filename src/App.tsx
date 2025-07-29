import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4fbc1] to-[#c3b770]">
      <Header />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
