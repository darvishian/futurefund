import { Users, TrendingUp, Building2, Store } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Expert Team
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Seasoned team offering passive investors stable income, tax mitigation, 
            and asymmetric upside from digital assets.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Arch Public */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Arch Public</h3>
                <p className="text-sm text-white/70">Bitcoin Algorithm Experts</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Domain Expertise</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Proprietary Bitcoin trading algorithms</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Optimal entry point identification</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Risk reduction and volatility management</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* BAMI */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mr-4">
                <Building2 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">BAMI</h3>
                <p className="text-sm text-white/70">Real Estate & Financial Engineering</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Core Competencies</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Real estate acquisition and management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tax optimization strategies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Financial engineering and structuring</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Black Mountain Soda */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Black Mountain Soda</h3>
                <p className="text-sm text-white/70">QSR Expansion Specialists</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Operational Excellence</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Excellence in QSR expansion</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Swig store management expertise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Rapid growth and high-cash-flow operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Partnership Benefits */}
        <div className="mt-16 bg-gray-900 border border-gray-700 rounded-2xl p-8">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-2xl font-bold text-white">Strategic Partnership Benefits</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-white mb-2">Stable Income</h4>
              <p className="text-sm text-white/70">Predictable cash flows from real estate and Swig operations</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-white mb-2">Tax Mitigation</h4>
              <p className="text-sm text-white/70">Advanced depreciation strategies to shield gains</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Store className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-white mb-2">Asymmetric Upside</h4>
              <p className="text-sm text-white/70">Digital asset growth potential with downside protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;