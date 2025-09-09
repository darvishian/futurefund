import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import manriver from "@/assets/manriver.jpeg";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Submit to Google Sheets (you'll need to set up a Google Apps Script)
      const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'hero_waitlist'
        }),
      });

      if (response.ok) {
        alert('Thank you for joining the waitlist! We\'ll be in touch soon.');
        setEmail('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your email. Please try again.');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Top Navigation Elements */}
      <div className="absolute top-8 left-8 z-20 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2">
        <span className="text-accent font-medium text-sm">For Accredited Investors Only</span>
      </div>
      
      <div className="absolute top-8 right-8 z-20 text-white font-semibold text-lg">
        Arch Public | BAMI
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="animate-fade-in">
          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <img
              src={manriver}
              alt="Man by river"
              className="w-40 h-28 md:w-56 md:h-36 object-contain rounded-lg shadow-2xl opacity-90"
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 hero-text-glow animate-glow-pulse">
            Future Fund One
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto font-light">
            A Tax-Advantaged Bitcoin Supercharger – Capturing Bitcoin's Potential with 
            Stable Real Estate Income and Algorithmic Precision
          </h2>
          
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Built on three pillars: <span className="gradient-text font-medium">Bitcoin Investment</span> enhanced by proprietary algorithms,
            <span className="gradient-text font-medium"> Real Estate Cash Flow</span> fueling accumulation, and
            <span className="gradient-text font-medium"> Tax Efficiency</span> via depreciation benefits.
          </p>
          
          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary focus:ring-primary h-10"
            />

            <Button
              type="submit"
              size="sm"
              disabled={!email}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-500 disabled:cursor-not-allowed text-white px-6 py-2 text-sm cosmic-glow transition-all duration-300 hover:scale-105"
            >
              Join Waitlist
            </Button>
          </form>

          {/* Schedule Call Button */}
          <div className="max-w-sm mx-auto mt-4">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <a
                href="https://calendar.app.google/7j3AVzoz5WGptCVE7?_kx=4Yo6TKgOFJ35T6kHnb87Sw.RjX6qj"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-6 border-2 border-white/50 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;