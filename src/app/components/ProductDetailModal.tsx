import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { NoScrollSpecsViewer } from './NoScrollSpecsViewer';
import { 
  X, 
  CreditCard, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Award, 
  Calculator, 
  DollarSign, 
  Shield, 
  TrendingUp, 
  Gauge, 
  Target, 
  Play, 
  PhoneCall, 
  Rocket, 
  MessageCircle, 
  FileText, 
  Star, 
  Users, 
  BarChart3, 
  Wifi, 
  Music, 
  Building, 
  ChevronLeft,
  ChevronRight,
  Cpu,
  Info,
  Settings,
  GitCompare,
  Zap,
  Camera,
  Monitor,
  Cloud,
  Smartphone,
  Database,
  Network,
  Power,
  HardDrive,
  Activity,
  Phone,
  Layers,
  Grid,
  Eye,
  Lightbulb,
  Briefcase,
  Home,
  ShoppingBag,
  Plane,
  Hospital,
  School,
  MapPin,
  Trophy,
  TrendingDown
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  monthlyPrice: string;
  rentalPrice: string;
  features: string[];
  specifications: {
    accuracy: string;
    processing: string;
    deployment: string;
    connectivity: string;
    power: string;
    storage: string;
    analytics: string;
    support: string;
  };
  useCases: string[];
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  popular?: boolean;
  recommended?: string;
}

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onPageChange: (page: string) => void;
}

