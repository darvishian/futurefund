import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact & Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Join Investor List */}
          <div>
            <h3 className="text-xl font-bold mb-4">Join Our Investor List</h3>
            <Button
              asChild
              className="w-full bg-accent hover:bg-accent/90 text-cosmic-dark"
            >
              <a
                href="https://investors.appfolioim.com/bandminvest/investor/submit_interest/4"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                Join the Investor List
              </a>
            </Button>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <div className="space-y-3">
              <Button
                asChild
                variant="ghost"
                className="w-full justify-start text-white hover:text-accent hover:bg-white/10"
              >
                <a
                  href="https://investors.appfolioim.com/bandminvest/investor/submit_interest/4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Request Data Room Access
                </a>
              </Button>
            </div>
          </div>
          
        </div>
        
        {/* Disclaimer */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-sm text-white/60 space-y-4">
            <p className="font-semibold text-white">Important Disclaimer:</p>
            <p>
              This presentation is for informational purposes only and does not constitute an offer to sell or a solicitation 
              of an offer to buy any securities. Any such offer or solicitation will be made only through definitive offering 
              documents. Consult your financial, tax, and legal advisors before making any investment decisions.
            </p>
            <p>
              Investment involves substantial risks, including the potential for total loss of invested capital. 
              Past performance does not guarantee future results. Forward-looking statements are based on current expectations 
              and assumptions and are subject to risks and uncertainties that may cause actual results to differ materially.
            </p>
            <p>
              This investment is suitable only for accredited investors who can afford to lose their entire investment. 
              Bitcoin and cryptocurrency investments are highly volatile and speculative. Real estate investments carry risks 
              including market downturns, tenant defaults, and interest rate changes.
            </p>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 ArchPublic.com. All rights reserved.
            </p>
            <p className="text-white/60 text-sm mt-4 md:mt-0">
              For Accredited Investors Only
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;