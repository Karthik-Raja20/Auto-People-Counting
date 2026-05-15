import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { 
  Rocket, 
  Phone, 
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface StickyCtaBarProps {
  onDemoClick: () => void;
  onContactClick: () => void;
}

export function StickyCtaBar({ onDemoClick, onContactClick }: StickyCtaBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling 800px down
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 800 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-500"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        opacity: isVisible ? 1 : 0
      }}
    >
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white shadow-2xl border-t-4 border-white/20">
        <div className="container-responsive">
          <div className="flex items-center justify-between py-3 lg:py-4 gap-4">
            {/* Left: Message */}
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-yellow-300 animate-pulse hidden sm:block" />
              <div>
                <div className="font-semibold text-sm lg:text-base">
                  Ready to see APC Solutions in action?
                </div>
                <div className="text-xs lg:text-sm opacity-90 hidden sm:block">
                  Start your FREE demo today • No credit card required
                </div>
              </div>
            </div>

            {/* Right: CTAs */}
            <div className="flex items-center gap-2 lg:gap-3">
              <Button
                onClick={onDemoClick}
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg font-semibold text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 whitespace-nowrap"
              >
                <Rocket className="mr-1 lg:mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Get Free Demo</span>
                <span className="sm:hidden">Demo</span>
                <ArrowRight className="ml-1 lg:ml-2 h-3 w-3 lg:h-4 lg:w-4" />
              </Button>
              
              <Button
                onClick={onContactClick}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-lg font-semibold text-sm lg:text-base px-3 lg:px-5 py-2 lg:py-3 whitespace-nowrap hidden sm:flex"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Sales
              </Button>

              <button
                onClick={handleDismiss}
                className="p-1 lg:p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4 lg:h-5 lg:w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
