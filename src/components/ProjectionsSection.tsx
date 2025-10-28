import { useState } from "react";
import { Calculator, DollarSign, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import cosmicBurst from "@/assets/cosmic hill.png";
import EmailGate from "@/components/EmailGate";

const ProjectionsSection = () => {
  const [investment, setInvestment] = useState(1000000);
  
  // Base projections for $1M investment
  const baseDepreciation = 810333;
  const baseReturn = 7248506;
  
  // Calculate scaled projections
  const scaledDepreciation = (baseDepreciation * (investment / 1000000)).toLocaleString('en-US');
  const scaledReturn = (baseReturn * (investment / 1000000)).toLocaleString('en-US');
  
  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/,/g, '')) || 0;
    setInvestment(value);
  };
  
  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US');
  };

  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background Image */}
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Target Return Projections
          </h2>
          <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto">
            Calculate your potential returns based on our base case assumptions: 
            24% Bitcoin CAGR and successful Swig expansion goals.
          </p>
        </div>
        
        <EmailGate 
          source="target_returns_projections" 
          title="Request Access to Target Returns"
          description="Enter your email to view detailed return projections and investment calculations."
        >
          {/* Investment Calculator */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12">
            <div className="flex items-center mb-4 sm:mb-8">
              <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Investment Calculator</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <Label htmlFor="investment" className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 block">
                  Intended Investment Amount
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                  <Input
                    id="investment"
                    type="text"
                    value={formatCurrency(investment)}
                    onChange={handleInvestmentChange}
                    className="pl-10 text-lg sm:text-xl h-12 sm:h-14 font-semibold bg-gray-800 border-gray-600 text-white"
                    placeholder="1,000,000"
                  />
                </div>
                
                <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gray-800 rounded-xl">
                  <h4 className="font-semibold text-white mb-4">Investment Structure</h4>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li>• Common Shares: $250,000 to $999,999</li>
                    <li>• Preferred Shares: $1,000,000+</li>
                    <li>• Both classes: 80/20 LP/GP carry split</li>
                    <li>• Depreciation via K-1s offsets personal gains</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-primary/10 rounded-xl p-4 sm:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2" />
                    <h4 className="font-semibold text-white">Total Bonus Depreciation</h4>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">${scaledDepreciation}</div>
                  <p className="text-sm text-white/70 mt-1">Tax benefits from real estate depreciation</p>
                </div>
                
                <div className="bg-accent/10 rounded-xl p-4 sm:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-accent mr-2" />
                    <h4 className="font-semibold text-white">Total LP Return</h4>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">${scaledReturn}</div>
                  <p className="text-sm text-white/70 mt-1">Net-of-fee projected return over investment period</p>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-4 sm:p-6">
                  <h4 className="font-semibold text-white mb-2 sm:mb-3">Key Metrics</h4>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <div className="text-primary font-bold">8.35x</div>
                      <div className="text-white/70">Target MOIC</div>
                    </div>
                    <div>
                      <div className="gradient-text font-bold">28.63%</div>
                      <div className="text-white/70">IRR (Base Case)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 bg-gray-800 rounded-xl">
              <p className="text-sm text-white/70 text-center">
                <strong>Important Disclaimer:</strong> These are projections based on assumptions. 
                Actual returns may vary significantly and past performance does not guarantee future results.
              </p>
            </div>
          </div>
          
          {/* Additional Projections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Bitcoin Target by 2035</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Target BTC Owned:</span>
                  <span className="font-bold text-primary">2,168 BTC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Treasury Value:</span>
                  <span className="font-bold gradient-text">$2.2B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Target BTC Price:</span>
                  <span className="font-bold text-primary">$1M/BTC</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Investment Assumptions</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Bitcoin CAGR:</span>
                  <span className="font-bold text-primary">24%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Investment Period:</span>
                  <span className="font-bold gradient-text">10+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Swig Locations:</span>
                  <span className="font-bold text-primary">170 Stores</span>
                </div>
              </div>
            </div>
          </div>
        </EmailGate>
      </div>
    </section>
  );
};

export default ProjectionsSection;