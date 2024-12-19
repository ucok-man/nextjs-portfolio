import AboutMe from "@/components/shared/about";
import Background from "@/components/shared/background";
import ContactSection from "@/components/shared/contact";
import Experiences from "@/components/shared/experiences";
import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/navbar";
import Projects from "@/components/shared/projects";
import Technology from "@/components/shared/technology";
import Testimonial from "@/components/shared/testimonial";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden text-gray-300">
      <Background />
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <AboutMe />
        <Technology />
        <Projects />
        <Experiences />
        <Testimonial />
        <ContactSection />
      </div>
    </main>
  );
}
