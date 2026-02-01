import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Awards } from "@/components/sections/awards";
import { Contact } from "@/components/sections/contact";
import { Logo } from "@/components/layout/logo";
import { SectionNavigation } from "@/components/layout/section-navigation";
import { MenuAction } from "@/components/layout/menu-action";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Logo />
      <SectionNavigation />
      <MenuAction />
      <div className="w-full">
        <Hero />
      </div>

      <div className="w-full">
        <About />
      </div>

      <div className="w-full">
        <Experience />
      </div>

      <div className="w-full bg-slate-50 dark:bg-transparent">
        <Projects />
      </div>

      <div className="w-full">
        <Awards />
      </div>

      <div className="w-full">
        <Contact />
      </div>
    </main>
  );
}
