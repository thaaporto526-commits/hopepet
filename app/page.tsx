import Hero from "@/components/home/hero";
import About from "@/components/home/about-section";
import Projects from "@/components/home/projects-section";
import Adoption from "@/components/home/adoption-section";
import Comments from "@/components/home/comments-section";
import News from "@/components/home/news-section";
import VetInterview from "@/components/home/vet-interview-section";
import SupportSection from "@/components/home/support-section";
import PartnersSection from "@/components/home/partners-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Adoption />
      <Comments />
      <News />
      <VetInterview />
      <SupportSection />
      <PartnersSection />
    </main>
  );
}
