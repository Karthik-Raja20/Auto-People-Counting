import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Clock, 
  Calendar, 
  CalendarDays, 
  Zap, 
  Timer, 
  Play, 
  CheckCircle, 
  Star, 
  Rocket, 
  Target, 
  Award, 
  TrendingUp, 
  BarChart3, 
  Activity, 
  Gauge,
  Sparkles,
  ArrowRight,
  DollarSign,
  Gift,
  FlashIcon as Bolt,
  Shield,
  MapPin,
  Truck,
  AlertTriangle,
  Monitor,
  Power,
  Wifi,
  HardDrive,
  Battery,
  Settings
} from 'lucide-react';

interface DemoEffectsProps {
  onDemoSelect?: (demoType: '1-day' | '15-day' | '30-day') => void;
  onPageChange?: (page: string) => void;
}

export function DemoEffects({ onDemoSelect, onPageChange }: DemoEffectsProps) {
  const [activeDemo, setActiveDemo] = useState<'1-day' | '15-day' | '30-day'>('15-day');
  const [animationStep, setAnimationStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Animation timeline
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const animationTimer = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(animationTimer);
    };
  }, []);

  // Updated demo options with new pricing structure
  const demoOptions = [
    {
      id: '1-day' as const,
      title: '1-Day Standard Demo',
      subtitle: 'Essential Evaluation Package',
      price: 'FREE',
      originalPrice: null,
      duration: '1 Day',
      icon: <Zap className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100/30',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      features: [
        'Essential system evaluation',
        'Basic functionality test',
        'Live data collection',
        'Technical compatibility check'
      ],
      benefits: [
        'Free Demo in Mumbai',
        'Installation charges applicable',
        'Distance charges: Conveyance + Team stay/food',
        'Risk-free evaluation'
      ],
      deliverables: [
        'System functionality demonstration',
        'Basic performance metrics',
        'Technical compatibility report',
        'Initial assessment summary'
      ],
      badge: 'Free',
      badgeColor: 'bg-blue-600',
      cta: 'Start Free Demo',
      popular: false,
      savings: 'No demo cost - Installation & travel charges only'
    },
    {
      id: '15-day' as const,
      title: '15 Days Demo',
      subtitle: 'Most Popular Choice',
      price: '₹8,000',
      originalPrice: null,
      duration: '15 Days',
      icon: <Target className="h-6 w-6" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100/30',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      features: [
        'Complete system trial',
        'Full analytics dashboard access',
        'Performance evaluation & reports',
        'ROI calculation support'
      ],
      benefits: [
        '₹8,000 fixed cost',
        'Installation charges applicable',
        'Distance charges: Conveyance + Team stay/food',
        'Comprehensive evaluation period'
      ],
      deliverables: [
        'Complete analytics report',
        'Performance evaluation metrics',
        'ROI calculation analysis',
        'Implementation roadmap'
      ],
      badge: 'Popular',
      badgeColor: 'bg-green-600',
      cta: 'Book Popular Demo',
      popular: true,
      savings: 'Fixed cost with comprehensive evaluation'
    },
    {
      id: '30-day' as const,
      title: '30 Days Extended Plan',
      subtitle: 'Premium Evaluation',
      price: '₹15,000',
      originalPrice: null,
      duration: '30 Days',
      icon: <Award className="h-6 w-6" />,
      color: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100/30',
      borderColor: 'border-gray-200',
      textColor: 'text-gray-700',
      features: [
        'Extended system evaluation',
        'Full analytics access',
        'Comprehensive performance testing',
        'Advanced ROI analysis'
      ],
      benefits: [
        '60% purchase credit (₹9,000)',
        'Installation charges applicable',
        'Distance charges: Conveyance + Team stay/food',
        'Extended evaluation & testing period'
      ],
      deliverables: [
        'Detailed analytics report',
        'Long-term performance analysis',
        'Comprehensive ROI study',
        'Full implementation strategy'
      ],
      badge: 'Premium',
      badgeColor: 'bg-gray-600',
      cta: 'Get Extended Plan',
      popular: false,
      savings: '60% purchase credit - Effective cost ₹6,000'
    }
  ];

  // Client infrastructure requirements
  const infrastructureRequirements = [
    {
      icon: <Wifi className="h-5 w-5" />,
      title: 'POE (Power over Ethernet)',
      description: 'Network switch with PoE capability'
    },
    {
      icon: <Power className="h-5 w-5" />,
      title: 'Power Supply',
      description: 'Standard 110-240V AC power outlet'
    },
    {
      icon: <Monitor className="h-5 w-5" />,
      title: 'Display Monitor',
      description: 'HDMI/VGA compatible display'
    },
    {
      icon: <HardDrive className="h-5 w-5" />,
      title: 'Computer/System',
      description: 'PC/laptop for dashboard access'
    },
    {
      icon: <Battery className="h-5 w-5" />,
      title: 'Backup Power Supply',
      description: 'UPS for uninterrupted operation'
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: 'Additional Systems',
      description: 'Any specific client requirements'
    }
  ];

  const handleDemoSelect = (demoType: '1-day' | '15-day' | '30-day') => {
    setActiveDemo(demoType);
    if (onDemoSelect) {
      onDemoSelect(demoType);
    } else if (onPageChange) {
      onPageChange('demo');
    }
  };

  // Animated stats for the selected demo
  const getAnimatedStats = (demo: typeof demoOptions[0]) => {
    const stats = {
      '1-day': { accuracy: '95%', insights: '50+', roi: '200%' },
      '15-day': { accuracy: '99%', insights: '150+', roi: '300%' },
      '30-day': { accuracy: '99.5%', insights: '250+', roi: '400%' }
    };
    return stats[demo.id];
  };

  const currentStats = getAnimatedStats(demoOptions.find(d => d.id === activeDemo)!);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Demo Icons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute hidden lg:block w-6 h-6 text-blue-600/10 transform rotate-${i * 60} animate-pulse`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 500}ms`
            }}
          >
            {i % 2 === 0 ? <Clock /> : <Calendar />}
          </div>
        ))}
      </div>

      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-blue-600/10 to-green-500/10 rounded-full border border-blue-600/20">
            <Rocket className="h-5 w-5 text-blue-600 animate-bounce" />
            <span className="text-lg font-semibold text-blue-700">Demo Package Options</span>
            <Sparkles className="h-5 w-5 text-green-600 animate-pulse" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Try APC EdgeBox™ in Your Environment
            <span className="block bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-clip-text text-transparent">
              Experience APC EdgeBox™ with Flexible Demo Packages
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            From <span className="font-bold text-blue-600">basic 1-day evaluation</span> to 
            <span className="font-bold text-green-600"> extended packages with purchase credits</span>. 
            All packages include <span className="font-bold text-gray-700">₹15,000 refundable security deposit</span>.
          </p>
        </div>

        {/* Demo Options Grid */}
        <div className={`grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {demoOptions.map((demo, index) => (
            <Card
              key={demo.id}
              className={`relative group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                activeDemo === demo.id 
                  ? 'ring-4 ring-blue-600/30 shadow-2xl scale-105' 
                  : 'hover:scale-105'
              } ${demo.bgColor} ${demo.borderColor} border-2 overflow-hidden`}
              onClick={() => handleDemoSelect(demo.id)}
            >
              {/* Popular Badge */}
              {demo.popular && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 animate-pulse">
                    <Star className="h-4 w-4 inline mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <Badge className={`${demo.badgeColor} text-white shadow-lg`}>
                  {demo.badge}
                </Badge>
              </div>

              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${demo.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {demo.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${demo.textColor}`}>{demo.price}</div>
                    <div className="text-xs text-gray-500">{demo.subtitle}</div>
                  </div>
                </div>
                
                <CardTitle className={`text-xl ${demo.textColor} mb-2`}>
                  {demo.title}
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  {demo.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                {/* Duration and Key Stats */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${demo.textColor}`}>{demo.duration}</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${demo.textColor}`}>
                      {activeDemo === demo.id ? currentStats.accuracy : '99%'}
                    </div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className={`font-semibold ${demo.textColor} mb-3`}>What's Included:</h4>
                  {demo.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`h-4 w-4 ${demo.textColor} flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits/Costs */}
                <div className="space-y-2 pt-2 border-t border-gray-200">
                  <h4 className={`font-semibold ${demo.textColor} mb-2 text-sm`}>Costs & Benefits:</h4>
                  {demo.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Savings Highlight */}
                {demo.id === '30-day' && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-green-700">
                      <Gift className="h-4 w-4" />
                      <span className="font-medium">{demo.savings}</span>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <Button 
                  className={`w-full bg-gradient-to-r ${demo.color} hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold py-3 group`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDemoSelect(demo.id);
                  }}
                >
                  {demo.cta}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>

              {/* Animated Selection Indicator */}
              {activeDemo === demo.id && (
                <div className="absolute inset-0 border-4 border-blue-600/50 rounded-lg pointer-events-none animate-pulse"></div>
              )}
            </Card>
          ))}
        </div>

        {/* Client Infrastructure Requirements */}
        <Card className={`mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} bg-gradient-to-br from-white to-gray-50/50 shadow-xl border-2 border-gray-200`}>
          <CardHeader className="pb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-white shadow-lg">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-2xl text-gray-900 mb-1">
                  Client Infrastructure Requirements
                </CardTitle>
                <p className="text-gray-600">
                  For all demo packages, the client will need to provide the following infrastructure:
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {infrastructureRequirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {req.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{req.title}</h4>
                    <p className="text-sm text-gray-600">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Deposit Information */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Security Deposit</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <span className="font-bold text-blue-600">₹15,000 refundable deposit</span> required for all demo packages
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Fully refundable upon equipment return in good condition</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Selected Demo Details */}
        {activeDemo && (
          <Card className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} bg-gradient-to-br from-white to-gray-50/50 shadow-2xl border-2 border-blue-600/20`}>
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${demoOptions.find(d => d.id === activeDemo)?.color} flex items-center justify-center text-white shadow-lg`}>
                    {demoOptions.find(d => d.id === activeDemo)?.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900 mb-1">
                      {demoOptions.find(d => d.id === activeDemo)?.title}
                    </CardTitle>
                    <p className="text-gray-600">
                      Selected Demo Plan • {demoOptions.find(d => d.id === activeDemo)?.duration}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${demoOptions.find(d => d.id === activeDemo)?.color} bg-clip-text text-transparent`}>
                    {demoOptions.find(d => d.id === activeDemo)?.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    {activeDemo === '1-day' ? 'Plus installation & travel' : 'Plus installation & travel'}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Real-time Stats Animation */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-600/5 to-blue-600/10 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2 animate-pulse">
                    {currentStats.accuracy}
                  </div>
                  <div className="text-sm text-gray-600">Expected Accuracy</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2 animate-pulse">
                    {currentStats.insights}
                  </div>
                  <div className="text-sm text-gray-600">Data Points/Day</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-600/5 to-gray-600/10 rounded-xl">
                  <div className="text-3xl font-bold text-gray-700 mb-2 animate-pulse">
                    {currentStats.roi}
                  </div>
                  <div className="text-sm text-gray-600">Expected ROI</div>
                </div>
              </div>

              {/* Comprehensive Feature Breakdown */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Costs & Benefits
                  </h4>
                  <div className="space-y-3">
                    {demoOptions.find(d => d.id === activeDemo)?.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse mt-2"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                    What You'll Get
                  </h4>
                  <div className="space-y-3">
                    {demoOptions.find(d => d.id === activeDemo)?.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Distance Charges Information */}
              <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Location-Based Charges</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>In Mumbai:</strong> Installation charges applicable</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Truck className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Distance from Mumbai:</strong> Conveyance + Team stay and food charges apply</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <Button 
                  onClick={() => handleDemoSelect(activeDemo)}
                  className={`flex-1 bg-gradient-to-r ${demoOptions.find(d => d.id === activeDemo)?.color} hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold py-3 text-lg group`}
                >
                  <Rocket className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Book This Demo
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => onPageChange?.('contact')}
                  className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 py-3 text-lg group"
                >
                  <Activity className="h-5 w-5 mr-2" />
                  Speak with Expert
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>₹15,000 refundable deposit</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Professional installation included</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>24/7 support during trial</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}