import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, X } from "lucide-react";
import { useEmailGate } from "@/contexts/EmailGateContext";

interface EmailGateProps {
  children: React.ReactNode;
  source: string; // For tracking which section the email came from
  title?: string;
  description?: string;
  size?: 'default' | 'compact'; // Size variant for the email gate box
}

const EmailGate = ({ children, source, title = "Request Access", description = "Enter your email to view this content", size = 'default' }: EmailGateProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const { isEmailSubmitted, submittedEmail, submitEmail } = useEmailGate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await submitEmail(email, source);
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
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

  if (isEmailSubmitted) {
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
              ? 'p-5 sm:p-6 max-w-sm' 
              : 'p-6 sm:p-8 max-w-md'
          } w-full`}>
            {/* X Button */}
            <button
              onClick={handleMinimize}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200"
              aria-label="Minimize email gate"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className={`text-center ${size === 'compact' ? 'mb-3 sm:mb-4' : 'mb-4 sm:mb-6'}`}>
              <div className={`${size === 'compact' ? 'w-10 h-10 sm:w-12 sm:h-12' : 'w-12 h-12 sm:w-16 sm:h-16'} bg-primary/10 rounded-xl flex items-center justify-center mx-auto ${size === 'compact' ? 'mb-2 sm:mb-3' : 'mb-3 sm:mb-4'}`}>
                <Lock className={`${size === 'compact' ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-6 h-6 sm:w-8 sm:h-8'} text-primary`} />
              </div>
              <h3 className={`${size === 'compact' ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'} font-bold text-white ${size === 'compact' ? 'mb-1' : 'mb-2'}`}>{title}</h3>
              <p className={`text-white/70 ${size === 'compact' ? 'text-sm' : ''}`}>{description}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-gray-800 border-gray-600 text-white h-11 sm:h-12"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white min-h-[44px]"
                disabled={isLoading || !email}
              >
                {isLoading ? 'Submitting...' : 'Request Access'}
              </Button>
            </form>
            
            <p className={`text-xs text-white/50 text-center ${size === 'compact' ? 'mt-2 sm:mt-3' : 'mt-3 sm:mt-4'}`}>
              By submitting your email, you agree to receive updates about Future Fund One.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailGate;
