import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Package, 
  FileText, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Wifi, 
  Music,
  CheckCircle,
  ArrowRight,
  Target,
  Eye,
  Download,
  Play,
  Cpu,
  Camera,
  Monitor,
  Globe,
  Clock,
  DollarSign,
  Star,
  Award,
  TrendingUp,
  Sparkles,
  Calculator,
  Heart,
  ThumbsUp,
  MessageCircle,
  Share2,
  Bookmark,
  Lightbulb,
  Rocket,
  Filter,
  Search,
  X,
  ChevronRight,
  PhoneCall,
  Mail,
  Calendar,
  Video,
  HeartHandshake,
  Gauge,
  Building,
  ShoppingCart,
  Plane,
  MapPin,
  Headphones,
  CreditCard,
  Gift,
  Timer,
  Smartphone,
  TabletSmartphone,
  Laptop,
  MousePointer,
  Fingerprint,
  Lock,
  Network,
  Cloud,
  Database,
  HardDrive,
  Power,
  Settings,
  Activity,
  Phone,
  AlertTriangle,
  Info
} from 'lucide-react';
import { AIPricingCalculator } from './AIPricingCalculator';

interface RedesignedProductsHubProps {
  onPageChange: (page: string) => void;
}

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
  detailedSpecs: {
    hardware: { label: string; value: string; description: string }[];
    software: { label: string; value: string; description: string }[];
    deployment: { label: string; value: string; description: string }[];
    support: { label: string; value: string; description: string }[];
  };
}

