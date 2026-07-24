import { Hero } from "@/components/sections/Hero";
import { ExecutiveSummary } from "@/components/sections/ExecutiveSummary";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { EducationAwards } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <ExecutiveSummary />
      <Experience />
      <Skills />
      <EducationAwards />
      <Contact />
      <Footer />
    </main>
  );
}
