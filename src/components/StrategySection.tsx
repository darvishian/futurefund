import { ArrowRight, TrendingUp, Building, Store, Target } from "lucide-react";
import cosmicBurst from "@/assets/cosmic-burst.png";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

        {/* Strategy Differentiation */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Unique Approach to Bitcoin Treasury Strategy
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Existing Approach */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Existing Bitcoin Treasury Companies</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white/70">Taking underperforming business assets</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white/70">Layering on Bitcoin hoping appreciation outpaces lackluster business performance</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white/70">Using Bitcoin as a hedge for operational weaknesses</p>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div className="bg-gray-900 border border-primary/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Our Fund Strategy</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white/70">Taking high-growth, high-profit, healthy businesses</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white/70">Using profits as a machine to expand Bitcoin treasury at an accelerated rate</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white/70">Bitcoin amplifies already strong operational performance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Companies Table */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Bitcoin Treasury Companies Comparison</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">Company</TableHead>
                    <TableHead className="text-white">Ticker</TableHead>
                    <TableHead className="text-white">BTC Holdings</TableHead>
                    <TableHead className="text-white">Market Cap</TableHead>
                    <TableHead className="text-white">Revenue TTM</TableHead>
                    <TableHead className="text-white">Net Income TTM</TableHead>
                    <TableHead className="text-white">Debt/Equity</TableHead>
                    <TableHead className="text-white">PE Ratio</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-white font-medium">Strategy</TableCell>
                    <TableCell className="text-white">MSTR</TableCell>
                    <TableCell className="text-white">638,460</TableCell>
                    <TableCell className="text-white">~$90B</TableCell>
                    <TableCell className="text-white">$462.32M</TableCell>
                    <TableCell className="text-white">$4.73B</TableCell>
                    <TableCell className="text-white">0.16</TableCell>
                    <TableCell className="text-white">17.53</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">MARA Holdings</TableCell>
                    <TableCell className="text-white">MARA</TableCell>
                    <TableCell className="text-white">52,477</TableCell>
                    <TableCell className="text-white">~$5.6B</TableCell>
                    <TableCell className="text-white">$798.41M</TableCell>
                    <TableCell className="text-white">$678.78M</TableCell>
                    <TableCell className="text-white">0.55</TableCell>
                    <TableCell className="text-white">9.39</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">Twenty One Capital</TableCell>
                    <TableCell className="text-white">CEP/XXI</TableCell>
                    <TableCell className="text-white">43,514</TableCell>
                    <TableCell className="text-white">~$3.6B</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">Bitcoin Standard Treasury</TableCell>
                    <TableCell className="text-white">CEPO/BSTR</TableCell>
                    <TableCell className="text-white">30,021</TableCell>
                    <TableCell className="text-white">~$1.5B+</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">Bullish</TableCell>
                    <TableCell className="text-white">BLSH</TableCell>
                    <TableCell className="text-white">24,000</TableCell>
                    <TableCell className="text-white">$7.16B</TableCell>
                    <TableCell className="text-white">~$250M</TableCell>
                    <TableCell className="text-white">Negative</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                    <TableCell className="text-white">-20.7</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">Metaplanet</TableCell>
                    <TableCell className="text-white">3350.T</TableCell>
                    <TableCell className="text-white">20,136</TableCell>
                    <TableCell className="text-white">$4.06B</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                    <TableCell className="text-white">Negative</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">Riot Platforms</TableCell>
                    <TableCell className="text-white">RIOT</TableCell>
                    <TableCell className="text-white">19,309</TableCell>
                    <TableCell className="text-white">~$3.0B</TableCell>
                    <TableCell className="text-white">$541.72M</TableCell>
                    <TableCell className="text-white">-$94.84M</TableCell>
                    <TableCell className="text-white">0.26</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">Trump Media & Technology</TableCell>
                    <TableCell className="text-white">DJT</TableCell>
                    <TableCell className="text-white">18,430</TableCell>
                    <TableCell className="text-white">$4.64B</TableCell>
                    <TableCell className="text-white">$3.72M</TableCell>
                    <TableCell className="text-white">-$108.61M</TableCell>
                    <TableCell className="text-white">0.42</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">Galaxy Digital Holdings</TableCell>
                    <TableCell className="text-white">GLXY</TableCell>
                    <TableCell className="text-white">17,102</TableCell>
                    <TableCell className="text-white">$4.5B</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                    <TableCell className="text-white">$296M</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white font-medium">CleanSpark</TableCell>
                    <TableCell className="text-white">CLSK</TableCell>
                    <TableCell className="text-white">12,827</TableCell>
                    <TableCell className="text-white">$2.78B</TableCell>
                    <TableCell className="text-white">$537.40M</TableCell>
                    <TableCell className="text-white">-$195.56M</TableCell>
                    <TableCell className="text-white">0.34</TableCell>
                    <TableCell className="text-white">N/A</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;