const productsData: Product[] = [
  {
    id: 'core',
    name: 'APC Core',
    subtitle: 'Complete End-to-End Solution',
    description: 'Turnkey people counting solution with premium AI cameras, APC EdgeBox™, and comprehensive analytics platform.',
    price: '₹60,000',
    monthlyPrice: '₹5,000/month',
    rentalPrice: '₹8,000/day',
    features: [
      'Premium AI cameras included',
      'APC EdgeBox™ processing unit', 
      'Real-time analytics dashboard',
      'Professional installation',
      '24/7 technical support',
      'Cloud & local storage',
      'Mobile app access',
      'Custom reporting'
    ],
    specifications: {
      accuracy: 'Up to 97% to 99%',
      processing: 'APC EdgeBox™ with AI chipset, 8GB RAM, 256GB SSD',
      deployment: 'Turnkey installation with professional cameras',
      connectivity: 'Ethernet, Wi-Fi 6, 4G/5G optional',
      power: 'PoE+ for cameras, 12V DC for EdgeBox™',
      storage: 'Local: 30 days, Cloud: Unlimited with plan',
      analytics: 'Real-time counting, heatmaps, trend analysis, custom reports',
      support: '24/7 phone, email, remote assistance'
    },
    useCases: [
      'Large retail chains & malls',
      'Corporate offices & campuses', 
      'Airports & transportation hubs',
      'Healthcare facilities',
      'Government buildings',
      'High-traffic venues'
    ],
    badge: 'Most Popular',
    badgeColor: 'bg-primary',
    icon: <Users className="h-6 w-6" />,
    popular: true,
    recommended: 'Best for enterprises & high-accuracy needs',
    detailedSpecs: {
      hardware: [
        { label: 'AI Cameras', value: 'HD 1080p+ with built-in AI', description: 'Premium grade sensors with advanced computer vision processing' },
        { label: 'EdgeBox™ Processing', value: 'ARM Cortex-A78, 8GB RAM', description: 'Dedicated AI processing unit with neural engine acceleration' },
        { label: 'Storage Capacity', value: '256GB SSD + Cloud', description: 'High-speed local storage with unlimited cloud backup' },
        { label: 'Power Requirements', value: 'PoE+ (25.5W) per camera', description: 'Efficient power over ethernet with backup options' }
      ],
      software: [
        { label: 'Analytics Engine', value: 'Real-time AI processing', description: 'Advanced machine learning with predictive analytics' },
        { label: 'Dashboard Platform', value: 'Web + Mobile Apps', description: 'Comprehensive analytics dashboard with mobile access' },
        { label: 'API Integration', value: 'RESTful + WebSocket', description: 'Complete API suite for custom integrations' },
        { label: 'Reporting System', value: 'Automated + Custom', description: 'Scheduled reports with customizable KPIs and metrics' }
      ],
      deployment: [
        { label: 'Installation Type', value: 'Turnkey Professional', description: 'Complete installation with professional camera placement' },
        { label: 'Setup Time', value: '2-4 hours', description: 'Full deployment including testing and calibration' },
        { label: 'Training Included', value: 'Comprehensive', description: 'User training, admin certification, and ongoing support' },
        { label: 'Go-Live Support', value: 'Same day', description: 'Immediate data collection with real-time validation' }
      ],
      support: [
        { label: 'Support Level', value: '24/7 Premium', description: 'Round-the-clock phone, email, and remote assistance' },
        { label: 'Response Time', value: '< 2 hours', description: 'Guaranteed response time for critical issues' },
        { label: 'Warranty Period', value: '18 months', description: 'Comprehensive hardware and software warranty' },
        { label: 'Updates Included', value: 'Lifetime', description: 'Free software updates and feature enhancements' }
      ]
    }
  },
  {
    id: 'flex',
    name: 'APC Flex',
    subtitle: 'Cost-Efficient Intelligence',
    description: 'Advanced people counting analytics with budget-friendly cameras, perfect for multi-location deployments.',
    price: '₹45,000',
    monthlyPrice: '₹4,000/month',
    rentalPrice: '₹6,000/day',
    features: [
      'Budget-optimized cameras',
      'APC EdgeBox™ processing',
      'Advanced analytics platform',
      'Multi-location management',
      'Standard installation',
      'Business hours support',
      'Cloud integration',
      'Scalable deployment'
    ],
    specifications: {
      accuracy: 'Up to 95% to 99%',
      processing: 'APC EdgeBox™ with standard chipset, 4GB RAM, 128GB SSD',
      deployment: 'Semi-professional installation with standard cameras',
      connectivity: 'Ethernet, Wi-Fi 5, cellular optional',
      power: 'PoE for cameras, 12V DC for EdgeBox™',
      storage: 'Local: 15 days, Cloud: 1 year retention',
      analytics: 'Real-time counting, basic heatmaps, standard reports',
      support: 'Business hours phone, email support'
    },
    useCases: [
      'Franchise operations',
      'Small to medium retail',
      'Co-working spaces',
      'Clinics & small healthcare',
      'Educational institutions',
      'Multi-location businesses'
    ],
    badge: 'Best Value',
    badgeColor: 'bg-accent',
    icon: <BarChart3 className="h-6 w-6" />,
    detailedSpecs: {
      hardware: [
        { label: 'Standard Cameras', value: 'HD 720p+ with AI', description: 'Cost-optimized sensors with reliable performance' },
        { label: 'EdgeBox™ Processing', value: 'ARM Cortex-A55, 4GB RAM', description: 'Efficient processing unit optimized for multi-location deployments' },
        { label: 'Storage Capacity', value: '128GB SSD + Cloud', description: 'Adequate local storage with cloud synchronization' },
        { label: 'Power Requirements', value: 'PoE (15.4W) per camera', description: 'Standard power over ethernet for cost efficiency' }
      ],
      software: [
        { label: 'Analytics Engine', value: 'Real-time processing', description: 'Reliable counting with basic heatmap generation' },
        { label: 'Dashboard Platform', value: 'Web-based', description: 'Comprehensive web dashboard with mobile responsiveness' },
        { label: 'Multi-location', value: 'Centralized management', description: 'Manage multiple locations from single dashboard' },
        { label: 'Reporting System', value: 'Standard reports', description: 'Pre-built reports with basic customization options' }
      ],
      deployment: [
        { label: 'Installation Type', value: 'Semi-professional', description: 'Guided installation with remote support' },
        { label: 'Setup Time', value: '3-5 hours', description: 'Installation including basic configuration and testing' },
        { label: 'Training Included', value: 'Standard', description: 'User training and documentation provided' },
        { label: 'Go-Live Support', value: 'Next day', description: 'Data collection starts within 24 hours' }
      ],
      support: [
        { label: 'Support Level', value: 'Business hours', description: 'Monday-Friday 9AM-6PM support coverage' },
        { label: 'Response Time', value: '< 4 hours', description: 'Response time during business hours' },
        { label: 'Warranty Period', value: '12 months', description: 'Standard hardware and software warranty' },
        { label: 'Updates Included', value: '2 years', description: 'Software updates included for 2 years' }
      ]
    }
  },
  {
    id: 'link',
    name: 'APC Link',
    subtitle: 'Leverage Existing Infrastructure',
    description: 'Transform your existing IP cameras into intelligent people counting systems with maximum ROI.',
    price: '₹35,000',
    monthlyPrice: '₹3,000/month',
    rentalPrice: '₹4,500/day',
    features: [
      'Works with existing cameras',
      'APC EdgeBox™ integration',
      'Camera compatibility check',
      'Software-only upgrade',
      'Quick deployment',
      'Standard support',
      'API access',
      'Custom integrations'
    ],
    specifications: {
      accuracy: 'Up to 92% to 98%',
      processing: 'APC EdgeBox™ connects to existing IP cameras',
      deployment: 'Software installation on existing camera network',
      connectivity: 'Existing network infrastructure',
      power: 'Uses existing camera power setup',
      storage: 'Local: 7 days, Cloud: 6 months retention',
      analytics: 'Basic counting, occupancy tracking, simple reports',
      support: 'Email support, online documentation'
    },
    useCases: [
      'Facilities with existing cameras',
      'Budget-conscious deployments',
      'Temporary installations',
      'Proof of concept projects',
      'Small businesses',
      'Quick ROI requirements'
    ],
    badge: 'Maximum ROI',
    badgeColor: 'bg-blue-500',
    icon: <Wifi className="h-6 w-6" />,
    detailedSpecs: {
      hardware: [
        { label: 'Camera Compatibility', value: 'ONVIF-compliant IP cameras', description: 'Works with most existing IP camera installations' },
        { label: 'EdgeBox™ Processing', value: 'ARM Cortex-A53, 2GB RAM', description: 'Lightweight processing unit for existing infrastructure' },
        { label: 'Storage Capacity', value: '64GB eMMC + Cloud', description: 'Basic local storage with cloud analytics' },
        { label: 'Power Requirements', value: 'Existing camera power', description: 'No additional power infrastructure required' }
      ],
      software: [
        { label: 'Analytics Engine', value: 'Adaptive processing', description: 'Optimizes performance based on camera quality' },
        { label: 'Dashboard Platform', value: 'Web-based lite', description: 'Essential analytics with core functionality' },
        { label: 'Camera Integration', value: 'Plug-and-play', description: 'Automatic camera discovery and configuration' },
        { label: 'Reporting System', value: 'Basic reports', description: 'Essential counting metrics and trends' }
      ],
      deployment: [
        { label: 'Installation Type', value: 'Software-only', description: 'No hardware changes to existing camera setup' },
        { label: 'Setup Time', value: '1-2 hours', description: 'Quick deployment with minimal disruption' },
        { label: 'Training Included', value: 'Basic', description: 'Essential user training and setup guide' },
        { label: 'Go-Live Support', value: 'Immediate', description: 'Data collection starts immediately after setup' }
      ],
      support: [
        { label: 'Support Level', value: 'Email + documentation', description: 'Comprehensive online support resources' },
        { label: 'Response Time', value: '< 24 hours', description: 'Email response within one business day' },
        { label: 'Warranty Period', value: '12 months', description: 'Software warranty with hardware compatibility' },
        { label: 'Updates Included', value: '1 year', description: 'Software updates included for first year' }
      ]
    }
  },
  {
    id: 'eventsense',
    name: 'APC EventSense',
    subtitle: 'On-Demand Event Solution',
    description: 'Portable people counting for events, festivals, and temporary deployments with rapid setup.',
    price: '₹15,000',
    monthlyPrice: '₹625/month',
    rentalPrice: '₹8,000/day',
    features: [
      'Portable hardware setup',
      'Rapid deployment (same day)',
      'Event-optimized analytics',
      'Real-time crowd monitoring',
      'Mobile reporting',
      'On-site support available',
      'Flexible rental terms',
      'Emergency crowd alerts'
    ],
    specifications: {
      accuracy: 'Up to 85% to 95%',
      processing: 'Portable APC EdgeBox™ with battery backup',
      deployment: 'Temporary installation, 2-4 hours setup',
      connectivity: 'Wi-Fi, 4G/5G, satellite options',
      power: 'Battery (8-12 hours), solar option, AC power',
      storage: 'Local: Event duration, Cloud: 30 days post-event',
      analytics: 'Crowd density, flow direction, safety alerts',
      support: 'On-site technician available during events'
    },
    useCases: [
      'Music festivals & concerts',
      'Sporting events',
      'Trade shows & exhibitions',
      'Political rallies',
      'Religious gatherings',
      'Emergency crowd management'
    ],
    badge: 'Event Rental',
    badgeColor: 'bg-purple-500',
    icon: <Music className="h-6 w-6" />,
    detailedSpecs: {
      hardware: [
        { label: 'Portable Cameras', value: 'Weatherproof HD with AI', description: 'Rugged cameras designed for outdoor events' },
        { label: 'Mobile EdgeBox™', value: 'Battery-powered unit', description: 'Portable processing with 8-12 hour battery life' },
        { label: 'Storage Capacity', value: 'Event duration + 30 days', description: 'Local storage during event, cloud backup after' },
        { label: 'Power Options', value: 'Battery, solar, AC', description: 'Multiple power options for any event scenario' }
      ],
      software: [
        { label: 'Event Analytics', value: 'Crowd-optimized', description: 'Specialized algorithms for event crowd management' },
        { label: 'Mobile Dashboard', value: 'Real-time monitoring', description: 'Live crowd monitoring with mobile alerts' },
        { label: 'Safety Alerts', value: 'Automated warnings', description: 'Real-time crowd density and safety notifications' },
        { label: 'Reporting System', value: 'Event summary', description: 'Comprehensive post-event analytics and reports' }
      ],
      deployment: [
        { label: 'Installation Type', value: 'Rapid temporary', description: 'Quick setup for temporary event installations' },
        { label: 'Setup Time', value: '2-4 hours', description: 'Fast deployment with minimal site preparation' },
        { label: 'Training Included', value: 'On-site briefing', description: 'Event staff training and system overview' },
        { label: 'Go-Live Support', value: 'Same day', description: 'Immediate operation with on-site technician' }
      ],
      support: [
        { label: 'Support Level', value: 'On-site during events', description: 'Dedicated technician available throughout event' },
        { label: 'Response Time', value: 'Immediate', description: 'On-site support for immediate issue resolution' },
        { label: 'Rental Terms', value: 'Flexible', description: 'Daily, weekly, or event-duration rental options' },
        { label: 'Equipment Insurance', value: 'Included', description: 'Full equipment coverage during rental period' }
      ]
    }
  }
];

