import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StrategySection from "@/components/StrategySection";
import BitcoinSection from "@/components/BitcoinSection";
import TaxSection from "@/components/TaxSection";
import TeamSection from "@/components/TeamSection";
import ProjectionsSection from "@/components/ProjectionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="font-inter">
      <Hero />
      <AboutSection />
      <StrategySection />
      <BitcoinSection />
      <TaxSection />
      <TeamSection />
      <ProjectionsSection />
      <Footer />
    </main>
  );
};

export default Index;
