import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface FeatureDetail {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  technicalDetails: string[];
  benefits: string[];
  badge?: string;
  badgeColor?: string;
}

interface InteractiveFeatureShowcaseProps {
  features: FeatureDetail[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  productName: string;
  accentColor?: string;
}

export function InteractiveFeatureShowcase({ 
  features, 
  autoSlide = true, 
  autoSlideInterval = 5000,
  productName,
  accentColor = "accent"
}: InteractiveFeatureShowcaseProps) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoSlide);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying || !autoSlide) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoSlide, autoSlideInterval, features.length]);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
  };

  const handlePrevious = () => {
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setActiveFeature((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
  };

  const currentFeature = features[activeFeature];

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="mb-4 text-gray-900">Advanced Features & Capabilities</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the powerful features that make {productName} the perfect choice for your business needs.
        </p>
      </div>

      {/* Horizontal Scrollable Feature Selector */}
      <div className="relative mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Select Feature to Explore</h3>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handlePrevious}
              className="p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleNext}
              className="p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Horizontal Scrollable Feature Icons */}
        <div className="overflow-x-auto horizontal-scroll pb-4">
          <div className="flex gap-4 min-w-max">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => handleFeatureClick(index)}
                className={`feature-button relative flex flex-col items-center p-6 rounded-2xl border-2 min-w-[160px] ${
                  activeFeature === index
                    ? `active border-primary bg-primary/5 shadow-md`
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                {/* Auto-slide Progress Indicator */}
                {activeFeature === index && isAutoPlaying && (
                  <div className="absolute top-2 left-2 right-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full slide-progress"
                      style={{
                        '--slide-duration': `${autoSlideInterval}ms`
                      } as React.CSSProperties}
                    />
                  </div>
                )}

                {/* Feature Badge */}
                {feature.badge && (
                  <Badge 
                    className={`feature-badge ${feature.badgeColor || 'bg-primary'} text-white text-xs`}
                  >
                    {feature.badge}
                  </Badge>
                )}

                {/* Feature Icon */}
                <div className={`feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-3 ${
                  activeFeature === index 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {feature.icon}
                </div>

                {/* Feature Title */}
                <h4 className={`font-semibold text-center text-sm leading-tight ${
                  activeFeature === index ? 'text-primary' : 'text-gray-700'
                }`}>
                  {feature.title}
                </h4>

                {/* Feature Subtitle */}
                <p className="feature-subtitle text-xs text-center mt-1 line-clamp-2">
                  {feature.subtitle}
                </p>

                {/* Active Indicator */}
                {activeFeature === index && (
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Detail Content with Vertical Scroll */}
      <Card className="border-2 border-gray-100 overflow-hidden">
        <CardContent className="p-0">
          {/* Feature Header */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 feature-icon">
                {currentFeature.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="feature-title text-2xl font-bold">{currentFeature.title}</h3>
                  {currentFeature.badge && (
                    <Badge className={`${currentFeature.badgeColor || 'bg-primary'} text-white`}>
                      {currentFeature.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-lg text-gray-600 mb-3 feature-subtitle">{currentFeature.subtitle}</p>
                <p className="text-gray-700 leading-relaxed">{currentFeature.description}</p>
              </div>
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="max-h-96 overflow-y-auto feature-content-scroll">
            <div className="p-6 space-y-6 content-fade-in">
              
              {/* Key Points Section */}
              {currentFeature.keyPoints.length > 0 && (
                <div className="content-section feature-spacing">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Key Capabilities
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentFeature.keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Details Section */}
              {currentFeature.technicalDetails.length > 0 && (
                <div className="content-section feature-spacing">
                  <h4 className="font-semibold text-gray-900 mb-4">Technical Specifications</h4>
                  <div className="space-y-2">
                    {currentFeature.technicalDetails.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:border-primary/20 transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits Section */}
              {currentFeature.benefits.length > 0 && (
                <div className="content-section feature-spacing">
                  <h4 className="font-semibold text-gray-900 mb-4">Business Benefits</h4>
                  <div className="grid gap-3">
                    {currentFeature.benefits.map((benefit, index) => (
                      <div key={index} className="p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-4 border-primary hover:from-primary/10 transition-colors">
                        <p className="text-sm text-gray-700 font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Feature {activeFeature + 1} of {features.length}
              </span>
              <div className="progress-dots">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleFeatureClick(index)}
                    className={`progress-dot ${
                      activeFeature === index ? 'active bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className={`auto-play-indicator ${!isAutoPlaying ? 'paused' : ''}`}>
                {isAutoPlaying ? '● Auto Play' : '⏸ Paused'}
              </span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm nav-button"
              >
                {isAutoPlaying ? 'Pause' : 'Play'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}