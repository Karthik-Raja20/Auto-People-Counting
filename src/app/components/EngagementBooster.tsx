import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  TrendingUp, 
  Award, 
  Shield, 
  Star, 
  Users, 
  Building,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Play,
  Clock,
  DollarSign,
  BarChart3,
  Zap,
  Target,
  Download,
  FileText,
  Video,
  Quote,
  Sparkles,
  Timer,
  Flame,
  ChevronRight,
  Globe,
  ThumbsUp,
  TrendingDown,
  Activity,
  Calculator,
  Rocket
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { QuickRoiCalculator } from './QuickRoiCalculator';

interface EngagementBoosterProps {
  onPageChange: (page: string) => void;
}

export function EngagementBooster({ onPageChange }: EngagementBoosterProps) {
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    savings: 0,
    accuracy: 0,
    installations: 0
  });
  
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 32, seconds: 45 });
  const [beforeAfterToggle, setBeforeAfterToggle] = useState(false);

  // Animate stats on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedStats({
        customers: Math.floor(200 * progress),
        savings: Math.floor(2.3 * progress * 10) / 10,
        accuracy: Math.floor(99 * progress),
        installations: Math.floor(500 * progress)
      });
      
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % videoTestimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  // Toggle before/after every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setBeforeAfterToggle(prev => !prev);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  const trustBadges = [
    { icon: <Shield className="h-6 w-6 text-blue-600" />, label: 'GDPR Compliant', color: 'bg-blue-50' },
    { icon: <Award className="h-6 w-6 text-green-600" />, label: 'ISO Certified', color: 'bg-green-50' },
    { icon: <Star className="h-6 w-6 text-yellow-600" />, label: '4.9/5 Rating', color: 'bg-yellow-50' },
    { icon: <Shield className="h-6 w-6 text-purple-600" />, label: 'Privacy First', color: 'bg-purple-50' }
  ];

  const clientLogos = [
    { name: 'TechCorp', industry: 'Technology', employees: '5000+' },
    { name: 'RetailMax', industry: 'Retail', employees: '2000+' },
    { name: 'SmartBuildings Co', industry: 'Real Estate', employees: '1000+' },
    { name: 'MetroTransit', industry: 'Transportation', employees: '3000+' },
    { name: 'HealthFirst', industry: 'Healthcare', employees: '1500+' },
    { name: 'EventsPro', industry: 'Events', employees: '500+' }
  ];

  const videoTestimonials = [
    {
      name: 'Sarah Chen',
      title: 'Operations Director',
      company: 'RetailMall Supermarket',
      quote: 'APC Core transformed our retail operations. Queue times dropped 42% and conversions increased 20%.',
      metric: '+23% Conversion',
      roi: '280% ROI',
      videoThumb: 'https://images.unsplash.com/photo-1728044849291-69f90d443aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjIxNjY2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stars: 5
    },
    {
      name: 'Michael Rodriguez',
      title: 'Facility Manager',
      company: 'Tech Campus Inc',
      quote: 'The 15-day POC convinced us immediately. Setup was seamless and results were instant.',
      metric: '-31% Energy Costs',
      roi: '340% ROI',
      videoThumb: 'https://images.unsplash.com/photo-1599580546799-0a769ea465cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGJ1aWxkaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIxNjY2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stars: 5
    },
    {
      name: 'Emma Thompson',
      title: 'Event Director',
      company: 'Summer Music Festival',
      quote: 'EventSense saved our festival. Real-time crowd monitoring prevented overcrowding incidents.',
      metric: '100% Safety Compliance',
      roi: '220% ROI',
      videoThumb: 'https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGRlYWx8ZW58MXx8fHwxNzYyMDY4MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stars: 5
    }
  ];

  const beforeAfterScenarios = {
    before: {
      title: 'Before APC Solutions',
      stats: [
        { label: 'Queue Wait Time', value: '18 min', icon: <Clock className="h-5 w-5 text-red-600" />, trend: 'negative' },
        { label: 'Energy Waste', value: '42%', icon: <TrendingUp className="h-5 w-5 text-red-600" />, trend: 'negative' },
        { label: 'Customer Satisfaction', value: '64%', icon: <ThumbsUp className="h-5 w-5 text-red-600" />, trend: 'negative' },
        { label: 'Revenue per sqft', value: '$120', icon: <DollarSign className="h-5 w-5 text-red-600" />, trend: 'negative' }
      ]
    },
    after: {
      title: 'After APC Solutions',
      stats: [
        { label: 'Queue Wait Time', value: '6 min', icon: <Clock className="h-5 w-5 text-green-600" />, trend: 'positive' },
        { label: 'Energy Savings', value: '31%', icon: <TrendingDown className="h-5 w-5 text-green-600" />, trend: 'positive' },
        { label: 'Customer Satisfaction', value: '91%', icon: <ThumbsUp className="h-5 w-5 text-green-600" />, trend: 'positive' },
        { label: 'Revenue per sqft', value: '$156', icon: <DollarSign className="h-5 w-5 text-green-600" />, trend: 'positive' }
      ]
    }
  };

  const leadMagnets = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: 'ROI Calculator Spreadsheet',
      description: 'Calculate your exact savings potential',
      downloads: '2,340',
      color: 'bg-blue-50'
    },
    {
      icon: <Video className="h-6 w-6 text-green-600" />,
      title: 'Case Study Video Library',
      description: '12 success stories across industries',
      downloads: '1,890',
      color: 'bg-green-50'
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      title: 'Implementation Guide PDF',
      description: 'Step-by-step deployment playbook',
      downloads: '3,120',
      color: 'bg-purple-50'
    }
  ];

  return (
    <div className="bg-white">
      {/* Animated Live Stats Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-responsive">
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full border border-blue-200">
              <Activity className="h-4 w-4 text-blue-600 animate-pulse" />
              <span className="text-blue-600 font-semibold text-sm">Live Performance Metrics</span>
            </div>
            <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
              Trusted by Leading Organizations Worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of businesses already transforming their operations with APC Solutions
            </p>
          </div>

          {/* Animated Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto mb-12">
            <Card className="relative overflow-hidden border-2 border-blue-200 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {animatedStats.customers}+
                </div>
                <div className="text-sm text-gray-600">Happy Customers</div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full -mr-10 -mt-10"></div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-green-200 bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                  ${animatedStats.savings}M
                </div>
                <div className="text-sm text-gray-600">Avg. Savings</div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/20 rounded-full -mr-10 -mt-10"></div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-purple-200 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-6 text-center">
                <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">
                  {animatedStats.accuracy}%
                </div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/20 rounded-full -mr-10 -mt-10"></div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                  {animatedStats.installations}+
                </div>
                <div className="text-sm text-gray-600">Installations</div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200/20 rounded-full -mr-10 -mt-10"></div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <div 
                key={index}
                className={`${badge.color} rounded-lg p-4 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex justify-center mb-2">
                  {badge.icon}
                </div>
                <div className="text-sm font-semibold text-gray-900">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Client Logos */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container-responsive">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Trusted by Industry Leaders
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-2xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors mb-1">
                  {client.name.split(' ').map(word => word[0]).join('')}
                </div>
                <div className="text-xs text-gray-500">{client.industry}</div>
                <div className="text-xs text-gray-400 mt-1">{client.employees}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              onClick={() => onPageChange('case-study')}
              className="group border-primary text-primary hover:bg-primary hover:text-white"
            >
              View All Success Stories
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Interactive Comparison */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-responsive">
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full border border-orange-200">
              <Sparkles className="h-4 w-4 text-orange-600 animate-pulse" />
              <span className="text-orange-600 font-semibold text-sm">Real Impact Stories</span>
            </div>
            <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
              See The Transformation In Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real data from RetailMall Supermarket - 45 store chain
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before Card */}
              <Card className={`border-2 ${!beforeAfterToggle ? 'border-red-300 shadow-xl scale-105' : 'border-gray-200'} transition-all duration-500`}>
                <CardHeader className="bg-gradient-to-br from-red-50 to-orange-50">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg text-gray-900">
                      {beforeAfterScenarios.before.title}
                    </CardTitle>
                    <Badge className="bg-red-500 text-white">Before</Badge>
                  </div>
                  <CardDescription>Manual processes & guesswork</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {beforeAfterScenarios.before.stats.map((stat, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          {stat.icon}
                          <span className="text-sm font-medium text-gray-900">{stat.label}</span>
                        </div>
                        <div className="text-xl font-bold text-red-600">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* After Card */}
              <Card className={`border-2 ${beforeAfterToggle ? 'border-green-300 shadow-xl scale-105' : 'border-gray-200'} transition-all duration-500`}>
                <CardHeader className="bg-gradient-to-br from-green-50 to-blue-50">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg text-gray-900">
                      {beforeAfterScenarios.after.title}
                    </CardTitle>
                    <Badge className="bg-green-500 text-white">After</Badge>
                  </div>
                  <CardDescription>AI-powered insights & automation</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {beforeAfterScenarios.after.stats.map((stat, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          {stat.icon}
                          <span className="text-sm font-medium text-gray-900">{stat.label}</span>
                        </div>
                        <div className="text-xl font-bold text-green-600">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Summary */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">67% ↓</div>
                  <div className="text-sm text-gray-600">Queue Time Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">30% ↑</div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">42% ↓</div>
                  <div className="text-sm text-gray-600">Customer Complaints</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-responsive">
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full border border-purple-200">
              <Quote className="h-4 w-4 text-purple-600" />
              <span className="text-purple-600 font-semibold text-sm">Customer Success Stories</span>
            </div>
            <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
              Hear From Our Satisfied Customers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from real businesses across industries
            </p>
          </div>

          {/* Active Video Testimonial */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-purple-200 overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                {/* Video/Image Side */}
                <div className="relative aspect-video md:aspect-auto bg-gray-900 group cursor-pointer">
                  <ImageWithFallback
                    src={videoTestimonials[activeTestimonial].videoThumb}
                    alt={`${videoTestimonials[activeTestimonial].name} testimonial`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                    <Video className="h-3 w-3 mr-1" />
                    Video Testimonial
                  </Badge>
                </div>

                {/* Content Side */}
                <CardContent className="p-6 lg:p-8 bg-white">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(videoTestimonials[activeTestimonial].stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{videoTestimonials[activeTestimonial].quote}"
                  </blockquote>
                  
                  <div className="mb-4">
                    <div className="font-semibold text-gray-900">
                      {videoTestimonials[activeTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {videoTestimonials[activeTestimonial].title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {videoTestimonials[activeTestimonial].company}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-700 border border-blue-200">
                      {videoTestimonials[activeTestimonial].metric}
                    </Badge>
                    <Badge className="bg-green-100 text-green-700 border border-green-200">
                      {videoTestimonials[activeTestimonial].roi}
                    </Badge>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Testimonial Selector Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'w-8 bg-purple-600' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Offer with Countdown */}
      <section className="py-12 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <Flame className="h-4 w-4 animate-pulse" />
              <span className="font-semibold text-sm">Limited Time Offer</span>
              <Timer className="h-4 w-4 animate-pulse" />
            </div>
            
            <h2 className="text-xl lg:text-2xl font-bold mb-4">
              Get Your FREE 1-Day Demo-POC + $500 Consultation Credit
            </h2>
            
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              Book within the next 3 days and receive a complimentary on-site consultation worth $500
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-6">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Mins' },
                { value: timeLeft.seconds, label: 'Secs' }
              ].map((item, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[70px] border border-white/30">
                  <div className="text-3xl font-bold">{String(item.value).padStart(2, '0')}</div>
                  <div className="text-xs uppercase opacity-80">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onPageChange('demo')}
                className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg font-bold px-8 py-6"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Claim FREE Demo Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => onPageChange('contact')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg font-bold px-8 py-6"
              >
                Speak to Expert
              </Button>
            </div>

            <p className="text-sm mt-4 opacity-80">
              ✓ No credit card required  ✓ No obligation  ✓ Full refund if not satisfied
            </p>
          </div>
        </div>
      </section>

      {/* Lead Magnets Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200">
              <Download className="h-4 w-4 text-green-600" />
              <span className="text-green-600 font-semibold text-sm">Free Resources</span>
            </div>
            <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
              Download Free Resources To Get Started
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive guides and tools to evaluate APC Solutions for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leadMagnets.map((magnet, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`${magnet.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {magnet.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {magnet.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {magnet.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {magnet.downloads} downloads
                    </span>
                    <Button 
                      size="sm"
                      onClick={() => onPageChange('contact')}
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                    >
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              No email required for instant access • All resources are free forever
            </p>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span className="font-semibold text-sm">Ready to Transform Your Business?</span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Start Your Free Demo-POC Today
            </h2>
            
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join 200+ businesses that have already transformed their operations with APC Solutions. 
              See real results in 15 minutes or less.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <CheckCircle className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-2">Free Installation</div>
                <div className="text-sm opacity-80">Professional setup included</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <CheckCircle className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-2">60% Adjustable</div>
                <div className="text-sm opacity-80">Demo cost toward purchase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <CheckCircle className="h-8 w-8 mx-auto mb-3" />
                <div className="font-semibold mb-2">No Obligation</div>
                <div className="text-sm opacity-80">Try risk-free for 15 days</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onPageChange('demo')}
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-lg font-bold px-10 py-7 text-base"
              >
                <Rocket className="mr-3 h-6 w-6" />
                Request Free Demo-POC
                <ChevronRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                onClick={() => onPageChange('contact')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-lg font-bold px-10 py-7 text-base"
              >
                Talk to Sales Team
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>2-5 day installation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>24/7 expert support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>99% accuracy guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
