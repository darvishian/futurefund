import { Button } from "@/components/ui/button";
import manriver from "@/assets/manriver.jpeg";
import archPublicLogo from "@/assets/ArchPublic_Logo_Stacked_1 Color - White.png";
import ff1Logo from "@/assets/FF1v3transparent.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 pt-16 sm:pt-0">
      
      {/* Mobile: stacked badge + logos above hero (in flow) */}
      <div className="sm:hidden w-full z-20">
        <div className="mx-auto flex flex-col items-center justify-center gap-2 px-4 pt-4">
          <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1.5">
            <span className="text-accent font-medium text-xs">For Accredited Investors Only</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              src={archPublicLogo}
              alt="Arch Public Logo"
              className="h-7 w-auto object-contain"
              loading="eager"
              width={120}
              height={48}
            />
            <div className="h-6 w-px bg-white/30"></div>
            <img
              src={ff1Logo}
              alt="Future Fund One Logo"
              className="h-7 w-auto object-contain"
              loading="eager"
              width={120}
              height={48}
            />
          </div>
        </div>
      </div>

      {/* Desktop+: corners badge + logos (absolute) */}
      <div className="hidden sm:block">
        <div className="absolute top-6 sm:top-8 left-4 sm:left-8 z-20 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2">
          <span className="text-accent font-medium text-sm">For Accredited Investors Only</span>
        </div>
        <div className="absolute top-6 sm:top-8 right-4 sm:right-8 z-20 flex items-center gap-4">
          <img
            src={archPublicLogo}
            alt="Arch Public Logo"
            className="h-10 md:h-12 w-auto object-contain"
            loading="eager"
            width={120}
            height={48}
          />
          <div className="h-8 md:h-12 w-px bg-white/30"></div>
          <img
            src={ff1Logo}
            alt="Future Fund One Logo"
            className="h-10 md:h-12 w-auto object-contain"
            loading="eager"
            width={120}
            height={48}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="animate-fade-in">
          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <img
              src={manriver}
              alt="Man by river"
              className="w-32 h-20 sm:w-40 sm:h-28 md:w-56 md:h-36 object-contain rounded-lg shadow-2xl opacity-90"
              loading="eager"
              width={224}
              height={144}
            />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4 sm:mb-6 hero-text-glow animate-glow-pulse">
            Future Fund One
          </h1>
          
          <h2 className="text-base sm:text-lg md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl sm:max-w-4xl mx-auto font-light">
            A Tax-Advantaged Bitcoin Supercharger – Capturing Bitcoin's Potential with 
            Stable Real Estate Income and Algorithmic Precision
          </h2>
          
          <p className="text-sm sm:text-base text-white/80 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Built on three pillars: <span className="gradient-text font-medium">Bitcoin Investment</span> enhanced by proprietary algorithms,
            <span className="gradient-text font-medium"> Real Estate Cash Flow</span> fueling accumulation, and
            <span className="gradient-text font-medium"> Tax Efficiency</span> via depreciation benefits.
          </p>
          
          {/* Waitlist Button */}
          <div className="max-w-sm mx-auto space-y-2 sm:space-y-3">
            <Button
              asChild
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-500 disabled:cursor-not-allowed text-white px-4 sm:px-6 py-2 text-sm cosmic-glow transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://investors.appfolioim.com/bandminvest/investor/submit_interest/4"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                Join the Waitlist
              </a>
            </Button>
          </div>

          {/* Schedule Call Button */}
          <div className="max-w-sm mx-auto mt-3 sm:mt-4">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm min-h-[44px]"
            >
              <a
                href="https://calendar.app.google/7j3AVzoz5WGptCVE7?_kx=4Yo6TKgOFJ35T6kHnb87Sw.RjX6qj"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-white/50 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;