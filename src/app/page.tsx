import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Awards } from "@/components/sections/awards";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Awards />
      <Contact />
    </main>
  );
}
