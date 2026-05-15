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
  Phone
} from 'lucide-react';

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
    rentalPrice: '₹8,000/month',
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
      accuracy: 'Up to 99% (±1% in optimal conditions)',
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
    rentalPrice: '₹6,000/month',
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
      accuracy: 'Up to 95% (±2% in standard conditions)',
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
    rentalPrice: '₹4,500/month',
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
      accuracy: 'Up to 90% (varies by existing camera quality)',
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
      accuracy: 'Up to 92% (optimized for crowd conditions)',
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
            <TabsList className="grid w-full max-w-4xl grid-cols-4 bg-white shadow-xl border">
              <TabsTrigger value="overview" className="flex items-center gap-2 py-3">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Product</span> Overview
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
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Description & Features */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-3">Product Description</h4>
                        <p className="text-gray-700 leading-relaxed">{selectedProduct.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold mb-4">Key Features</h4>
                        <div className="space-y-3">
                          {selectedProduct.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          onClick={() => onPageChange('demo')}
                          className="flex-1 bg-primary hover:bg-primary/90"
                        >
                          <Rocket className="h-4 w-4 mr-2" />
                          Start Free POC
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => toggleProductLike(selectedProduct.id)}
                          className={likedProducts.includes(selectedProduct.id) ? 'text-red-500 border-red-500' : ''}
                        >
                          <Heart className={`h-4 w-4 ${likedProducts.includes(selectedProduct.id) ? 'fill-current' : ''}`} />
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => toggleProductComparison(selectedProduct.id)}
                          className={comparisonProducts.includes(selectedProduct.id) ? 'text-blue-500 border-blue-500' : ''}
                        >
                          <BarChart3 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Right Column - Use Cases & Quick Specs */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-4">Perfect For</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {selectedProduct.useCases.map((useCase, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <Target className="h-5 w-5 text-primary flex-shrink-0" />
                              <span className="text-gray-700">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold mb-4">Quick Specifications</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">Accuracy</span>
                            <span className="text-primary font-semibold">{selectedProduct.specifications.accuracy.split(' ')[2]}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">Processing</span>
                            <span className="text-gray-700 text-sm">APC EdgeBox™</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">Support</span>
                            <span className="text-gray-700 text-sm">{selectedProduct.specifications.support.split(',')[0]}</span>
                          </div>
                        </div>
                      </div>

                      {selectedProduct.recommended && (
                        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-center gap-2 text-blue-700">
                            <Award className="h-5 w-5 text-yellow-500" />
                            <span className="font-medium">⭐ Recommended: {selectedProduct.recommended}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Detailed Specs Tab */}
          <TabsContent value="detailed" className="space-y-8">
            {selectedProduct && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Detailed Technical Specifications - {selectedProduct.name}
                    </CardTitle>
                    <CardDescription>
                      Comprehensive technical details and specifications
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Hardware Specifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-blue-600" />
                      Hardware Specifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedProduct.detailedSpecs.hardware.map((spec, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                          <div className="flex items-start gap-3 mb-2">
                            <Camera className="h-5 w-5 text-blue-600 mt-1" />
                            <div>
                              <h4 className="font-semibold text-gray-900">{spec.label}</h4>
                              <div className="text-lg font-bold text-blue-600 mb-1">{spec.value}</div>
                              <p className="text-sm text-gray-600">{spec.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Software Specifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Monitor className="h-5 w-5 text-green-600" />
                      Software & Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedProduct.detailedSpecs.software.map((spec, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                          <div className="flex items-start gap-3 mb-2">
                            <Activity className="h-5 w-5 text-green-600 mt-1" />
                            <div>
                              <h4 className="font-semibold text-gray-900">{spec.label}</h4>
                              <div className="text-lg font-bold text-green-600 mb-1">{spec.value}</div>
                              <p className="text-sm text-gray-600">{spec.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Deployment Specifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-purple-600" />
                      Deployment & Installation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedProduct.detailedSpecs.deployment.map((spec, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                          <div className="flex items-start gap-3 mb-2">
                            <Cloud className="h-5 w-5 text-purple-600 mt-1" />
                            <div>
                              <h4 className="font-semibold text-gray-900">{spec.label}</h4>
                              <div className="text-lg font-bold text-purple-600 mb-1">{spec.value}</div>
                              <p className="text-sm text-gray-600">{spec.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Support Specifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-orange-600" />
                      Support & Warranty
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedProduct.detailedSpecs.support.map((spec, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                          <div className="flex items-start gap-3 mb-2">
                            <Headphones className="h-5 w-5 text-orange-600 mt-1" />
                            <div>
                              <h4 className="font-semibold text-gray-900">{spec.label}</h4>
                              <div className="text-lg font-bold text-orange-600 mb-1">{spec.value}</div>
                              <p className="text-sm text-gray-600">{spec.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Feature Comparison Tab */}
          <TabsContent value="comparison" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Feature Comparison Matrix
                </CardTitle>
                <CardDescription>
                  Compare all APC solutions side by side
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold">Feature</th>
                        {productsData.map((product) => (
                          <th key={product.id} className="text-center p-4 min-w-[150px]">
                            <div className="flex flex-col items-center gap-2">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${product.badgeColor}`}>
                                {product.icon}
                              </div>
                              <div className="font-semibold">{product.name}</div>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Accuracy</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <Badge variant="outline">{product.specifications.accuracy.split(' ')[2]}</Badge>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">One-time Price</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <div className="font-bold text-primary">{product.price}</div>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Monthly Price</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <div className="font-bold text-accent">{product.monthlyPrice}</div>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Support Level</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <div className="text-sm">{product.specifications.support.split(',')[0]}</div>
                          </td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Best For</td>
                        {productsData.map((product) => (
                          <td key={product.id} className="text-center p-4">
                            <div className="text-sm text-gray-600">{product.useCases[0]}</div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Competitors Tab */}
          <TabsContent value="competitors" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  APC vs Competitors
                </CardTitle>
                <CardDescription>
                  See how APC solutions compare to market alternatives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-green-600">APC Advantages</h4>
                    <div className="space-y-4">
                      {[
                        'Edge processing with APC EdgeBox™ - no cloud dependency',
                        'GDPR compliant by design with local data processing',
                        '99% accuracy with premium AI cameras',
                        'Complete turnkey solutions with professional installation',
                        '24/7 support with guaranteed response times',
                        'Flexible pricing: one-time, subscription, or rental',
                        'Works with existing camera infrastructure',
                        'Real-time analytics with mobile app access'
                      ].map((advantage, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-red-600">Competitor Limitations</h4>
                    <div className="space-y-4">
                      {[
                        'Cloud-only solutions with data privacy concerns',
                        'Hardware-only vendors without analytics platform',
                        'Lower accuracy rates (80-85% typical)',
                        'Complex installation requiring system integrators',
                        'Limited support with slow response times',
                        'High recurring costs with vendor lock-in',
                        'Compatibility issues with existing infrastructure',
                        'Basic reporting without real-time insights'
                      ].map((limitation, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}