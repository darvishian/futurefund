import { Shield, ArrowUpCircle, RefreshCw } from "lucide-react";

const TaxSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bitcoin Accumulation and Tax Reduction
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-white">Tax Shield Strategy</h3>
              </div>
              
              <p className="text-white/70 leading-relaxed mb-6">
                Target NNN properties with AAA tenants for predictable cash flow. 
                <span className="text-primary font-semibold"> 100% bonus depreciation</span> creates 
                phantom losses shielding gains.
              </p>
              
              <div className="bg-primary/10 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">Example: Car Wash Investment</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">Purchase Price:</span>
                    <span className="font-semibold text-white">$4.5M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Tax Shield:</span>
                    <span className="font-semibold text-primary">$3.6M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Annual Cash Flow:</span>
                    <span className="font-semibold text-accent">$315K/year</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <RefreshCw className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-xl font-bold text-white">Rinse & Repeat Strategy</h3>
              </div>
              
              <p className="text-white/70 leading-relaxed">
                Refinance and repeat the process for compounded growth. Each cycle generates 
                additional tax benefits while scaling the Bitcoin treasury through consistent cash flows.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <ArrowUpCircle className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-bold text-white">Accumulation Flow</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-primary/10 rounded-xl">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <div className="font-semibold text-white">Acquire AAA Properties</div>
                    <div className="text-sm text-white/70">High-yield, single-tenant assets</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-accent/10 rounded-xl">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <div className="font-semibold text-white">Generate Tax Benefits</div>
                    <div className="text-sm text-white/70">100% bonus depreciation creates phantom losses</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-primary/10 rounded-xl">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <div className="font-semibold text-white">Direct Cash Flows</div>
                    <div className="text-sm text-white/70">Free cash flow feeds Bitcoin treasury</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-accent/10 rounded-xl">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <div className="font-semibold text-white">Algorithmic Growth</div>
                    <div className="text-sm text-white/70">Arch Public strategies maximize returns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxSection;