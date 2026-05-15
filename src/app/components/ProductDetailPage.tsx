import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Progress } from './ui/progress';
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
  Layers,
  Camera,
  Cpu,
  Wifi,
  Database,
  AlertCircle,
  Download,
  Phone,
  Mail,
  MessageSquare,
  Award,
  Gauge,
  Smartphone,
  Monitor,
  Server,
  HeadphonesIcon,
  BookOpen,
  FileText,
  Video,
  Settings,
  PieChart,
  BarChart,
  LineChart,
  Thermometer,
  Lightbulb,
  Heart,
  Bus,
  Calendar as CalendarIcon,
  Users2,
  Briefcase,
  Home,
  UserCheck,
  Accessibility,
  Volume2,
  VolumeX
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailPageProps {
  onPageChange: (page: string) => void;
}

export function ProductDetailPage({ onPageChange }: ProductDetailPageProps) {
  const [pricingModel, setPricingModel] = useState('subscription');
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [activeDemo, setActiveDemo] = useState('retail');
  const [demoPlaying, setDemoPlaying] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Scroll handler for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setStickyVisible(scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://apcsolutions.com/product-detail#product",
        "name": "Auto People Counting System",
        "description": "AI-powered people counting and occupancy analytics solution with 99% accuracy, real-time insights, and GDPR compliance for retail, buildings, and events.",
        "brand": {
          "@type": "Brand",
          "name": "APC Solutions"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "APC Solutions",
          "url": "https://apcsolutions.com"
        },
        "category": "Business Software",
        "image": [
          "https://apcsolutions.com/images/apc-hero.png",
          "https://apcsolutions.com/images/apc-dashboard.png"
        ],
        "offers": [
          {
            "@type": "Offer",
            "name": "Hardware Rental",
            "price": "8000",
            "priceCurrency": "INR",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "APC Solutions"
            }
          },
          {
            "@type": "Offer",
            "name": "SaaS Subscription",
            "price": "5000",
            "priceCurrency": "INR",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "APC Solutions"
            }
          },
          {
            "@type": "Offer",
            "name": "Perpetual License",
            "price": "60000",
            "priceCurrency": "INR",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "APC Solutions"
            }
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sarah Johnson"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Incredible accuracy and insights. Helped us optimize our retail operations and increase conversion rates by 23%."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Michael Chen"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Perfect solution for our smart building. Energy savings of 31% in the first quarter alone."
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://apcsolutions.com/product-detail#software",
        "name": "APC Analytics Platform",
        "description": "Real-time people counting analytics platform with edge processing and privacy compliance.",
        "applicationCategory": "Business Software",
        "operatingSystem": "Cross-platform",
        "softwareVersion": "3.2.1",
        "dateModified": "2024-12-01",
        "creator": {
          "@type": "Organization",
          "name": "APC Solutions"
        },
        "offers": {
          "@type": "Offer",
          "price": "5000",
          "priceCurrency": "INR"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://apcsolutions.com/product-detail#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How accurate is the people counting system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AI-powered system achieves up to 99% accuracy using advanced computer vision and edge processing technology."
            }
          },
          {
            "@type": "Question",
            "name": "Is the system GDPR compliant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our system is fully GDPR compliant with anonymous counting, no facial recognition, and no personal data storage."
            }
          }
        ]
      }
    ]
  };

  // Key features data
  const keyFeatures = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "99% Accuracy",
      description: "Industry-leading precision with AI-powered computer vision algorithms validated across 500+ installations worldwide.",
      benefits: ["Sub-pixel detection", "Multi-angle validation", "Weather-resistant accuracy", "Crowd density handling"],
      badge: "AI-Powered"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Real-time Analytics",
      description: "Instant insights with sub-second processing, live dashboards, and automated alerts for immediate actionable intelligence.",
      benefits: ["<500ms latency", "Live data streaming", "Automated alerts", "API integrations"],
      badge: "Real-time"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy & GDPR Compliance",
      description: "Complete privacy protection with anonymous counting, no facial recognition, and full GDPR compliance for global deployments.",
      benefits: ["Anonymous counting", "No personal data", "GDPR certified", "Data sovereignty"],
      badge: "Certified"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Edge Processing",
      description: "On-device AI processing with APC EdgeBox™ technology for reduced latency, bandwidth efficiency, and offline capabilities.",
      benefits: ["Offline operation", "Bandwidth efficient", "Local processing", "Cloud sync"],
      badge: "EdgeBox™"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Low Latency Performance",
      description: "Ultra-fast response times with optimized algorithms and edge computing for real-time decision making and instant alerts.",
      benefits: ["Sub-500ms response", "Real-time alerts", "Instant updates", "Stream processing"],
      badge: "Ultra-fast"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Integration APIs",
      description: "Comprehensive REST APIs, webhooks, and SDKs for seamless integration with existing systems and third-party platforms.",
      benefits: ["REST APIs", "Webhooks", "SDKs available", "Custom integrations"],
      badge: "Developer-ready"
    }
  ];

  // Industry solutions data
  const industrySolutions = [
    {
      id: 'retail',
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Retail Analytics",
      subtitle: "Optimize store performance with advanced footfall insights",
      description: "Transform your retail operations with comprehensive people counting analytics. Track customer behavior, optimize staffing, improve conversion rates, and enhance the shopping experience with real-time footfall data and heat mapping technology.",
      image: "https://images.unsplash.com/photo-1715889868942-b6df178c60b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXRhaWwlMjBzdG9yZSUyMGZvb3RmYWxsJTIwaGVhdG1hcHxlbnwxfHx8fDE3NTg0NDUwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "23% average conversion rate improvement",
        "Peak hour staffing optimization", 
        "Queue management automation",
        "Customer journey mapping",
        "Heat map visualization",
        "Compare store performance"
      ],
      metrics: {
        accuracy: "99%",
        roi: "280%",
        payback: "4 months"
      },
      useCases: [
        "Department stores & malls",
        "Fashion & apparel chains", 
        "Grocery & supermarkets",
        "Electronics retailers"
      ]
    },
    {
      id: 'buildings',
      icon: <Building className="h-6 w-6" />,
      title: "Smart Buildings",
      subtitle: "Enhance building efficiency with intelligent occupancy monitoring",
      description: "Revolutionize building management with AI-powered occupancy insights. Optimize HVAC systems, reduce energy consumption, improve security protocols, and create more comfortable, efficient workspaces with real-time occupancy data and predictive analytics.",
      image: "https://images.unsplash.com/photo-1749534275191-2ab7df76bc44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGJ1aWxkaW5nJTIwb2NjdXBhbmN5JTIwc2Vuc29yc3xlbnwxfHx8fDE3NTg0NDUwMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "31% average energy cost reduction",
        "HVAC optimization automation",
        "Security compliance monitoring",
        "Meeting room efficiency",
        "Workplace utilization insights",
        "Carbon footprint reduction"
      ],
      metrics: {
        accuracy: "97%",
        roi: "340%", 
        payback: "6 months"
      },
      useCases: [
        "Corporate offices",
        "Co-working spaces",
        "Educational institutions",
        "Government buildings"
      ]
    },
    {
      id: 'transit',
      icon: <MapPin className="h-6 w-6" />,
      title: "Transit & Stations",
      subtitle: "Improve passenger experience with crowd flow intelligence",
      description: "Enhance public transportation efficiency with comprehensive passenger flow analytics. Monitor crowd density, optimize capacity planning, improve safety protocols, and deliver superior passenger experiences with real-time crowd intelligence and predictive modeling.",
      image: "https://images.unsplash.com/photo-1587400563857-48640ba58068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZW9wbGUlMjBjb3VudGluZyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg0NDQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "45% reduction in crowd incidents",
        "Platform safety alert automation",
        "Capacity planning optimization",
        "Emergency evacuation coordination",
        "Service frequency optimization",
        "Passenger flow visualization"
      ],
      metrics: {
        accuracy: "96%",
        roi: "220%",
        payback: "8 months"
      },
      useCases: [
        "Metro & subway stations",
        "Bus terminals",
        "Airports & aviation",
        "Railway stations"
      ]
    },
    {
      id: 'events',
      icon: <CalendarIcon className="h-6 w-6" />,
      title: "Events & Venues",
      subtitle: "Optimize event management with real-time attendee insights",
      description: "Elevate event management with intelligent crowd analytics. Monitor attendee flow, ensure safety compliance, optimize venue layouts, and enhance guest experiences with real-time occupancy monitoring and heat mapping for successful event execution.",
      image: "https://images.unsplash.com/photo-1587400563857-48640ba58068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwZW9wbGUlMjBjb3VudGluZyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg0NDQ5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Real-time capacity monitoring",
        "Safety compliance automation",
        "Crowd density heat maps",
        "Emergency response coordination",
        "Vendor placement optimization",
        "Attendee behavior analytics"
      ],
      metrics: {
        accuracy: "98%",
        roi: "195%",
        payback: "Immediate"
      },
      useCases: [
        "Conferences & exhibitions",
        "Festivals & concerts",
        "Sports venues",
        "Trade shows"
      ]
    },
    {
      id: 'healthcare',
      icon: <Heart className="h-6 w-6" />,
      title: "Healthcare Facilities",
      subtitle: "Enhance patient care with intelligent facility monitoring",
      description: "Improve healthcare delivery with advanced occupancy analytics. Monitor waiting areas, optimize staffing levels, ensure patient safety, and enhance operational efficiency with real-time insights that support better patient outcomes and resource allocation.",
      image: "https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd2FpdGluZyUyMHJvb20lMjBtb25pdG9yaW5nfGVufDF8fHx8MTc1ODQ0NTAxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      benefits: [
        "Patient wait time reduction",
        "Staff allocation optimization",
        "Infection control monitoring", 
        "Emergency capacity management",
        "Treatment room utilization",
        "Patient flow optimization"
      ],
      metrics: {
        accuracy: "99%",
        roi: "250%",
        payback: "5 months"
      },
      useCases: [
        "Hospitals & clinics",
        "Emergency departments",
        "Outpatient facilities",
        "Long-term care"
      ]
    }
  ];

  // Pricing plans
  const pricingPlans = {
    rental: [
      {
        id: 'rental-basic',
        name: 'Hardware Rental',
        price: billingPeriod === 'monthly' ? '₹8,000' : '₹7,200',
        period: billingPeriod === 'monthly' ? '/month/unit' : '/month/unit (annual)',
        description: 'Complete hardware solution with professional service',
        badge: 'Most Flexible',
        badgeColor: 'bg-blue-500',
        popular: false,
        features: [
          'APC EdgeBox™ hardware included',
          'Professional installation & setup',
          '24/7 monitoring & technical support',
          'Maintenance & firmware updates',
          'Min 3-4 days, flexible duration',
          '₹20,000 refundable security deposit',
          'On-site training included',
          'Hardware replacement warranty'
        ],
        cta: 'Start Rental'
      }
    ],
    subscription: [
      {
        id: 'saas-starter',
        name: 'Starter SaaS',
        price: billingPeriod === 'monthly' ? '₹3,000' : '₹2,700',
        period: billingPeriod === 'monthly' ? '/month' : '/month (annual)',
        description: 'Cloud analytics for small deployments',
        badge: 'Best for Startups',
        badgeColor: 'bg-green-500',
        popular: false,
        features: [
          'Up to 3 camera locations',
          'Cloud analytics dashboard',
          'Basic reporting suite',
          'Email support',
          'API access (basic)',
          'Mobile app access',
          '30-day data retention',
          'Standard integrations'
        ],
        cta: 'Start Free Trial'
      },
      {
        id: 'saas-professional',
        name: 'Professional SaaS',
        price: billingPeriod === 'monthly' ? '₹5,000' : '₹4,500',
        period: billingPeriod === 'monthly' ? '/month' : '/month (annual)',
        description: 'Full-featured cloud platform for enterprises',
        badge: 'Most Popular',
        badgeColor: 'bg-primary',
        popular: true,
        features: [
          'Unlimited camera locations',
          'Advanced analytics & AI insights',
          'Custom dashboard builder',
          'Priority phone & chat support',
          'Full API access & webhooks',
          'Advanced integrations',
          '2-year data retention',
          'Custom report builder',
          'Multi-user team access',
          'White-label options'
        ],
        cta: 'Start Free Trial'
      },
      {
        id: 'saas-enterprise',
        name: 'Enterprise SaaS',
        price: 'Custom',
        period: '/month',
        description: 'Tailored solutions for large organizations',
        badge: 'Enterprise',
        badgeColor: 'bg-purple-500',
        popular: false,
        features: [
          'Everything in Professional',
          'Dedicated account manager',
          '99.9% SLA guarantee',
          'Custom integrations & APIs',
          'On-premise deployment option',
          'Advanced security features',
          'Unlimited data retention',
          'Custom training programs',
          '24/7 phone support',
          'Disaster recovery'
        ],
        cta: 'Contact Sales'
      }
    ],
    license: [
      {
        id: 'license-standard',
        name: 'Standard License',
        price: '₹45,000',
        period: '/one-time',
        description: 'Perpetual software license with basic support',
        badge: 'Good Value',
        badgeColor: 'bg-orange-500',
        popular: false,
        features: [
          'APC Core software license',
          'Up to 5 camera deployments',
          '1-year warranty included',
          'Email support (business hours)',
          'Basic training materials',
          'Software updates (1 year)',
          'On-premise deployment',
          'Standard reporting'
        ],
        cta: 'Buy License'
      },
      {
        id: 'license-professional',
        name: 'Professional License',
        price: '₹60,000',
        period: '/one-time',
        description: 'Complete ownership with comprehensive support',
        badge: 'Best Value',
        badgeColor: 'bg-accent',
        popular: true,
        features: [
          'Complete APC solution suite',
          'Unlimited camera deployments',
          '3-year warranty included',
          'Priority support package',
          'Professional training included',
          'Lifetime software updates',
          'On-premise & cloud deployment',
          'Advanced analytics & reporting',
          'API access & integrations',
          'Custom development support'
        ],
        cta: 'Buy License'
      }
    ]
  };

  // Mock demo data
  const demoData = {
    retail: {
      visitors: 1247,
      conversion: 23.4,
      peakHour: '2-3 PM',
      avgDwell: '12m 34s',
      heatmapIntensity: 85,
      zones: [
        { name: 'Entry', count: 423, percentage: 34 },
        { name: 'Electronics', count: 287, percentage: 23 },
        { name: 'Clothing', count: 312, percentage: 25 },
        { name: 'Checkout', count: 225, percentage: 18 }
      ]
    },
    buildings: {
      occupancy: 68,
      energySaving: 31,
      peakFloor: 'Floor 3',
      capacity: '340/500',
      temperature: 22.5,
      floors: [
        { floor: 1, occupancy: 78, capacity: 100 },
        { floor: 2, occupancy: 65, capacity: 120 },
        { floor: 3, occupancy: 89, capacity: 150 },
        { floor: 4, occupancy: 42, capacity: 130 }
      ]
    },
    transit: {
      passengers: 2847,
      density: 'Medium',
      peakTime: '8-9 AM',
      alerts: 0,
      platforms: [
        { name: 'Platform A', count: 156, status: 'Normal' },
        { name: 'Platform B', count: 203, status: 'Busy' },
        { name: 'Platform C', count: 89, status: 'Light' },
        { name: 'Platform D', count: 234, status: 'Heavy' }
      ]
    },
    events: {
      attendees: 3420,
      capacity: '85%',
      peakArea: 'Main Stage',
      satisfaction: 94,
      areas: [
        { name: 'Main Stage', count: 1250, capacity: 1500 },
        { name: 'Food Court', count: 680, capacity: 800 },
        { name: 'Exhibition', count: 520, capacity: 600 },
        { name: 'Networking', count: 970, capacity: 1000 }
      ]
    },
    healthcare: {
      patients: 156,
      waitTime: '12 min',
      peakDept: 'Emergency',
      satisfaction: 96,
      departments: [
        { name: 'Emergency', count: 45, avgWait: 8 },
        { name: 'Outpatient', count: 67, avgWait: 15 },
        { name: 'Radiology', count: 23, avgWait: 12 },
        { name: 'Laboratory', count: 21, avgWait: 5 }
      ]
    }
  };

  // FAQ data
  const faqData = [
    {
      question: "How accurate is the Auto People Counting system?",
      answer: "Our AI-powered system achieves up to 99% accuracy using advanced computer vision algorithms, validated across 500+ installations. The system handles various challenging conditions including crowds, lighting changes, and weather variations."
    },
    {
      question: "Is the system GDPR compliant and privacy-safe?",
      answer: "Yes, our system is fully GDPR compliant with complete anonymity. We don't use facial recognition, store personal data, or create identifiable profiles. All processing is done with privacy-first algorithms that count people without identifying them."
    },
    {
      question: "What's included in the hardware rental option?",
      answer: "The rental package includes APC EdgeBox™ hardware, professional installation, 24/7 monitoring, maintenance, firmware updates, on-site training, and hardware replacement warranty. Minimum rental period is 3-4 days with flexible extensions."
    },
    {
      question: "Can I integrate with my existing systems?",
      answer: "Absolutely. We provide comprehensive REST APIs, webhooks, and SDKs for seamless integration with existing systems including POS, HVAC, security systems, and business intelligence platforms. Custom integrations are also available."
    },
    {
      question: "What kind of support is provided?",
      answer: "Support varies by plan: rental includes 24/7 support, SaaS Professional offers priority phone/chat support, and Enterprise includes dedicated account management. All plans include email support and access to our knowledge base."
    },
    {
      question: "How quickly can the system be deployed?",
      answer: "Standard deployment takes 2-5 business days depending on complexity. This includes hardware installation, network setup, calibration, testing, and team training. Emergency deployments can be arranged within 24-48 hours."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Retail Operations Manager",
      company: "FashionForward Chain",
      image: "SJ",
      rating: 5,
      quote: "APC Solutions transformed our retail analytics. We saw a 23% increase in conversion rates within the first quarter. The insights into customer behavior patterns have been game-changing for our store layouts and staffing decisions.",
      metrics: {
        improvement: "+23%",
        metric: "Conversion Rate"
      }
    },
    {
      name: "Michael Chen",
      title: "Facilities Director",
      company: "TechTower Corporate",
      image: "MC",
      rating: 5,
      quote: "The energy savings have been incredible. Our HVAC optimization based on real occupancy data reduced our energy costs by 31% in the first quarter. The ROI was achieved faster than projected.",
      metrics: {
        improvement: "-31%",
        metric: "Energy Costs"
      }
    }
  ];

  // Customer logos
  const customers = [
    { name: 'RetailMax', logo: 'RM' },
    { name: 'SmartCorp', logo: 'SC' },
    { name: 'TechBuildings', logo: 'TB' },
    { name: 'MetroTransit', logo: 'MT' },
    { name: 'HealthFirst', logo: 'HF' },
    { name: 'EventPro', logo: 'EP' },
    { name: 'CityMall', logo: 'CM' },
    { name: 'UniCampus', logo: 'UC' }
  ];

  // Compliance badges
  const complianceBadges = [
    { name: 'GDPR Compliant', icon: <Shield className="h-5 w-5" /> },
    { name: 'ISO 27001', icon: <Award className="h-5 w-5" /> },
    { name: 'SOC 2 Type II', icon: <Lock className="h-5 w-5" /> },
    { name: 'WCAG AA', icon: <Accessibility className="h-5 w-5" /> }
  ];

  // Onboarding timeline
  const onboardingSteps = [
    {
      step: 1,
      title: "Consultation & Assessment",
      duration: "Day 1",
      description: "Site assessment, requirements analysis, and solution design tailored to your specific needs."
    },
    {
      step: 2,
      title: "Hardware Installation",
      duration: "Days 2-3", 
      description: "Professional installation of cameras and EdgeBox™ units with network configuration and testing."
    },
    {
      step: 3,
      title: "System Calibration",
      duration: "Day 4",
      description: "AI model calibration, accuracy testing, and zone configuration for optimal performance."
    },
    {
      step: 4,
      title: "Training & Go-Live",
      duration: "Day 5",
      description: "Team training, dashboard setup, and full system activation with ongoing support."
    }
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-16 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
          </div>
          
          <div className="container-responsive relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100" role="region" aria-label="Product category">
                <Award className="h-3 w-3 mr-2" aria-hidden="true" />
                AI-Powered Solution
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Auto People Counting System
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your space intelligence with 99% accurate, privacy-compliant people counting. 
                Real-time insights for retail, buildings, transit, events, and healthcare facilities.
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg"
                  onClick={() => onPageChange('demo')}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
                  aria-describedby="demo-description"
                >
                  Request Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => onPageChange('demo')}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
                >
                  Start 15-Day Trial
                </Button>
              </div>
              <p id="demo-description" className="sr-only">
                Get a free demonstration of our people counting system with expert consultation
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500" role="region" aria-label="Trust indicators">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" aria-hidden="true" />
                  <span>500+ Installations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-500" aria-hidden="true" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" aria-hidden="true" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>99% Accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Overview Section */}
        <section className="py-16 lg:py-20 bg-white" role="main">
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                Revolutionary People Counting Technology
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="text-xl mb-6">
                  The APC Auto People Counting System represents the next generation of spatial intelligence technology. 
                  Combining advanced AI computer vision with privacy-first design, our solution delivers unparalleled 
                  accuracy in people flow analytics while maintaining complete anonymity and GDPR compliance.
                </p>
                
                <p className="mb-6">
                  Built on our proprietary EdgeBox™ platform, the system processes data locally for ultra-low latency 
                  and maximum privacy protection. Whether you're optimizing retail operations, managing smart buildings, 
                  monitoring transit hubs, coordinating events, or enhancing healthcare facilities, our people counting 
                  technology provides the real-time insights you need to make data-driven decisions.
                </p>
                
                <p className="mb-6">
                  The system's advanced machine learning algorithms have been trained on millions of diverse scenarios, 
                  ensuring consistent 99% accuracy across different environments, lighting conditions, and crowd densities. 
                  Our solution scales from single-location deployments to enterprise-wide implementations, providing 
                  flexible pricing models including rental, subscription, and perpetual licensing options.
                </p>
                
                <p>
                  With seamless integration capabilities, comprehensive APIs, and 24/7 support options, the APC Auto 
                  People Counting System empowers organizations to transform their understanding of space utilization, 
                  optimize operations, reduce costs, and enhance user experiences through intelligent occupancy analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 lg:py-20 bg-gray-50" role="region" aria-labelledby="features-heading">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 id="features-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Advanced Capabilities & Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cutting-edge technology engineered for accuracy, privacy, and performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="group border-2 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <Badge className={`text-xs bg-primary/10 text-primary hover:bg-primary hover:text-white`}>
                        {feature.badge}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-16 lg:py-20 bg-white" role="region" aria-labelledby="solutions-heading">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 id="solutions-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tailored applications delivering proven ROI across diverse industries
              </p>
            </div>

            <div className="space-y-16">
              {industrySolutions.map((solution, index) => (
                <div key={solution.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                      <ImageWithFallback
                        src={solution.image}
                        alt={`${solution.title} implementation showing ${solution.subtitle.toLowerCase()}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                        <p className="text-gray-600">{solution.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{solution.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-700">{solution.metrics.accuracy}</div>
                        <div className="text-xs text-blue-600">Accuracy</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-700">{solution.metrics.roi}</div>
                        <div className="text-xs text-green-600">Avg ROI</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-lg font-bold text-purple-700">{solution.metrics.payback}</div>
                        <div className="text-xs text-purple-600">Payback</div>
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {solution.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Use Cases */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Common Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.useCases.map((useCase, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => onPageChange('applications')}
                    >
                      View Case Studies
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 lg:py-20 bg-gray-50" role="region" aria-labelledby="demo-heading">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 id="demo-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Live Analytics Dashboard
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience real-time people counting analytics across different scenarios
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-5 w-full max-w-2xl" role="tablist">
                    {industrySolutions.map((solution) => (
                      <TabsTrigger 
                        key={solution.id} 
                        value={solution.id} 
                        className="flex items-center gap-2 text-xs sm:text-sm"
                        role="tab"
                        aria-selected={activeDemo === solution.id}
                      >
                        {solution.icon}
                        <span className="hidden sm:inline">{solution.title.split(' ')[0]}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Dashboard Panel */}
                  <Card className="border-2 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <BarChart className="h-5 w-5 text-primary" aria-hidden="true" />
                          Real-time Analytics
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-100 text-green-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            Live Data
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSoundEnabled(!soundEnabled)}
                            className="p-2"
                            aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
                          >
                            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* Demo content for each industry */}
                      {Object.keys(demoData).map((industry) => (
                        <TabsContent key={industry} value={industry} className="mt-0" role="tabpanel">
                          {industry === 'retail' && (
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
                              
                              {/* Zone breakdown */}
                              <div className="space-y-2">
                                <h4 className="font-medium text-gray-900">Zone Analysis</h4>
                                {demoData.retail.zones.map((zone, idx) => (
                                  <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                    <span className="text-sm font-medium">{zone.name}</span>
                                    <div className="flex items-center gap-2">
                                      <Progress value={zone.percentage} className="w-16 h-2" />
                                      <span className="text-sm text-gray-600">{zone.count}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Heatmap visualization */}
                              <div className="h-32 bg-gradient-to-r from-blue-200 via-green-200 to-red-200 rounded-lg relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                  <span className="text-sm font-medium text-gray-700">Store Heatmap Visualization</span>
                                </div>
                                {/* Animated hotspots */}
                                <div className="absolute top-4 left-8 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                <div className="absolute bottom-6 right-12 w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-150"></div>
                                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-500 rounded-full animate-pulse delay-300"></div>
                              </div>
                            </div>
                          )}
                          
                          {/* Similar content blocks for other industries... */}
                          {industry === 'buildings' && (
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
                              
                              <div className="space-y-2">
                                <h4 className="font-medium text-gray-900">Floor Occupancy</h4>
                                {demoData.buildings.floors.map((floor, idx) => (
                                  <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                    <span className="text-sm font-medium">Floor {floor.floor}</span>
                                    <div className="flex items-center gap-2">
                                      <Progress value={floor.occupancy} className="w-16 h-2" />
                                      <span className="text-sm text-gray-600">{floor.occupancy}/{floor.capacity}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Add similar blocks for transit, events, and healthcare */}
                        </TabsContent>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Video Demo Panel */}
                  <Card className="border-2 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gray-900 relative">
                        {!demoPlaying ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button
                              size="lg"
                              className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm"
                              onClick={() => {
                                setDemoPlaying(true);
                                // In a real app, this would start video playback
                                setTimeout(() => setDemoPlaying(false), 3000);
                              }}
                              aria-label={`Play ${activeDemo} demonstration video`}
                            >
                              <Play className="h-8 w-8 mr-2" aria-hidden="true" />
                              Watch Demo
                            </Button>
                          </div>
                        ) : (
                          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                            <div className="text-white text-center">
                              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                              <p>Loading demo video...</p>
                            </div>
                          </div>
                        )}
                        
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                            <div className="text-white text-sm font-medium mb-1">
                              {industrySolutions.find(s => s.id === activeDemo)?.title} Demo
                            </div>
                            <div className="text-white/80 text-xs">
                              See real-time analytics and insights in action
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Demo controls */}
                      <div className="p-4 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            Interactive demonstration
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => onPageChange('dashboard')}
                          >
                            Full Dashboard
                            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Call-to-action below demo */}
                <div className="text-center mt-8">
                  <Button 
                    size="lg"
                    onClick={() => onPageChange('demo')}
                    className="bg-primary hover:bg-primary/90 text-white px-8"
                  >
                    Experience Live Demo
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 lg:py-20 bg-white" role="region" aria-labelledby="pricing-heading">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 id="pricing-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Flexible Pricing Options
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the perfect deployment model for your business needs and budget
              </p>
            </div>

            {/* Pricing Model Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1 flex" role="tablist" aria-label="Pricing models">
                {[
                  { id: 'rental', label: 'Hardware Rental' },
                  { id: 'subscription', label: 'SaaS Subscription' },
                  { id: 'license', label: 'Perpetual License' }
                ].map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setPricingModel(model.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      pricingModel === model.id
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    role="tab"
                    aria-selected={pricingModel === model.id}
                  >
                    {model.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Billing Period Toggle for Subscription */}
            {pricingModel === 'subscription' && (
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-4">
                  <Label htmlFor="billing-toggle">Monthly</Label>
                  <Switch
                    id="billing-toggle"
                    checked={billingPeriod === 'annual'}
                    onCheckedChange={(checked) => setBillingPeriod(checked ? 'annual' : 'monthly')}
                  />
                  <Label htmlFor="billing-toggle" className="flex items-center gap-2">
                    Annual
                    <Badge className="bg-green-100 text-green-700 text-xs">Save 10%</Badge>
                  </Label>
                </div>
              </div>
            )}

            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans[pricingModel as keyof typeof pricingPlans].map((plan, index) => (
                <Card 
                  key={plan.id} 
                  className={`relative border-2 hover:border-primary/30 transition-all duration-300 ${
                    plan.popular ? 'border-primary/20 shadow-xl scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white px-4 py-1">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      {!plan.popular && (
                        <Badge className={`${plan.badgeColor} text-white text-xs`}>
                          {plan.badge}
                        </Badge>
                      )}
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
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-primary hover:bg-primary/90 text-white'}`}
                      onClick={() => onPageChange('demo')}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional pricing info */}
            <div className="text-center mt-8 text-sm text-gray-600">
              <p>All plans include free setup and training. Custom enterprise packages available.</p>
              <Button variant="link" onClick={() => onPageChange('contact')}>
                Need a custom solution? Contact our sales team
              </Button>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 lg:py-20 bg-gray-50" role="region" aria-labelledby="comparison-heading">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 id="comparison-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Compare All Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Detailed feature comparison across all deployment options
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm" role="table">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-medium text-gray-900" scope="col">Features</th>
                    <th className="text-center py-4 px-6 font-medium text-gray-900" scope="col">Rental</th>
                    <th className="text-center py-4 px-6 font-medium text-gray-900" scope="col">SaaS</th>
                    <th className="text-center py-4 px-6 font-medium text-gray-900" scope="col">License</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Hardware Included', rental: true, saas: false, license: true },
                    { feature: 'Cloud Analytics Platform', rental: true, saas: true, license: true },
                    { feature: 'Real-time Dashboard', rental: true, saas: true, license: true },
                    { feature: '24/7 Technical Support', rental: true, saas: false, license: false },
                    { feature: 'Maintenance & Updates', rental: true, saas: true, license: '1 year' },
                    { feature: 'API Access & Integrations', rental: true, saas: true, license: true },
                    { feature: 'Multi-location Support', rental: true, saas: true, license: true },
                    { feature: 'On-premise Deployment', rental: false, saas: false, license: true },
                    { feature: 'Custom Integrations', rental: 'Available', saas: 'Professional+', license: true },
                    { feature: 'White-label Options', rental: false, saas: 'Enterprise', license: true },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-700 font-medium" scope="row">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {row.rental === true ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" aria-label="Included" />
                        ) : row.rental === false ? (
                          <div className="w-5 h-5 mx-auto" aria-label="Not included"></div>
                        ) : (
                          <span className="text-sm text-gray-600">{row.rental}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.saas === true ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" aria-label="Included" />
                        ) : row.saas === false ? (
                          <div className="w-5 h-5 mx-auto" aria-label="Not included"></div>
                        ) : (
                          <span className="text-sm text-gray-600">{row.saas}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.license === true ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" aria-label="Included" />
                        ) : row.license === false ? (
                          <div className="w-5 h-5 mx-auto" aria-label="Not included"></div>
                        ) : (
                          <span className="text-sm text-gray-600">{row.license}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-20 bg-white" role="region" aria-labelledby="faq-heading">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our people counting solutions
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <h3 className="font-medium">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="text-center mt-8">
                <Button variant="outline" onClick={() => onPageChange('faq')}>
                  View All FAQs
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance Section */}
        <section className="py-16 lg:py-20 bg-gray-50" role="region" aria-labelledby="compliance-heading">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 id="compliance-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Security & Compliance
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enterprise-grade security with global compliance certifications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {complianceBadges.map((badge, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary mb-4">
                      {badge.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900">{badge.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our commitment to privacy and security ensures your data remains protected while delivering 
                actionable insights. All processing is done with complete anonymity and no personal data storage.
              </p>
              <Button variant="outline" onClick={() => onPageChange('about')}>
                Learn About Our Security
                <Shield className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 lg:py-20 bg-white" role="region" aria-labelledby="testimonials-heading">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Customer Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how organizations achieve measurable results with our solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <Badge className="bg-green-100 text-green-700">
                        {testimonial.metrics.improvement} {testimonial.metrics.metric}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Customer logos */}
            <div className="mt-16">
              <h3 className="text-center text-lg font-medium text-gray-600 mb-8">
                Trusted by leading organizations worldwide
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                {customers.map((customer, index) => (
                  <div key={index} className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <span className="text-lg font-bold text-gray-400">{customer.logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Onboarding Timeline */}
        <section className="py-16 lg:py-20 bg-gray-50" role="region" aria-labelledby="onboarding-heading">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 id="onboarding-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Simple Setup Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get up and running in just 5 days with our proven implementation process
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {onboardingSteps.map((step, index) => (
                  <div key={step.step} className="relative">
                    {/* Connector line */}
                    {index < onboardingSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-6 left-full w-8 h-0.5 bg-primary/30 transform translate-x-4"></div>
                    )}
                    
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold text-lg mb-4">
                        {step.step}
                      </div>
                      <div className="mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {step.duration}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Demo Form */}
        <section className="py-16 lg:py-20 bg-white" role="region" aria-labelledby="contact-heading">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 id="contact-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Get Started Today
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to transform your space intelligence? Contact our experts for a personalized consultation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Get Expert Guidance</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Call Our Experts</p>
                      <p className="text-gray-600">+1-800-APC-HELP (272-4357)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email Support</p>
                      <p className="text-gray-600">info@apcsolutions.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <MessageSquare className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Live Chat</p>
                      <p className="text-gray-600">Available 24/7 for immediate assistance</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Free Consultation Includes:</h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      Site assessment and requirements analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      Custom solution design and pricing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      ROI projections and business case
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      Live demo tailored to your use case
                    </li>
                  </ul>
                </div>
              </div>

              {/* Demo Request Form */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Request Your Free Demo</CardTitle>
                  <CardDescription>
                    See our solution in action with a personalized demonstration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          required 
                          className="mt-1" 
                          aria-describedby="firstName-error"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          required 
                          className="mt-1"
                          aria-describedby="lastName-error"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Business Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        className="mt-1"
                        aria-describedby="email-error"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input 
                        id="company" 
                        required 
                        className="mt-1"
                        aria-describedby="company-error"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="retail">Retail & Shopping</SelectItem>
                          <SelectItem value="office">Office Buildings</SelectItem>
                          <SelectItem value="transit">Transportation & Transit</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="events">Events & Entertainment</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="locations">Number of Locations</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select number of locations" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Location</SelectItem>
                          <SelectItem value="2-5">2-5 Locations</SelectItem>
                          <SelectItem value="6-20">6-20 Locations</SelectItem>
                          <SelectItem value="21-100">21-100 Locations</SelectItem>
                          <SelectItem value="100+">100+ Locations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Tell us about your needs</Label>
                      <Textarea 
                        id="message" 
                        className="mt-1" 
                        rows={3}
                        placeholder="Describe your people counting requirements and goals..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      onClick={() => onPageChange('demo')}
                    >
                      Request Free Demo
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy. 
                      We respect your privacy and will never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-20 bg-primary relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10"></div>
          </div>
          
          <div className="container-responsive text-center relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transform Your Space Intelligence Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 500+ organizations worldwide that trust APC Solutions for accurate, 
              privacy-compliant people counting analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                onClick={() => onPageChange('demo')}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Request Free Demo
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => onPageChange('demo')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
              >
                Start 15-Day Trial
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => onPageChange('contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
              >
                Contact Sales
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" aria-hidden="true" />
                <span>15-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" aria-hidden="true" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" aria-hidden="true" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" aria-hidden="true" />
                <span>Expert support included</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky CTA - appears after scrolling */}
        {stickyVisible && (
          <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto">
            <Card className="border-2 border-primary shadow-xl bg-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Ready to get started?</p>
                    <p className="text-sm text-gray-600">Request your free demo</p>
                  </div>
                  <Button 
                    size="sm"
                    onClick={() => onPageChange('demo')}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Get Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}