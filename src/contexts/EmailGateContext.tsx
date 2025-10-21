import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface EmailGateContextType {
  isEmailSubmitted: boolean;
  submittedEmail: string | null;
  submitEmail: (email: string, source: string) => Promise<void>;
  resetEmailGate: () => void;
}

const EmailGateContext = createContext<EmailGateContextType | undefined>(undefined);

export const useEmailGate = () => {
  const context = useContext(EmailGateContext);
  if (context === undefined) {
    throw new Error('useEmailGate must be used within an EmailGateProvider');
  }
  return context;
};

interface EmailGateProviderProps {
  children: ReactNode;
}

export const EmailGateProvider = ({ children }: EmailGateProviderProps) => {
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const submitEmail = async (email: string, source: string) => {
    try {
      console.log('Submitting email:', email, 'from source:', source);

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
      
      // Update global state
      setIsEmailSubmitted(true);
      setSubmittedEmail(email);
      
      // Store in localStorage for persistence
      localStorage.setItem('email_gate_submitted', 'true');
      localStorage.setItem('email_gate_email', email);

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
      
      // Update global state even if API fails
      setIsEmailSubmitted(true);
      setSubmittedEmail(email);
      localStorage.setItem('email_gate_submitted', 'true');
      localStorage.setItem('email_gate_email', email);
    }
  };

  const resetEmailGate = () => {
    setIsEmailSubmitted(false);
    setSubmittedEmail(null);
    localStorage.removeItem('email_gate_submitted');
    localStorage.removeItem('email_gate_email');
  };

  // Check localStorage on mount to restore state
  useEffect(() => {
    const isSubmitted = localStorage.getItem('email_gate_submitted') === 'true';
    const email = localStorage.getItem('email_gate_email');
    
    if (isSubmitted && email) {
      setIsEmailSubmitted(true);
      setSubmittedEmail(email);
    }
  }, []);

  const value = {
    isEmailSubmitted,
    submittedEmail,
    submitEmail,
    resetEmailGate
  };

  return (
    <EmailGateContext.Provider value={value}>
      {children}
    </EmailGateContext.Provider>
  );
};
