import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, X } from "lucide-react";

interface EmailGateProps {
  children: React.ReactNode;
  source: string; // For tracking which section the email came from
  title?: string;
  description?: string;
  size?: 'default' | 'compact'; // Size variant for the email gate box
}

const EmailGate = ({ children, source, title = "Request Access", description = "Enter your email to view this content", size = 'default' }: EmailGateProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Submitting email:', email);

      // Submit to Google Sheets using the same system as Hero and Footer
      const response = await fetch('https://script.google.com/macros/s/AKfycbw9Rl9goOJMOr965qXFSRLMcDi0ZwtHqjzA3FQCMmGRqFXVsPeYBfTTklZwLVDekDcBhw/exec', {
        method: 'POST',
        mode: 'no-cors', // Try with no-cors to avoid CORS issues
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: source
        }),
      });

      console.log('Response received:', response);

      // With no-cors, we can't read the response, so we'll assume success
      console.log('Email submission completed (no-cors mode)');
      setIsSubmitted(true);
      setEmail('');

    } catch (error) {
      console.error('Error submitting email:', error);

      // Fallback: Store in localStorage for now
      const submissions = JSON.parse(localStorage.getItem('email_gate_submissions') || '[]');
      submissions.push({
        email: email,
        timestamp: new Date().toISOString(),
        source: source
      });
      localStorage.setItem('email_gate_submissions', JSON.stringify(submissions));

      console.log('Email stored locally due to connection issue');
      setIsSubmitted(true);
      setEmail('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleRequestAccess = () => {
    setIsMinimized(false);
  };

  if (isSubmitted) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Blurred Content with softer edges */}
      <div className="blur-sm pointer-events-none select-none transition-all duration-300" style={{
        filter: 'blur(8px)',
        WebkitFilter: 'blur(8px)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.3) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.3) 100%)'
      }}>
        {children}
      </div>
      
      {/* Request Access Link (shown when minimized) */}
      {isMinimized && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <button
            onClick={handleRequestAccess}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Request Access
          </button>
        </div>
      )}
      
      {/* Overlay with Email Form (shown when not minimized) */}
      {!isMinimized && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className={`bg-gray-900 border border-gray-700 rounded-2xl mx-4 relative ${
            size === 'compact' 
              ? 'p-6 max-w-sm' 
              : 'p-8 max-w-md'
          } w-full`}>
            {/* X Button */}
            <button
              onClick={handleMinimize}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200"
              aria-label="Minimize email gate"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className={`text-center ${size === 'compact' ? 'mb-4' : 'mb-6'}`}>
              <div className={`${size === 'compact' ? 'w-12 h-12' : 'w-16 h-16'} bg-primary/10 rounded-xl flex items-center justify-center mx-auto ${size === 'compact' ? 'mb-3' : 'mb-4'}`}>
                <Lock className={`${size === 'compact' ? 'w-6 h-6' : 'w-8 h-8'} text-primary`} />
              </div>
              <h3 className={`${size === 'compact' ? 'text-xl' : 'text-2xl'} font-bold text-white ${size === 'compact' ? 'mb-1' : 'mb-2'}`}>{title}</h3>
              <p className={`text-white/70 ${size === 'compact' ? 'text-sm' : ''}`}>{description}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-gray-800 border-gray-600 text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={isLoading || !email}
              >
                {isLoading ? 'Submitting...' : 'Request Access'}
              </Button>
            </form>
            
            <p className={`text-xs text-white/50 text-center ${size === 'compact' ? 'mt-3' : 'mt-4'}`}>
              By submitting your email, you agree to receive updates about Future Fund One.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailGate;
