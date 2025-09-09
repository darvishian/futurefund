import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import manriver from "@/assets/manriver.jpeg";
import { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for joining the waitlist! We\'ll be in touch soon.');
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
              className="w-48 h-32 md:w-64 md:h-40 object-cover rounded-lg shadow-2xl opacity-90"
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
            Built on three pillars: <span className="text-accent font-medium">Bitcoin Investment</span> enhanced by proprietary algorithms, 
            <span className="text-primary font-medium"> Real Estate Cash Flow</span> fueling accumulation, and 
            <span className="text-accent font-medium"> Tax Efficiency</span> via depreciation benefits.
          </p>
          
          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
            <Input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full name"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary focus:ring-primary h-10"
            />

            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email address"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary focus:ring-primary h-10"
            />

            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone number"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary focus:ring-primary h-10"
            />

            <Button
              type="submit"
              size="sm"
              disabled={!formData.name || !formData.email || !formData.phone}
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