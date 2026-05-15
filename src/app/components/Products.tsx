import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FAQ } from './FAQ';
import { 
  CheckCircle, 
  X, 
  Camera, 
  Wifi, 
  Shield, 
  Zap,
  Users,
  BarChart3,
  Bell,
  Cloud,
  Server,
  Smartphone,
  Cpu,
  Eye,
  Clock,
  Calendar,
  Music,
  Monitor,
  Globe,
  Play,
  Download,
  Star,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Building,
  ShoppingCart,
  Plane,
  HelpCircle,
  Sparkles,
  Award,
  Settings2,
  Database,
  Network,
  Layers,
  MessageCircle
} from 'lucide-react';

interface ProductsProps {
  onPageChange: (page: string) => void;
}

export function Products({ onPageChange }: ProductsProps) {
  const [selectedSolution, setSelectedSolution] = useState('core');
  const [selectedDeployment, setSelectedDeployment] = useState('cloudSync');
  const [showFAQ, setShowFAQ] = useState(false);
  const [activeComparisonTab, setActiveComparisonTab] = useState('features');

  const apcSolutions = [
    {
      id: 'core',
      name: 'APC Core',
      subtitle: 'Complete End-to-End Package',
      price: '$1,299/mo',
      setupFee: '$2,500 one-time',
      description: 'Turnkey solution with premium AI cameras, APC EdgeBox™, and comprehensive analytics platform',
      components: ['Premium AI Camera', 'APC EdgeBox™', 'Smart Analytics Platform', 'Professional Installation', '24/7 Support'],
      features: [
        'Hassle-free, plug & play deployment',
        'Premium AI cameras (up to 99% accuracy)',
        'Real-time analytics dashboard',
        'Turnkey installation & support',
        'Advanced heatmap visualization',
        'Zone-based people flow analytics',
        'Automated staff optimization alerts',
        'POS, HVAC, ERP API integrations',
        'Mobile & web responsive dashboards',
        'Professional installation included',
        '24/7 technical support & monitoring',
        'Quarterly optimization reviews'
      ],
      idealFor: 'Large retail chains, shopping malls, corporate headquarters wanting premium ready-to-deploy solutions',
      bestFor: 'Enterprise clients who want a complete, premium end-to-end package with maximum accuracy',
      whyChoose: 'Premium quality, maximum accuracy, enterprise-grade support, hassle-free deployment',
      roi: '350-500% in Year 1',
      accuracy: 'Up to 99%',
      setupTime: '1-2 days',
      industries: ['Retail Chains', 'Shopping Malls', 'Corporate HQ', 'Premium Venues'],
      highlight: true,
      icon: <Users className="h-6 w-6" />,
      badge: 'Most Popular',
      badgeColor: 'bg-primary'
    },
    {
      id: 'flex',
      name: 'APC Flex',
      subtitle: 'Cost-Conscious Intelligence',
      price: '$799/mo',
      setupFee: '$1,500 one-time',
      description: 'Smart solution with cost-effective cameras while maintaining advanced AI analytics capabilities',
      components: ['Smart Camera', 'APC EdgeBox™', 'Analytics Platform', 'Basic Installation'],
      features: [
        'Cost-effective camera solution',
        'Advanced analytics without premium cost',
        'Real-time counting (up to 95% accuracy)',
        'Scalable for multi-location deployments',
        'Edge processing capabilities',
        'Comprehensive analytics dashboard',
        'Email & SMS alerts and notifications',
        'Cloud-based reporting system',
        'Mobile app access',
        'Standard system integrations',
        'Business hours support',
        'Monthly performance reports'
      ],
      idealFor: 'Growing businesses, franchises, mid-size retail wanting advanced analytics with budget constraints',
      bestFor: 'Cost-conscious clients who want advanced analytics but prefer using budget-friendly cameras',
      whyChoose: 'Economical pricing without compromising on intelligence and insights',
      roi: '300-400% in Year 1',
      accuracy: 'Up to 95%',
      setupTime: '2-3 days',
      industries: ['Franchises', 'Mid-size Retail', 'Restaurants', 'Small Offices'],
      highlight: false,
      icon: <BarChart3 className="h-6 w-6" />,
      badge: 'Best Value',
      badgeColor: 'bg-accent'
    },
    {
      id: 'link',
      name: 'APC Link',
      subtitle: 'Leverage Existing Infrastructure',
      price: '$599/mo',
      setupFee: '$1,000 one-time',
      description: 'Smart integration with existing IP cameras plus APC EdgeBox™ for maximum ROI on current investments',
      components: ['Your Existing Cameras', 'APC EdgeBox™', 'Analytics Platform', 'Integration Services'],
      features: [
        'Maximum ROI - leverage current camera assets',
        'Works with 200+ IP camera models',
        'No new camera installation required',
        'AI analytics on existing infrastructure',
        'API integration with current systems',
        'Comprehensive camera compatibility assessment',
        'Advanced analytics unlock for old cameras',
        'Seamless integration with existing dashboards',
        'Minimal disruption deployment process',
        'Remote configuration and monitoring',
        'Technical consultation included',
        'Firmware upgrade assistance'
      ],
      idealFor: 'Organizations with existing camera infrastructure wanting to add AI analytics without full replacement',
      bestFor: 'Businesses with existing camera infrastructure who want to upgrade to AI analytics',
      whyChoose: 'Maximum ROI by leveraging current assets while adding cutting-edge AI capabilities',
      roi: '400-600% in Year 1',
      accuracy: 'Up to 92%',
      setupTime: '1 day',
      industries: ['Existing Infrastructure', 'Government', 'Education', 'Healthcare'],
      highlight: false,
      icon: <Camera className="h-6 w-6" />,
      badge: 'Maximum ROI',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 'eventSense',
      name: 'APC EventSense',
      subtitle: 'On-Demand Event Rental',
      price: '₹8,000/day',
      setupFee: 'Min 4-5 days + ₹10,000 deposit',
      description: 'Portable, weather-resistant solution for events, festivals, and temporary deployments requiring crowd monitoring',
      components: ['Portable APC EdgeBox™', 'Weatherproof Camera Kit', 'Live Event Dashboards', 'Dedicated Event Support'],
      features: [
        '₹8,000 per day rental pricing',
        'Minimum 4-5 day event duration',
        '30-day advance booking required',
        'Live dashboards for real-time crowd monitoring',
        '₹10,000 refundable security deposit per unit',
        'Installation, conveyance & engineer charges as actual',
        'Portable and weather-resistant hardware',
        'Site visit and assessment included',
        'Real-time crowd density monitoring',
        'Safety threshold alerts and notifications',
        'Comprehensive post-event analytics reports',
        'Client provides: Power, PC, Display, POE, Computer/Laptop'
      ],
      idealFor: 'Event organizers, festivals, concerts, exhibitions, construction sites requiring temporary crowd monitoring',
      bestFor: 'Temporary deployments — Concerts, Sports Events, Festivals, Exhibitions, Construction Sites, Emergency Response',
      whyChoose: 'Pay-per-event pricing, professional event support, comprehensive crowd safety compliance',
      roi: 'Immediate cost savings vs traditional crowd monitoring methods',
      accuracy: 'Up to 96%',
      setupTime: 'Same day with advance booking',
      industries: ['Events', 'Festivals', 'Exhibitions', 'Construction', 'Emergency Response'],
      highlight: false,
      icon: <Music className="h-6 w-6" />,
      badge: 'Event Rental',
      badgeColor: 'bg-purple-500'
    }
  ];

  const deploymentOptions = [
    {
      id: 'localView',
      name: 'APC LocalView',
      subtitle: 'On-Premise Processing',
      description: 'Complete local processing with direct display capabilities - zero internet dependency for core counting functions',
      features: [
        'AI Camera captures real-time IN/OUT data & occupancy',
        'All processing done locally on APC EdgeBox™',
        'Real-time data display on monitor/TV screen at site',
        'Zero internet dependency for counting operations',
        'Local data storage and backup',
        'Instant response time (<100ms)',
        'Privacy-focused (all data stays on-premise)',
        'No ongoing cloud subscription costs',
        'Offline operation capability',
        'Local network dashboard access',
        'USB data export functionality',
        'Local alert notifications'
      ],
      bestFor: 'Small offices, retail stores, factories, warehouses where local-only data monitoring is sufficient',
      idealFor: 'Clients who prefer on-premise processing without cloud dependencies or ongoing costs',
      connectivity: 'Local Network Only',
      dataResidency: 'On-Premise',
      monthlyFee: 'None',
      setupComplexity: 'Simple',
      icon: <Monitor className="h-6 w-6" />,
      highlight: false,
      badge: 'Privacy First',
      industries: ['Small Retail', 'Factories', 'Warehouses', 'Government Secure']
    },
    {
      id: 'cloudSync',
      name: 'APC CloudSync',
      subtitle: 'Centralized Analytics',
      description: 'Cloud-powered solution enabling centralized dashboards, multi-site management, and advanced analytics',
      features: [
        'AI Camera with PoE + Internet connectivity',
        'Local processing by APC EdgeBox™ with cloud sync',
        'Centralized dashboards across unlimited sites',
        'Historical reports and predictive trend analysis',
        'RESTful API access for custom integrations',
        'Subscription-based with flexible pricing',
        'Automatic software updates and patches',
        'Advanced ML insights and recommendations',
        'Multi-user access controls and permissions',
        'Real-time alerts and notifications',
        'Mobile app with push notifications',
        'Enterprise SSO integration'
      ],
      bestFor: 'Multi-branch retail chains, shopping malls, corporate networks, franchise operations',
      idealFor: 'Clients needing centralized analytics, reporting, and management across multiple sites',
      connectivity: 'Internet Required',
      dataResidency: 'Cloud + Local',
      monthlyFee: '$99-299/site',
      setupComplexity: 'Standard',
      icon: <Cloud className="h-6 w-6" />,
      highlight: true,
      badge: 'Most Popular',
      industries: ['Retail Chains', 'Malls', 'Corporate', 'Franchises']
    },
    {
      id: 'smartConnect',
      name: 'APC SmartConnect',
      subtitle: 'Mobile & Redundant Access',
      description: 'Maximum flexibility with cellular connectivity, redundant storage, and mobile access for challenging deployments',
      features: [
        'AI Camera with SIM + Memory + PoE + Internet backup',
        'Real-time access via Mobile App (iOS/Android)',
        'PC/Laptop access through responsive web portal',
        'Multi-cloud dashboard (APC Cloud or Client Cloud)',
        'On-device storage for network backup (30 days)',
        'Automatic cellular connectivity failover',
        '4G/5G mobile network support worldwide',
        'Remote monitoring and diagnostics',
        'Redundant data protection and sync',
        'Satellite connectivity options available',
        'Edge caching for intermittent connectivity',
        'GPS location tracking for mobile units'
      ],
      bestFor: 'Smart cities, transportation hubs, remote locations, outdoor events, construction sites',
      idealFor: 'Clients who need maximum mobility, remote access capabilities, and redundant connectivity',
      connectivity: 'Multiple Options (Cellular/WiFi/Ethernet)',
      dataResidency: 'Multi-location',
      monthlyFee: '$199-399/site',
      setupComplexity: 'Advanced',
      icon: <Smartphone className="h-6 w-6" />,
      highlight: false,
      badge: 'Maximum Mobility',
      industries: ['Smart Cities', 'Transportation', 'Remote Sites', 'Mobile Units']
    }
  ];

  const pocOptions = [
    {
      name: '15-Day Live POC',
      duration: '15 days',
      description: 'Complete system deployed at your location with live data collection and full analytics access',
      features: [
        'Complete hardware installation at your site',
        'Live data collection and analytics',
        'Real-time dashboard access for all stakeholders',
        'Basic analytics reports and insights',
        'Dedicated technical support included',
        'Performance benchmarking vs current methods',
        'Custom configuration for your environment',
        'Training for your team included'
      ],
      price: 'Free',
      savings: 'Save $5,000',
      highlight: true,
      icon: <Zap className="h-6 w-6 text-accent" />,
      cta: 'Start Free POC'
    },
    {
      name: '30-Day Extended POC',
      duration: '30 days',
      description: 'Comprehensive evaluation with advanced analytics, integrations, and optimization',
      features: [
        'Extended evaluation period for thorough testing',
        'Advanced analytics and ML insights access',
        'Custom reporting and dashboard creation',
        'Integration testing with existing systems',
        'Comprehensive stakeholder training program',
        'ROI analysis and optimization recommendations',
        'Multiple site testing options',
        'Executive presentation and business case'
      ],
      price: '$299',
      savings: '50% Off Setup',
      highlight: false,
      icon: <Calendar className="h-6 w-6 text-primary" />,
      cta: 'Get Extended POC'
    },
    {
      name: 'Custom POC',
      duration: 'Flexible',
      description: 'Tailored proof-of-concept designed for specific enterprise requirements and complex environments',
      features: [
        'Custom solution design and architecture',
        'Specific use case validation and testing',
        'Flexible duration based on requirements',
        'Custom integrations with legacy systems',
        'Dedicated project manager assignment',
        'Compliance and security validation',
        'Multi-stakeholder training program',
        'Comprehensive business case development'
      ],
      price: 'Custom Quote',
      savings: 'Enterprise Pricing',
      highlight: false,
      icon: <Server className="h-6 w-6 text-gray-600" />,
      cta: 'Contact Enterprise'
    }
  ];

  const edgeBoxFeatures = [
    {
      category: 'Processing Power',
      icon: <Cpu className="h-5 w-5 text-primary" />,
      features: [
        'ARM Cortex-A78 CPU (8-core)',
        'Dedicated Neural Processing Unit (NPU)',
        'Mali-G78 GPU for real-time processing',
        '8GB LPDDR5 RAM',
        '128GB eUFS storage + expansion'
      ]
    },
    {
      category: 'Connectivity',
      icon: <Wifi className="h-5 w-5 text-primary" />,
      features: [
        '5G/LTE connectivity (global bands)',
        'Wi-Fi 6E support (6GHz)',
        'Gigabit Ethernet (1Gbps)',
        'Bluetooth 5.2 LE',
        'USB 3.0 ports (2x)'
      ]
    },
    {
      category: 'AI Capabilities',
      icon: <Eye className="h-5 w-5 text-primary" />,
      features: [
        'Real-time people counting & tracking',
        'Behavior pattern analytics',
        'Privacy-preserving computer vision',
        'Edge computing optimization',
        'Custom AI model deployment'
      ]
    },
    {
      category: 'Security & Compliance',
      icon: <Shield className="h-5 w-5 text-primary" />,
      features: [
        'Hardware-level encryption (AES-256)',
        'Secure boot and verified startup',
        'Local data processing only',
        'GDPR & SOC2 compliance',
        'Enterprise security protocols'
      ]
    }
  ];

  const competitorComparison = [
    {
      feature: 'Accuracy Level',
      apc: 'Up to 99%',
      competitor1: '85-92%',
      competitor2: '88-94%',
      advantage: 'Higher accuracy'
    },
    {
      feature: 'Setup Time',
      apc: '15 minutes',
      competitor1: '2-4 hours',
      competitor2: '1-2 days',
      advantage: 'Fastest deployment'
    },
    {
      feature: 'Edge Processing',
      apc: 'Full local AI',
      competitor1: 'Cloud-dependent',
      competitor2: 'Hybrid',
      advantage: 'Privacy & speed'
    },
    {
      feature: 'Free POC',
      apc: '15 days full featured',
      competitor1: 'Demo only',
      competitor2: '7 days limited',
      advantage: 'Longest trial'
    },
    {
      feature: 'Camera Compatibility',
      apc: '200+ models',
      competitor1: '50+ models',
      competitor2: '100+ models',
      advantage: 'Widest compatibility'
    },
    {
      feature: 'Pricing Model',
      apc: 'Transparent monthly',
      competitor1: 'Complex licensing',
      competitor2: 'Annual contracts',
      advantage: 'Simple & flexible'
    }
  ];

  if (showFAQ) {
    return <FAQ onPageChange={onPageChange} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-blue-50 to-accent/5 py-16 lg:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse hidden lg:block"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000 hidden lg:block"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <Sparkles className="h-4 w-4 mr-2" />
              Powered by APC EdgeBox™
            </Badge>
            <h1 className="mb-6 text-gray-900">Complete APC Solutions Portfolio</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from four intelligent solution packages and three deployment options to create the perfect 
              people counting solution for your specific needs — all powered by our revolutionary APC EdgeBox™ technology.
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/70 backdrop-blur rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-gray-600">Max Accuracy</div>
              </div>
              <div className="bg-white/70 backdrop-blur rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-accent">15min</div>
                <div className="text-sm text-gray-600">Setup Time</div>
              </div>
              <div className="bg-white/70 backdrop-blur rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Installations</div>
              </div>
              <div className="bg-white/70 backdrop-blur rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-green-600">350%</div>
                <div className="text-sm text-gray-600">Avg ROI</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => onPageChange('demo')} className="bg-gradient-to-r from-primary to-accent">
                <Zap className="h-5 w-5 mr-2" />
                Start Free POC
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </Button>
              <Button variant="ghost" size="lg" onClick={() => setShowFAQ(true)}>
                <HelpCircle className="h-5 w-5 mr-2" />
                View FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* APC EdgeBox™ Section */}
      <section className="py-16 lg:py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
              <Cpu className="h-4 w-4 mr-2" />
              Revolutionary Technology
            </Badge>
            <h2 className="mb-6 text-gray-900">APC EdgeBox™ — The Heart of Smart Counting</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every APC solution is powered by our revolutionary EdgeBox™ — an ultra-compact AI gateway 
              that delivers enterprise-grade performance with edge computing, ensuring privacy and real-time processing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1595014373317-8eef4f231fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGJ1aWxkaW5nJTIwY2VpbGluZyUyMGNhbWVyYSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MzU2NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="APC EdgeBox hardware device"
                className="rounded-xl shadow-2xl w-full h-80 object-cover"
              />
              
              {/* Floating Feature Badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-3 border border-gray-200">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">GDPR</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-3 border border-gray-200">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm font-medium">15min Setup</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Edge Computing Power</h3>
                  <p className="text-gray-600">Advanced AI processing locally with Neural Processing Unit for real-time insights without cloud dependency</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Universal Connectivity</h3>
                  <p className="text-gray-600">Always connected with built-in 5G, Wi-Fi 6E, Ethernet, and cellular backup options</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy-First Design</h3>
                  <p className="text-gray-600">Local processing ensures complete data privacy with GDPR compliance and zero personal data storage</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ultra-Compact Design</h3>
                  <p className="text-gray-600">Fits anywhere with minimal space requirements while delivering enterprise-grade performance</p>
                </div>
              </div>
            </div>
          </div>

          {/* EdgeBox Specifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {edgeBoxFeatures.map((category, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-primary/20 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-accent/10 to-primary/10 text-accent border-accent/20">
              <Award className="h-4 w-4 mr-2" />
              Industry Leadership
            </Badge>
            <h2 className="mb-6 text-gray-900">Why APC Solutions Leads the Market</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how APC Solutions outperforms competitors in accuracy, deployment speed, and overall value
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold text-primary">APC Solutions</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">Competitor A</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-600">Competitor B</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="font-semibold text-primary">{item.apc}</span>
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">{item.competitor1}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{item.competitor2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* APC Solution Packages */}
      <section className="py-16 lg:py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 border-purple-200">
              <Layers className="h-4 w-4 mr-2" />
              Solution Portfolio
            </Badge>
            <h2 className="mb-6 text-gray-900">APC Solution Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four comprehensive packages designed for different use cases, budgets, and infrastructure requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {apcSolutions.map((solution) => (
              <Card 
                key={solution.id} 
                className={`relative ${solution.highlight ? 'border-primary shadow-xl ring-2 ring-primary/20' : 'border-gray-200 hover:shadow-lg'} transition-all cursor-pointer group`}
                onClick={() => setSelectedSolution(solution.id)}
              >
                {solution.highlight && (
                  <div className="absolute -top-4 left-6">
                    <Badge className={`${solution.badgeColor} text-white px-4 py-2 shadow-lg`}>
                      {solution.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${solution.highlight ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        {solution.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{solution.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {solution.subtitle}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{solution.price}</div>
                      <div className="text-sm text-gray-500">{solution.setupFee}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{solution.accuracy}</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent">{solution.setupTime}</div>
                      <div className="text-xs text-gray-600">Setup</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{solution.roi}</div>
                      <div className="text-xs text-gray-600">ROI</div>
                    </div>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-gray-900">Best For:</h4>
                    <p className="text-sm text-gray-600">{solution.bestFor}</p>
                  </div>

                  {/* Industries */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-gray-900">Industries:</h4>
                    <div className="flex flex-wrap gap-1">
                      {solution.industries.map((industry, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      className={`flex-1 ${solution.highlight ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={solution.highlight ? 'default' : 'outline'}
                      onClick={(e) => {
                        e.stopPropagation();
                        onPageChange('demo');
                      }}
                    >
                      {solution.id === 'eventSense' ? 'Get Rental Quote' : 'Start Free POC'}
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onPageChange(`product-${solution.id.toLowerCase()}`);
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Solution View */}
          <Tabs value={selectedSolution} onValueChange={setSelectedSolution} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {apcSolutions.map((solution) => (
                <TabsTrigger key={solution.id} value={solution.id} className="text-sm">
                  {solution.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {apcSolutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id}>
                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      {solution.icon}
                      {solution.name} - Complete Feature Set
                    </CardTitle>
                    <CardDescription className="text-lg">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-8">
                      <h4 className="font-semibold mb-4 text-lg">Components Included:</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {solution.components.map((component, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium">{component}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Complete Feature List:</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {solution.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* APC Deployment Options */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-blue-200">
              <Network className="h-4 w-4 mr-2" />
              Deployment Models
            </Badge>
            <h2 className="mb-6 text-gray-900">APC Deployment Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the deployment model that best fits your connectivity, data processing, privacy, and access requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {deploymentOptions.map((option) => (
              <Card 
                key={option.id} 
                className={`relative ${option.highlight ? 'border-primary shadow-xl ring-2 ring-primary/20' : 'border-gray-200 hover:shadow-lg'} transition-all cursor-pointer group`}
                onClick={() => setSelectedDeployment(option.id)}
              >
                {option.highlight && (
                  <div className="absolute -top-4 left-6">
                    <Badge className="bg-primary text-white px-4 py-2 shadow-lg">
                      {option.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 ${option.highlight ? 'bg-primary text-white' : 'bg-primary/10 text-primary'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl">{option.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    {option.subtitle}
                  </Badge>
                  <CardDescription className="mt-3 text-base">{option.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Properties */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Connectivity</div>
                      <div className="text-sm font-medium">{option.connectivity}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Monthly Fee</div>
                      <div className="text-sm font-medium">{option.monthlyFee}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Data Location</div>
                      <div className="text-sm font-medium">{option.dataResidency}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Setup</div>
                      <div className="text-sm font-medium">{option.setupComplexity}</div>
                    </div>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-gray-900">Best For:</h4>
                    <p className="text-sm text-gray-600">{option.bestFor}</p>
                  </div>

                  {/* Industries */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-gray-900">Industries:</h4>
                    <div className="flex flex-wrap gap-1">
                      {option.industries.map((industry, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${option.highlight ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={option.highlight ? 'default' : 'outline'}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDeployment(option.id);
                    }}
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Deployment View */}
          <Tabs value={selectedDeployment} onValueChange={setSelectedDeployment} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {deploymentOptions.map((option) => (
                <TabsTrigger key={option.id} value={option.id} className="text-sm">
                  {option.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {deploymentOptions.map((option) => (
              <TabsContent key={option.id} value={option.id}>
                <Card className="border-2 border-gray-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      {option.icon}
                      {option.name} - Complete Capabilities
                    </CardTitle>
                    <CardDescription className="text-lg">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {option.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* POC Options */}
      <section className="py-16 lg:py-20">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-50 to-blue-50 text-green-600 border-green-200">
              <Play className="h-4 w-4 mr-2" />
              Proof of Concept
            </Badge>
            <h2 className="mb-6 text-gray-900">Experience APC Solutions Live</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience APC solutions live at your location with our comprehensive POC programs designed to prove value before purchase
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pocOptions.map((poc, index) => (
              <Card 
                key={index} 
                className={`relative ${poc.highlight ? 'border-accent shadow-xl ring-2 ring-accent/20 scale-105' : 'border-gray-200 hover:shadow-lg'} transition-all`}
              >
                {poc.highlight && (
                  <div className="absolute -top-4 left-6">
                    <Badge className="bg-accent text-white px-4 py-2 shadow-lg">
                      Recommended
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 ${poc.highlight ? 'bg-accent text-white' : 'bg-secondary text-primary'} rounded-2xl flex items-center justify-center`}>
                    {poc.icon}
                  </div>
                  <CardTitle className="text-xl">{poc.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    {poc.duration}
                  </Badge>
                  <CardDescription className="mt-3 text-base">{poc.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${poc.price === 'Free' ? 'text-accent' : 'text-primary'} mb-2`}>
                      {poc.price}
                    </div>
                    <div className="text-sm text-gray-600">{poc.savings}</div>
                  </div>

                  <ul className="space-y-3">
                    {poc.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${poc.highlight ? 'bg-accent hover:bg-accent/90' : ''}`}
                    variant={poc.highlight ? 'default' : 'outline'}
                    onClick={() => onPageChange('demo')}
                  >
                    {poc.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-responsive">
          <div className="text-center">
            <h2 className="mb-6 text-white">Ready to Transform Your Space Intelligence?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join 500+ satisfied customers who've revolutionized their operations with APC Solutions. 
              Start your free POC today and see the difference intelligent people counting makes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                onClick={() => onPageChange('demo')}
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Zap className="h-5 w-5 mr-2" />
                Start Free 15-Day POC
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => onPageChange('contact')}
                className="border-white text-white hover:bg-white/10"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Talk to Expert
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                onClick={() => setShowFAQ(true)}
                className="text-white hover:bg-white/10"
              >
                <HelpCircle className="h-5 w-5 mr-2" />
                View FAQ
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
                <Users className="h-5 w-5" />
                <span>500+ Global Installations</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}