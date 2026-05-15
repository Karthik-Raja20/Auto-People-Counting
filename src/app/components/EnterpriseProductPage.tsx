import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Users, 
  BarChart3, 
  Shield, 
  Eye,
  Clock,
  TrendingUp,
  CheckCircle,
  Play,
  ArrowRight,
  Building,
  ShoppingCart,
  MapPin,
  Zap,
  Globe,
  Lock,
  CreditCard,
  Calendar,
  Package,
  Star,
  Target,
  Activity,
  Layers
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EnterpriseProductPageProps {
  onPageChange: (page: string) => void;
}

export function EnterpriseProductPage({ onPageChange }: EnterpriseProductPageProps) {
  const [activeDemo, setActiveDemo] = useState('retail');
  const [selectedPricing, setSelectedPricing] = useState('subscription');

  // Core features data
  const coreFeatures = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "99% Accuracy",
      description: "Industry-leading precision with AI-powered computer vision and advanced edge processing algorithms.",
      metrics: "Validated across 500+ installations"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Real-time Analytics",
      description: "Instant insights with sub-second processing, live dashboards, and automated alerts for immediate action.",
      metrics: "< 500ms processing latency"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy Compliant",
      description: "GDPR-compliant, anonymous counting with no facial recognition or personal data storage.",
      metrics: "100% anonymous & secure"
    }
  ];

  // Solutions data
  const solutions = [
    {
      id: 'retail',
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Retail Analytics",
      description: "Optimize store performance with footfall tracking, conversion analysis, and customer behavior insights.",
      image: "https://images.unsplash.com/photo-1742589977991-0417bf1ca3b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGJ1aWxkaW5nJTIwdGVjaG5vbG9neSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg0NDQ3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Conversion rate optimization",
        "Peak hour staffing insights",
        "Queue management",
        "Space utilization analysis"
      ]
    },
    {
      id: 'buildings',
      icon: <Building className="h-6 w-6" />,
      title: "Smart Buildings",
      description: "Enhance building efficiency with occupancy monitoring, energy optimization, and space management.",
      image: "https://images.unsplash.com/photo-1618985821760-a9544b92cc14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGJ1aWxkaW5nJTIwdGVjaG5vbG9neSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg0NDQ3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Energy cost reduction",
        "HVAC optimization",
        "Security compliance",
        "Meeting room efficiency"
      ]
    },
    {
      id: 'transit',
      icon: <MapPin className="h-6 w-6" />,
      title: "Transit & Transport",
      description: "Improve passenger experience with crowd flow monitoring, capacity planning, and safety management.",
      image: "https://images.unsplash.com/photo-1666650338248-73ed461168dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2l0JTIwc3RhdGlvbiUyMGNyb3dkJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NTg0NDQ3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Crowd density monitoring",
        "Platform safety alerts",
        "Capacity planning",
        "Emergency evacuation"
      ]
    }
  ];

  // Pricing plans
  const pricingPlans = [
    {
      id: 'rental',
      name: 'Hardware Rental',
      icon: <Package className="h-5 w-5" />,
      price: '₹8,000',
      period: '/month/unit',
      description: 'Complete hardware + service package with maintenance included',
      badge: 'Most Flexible',
      badgeColor: 'bg-blue-500',
      features: [
        'APC EdgeBox™ hardware included',
        'Professional installation',
        '24/7 monitoring & support',
        'Maintenance & updates',
        'Min 3-4 days, flexible duration',
        '₹20,000 refundable security deposit'
      ],
      cta: 'Start Rental'
    },
    {
      id: 'subscription',
      name: 'SaaS Subscription',
      icon: <Globe className="h-5 w-5" />,
      price: '₹5,000',
      period: '/month',
      description: 'Cloud analytics platform with your existing cameras',
      badge: 'Most Popular',
      badgeColor: 'bg-green-500',
      features: [
        'Cloud analytics platform',
        'Works with existing cameras',
        'Real-time dashboard access',
        'API integrations included',
        'Multi-location support',
        'Advanced reporting suite'
      ],
      cta: 'Start Trial'
    },
    {
      id: 'license',
      name: 'Perpetual License',
      icon: <CreditCard className="h-5 w-5" />,
      price: '₹60,000',
      period: '/one-time',
      description: 'Complete ownership with optional support packages',
      badge: 'Best Value',
      badgeColor: 'bg-purple-500',
      features: [
        'Complete APC Core solution',
        'Perpetual license ownership',
        'On-premise deployment',
        '3-year warranty included',
        'Optional support packages',
        'No recurring fees'
      ],
      cta: 'Buy Now'
    }
  ];

  // Mock demo data
  const demoData = {
    retail: {
      visitors: 1247,
      conversion: 23.4,
      peakHour: '2-3 PM',
      avgDwell: '12m 34s'
    },
    buildings: {
      occupancy: 68,
      energySaving: 31,
      peakFloor: 'Floor 3',
      capacity: '340/500'
    },
    transit: {
      passengers: 2847,
      density: 'Medium',
      peakTime: '8-9 AM',
      alerts: 0
    }
  };

  // Customer logos
  const customers = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'RetailMax', logo: 'RM' },
    { name: 'SmartBuildings', logo: 'SB' },
    { name: 'TransitAuth', logo: 'TA' },
    { name: 'MegaMall', logo: 'MM' },
    { name: 'CityTower', logo: 'CT' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 lg:pt-20 lg:pb-16 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
              Enterprise Solution
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Auto People Counting
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your space intelligence with AI-powered people counting. 
              Get real-time insights, optimize operations, and ensure compliance with our enterprise-grade solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => onPageChange('demo')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => onPageChange('demo')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                Start Free Trial
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>500+ Installations</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-500" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>99% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for scale, designed for accuracy, engineered for privacy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/30 transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {feature.metrics}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored applications for every industry with proven ROI
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={solution.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-lg">{solution.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6"
                    onClick={() => onPageChange('applications')}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience real-time analytics with our interactive demo
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="retail" className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Retail
                </TabsTrigger>
                <TabsTrigger value="buildings" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Buildings
                </TabsTrigger>
                <TabsTrigger value="transit" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Transit
                </TabsTrigger>
              </TabsList>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Demo Dashboard */}
                <Card className="border-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Live Analytics Dashboard</CardTitle>
                      <Badge className="bg-green-100 text-green-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Live
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <TabsContent value="retail" className="mt-0">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-700">{demoData.retail.visitors}</div>
                            <div className="text-sm text-blue-600">Today's Visitors</div>
                          </div>
                          <div className="p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-700">{demoData.retail.conversion}%</div>
                            <div className="text-sm text-green-600">Conversion Rate</div>
                          </div>
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <div className="text-lg font-bold text-purple-700">{demoData.retail.peakHour}</div>
                            <div className="text-sm text-purple-600">Peak Hour</div>
                          </div>
                          <div className="p-4 bg-orange-50 rounded-lg">
                            <div className="text-lg font-bold text-orange-700">{demoData.retail.avgDwell}</div>
                            <div className="text-sm text-orange-600">Avg Dwell Time</div>
                          </div>
                        </div>
                        {/* Simulated heatmap */}
                        <div className="h-32 bg-gradient-to-r from-blue-200 via-green-200 to-red-200 rounded-lg relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm text-gray-700 font-medium">Store Heatmap Visualization</span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="buildings" className="mt-0">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-700">{demoData.buildings.occupancy}%</div>
                            <div className="text-sm text-blue-600">Current Occupancy</div>
                          </div>
                          <div className="p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-700">{demoData.buildings.energySaving}%</div>
                            <div className="text-sm text-green-600">Energy Savings</div>
                          </div>
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <div className="text-lg font-bold text-purple-700">{demoData.buildings.peakFloor}</div>
                            <div className="text-sm text-purple-600">Peak Floor</div>
                          </div>
                          <div className="p-4 bg-orange-50 rounded-lg">
                            <div className="text-lg font-bold text-orange-700">{demoData.buildings.capacity}</div>
                            <div className="text-sm text-orange-600">Capacity</div>
                          </div>
                        </div>
                        {/* Simulated floor plan */}
                        <div className="h-32 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm text-gray-700 font-medium">Building Occupancy Map</span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="transit" className="mt-0">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-700">{demoData.transit.passengers}</div>
                            <div className="text-sm text-blue-600">Today's Passengers</div>
                          </div>
                          <div className="p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-700">{demoData.transit.density}</div>
                            <div className="text-sm text-green-600">Crowd Density</div>
                          </div>
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <div className="text-lg font-bold text-purple-700">{demoData.transit.peakTime}</div>
                            <div className="text-sm text-purple-600">Peak Time</div>
                          </div>
                          <div className="p-4 bg-orange-50 rounded-lg">
                            <div className="text-2xl font-bold text-orange-700">{demoData.transit.alerts}</div>
                            <div className="text-sm text-orange-600">Active Alerts</div>
                          </div>
                        </div>
                        {/* Simulated flow visualization */}
                        <div className="h-32 bg-gradient-to-r from-green-200 via-yellow-200 to-red-200 rounded-lg relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm text-gray-700 font-medium">Passenger Flow Visualization</span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </CardContent>
                </Card>

                {/* Video Demo */}
                <Card className="border-2">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          size="lg"
                          className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm"
                          onClick={() => onPageChange('dashboard')}
                        >
                          <Play className="h-8 w-8 mr-2" />
                          Watch Demo Video
                        </Button>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="text-white text-sm font-medium mb-1">
                            {solutions.find(s => s.id === activeDemo)?.title} Demo
                          </div>
                          <div className="text-white/80 text-xs">
                            See real-time analytics in action
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the deployment model that fits your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card key={plan.id} className={`relative border-2 hover:border-primary/30 transition-all duration-300 ${plan.id === 'subscription' ? 'border-primary/20 shadow-xl scale-105' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {plan.icon}
                      </div>
                      <CardTitle className="text-lg">{plan.name}</CardTitle>
                    </div>
                    <Badge className={`${plan.badgeColor} text-white text-xs`}>
                      {plan.badge}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => onPageChange('demo')}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Feature Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare features across all deployment options
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Features</th>
                  <th className="text-center py-4 px-6 font-medium text-gray-900">Rental</th>
                  <th className="text-center py-4 px-6 font-medium text-gray-900">Subscription</th>
                  <th className="text-center py-4 px-6 font-medium text-gray-900">License</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Hardware Included', rental: true, subscription: false, license: true },
                  { feature: 'Cloud Analytics', rental: true, subscription: true, license: true },
                  { feature: 'Real-time Dashboard', rental: true, subscription: true, license: true },
                  { feature: '24/7 Support', rental: true, subscription: false, license: false },
                  { feature: 'Maintenance Included', rental: true, subscription: false, license: false },
                  { feature: 'API Access', rental: true, subscription: true, license: true },
                  { feature: 'Multi-location Support', rental: true, subscription: true, license: true },
                  { feature: 'On-premise Deployment', rental: false, subscription: false, license: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {row.rental ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <div className="w-5 h-5 mx-auto"></div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.subscription ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <div className="w-5 h-5 mx-auto"></div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.license ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <div className="w-5 h-5 mx-auto"></div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="py-12 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-8">
            <h3 className="text-lg font-medium text-gray-600 mb-6">
              Trusted by leading organizations worldwide
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {customers.map((customer, index) => (
                <div key={index} className="flex items-center justify-center w-20 h-20 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <span className="text-lg font-bold text-gray-400">{customer.logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container-responsive text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Space Intelligence?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 500+ organizations that trust APC Solutions for accurate, privacy-compliant people counting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onPageChange('demo')}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => onPageChange('demo')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline"
              onClick={() => onPageChange('contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
            >
              Buy Now
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm">
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
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}