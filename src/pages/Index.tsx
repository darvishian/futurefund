import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StrategySection from "@/components/StrategySection";
import TeamSection from "@/components/TeamSection";
import ProjectionsSection from "@/components/ProjectionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="font-inter">
      <Hero />
      <AboutSection />
      <StrategySection />
      <TeamSection />
      <ProjectionsSection />
      <Footer />
    </main>
  );
};

export default Index;
