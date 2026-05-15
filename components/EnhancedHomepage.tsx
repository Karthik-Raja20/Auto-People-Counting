import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VideoLibrary } from './VideoLibrary';
import { 
  CheckCircle, 
  Play, 
  Users, 
  BarChart3, 
  Shield, 
  Zap,
  TrendingUp,
  Clock,
  MapPin,
  ArrowRight,
  Star,
  Eye,
  Wifi,
  Cpu,
  Building,
  ShoppingCart,
  Plane,
  Music,
  Calendar,
  Phone,
  Mail,
  Download,
  PlayCircle,
  Sparkles,
  Timer,
  DollarSign,
  Target,
  Rocket,
  Award,
  Globe,
  ChevronRight,
  Flame,
  Bolt,
  Layers,
  Activity,
  Warehouse,
  Train,
  Landmark,
  Hospital,
  Bus,
  University,
  ChevronLeft
} from 'lucide-react';

interface EnhancedHomepageProps {
  onPageChange: (page: string) => void;
}

export function EnhancedHomepage({ onPageChange }: EnhancedHomepageProps) {
  const [activeIndustry, setActiveIndustry] = useState('retail');
  const [currentApplicationSlide, setCurrentApplicationSlide] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({ installations: 0, accuracy: 0, setupTime: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const keyStats = [
    { value: '500+', label: 'Installations Worldwide', icon: <MapPin className="h-5 w-5" />, target: 500 },
    { value: 'Up to 99%', label: 'Accuracy Range', icon: <Eye className="h-5 w-5" />, target: 99 },
    { value: '15min', label: 'Average Setup Time', icon: <Clock className="h-5 w-5" />, target: 15 },
    { value: '24/7', label: 'Support Available', icon: <Shield className="h-5 w-5" />, target: 24 }
  ];

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
    "🔥 Limited Time: 15-Day POC + Free Installation (Save $5,000)",
    "⚡ Fast Track: 48-Hour Installation Available", 
    "🎯 New: 30-Day Extended POC - 50% Off + Free Setup",
    "🚀 Exclusive: AI-Powered Insights Dashboard Included"
  ];

  const [currentUrgency, setCurrentUrgency] = useState(0);

  useEffect(() => {
    const urgencyTimer = setInterval(() => {
      setCurrentUrgency(prev => (prev + 1) % urgencyMessages.length);
    }, 3000);
    return () => clearInterval(urgencyTimer);
  }, []);

  const industries = [
    {
      id: 'retail',
      name: 'Retail & Malls',
      icon: <ShoppingCart className="h-5 w-5" />,
      description: 'Optimize customer flow, reduce queues, and increase conversions',
      benefits: ['Queue optimization', 'Conversion tracking', 'Staff allocation', 'Heat mapping'],
      solution: 'RetailMall Supermarket',
      results: ['+20% conversion', '-42% queues', '-25% staff OT'],
      image: 'retail shopping mall people'
    },
    {
      id: 'warehouses',
      name: 'Warehouses',
      icon: <Warehouse className="h-5 w-5" />,
      description: 'Monitor worker density, optimize logistics, and ensure safety compliance',
      benefits: ['Worker tracking', 'Safety zones', 'Logistics optimization', 'Capacity management'],
      solution: 'Global Logistics Hub',
      results: ['+30% efficiency', '-50% incidents', '+15% throughput'],
      image: 'warehouse logistics workers'
    },
    {
      id: 'metro',
      name: 'Metro-Railway Stations',
      icon: <Train className="h-5 w-5" />,
      description: 'Manage passenger flow and platform safety in transit systems',
      benefits: ['Platform monitoring', 'Crowd control', 'Peak time analysis', 'Emergency response'],
      solution: 'City Metro System',
      results: ['-40% congestion', '+25% throughput', '99% uptime'],
      image: 'metro railway station platform'
    },
    {
      id: 'banks',
      name: 'Banks & Institutions',
      icon: <Landmark className="h-5 w-5" />,
      description: 'Enhance security monitoring and improve customer service efficiency',
      benefits: ['Security monitoring', 'Queue management', 'Branch optimization', 'Wait time reduction'],
      solution: 'National Bank',
      results: ['-60% wait time', '+40% satisfaction', '100% security'],
      image: 'bank branch customers security'
    },
    {
      id: 'hospitals',
      name: 'Hospitals',
      icon: <Hospital className="h-5 w-5" />,
      description: 'Monitor patient flow, ensure safety protocols, and optimize staff allocation',
      benefits: ['Patient tracking', 'Safety protocols', 'Staff optimization', 'Emergency response'],
      solution: 'General Hospital',
      results: ['-35% wait time', '+50% efficiency', '99% compliance'],
      image: 'hospital patients medical staff'
    },
    {
      id: 'airports',
      name: 'Airports',
      icon: <Plane className="h-5 w-5" />,
      description: 'Manage passenger flow and enhance security compliance at scale',
      benefits: ['Passenger flow', 'Security lines', 'Capacity management', 'Predictive analytics'],
      solution: 'International Airport',
      results: ['-30% wait time', '+40% efficiency', '99% accuracy'],
      image: 'airport transport hub security'
    },
    {
      id: 'buses',
      name: 'Buses & Airport Shuttles',
      icon: <Bus className="h-5 w-5" />,
      description: 'Monitor passenger capacity and ensure safe transportation compliance',
      benefits: ['Capacity monitoring', 'Safety compliance', 'Route optimization', 'Real-time tracking'],
      solution: 'City Transit Authority',
      results: ['+25% capacity', '100% compliance', '-20% delays'],
      image: 'bus shuttle passengers transport'
    },
    {
      id: 'museums',
      name: 'Museums',
      icon: <University className="h-5 w-5" />,
      description: 'Enhance visitor experience while preserving artifacts and ensuring safety',
      benefits: ['Visitor flow', 'Exhibit optimization', 'Crowd control', 'Security monitoring'],
      solution: 'National Museum',
      results: ['+40% satisfaction', '-30% crowding', '100% security'],
      image: 'museum visitors exhibits art'
    },
    {
      id: 'government',
      name: 'Government Institutions',
      icon: <Landmark className="h-5 w-5" />,
      description: 'Improve citizen services and maintain high security standards',
      benefits: ['Citizen flow', 'Security protocols', 'Service optimization', 'Wait time reduction'],
      solution: 'City Hall',
      results: ['-50% wait time', '+60% efficiency', '100% security'],
      image: 'government building citizens services'
    },
    {
      id: 'events',
      name: 'Events & Venues',
      icon: <Music className="h-5 w-5" />,
      description: 'Ensure crowd safety and compliance for large gatherings',
      benefits: ['Crowd density', 'Safety monitoring', 'Real-time alerts', 'Compliance reports'],
      solution: 'Music Festival',
      results: ['100% safety', '50k attendees', 'Zero incidents'],
      image: 'concert festival crowd event'
    },
    {
      id: 'office',
      name: 'Smart Buildings',
      icon: <Building className="h-5 w-5" />,
      description: 'Optimize space utilization and energy efficiency',
      benefits: ['Space optimization', 'HVAC control', 'Meeting rooms', 'Energy savings'],
      solution: 'Corporate Campus',
      results: ['-35% energy', '+60% space util', '$2M savings'],
      image: 'modern office building smart'
    }
  ];

  // Application slider auto-advance
  useEffect(() => {
    const applicationTimer = setInterval(() => {
      setCurrentApplicationSlide(prev => (prev + 1) % industries.length);
    }, 4000);
    return () => clearInterval(applicationTimer);
  }, [industries.length]);

  const solutions = [
    {
      id: 'core',
      name: 'APC Core',
      subtitle: 'Complete End-to-End Package',
      price: 'From $1,299/month',
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
      price: 'From $799/month',
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
      price: 'From $599/month',
      description: 'Upgrade existing cameras with AI analytics',
      features: ['Maximum ROI', 'Retrofit solution', 'Leverage current assets'],
      badge: 'Use Existing',
      badgeColor: 'bg-blue-500',
      icon: <Wifi className="h-6 w-6" />,
      cta: 'Check Compatibility'
    },
    {
      id: 'eventSense',
      name: 'APC EventSense',
      subtitle: 'On-Demand Rental',
      price: 'From $199/day',
      description: 'Portable solution for temporary events',
      features: ['Pay per duration', 'Rapid deployment', 'Crowd safety monitoring'],
      badge: 'Event Rental',
      badgeColor: 'bg-purple-500',
      icon: <Music className="h-6 w-6" />,
      cta: 'Get Rental Quote'
    }
  ];

  const testimonials = [
    {
      quote: "APC Core transformed our retail operations. Queue times dropped 42% and conversions increased 20%.",
      author: "Sarah Chen",
      title: "Operations Director",
      company: "RetailMall Supermarket",
      rating: 5
    },
    {
      quote: "The 15-day POC convinced us immediately. Setup was seamless and results were instant.",
      author: "Michael Rodriguez",
      title: "Facility Manager",
      company: "Tech Campus Inc",
      rating: 5
    },
    {
      quote: "EventSense saved our festival. Real-time crowd monitoring prevented overcrowding incidents.",
      author: "Emma Thompson",
      title: "Event Director",
      company: "Summer Music Festival",
      rating: 5
    }
  ];

  return (
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
              onClick={() => onPageChange('case-studies')}
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

      {/* Hero Section with Video */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary to-accent/5 overflow-hidden flex items-center" style={{ minHeight: 'calc(100vh - var(--nav-height) - 60px)' }}>
        {/* Animated background elements - Hidden on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hidden lg:block absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
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
              
              {/* Main Headline - Crystal Clear */}
              <h1 className="text-gray-900 text-center lg:text-left">
                <span className="block text-base sm:text-lg font-semibold text-primary mb-1 lg:mb-2 tracking-wide">
                  STOP Losing Money on Guesswork
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-1 lg:mb-2">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    AI People Counting
                  </span>
                </span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                  That Actually Works
                </span>
              </h1>
              
              {/* Clear Value Proposition */}
              <div>
                <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
                  The only people counting solution that delivers <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">up to 99% accuracy</span> 
                  with <span className="text-accent font-bold bg-accent/10 px-2 py-1 rounded">15-minute setup</span>. 
                  Start seeing results and <span className="text-green-600 font-bold bg-green-100 px-2 py-1 rounded">saving money from day one</span>.
                </p>
              </div>

              {/* Key Value Metrics */}
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">Up to 99%</div>
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
                  onClick={() => onPageChange('demo')}
                  className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-responsive text-base lg:text-lg font-semibold w-full sm:w-auto touch-target"
                >
                  <Rocket className="mr-2 lg:mr-3 h-5 lg:h-6 w-5 lg:w-6 group-hover:animate-bounce" />
                  Start FREE POC Today
                  <ChevronRight className="ml-2 lg:ml-3 h-4 lg:h-5 w-4 lg:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <Button 
                    onClick={() => setShowVideo(true)}
                    className="group bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 btn-responsive touch-target"
                  >
                    <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => onPageChange('contact')}
                    className="group border-2 border-gray-300 text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 btn-responsive touch-target"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Expert Call
                  </Button>
                </div>
              </div>

              {/* Trust Indicators - Simple */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6">
                <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg border border-green-200">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg border border-blue-200">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-yellow-50 rounded-lg border border-yellow-200">
                  <Star className="h-4 w-4 text-yellow-600 fill-yellow-600" />
                  <span className="text-sm font-medium text-yellow-700">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-purple-50 rounded-lg border border-purple-200">
                  <Globe className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">500+ Installs</span>
                </div>
              </div>

              {/* Live Social Proof - Separate */}
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">Live Customer Update:</span>
                </div>
                <div className="text-base text-gray-800 transition-all duration-500">
                  <strong>"{testimonials[currentTestimonial].quote.substring(0, 60)}..."</strong>
                  <div className="text-sm text-gray-600 mt-2">
                    — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>

              {/* Urgency & Social Proof */}
              <div className="flex flex-col gap-3 lg:gap-4 text-sm">
                <div className="flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-200">
                  <Activity className="h-4 w-4 text-red-500 animate-pulse flex-shrink-0" />
                  <span className="text-red-700 font-medium text-center lg:text-left">
                    <strong>23 companies</strong> started POC this week
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-700 font-medium text-center lg:text-left">
                    Average <strong>350% ROI</strong> in Year 1
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Video/Demo */}
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
                      alt="APC EdgeBox Technology Demo"
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
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Up to 99%</div>
                </div>
                <div className="text-xs text-gray-600 font-medium">Accuracy Rate</div>
                <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-1 rounded-full w-[99%] animate-pulse"></div>
                </div>
              </div>
              
              <div className="hidden lg:block absolute -bottom-6 -left-6 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-xl p-4 border border-gray-200 animate-pulse">
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="h-4 w-4 text-accent" />
                  <div className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">500+</div>
                </div>
                <div className="text-xs text-gray-600 font-medium">Global Installs</div>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                  ))}
                </div>
              </div>

              {/* ROI indicator - Desktop only */}
              <div className="hidden lg:block absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg shadow-lg p-3 rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-xs font-semibold">Average ROI</div>
                <div className="text-xl font-bold">350%</div>
                <div className="text-xs opacity-90">in Year 1</div>
              </div>

              {/* Real-time activity indicator */}
              <div className="absolute top-2 lg:top-4 left-2 lg:left-4 bg-red-500 text-white rounded-full px-2 lg:px-3 py-1 text-xs font-medium animate-pulse">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <span className="hidden sm:inline">LIVE: 23 POCs Active</span>
                  <span className="sm:hidden">LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators & Social Proof Section */}
      <section className="py-6 lg:py-8 bg-white border-b border-gray-100">
        <div className="container-responsive">
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 mb-6">
            <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg border border-green-200">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg border border-blue-200">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-yellow-50 rounded-lg border border-yellow-200">
              <Star className="h-4 w-4 text-yellow-600 fill-yellow-600" />
              <span className="text-sm font-medium text-yellow-700">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-purple-50 rounded-lg border border-purple-200">
              <Globe className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">500+ Installs</span>
            </div>
          </div>

          {/* Social Proof Grid */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {/* Live Customer Update */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Live Customer Update:</span>
              </div>
              <div className="text-base text-gray-800 transition-all duration-500">
                <strong>"{testimonials[currentTestimonial].quote.substring(0, 60)}..."</strong>
                <div className="text-sm text-gray-600 mt-2">
                  — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            {/* Urgency Messaging */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="h-4 w-4 text-red-500 animate-pulse" />
                <span className="text-sm font-medium text-red-600">Market Activity:</span>
              </div>
              <div className="text-base text-red-800">
                <strong>23 companies</strong> started POC this week
                <div className="text-sm text-red-600 mt-2">
                  Average <strong>350% ROI</strong> in Year 1
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Slider Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/30 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
        
        <div className="container-responsive relative">
          {/* Section Header */}
          <div className="text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
              <Globe className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm lg:text-base font-semibold text-primary">Trusted Across Industries</span>
              <Sparkles className="h-4 w-4 text-accent animate-bounce" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Universal Applications
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From retail to healthcare, transportation to government - APC EdgeBox™ delivers proven results 
              across every industry that counts on accurate people analytics.
            </p>
          </div>

          {/* Auto-Advancing Application Slider */}
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Application Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white">
                      {industries[currentApplicationSlide].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {industries[currentApplicationSlide].name}
                      </h3>
                      <div className="text-sm text-primary font-medium">
                        Industry Application
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {industries[currentApplicationSlide].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industries[currentApplicationSlide].benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-6">
                    <div className="text-sm font-medium text-gray-600 mb-2">
                      Case Study: {industries[currentApplicationSlide].caseStudy}
                    </div>
                    <div className="flex gap-4">
                      {industries[currentApplicationSlide].results.map((result, index) => (
                        <div key={index} className="text-sm font-bold text-green-700">
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => onPageChange('applications')}
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                    >
                      <ArrowRight className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => onPageChange('demo')}
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      Start POC
                    </Button>
                  </div>
                </div>
                
                {/* Right: Application Image */}
                <div className="relative h-64 md:h-full min-h-[400px]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1583737077549-d078beef3046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjB3b3JrZXJzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgzNjQ2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={industries[currentApplicationSlide].image}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Live indicator */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white rounded-full px-3 py-1 text-xs font-medium animate-pulse">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      Live Data
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slider Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentApplicationSlide(prev => prev === 0 ? industries.length - 1 : prev - 1)}
                    className="w-8 h-8 p-0"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  <div className="flex gap-1">
                    {industries.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentApplicationSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentApplicationSlide 
                            ? 'bg-primary w-4' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentApplicationSlide(prev => (prev + 1) % industries.length)}
                    className="w-8 h-8 p-0"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Industry Icons Grid */}
            <div className="mt-8 bg-white/50 backdrop-blur rounded-xl p-6 border border-gray-200">
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4">
                {industries.map((industry, index) => (
                  <button
                    key={industry.id}
                    onClick={() => setCurrentApplicationSlide(index)}
                    className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 ${
                      index === currentApplicationSlide
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105'
                        : 'bg-white text-gray-600 hover:bg-gray-50 hover:scale-105 shadow-sm'
                    }`}
                  >
                    <div className="mb-2">
                      {industry.icon}
                    </div>
                    <div className="text-xs font-medium text-center leading-tight">
                      {industry.name.split(' ')[0]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... rest of the component continues from here */}
    </div>
  );
}