import Hero from "@/components/Hero";
import BitcoinAccumulationSection from "@/components/BitcoinAccumulationSection";
import AboutSection from "@/components/AboutSection";
import StrategySection from "@/components/StrategySection";
import TeamSection from "@/components/TeamSection";
import ProjectionsSection from "@/components/ProjectionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="font-inter">
      <Hero />

      {/* Continuous gradient background from Bitcoin Accumulation to Footer */}
      <div className="gradient-bg-continuous">
        <BitcoinAccumulationSection />
        <AboutSection />
        <StrategySection />
        <TeamSection />
        <ProjectionsSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
