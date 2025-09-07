import { ArrowRight, TrendingUp, Building, Store } from "lucide-react";
import cosmicBurst from "@/assets/cosmic-burst.png";

const StrategySection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${cosmicBurst})` }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Strategy: Funneling Reliable Profits into High-Growth Assets
          </h2>
        </div>
        
        {/* Three Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Bitcoin Strategies */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white">Bitcoin Strategies</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Employ Arch Public's proprietary algorithm for an <span className="text-primary font-semibold">80/20 trade-to-hold approach</span>: 
              80% active trading to exploit inefficiencies, 20% long-term holding. Acquires BTC at optimal entry points during troughs, 
              manages volatility, and provides downside protection.
            </p>
          </div>
          
          {/* NNN Real Estate */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                <Building className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white">NNN Real Estate</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Focus on single-tenant assets with high immediate yield and <span className="text-accent font-semibold">100% bonus depreciation</span> under 
              the Big Beautiful Bill, generating phantom losses to offset gains. Cash flows fuel Bitcoin treasury.
            </p>
          </div>
          
          {/* Swig Partnership */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                <Store className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white">Strategic Partnership with Swig Soda</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Partner to build up to <span className="text-primary font-semibold">170 drive-thru locations</span> over 3 years. 
              Act as landlord: Acquire land, perform improvements, secure long-term leases. Receive market-rate rent plus 
              up to <span className="text-accent font-semibold">37.5% of monthly net profits</span> per store into Bitcoin treasury.
            </p>
          </div>
        </div>
        
        {/* Strategy Flow */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Strategy Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="bg-accent/10 rounded-xl p-4 mb-3">
                <Building className="w-8 h-8 text-accent mx-auto" />
              </div>
              <p className="font-medium text-white">Real Estate & Swig Profits</p>
            </div>
            
            <ArrowRight className="w-6 h-6 text-white/60 rotate-90 md:rotate-0" />
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-xl p-4 mb-3">
                <TrendingUp className="w-8 h-8 text-primary mx-auto" />
              </div>
              <p className="font-medium text-white">Bitcoin Treasury</p>
            </div>
            
            <ArrowRight className="w-6 h-6 text-white/60 rotate-90 md:rotate-0" />
            
            <div className="text-center">
              <div className="bg-accent/10 rounded-xl p-4 mb-3">
                <TrendingUp className="w-8 h-8 text-accent mx-auto" />
              </div>
              <p className="font-medium text-white">Algorithmic Growth</p>
            </div>
          </div>
        </div>
        
        {/* Key Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10.04x</div>
            <div className="text-sm text-white/60">Target MOIC</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">31.4%</div>
            <div className="text-sm text-white/60">IRR (Base Case)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2,168</div>
            <div className="text-sm text-white/60">BTC Owned by 2035</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">$2.2B</div>
            <div className="text-sm text-white/60">BTC Treasury Value</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;