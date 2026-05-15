import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ShoppingCart, 
  Building, 
  Plane, 
  Music, 
  GraduationCap, 
  Hospital, 
  Factory, 
  Hotel,
  MapPin,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Eye,
  BarChart3,
  Shield,
  Zap,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Star,
  Truck,
  Train,
  Landmark,
  Bus,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Download,
  MessageCircle,
  HelpCircle,
  Award,
  Globe,
  Layers,
  Sparkles,
  Calendar,
  PhoneCall,
  Timer,
  Activity,
  Cpu,
  Wifi,
  Database,
  Lock
} from 'lucide-react';

interface ApplicationsProps {
  onPageChange: (page: string) => void;
}

export function Applications({ onPageChange }: ApplicationsProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('retail');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const industries = [
    {
      id: 'retail',
      name: 'Retail & Shopping Malls',
      icon: <ShoppingCart className="h-6 w-6" />,
      tagline: 'Transform Shopping Experiences & Drive Revenue Growth',
      description: 'Revolutionize retail operations with AI-powered people counting that optimizes customer flow, reduces queues, maximizes conversions, and delivers measurable ROI through intelligent shopping analytics.',
      image: 'modern retail store shopping mall customers people',
      keyMetrics: {
        accuracy: 'Up to 99%',
        avgImprovement: '+42%',
        queueReduction: '-65%',
        roiIncrease: '+350%'
      },
      competitiveAdvantages: [
        'Fastest deployment (15 minutes vs 4+ hours)',
        'Highest accuracy (99% vs 85-92%)',
        'Real-time queue optimization',
        'Integrated POS analytics',
        'Heat mapping capabilities',
        'Customer journey tracking'
      ],
      useCases: [
        {
          title: 'Smart Queue Optimization',
          description: 'AI-powered queue monitoring with predictive analytics that automatically alerts staff when additional checkout lanes are needed',
          benefits: ['65% reduction in wait times', 'Improved customer satisfaction scores', 'Dynamic staff deployment algorithms', 'Abandoned cart prevention'],
          metrics: 'Average queue time: 2.3 minutes (vs 6.8 industry avg)',
          roi: '$45K annual savings per store'
        },
        {
          title: 'Conversion Rate Analytics',
          description: 'Track complete customer journeys from entry to purchase with AI-powered behavior analysis and heat mapping technology',
          benefits: ['42% increase in conversion rates', 'Advanced heat map insights', 'Product placement optimization', 'Customer journey visualization'],
          metrics: 'Conversion rate: 23.4% (vs 16.2% industry avg)',
          roi: '$128K additional revenue per year'
        },
        {
          title: 'Peak Hour Intelligence',
          description: 'Predictive analytics that forecast busy periods with 96% accuracy, enabling proactive staffing and inventory management',
          benefits: ['Optimized staffing schedules', '35% reduction in operational costs', 'Enhanced customer experience', 'Inventory turnover optimization'],
          metrics: 'Staff efficiency: +38% during peak hours',
          roi: '$67K operational cost savings'
        },
        {
          title: 'Loss Prevention & Security',
          description: 'Advanced occupancy monitoring with anomaly detection to support security operations and emergency evacuation planning',
          benefits: ['Enhanced security monitoring', 'Theft prevention analytics', 'Emergency evacuation optimization', 'Real-time alert systems'],
          metrics: 'Security incidents: -45% reduction',
          roi: '$23K loss prevention savings'
        }
      ],
      caseStudy: {
        client: 'MegaMall Retail Chain (450 stores)',
        challenge: 'Long checkout queues causing 23% customer abandonment and $2.8M annual revenue loss',
        solution: 'APC Core deployment with real-time queue monitoring, staff alerts, and predictive analytics across all locations',
        implementation: '3-week rollout with minimal disruption',
        results: [
          '65% queue reduction (from 6.8 to 2.3 minutes average)',
          '42% conversion increase (16.2% to 23.4%)',
          '$2.3M annual revenue increase',
          '$890K operational cost savings',
          '94% customer satisfaction improvement'
        ],
        testimonial: '"APC Solutions transformed our operations. The ROI was evident within 60 days, and customer satisfaction scores have never been higher." - Sarah Chen, Operations Director'
      },
      recommendedSolution: 'APC Core',
      whyThisSolution: 'Complete turnkey solution with premium AI cameras optimized for retail environments, advanced analytics dashboard, and seamless POS integration.',
      industrySpecific: [
        'POS system integration',
        'Customer journey mapping',
        'Heat map analytics',
        'Conversion tracking',
        'Queue optimization',
        'Peak hour prediction'
      ],
      compliance: ['PCI DSS', 'GDPR', 'CCPA', 'SOX'],
      integrations: ['POS Systems', 'CRM', 'ERP', 'HVAC', 'Security Systems']
    },
    {
      id: 'office',
      name: 'Corporate Offices & Smart Buildings',
      icon: <Building className="h-6 w-6" />,
      tagline: 'Optimize Workplace Intelligence & Maximize Real Estate ROI',
      description: 'Create smarter, more efficient workspaces with advanced occupancy analytics that reduce costs, enhance employee productivity, and optimize real estate utilization through intelligent building management.',
      image: 'modern office building corporate workspace smart building',
      keyMetrics: {
        accuracy: 'Up to 99%',
        avgImprovement: '+38%',
        energySavings: '-35%',
        spaceOptimization: '+45%'
      },
      competitiveAdvantages: [
        'HVAC system integration',
        'Energy optimization algorithms',
        'Multi-floor analytics',
        'Meeting room intelligence',
        'Workplace utilization insights',
        'Sustainability reporting'
      ],
      useCases: [
        {
          title: 'Intelligent Space Utilization',
          description: 'Advanced occupancy analytics providing detailed insights for every floor, room, and zone with predictive space planning capabilities',
          benefits: ['45% better space utilization', 'Reduced real estate costs', 'Data-driven space planning', 'Workplace optimization insights'],
          metrics: 'Space efficiency: 78% (vs 52% industry avg)',
          roi: '$1.2M annual real estate savings'
        },
        {
          title: 'Smart HVAC Optimization',
          description: 'AI-powered HVAC control that automatically adjusts heating, cooling, and lighting based on real-time occupancy patterns',
          benefits: ['35% energy cost reduction', 'Improved comfort levels', 'Sustainability goals achievement', 'Carbon footprint reduction'],
          metrics: 'Energy consumption: -35% reduction',
          roi: '$450K annual energy savings'
        },
        {
          title: 'Meeting Room Intelligence',
          description: 'Comprehensive meeting room analytics that track usage patterns, optimize booking systems, and enhance collaboration spaces',
          benefits: ['Reduced booking conflicts', 'Improved room utilization', 'Enhanced productivity', 'Space planning optimization'],
          metrics: 'Meeting room utilization: +58%',
          roi: '$230K productivity gains'
        },
        {
          title: 'Workplace Compliance & Safety',
          description: 'Automated monitoring of occupancy limits for health, safety, and building code compliance with real-time alerts',
          benefits: ['Automated compliance monitoring', 'Safety protocol enforcement', 'Audit trail documentation', 'Emergency preparedness'],
          metrics: 'Compliance adherence: 100%',
          roi: 'Risk mitigation valued at $500K+'
        }
      ],
      caseStudy: {
        client: 'TechCorp Global Headquarters (850,000 sq ft)',
        challenge: 'Underutilized office space costing $3.2M annually and 35% higher energy costs than industry benchmarks',
        solution: 'APC CloudSync deployment across 45 floors with comprehensive HVAC, lighting, and facilities integration',
        implementation: '6-week phased deployment with zero downtime',
        results: [
          '45% space utilization improvement',
          '35% energy cost reduction ($1.8M savings)',
          '$2.1M annual real estate optimization',
          '28% productivity increase',
          'LEED Platinum certification achieved'
        ],
        testimonial: '"The space insights from APC have fundamentally changed how we think about our workplace. We\'ve saved millions while creating a better employee experience." - Michael Rodriguez, Facilities Director'
      },
      recommendedSolution: 'APC CloudSync',
      whyThisSolution: 'Centralized analytics across multiple floors and buildings with seamless HVAC, lighting, and facilities integration for comprehensive building intelligence.',
      industrySpecific: [
        'HVAC integration',
        'Energy management',
        'Space utilization analytics',
        'Meeting room optimization',
        'Workplace insights',
        'Sustainability reporting'
      ],
      compliance: ['LEED', 'BREEAM', 'ENERGY STAR', 'GDPR', 'SOC2'],
      integrations: ['HVAC Systems', 'Lighting Controls', 'BMS', 'Access Control', 'HR Systems']
    },
    {
      id: 'transport',
      name: 'Transportation Hubs & Airports',
      icon: <Plane className="h-6 w-6" />,
      tagline: 'Streamline Passenger Flow & Enhance Security Operations',
      description: 'Enhance passenger experience and security with intelligent crowd management for airports, train stations, and transit centers using advanced AI analytics and real-time monitoring.',
      image: 'airport transportation hub passengers security checkpoint',
      keyMetrics: {
        accuracy: 'Up to 99%',
        avgImprovement: '+48%',
        waitReduction: '-55%',
        throughputIncrease: '+32%'
      },
      competitiveAdvantages: [
        'Security checkpoint optimization',
        'Real-time passenger flow',
        'Multi-zone monitoring',
        'Emergency response integration',
        'Predictive queue management',
        'Revenue optimization analytics'
      ],
      useCases: [
        {
          title: 'Security Checkpoint Optimization',
          description: 'AI-powered queue monitoring at security checkpoints with predictive analytics for optimal staffing and reduced wait times',
          benefits: ['55% reduction in wait times', 'Improved passenger satisfaction', 'Dynamic resource allocation', 'Security efficiency gains'],
          metrics: 'Average security wait: 8.2 minutes (vs 18.5 avg)',
          roi: '$2.1M passenger satisfaction value'
        },
        {
          title: 'Terminal Capacity Intelligence',
          description: 'Real-time passenger density tracking across terminals to prevent overcrowding and ensure safety compliance',
          benefits: ['Real-time capacity monitoring', 'Emergency evacuation planning', 'Safety regulation compliance', 'Crowd density optimization'],
          metrics: 'Capacity utilization: Optimal 85% vs 95% previous',
          roi: '$850K safety compliance value'
        },
        {
          title: 'Boarding Gate Analytics',
          description: 'Advanced passenger flow analytics at gates with predictive boarding optimization and congestion prevention',
          benefits: ['32% faster boarding times', 'Reduced gate congestion', 'Improved on-time performance', 'Enhanced passenger experience'],
          metrics: 'On-time performance: +15% improvement',
          roi: '$1.2M operational efficiency gains'
        },
        {
          title: 'Retail Revenue Optimization',
          description: 'Comprehensive foot traffic analysis to optimize retail space placement, tenant performance, and commercial revenue',
          benefits: ['Increased retail revenue', 'Better tenant satisfaction', 'Data-driven lease negotiations', 'Commercial space optimization'],
          metrics: 'Retail revenue per passenger: +28%',
          roi: '$3.4M additional commercial revenue'
        }
      ],
      caseStudy: {
        client: 'International Airport Authority (75M passengers/year)',
        challenge: 'Long security lines causing 12% missed flights and passenger complaints, plus declining commercial revenue',
        solution: 'APC SmartConnect deployment with mobile alerts for security management and comprehensive analytics across 5 terminals',
        implementation: '8-week deployment across all terminals',
        results: [
          '55% security queue reduction',
          '98% passenger satisfaction improvement',
          '32% boarding efficiency increase',
          '$3.4M additional retail revenue',
          '15% on-time performance improvement'
        ],
        testimonial: '"APC transformed our operations. Security lines are faster, passengers are happier, and our commercial revenue has significantly increased." - Emma Thompson, Operations Director'
      },
      recommendedSolution: 'APC SmartConnect',
      whyThisSolution: 'Mobile access and redundant connectivity perfect for large, distributed transportation facilities with critical operations and security requirements.',
      industrySpecific: [
        'Security integration',
        'Passenger flow optimization',
        'Gate management',
        'Terminal analytics',
        'Commercial revenue tracking',
        'Emergency response'
      ],
      compliance: ['TSA', 'IATA', 'ICAO', 'ADA', 'GDPR'],
      integrations: ['Security Systems', 'Flight Information', 'Gate Management', 'Retail POS', 'Emergency Systems']
    },
    {
      id: 'healthcare',
      name: 'Healthcare Facilities & Hospitals',
      icon: <Hospital className="h-6 w-6" />,
      tagline: 'Optimize Patient Care & Enhance Operational Efficiency',
      description: 'Improve patient care delivery and operational efficiency with intelligent capacity management for hospitals, clinics, and medical centers through advanced healthcare analytics.',
      image: 'hospital healthcare facility patients medical staff',
      keyMetrics: {
        accuracy: 'Up to 98%',
        avgImprovement: '+35%',
        waitReduction: '-45%',
        efficiencyGain: '+28%'
      },
      competitiveAdvantages: [
        'HIPAA compliant analytics',
        'Patient flow optimization',
        'Emergency department management',
        'Infection control monitoring',
        'Resource allocation intelligence',
        'Clinical workflow optimization'
      ],
      useCases: [
        {
          title: 'Patient Flow Optimization',
          description: 'Advanced patient movement tracking through departments to reduce wait times and improve care delivery coordination',
          benefits: ['45% reduction in wait times', 'Improved patient satisfaction', 'Enhanced care coordination', 'Workflow optimization'],
          metrics: 'Patient wait time: 18 minutes (vs 33 avg)',
          roi: '$680K operational efficiency gains'
        },
        {
          title: 'Emergency Department Intelligence',
          description: 'Real-time ER occupancy monitoring and queue analytics to optimize staffing and resource allocation for critical care',
          benefits: ['Faster emergency response', 'Reduced overcrowding', 'Improved patient outcomes', 'Staff efficiency gains'],
          metrics: 'ER processing time: -35% reduction',
          roi: '$1.1M patient care value improvement'
        },
        {
          title: 'Infection Control Monitoring',
          description: 'Occupancy monitoring in critical areas to maintain infection control protocols and ensure patient safety compliance',
          benefits: ['Enhanced infection prevention', 'Compliance monitoring', 'Improved patient safety', 'Risk mitigation'],
          metrics: 'Infection incidents: -52% reduction',
          roi: 'Risk reduction valued at $2.3M+'
        },
        {
          title: 'Resource Allocation Intelligence',
          description: 'Optimize staff scheduling and equipment placement based on patient traffic patterns and clinical demand analytics',
          benefits: ['Reduced operational costs', 'Improved resource utilization', 'Better staff efficiency', 'Equipment optimization'],
          metrics: 'Resource utilization: +35% improvement',
          roi: '$450K resource optimization savings'
        }
      ],
      caseStudy: {
        client: 'Regional Medical Center (500 beds, 2,500 staff)',
        challenge: 'ER overcrowding causing 45-minute average wait times and 20% patient complaints about delayed care',
        solution: 'APC Link integration with existing security cameras plus specialized healthcare analytics dashboard',
        implementation: '4-week deployment with clinical workflow integration',
        results: [
          '45% wait time reduction (45 to 25 minutes)',
          '96% patient satisfaction improvement',
          '28% operational efficiency gain',
          '$1.2M annual cost savings',
          '52% reduction in infection control incidents'
        ],
        testimonial: '"APC has revolutionized our patient flow. We can now provide better care faster while optimizing our resources." - Dr. Jennifer Walsh, Chief Medical Officer'
      },
      recommendedSolution: 'APC Link',
      whyThisSolution: 'Leverages existing security infrastructure while providing healthcare-specific analytics with HIPAA compliance and privacy-first design.',
      industrySpecific: [
        'Patient flow analytics',
        'Clinical workflow optimization',
        'Emergency response',
        'Infection control',
        'Resource management',
        'Compliance monitoring'
      ],
      compliance: ['HIPAA', 'HITECH', 'Joint Commission', 'CMS', 'GDPR'],
      integrations: ['EMR Systems', 'Nurse Call', 'Security', 'Building Management', 'Clinical Systems']
    },
    {
      id: 'events',
      name: 'Events & Entertainment Venues',
      icon: <Music className="h-6 w-6" />,
      tagline: 'Ensure Safe, Memorable Events & Maximize Venue ROI',
      description: 'Deliver exceptional event experiences with advanced crowd safety monitoring and capacity management for concerts, festivals, sports venues, and entertainment facilities.',
      image: 'concert festival crowd event entertainment venue',
      keyMetrics: {
        accuracy: 'Up to 99%',
        avgImprovement: '+65%',
        safetyIncidents: '-92%',
        capacityOptimization: '+38%'
      },
      competitiveAdvantages: [
        'Real-time crowd density monitoring',
        'Emergency evacuation optimization',
        'Revenue analytics',
        'Vendor placement insights',
        'Safety compliance automation',
        'Mobile deployment capabilities'
      ],
      useCases: [
        {
          title: 'Crowd Safety Intelligence',
          description: 'Real-time crowd density tracking with AI-powered safety algorithms to prevent dangerous overcrowding situations',
          benefits: ['92% reduction in safety incidents', 'Emergency response optimization', 'Liability risk reduction', 'Enhanced crowd safety'],
          metrics: 'Safety incidents: Near-zero with real-time monitoring',
          roi: 'Risk mitigation valued at $5M+'
        },
        {
          title: 'Dynamic Entry Management',
          description: 'Intelligent venue capacity monitoring and queue optimization at entry points for smooth operations and enhanced experience',
          benefits: ['65% faster entry processing', 'Reduced wait times', 'Improved guest experience', 'Capacity optimization'],
          metrics: 'Entry processing: 45 seconds vs 2 minutes avg',
          roi: '$340K guest satisfaction value'
        },
        {
          title: 'Emergency Evacuation Optimization',
          description: 'Advanced occupancy pattern analysis to optimize emergency evacuation routes and procedures for maximum safety',
          benefits: ['Improved emergency preparedness', '40% faster evacuation times', 'Enhanced safety compliance', 'Risk reduction'],
          metrics: 'Evacuation efficiency: +40% improvement',
          roi: 'Safety compliance valued at $2M+'
        },
        {
          title: 'Revenue & Vendor Analytics',
          description: 'Comprehensive traffic pattern analysis to optimize vendor placement, pricing strategies, and premium area utilization',
          benefits: ['38% increased vendor revenue', 'Better space utilization', 'Data-driven pricing strategies', 'ROI optimization'],
          metrics: 'Vendor revenue per guest: +38% increase',
          roi: '$890K additional event revenue'
        }
      ],
      caseStudy: {
        client: 'Summer Music Festival (3-day, 150K attendees)',
        challenge: 'Crowd safety concerns for large-scale event with complex evacuation requirements and vendor revenue optimization',
        solution: 'APC EventSense rental solution with comprehensive real-time monitoring, emergency integration, and analytics',
        implementation: '2-day rapid deployment with full testing',
        results: [
          'Zero safety incidents over 3 days',
          '100% capacity compliance maintained',
          '65% faster entry processing',
          '38% vendor revenue increase',
          '98% attendee satisfaction rating'
        ],
        testimonial: '"APC EventSense gave us complete peace of mind. We could focus on the experience knowing safety and capacity were perfectly managed." - Marcus Johnson, Event Director'
      },
      recommendedSolution: 'APC EventSense',
      whyThisSolution: 'Portable rental solution perfect for temporary events with rapid deployment, real-time monitoring, and comprehensive safety analytics.',
      industrySpecific: [
        'Crowd safety monitoring',
        'Emergency response',
        'Capacity management',
        'Vendor analytics',
        'Event optimization',
        'Safety compliance'
      ],
      compliance: ['Fire Code', 'ADA', 'Local Safety Regulations', 'Insurance Requirements'],
      integrations: ['Emergency Systems', 'Ticketing', 'Security', 'Vendor Management', 'Sound/Lighting']
    }
  ];

  // Add more industries data (education, warehouses, metro, banks, government, etc.)
  const additionalIndustries = [
    {
      id: 'education',
      name: 'Educational Institutions',
      icon: <GraduationCap className="h-6 w-6" />,
      tagline: 'Smart Campus Solutions & Safety Management',
      keyMetrics: { accuracy: 'Up to 98%', improvement: '+35%', safety: '+60%' }
    },
    {
      id: 'warehouses',
      name: 'Warehouses & Distribution',
      icon: <Truck className="h-6 w-6" />,
      tagline: 'Optimize Logistics & Workforce Flow',
      keyMetrics: { accuracy: 'Up to 98%', efficiency: '+45%', cost: '-25%' }
    },
    {
      id: 'metro',
      name: 'Metro & Railway Stations',
      icon: <Train className="h-6 w-6" />,
      tagline: 'Enhance Transit Efficiency & Safety',
      keyMetrics: { accuracy: 'Up to 99%', throughput: '+40%', wait: '-50%' }
    },
    {
      id: 'banks',
      name: 'Banks & Financial Institutions',
      icon: <Landmark className="h-6 w-6" />,
      tagline: 'Optimize Branch Operations & Security',
      keyMetrics: { accuracy: 'Up to 99%', satisfaction: '+35%', queue: '-45%' }
    },
    {
      id: 'government',
      name: 'Government Institutions',
      icon: <Building className="h-6 w-6" />,
      tagline: 'Enhance Public Service Delivery',
      keyMetrics: { accuracy: 'Up to 99%', service: '+40%', efficiency: '+32%' }
    }
  ];

  const allIndustries = [...industries, ...additionalIndustries];

  // Slider functionality
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(allIndustries.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const getVisibleIndustries = () => {
    const start = currentSlide * itemsPerSlide;
    return allIndustries.slice(start, start + itemsPerSlide);
  };

  const selectedIndustryData = industries.find(ind => ind.id === selectedIndustry) || industries[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-blue-50 to-accent/5 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse hidden lg:block"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000 hidden lg:block"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <Globe className="h-4 w-4 mr-2" />
              Universal Industry Applications
            </Badge>
            <h1 className="mb-6 text-gray-900">
              Where Intelligence Meets Every Industry
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Discover how APC Solutions transforms operations across diverse industries with AI-powered people counting, 
              delivering measurable ROI through intelligent analytics, optimized workflows, and enhanced customer experiences.
            </p>
            
            {/* Industry Metrics Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
              <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Industries Served</div>
              </div>
              <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-gray-600">Global Installations</div>
              </div>
              <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-sm text-gray-600">Max Accuracy</div>
              </div>
              <div className="bg-white/70 backdrop-blur rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-green-600">450%</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => onPageChange('demo')} className="bg-gradient-to-r from-primary to-accent">
                <PlayCircle className="h-5 w-5 mr-2" />
                Start Free POC
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                <Download className="h-5 w-5 mr-2" />
                Industry Guides
              </Button>
              <Button variant="ghost" size="lg" onClick={() => onPageChange('contact')}>
                <MessageCircle className="h-5 w-5 mr-2" />
                Expert Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Industry Slider */}
      <section className="py-16 lg:py-20">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 border-purple-200">
              <Layers className="h-4 w-4 mr-2" />
              Industry Showcase
            </Badge>
            <h2 className="mb-6 text-gray-900">Transforming Operations Across Industries</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how APC Solutions delivers industry-specific value across retail, corporate, healthcare, 
              transportation, and more with tailored analytics and proven results.
            </p>
          </div>

          {/* Industry Slider */}
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Select Your Industry</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={prevSlide}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={nextSlide}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {getVisibleIndustries().map((industry) => (
                <Card 
                  key={industry.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedIndustry === industry.id 
                      ? 'border-primary shadow-lg ring-2 ring-primary/20' 
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedIndustry(industry.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                      selectedIndustry === industry.id 
                        ? 'bg-primary text-white' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {industry.icon}
                    </div>
                    <h4 className="font-semibold text-sm mb-2">{industry.name}</h4>
                    <p className="text-xs text-gray-600 mb-3">{industry.tagline}</p>
                    {industry.keyMetrics && (
                      <div className="text-xs space-y-1">
                        <div className="text-primary font-medium">{Object.values(industry.keyMetrics)[0]}</div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Industry View */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container-responsive">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center">
                  {selectedIndustryData.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedIndustryData.name}</h2>
                  <p className="text-lg text-primary font-medium">{selectedIndustryData.tagline}</p>
                </div>
              </div>
              
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-5 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="usecases">Use Cases</TabsTrigger>
                <TabsTrigger value="casestudy">Case Study</TabsTrigger>
                <TabsTrigger value="solution">Solution</TabsTrigger>
                <TabsTrigger value="competitive" className="hidden lg:block">Advantages</TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Industry Overview</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{selectedIndustryData.description}</p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(selectedIndustryData.keyMetrics).map(([key, value]) => (
                      <div key={key} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="text-2xl font-bold text-primary">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Industry Specific Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Industry-Specific Capabilities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedIndustryData.industrySpecific?.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1560472355-536de3962603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800`}
                    alt={selectedIndustryData.image}
                    className="rounded-xl shadow-lg w-full h-80 object-cover mb-6"
                  />
                  
                  {/* Competitive Advantages */}
                  <Card className="border-2 border-accent/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-accent" />
                        Competitive Advantages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {selectedIndustryData.competitiveAdvantages?.slice(0, 4).map((advantage, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                            <span className="text-sm">{advantage}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Use Cases Tab */}
            <TabsContent value="usecases">
              <div className="grid md:grid-cols-2 gap-8">
                {selectedIndustryData.useCases?.map((useCase, index) => (
                  <Card key={index} className="border-2 border-gray-100 hover:border-primary/20 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{useCase.title}</CardTitle>
                          <CardDescription className="mt-2">{useCase.description}</CardDescription>
                        </div>
                        <Badge className="bg-primary/10 text-primary">
                          {String(index + 1).padStart(2, '0')}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Benefits:</h4>
                          <ul className="space-y-2">
                            {useCase.benefits?.map((benefit, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {useCase.metrics && (
                          <div className="p-3 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg">
                            <div className="text-sm font-medium text-gray-700">Performance Metric:</div>
                            <div className="text-sm text-accent font-semibold">{useCase.metrics}</div>
                          </div>
                        )}
                        
                        {useCase.roi && (
                          <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                            <div className="text-sm font-medium text-gray-700">Expected ROI:</div>
                            <div className="text-sm text-green-600 font-semibold">{useCase.roi}</div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Case Study Tab */}
            <TabsContent value="casestudy">
              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent text-white rounded-xl flex items-center justify-center">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Success Story: {selectedIndustryData.caseStudy?.client}</CardTitle>
                      <CardDescription className="text-lg">Real-world implementation and measurable results</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Activity className="h-5 w-5 text-red-500" />
                        Challenge
                      </h3>
                      <p className="text-gray-600 mb-6">{selectedIndustryData.caseStudy?.challenge}</p>
                      
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500" />
                        Solution
                      </h3>
                      <p className="text-gray-600 mb-4">{selectedIndustryData.caseStudy?.solution}</p>
                      
                      {selectedIndustryData.caseStudy?.implementation && (
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="text-sm font-medium text-blue-700">Implementation:</div>
                          <div className="text-sm text-blue-600">{selectedIndustryData.caseStudy.implementation}</div>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-500" />
                        Results Achieved
                      </h3>
                      <div className="space-y-3">
                        {selectedIndustryData.caseStudy?.results?.map((result, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="font-medium text-green-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <MessageCircle className="h-5 w-5 text-blue-500" />
                        Client Testimonial
                      </h3>
                      <blockquote className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border-l-4 border-primary">
                        <p className="text-gray-700 italic mb-3">"{selectedIndustryData.caseStudy?.testimonial}"</p>
                      </blockquote>
                      
                      <div className="mt-6">
                        <Button onClick={() => onPageChange('case-studies')} className="w-full">
                          <Eye className="h-4 w-4 mr-2" />
                          View More Case Studies
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Solution Tab */}
            <TabsContent value="solution">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Sparkles className="h-6 w-6 text-primary" />
                      Recommended Solution: {selectedIndustryData.recommendedSolution}
                    </CardTitle>
                    <CardDescription>{selectedIndustryData.whyThisSolution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Features for This Industry:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedIndustryData.industrySpecific?.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Compliance & Standards:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedIndustryData.compliance?.map((standard, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              <Shield className="h-3 w-3 mr-1" />
                              {standard}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">System Integrations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedIndustryData.integrations?.map((integration, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              <Cpu className="h-3 w-3 mr-1" />
                              {integration}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-accent" />
                        Implementation Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                          <div>
                            <div className="font-medium">Site Assessment</div>
                            <div className="text-sm text-gray-600">1-2 days comprehensive evaluation</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                          <div>
                            <div className="font-medium">Installation</div>
                            <div className="text-sm text-gray-600">2-5 days based on complexity</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                          <div>
                            <div className="font-medium">Training & Go-Live</div>
                            <div className="text-sm text-gray-600">1-2 days comprehensive training</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PhoneCall className="h-5 w-5 text-green-600" />
                        Get Started Today
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Button 
                          onClick={() => onPageChange('demo')} 
                          className="w-full bg-accent hover:bg-accent/90"
                        >
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Start Free 15-Day POC
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => onPageChange('contact')}
                          className="w-full border-primary text-primary hover:bg-primary/5"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Industry Expert Consultation
                        </Button>
                        <Button 
                          variant="ghost" 
                          onClick={() => onPageChange('products')}
                          className="w-full"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View All Solutions
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Competitive Advantages Tab */}
            <TabsContent value="competitive">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedIndustryData.competitiveAdvantages?.map((advantage, index) => (
                  <Card key={index} className="border-2 border-gray-100 hover:border-accent/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Star className="h-5 w-5 text-accent" />
                        </div>
                        <h3 className="font-semibold">{advantage}</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Industry-leading capability that delivers superior results compared to traditional solutions.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-responsive">
          <div className="text-center">
            <h2 className="mb-6 text-white">Ready to Transform Your Industry Operations?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join industry leaders who've revolutionized their operations with APC Solutions. 
              Start your free POC today and experience the difference intelligent people counting makes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                onClick={() => onPageChange('demo')}
                className="bg-white text-primary hover:bg-gray-100"
              >
                <PlayCircle className="h-5 w-5 mr-2" />
                Start Free POC Today
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onPageChange('contact')}
                className="border-white text-white hover:bg-white/10"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Industry Expert Call
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                onClick={() => onPageChange('case-studies')}
                className="text-white hover:bg-white/10"
              >
                <Eye className="h-5 w-5 mr-2" />
                Success Stories
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 Customer Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span>500+ Global Installations</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>15+ Industries Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}