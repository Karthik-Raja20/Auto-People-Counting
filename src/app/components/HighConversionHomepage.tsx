import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { 
  Play, 
  ArrowRight,
  CheckCircle,
  Users,
  BarChart3,
  Shield,
  Zap,
  Target,
  Clock,
  ShoppingCart,
  Building,
  MapPin,
  Calendar,
  Heart,
  Star,
  Award,
  Gauge,
  Wifi,
  Eye,
  Lock,
  TrendingUp,
  Activity,
  Globe,
  Phone,
  Mail,
  ChevronRight,
  PlayCircle,
  PauseCircle,
  Volume2,
  VolumeX,
  X
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HighConversionHomepageProps {
  onPageChange: (page: string) => void;
}

export function HighConversionHomepage({ onPageChange }: HighConversionHomepageProps) {
  const [demoPlaying, setDemoPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [pricingModel, setPricingModel] = useState('subscription');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState('retail');

  // SEO Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://apcsolutions.com/#organization",
        "name": "APC Solutions",
        "description": "AI-powered people counting and occupancy analytics solutions with 99% accuracy",
        "url": "https://apcsolutions.com",
        "logo": "https://apcsolutions.com/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/apc-solutions",
          "https://twitter.com/APCSolutions"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-APC-HELP",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://apcsolutions.com/#website",
        "url": "https://apcsolutions.com",
        "name": "APC Solutions - Auto People Counting",
        "description": "Transform your space with AI-powered people counting. 99% accuracy, GDPR compliant, real-time insights.",
        "publisher": {
          "@id": "https://apcsolutions.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://apcsolutions.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Product",
        "@id": "https://apcsolutions.com/#product",
        "name": "Auto People Counting System",
        "description": "AI-powered people counting with 99% accuracy, real-time analytics, and GDPR compliance",
        "brand": {
          "@type": "Brand",
          "name": "APC Solutions"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Rental Option",
            "price": "8000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer", 
            "name": "Subscription",
            "price": "5000",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "One-time Purchase",
            "price": "60000", 
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "200",
          "bestRating": "5"
        }
      }
    ]
  };

  // Copy variations for A/B testing
  const heroVariations = {
    h1Options: [
      "Auto People Counting - Real-time Insights",
      "Accurate People Counting for Smart Spaces", 
      "Real-time People Flow Analytics Platform"
    ],
    subheadOptions: [
      "99% accurate people counting with privacy-first AI and real-time insights.",
      "Transform spaces with GDPR-compliant analytics and instant actionable data.",
      "AI-powered occupancy monitoring delivering immediate business intelligence and optimization."
    ]
  };

  // Trust indicators and customer data
  const trustStats = {
    customers: "200+",
    accuracy: "99%",
    installations: "500+",
    countries: "25+"
  };

  // Feature highlights
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "99% Accuracy & Low False Positives",
      description: "Industry-leading precision with AI-powered computer vision validated across diverse environments.",
      badge: "AI-Powered"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Real-time Analytics & Alerts", 
      description: "Instant insights with sub-second processing and automated alerts for immediate action.",
      badge: "Real-time"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy-compliant & GDPR Ready",
      description: "Complete anonymity with no facial recognition or personal data storage requirements.",
      badge: "Certified"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Edge Processing & Low Latency",
      description: "On-device AI processing with EdgeBox™ technology for ultra-fast response times.",
      badge: "EdgeBox™"
    }
  ];

  // Solutions data
  const solutions = [
    {
      id: 'retail',
      icon: <ShoppingCart className="h-5 w-5" />,
      title: 'Retail',
      outcome: '+23% conversion rates',
      description: 'Optimize store layouts and staff allocation',
      color: 'bg-blue-50 text-blue-700'
    },
    {
      id: 'buildings',
      icon: <Building className="h-5 w-5" />,
      title: 'Smart Buildings', 
      outcome: '-31% energy costs',
      description: 'HVAC optimization and space utilization',
      color: 'bg-green-50 text-green-700'
    },
    {
      id: 'transit',
      icon: <MapPin className="h-5 w-5" />,
      title: 'Transit',
      outcome: '-45% crowd incidents',
      description: 'Passenger flow and safety management',
      color: 'bg-purple-50 text-purple-700'
    },
    {
      id: 'events',
      icon: <Calendar className="h-5 w-5" />,
      title: 'Events',
      outcome: '100% safety compliance',
      description: 'Real-time capacity and crowd control',
      color: 'bg-orange-50 text-orange-700'
    },
    {
      id: 'healthcare',
      icon: <Heart className="h-5 w-5" />,
      title: 'Healthcare',
      outcome: '-28% wait times',
      description: 'Patient flow and staff optimization',
      color: 'bg-red-50 text-red-700'
    }
  ];

  // Pricing data
  const pricingOptions = {
    rental: {
      name: 'Hardware Rental',
      price: '₹8,000',
      period: '/month',
      description: 'Complete hardware with service',
      features: ['Hardware included', '24/7 support', 'Installation & training', 'Flexible duration'],
      cta: 'Start Rental',
      badge: 'Most Flexible'
    },
    subscription: {
      name: 'SaaS Platform',
      price: '₹5,000', 
      period: '/month',
      description: 'Cloud analytics platform',
      features: ['Unlimited locations', 'Advanced analytics', 'API access', 'Priority support'],
      cta: 'Start Free Trial',
      badge: 'Most Popular'
    },
    onetime: {
      name: 'Perpetual License',
      price: '₹60,000',
      period: '/one-time',
      description: 'Complete ownership solution',
      features: ['Lifetime license', 'On-premise deployment', 'Custom integrations', '3-year warranty'],
      cta: 'Buy Now',
      badge: 'Best Value'
    }
  };

  // Customer testimonials
  const testimonials = [
    {
      quote: "APC transformed our retail operations. 23% conversion increase in just 3 months.",
      author: "Sarah Chen",
      title: "Retail Operations Director",
      company: "FashionForward",
      metric: "+23% conversion",
      image: "SC"
    },
    {
      quote: "Energy savings exceeded projections. 31% cost reduction with intelligent HVAC optimization.", 
      author: "Michael Rodriguez",
      title: "Facilities Manager",
      company: "TechTower Corp",
      metric: "-31% energy costs",
      image: "MR"
    },
    {
      quote: "Platform incidents dropped 45%. Our passengers feel safer and operations run smoother.",
      author: "Lisa Wang",
      title: "Transit Safety Director", 
      company: "MetroCity",
      metric: "-45% incidents",
      image: "LW"
    }
  ];

  // Customer logos
  const customerLogos = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'RetailMax', logo: 'RM' },
    { name: 'SmartBuildings', logo: 'SB' },
    { name: 'MetroTransit', logo: 'MT' },
    { name: 'HealthFirst', logo: 'HF' },
    { name: 'EventsPro', logo: 'EP' }
  ];

  // Integration steps
  const integrationSteps = [
    {
      step: 1,
      title: 'Install',
      description: 'Professional setup in 2-5 days',
      duration: '2-5 days'
    },
    {
      step: 2, 
      title: 'Analyze',
      description: 'Immediate data collection & insights',
      duration: 'Real-time'
    },
    {
      step: 3,
      title: 'Action',
      description: 'Optimize operations with AI recommendations',
      duration: 'Ongoing'
    }
  ];

  // FAQ data
  const faqQuestions = [
    {
      question: "How accurate is the people counting system?",
      answer: "Our AI-powered system achieves up to 99% accuracy using advanced computer vision algorithms validated across 500+ installations worldwide."
    },
    {
      question: "Is the system GDPR compliant?",
      answer: "Yes, our system is fully GDPR compliant with complete anonymity, no facial recognition, and no personal data storage."
    },
    {
      question: "What's the difference between rental, subscription, and purchase?",
      answer: "Rental includes hardware and support, subscription provides cloud analytics, and purchase offers perpetual licensing with complete ownership."
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Demo modal handler
  const openDemoModal = () => {
    setShowDemoModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDemoModal = () => {
    setShowDemoModal(false);
    document.body.style.overflow = 'unset';
    setDemoPlaying(false);
  };

  // Handle escape key for modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showDemoModal) {
        closeDemoModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showDemoModal]);

  return (
    <>
      {/* SEO Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Above the Fold */}
        <section className="relative pt-16 pb-8 lg:pt-20 lg:pb-12 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container-responsive relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-[70vh]">
              {/* Left Column - Copy */}
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                  <Award className="h-3 w-3 mr-1" />
                  AI-Powered Solution
                </Badge>
                
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Auto People Counting
                  <span className="text-primary block">Real-time Insights</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  99% accurate people counting with privacy-first AI and real-time insights.
                </p>
                
                {/* Primary CTA - Single Click */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                    onClick={openDemoModal}
                  >
                    Request Live Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  {/* Secondary CTA */}
                  <Button 
                    variant="outline"
                    size="lg" 
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-4 text-lg"
                    onClick={() => setDemoPlaying(!demoPlaying)}
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Watch 30s Demo
                  </Button>
                </div>
                
                {/* Trust Line */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Trusted by {trustStats.customers} retailers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span>{trustStats.accuracy} accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-accent" />
                    <span>{trustStats.installations} installations</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Interactive Mockup */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative bg-white rounded-2xl shadow-2xl p-6 border">
                  {/* Demo Controls */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Live Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setDemoPlaying(!demoPlaying)}
                        className="p-2"
                      >
                        {demoPlaying ? <PauseCircle className="h-4 w-4" /> : <PlayCircle className="h-4 w-4" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSoundEnabled(!soundEnabled)}
                        className="p-2"
                      >
                        {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="space-y-4">
                    {/* Metrics Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-700">1,247</div>
                        <div className="text-sm text-blue-600">Today's Visitors</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-700">98.2%</div>
                        <div className="text-sm text-green-600">Accuracy Rate</div>
                      </div>
                    </div>
                    
                    {/* Chart Visualization */}
                    <div className="h-32 bg-gradient-to-r from-blue-100 via-green-100 to-purple-100 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-700">Real-time Analytics</span>
                      </div>
                      {/* Animated Elements */}
                      {demoPlaying && (
                        <>
                          <div className="absolute top-4 left-4 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                          <div className="absolute bottom-6 right-8 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                        </>
                      )}
                    </div>
                    
                    {/* Status Indicators */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">System Online</span>
                      </div>
                      <div className="text-gray-500">Last updated: now</div>
                    </div>
                  </div>
                  
                  {/* Fallback Image */}
                  <div className="mt-4">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4NDQ2MzU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="APC people counting dashboard showing real-time visitor analytics, conversion metrics, and occupancy heatmaps with live data visualization"
                      className="w-full h-auto rounded-lg opacity-20 absolute inset-0 object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose APC Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Industry-leading technology delivering measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                    <Badge className="mb-3 text-xs bg-gray-100 text-gray-600">
                      {feature.badge}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Carousel/Grid */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Industry Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proven results across diverse industries
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {solutions.map((solution) => (
                <Card 
                  key={solution.id} 
                  className={`cursor-pointer border-2 transition-all duration-300 hover:shadow-lg ${
                    selectedSolution === solution.id ? 'border-primary' : 'hover:border-primary/30'
                  }`}
                  onClick={() => setSelectedSolution(solution.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 ${solution.color}`}>
                      {solution.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{solution.title}</h3>
                    <div className="text-sm font-medium text-green-600 mb-2">{solution.outcome}</div>
                    <p className="text-xs text-gray-600 mb-3">{solution.description}</p>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        onPageChange('applications');
                      }}
                    >
                      See Demo
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo Callout */}
        <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-90"></div>
          <div className="container-responsive text-center relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Experience Live Analytics
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              See real-time people counting in action with our interactive demo sandbox
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Retail Store', 'Office Building', 'Transit Hub'].map((preset) => (
                <Button 
                  key={preset}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={openDemoModal}
                >
                  {preset} Demo
                </Button>
              ))}
            </div>
            
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3"
              onClick={openDemoModal}
            >
              Launch Interactive Demo
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Flexible Pricing Options
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the perfect solution for your business needs
              </p>
            </div>

            {/* Pricing Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                {Object.keys(pricingOptions).map((option) => (
                  <button
                    key={option}
                    onClick={() => setPricingModel(option)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      pricingModel === option
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {pricingOptions[option as keyof typeof pricingOptions].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="max-w-md mx-auto">
              {Object.entries(pricingOptions).map(([key, option]) => (
                pricingModel === key && (
                  <Card key={key} className="border-2 border-primary/20 shadow-xl">
                    <CardHeader className="text-center pb-4">
                      <Badge className="mx-auto mb-2 bg-primary/10 text-primary">
                        {option.badge}
                      </Badge>
                      <CardTitle className="text-2xl">{option.name}</CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                      <div className="flex items-baseline justify-center gap-1 mt-4">
                        <span className="text-4xl font-bold text-gray-900">{option.price}</span>
                        <span className="text-gray-500">{option.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        onClick={() => onPageChange('demo')}
                      >
                        {option.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                variant="outline"
                onClick={() => onPageChange('products')}
              >
                Compare All Plans
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Customer Logos + Testimonials */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container-responsive">
            {/* Customer Logos */}
            <div className="text-center mb-12">
              <h3 className="text-lg font-medium text-gray-600 mb-8">
                Trusted by leading organizations worldwide
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {customerLogos.map((customer, index) => (
                  <div key={index} className="flex items-center justify-center w-16 h-16 bg-white rounded-lg border border-gray-200 shadow-sm">
                    <span className="text-sm font-bold text-gray-400">{customer.logo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rotating Testimonial */}
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 mb-6 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {testimonials[currentTestimonial].image}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[currentTestimonial].title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 ml-4">
                      {testimonials[currentTestimonial].metric}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              
              {/* Testimonial Navigation */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Integration Steps */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Quick Integration & Onboarding
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get up and running in days, not months
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {integrationSteps.map((step, index) => (
                  <div key={step.step} className="text-center relative">
                    {/* Connector line */}
                    {index < integrationSteps.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-full w-8 h-0.5 bg-primary/30 transform translate-x-4"></div>
                    )}
                    
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold text-lg mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Snippet */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqQuestions.map((faq, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button 
                variant="outline"
                onClick={() => onPageChange('faq')}
              >
                View All FAQs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600"></div>
          <div className="container-responsive text-center relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Space Intelligence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 200+ organizations using APC Solutions for data-driven optimization
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 font-semibold"
                onClick={openDemoModal}
              >
                Get Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
                onClick={() => onPageChange('demo')}
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
                onClick={() => onPageChange('contact')}
              >
                Contact Sales
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>15-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Expert support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Modal */}
        {showDemoModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Request Live Demo</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeDemoModal}
                    className="p-2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Get a personalized demonstration of our people counting solution
                </p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Business Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Enter business email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Company</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Enter company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Industry</label>
                    <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                      <option>Select industry</option>
                      <option>Retail & Shopping</option>
                      <option>Office Buildings</option>
                      <option>Transportation</option>
                      <option>Healthcare</option>
                      <option>Events & Entertainment</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                    onClick={() => {
                      closeDemoModal();
                      onPageChange('demo');
                    }}
                  >
                    Schedule Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}