import { Users, TrendingUp, Building2, Store } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Our Expert Team
          </h2>
          <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto">
            Seasoned team offering passive investors stable income, tax mitigation, 
            and asymmetric upside from digital assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Arch Public */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Arch Public</h3>
                <p className="text-xs sm:text-sm text-white/70">Bitcoin Algorithm Experts</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Domain Expertise</h4>
              <ul className="space-y-2 text-white/70 text-sm">
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
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">BAMI</h3>
                <p className="text-xs sm:text-sm text-white/70">Real Estate & Financial Engineering</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Core Competencies</h4>
              <ul className="space-y-2 text-white/70 text-sm">
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
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                <Store className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Black Mountain Soda</h3>
                <p className="text-xs sm:text-sm text-white/70">QSR Expansion Specialists</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Operational Excellence</h4>
              <ul className="space-y-2 text-white/70 text-sm">
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
        <div className="mt-12 sm:mt-16 bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3" />
            <h3 className="text-xl sm:text-2xl font-bold text-white">Strategic Partnership Benefits</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-white mb-2">Stable Income</h4>
              <p className="text-sm text-white/70">Predictable cash flows from real estate and Swig operations</p>
            </div>
            
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-white mb-2">Tax Mitigation</h4>
              <p className="text-sm text-white/70">Advanced depreciation strategies to shield gains</p>
            </div>
            
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Store className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
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