export function ProductDetailModal({ product, onClose, onPageChange }: ProductDetailModalProps) {
  const [currentTab, setCurrentTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Specific pricing calculator for each product
  const getProductPricing = (productId: string) => {
    const pricingMap: { [key: string]: { advance: number; monthly: number; oneTime: number } } = {
      'core': { advance: 25000, monthly: 5000, oneTime: 60000 },
      'flex': { advance: 18000, monthly: 4000, oneTime: 45000 },
      'link': { advance: 14000, monthly: 3000, oneTime: 35000 },
      'eventsense': { advance: 10000, monthly: 8000, oneTime: 8000 } // daily rate for EventSense
    };
    
    return pricingMap[productId] || pricingMap['core'];
  };

  const pricing = getProductPricing(product.id);

  const tabs = [
    {
      id: 'overview',
      name: 'Product Overview',
      subtitle: 'Key features & benefits',
      icon: Info,
      color: 'from-blue-500 to-blue-600',
      badge: 'Essential',
      description: 'Complete product introduction and overview'
    },
    {
      id: 'specs',
      name: 'Detailed Specs',
      subtitle: 'Technical specifications',
      icon: Settings,
      color: 'from-green-500 to-green-600',
      badge: 'Technical',
      description: 'In-depth technical specifications and capabilities'
    },
    {
      id: 'pricing',
      name: 'Pricing Plans',
      subtitle: 'Purchase, subscription & rental',
      icon: Calculator,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Plans',
      description: 'Complete pricing options and payment plans'
    },
    {
      id: 'comparison',
      name: 'Feature Comparison',
      subtitle: 'Compare with other models',
      icon: GitCompare,
      color: 'from-purple-500 to-purple-600',
      badge: 'Compare',
      description: 'Side-by-side feature comparison across APC lineup'
    },
    {
      id: 'competitors',
      name: 'vs Competitors',
      subtitle: 'Market comparison',
      icon: Trophy,
      color: 'from-orange-500 to-orange-600',
      badge: 'Advantage',
      description: 'Why APC leads the people counting market'
    }
  ];

  const nextTab = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentTab((prev) => (prev + 1) % tabs.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTab = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentTab((prev) => (prev - 1 + tabs.length) % tabs.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToTab = (index: number) => {
    if (!isAnimating && index !== currentTab) {
      setIsAnimating(true);
      setCurrentTab(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto-advance slider every 12 seconds when not interacting
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTab();
      }
    }, 12000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="fixed inset-0 modal-backdrop-enhanced flex items-center justify-center p-2 lg:p-4 z-50 no-scroll-container">
      <Card className="max-w-7xl w-full h-[95vh] lg:h-[90vh] flex flex-col shadow-2xl rounded-xl lg:rounded-2xl border border-gray-200/50 no-scroll-container">
        {/* Enhanced Header with Better Readability */}
        <CardHeader className="border-b border-gray-200/50 bg-gradient-to-r from-gray-50/80 to-blue-50/80 backdrop-blur-sm flex-shrink-0 safe-top">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 lg:gap-6 flex-1 min-w-0">
              <div className={`w-14 h-14 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl flex items-center justify-center text-white ${product.badgeColor} shadow-lg transform hover:scale-105 transition-all duration-300 flex-shrink-0`}>
                {product.icon}
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent leading-tight">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm lg:text-lg xl:text-xl text-gray-700 font-medium mt-1 lg:mt-2 leading-relaxed">
                  {product.subtitle}
                </CardDescription>
                {product.popular && (
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white mt-2 lg:mt-3 animate-pulse shadow-md">
                    <Star className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2 fill-current" />
                    <span className="text-xs lg:text-sm font-semibold">Most Popular Choice</span>
                  </Badge>
                )}
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onClose}
              className="h-10 w-10 lg:h-12 lg:w-12 p-0 hover:bg-gray-100/80 rounded-full touch-target flex-shrink-0 transition-all duration-200 hover:scale-105"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 lg:h-6 lg:w-6 text-gray-600" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0 flex-1 flex flex-col min-h-0">
          {/* Enhanced Tab Navigator with Better Readability */}
          <div className="relative bg-gradient-to-r from-slate-50/90 via-blue-50/90 to-indigo-100/90 backdrop-blur-sm border-b border-gray-200/50 flex-shrink-0 min-h-fit">
            {/* Main Tab Navigation */}
            <div className="px-3 lg:px-8 py-4 lg:py-6">
              <div className="flex items-center justify-center gap-2 lg:gap-4">
                {tabs.map((tab, index) => {
                  const TabIcon = tab.icon;
                  const isActive = index === currentTab;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => goToTab(index)}
                      disabled={isAnimating}
                      className={`group relative flex-shrink-0 px-2 lg:px-4 py-3 lg:py-5 rounded-xl lg:rounded-2xl transition-all duration-500 transform flex-1 max-w-[200px] touch-target ${
                        isActive 
                          ? 'bg-white shadow-2xl scale-105 ring-2 ring-primary/30 z-10 border border-primary/20' 
                          : 'bg-white/80 hover:bg-white shadow-md hover:shadow-xl scale-95 hover:scale-100 border border-gray-200/50'
                      }`}
                      aria-pressed={isActive}
                      role="tab"
                    >
                      {/* Tab Background Effect */}
                      <div className={`absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-r ${tab.color} opacity-0 group-hover:opacity-8 transition-opacity duration-300 ${isActive ? 'opacity-3' : ''}`}></div>
                      
                      {/* Tab Content */}
                      <div className="relative z-10 text-center">
                        <div className={`w-10 h-10 lg:w-14 lg:h-14 xl:w-16 xl:h-16 mx-auto mb-2 lg:mb-3 rounded-lg lg:rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${tab.color} shadow-md transform transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                          <TabIcon className={`h-5 w-5 lg:h-6 lg:w-6 xl:h-8 xl:w-8 ${isActive ? 'animate-pulse' : ''}`} />
                        </div>
                        
                        <Badge className={`mb-1 lg:mb-2 text-xs transition-colors duration-300 font-medium ${
                          isActive 
                            ? 'bg-primary text-white shadow-sm' 
                            : 'bg-gray-200 text-gray-700 group-hover:bg-primary/20'
                        }`}>
                          {tab.badge}
                        </Badge>
                        
                        <h3 className={`font-bold text-xs lg:text-sm xl:text-base mb-1 transition-colors duration-300 leading-tight ${
                          isActive 
                            ? 'text-primary' 
                            : 'text-gray-800 group-hover:text-primary'
                        }`}>
                          {tab.name}
                        </h3>
                        
                        <p className={`text-xs lg:text-sm transition-colors duration-300 leading-relaxed ${
                          isActive 
                            ? 'text-gray-700 font-medium' 
                            : 'text-gray-600 group-hover:text-gray-700'
                        }`}>
                          {tab.subtitle}
                        </p>
                        
                        {/* Active Indicator */}
                        {isActive && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 lg:w-8 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full shadow-sm"></div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Progress Indicators */}
            <div className="flex justify-center items-center gap-3 lg:gap-4 pb-3 lg:pb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTab}
                disabled={isAnimating}
                className="h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-white/90 hover:bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 touch-target"
                aria-label="Previous tab"
              >
                <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
              </Button>
              
              <div className="flex gap-1.5 lg:gap-2">
                {tabs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTab(index)}
                    className={`h-2 lg:h-2.5 rounded-full transition-all duration-500 touch-target ${
                      index === currentTab 
                        ? 'bg-gradient-to-r from-primary to-blue-600 w-6 lg:w-8 shadow-md' 
                        : 'bg-gray-300 hover:bg-gray-400 w-2 lg:w-2.5'
                    }`}
                    aria-label={`Go to ${tabs[index].name} tab`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextTab}
                disabled={isAnimating}
                className="h-8 w-8 lg:h-10 lg:w-10 rounded-full bg-white/90 hover:bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 touch-target"
                aria-label="Next tab"
              >
                <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600" />
              </Button>
            </div>

            {/* Auto-progress indicator */}
            <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-blue-600 animate-pulse shadow-sm"></div>
            </div>
          </div>

          {/* Dynamic Content Slider with Enhanced Readability */}
          <div className="relative flex-1 min-h-0">
            <div 
              className="flex transition-transform duration-500 ease-in-out min-h-full"
              style={{ transform: `translateX(-${currentTab * 100}%)` }}
            >
              {/* Product Overview Tab */}
              <div className="w-full flex-shrink-0 p-4 lg:p-6 xl:p-8 space-y-6 lg:space-y-8 h-full no-scroll-container">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
                  {/* Left Column - Product Introduction */}
                  <div className="space-y-6 lg:space-y-8">
                    <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-blue-200/50 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start gap-4 lg:gap-6 mb-6">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <Eye className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight mb-2">{product.name}</h3>
                          <p className="text-sm lg:text-base xl:text-lg text-gray-700 font-medium leading-relaxed">{product.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <p className="text-base lg:text-lg text-gray-700 leading-relaxed font-medium">{product.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                          <div className="text-center p-4 lg:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white transition-colors">
                            <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-primary mb-2">{product.specifications.accuracy}</div>
                            <div className="text-sm lg:text-base text-gray-600 font-medium">Accuracy</div>
                          </div>
                          <div className="text-center p-4 lg:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white transition-colors">
                            <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-green-600 mb-2">{product.price}</div>
                            <div className="text-sm lg:text-base text-gray-600 font-medium">Starting Price</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 lg:h-7 lg:w-7 text-green-500" />
                        <span className="text-gray-900">Key Features</span>
                      </h4>
                      <div className="space-y-3 lg:space-y-4 max-h-72 lg:max-h-80 overflow-y-auto scrollbar-hide">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-4 p-4 lg:p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white hover:shadow-md transition-all duration-200">
                            <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-sm lg:text-base text-gray-700 font-medium leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Perfect For */}
                    <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-blue-200/50">
                      <h4 className="text-lg lg:text-xl font-bold text-blue-900 mb-4 lg:mb-6 flex items-center gap-3">
                        <Target className="h-6 w-6 lg:h-7 lg:w-7" />
                        <span>Perfect For:</span>
                      </h4>
                      <div className="grid grid-cols-1 gap-3 lg:gap-4">
                        {product.useCases.map((useCase, index) => (
                          <div key={index} className="flex items-center gap-3 lg:gap-4 text-base lg:text-lg text-blue-800 font-medium">
                            <Lightbulb className="h-5 w-5 lg:h-6 lg:w-6 flex-shrink-0" />
                            <span className="leading-relaxed">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Applications & Benefits */}
                  <div className="space-y-6 lg:space-y-8">
                    {/* Real-world Applications */}
                    <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-green-200/50">
                      <h4 className="text-xl lg:text-2xl font-bold text-green-900 mb-4 lg:mb-6 flex items-center gap-3">
                        <Building className="h-6 w-6 lg:h-7 lg:w-7" />
                        <span>Real-world Applications</span>
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                        {[
                          { icon: ShoppingBag, label: 'Retail Stores', desc: 'Foot traffic analysis' },
                          { icon: Briefcase, label: 'Offices', desc: 'Space optimization' },
                          { icon: School, label: 'Education', desc: 'Campus monitoring' },
                          { icon: Hospital, label: 'Healthcare', desc: 'Patient flow' }
                        ].map((app, index) => (
                          <div key={index} className="flex items-start gap-3 lg:gap-4 p-4 lg:p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white hover:shadow-md transition-all duration-200">
                            <app.icon className="h-6 w-6 lg:h-7 lg:w-7 text-green-600 mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-bold text-sm lg:text-base text-gray-900 mb-1">{app.label}</div>
                              <div className="text-sm lg:text-base text-gray-600 leading-relaxed">{app.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Award className="h-5 w-5 text-yellow-500" />
                        Why Choose {product.name}?
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Zap className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">Lightning Fast Processing</div>
                            <div className="text-xs text-gray-600">Real-time analytics with sub-second response</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <Shield className="h-4 w-4 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">Privacy Compliant</div>
                            <div className="text-xs text-gray-600">GDPR compliant with edge processing</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Network className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">Easy Integration</div>
                            <div className="text-xs text-gray-600">Works with existing infrastructure</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="space-y-4 lg:space-y-6">
                      <Button 
                        onClick={() => onPageChange('demo')}
                        className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white py-4 lg:py-5 text-base lg:text-lg font-semibold rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 touch-target"
                      >
                        <Rocket className="h-5 w-5 lg:h-6 lg:w-6 mr-3" />
                        Start 15-Day Free Trial
                      </Button>
                      <Button 
                        onClick={() => onPageChange('contact')}
                        variant="outline"
                        className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-4 lg:py-5 text-base lg:text-lg font-semibold rounded-xl lg:rounded-2xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 touch-target"
                      >
                        <PhoneCall className="h-5 w-5 lg:h-6 lg:w-6 mr-3" />
                        Get Expert Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Interactive Specs Tab - No Scroll Experience */}
              <NoScrollSpecsViewer product={product} />

              {/* Pricing Plans Tab */}
              <div className="w-full flex-shrink-0 p-4 lg:p-6 xl:p-8 space-y-6 lg:space-y-8 h-full no-scroll-container">
                {/* Pricing Header */}
                <div className="text-center bg-gradient-to-r from-emerald-50/80 to-teal-50/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-emerald-200/50">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">Choose Your Perfect Plan</h3>
                  <p className="text-base lg:text-lg xl:text-xl text-gray-700 font-medium">Flexible payment options to suit your budget and requirements</p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* One-Time Purchase Card */}
                  <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-blue-200/50 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <CreditCard className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">One-Time Purchase</h4>
                      <p className="text-sm lg:text-base text-gray-600">Complete ownership with perpetual license</p>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">₹{pricing.oneTime.toLocaleString('en-IN')}</div>
                      <div className="text-sm text-gray-600">One-time payment</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Perpetual license</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>18-month warranty</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Free software updates (1 year)</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Professional installation</span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => onPageChange('contact')}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 touch-target"
                    >
                      <CreditCard className="h-5 w-5 lg:h-6 lg:w-6 mr-3" />
                      Get Purchase Quote
                    </Button>
                  </div>

                  {/* Subscription Card */}
                  <div className="bg-gradient-to-br from-green-50/80 to-green-100/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-green-200/50 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg relative">
                    {product.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 shadow-lg">
                          <Star className="h-3 w-3 mr-1 fill-current" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Calendar className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Subscription Model</h4>
                      <p className="text-sm lg:text-base text-gray-600">Flexible monthly payments with support</p>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">₹{pricing.advance.toLocaleString('en-IN')}</div>
                      <div className="text-xs text-gray-600 mb-2">Advance payment</div>
                      <div className="text-xl lg:text-2xl font-bold text-green-600 mb-1">+ ₹{pricing.monthly.toLocaleString('en-IN')}/month</div>
                      <div className="text-xs text-gray-600">Monthly installments</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Lower upfront cost</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Continuous support included</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Regular software updates</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Priority technical support</span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => onPageChange('contact')}
                      className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 touch-target"
                    >
                      <Calendar className="h-5 w-5 lg:h-6 lg:w-6 mr-3" />
                      Start Subscription
                    </Button>
                  </div>

                  {/* Rental Card */}
                  <div className="bg-gradient-to-br from-purple-50/80 to-purple-100/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-purple-200/50 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Clock className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Rental Model</h4>
                      <p className="text-sm lg:text-base text-gray-600">Perfect for events and short-term needs</p>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">₹{product.rentalPrice || '8,000'}</div>
                      <div className="text-sm text-gray-600">Per day (min 3-4 days)</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>No long-term commitment</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Perfect for events</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Setup & support included</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>Flexible duration</span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => onPageChange('contact')}
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 touch-target"
                    >
                      <Clock className="h-5 w-5 lg:h-6 lg:w-6 mr-3" />
                      Book Rental
                    </Button>
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="text-center space-y-4 lg:space-y-6">
                  <Button 
                    onClick={() => onPageChange('demo')}
                    className="w-full lg:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 lg:py-5 px-8 lg:px-12 text-lg lg:text-xl font-bold rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 touch-target"
                  >
                    <Rocket className="h-6 w-6 lg:h-7 lg:w-7 mr-3" />
                    Start 15-Day Free Trial
                  </Button>
                  <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 justify-center">
                    <Button 
                      onClick={() => onPageChange('contact')}
                      variant="outline"
                      className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white py-3 lg:py-4 px-6 lg:px-8 text-base lg:text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 touch-target"
                    >
                      <PhoneCall className="h-5 w-5 lg:h-6 lg:w-6 mr-2 lg:mr-3" />
                      Pricing Consultation
                    </Button>
                    <Button 
                      onClick={() => onPageChange('faq')}
                      variant="outline"
                      className="border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white py-3 lg:py-4 px-6 lg:px-8 text-base lg:text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 touch-target"
                    >
                      <MessageCircle className="h-5 w-5 lg:h-6 lg:w-6 mr-2 lg:mr-3" />
                      Pricing FAQ
                    </Button>
                  </div>
                </div>
              </div>

              {/* Comparison Tab */}
              <div className="w-full flex-shrink-0 p-4 lg:p-6 space-y-4 lg:space-y-6 overflow-y-auto max-h-[75vh]">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Feature Comparison</h3>
                  <p className="text-gray-600">Compare {product.name} with other APC solutions</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 text-center">
                  <GitCompare className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Detailed Comparison Coming Soon</h4>
                  <p className="text-gray-600 mb-4">We're preparing a comprehensive comparison table</p>
                  <Button onClick={() => onPageChange('contact')}>
                    <PhoneCall className="h-4 w-4 mr-2" />
                    Get Comparison Sheet
                  </Button>
                </div>
              </div>

              {/* Competitors Tab */}
              <div className="w-full flex-shrink-0 p-4 lg:p-6 space-y-4 lg:space-y-6 overflow-y-auto max-h-[75vh]">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">APC vs Competitors</h3>
                  <p className="text-gray-600">See why APC leads the people counting market</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 text-center">
                  <Trophy className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Market Leadership Analysis</h4>
                  <p className="text-gray-600 mb-4">Comprehensive competitive analysis available</p>
                  <Button onClick={() => onPageChange('contact')}>
                    <Award className="h-4 w-4 mr-2" />
                    View Competitive Analysis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}