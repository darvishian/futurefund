const AboutSection = () => {
  return (
    <section id="about" className="py-20 gradient-bg-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Executive Summary
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Future Fund One is an evergreen vehicle raising <span className="text-primary font-semibold">$250M in tranches</span>, 
              deploying into tax-efficient real estate with immediate cash flow, opportunistic Swig Soda expansion, 
              and Bitcoin trading via Arch Public's algorithms.
            </p>
            
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              By channeling stable cash flows into a growing Bitcoin reserve, we deliver 
              <span className="text-accent font-semibold"> superior risk-adjusted returns</span>. 
              Our algorithms take advantage of volatility, while real estate tax benefits offset Bitcoin gains.
            </p>
            
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-white mb-6">Key Tailwinds</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white/70">Anticipated interest rate cuts driving real estate value growth</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white/70">Enhanced tax benefits under the Big Beautiful Bill</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white/70">Real estate income and value appreciation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white/70">Bitcoin's potential to rival gold's ~$23T market cap</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-lg font-medium text-white">
                  Price Target: <span className="gradient-text text-2xl font-bold">~$1M/BTC</span>
                </p>
                <p className="text-sm text-white/60 mt-1">
                  From today's ~$112K (24%+ 10-year CAGR potential)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;