export function RedesignedProductsHub({ onPageChange }: RedesignedProductsHubProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProduct, setSelectedProduct] = useState<Product>(productsData[0]); // Default to first product
  const [likedProducts, setLikedProducts] = useState<string[]>([]);
  const [comparisonProducts, setComparisonProducts] = useState<string[]>([]);

  // Toggle product like
  const toggleProductLike = (productId: string) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Toggle product comparison
  const toggleProductComparison = (productId: string) => {
    setComparisonProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : prev.length < 3 ? [...prev, productId] : prev
    );
  };

  // Get pricing for selected product
  const getAdvancePayment = (productId: string) => {
    const prices = {
      'core': '₹24,000',
      'flex': '₹18,000',
      'link': '₹14,000',
      'eventsense': '₹6,000'
    };
    return prices[productId] || '₹24,000';
  };

  const getRentalMinimum = (productId: string) => {
    return productId === 'eventsense' ? 'Minimum 4-5 days' : 'Minimum 3-4 days';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Enhanced Header */}
      <section className="relative bg-gradient-to-r from-primary via-blue-600 to-accent text-white py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white rounded-full animate-pulse delay-3000"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Badge className="bg-white/20 text-white px-6 py-3 text-lg">
                <Sparkles className="h-5 w-5 mr-2 animate-pulse" />
                Complete Product Lineup
              </Badge>
              <Badge className="bg-yellow-500 text-black px-4 py-2 animate-bounce">
                <Gift className="h-4 w-4 mr-1" />
                15-Day Free Trial
              </Badge>
            </div>
            
            <h1 className="mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              APC Products & Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Choose the perfect people counting solution for your needs. From enterprise-grade accuracy to budget-friendly options and event rentals.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors">4</div>
                <div className="text-blue-100 text-sm">Product Solutions</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-green-300 transition-colors">90-99%</div>
                <div className="text-blue-100 text-sm">Accuracy Range</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">₹35K-₹60K</div>
                <div className="text-blue-100 text-sm">Price Range</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">15-day</div>
                <div className="text-blue-100 text-sm">Free Trial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature Bar */}
      <div className="bg-white border-b border-gray-200 py-4 sticky top-0 z-40">
        <div className="container-responsive">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>4 Solutions Available</span>
              </div>
              {comparisonProducts.length > 0 && (
                <Badge className="bg-blue-500 text-white">
                  <BarChart3 className="h-3 w-3 mr-1" />
                  {comparisonProducts.length} Selected for Comparison
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onPageChange('demo')}
                className="text-primary border-primary hover:bg-primary hover:text-white"
              >
                <Rocket className="h-4 w-4 mr-2" />
                Start Free POC
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onPageChange('contact')}
              >
                <PhoneCall className="h-4 w-4 mr-2" />
                Expert Help
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-responsive py-8 lg:py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          {/* Enhanced Navigation Tabs */}
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-5xl grid-cols-5 bg-white shadow-xl border">
              <TabsTrigger value="overview" className="flex items-center gap-2 py-3">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Product</span> Overview
              </TabsTrigger>
              <TabsTrigger value="calculator" className="flex items-center gap-2 py-3">
                <Calculator className="h-4 w-4" />
                <span className="hidden sm:inline">Smart</span> Analyzer
              </TabsTrigger>
              <TabsTrigger value="detailed" className="flex items-center gap-2 py-3">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Detailed</span> Specs
              </TabsTrigger>
              <TabsTrigger value="comparison" className="flex items-center gap-2 py-3">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Feature</span> Comparison
              </TabsTrigger>
              <TabsTrigger value="competitors" className="flex items-center gap-2 py-3">
                <TrendingUp className="h-4 w-4" />
                <span className="hidden sm:inline">vs</span> Competitors
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Product Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Product Selection Grid */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Choose Your APC Solution
                </CardTitle>
                <CardDescription>
                  Select a product to view detailed specifications and pricing options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {productsData.map((product) => (
                    <Card 
                      key={product.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedProduct.id === product.id 
                          ? 'border-2 border-primary ring-4 ring-primary/20 bg-primary/5' 
                          : 'border border-gray-200 hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedProduct(product)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center text-white ${product.badgeColor} shadow-lg`}>
                          {product.icon}
                        </div>
                        <h3 className="font-semibold text-base mb-2">{product.name}</h3>
                        <p className="text-xs text-gray-600 mb-3">{product.subtitle}</p>
                        <div className="space-y-1">
                          <div className="text-lg font-bold text-primary">{product.price}</div>
                          <div className="text-xs text-gray-500">{product.monthlyPrice}</div>
                          <Badge className={`${product.badgeColor} text-white text-xs`}>
                            {product.badge}
                          </Badge>
                        </div>
                        {selectedProduct.id === product.id && (
                          <div className="mt-3">
                            <Badge className="bg-green-100 text-green-700 text-xs">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Selected
                            </Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Selected Product Details with Comprehensive Pricing */}
            {selectedProduct && (
              <Card className="border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white ${selectedProduct.badgeColor} shadow-lg`}>
                        {selectedProduct.icon}
                      </div>
                      <div>
                        <CardTitle className="text-3xl mb-2">{selectedProduct.name}</CardTitle>
                        <CardDescription className="text-lg">{selectedProduct.subtitle}</CardDescription>
                        {selectedProduct.popular && (
                          <Badge className="bg-yellow-500 text-white mt-2">
                            <Star className="h-3 w-3 mr-1" />
                            Most Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Comprehensive Pricing Plans */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <DollarSign className="h-6 w-6 text-green-600" />
                      Comprehensive Pricing Options
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      {/* One-time Purchase */}
                      <Card className="border-2 border-green-200 bg-green-50/50">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg text-green-800">
                              <ShoppingCart className="h-5 w-5 inline mr-2" />
                              One-time Purchase
                            </CardTitle>
                            <Badge className="bg-green-600 text-white">Recommended</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="text-3xl font-bold text-green-700 mb-2">{selectedProduct.price}</div>
                          <div className="text-sm text-green-600 mb-4">Complete ownership with full features</div>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Perpetual license</li>
                            <li>• No monthly fees</li>
                            <li>• Full feature access</li>
                            <li>• Maximum value</li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Subscription Plan */}
                      <Card className="border-2 border-blue-200 bg-blue-50/50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-blue-800">
                            <CreditCard className="h-5 w-5 inline mr-2" />
                            Subscription Plan
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-2 mb-4">
                            <div className="text-xl font-bold text-blue-700">
                              {getAdvancePayment(selectedProduct.id)} advance
                            </div>
                            <div className="text-lg text-blue-600">+ {selectedProduct.monthlyPrice}</div>
                            <div className="text-xs text-blue-500">40% advance payment</div>
                          </div>
                          <div className="bg-blue-100 p-3 rounded-lg mb-3">
                            <div className="text-sm font-semibold text-blue-800">₹12,000 Refundable Deposit</div>
                            <div className="text-xs text-blue-600">Equipment security deposit</div>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Lower upfront cost</li>
                            <li>• Monthly payments</li>
                            <li>• Flexible terms</li>
                            <li>• Equipment protection</li>
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Rental Plan */}
                      <Card className="border-2 border-purple-200 bg-purple-50/50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-purple-800">
                            <Calendar className="h-5 w-5 inline mr-2" />
                            Rental Plan
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-2 mb-4">
                            <div className="text-2xl font-bold text-purple-700">
                              {selectedProduct.rentalPrice}
                            </div>
                            <div className="text-sm text-purple-600">
                              {getRentalMinimum(selectedProduct.id)}
                            </div>
                          </div>
                          <div className="bg-purple-100 p-3 rounded-lg mb-3">
                            <div className="text-sm font-semibold text-purple-800">₹12,000 Refundable Deposit</div>
                            <div className="text-xs text-purple-600">Equipment security deposit</div>
                          </div>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Short-term usage</li>
                            <li>• Event-based pricing</li>
                            <li>• Maximum flexibility</li>
                            <li>• As per client requirement</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Demo-POC Options */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Rocket className="h-6 w-6 text-blue-600" />
                        Demo-POC Options
                      </h3>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        {/* 1 Day Demo */}
                        <Card className="border-2 border-blue-200 bg-blue-50/50">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg text-blue-800">
                                <Timer className="h-5 w-5 inline mr-2" />
                                1 Day Demo-POC
                              </CardTitle>
                              <Badge className="bg-blue-600 text-white">Free</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="text-3xl font-bold text-blue-700 mb-2">FREE</div>
                            <div className="text-sm text-blue-600 mb-4">Installation charges only applicable</div>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Quick system evaluation</li>
                              <li>• Basic functionality test</li>
                              <li>• Live data collection</li>
                              <li>• Technical assessment</li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* 15 Days Demo */}
                        <Card className="border-2 border-green-200 bg-green-50/50">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg text-green-800">
                                <Calendar className="h-5 w-5 inline mr-2" />
                                15 Days Demo-POC
                              </CardTitle>
                              <Badge className="bg-green-600 text-white">Popular</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="text-3xl font-bold text-green-700 mb-2">₹5,000</div>
                            <div className="text-sm text-green-600 mb-4">60% adjustable in final procurement</div>
                            <div className="bg-green-100 p-3 rounded-lg mb-3">
                              <div className="text-sm font-semibold text-green-800">Installation charges applicable</div>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Complete system trial</li>
                              <li>• Full analytics access</li>
                              <li>• Performance evaluation</li>
                              <li>• ROI calculation support</li>
                            </ul>
                          </CardContent>
                        </Card>

                        {/* 30 Days Demo */}
                        <Card className="border-2 border-purple-200 bg-purple-50/50">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg text-purple-800">
                                <Award className="h-5 w-5 inline mr-2" />
                                30 Days Demo-POC
                              </CardTitle>
                              <Badge className="bg-purple-600 text-white">Extended</Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="text-3xl font-bold text-purple-700 mb-2">₹10,000</div>
                            <div className="text-sm text-purple-600 mb-4">60% adjustable in final procurement</div>
                            <div className="bg-purple-100 p-3 rounded-lg mb-3">
                              <div className="text-sm font-semibold text-purple-800">Installation charges applicable</div>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Comprehensive evaluation</li>
                              <li>• Advanced analytics testing</li>
                              <li>• Custom reporting setup</li>
                              <li>• Full integration testing</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Client Requirements */}
                      <Card className="border border-blue-200 bg-blue-50/30">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                            <Settings className="h-5 w-5" />
                            Client Requirements & Scope
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="grid md:grid-cols-2 gap-6 text-sm">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Infrastructure Requirements:</h4>
                              <ul className="space-y-1 text-gray-600">
                                <li>• POE (Power over Ethernet) setup</li>
                                <li>• Stable power supply arrangement</li>
                                <li>• Backup power (if needed)</li>
                                <li>• Network cabling and connectivity</li>
                                <li>• Internet connectivity</li>
                                <li>• Laptop or desktop computer</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">Installation Support:</h4>
                              <ul className="space-y-1 text-gray-600">
                                <li>• Sensor placement at entrance</li>
                                <li>• Human service support for wiring</li>
                                <li>• Hardware fitting assistance</li>
                                <li>• Technical support during setup</li>
                                <li>• Access permissions coordination</li>
                                <li>• On-site coordination support</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-blue-200">
                            <div className="flex items-start gap-3">
                              <Eye className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-blue-800 mb-1">Demo-POC Benefits:</h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  Experience real-time people counting with live data collection, performance validation, 
                                  and comprehensive analytics before making your final decision. All demo charges are 
                                  60% adjustable towards your final procurement (except 1-day free demo).
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Important Terms & Conditions */}
                    <Card className="border border-orange-200 bg-orange-50/30">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-orange-800 flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          Important Terms & Conditions
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Applicable to All Plans:</h4>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Installation charges applicable</li>
                              <li>• Onsite visit charges applicable</li>
                              <li>• Professional setup & configuration</li>
                              <li>• Technical support included</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Rental Specific:</h4>
                            <ul className="space-y-1 text-gray-600">
                              <li>• Conveyance charges by client</li>
                              <li>• Engineer stay arrangement by client</li>
                              <li>• Equipment insurance included</li>
                              <li>• Flexible duration as per requirement</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-orange-200">
                          <h4 className="font-semibold text-gray-800 mb-2">Client Scope & Responsibilities:</h4>
                          <div className="text-xs text-gray-600 leading-relaxed">
                            Client to provide: All permissions, power supply, wiring, display setup, other hardware requirements, 
                            laptop/computer, POE switches, mounting facility and erection, technical and wiring assistance, 
                            and ongoing support as needed for optimal system performance.
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Product Description & Features */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-3">Product Description</h4>
                        <p className="text-gray-700 leading-relaxed">{selectedProduct.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold mb-3">Key Features</h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {selectedProduct.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-3">Perfect For</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {selectedProduct.useCases.map((useCase, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                              <Building className="h-4 w-4 text-blue-600" />
                              <span className="text-sm text-gray-700">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-3">Quick Specifications</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm font-medium">Accuracy:</span>
                            <span className="text-sm text-gray-600">{selectedProduct.specifications.accuracy}</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm font-medium">Processing:</span>
                            <span className="text-sm text-gray-600">{selectedProduct.specifications.processing}</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <span className="text-sm font-medium">Support:</span>
                            <span className="text-sm text-gray-600">{selectedProduct.specifications.support}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Button 
                      onClick={() => onPageChange('demo')}
                      className="bg-primary text-white hover:bg-primary/90"
                    >
                      <Rocket className="h-4 w-4 mr-2" />
                      Start Free Trial
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => onPageChange('contact')}
                    >
                      <PhoneCall className="h-4 w-4 mr-2" />
                      Contact Sales
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => toggleProductLike(selectedProduct.id)}
                      className={likedProducts.includes(selectedProduct.id) ? 'border-red-500 text-red-500' : ''}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${likedProducts.includes(selectedProduct.id) ? 'fill-red-500' : ''}`} />
                      {likedProducts.includes(selectedProduct.id) ? 'Liked' : 'Save'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* AI Calculator Tab */}
          <TabsContent value="calculator" className="space-y-8">
            <AIPricingCalculator onPageChange={onPageChange} />
          </TabsContent>

          {/* Detailed Specifications Tab */}
          <TabsContent value="detailed" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Detailed Product Specifications
                </CardTitle>
                <CardDescription>
                  Complete technical specifications for all APC solutions with comprehensive hardware and software details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8">
                  {productsData.map((product) => (
                    <Card key={product.id} className="border-2 border-gray-100 hover:border-primary/30 transition-colors">
                      <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50/30">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white ${product.badgeColor} shadow-lg`}>
                            {product.icon}
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{product.name}</CardTitle>
                            <CardDescription className="text-base">{product.subtitle}</CardDescription>
                          </div>
                          <div className="ml-auto">
                            <Badge className={`${product.badgeColor} text-white`}>
                              {product.badge}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="grid lg:grid-cols-2 gap-6">
                          {/* Hardware Specifications */}
                          <div>
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                              <Cpu className="h-5 w-5 text-blue-600" />
                              Hardware Specifications
                            </h4>
                            <div className="space-y-3">
                              {product.detailedSpecs.hardware.map((spec, index) => (
                                <Card key={index} className="p-4 bg-blue-50/50 border-blue-200">
                                  <div className="flex justify-between items-start mb-2">
                                    <span className="font-semibold text-blue-800">{spec.label}</span>
                                    <Badge variant="outline" className="text-xs">{spec.value}</Badge>
                                  </div>
                                  <p className="text-sm text-gray-600">{spec.description}</p>
                                </Card>
                              ))}
                            </div>
                          </div>

                          {/* Software Specifications */}
                          <div>
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                              <Monitor className="h-5 w-5 text-green-600" />
                              Software Specifications
                            </h4>
                            <div className="space-y-3">
                              {product.detailedSpecs.software.map((spec, index) => (
                                <Card key={index} className="p-4 bg-green-50/50 border-green-200">
                                  <div className="flex justify-between items-start mb-2">
                                    <span className="font-semibold text-green-800">{spec.label}</span>
                                    <Badge variant="outline" className="text-xs">{spec.value}</Badge>
                                  </div>
                                  <p className="text-sm text-gray-600">{spec.description}</p>
                                </Card>
                              ))}
                            </div>
                          </div>

                          {/* Deployment Specifications */}
                          <div>
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                              <Settings className="h-5 w-5 text-purple-600" />
                              Deployment Specifications
                            </h4>
                            <div className="space-y-3">
                              {product.detailedSpecs.deployment.map((spec, index) => (
                                <Card key={index} className="p-4 bg-purple-50/50 border-purple-200">
                                  <div className="flex justify-between items-start mb-2">
                                    <span className="font-semibold text-purple-800">{spec.label}</span>
                                    <Badge variant="outline" className="text-xs">{spec.value}</Badge>
                                  </div>
                                  <p className="text-sm text-gray-600">{spec.description}</p>
                                </Card>
                              ))}
                            </div>
                          </div>

                          {/* Support Specifications */}
                          <div>
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                              <Headphones className="h-5 w-5 text-orange-600" />
                              Support Specifications
                            </h4>
                            <div className="space-y-3">
                              {product.detailedSpecs.support.map((spec, index) => (
                                <Card key={index} className="p-4 bg-orange-50/50 border-orange-200">
                                  <div className="flex justify-between items-start mb-2">
                                    <span className="font-semibold text-orange-800">{spec.label}</span>
                                    <Badge variant="outline" className="text-xs">{spec.value}</Badge>
                                  </div>
                                  <p className="text-sm text-gray-600">{spec.description}</p>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feature Comparison Tab */}
          <TabsContent value="comparison" className="space-y-8">
            {/* Accuracy Comparison Section */}
            <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <Gauge className="h-6 w-6" />
                  Accuracy Range Comparison
                </CardTitle>
                <CardDescription className="text-orange-700">
                  Detailed accuracy specifications across all APC solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {productsData.map((product) => (
                    <Card key={product.id} className="text-center border-2 border-orange-200">
                      <CardContent className="p-4">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center text-white ${product.badgeColor}`}>
                          {product.icon}
                        </div>
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <div className="text-2xl font-bold text-orange-600 mb-1">
                          {product.specifications.accuracy}
                        </div>
                        <Badge className={`${product.badgeColor} text-white text-xs`}>
                          {product.badge}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Accuracy Conditions and Disclaimer */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Info className="h-5 w-5" />
                      Achieving Optimal Accuracy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-blue-700 font-medium">
                      We offer a range of accuracy levels, from 90% to 99%, depending on specific parameters. 
                      Achieving optimal accuracy requires:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-800">Controlled Environment</h4>
                            <p className="text-sm text-blue-600">Consistent and stable environmental conditions.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-800">Operator Expertise</h4>
                            <p className="text-sm text-blue-600">Proper training and device operation are essential.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-800">Stable Power Supply</h4>
                            <p className="text-sm text-blue-600">Dedicated, 24x7 power systems, proper cabling, POE switches, and high-quality hardware (client's responsibility) are crucial for seamless performance.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-800">Protected Sensor Setup</h4>
                            <p className="text-sm text-blue-600">Secure, weatherproof coverings that safeguard sensors and associated hardware, ensuring reliable operation in varying weather conditions; regular cleaning protocols maintained by the client are recommended to sustain accuracy.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-800">Traffic Flow Management</h4>
                            <p className="text-sm text-blue-600">Proper pathways and traffic movement protocols, including strict traffic guidelines for all employees, to minimize interference and improve data precision.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Card className="bg-yellow-50 border-yellow-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-yellow-800 mb-2">Disclaimer</h4>
                            <p className="text-sm text-yellow-700">
                              *Accuracy may vary based on environmental and operational factors. Adhering to all recommended conditions and maintenance guidelines will help achieve the highest accuracy levels.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  Feature Comparison Matrix
                </CardTitle>
                <CardDescription>
                  Compare features, specifications, and capabilities across all APC solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left p-4 font-bold">Feature Category</th>
                        {productsData.map((product) => (
                          <th key={product.id} className="text-center p-4 min-w-48">
                            <div className="flex flex-col items-center gap-2">
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${product.badgeColor}`}>
                                {product.icon}
                              </div>
                              <div className="font-bold">{product.name}</div>
                              <Badge className={`${product.badgeColor} text-white text-xs`}>
                                {product.badge}
                              </Badge>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Accuracy Comparison */}
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-800">Accuracy</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <Badge variant="outline" className="text-sm">
                              {product.specifications.accuracy.split(' ')[2]}
                            </Badge>
                          </td>
                        ))}
                      </tr>

                      {/* Processing Power */}
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-800">Processing Power</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <div className="text-sm text-gray-600">
                              {product.specifications.processing.includes('8GB') ? '8GB RAM' : 
                               product.specifications.processing.includes('4GB') ? '4GB RAM' : 
                               product.specifications.processing.includes('2GB') ? '2GB RAM' : 'Standard'}
                            </div>
                          </td>
                        ))}
                      </tr>

                      {/* Connectivity */}
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-800">Connectivity</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <div className="text-sm text-gray-600">
                              {product.specifications.connectivity.includes('Wi-Fi 6') ? (
                                <Badge className="bg-green-100 text-green-800">Wi-Fi 6</Badge>
                              ) : product.specifications.connectivity.includes('Wi-Fi 5') ? (
                                <Badge className="bg-blue-100 text-blue-800">Wi-Fi 5</Badge>
                              ) : (
                                <Badge className="bg-gray-100 text-gray-800">Standard</Badge>
                              )}
                            </div>
                          </td>
                        ))}
                      </tr>

                      {/* Support Level */}
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-800">Support Level</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <div className="text-sm text-gray-600">
                              {product.specifications.support.includes('24/7') ? (
                                <Badge className="bg-green-100 text-green-800">24/7</Badge>
                              ) : product.specifications.support.includes('Business') ? (
                                <Badge className="bg-blue-100 text-blue-800">Business Hours</Badge>
                              ) : product.specifications.support.includes('Email') ? (
                                <Badge className="bg-yellow-100 text-yellow-800">Email</Badge>
                              ) : (
                                <Badge className="bg-purple-100 text-purple-800">On-site</Badge>
                              )}
                            </div>
                          </td>
                        ))}
                      </tr>

                      {/* Storage Capacity */}
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-800">Local Storage</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <div className="text-sm text-gray-600">
                              {product.specifications.storage.includes('30 days') ? '30 days' :
                               product.specifications.storage.includes('15 days') ? '15 days' :
                               product.specifications.storage.includes('7 days') ? '7 days' : 'Event duration'}
                            </div>
                          </td>
                        ))}
                      </tr>

                      {/* Deployment Type */}
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-gray-800">Deployment</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <div className="text-sm text-gray-600">
                              {product.specifications.deployment.includes('Turnkey') ? (
                                <Badge className="bg-green-100 text-green-800">Turnkey</Badge>
                              ) : product.specifications.deployment.includes('Semi-professional') ? (
                                <Badge className="bg-blue-100 text-blue-800">Semi-Pro</Badge>
                              ) : product.specifications.deployment.includes('Software') ? (
                                <Badge className="bg-yellow-100 text-yellow-800">Software Only</Badge>
                              ) : (
                                <Badge className="bg-purple-100 text-purple-800">Temporary</Badge>
                              )}
                            </div>
                          </td>
                        ))}
                      </tr>

                      {/* Pricing Comparison */}
                      <tr className="border-b border-gray-100 hover:bg-gray-50 bg-blue-50/30">
                        <td className="p-4 font-semibold text-gray-800">One-time Price</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <div className="text-lg font-bold text-primary">{product.price}</div>
                          </td>
                        ))}
                      </tr>

                      <tr className="border-b border-gray-100 hover:bg-gray-50 bg-green-50/30">
                        <td className="p-4 font-semibold text-gray-800">Monthly Price</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <div className="text-lg font-bold text-accent">{product.monthlyPrice}</div>
                          </td>
                        ))}
                      </tr>

                      <tr className="border-b border-gray-100 hover:bg-gray-50 bg-purple-50/30">
                        <td className="p-4 font-semibold text-gray-800">Rental Price</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <div className="text-lg font-bold text-purple-600">{product.rentalPrice}</div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Best For Section */}
                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {productsData.map((product) => (
                    <Card key={product.id} className="p-4 hover:shadow-lg transition-shadow">
                      <div className="text-center">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center text-white ${product.badgeColor}`}>
                          {product.icon}
                        </div>
                        <h4 className="font-bold mb-2">{product.name}</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                          {product.useCases.slice(0, 3).map((useCase, index) => (
                            <div key={index}>• {useCase}</div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Competitor Comparison Tab */}
          <TabsContent value="competitors" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  APC vs Competitors Analysis
                </CardTitle>
                <CardDescription>
                  See how APC solutions compare against leading competitors in the people counting industry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Market Comparison Overview */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="border-2 border-green-200 bg-green-50/50">
                      <CardHeader className="text-center">
                        <CardTitle className="text-green-800">APC Solutions</CardTitle>
                        <Badge className="bg-green-600 text-white">Our Solutions</Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span>Accuracy Range:</span>
                            <span className="font-bold text-green-700">90-99%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Setup Time:</span>
                            <span className="font-bold text-green-700">1-4 hours</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Price Range:</span>
                            <span className="font-bold text-green-700">₹15K-₹60K</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Support:</span>
                            <span className="font-bold text-green-700">24/7 Available</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Privacy:</span>
                            <span className="font-bold text-green-700">GDPR Compliant</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-red-200 bg-red-50/50">
                      <CardHeader className="text-center">
                        <CardTitle className="text-red-800">Competitor A</CardTitle>
                        <Badge className="bg-red-600 text-white">Traditional Solutions</Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span>Accuracy Range:</span>
                            <span className="font-bold text-red-700">80-90%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Setup Time:</span>
                            <span className="font-bold text-red-700">1-2 days</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Price Range:</span>
                            <span className="font-bold text-red-700">₹80K-₹120K</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Support:</span>
                            <span className="font-bold text-red-700">Business Hours</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Privacy:</span>
                            <span className="font-bold text-red-700">Basic</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-yellow-200 bg-yellow-50/50">
                      <CardHeader className="text-center">
                        <CardTitle className="text-yellow-800">Competitor B</CardTitle>
                        <Badge className="bg-yellow-600 text-white">Cloud-Only</Badge>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span>Accuracy Range:</span>
                            <span className="font-bold text-yellow-700">85-95%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Setup Time:</span>
                            <span className="font-bold text-yellow-700">4-8 hours</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Price Range:</span>
                            <span className="font-bold text-yellow-700">₹50K + ₹8K/month</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Support:</span>
                            <span className="font-bold text-yellow-700">Email Only</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Privacy:</span>
                            <span className="font-bold text-yellow-700">Cloud Dependent</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Detailed Feature Comparison */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Detailed Feature Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-4">Feature</th>
                              <th className="text-center p-4 text-green-700">APC Solutions</th>
                              <th className="text-center p-4 text-red-700">Competitor A</th>
                              <th className="text-center p-4 text-yellow-700">Competitor B</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b hover:bg-gray-50">
                              <td className="p-4 font-semibold">Real-time Analytics</td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                              <td className="text-center p-4"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                              <td className="p-4 font-semibold">Edge Processing</td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                              <td className="text-center p-4"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                              <td className="text-center p-4"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                              <td className="p-4 font-semibold">Mobile App</td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                              <td className="p-4 font-semibold">API Integration</td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                              <td className="p-4 font-semibold">Local Data Storage</td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                              <td className="text-center p-4"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                              <td className="p-4 font-semibold">Professional Installation</td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                              <td className="text-center p-4"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                              <td className="p-4 font-semibold">24/7 Support</td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                              <td className="text-center p-4"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                              <td className="text-center p-4"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                              <td className="p-4 font-semibold">Flexible Pricing</td>
                              <td className="text-center p-4"><CheckCircle className="h-5 w-5 text-green-600 mx-auto" /></td>
                              <td className="text-center p-4"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                              <td className="text-center p-4"><X className="h-5 w-5 text-red-600 mx-auto" /></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Key Advantages */}
                  <Card className="bg-gradient-to-r from-green-50 to-blue-50">
                    <CardHeader>
                      <CardTitle className="text-green-800">Why Choose APC Solutions?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-green-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-green-800">Higher Accuracy</h4>
                            <p className="text-sm text-gray-600">Up to 99% accuracy vs 80-95% competitors</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-blue-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-blue-800">Faster Deployment</h4>
                            <p className="text-sm text-gray-600">1-4 hours vs 1-2 days setup time</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <DollarSign className="h-5 w-5 text-purple-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-purple-800">Better Value</h4>
                            <p className="text-sm text-gray-600">Lower total cost of ownership</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-green-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-green-800">Privacy First</h4>
                            <p className="text-sm text-gray-600">GDPR compliant with local processing</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Headphones className="h-5 w-5 text-orange-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-orange-800">Superior Support</h4>
                            <p className="text-sm text-gray-600">24/7 support vs business hours only</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Zap className="h-5 w-5 text-yellow-600 mt-1" />
                          <div>
                            <h4 className="font-semibold text-yellow-800">Edge Processing</h4>
                            <p className="text-sm text-gray-600">Real-time processing without cloud dependency</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}