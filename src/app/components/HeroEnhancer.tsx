import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Shield, 
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  Star
} from 'lucide-react';

interface HeroEnhancerProps {
  onCtaClick?: () => void;
}

export function HeroEnhancer({ onCtaClick }: HeroEnhancerProps) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const rotatingFeatures = [
    { icon: <Zap className="h-4 w-4" />, text: 'Real-time Analytics', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: <Shield className="h-4 w-4" />, text: 'Privacy Compliant', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: <TrendingUp className="h-4 w-4" />, text: '99% Accuracy', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: <Award className="h-4 w-4" />, text: 'Industry Leader', color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % rotatingFeatures.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="relative">
      {/* Floating Feature Badges */}
      <div className="absolute -top-4 -right-4 z-10 hidden lg:block">
        <div 
          className={`${rotatingFeatures[activeFeature].bg} ${rotatingFeatures[activeFeature].color} px-4 py-2 rounded-full shadow-lg border border-gray-200 flex items-center gap-2 animate-bounce transition-all duration-500`}
        >
          {rotatingFeatures[activeFeature].icon}
          <span className="text-sm font-semibold">{rotatingFeatures[activeFeature].text}</span>
        </div>
      </div>

      {/* Interactive Glow Effect on Hover */}
      <div 
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <div
            className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
            }}
          />
        )}
      </div>

      {/* Pulsing Notification Badge */}
      <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full border border-orange-300 animate-pulse">
        <Star className="h-4 w-4 text-orange-600 fill-orange-600" />
        <span className="text-sm font-semibold text-orange-700">
          200+ Businesses Trust APC Solutions
        </span>
        <Sparkles className="h-4 w-4 text-orange-600" />
      </div>

      {/* Micro-interaction: Hover to reveal benefits */}
      <div className="space-y-2">
        {[
          'Setup in 15 minutes',
          'No technical expertise needed',
          'Works with existing cameras'
        ].map((benefit, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 opacity-0 animate-slideInLeft"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
          >
            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span className="text-sm text-gray-700">{benefit}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
