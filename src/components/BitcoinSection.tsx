import { TrendingUp, Award, Globe } from "lucide-react";

const BitcoinSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bitcoin: A Superior Store of Value
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-white">Performance Track Record</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-primary/10 rounded-xl p-6">
                  <div className="text-4xl font-bold text-primary mb-2">83.9%</div>
                  <div className="text-white/70">Average annualized returns over the past decade</div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Driven by key factors:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-white/70">Inflation hedge</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-white/70">De-dollarization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-white/70">Mass adoption</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-white/70">Clear regulation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-xl font-bold text-white">Market Potential</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-white/70 leading-relaxed">
                  Bitcoin is poised to eclipse gold's <span className="gradient-text font-semibold">$23T market cap</span>, 
                  implying a price above <span className="text-primary font-semibold">$1M/BTC</span> 
                  (24%+ 10-year CAGR from ~$112K).
                </p>
                
                <div className="bg-accent/10 rounded-xl p-4">
                  <div className="text-2xl font-bold gradient-text mb-1">$1M/BTC</div>
                  <div className="text-sm text-white/60">Target price when matching gold's market cap</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-white">Corporate Adoption</h3>
              </div>
              
              <p className="text-white/70 leading-relaxed">
                Corporate treasuries like <span className="text-primary font-semibold">MicroStrategy</span> exemplify this trend, 
                demonstrating institutional confidence in Bitcoin as a treasury asset and store of value.
              </p>
            </div>
            
            {/* Chart Placeholder */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <h4 className="font-semibold text-white mb-4">Market Value Projection</h4>
              <div className="bg-gray-800 rounded-xl h-48 flex items-center justify-center">
                <p className="text-white/60">Bitcoin vs. Gold Market Value Chart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BitcoinSection;