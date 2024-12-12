import AboutMe from "@/components/shared/about";
import Experiences from "@/components/shared/experiences";
import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/navbar";
import Projects from "@/components/shared/projects";
import Technology from "@/components/shared/technology";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden text-stone-300">
      <div className="fixed inset-0 -z-10 opacity-50">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="fixed inset-0 -z-20">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <AboutMe />
        <Technology />
        <Projects />
        <Experiences />
      </div>
    </main>
  );
}
