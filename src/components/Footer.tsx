import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Mail, Download, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log('Submitting email:', email);

      // Submit to Google Sheets (you'll need to set up a Google Apps Script)
      const response = await fetch('https://script.google.com/macros/s/AKfycbw9Rl9goOJMOr965qXFSRLMcDi0ZwtHqjzA3FQCMmGRqFXVsPeYBfTTklZwLVDekDcBhw/exec', {
        method: 'POST',
        mode: 'no-cors', // Try with no-cors to avoid CORS issues
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'footer_newsletter'
        }),
      });

      console.log('Response received:', response);

      // With no-cors, we can't read the response, so we'll assume success
      console.log('Email submission completed (no-cors mode)');
      alert('Thank you for subscribing! We\'ll keep you updated.');
      setEmail("");

    } catch (error) {
      console.error('Error submitting email:', error);

      // Fallback: Store in localStorage for now
      const submissions = JSON.parse(localStorage.getItem('newsletter_submissions') || '[]');
      submissions.push({
        email: email,
        timestamp: new Date().toISOString(),
        source: 'footer_newsletter'
      });
      localStorage.setItem('newsletter_submissions', JSON.stringify(submissions));

      alert('Thank you for subscribing! We\'ll keep you updated. (Stored locally due to connection issue)');
      setEmail("");
    }
  };

  return (
    <footer className="gradient-cosmic text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join our investor list to receive updates and exclusive access to Future Fund One opportunities.
          </p>
          
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-cosmic-dark px-8 py-4 text-lg font-semibold"
            onClick={() => window.open('https://www.archbami.com', '_blank')}
          >
            Visit www.archbami.com
          </Button>
        </div>
        
        {/* Contact & Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Join Our Investor List</h3>
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-cosmic-dark">
                Subscribe
              </Button>
            </form>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <div className="space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-start text-white hover:text-accent hover:bg-white/10"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Deck
              </Button>
            </div>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-accent hover:bg-white/10"
                onClick={() => window.open('#', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-accent hover:bg-white/10"
                onClick={() => window.open('#', '_blank')}
              >
                <Twitter className="w-5 h-5" />
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
              © 2025 ArchBami.com. All rights reserved.
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