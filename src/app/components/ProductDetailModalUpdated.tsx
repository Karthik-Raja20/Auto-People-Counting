import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
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
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center p-2 z-50 overflow-auto">
      <Card className="max-w-7xl w-full my-4 min-h-[85vh] max-h-none overflow-visible flex flex-col shadow-2xl">
        {/* Enhanced Header */}
        <CardHeader className="border-b bg-gradient-to-r from-gray-50 to-blue-50 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white ${product.badgeColor} shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                {product.icon}
              </div>
              <div>
                <CardTitle className="text-3xl bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-xl text-gray-600">{product.subtitle}</CardDescription>
                {product.popular && (
                  <Badge className="bg-yellow-500 text-white mt-2 animate-pulse">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular Choice
                  </Badge>
                )}
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onClose}
              className="h-10 w-10 p-0 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0 flex-1 flex flex-col min-h-0">
          {/* Enhanced Tab Navigator */}
          <div className="relative bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-100 border-b flex-shrink-0 min-h-fit">
            {/* Main Tab Navigation */}
            <div className="px-4 lg:px-8 py-6">
              <div className="flex items-center justify-center gap-2 lg:gap-4 overflow-x-auto">
                {tabs.map((tab, index) => {
                  const TabIcon = tab.icon;
                  const isActive = index === currentTab;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => goToTab(index)}
                      disabled={isAnimating}
                      className={`group relative flex-shrink-0 px-4 lg:px-8 py-4 lg:py-6 rounded-xl transition-all duration-500 transform min-w-[200px] lg:min-w-[280px] ${
                        isActive 
                          ? 'bg-white shadow-2xl scale-105 ring-2 ring-primary/50 z-10' 
                          : 'bg-white/70 hover:bg-white/90 shadow-lg hover:shadow-xl scale-95 hover:scale-100'
                      }`}
                    >
                      {/* Tab Background Effect */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tab.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${isActive ? 'opacity-5' : ''}`}></div>
                      
                      {/* Tab Content */}
                      <div className="relative z-10 text-center">
                        <div className={`w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${tab.color} shadow-lg transform transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                          <TabIcon className={`h-6 w-6 lg:h-8 lg:w-8 ${isActive ? 'animate-pulse' : ''}`} />
                        </div>
                        
                        <Badge className={`mb-2 transition-colors duration-300 ${
                          isActive 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-200 text-gray-700 group-hover:bg-primary/20'
                        }`}>
                          {tab.badge}
                        </Badge>
                        
                        <h3 className={`font-bold text-sm lg:text-base mb-1 transition-colors duration-300 ${
                          isActive 
                            ? 'text-primary' 
                            : 'text-gray-700 group-hover:text-primary'
                        }`}>
                          {tab.name}
                        </h3>
                        
                        <p className={`text-xs lg:text-sm transition-colors duration-300 ${
                          isActive 
                            ? 'text-gray-700' 
                            : 'text-gray-500 group-hover:text-gray-600'
                        }`}>
                          {tab.subtitle}
                        </p>
                        
                        {/* Active Indicator */}
                        {isActive && (
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-primary rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Progress Indicators */}
            <div className="flex justify-center items-center gap-4 pb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTab}
                disabled={isAnimating}
                className="h-8 w-8 rounded-full bg-white/80 hover:bg-white border shadow-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex gap-2">
                {tabs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTab(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentTab 
                        ? 'bg-primary w-8 shadow-lg' 
                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextTab}
                disabled={isAnimating}
                className="h-8 w-8 rounded-full bg-white/80 hover:bg-white border shadow-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Auto-progress indicator */}
            <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-blue-600 animate-pulse shadow-lg"></div>
            </div>
          </div>

          {/* Dynamic Content Slider */}
          <div className="relative flex-1 min-h-0">
            <div 
              className="flex transition-transform duration-500 ease-in-out min-h-full"
              style={{ transform: `translateX(-${currentTab * 100}%)` }}
            >
              {/* Product Overview Tab */}
              <div className="w-full flex-shrink-0 p-4 lg:p-6 space-y-4 lg:space-y-6 overflow-y-auto max-h-[75vh]">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column - Product Introduction */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 transform hover:scale-[1.02] transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Eye className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">{product.name}</h3>
                          <p className="text-xs lg:text-sm text-gray-600 mt-1 leading-relaxed">{product.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-primary">{product.specifications.accuracy}</div>
                            <div className="text-xs text-gray-600">Accuracy</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-green-600">{product.price}</div>
                            <div className="text-xs text-gray-600">Starting Price</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Key Features
                      </h4>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Perfect For */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Perfect For:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.useCases.map((useCase, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-blue-800">
                            <Lightbulb className="h-4 w-4" />
                            <span>{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Applications & Benefits */}
                  <div className="space-y-6">
                    {/* Real-world Applications */}
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                      <h4 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Real-world Applications
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { icon: ShoppingBag, label: 'Retail Stores', desc: 'Foot traffic analysis' },
                          { icon: Briefcase, label: 'Offices', desc: 'Space optimization' },
                          { icon: School, label: 'Education', desc: 'Campus monitoring' },
                          { icon: Hospital, label: 'Healthcare', desc: 'Patient flow' }
                        ].map((app, index) => (
                          <div key={index} className="flex items-start gap-2 p-2 bg-white rounded-lg">
                            <app.icon className="h-4 w-4 text-green-600 mt-1" />
                            <div>
                              <div className="font-medium text-xs text-gray-900">{app.label}</div>
                              <div className="text-xs text-gray-600">{app.desc}</div>
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

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button 
                        onClick={() => onPageChange('demo')}
                        className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white py-3"
                      >
                        <Rocket className="h-4 w-4 mr-2" />
                        Start 15-Day Free Trial
                      </Button>
                      <Button 
                        onClick={() => onPageChange('contact')}
                        variant="outline"
                        className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-3"
                      >
                        <PhoneCall className="h-4 w-4 mr-2" />
                        Get Expert Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Specs Tab */}
              <div className="w-full flex-shrink-0 p-4 lg:p-6 space-y-4 lg:space-y-6 overflow-y-auto max-h-[75vh]">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column - Technical Specifications */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-200 transform hover:scale-[1.02] transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Settings className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">Technical Specifications</h3>
                          <p className="text-xs lg:text-sm text-gray-600 mt-1 leading-relaxed">Complete hardware & software details</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {/* Core Specifications */}
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <div className="flex items-center gap-2">
                              <Gauge className="h-4 w-4 text-green-600" />
                              <span className="text-sm font-medium">Accuracy</span>
                            </div>
                            <span className="text-sm font-bold text-green-600">{product.specifications.accuracy}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <div className="flex items-center gap-2">
                              <Cpu className="h-4 w-4 text-blue-600" />
                              <span className="text-sm font-medium">Processing</span>
                            </div>
                            <span className="text-sm font-bold text-blue-600">{product.specifications.processing}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <div className="flex items-center gap-2">
                              <Cloud className="h-4 w-4 text-purple-600" />
                              <span className="text-sm font-medium">Deployment</span>
                            </div>
                            <span className="text-sm font-bold text-purple-600">{product.specifications.deployment}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hardware Components */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Camera className="h-5 w-5 text-gray-600" />
                        Hardware Components
                      </h4>
                      <div className="space-y-3">
                        {[
                          { icon: Camera, label: 'AI-Powered Cameras', desc: 'High-resolution sensors with edge processing' },
                          { icon: Monitor, label: 'EdgeBox™ Controller', desc: 'Dedicated processing unit for real-time analytics' },
                          { icon: Network, label: 'Connectivity Module', desc: 'Wi-Fi, Ethernet, and cellular options' },
                          { icon: Power, label: 'Power System', desc: 'Efficient power management with backup options' }
                        ].map((component, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <component.icon className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-sm text-gray-900">{component.label}</div>
                              <div className="text-xs text-gray-600">{component.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connectivity & Storage */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        Connectivity & Storage:
                      </h4>
                      <div className="space-y-2 text-sm text-blue-800">
                        <div className="flex justify-between">
                          <span>Connectivity:</span>
                          <span className="font-medium">{product.specifications.connectivity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Storage:</span>
                          <span className="font-medium">{product.specifications.storage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Power:</span>
                          <span className="font-medium">{product.specifications.power}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Software & Analytics */}
                  <div className="space-y-6">
                    {/* Software Capabilities */}
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center gap-2">
                        <Activity className="h-4 w-4" />
                        Software & Analytics
                      </h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <div className="font-medium text-sm text-gray-900 mb-1">Real-time Analytics</div>
                          <div className="text-xs text-gray-600">{product.specifications.analytics}</div>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <div className="font-medium text-sm text-gray-900 mb-1">AI Algorithms</div>
                          <div className="text-xs text-gray-600">Advanced computer vision with machine learning</div>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <div className="font-medium text-sm text-gray-900 mb-1">Dashboard</div>
                          <div className="text-xs text-gray-600">Comprehensive web-based management interface</div>
                        </div>
                      </div>
                    </div>

                    {/* Technical Requirements */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Grid className="h-5 w-5 text-gray-600" />
                        Installation Requirements
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                          <Wifi className="h-4 w-4 text-green-600 mt-1" />
                          <div>
                            <div className="font-medium text-sm text-gray-900">Network Infrastructure</div>
                            <div className="text-xs text-gray-600">Stable internet connection (10 Mbps minimum)</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                          <Power className="h-4 w-4 text-yellow-600 mt-1" />
                          <div>
                            <div className="font-medium text-sm text-gray-900">Power Requirements</div>
                            <div className="text-xs text-gray-600">Standard AC power with UPS backup recommended</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                          <MapPin className="h-4 w-4 text-blue-600 mt-1" />
                          <div>
                            <div className="font-medium text-sm text-gray-900">Mounting Options</div>
                            <div className="text-xs text-gray-600">Ceiling, wall, or pole mounting with flexible positioning</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Support & Warranty */}
                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Support & Warranty:
                      </h4>
                      <div className="space-y-2 text-sm text-yellow-800">
                        <div>• {product.specifications.support}</div>
                        <div>• 18-month comprehensive warranty</div>
                        <div>• Remote diagnostics and updates</div>
                        <div>• Professional installation included</div>
                        <div>• 24/7 technical support hotline</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button 
                        onClick={() => onPageChange('demo')}
                        className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-3"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Technical Demo
                      </Button>
                      <Button 
                        onClick={() => onPageChange('contact')}
                        variant="outline"
                        className="w-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white py-3"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Technical Consultation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Comparison Tab */}
              <div className="w-full flex-shrink-0 p-4 lg:p-6 space-y-4 lg:space-y-6 overflow-y-auto max-h-[75vh]">
                <div className="space-y-6">
                  {/* Comparison Header */}
                  <div className="text-center bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">APC Product Lineup Comparison</h3>
                    <p className="text-sm text-gray-600">Compare features across our complete product range</p>
                  </div>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white rounded-xl shadow-lg">
                      <thead>
                        <tr className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                          <th className="p-3 text-left rounded-tl-xl">Feature</th>
                          <th className="p-3 text-center">APC Core</th>
                          <th className="p-3 text-center">APC Flex</th>
                          <th className="p-3 text-center">APC Link</th>
                          <th className="p-3 text-center rounded-tr-xl">APC EventSense</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { feature: 'Accuracy', core: '99%', flex: '95%', link: '92%', event: '95%' },
                          { feature: 'Processing', core: 'Real-time Edge', flex: 'Real-time Edge', link: 'Cloud + Edge', event: 'Real-time Edge' },
                          { feature: 'Cameras Included', core: '✅ Premium AI', flex: '✅ Standard AI', link: '❌ Use Existing', event: '✅ Portable' },
                          { feature: 'EdgeBox™', core: '✅ Full Featured', flex: '✅ Standard', link: '✅ Lite Version', event: '✅ Portable' },
                          { feature: 'Installation', core: 'Professional', flex: 'Professional', link: 'DIY Friendly', event: 'Plug & Play' },
                          { feature: 'Best For', core: 'Premium Deployments', flex: 'Cost-Conscious', link: 'Existing Infrastructure', event: 'Temporary Events' },
                          { feature: 'Pricing', core: '₹60,000', flex: '₹45,000', link: '₹35,000', event: '₹8,000/day' }
                        ].map((row, index) => (
                          <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                            <td className="p-3 font-medium text-gray-900">{row.feature}</td>
                            <td className={`p-3 text-center ${product.id === 'core' ? 'bg-blue-100 font-bold text-blue-900' : ''}`}>
                              {row.core}
                            </td>
                            <td className={`p-3 text-center ${product.id === 'flex' ? 'bg-blue-100 font-bold text-blue-900' : ''}`}>
                              {row.flex}
                            </td>
                            <td className={`p-3 text-center ${product.id === 'link' ? 'bg-blue-100 font-bold text-blue-900' : ''}`}>
                              {row.link}
                            </td>
                            <td className={`p-3 text-center ${product.id === 'eventsense' ? 'bg-blue-100 font-bold text-blue-900' : ''}`}>
                              {row.event}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Key Differentiators */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        Why Choose {product.name}?
                      </h4>
                      <div className="space-y-2 text-sm text-blue-800">
                        {product.id === 'core' && (
                          <>
                            <div>• Highest accuracy in the industry</div>
                            <div>• Premium AI cameras included</div>
                            <div>• Best for mission-critical deployments</div>
                            <div>• Complete professional installation</div>
                          </>
                        )}
                        {product.id === 'flex' && (
                          <>
                            <div>• Best balance of cost and performance</div>
                            <div>• Standard AI cameras included</div>
                            <div>• Perfect for growing businesses</div>
                            <div>• Professional support included</div>
                          </>
                        )}
                        {product.id === 'link' && (
                          <>
                            <div>• Works with existing IP cameras</div>
                            <div>• Maximum ROI on current infrastructure</div>
                            <div>• DIY-friendly installation</div>
                            <div>• Lowest upfront investment</div>
                          </>
                        )}
                        {product.id === 'eventsense' && (
                          <>
                            <div>• Perfect for temporary deployments</div>
                            <div>• Portable and quick setup</div>
                            <div>• No long-term commitment</div>
                            <div>• Ideal for events and trials</div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Upgrade Path
                      </h4>
                      <div className="space-y-2 text-sm text-green-800">
                        <div>• All products use the same dashboard</div>
                        <div>• Easy migration between models</div>
                        <div>• Data compatibility guaranteed</div>
                        <div>• Seamless scaling options</div>
                        <div>• Trade-in programs available</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="text-center space-y-3">
                    <Button 
                      onClick={() => onPageChange('demo')}
                      className="w-full lg:w-auto bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-3 px-8"
                    >
                      <GitCompare className="h-4 w-4 mr-2" />
                      Compare All Models Live
                    </Button>
                    <div className="flex gap-3 justify-center">
                      <Button 
                        onClick={() => onPageChange('contact')}
                        variant="outline"
                        className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white py-3 px-6"
                      >
                        <PhoneCall className="h-4 w-4 mr-2" />
                        Expert Guidance
                      </Button>
                      <Button 
                        onClick={() => onPageChange('products')}
                        variant="outline"
                        className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white py-3 px-6"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View All Products
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* vs Competitors Tab */}
              <div className="w-full flex-shrink-0 p-4 lg:p-6 space-y-4 lg:space-y-6 overflow-y-auto max-h-[75vh]">
                <div className="space-y-6">
                  {/* Competitor Comparison Header */}
                  <div className="text-center bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Why APC Leads the Market</h3>
                    <p className="text-sm text-gray-600">See how we compare against other people counting solutions</p>
                  </div>

                  {/* Competitive Advantages */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-orange-500" />
                        Our Competitive Advantages
                      </h4>
                      
                      {[
                        {
                          title: 'Superior Accuracy',
                          desc: 'Up to 99% accuracy vs 85-90% industry average',
                          icon: Target,
                          color: 'text-green-600 bg-green-100'
                        },
                        {
                          title: 'Edge Processing',
                          desc: 'Real-time analytics without cloud dependency',
                          icon: Zap,
                          color: 'text-blue-600 bg-blue-100'
                        },
                        {
                          title: 'Privacy First',
                          desc: 'GDPR compliant with no personal data storage',
                          icon: Shield,
                          color: 'text-purple-600 bg-purple-100'
                        },
                        {
                          title: 'Complete Solution',
                          desc: 'Hardware, software, and support included',
                          icon: Award,
                          color: 'text-orange-600 bg-orange-100'
                        }
                      ].map((advantage, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${advantage.color}`}>
                            <advantage.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{advantage.title}</div>
                            <div className="text-sm text-gray-600">{advantage.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold flex items-center gap-2">
                        <TrendingDown className="h-5 w-5 text-red-500" />
                        Common Competitor Issues
                      </h4>
                      
                      {[
                        {
                          issue: 'Cloud Dependency',
                          impact: 'System fails without internet connection',
                          solution: 'Our edge processing works offline'
                        },
                        {
                          issue: 'Privacy Concerns',
                          impact: 'Personal data stored and transmitted',
                          solution: 'We process anonymized data locally'
                        },
                        {
                          issue: 'Hidden Costs',
                          impact: 'Surprise fees for support and updates',
                          solution: 'Transparent pricing with everything included'
                        },
                        {
                          issue: 'Complex Setup',
                          impact: 'Requires technical expertise to install',
                          solution: 'Professional installation and setup included'
                        }
                      ].map((item, index) => (
                        <div key={index} className="p-4 bg-red-50 rounded-lg border border-red-200">
                          <div className="font-semibold text-red-900 mb-1">{item.issue}</div>
                          <div className="text-sm text-red-700 mb-2">{item.impact}</div>
                          <div className="text-sm text-green-700 font-medium">✅ {item.solution}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Position */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Market Leadership Metrics
                    </h4>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">500+</div>
                        <div className="text-xs text-gray-600">Global Installations</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-green-600">99%</div>
                        <div className="text-xs text-gray-600">Customer Satisfaction</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">24/7</div>
                        <div className="text-xs text-gray-600">Technical Support</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">18 mo</div>
                        <div className="text-xs text-gray-600">Comprehensive Warranty</div>
                      </div>
                    </div>
                  </div>

                  {/* Customer Testimonials */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold flex items-center gap-2">
                      <Users className="h-5 w-5 text-gray-600" />
                      What Our Customers Say
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-700">Retail Chain CEO</span>
                        </div>
                        <p className="text-sm text-gray-700">"Switched from competitor to APC. The accuracy improvement was immediate and the edge processing means no downtime during internet outages."</p>
                      </div>
                      
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-700">Office Manager</span>
                        </div>
                        <p className="text-sm text-gray-700">"The privacy features were crucial for our European offices. APC's GDPR compliance and local processing gave us peace of mind."</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="text-center space-y-3">
                    <Button 
                      onClick={() => onPageChange('demo')}
                      className="w-full lg:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 px-8"
                    >
                      <Trophy className="h-4 w-4 mr-2" />
                      See The Difference Live
                    </Button>
                    <div className="flex gap-3 justify-center">
                      <Button 
                        onClick={() => onPageChange('case-study')}
                        variant="outline"
                        className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white py-3 px-6"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Case Studies
                      </Button>
                      <Button 
                        onClick={() => onPageChange('contact')}
                        variant="outline"
                        className="border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white py-3 px-6"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Competitive Analysis
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}