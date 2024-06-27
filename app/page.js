import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SideFloatingNav from "@/components/ui/SideFloatingNav";
import { GridSmallBackground, HeroHighlight } from "@/components/ui/background";
import { TracingBeam } from "@/components/ui/tracingBeam";
import { navItems } from "@/utils/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SideFloatingNav navItems={navItems} />
      <HeroHighlight className="w-full cursor-none">
        <Hero />
      </HeroHighlight>
      <GridSmallBackground>
        <TracingBeam className="pb-4">
          <About />
        </TracingBeam>
        <Skills />
        <Projects />
      </GridSmallBackground>
    </main>
  );
}
