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
  X,
  Sparkles,
  Timer,
  DollarSign,
  Rocket,
  Bolt,
  Layers,
  Flame,
  Music,
  Cpu,
  HelpCircle,
  MessageCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VideoLibrary } from './VideoLibrary';
import { UniversalApplications } from './UniversalApplications';
import { ComprehensivePricing } from './ComprehensivePricingImproved';
import { DemoPricingSection } from './DemoPricingSection';
import { DemoEffects } from './DemoEffects';
import { InteractiveHeader } from './InteractiveHeader';
import { EngagementBooster } from './EngagementBooster';
import { StickyCtaBar } from './StickyCtaBar';
import heroBackground from 'figma:asset/74a1248aa61f194258824f2abb242eee439bab35.png';

interface OptimizedHomepageProps {
  onPageChange: (page: string) => void;
}

export function OptimizedHomepage({ onPageChange }: OptimizedHomepageProps) {
  const [demoPlaying, setDemoPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [pricingModel, setPricingModel] = useState('subscription');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState('retail');
  const [showVideo, setShowVideo] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ installations: 0, accuracy: 0, setupTime: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentUrgency, setCurrentUrgency] = useState(0);

  // Animation and effects
  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats
    const statsTimer = setTimeout(() => {
      setAnimatedStats({ installations: 500, accuracy: 99, setupTime: 15 });
    }, 500);

    // Testimonial carousel
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearTimeout(statsTimer);
      clearInterval(testimonialTimer);
    };
  }, []);

  const urgencyMessages = [
    "🔥 Demo Options: 1-Day FREE | 15-Day ₹5,000 | 30-Day ₹10,000 - 60% adjustable in final procurement",
    "⚡ Try APC EdgeBox™ in Your Environment - Installation & Conveyance charges applicable", 
    "🎯 Demo Package Options: Quick system evaluation, Full analytics access, Performance evaluation",
    "🚀 Start with FREE 1-Day Demo-POC - Basic functionality test and live data collection"
  ];

  useEffect(() => {
    const urgencyTimer = setInterval(() => {
      setCurrentUrgency(prev => (prev + 1) % urgencyMessages.length);
    }, 3000);
    return () => clearInterval(urgencyTimer);
  }, []);

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
      }
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
      title: 'Retail Analytics',
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
      title: 'Transit Hubs',
      outcome: '-45% crowd incidents',
      description: 'Passenger flow and safety management',
      color: 'bg-purple-50 text-purple-700'
    },
    {
      id: 'events',
      icon: <Calendar className="h-5 w-5" />,
      title: 'Events & Venues',
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

  // Core solutions for one-time and subscription pricing
  const coreSolutions = [
    {
      id: 'core',
      name: 'APC Core',
      subtitle: 'Complete End-to-End Package',
      price: '₹60,000',
      priceDetails: 'One-time Payment',
      subscriptionPrice: '₹30,000',
      subscriptionDetails: 'Advance + ₹5,000/month for 24 months',
      rentalPrice: '₹8,000/mo',
      rentalDetails: 'Min 5-6 units + Installation + ₹20,000 security deposit',
      demoPrice: 'From ₹5,000',
      demoDetails: '15/30-day options + Installation charges + ₹15,000 refundable deposit',
      description: 'Turnkey solution with AI Camera + APC EdgeBox™ + Smart Analytics Platform',
      features: ['Turnkey installation', 'AI-powered analytics', '24/7 support included'],
      badge: 'Most Popular',
      badgeColor: 'bg-primary',
      icon: <Users className="h-6 w-6" />,
      cta: 'Start Free POC'
    },
    {
      id: 'flex',
      name: 'APC Flex',
      subtitle: 'Cost-Efficient Intelligence',
      price: '₹45,000',
      priceDetails: 'One-time Payment',
      subscriptionPrice: '₹22,500',
      subscriptionDetails: 'Advance + ₹4,000/month for 24 months',
      rentalPrice: '₹6,000/mo',
      rentalDetails: 'Min 5-6 units + Installation + ₹15,000 security deposit',
      demoPrice: 'From ₹5,000',
      demoDetails: '15/30-day options + Installation charges + ₹15,000 refundable deposit',
      description: 'Advanced analytics with budget-friendly cameras',
      features: ['Economical solution', 'Multi-location scalable', 'Advanced intelligence'],
      badge: 'Cost Efficient',
      badgeColor: 'bg-accent',
      icon: <BarChart3 className="h-6 w-6" />,
      cta: 'Learn More'
    },
    {
      id: 'link',
      name: 'APC Link',
      subtitle: 'Leverage Existing Infrastructure',
      price: '₹35,000',
      priceDetails: 'One-time Payment',
      subscriptionPrice: '₹17,500',
      subscriptionDetails: 'Advance + ₹3,000/month for 24 months',
      rentalPrice: '₹4,500/mo',
      rentalDetails: 'Min 5-6 units + Installation + ₹12,000 security deposit',
      demoPrice: 'From ₹5,000',
      demoDetails: '15/30-day options + Installation charges + ₹15,000 refundable deposit',
      description: 'Upgrade existing cameras with AI analytics',
      features: ['Maximum ROI', 'Retrofit solution', 'Leverage current assets'],
      badge: 'Use Existing',
      badgeColor: 'bg-blue-500',
      icon: <Wifi className="h-6 w-6" />,
      cta: 'Check Compatibility'
    }
  ];

  // EventSense - only for rental pricing
  const eventSenseSolution = {
    id: 'eventSense',
    name: 'APC EventSense',
    subtitle: 'On-Demand Event Rental',
    price: '₹15,000',
    priceDetails: 'One-time Payment per unit',
    subscriptionPrice: '₹7,500',
    subscriptionDetails: 'Advance + ₹625/month for 24 months',
    rentalPrice: '₹8,000/day',
    rentalDetails: 'Min 4-5 days + ₹10,000 refundable deposit + Installation/conveyance charges as per actual + 30-day advance notice + Client provides: Power, PC, Display, POE, Computer/Laptop',
    demoPrice: 'From ₹5,000',
    demoDetails: '15/30-day options + Installation charges + ₹15,000 refundable deposit',
    description: 'Portable solution for events, festivals, and temporary deployments',
    features: ['₹8,000 per day rental', '4-5 day minimum', '30-day advance notice', 'Site visit included'],
    badge: 'Event Rental',
    badgeColor: 'bg-purple-500',
    icon: <Music className="h-6 w-6" />,
    cta: 'Get Rental Quote'
  };

  // Combined solutions for rental (includes EventSense)
  const allSolutions = [...coreSolutions, eventSenseSolution];

  // Customer testimonials
  const testimonials = [
    {
      quote: "APC Core transformed our retail operations. Queue times dropped 42% and conversions increased 20%.",
      author: "Sarah Chen",
      title: "Operations Director",
      company: "RetailMall Supermarket",
      companySize: "45 stores",
      metric: "+23% conversion",
      industry: "Retail",
      implementationTime: "2 weeks",
      roi: "280%"
    },
    {
      quote: "The 15-day POC convinced us immediately. Setup was seamless and results were instant.",
      author: "Michael Rodriguez",
      title: "Facility Manager",
      company: "Tech Campus Inc",
      companySize: "12-floor complex",
      metric: "-31% energy costs",
      industry: "Commercial Real Estate", 
      implementationTime: "1 week",
      roi: "340%"
    },
    {
      quote: "EventSense saved our festival. Real-time crowd monitoring prevented overcrowding incidents.",
      author: "Emma Thompson",
      title: "Event Director",
      company: "Summer Music Festival",
      companySize: "8 stations",
      metric: "-45% incidents",
      industry: "Public Transportation",
      implementationTime: "3 weeks", 
      roi: "220%"
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
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white py-3 overflow-hidden relative">
          <div className="animate-pulse absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative">
            <div className="flex items-center justify-center gap-3 animate-bounce">
              <Flame className="h-4 w-4" />
              <span className="font-medium text-sm">
                {urgencyMessages[currentUrgency]}
              </span>
              <Timer className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Interactive Header with Video Demo and Tools */}
        <InteractiveHeader onPageChange={onPageChange} />

        {/* Quick Access Navigation Bar - Desktop Only */}
        <div className="hidden lg:block bg-white border-b border-gray-200 py-2 sticky z-40 shadow-sm" style={{ top: 'var(--nav-height)' }}>
          <div className="container-responsive">
            <div className="flex items-center justify-center gap-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onPageChange('demo')}
                className="text-primary hover:bg-primary/10 font-medium group touch-target"
              >
                <PlayCircle className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                Start Free POC
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onPageChange('products')}
                className="text-gray-600 hover:text-primary hover:bg-primary/5 touch-target"
              >
                Solutions
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onPageChange('applications')}
                className="text-gray-600 hover:text-primary hover:bg-primary/5 touch-target"
              >
                Industries
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onPageChange('insights')}
                className="text-gray-600 hover:text-primary hover:bg-primary/5 touch-target"
              >
                Success Stories
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onPageChange('contact')}
                className="text-gray-600 hover:text-primary hover:bg-primary/5 touch-target"
              >
                <Phone className="h-4 w-4 mr-1" />
                Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Optimized Hero Section - Above the Fold */}
        <section className="relative overflow-hidden flex items-center" style={{ minHeight: 'calc(100vh - var(--nav-height) - 60px)' }}>
          {/* Hero Background Image with Transparency */}
          <div className="absolute inset-0">
            <img 
              src={heroBackground}
              alt="Technology Network Background"
              className="w-full h-full object-cover opacity-30"
              style={{
                filter: 'blur(0.5px)',
                transform: 'scale(1.05)'
              }}
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/30"></div>
          </div>
          
          {/* Subtle Tech Enhancement Overlay */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Minimal floating elements for tech feel */}
            <div className="hidden lg:block absolute top-1/4 left-1/4 w-60 h-60 bg-primary/[0.02] rounded-full blur-3xl animate-pulse"></div>
            <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/[0.02] rounded-full blur-3xl animate-pulse delay-2000"></div>
            
            {/* Subtle data points */}
            <div className="hidden lg:block absolute top-1/3 left-1/2 w-2 h-2 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
            <div className="hidden lg:block absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent/20 rounded-full animate-pulse delay-3000"></div>
            <div className="hidden lg:block absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-primary/15 rounded-full animate-pulse delay-4000"></div>
          </div>
          
          <div className="container-responsive relative z-10 py-8 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left: Content - Compact */}
              <div className={`text-center lg:text-left transform transition-all duration-1000 space-y-4 lg:space-y-6 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                
                {/* Impact Badge */}
                <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 shadow-lg">
                  <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                  <span className="text-base font-semibold text-primary">$2.3M Average Annual Savings</span>
                  <Bolt className="h-5 w-5 text-accent animate-bounce" />
                </div>
                
                {/* Main Headline - Optimized */}
                <h1 className="text-gray-900 text-center lg:text-left">
                  <span className="block text-base sm:text-lg font-semibold text-primary mb-2 lg:mb-3 tracking-wide">
                    Auto People Counting
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      Real-time Insights That Actually Work
                    </span>
                  </span>
                </h1>
                
                {/* Clear Value Proposition */}
                <div>
                  <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
                    99% accurate people counting with privacy-first AI and <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">real-time insights</span>. 
                    Transform your space with <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded">GDPR-compliant analytics</span> 
                    and <span className="text-green-600 font-bold bg-green-100 px-2 py-1 rounded">instant actionable data</span>.
                  </p>
                </div>

                {/* Key Value Metrics */}
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-lg">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">99%</div>
                      <div className="text-sm text-gray-600">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-accent mb-2">15 min</div>
                      <div className="text-sm text-gray-600">Setup Time</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">$2.3M</div>
                      <div className="text-sm text-gray-600">Avg. Savings</div>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col gap-4 items-center lg:items-start">
                  <Button 
                    onClick={openDemoModal}
                    className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-responsive text-base lg:text-lg font-semibold w-full sm:w-auto touch-target"
                  >
                    <Rocket className="mr-2 lg:mr-3 h-5 lg:h-6 w-5 lg:w-6 group-hover:animate-bounce" />
                    Request Live Demo
                    <ChevronRight className="ml-2 lg:ml-3 h-4 lg:h-5 w-4 lg:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Button 
                      onClick={() => onPageChange('demo-packages')}
                      className="group bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 btn-responsive touch-target"
                    >
                      <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Watch 30s Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => onPageChange('products')}
                      className="group border-2 border-gray-300 text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 btn-responsive touch-target"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Compare Plans
                    </Button>
                  </div>
                </div>

                {/* Trust Line */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 text-sm text-gray-600">
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

              {/* Right: Interactive Video/Demo - No Live Dashboard */}
              <div className={`relative order-first lg:order-last transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/20">
                  {showVideo ? (
                    <div className="aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="APC Solutions Demo Video"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-video group cursor-pointer hover:transform hover:scale-105 transition-all duration-300 touch-target" onClick={() => setShowVideo(true)}>
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGJ1aWxkaW5nJTIwdGVjaG5vbG9neSUyMGNhbWVyYSUyMGFpfGVufDF8fHx8MTc1ODM1NjQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="APC EdgeBox Technology Demo showing people counting analytics dashboard"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Interactive overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 group-hover:from-black/60 transition-all duration-300 flex items-center justify-center">
                        <div className="relative">
                          {/* Pulsing rings */}
                          <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
                          <div className="absolute inset-2 rounded-full border-4 border-white/50 animate-pulse"></div>
                          
                          {/* Play button */}
                          <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                            <Play className="h-8 w-8 text-white ml-1" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced info overlay */}
                      <div className="absolute bottom-2 lg:bottom-4 left-2 lg:left-4 right-2 lg:right-4">
                        <div className="bg-white/95 backdrop-blur rounded-lg lg:rounded-xl p-3 lg:p-4 shadow-lg border border-white/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs lg:text-sm font-semibold text-gray-900">🎥 MegaMall Success Story</div>
                            <Badge className="bg-green-500 text-white text-xs">Live Results</Badge>
                          </div>
                          <div className="text-xs text-gray-600 mb-2 hidden sm:block">See how we reduced queues by 42% and increased revenue by $2.3M</div>
                          <div className="flex gap-3 lg:gap-4 text-xs">
                            <div className="flex items-center gap-1">
                              <TrendingUp className="h-3 w-3 text-green-500 flex-shrink-0" />
                              <span className="hidden sm:inline">+20% Conversion</span>
                              <span className="sm:hidden">+20%</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3 text-green-500 flex-shrink-0" />
                              <span className="hidden sm:inline">$2.3M Savings</span>
                              <span className="sm:hidden">$2.3M</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dynamic floating stats with animations - Desktop only */}
                <div className="hidden lg:block absolute -top-6 -right-6 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-xl p-4 border border-gray-200 animate-bounce">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-primary" />
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">99%</div>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Accuracy Rate</div>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-1 rounded-full w-[99%] animate-pulse"></div>
                  </div>
                </div>

                {/* Additional floating elements - Desktop only */}
                <div className="hidden lg:block absolute -bottom-6 -left-6 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-accent" />
                    <div className="text-2xl font-bold text-accent">15 min</div>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Setup Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Below the fold content from CompactEnhancedHomepage */}
        
        {/* NEW: Engagement Booster Section - Social Proof, Trust, Urgency */}
        <EngagementBooster onPageChange={onPageChange} />

        {/* Demo Package Options */}
        <DemoPricingSection onPageChange={onPageChange} />

        {/* Comprehensive Pricing Options */}
        <ComprehensivePricing onPageChange={onPageChange} coreSolutions={coreSolutions} allSolutions={allSolutions} />

        {/* Choose Your Perfect APC Solution */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container-responsive">
            <div className="text-center mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-full border border-purple-200">
                <Layers className="h-4 w-4 text-purple-600" />
                <span className="text-purple-600 font-semibold text-sm">Solution Portfolio</span>
              </div>
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                Choose Your Perfect APC Solution
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                From turnkey solutions to cost-effective analytics and rental options, discover the APC EdgeBox™ solution that perfectly matches your specific requirements and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {allSolutions.map((solution, index) => (
                <Card key={solution.id} className="relative border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl group">
                  {/* Badge */}
                  <div className="absolute -top-3 left-4">
                    <Badge className={`${solution.badgeColor} text-white px-3 py-1 text-xs font-semibold`}>
                      {solution.badge}
                    </Badge>
                  </div>

                  <CardHeader className="pb-4 pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                        {solution.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-900">{solution.name}</CardTitle>
                        <p className="text-sm text-gray-500">{solution.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">{solution.price}</div>
                    <CardDescription className="text-sm leading-relaxed">{solution.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => onPageChange('demo')}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 text-sm group-hover:shadow-lg transition-all duration-300"
                    >
                      {solution.cta}
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Exploration Links */}
            <div className="text-center mt-12">
              <div className="inline-flex flex-wrap justify-center gap-4">
                <Button 
                  variant="outline"
                  onClick={() => onPageChange('products')}
                  className="hover:bg-primary hover:text-white transition-colors"
                >
                  <Cpu className="mr-2 h-4 w-4" />
                  Explore All Products
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => onPageChange('applications')}
                  className="hover:bg-accent hover:text-white transition-colors"
                >
                  <Building className="mr-2 h-4 w-4" />
                  View Industry Solutions
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => onPageChange('case-study')}
                  className="hover:bg-green-600 hover:text-white transition-colors"
                >
                  <Award className="mr-2 h-4 w-4" />
                  Read Success Stories
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Universal Applications */}
        <UniversalApplications />

        {/* Video Library */}
        <VideoLibrary onPageChange={onPageChange} />

        {/* FAQ Preview Section */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container-responsive">
            <div className="text-center mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full border border-blue-200">
                <HelpCircle className="h-4 w-4 text-blue-600" />
                <span className="text-blue-600 font-semibold text-sm">Help Center</span>
              </div>
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Get instant answers to the most common questions about APC Solutions, pricing, and implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Popular FAQ Items */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <Badge className="bg-green-500 text-white text-xs">Popular</Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 leading-tight">
                  How accurate is your people counting solution?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our APC EdgeBox™ delivers up to 99% accuracy in optimal conditions with AI-powered computer vision and edge processing.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-green-600" />
                  </div>
                  <Badge className="bg-green-500 text-white text-xs">Popular</Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 leading-tight">
                  What are your pricing plans and what's included?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Four solutions from ₹35,000-₹60,000 one-time or ₹3,000-₹5,000/month. All include EdgeBox™, installation, and 24/7 support.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-4 w-4 text-purple-600" />
                  </div>
                  <Badge className="bg-green-500 text-white text-xs">Popular</Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 leading-tight">
                  Is the system GDPR and privacy compliant?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yes, fully GDPR compliant with local processing, no facial recognition, and complete privacy protection by design.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 text-orange-600" />
                  </div>
                  <Badge className="bg-green-500 text-white text-xs">Popular</Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 leading-tight">
                  What are the technical requirements for installation?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Minimal requirements: Power outlet, 10 Mbps internet. Our plug-and-play EdgeBox™ installs in 2-4 hours.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-red-600" />
                  </div>
                  <Badge className="bg-green-500 text-white text-xs">Popular</Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 leading-tight">
                  What ROI can I expect from people counting?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Typical ROI ranges from 300-500% in year one with 6-12 month payback through energy savings and optimization.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-4 w-4 text-cyan-600" />
                  </div>
                  <Badge className="bg-green-500 text-white text-xs">Popular</Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 leading-tight">
                  What's included in the free POC?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  15-day free POC includes complete installation, live data, dashboard access, and expert support at no cost.
                </p>
              </Card>
            </div>

            {/* View All FAQs CTA */}
            <div className="text-center mt-8 lg:mt-12">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-900">Need More Answers?</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Browse our comprehensive FAQ database with 25+ detailed answers across 6 categories including technical, pricing, implementation, and ROI questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    onClick={() => onPageChange('faq')}
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                  >
                    <HelpCircle className="mr-2 h-4 w-4" />
                    View All FAQs
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => onPageChange('contact')}
                    className="border-primary text-primary hover:bg-primary/5"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Ask An Expert
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>25+ Questions</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span>6 Categories</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4 text-purple-500" />
                    <span>24/7 Support</span>
                  </div>
                </div>
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
        {/* Demo Effects Section - Try APC EdgeBox™ in Your Environment */}
        <DemoEffects onPageChange={onPageChange} />
      </div>

      {/* Sticky CTA Bar - Appears on scroll */}
      <StickyCtaBar 
        onDemoClick={openDemoModal}
        onContactClick={() => onPageChange('contact')}
      />
    </>
  );
}