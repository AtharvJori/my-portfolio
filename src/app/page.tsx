import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero/About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* <section id="contact"><Contact /></section> */}
    </main>
  );
}
