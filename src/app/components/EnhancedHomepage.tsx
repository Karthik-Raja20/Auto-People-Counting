import { useState, useEffect } from 'react';
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
  Activity
} from 'lucide-react';

interface EnhancedHomepageProps {
  onPageChange: (page: string) => void;
}

export function EnhancedHomepage({ onPageChange }: EnhancedHomepageProps) {
  const [activeIndustry, setActiveIndustry] = useState('retail');
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

  const industries = [
    {
      id: 'retail',
      name: 'Retail & Malls',
      icon: <ShoppingCart className="h-5 w-5" />,
      description: 'Optimize customer flow, reduce queues, and increase conversions',
      benefits: ['Queue optimization', 'Conversion tracking', 'Staff allocation', 'Heat mapping'],
      caseStudy: 'RetailMall Supermarket',
      results: ['+20% conversion', '-42% queues', '-25% staff OT'],
      image: 'retail shopping mall people'
    },
    {
      id: 'transport',
      name: 'Transport Hubs',
      icon: <Plane className="h-5 w-5" />,
      description: 'Manage passenger flow and enhance security compliance',
      benefits: ['Passenger flow', 'Security lines', 'Capacity management', 'Predictive analytics'],
      caseStudy: 'International Airport',
      results: ['-30% wait time', '+40% efficiency', '99% accuracy'],
      image: 'airport transport hub security'
    },
    {
      id: 'events',
      name: 'Events & Venues',
      icon: <Music className="h-5 w-5" />,
      description: 'Ensure crowd safety and compliance for large gatherings',
      benefits: ['Crowd density', 'Safety monitoring', 'Real-time alerts', 'Compliance reports'],
      caseStudy: 'Music Festival',
      results: ['100% safety', '50k attendees', 'Zero incidents'],
      image: 'concert festival crowd event'
    },
    {
      id: 'office',
      name: 'Smart Buildings',
      icon: <Building className="h-5 w-5" />,
      description: 'Optimize space utilization and energy efficiency',
      benefits: ['Space optimization', 'HVAC control', 'Meeting rooms', 'Energy savings'],
      caseStudy: 'Corporate Campus',
      results: ['-35% energy', '+60% space util', '$2M savings'],
      image: 'modern office building smart'
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
            {/* Left: Content */}
            <div className={`text-center lg:text-left transform transition-all duration-1000 space-y-6 lg:space-y-8 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Impact Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20 shadow-lg">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-base font-semibold text-primary">$2.3M Average Annual Savings</span>
                <Bolt className="h-5 w-5 text-accent animate-bounce" />
              </div>
              
              {/* Main Headline - Crystal Clear */}
              <h1 className="text-gray-900 text-center lg:text-left">
                <span className="block text-lg sm:text-xl font-semibold text-primary mb-2 lg:mb-3 tracking-wide">
                  STOP Losing Money on Guesswork
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2 lg:mb-4">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    AI People Counting
                  </span>
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
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
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-200 shadow-lg">
                <div className="grid grid-cols-3 gap-3 lg:gap-6 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1">Up to 99%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent mb-1">15 min</div>
                    <div className="text-xs sm:text-sm text-gray-600">Setup Time</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1">$2.3M</div>
                    <div className="text-xs sm:text-sm text-gray-600">Avg. Savings</div>
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

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-200 shadow-inner">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Shield className="h-5 w-5 lg:h-6 lg:w-6 text-green-500 mb-1" />
                    <span className="text-xs font-medium text-gray-700">GDPR Compliant</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="h-5 w-5 lg:h-6 lg:w-6 text-blue-500 mb-1" />
                    <span className="text-xs font-medium text-gray-700">No Hidden Fees</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Star className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-500 fill-yellow-500 mb-1" />
                    <span className="text-xs font-medium text-gray-700">4.9/5 Rating</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Globe className="h-5 w-5 lg:h-6 lg:w-6 text-purple-500 mb-1" />
                    <span className="text-xs font-medium text-gray-700">500+ Installs</span>
                  </div>
                </div>
                
                {/* Live Social Proof */}
                <div className="mt-4 p-3 bg-white rounded-lg border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500">Live Customer Update:</span>
                  </div>
                  <div className="text-sm text-gray-700 transition-all duration-500">
                    <strong>"{testimonials[currentTestimonial].quote.substring(0, 50)}..."</strong>
                    <div className="text-xs text-gray-500 mt-1">
                      — {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].company}
                    </div>
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

      {/* POC Options Section - Second Fold */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
        
        <div className="container-responsive relative">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 lg:mb-6 px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
              <Star className="h-4 lg:h-5 w-4 lg:w-5 text-primary animate-pulse" />
              <span className="text-base lg:text-lg font-semibold text-primary">Choose Your Perfect Start</span>
              <Zap className="h-4 lg:h-5 w-4 lg:w-5 text-accent animate-bounce" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Risk-Free POC Options
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
              Experience APC EdgeBox™ in your environment with zero risk. Choose between our completely free 15-day POC 
              or upgrade to our extended 30-day evaluation with advanced features.
            </p>
          </div>

          {/* POC Options Cards */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* 15-Day Free POC */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl lg:rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white border-2 border-primary rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute -top-3 lg:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 lg:px-6 py-1 lg:py-2 rounded-full font-bold text-xs lg:text-sm">
                    🔥 MOST POPULAR
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">15-Day Live POC</h3>
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">FREE</div>
                  <div className="text-base lg:text-lg text-gray-600 line-through mb-1">Installation: $5,000</div>
                  <div className="text-base lg:text-lg text-green-600 font-semibold">✓ Installation Included FREE</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Complete APC EdgeBox™ system setup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Live data & real-time analytics dashboard</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Professional installation & training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">24/7 expert support included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">No commitment or contracts required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Full removal if not satisfied</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-bold btn-responsive text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 touch-target"
                  onClick={() => onPageChange('demo')}
                >
                  <Rocket className="mr-2 h-4 lg:h-5 w-4 lg:w-5" />
                  Start 15-Day FREE POC
                  <ArrowRight className="ml-2 h-4 lg:h-5 w-4 lg:w-5" />
                </Button>

                <div className="mt-4 text-center text-xs lg:text-sm text-gray-500">
                  Setup in 15 minutes • No hidden fees • Cancel anytime
                </div>
              </div>
            </div>

            {/* 30-Day Extended POC */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white border-2 border-accent rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white px-6 py-2 rounded-full font-bold text-sm">
                    ⚡ 50% OFF LIMITED TIME
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">30-Day Extended POC</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-5xl font-bold text-accent">$1,000</div>
                    <div className="text-2xl text-gray-400 line-through">$2,000</div>
                  </div>
                  <div className="text-lg text-gray-600 line-through mb-1">Plus Installation: $5,000</div>
                  <div className="text-lg text-green-600 font-semibold">✓ Installation FREE (Total Save: $6,000)</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">Everything in 15-day POC plus:</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Extended 30-day evaluation period</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Advanced analytics & custom reports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">API integrations with existing systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Dedicated project manager</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Comprehensive ROI analysis & recommendations</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-accent to-emerald-500 hover:from-accent/90 hover:to-emerald-500/90 text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  onClick={() => onPageChange('demo')}
                >
                  <Star className="mr-2 h-5 w-5" />
                  Get Extended POC (50% Off)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="mt-4 text-center text-sm text-gray-500">
                  Advanced features • Priority support • Detailed analysis
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Footer */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">100% Money-Back Guarantee</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">48-Hour Fast Track Available</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium text-gray-700">No Long-Term Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Value Proof Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Social Proof Bar */}
          <div className="text-center mb-12">
            <div className="text-sm text-gray-500 mb-4">Trusted by industry leaders who've transformed their operations</div>
            <div className="flex items-center justify-center gap-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <div className="text-lg font-bold text-gray-400">MegaMall</div>
              <div className="text-lg font-bold text-gray-400">TechCorp</div>
              <div className="text-lg font-bold text-gray-400">International Airport</div>
              <div className="text-lg font-bold text-gray-400">Regional Medical</div>
              <div className="text-lg font-bold text-gray-400">State University</div>
            </div>
          </div>

          {/* Quick Wins Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant ROI</h3>
              <p className="text-gray-600 mb-3">See cost savings from day one with optimized operations and reduced waste</p>
              <div className="text-sm text-green-600 font-medium">Average: $15,000/month saved</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">15-Minute Setup</h3>
              <p className="text-gray-600 mb-3">No construction, no downtime. Our experts handle everything remotely</p>
              <div className="text-sm text-blue-600 font-medium">Same-day deployment available</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero Risk</h3>
              <p className="text-gray-600 mb-3">15-day free POC with no commitments, contracts, or hidden fees</p>
              <div className="text-sm text-purple-600 font-medium">Money-back guarantee</div>
            </div>
          </div>

          {/* Success Stories CTA Strip */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-emerald-600/20"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl mb-8 text-blue-100">Join 500+ companies already saving millions with APC solutions</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">$2.3M</div>
                  <div className="text-blue-100">Average Annual Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">42%</div>
                  <div className="text-blue-100">Queue Time Reduction</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">350%</div>
                  <div className="text-blue-100">Average ROI Year 1</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  onClick={() => onPageChange('case-studies')}
                  className="bg-white text-primary hover:bg-gray-100 shadow-lg font-semibold px-8 py-4 group"
                >
                  <Star className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  View Success Stories
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg"
                  onClick={() => onPageChange('contact')}
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg font-semibold px-8 py-4"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Speak with Expert
                </Button>
              </div>

              <div className="mt-6 text-sm text-blue-200">
                ⚡ <strong>Fast deployment:</strong> Most installations complete in 15 minutes • <strong>🛡️ Risk-free:</strong> 100% money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APC Solutions Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Four Comprehensive Solutions</Badge>
            <h2 className="mb-4 text-gray-900">Choose Your Perfect APC Solution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every solution powered by APC EdgeBox™ — select based on your hardware preferences, 
              budget, and deployment requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Card key={solution.id} className="relative group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                {solution.badge && (
                  <div className="absolute -top-3 left-6 z-10">
                    <Badge className={`${solution.badgeColor} text-white`}>
                      {solution.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-lg">{solution.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto text-xs">
                    {solution.subtitle}
                  </Badge>
                  <div className="text-xl font-bold text-primary mt-2">{solution.price}</div>
                  <CardDescription className="text-sm">{solution.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full group"
                    variant={solution.id === 'core' ? 'default' : 'outline'}
                    onClick={() => solution.id === 'eventSense' ? onPageChange('demo') : onPageChange('products')}
                  >
                    {solution.cta}
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Comparison */}
          <div className="mt-12 text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onPageChange('products')}
              className="group"
            >
              Compare All Solutions
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Industry Applications</Badge>
            <h2 className="mb-4 text-gray-900">Proven Results Across Industries</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how APC solutions deliver measurable improvements across different sectors
            </p>
          </div>

          <Tabs value={activeIndustry} onValueChange={setActiveIndustry} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white">
              {industries.map((industry) => (
                <TabsTrigger 
                  key={industry.id} 
                  value={industry.id} 
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {industry.icon}
                  <span className="hidden sm:inline">{industry.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{industry.name}</h3>
                    <p className="text-lg text-gray-600 mb-6">{industry.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {industry.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          {industry.caseStudy} Success Story
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-6">
                          {industry.results.map((result, index) => (
                            <div key={index} className="text-center">
                              <div className="text-2xl font-bold text-primary">{result}</div>
                              <div className="text-xs text-gray-600">improvement</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwke2luZHVzdHJ5LmltYWdlfXxlbnwxfHx8fDE3NTgzNTY0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral`}
                      alt={`${industry.name} implementation`}
                      className="rounded-lg shadow-xl w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => onPageChange('case-studies')}
              className="group"
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Video Library Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoLibrary 
            title="See APC Solutions in Action"
            description="Watch real customer success stories and product demonstrations"
            featuredOnly={true}
            limit={6}
            showFilters={false}
            onPageChange={onPageChange}
          />
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Customer Success</Badge>
            <h2 className="mb-4 text-gray-900">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See what our customers say about APC solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            🎯 Ready to Transform Your Space?
          </Badge>
          
          <h2 className="mb-6 text-white">
            Start Your Free 15-Day Live POC Today
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience APC EdgeBox™ in your environment. Complete setup, live data, 
            real results — all at no cost for 15 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onPageChange('demo')}
              className="bg-white text-primary hover:bg-gray-100 group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Start Free POC Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary group"
            >
              <Phone className="mr-2 h-5 w-5" />
              Talk to Sales Expert
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              No Setup Fees
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              15-Day Free Trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Expert Support
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}