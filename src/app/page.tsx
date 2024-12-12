import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/navbar";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden text-stone-300">
      <div className="fixed inset-0 -z-10 opacity-50">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="fixed inset-0 -z-20">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
