import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { ProductDetailModal } from './ProductDetailModal';
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
  Lock
} from 'lucide-react';

interface ProductsHubProps {
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
    recommended: 'Best for enterprises & high-accuracy needs'
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
    icon: <BarChart3 className="h-6 w-6" />
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
    icon: <Wifi className="h-6 w-6" />
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
    icon: <Music className="h-6 w-6" />
  }
];

export function ProductsHub({ onPageChange }: ProductsHubProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedComparisonProducts, setSelectedComparisonProducts] = useState<string[]>([]);
  const [showPricingCalculator, setShowPricingCalculator] = useState(false);
  const [customerType, setCustomerType] = useState('retail');
  const [locations, setLocations] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [likedProducts, setLikedProducts] = useState<string[]>([]);
  const [showProductDemo, setShowProductDemo] = useState<string | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  // Interactive features
  const toggleProductLike = (productId: string) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleComparisonProduct = (productId: string) => {
    setSelectedComparisonProducts(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : prev.length < 3 
          ? [...prev, productId]
          : prev
    );
  };

  const getRecommendedProduct = () => {
    if (customerType === 'retail') return productsData.find(p => p.id === 'core');
    if (customerType === 'budget') return productsData.find(p => p.id === 'flex');
    if (customerType === 'existing') return productsData.find(p => p.id === 'link');
    return productsData.find(p => p.id === 'eventsense');
  };

  const calculatePricing = (product: Product) => {
    const basePrice = parseInt(product.price.replace('₹', '').replace(',', ''));
    const monthlyPrice = parseInt(product.monthlyPrice.split('/')[0].replace('₹', '').replace(',', ''));
    
    return {
      oneTime: basePrice * locations,
      monthly: monthlyPrice * locations,
      yearly: monthlyPrice * locations * 12 * 0.9, // 10% discount for yearly
      savings: (basePrice * locations) - (monthlyPrice * locations * 24)
    };
  };

  // Animation trigger
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Enhanced Header with Interactive Elements */}
      <section className="relative bg-gradient-to-r from-primary via-blue-600 to-accent text-white py-12 lg:py-20 overflow-hidden">
        {/* Animated Background Elements */}
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
            
            {/* Interactive Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                onClick={() => setShowRecommendations(true)}
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
              >
                <Lightbulb className="h-4 w-4 mr-2" />
                Find My Perfect Solution
              </Button>
              <Button 
                onClick={() => setShowComparison(true)}
                className="bg-accent hover:bg-accent/90 text-white"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Compare Products
              </Button>
              <Button 
                onClick={() => setShowPricingCalculator(true)}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <Calculator className="h-4 w-4 mr-2" />
                Pricing Calculator
              </Button>
            </div>
            
            {/* Enhanced Quick Stats with Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors">4</div>
                <div className="text-blue-100 text-sm">Product Solutions</div>
                <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                  <div className="bg-yellow-400 h-1 rounded-full w-full"></div>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-green-300 transition-colors">90-99%</div>
                <div className="text-blue-100 text-sm">Accuracy Range</div>
                <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                  <div className="bg-green-400 h-1 rounded-full w-4/5"></div>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">₹35K-₹60K</div>
                <div className="text-blue-100 text-sm">Price Range</div>
                <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                  <div className="bg-purple-400 h-1 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">15-day</div>
                <div className="text-blue-100 text-sm">Free Trial</div>
                <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                  <div className="bg-orange-400 h-1 rounded-full w-full"></div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>99% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="h-4 w-4" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>15-Min Setup</span>
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
                <span>{productsData.length} Solutions Available</span>
              </div>
              {selectedComparisonProducts.length > 0 && (
                <Badge className="bg-blue-500 text-white">
                  <BarChart3 className="h-3 w-3 mr-1" />
                  {selectedComparisonProducts.length} Selected for Comparison
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
            {/* Quick Comparison Table */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Quick Comparison
                </CardTitle>
                <CardDescription>
                  Compare all APC solutions at a glance to find your perfect match
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Solution</th>
                        <th className="text-center p-4">Accuracy</th>
                        <th className="text-center p-4">One-time</th>
                        <th className="text-center p-4">Monthly</th>
                        <th className="text-center p-4">Best For</th>
                        <th className="text-center p-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productsData.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${product.badgeColor}`}>
                                {product.icon}
                              </div>
                              <div>
                                <div className="font-semibold">{product.name}</div>
                                <div className="text-sm text-gray-600">{product.subtitle}</div>
                              </div>
                            </div>
                          </td>
                          <td className="text-center p-4">
                            <Badge variant="outline">{product.specifications.accuracy.split(' ')[2]}</Badge>
                          </td>
                          <td className="text-center p-4 font-semibold text-primary">{product.price}</td>
                          <td className="text-center p-4 font-semibold text-accent">{product.monthlyPrice}</td>
                          <td className="text-center p-4">
                            <div className="text-sm text-gray-600">
                              {product.useCases[0]}
                            </div>
                          </td>
                          <td className="text-center p-4">
                            <Button 
                              size="sm" 
                              onClick={() => setSelectedProduct(product)}
                              className="bg-primary hover:bg-primary/90"
                            >
                              <Eye className="h-3 w-3 mr-1" />
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Product Cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {productsData.map((product, index) => (
                <Card 
                  key={product.id} 
                  className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    product.popular ? 'border-2 border-primary ring-4 ring-primary/20' : 'border border-gray-200'
                  } ${isAnimating ? 'animate-fade-in' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="relative">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.badgeColor}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <div className="flex items-start justify-between relative z-10">
                      <div className="flex items-center gap-3">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white ${product.badgeColor} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {product.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {product.name}
                          </CardTitle>
                          <CardDescription className="text-base">{product.subtitle}</CardDescription>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        {product.popular && (
                          <Badge className="bg-yellow-500 text-white animate-pulse">
                            <Star className="h-3 w-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                        
                        {/* Interactive Action Buttons */}
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleProductLike(product.id)}
                            className={`p-2 ${likedProducts.includes(product.id) ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
                          >
                            <Heart className={`h-4 w-4 ${likedProducts.includes(product.id) ? 'fill-current' : ''}`} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleComparisonProduct(product.id)}
                            className={`p-2 ${selectedComparisonProducts.includes(product.id) ? 'text-blue-500' : 'text-gray-400'} hover:text-blue-500`}
                          >
                            <BarChart3 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowProductDemo(product.id)}
                            className="p-2 text-gray-400 hover:text-green-500"
                          >
                            <Play className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {product.recommended && (
                      <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-3 mt-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-green-100/20 animate-pulse"></div>
                        <div className="flex items-center gap-2 text-blue-700 text-sm relative z-10">
                          <Award className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium">⭐ Recommended: {product.recommended}</span>
                        </div>
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>

                    {/* Interactive Pricing Display */}
                    <div className="bg-gradient-to-r from-gray-50 via-blue-50 to-green-50 rounded-xl p-5 border border-gray-200 group-hover:border-primary/30 transition-colors">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center group/price hover:scale-105 transition-transform cursor-pointer p-2 rounded-lg hover:bg-white/50">
                          <div className="text-xl font-bold text-primary group-hover/price:text-blue-600 transition-colors">
                            {product.price}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">One-time</div>
                          <div className="text-xs text-green-600 mt-1">Best Value</div>
                        </div>
                        <div className="text-center group/price hover:scale-105 transition-transform cursor-pointer p-2 rounded-lg hover:bg-white/50">
                          <div className="text-xl font-bold text-accent group-hover/price:text-green-600 transition-colors">
                            {product.monthlyPrice}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">Monthly</div>
                          <div className="text-xs text-blue-600 mt-1">Flexible</div>
                        </div>
                        <div className="text-center group/price hover:scale-105 transition-transform cursor-pointer p-2 rounded-lg hover:bg-white/50">
                          <div className="text-xl font-bold text-purple-600 group-hover/price:text-purple-700 transition-colors">
                            {product.rentalPrice}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">Rental</div>
                          <div className="text-xs text-purple-600 mt-1">Try First</div>
                        </div>
                      </div>
                      
                      {/* Pricing Calculator Link */}
                      <div className="text-center mt-3 pt-3 border-t border-gray-200">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setShowPricingCalculator(true)}
                          className="text-primary hover:text-primary/80 text-xs"
                        >
                          <Calculator className="h-3 w-3 mr-1" />
                          Calculate for multiple locations
                        </Button>
                      </div>
                    </div>

                    {/* Enhanced Key Features */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">Key Features</h4>
                        <Badge variant="outline" className="text-xs">
                          {product.features.length} features
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 text-sm p-2 rounded-lg hover:bg-gray-50 transition-colors group/feature">
                            <CheckCircle className="h-4 w-4 text-green-500 group-hover/feature:text-green-600 transition-colors" />
                            <span className="text-gray-700 group-hover/feature:text-gray-900 transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                        {product.features.length > 4 && (
                          <div className="text-center pt-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setSelectedProduct(product)}
                              className="text-primary text-xs"
                            >
                              +{product.features.length - 4} more features
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Accuracy & Performance Indicators */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Accuracy Level</span>
                        <span className="text-sm font-bold text-primary">
                          {product.specifications.accuracy.split(' ')[2]}
                        </span>
                      </div>
                      <Progress 
                        value={parseInt(product.specifications.accuracy.split(' ')[2].replace('%', ''))} 
                        className="h-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>90%</span>
                        <span>95%</span>
                        <span>99%</span>
                      </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex flex-col gap-3 pt-2">
                      <div className="flex gap-3">
                        <Button 
                          onClick={() => setSelectedProduct(product)}
                          className="flex-1 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button 
                          onClick={() => onPageChange('demo')}
                          variant="outline"
                          className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                          <Rocket className="h-4 w-4 mr-2" />
                          Start POC
                        </Button>
                      </div>
                      
                      {/* Quick Action Buttons */}
                      <div className="flex justify-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setShowProductDemo(product.id)}
                          className="text-gray-600 hover:text-green-600 flex items-center gap-1"
                        >
                          <Video className="h-3 w-3" />
                          Demo
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => onPageChange('contact')}
                          className="text-gray-600 hover:text-blue-600 flex items-center gap-1"
                        >
                          <MessageCircle className="h-3 w-3" />
                          Ask Expert
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-gray-600 hover:text-purple-600 flex items-center gap-1"
                        >
                          <Share2 className="h-3 w-3" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Detailed Specifications Tab */}
          <TabsContent value="detailed" className="space-y-8">
            {/* Product Selection */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {productsData.map((product) => (
                <Card 
                  key={product.id} 
                  className={`cursor-pointer hover:shadow-lg transition-all duration-300 ${
                    selectedProduct?.id === product.id ? 'border-2 border-primary' : ''
                  }`}
                  onClick={() => setSelectedProduct(product)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${product.badgeColor}`}>
                        {product.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{product.name}</div>
                        <div className="text-xs text-gray-600">{product.price}</div>
                      </div>
                    </div>
                    {selectedProduct?.id === product.id && (
                      <Badge className="w-full justify-center bg-primary text-white">
                        Selected
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Specifications */}
            {selectedProduct ? (
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white ${selectedProduct.badgeColor}`}>
                      {selectedProduct.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{selectedProduct.name}</CardTitle>
                      <CardDescription className="text-lg">{selectedProduct.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  {/* Technical Specifications */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-primary" />
                      Technical Specifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="flex gap-4">
                          <div className="w-24 text-sm font-medium text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </div>
                          <div className="flex-1 text-sm text-gray-900">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Complete Feature List */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Complete Feature Set
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      Ideal Use Cases
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {selectedProduct.useCases.map((useCase, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700">
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Pricing */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      Pricing Options
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-primary/10 rounded-xl p-6 text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">One-time Purchase</h4>
                        <div className="text-2xl font-bold text-primary mb-2">{selectedProduct.price}</div>
                        <p className="text-sm text-gray-600">Complete ownership with perpetual license</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-accent/10 rounded-xl p-6 text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">Subscription Model</h4>
                        <div className="text-2xl font-bold text-accent mb-2">{selectedProduct.monthlyPrice}</div>
                        <p className="text-sm text-gray-600">Monthly payments with ongoing support</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-500/10 rounded-xl p-6 text-center">
                        <h4 className="font-semibold text-gray-900 mb-2">Rental Option</h4>
                        <div className="text-2xl font-bold text-purple-600 mb-2">{selectedProduct.rentalPrice}</div>
                        <p className="text-sm text-gray-600">Flexible rental with minimum terms</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                    <Button 
                      onClick={() => onPageChange('demo')}
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <Target className="h-4 w-4 mr-2" />
                      Start Free 15-Day POC
                    </Button>
                    <Button 
                      onClick={() => onPageChange('contact')}
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary/5"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Speak with Expert
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Specs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="p-8 text-center">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Select a Product</h3>
                <p className="text-gray-600">
                  Choose a product above to view detailed specifications and technical details.
                </p>
              </Card>
            )}
          </TabsContent>

          {/* Feature Comparison Tab */}
          <TabsContent value="comparison" className="space-y-8">
            {/* Comprehensive Feature Comparison Matrix */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Complete Feature Comparison Matrix
                </CardTitle>
                <CardDescription>
                  Compare all features across APC solutions to make an informed decision
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-4 font-semibold">Feature Category</th>
                        <th className="text-center p-4 font-semibold">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-xs">
                              <Users className="h-4 w-4" />
                            </div>
                            APC Core
                          </div>
                        </th>
                        <th className="text-center p-4 font-semibold">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-6 h-6 bg-accent rounded flex items-center justify-center text-white text-xs">
                              <BarChart3 className="h-4 w-4" />
                            </div>
                            APC Flex
                          </div>
                        </th>
                        <th className="text-center p-4 font-semibold">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs">
                              <Wifi className="h-4 w-4" />
                            </div>
                            APC Link
                          </div>
                        </th>
                        <th className="text-center p-4 font-semibold">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-white text-xs">
                              <Music className="h-4 w-4" />
                            </div>
                            EventSense
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Accuracy & Performance */}
                      <tr className="border-b bg-blue-50/30">
                        <td className="p-4 font-semibold text-blue-900" colSpan={5}>
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4" />
                            Accuracy & Performance
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Counting Accuracy</td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">Up to 99%</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">Up to 95%</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-yellow-100 text-yellow-800">Up to 90%</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">Up to 92%</Badge>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Processing Speed</td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-gray-600 mt-1">Real-time</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-gray-600 mt-1">Real-time</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-yellow-500 mx-auto" />
                          <div className="text-xs text-gray-600 mt-1">Near real-time</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-gray-600 mt-1">Real-time</div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Low Light Performance</td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-yellow-100 text-yellow-800">Good</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-gray-100 text-gray-800">Depends on Camera</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-yellow-100 text-yellow-800">Good</Badge>
                        </td>
                      </tr>

                      {/* Hardware & Setup */}
                      <tr className="border-b bg-green-50/30">
                        <td className="p-4 font-semibold text-green-900" colSpan={5}>
                          <div className="flex items-center gap-2">
                            <Cpu className="h-4 w-4" />
                            Hardware & Setup
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Cameras Included</td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-gray-600 mt-1">Premium AI</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-gray-600 mt-1">Standard</div>
                        </td>
                        <td className="text-center p-4">
                          <X className="h-4 w-4 text-red-500 mx-auto" />
                          <div className="text-xs text-gray-600 mt-1">Use Existing</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-gray-600 mt-1">Portable</div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">APC EdgeBox™</td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">Premium (8GB)</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">Standard (4GB)</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">Basic</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-purple-100 text-purple-800">Portable</Badge>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Installation Type</td>
                        <td className="text-center p-4">
                          <Badge className="bg-blue-100 text-blue-800">Professional</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-blue-100 text-blue-800">Semi-Professional</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">Software Only</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-orange-100 text-orange-800">Rapid Deploy</Badge>
                        </td>
                      </tr>

                      {/* Analytics & Features */}
                      <tr className="border-b bg-purple-50/30">
                        <td className="p-4 font-semibold text-purple-900" colSpan={5}>
                          <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            Analytics & Features
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Real-time Dashboard</td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-yellow-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Heatmap Analytics</td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">Advanced</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-yellow-100 text-yellow-800">Basic</Badge>
                        </td>
                        <td className="text-center p-4">
                          <X className="h-4 w-4 text-red-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-orange-100 text-orange-800">Crowd Density</Badge>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Custom Reports</td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-yellow-500 mx-auto" />
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Mobile App Access</td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">Full Featured</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">Standard</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-yellow-100 text-yellow-800">Basic</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">Event Focused</Badge>
                        </td>
                      </tr>

                      {/* Support & Services */}
                      <tr className="border-b bg-orange-50/30">
                        <td className="p-4 font-semibold text-orange-900" colSpan={5}>
                          <div className="flex items-center gap-2">
                            <Headphones className="h-4 w-4" />
                            Support & Services
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Support Hours</td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">24/7</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-yellow-100 text-yellow-800">Business Hours</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-orange-100 text-orange-800">Email Only</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">On-site Available</Badge>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Training Included</td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-gray-600 mt-1">Comprehensive</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-gray-600 mt-1">Standard</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-yellow-500 mx-auto" />
                          <div className="text-xs text-gray-600 mt-1">Online Only</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-gray-600 mt-1">Event-specific</div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Warranty Period</td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">3 Years</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">2 Years</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-yellow-100 text-yellow-800">1 Year</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-orange-100 text-orange-800">Event Duration</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* ROI Comparison Calculator */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-green-600" />
                  ROI Comparison Calculator
                </CardTitle>
                <CardDescription>
                  Calculate and compare potential ROI across different APC solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Monthly Operational Cost</label>
                    <input
                      type="number"
                      placeholder="₹50,000"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Expected Efficiency Gain</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                      <option value="15">Conservative (15%)</option>
                      <option value="25">Moderate (25%)</option>
                      <option value="35">Aggressive (35%)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Locations</label>
                    <input
                      type="number"
                      min="1"
                      value={locations}
                      onChange={(e) => setLocations(parseInt(e.target.value) || 1)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {productsData.map((product) => {
                    const pricing = calculatePricing(product);
                    const monthlySavings = 50000 * 0.25 * locations; // Example calculation
                    const paybackMonths = pricing.oneTime / monthlySavings;
                    const yearlyROI = ((monthlySavings * 12 - pricing.oneTime) / pricing.oneTime) * 100;

                    return (
                      <div key={product.id} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-6 h-6 rounded flex items-center justify-center text-white text-xs ${product.badgeColor}`}>
                            {product.icon}
                          </div>
                          <span className="font-semibold text-sm">{product.name}</span>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Investment:</span>
                            <span className="font-semibold">₹{pricing.oneTime.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Monthly Savings:</span>
                            <span className="font-semibold text-green-600">₹{monthlySavings.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Payback Period:</span>
                            <span className="font-semibold">{paybackMonths.toFixed(1)} months</span>
                          </div>
                          <div className="flex justify-between">
                            <span>1-Year ROI:</span>
                            <span className={`font-semibold ${yearlyROI > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {yearlyROI.toFixed(0)}%
                            </span>
                          </div>
                        </div>
                        
                        <div className="mt-3 pt-3 border-t">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${Math.min(yearlyROI, 100)}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-600 mt-1 text-center">ROI Progress</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Competitor Comparison Tab */}
          <TabsContent value="competitors" className="space-y-8">
            {/* Market Position Overview */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  APC vs Market Leaders
                </CardTitle>
                <CardDescription>
                  See how APC Solutions compares to leading competitors in the people counting industry
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                    <div className="text-sm text-gray-600">Industry-leading accuracy</div>
                    <div className="text-xs text-green-600 mt-1">↑5% above average</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                    <div className="text-sm text-gray-600">Lower total cost of ownership</div>
                    <div className="text-xs text-green-600 mt-1">↓ vs premium competitors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">15 min</div>
                    <div className="text-sm text-gray-600">Fastest deployment time</div>
                    <div className="text-xs text-green-600 mt-1">↑8x faster than average</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Competitor Analysis */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Comprehensive Competitor Comparison
                </CardTitle>
                <CardDescription>
                  Feature-by-feature comparison with major market players
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-4 font-semibold">Features</th>
                        <th className="text-center p-4 font-semibold">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                              <span className="text-xs font-bold">APC</span>
                            </div>
                            APC Solutions
                          </div>
                        </th>
                        <th className="text-center p-4 font-semibold">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white">
                              <span className="text-xs font-bold">A</span>
                            </div>
                            Competitor A
                          </div>
                        </th>
                        <th className="text-center p-4 font-semibold">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white">
                              <span className="text-xs font-bold">B</span>
                            </div>
                            Competitor B
                          </div>
                        </th>
                        <th className="text-center p-4 font-semibold">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-8 h-8 bg-gray-500 rounded flex items-center justify-center text-white">
                              <span className="text-xs font-bold">C</span>
                            </div>
                            Competitor C
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Pricing */}
                      <tr className="border-b bg-green-50/30">
                        <td className="p-4 font-semibold text-green-900" colSpan={5}>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4" />
                            Pricing & Value
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Starting Price</td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">₹35,000</Badge>
                          <div className="text-xs text-green-600 mt-1">Best Value</div>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-red-100 text-red-800">₹85,000</Badge>
                          <div className="text-xs text-red-600 mt-1">+143% higher</div>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-orange-100 text-orange-800">₹65,000</Badge>
                          <div className="text-xs text-orange-600 mt-1">+86% higher</div>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-gray-100 text-gray-800">₹120,000</Badge>
                          <div className="text-xs text-gray-600 mt-1">+243% higher</div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Monthly Subscription</td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">From ₹3,000</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-red-100 text-red-800">₹8,000</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-orange-100 text-orange-800">₹6,500</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-gray-100 text-gray-800">₹12,000</Badge>
                        </td>
                      </tr>

                      {/* Technical Capabilities */}
                      <tr className="border-b bg-blue-50/30">
                        <td className="p-4 font-semibold text-blue-900" colSpan={5}>
                          <div className="flex items-center gap-2">
                            <Cpu className="h-4 w-4" />
                            Technical Capabilities
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Maximum Accuracy</td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">99%</Badge>
                          <div className="text-xs text-green-600 mt-1">Industry Leading</div>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-yellow-100 text-yellow-800">94%</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-yellow-100 text-yellow-800">96%</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-orange-100 text-orange-800">91%</Badge>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Edge Processing</td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-green-600 mt-1">EdgeBox™ Included</div>
                        </td>
                        <td className="text-center p-4">
                          <X className="h-4 w-4 text-red-500 mx-auto" />
                          <div className="text-xs text-red-600 mt-1">Cloud Only</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-yellow-500 mx-auto" />
                          <div className="text-xs text-yellow-600 mt-1">Optional ($$)</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-green-600 mt-1">Available</div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">GDPR Compliance</td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-green-600 mt-1">Built-in</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-yellow-500 mx-auto" />
                          <div className="text-xs text-yellow-600 mt-1">Additional Config</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-green-600 mt-1">Certified</div>
                        </td>
                        <td className="text-center p-4">
                          <X className="h-4 w-4 text-red-500 mx-auto" />
                          <div className="text-xs text-red-600 mt-1">Limited</div>
                        </td>
                      </tr>

                      {/* Support & Services */}
                      <tr className="border-b bg-purple-50/30">
                        <td className="p-4 font-semibold text-purple-900" colSpan={5}>
                          <div className="flex items-center gap-2">
                            <HeartHandshake className="h-4 w-4" />
                            Support & Services
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Setup Time</td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">15 minutes</Badge>
                          <div className="text-xs text-green-600 mt-1">Fastest in Industry</div>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-red-100 text-red-800">2-3 hours</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-orange-100 text-orange-800">1-2 hours</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-gray-100 text-gray-800">4-6 hours</Badge>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">Free Trial Period</td>
                        <td className="text-center p-4">
                          <Badge className="bg-green-100 text-green-800">15 Days</Badge>
                          <div className="text-xs text-green-600 mt-1">Full Features</div>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-red-100 text-red-800">7 Days</Badge>
                        </td>
                        <td className="text-center p-4">
                          <Badge className="bg-orange-100 text-orange-800">10 Days</Badge>
                        </td>
                        <td className="text-center p-4">
                          <X className="h-4 w-4 text-red-500 mx-auto" />
                          <div className="text-xs text-red-600 mt-1">No Trial</div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">24/7 Support</td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-green-600 mt-1">Premium Plans</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-yellow-500 mx-auto" />
                          <div className="text-xs text-yellow-600 mt-1">Enterprise Only</div>
                        </td>
                        <td className="text-center p-4">
                          <X className="h-4 w-4 text-red-500 mx-auto" />
                          <div className="text-xs text-red-600 mt-1">Business Hours</div>
                        </td>
                        <td className="text-center p-4">
                          <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          <div className="text-xs text-green-600 mt-1">All Plans</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose APC */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Why Choose APC Solutions?
                </CardTitle>
                <CardDescription>
                  Key differentiators that make APC the preferred choice for enterprises
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Best Value Proposition</h4>
                      <p className="text-sm text-gray-600">40-60% lower total cost of ownership compared to premium competitors while maintaining superior quality.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Fastest Deployment</h4>
                      <p className="text-sm text-gray-600">15-minute setup time vs industry average of 2-4 hours. Get started immediately with minimal disruption.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Privacy by Design</h4>
                      <p className="text-sm text-gray-600">Built-in GDPR compliance with no facial recognition or personal data storage requirements.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Industry-Leading Accuracy</h4>
                      <p className="text-sm text-gray-600">Up to 99% accuracy with AI-powered computer vision, 5% higher than industry average.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <HeartHandshake className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Support</h4>
                      <p className="text-sm text-gray-600">24/7 support, comprehensive training, and dedicated customer success manager for enterprise clients.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Edge-First Architecture</h4>
                      <p className="text-sm text-gray-600">APC EdgeBox™ included for local processing, reducing latency and ensuring data privacy.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Enhanced CTA Section with Social Proof */}
        <Card className="mt-12 bg-gradient-to-r from-primary/5 via-blue-50/50 to-accent/5 border-primary/20 overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <CardContent className="p-8 text-center relative z-10">
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold border-2 border-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Join 200+ Businesses Already Using APC
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              Our product experts can help you select the perfect APC solution based on your specific requirements, budget, and use case. 
              <span className="text-primary font-medium"> Free consultation • No obligations • Expert guidance</span>
            </p>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>15-min Setup</span>
              </div>
              <div className="flex items-center gap-1">
                <HeartHandshake className="h-4 w-4 text-red-500" />
                <span>Expert Support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => onPageChange('demo')}
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Rocket className="h-4 w-4 mr-2" />
                Start Free 15-Day POC
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                onClick={() => onPageChange('contact')}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Users className="h-4 w-4 mr-2" />
                Speak with Expert
              </Button>
            </div>
            
            {/* Urgency Indicator */}
            <div className="mt-4 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1">
                <Timer className="h-3 w-3" />
                Limited time: Free setup worth ₹15,000 with any POC
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Modals and Overlays */}
      
      {/* Product Recommendation Modal */}
      {showRecommendations && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-lg w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  Find Your Perfect Solution
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowRecommendations(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">What best describes your use case?</p>
              
              <div className="space-y-2">
                {[
                  { id: 'retail', label: 'Retail Store / Shopping Mall', icon: <ShoppingCart className="h-4 w-4" /> },
                  { id: 'office', label: 'Corporate Office / Campus', icon: <Building className="h-4 w-4" /> },
                  { id: 'budget', label: 'Budget-Conscious Deployment', icon: <DollarSign className="h-4 w-4" /> },
                  { id: 'existing', label: 'Have Existing Cameras', icon: <Camera className="h-4 w-4" /> },
                  { id: 'event', label: 'Event / Temporary Setup', icon: <Calendar className="h-4 w-4" /> }
                ].map((option) => (
                  <Button
                    key={option.id}
                    variant={customerType === option.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setCustomerType(option.id)}
                  >
                    {option.icon}
                    <span className="ml-2">{option.label}</span>
                  </Button>
                ))}
              </div>
              
              {customerType && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Recommended for you:</h4>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${getRecommendedProduct()?.badgeColor}`}>
                      {getRecommendedProduct()?.icon}
                    </div>
                    <div>
                      <div className="font-medium">{getRecommendedProduct()?.name}</div>
                      <div className="text-sm text-gray-600">{getRecommendedProduct()?.price}</div>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-3"
                    onClick={() => {
                      setSelectedProduct(getRecommendedProduct() || null);
                      setShowRecommendations(false);
                      setActiveTab('detailed');
                    }}
                  >
                    View Recommended Solution
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Enhanced Pricing Calculator Modal */}
      {showPricingCalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-green-500" />
                  Advanced Pricing & ROI Calculator
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowPricingCalculator(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>
                Calculate costs, compare plans, and estimate ROI for your people counting investment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Input Parameters */}
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Locations</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={locations}
                    onChange={(e) => setLocations(parseInt(e.target.value) || 1)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Business Type</label>
                  <select 
                    value={customerType}
                    onChange={(e) => setCustomerType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  >
                    <option value="retail">Retail Store</option>
                    <option value="office">Corporate Office</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="event">Events & Venues</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Operational Cost</label>
                  <input
                    type="number"
                    placeholder="50000"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Expected Efficiency Gain</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option value="15">Conservative (15%)</option>
                    <option value="25">Moderate (25%)</option>
                    <option value="35">Aggressive (35%)</option>
                  </select>
                </div>
              </div>

              {/* Product Comparison Grid */}
              <div className="grid lg:grid-cols-2 gap-6">
                {productsData.map((product) => {
                  const pricing = calculatePricing(product);
                  const monthlySavings = 50000 * 0.25 * locations; // Example calculation
                  const paybackMonths = pricing.oneTime / monthlySavings;
                  const yearlyROI = ((monthlySavings * 12 - pricing.oneTime) / pricing.oneTime) * 100;
                  const threeYearROI = ((monthlySavings * 36 - pricing.oneTime) / pricing.oneTime) * 100;

                  return (
                    <Card key={product.id} className="border-2 hover:border-primary/50 transition-colors">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${product.badgeColor}`}>
                            {product.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{product.name}</CardTitle>
                            <CardDescription>{product.subtitle}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Pricing Options */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="text-lg font-bold text-primary">₹{pricing.oneTime.toLocaleString()}</div>
                            <div className="text-xs text-gray-600">One-time</div>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="text-lg font-bold text-accent">₹{pricing.monthly.toLocaleString()}</div>
                            <div className="text-xs text-gray-600">Monthly</div>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <div className="text-lg font-bold text-purple-600">₹{pricing.yearly.toLocaleString()}</div>
                            <div className="text-xs text-gray-600">Yearly (-10%)</div>
                          </div>
                        </div>

                        {/* ROI Metrics */}
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Monthly Savings:</span>
                            <span className="font-semibold text-green-600">₹{monthlySavings.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Payback Period:</span>
                            <span className="font-semibold">{paybackMonths.toFixed(1)} months</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">1-Year ROI:</span>
                            <span className={`font-semibold ${yearlyROI > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {yearlyROI.toFixed(0)}%
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">3-Year ROI:</span>
                            <span className="font-semibold text-green-600">{threeYearROI.toFixed(0)}%</span>
                          </div>
                        </div>

                        {/* ROI Progress Bar */}
                        <div>
                          <div className="flex justify-between text-xs text-gray-600 mb-1">
                            <span>ROI Progress</span>
                            <span>{Math.min(yearlyROI, 100).toFixed(0)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000"
                              style={{ width: `${Math.min(Math.max(yearlyROI, 0), 100)}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-2">
                          <Button 
                            onClick={() => {
                              setSelectedProduct(product);
                              setShowPricingCalculator(false);
                              setActiveTab('detailed');
                            }}
                            variant="outline"
                            className="flex-1"
                            size="sm"
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            Details
                          </Button>
                          <Button 
                            onClick={() => onPageChange('demo')}
                            className="flex-1 bg-primary hover:bg-primary/90"
                            size="sm"
                          >
                            <Rocket className="h-3 w-3 mr-1" />
                            Start POC
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Summary & Recommendations */}
              <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Smart Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Best Value for You</h4>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${getRecommendedProduct()?.badgeColor}`}>
                          {getRecommendedProduct()?.icon}
                        </div>
                        <div>
                          <div className="font-medium">{getRecommendedProduct()?.name}</div>
                          <div className="text-sm text-gray-600">{getRecommendedProduct()?.price}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Total Investment</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Hardware & Software:</span>
                          <span className="font-semibold">₹{(calculatePricing(getRecommendedProduct() || productsData[0]).oneTime).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Installation & Training:</span>
                          <span className="font-semibold text-green-600">Free</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-medium">Total:</span>
                          <span className="font-bold text-primary">₹{(calculatePricing(getRecommendedProduct() || productsData[0]).oneTime).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t">
                    <Button 
                      onClick={() => onPageChange('contact')}
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <PhoneCall className="h-4 w-4 mr-2" />
                      Get Custom Quote
                    </Button>
                    <Button 
                      onClick={() => onPageChange('demo')}
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary/5"
                    >
                      <Target className="h-4 w-4 mr-2" />
                      Start Free Trial
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Product Demo Modal */}
      {showProductDemo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-4xl w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-green-500" />
                  Product Demo - {productsData.find(p => p.id === showProductDemo)?.name}
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowProductDemo(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive product demo would be embedded here</p>
                  <Button 
                    className="mt-4"
                    onClick={() => onPageChange('demo')}
                  >
                    Request Live Demo Instead
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Comparison Modal */}
      {showComparison && selectedComparisonProducts.length > 0 && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-6xl w-full max-h-[90vh] overflow-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                  Product Comparison
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowComparison(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Feature</th>
                      {selectedComparisonProducts.map(productId => {
                        const product = productsData.find(p => p.id === productId);
                        return (
                          <th key={productId} className="text-center p-4">
                            <div className="flex items-center gap-2">
                              <div className={`w-6 h-6 rounded flex items-center justify-center text-white text-xs ${product?.badgeColor}`}>
                                {product?.icon}
                              </div>
                              {product?.name}
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Price (One-time)</td>
                      {selectedComparisonProducts.map(productId => {
                        const product = productsData.find(p => p.id === productId);
                        return (
                          <td key={productId} className="text-center p-4 font-semibold text-primary">
                            {product?.price}
                          </td>
                        );
                      })}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Accuracy</td>
                      {selectedComparisonProducts.map(productId => {
                        const product = productsData.find(p => p.id === productId);
                        return (
                          <td key={productId} className="text-center p-4">
                            <Badge variant="outline">
                              {product?.specifications.accuracy.split(' ')[2]}
                            </Badge>
                          </td>
                        );
                      })}
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Best For</td>
                      {selectedComparisonProducts.map(productId => {
                        const product = productsData.find(p => p.id === productId);
                        return (
                          <td key={productId} className="text-center p-4 text-sm">
                            {product?.useCases[0]}
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-center gap-3 mt-6 pt-6 border-t">
                <Button 
                  onClick={() => onPageChange('demo')}
                  className="bg-primary hover:bg-primary/90"
                >
                  Request Demo for Selected
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setShowComparison(false)}
                >
                  Close Comparison
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Enhanced Product Detail Modal with Pricing Tabs */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}