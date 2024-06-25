import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { GridSmallBackground, HeroHighlight } from "@/components/ui/background";
import { TracingBeam } from "@/components/ui/tracingBeam";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-16">
      <HeroHighlight className="w-full cursor-none">
        <Hero />
      </HeroHighlight>
      <GridSmallBackground>
        <TracingBeam className="mb-8">
          <About />
        </TracingBeam>
        <Skills />
      </GridSmallBackground>
    </main>
  );
}
