import React from 'react';
import { EnhancedProductDetail } from './EnhancedProductDetail';
import { coreSolutions, allSolutions, productDetails } from './SolutionData';
import { 
  Camera,
  Cpu,
  BarChart3,
  TrendingUp,
  Settings,
  Phone,
  ShoppingCart,
  Building,
  Factory,
  Music
} from 'lucide-react';

interface ProductFlexProps {
  onPageChange: (page: string) => void;
}

export function ProductFlex({ onPageChange }: ProductFlexProps) {
  // Get product data from shared data source
  const flexProduct = coreSolutions.find(solution => solution.id === 'flex')!;
  const flexDetails = productDetails.flex;
  
  const productData = {
    name: flexProduct.name,
    subtitle: flexProduct.subtitle,
    tagline: 'Advanced Analytics without Premium Costs',
    price: flexProduct.price,
    priceDetails: 'One-time Payment',
    subscriptionPrice: `${flexProduct.subscriptionPrice} + ₹4,000/month`,
    rentalPrice: flexProduct.rentalPrice,
    description: flexProduct.description + ' Perfect for growing businesses that want advanced intelligence without the premium price tag.',
    accuracy: flexDetails.accuracy,
    setupTime: flexDetails.setupTime,
    roi: flexDetails.roi,
    warranty: flexDetails.warranty,
    support: flexDetails.support,
    badge: flexProduct.badge,
    badgeColor: flexProduct.badgeColor,
    hero: flexDetails.hero
  };

  const keyFeatures = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: 'Smart Cameras',
      description: 'Cost-effective cameras with intelligent processing',
      details: [
        '1080p HD resolution with smart processing',
        'Wide coverage up to 120° field of view',
        'Basic weather resistance IP54 rated',
        'Standard PoE powered installation',
        'Optimized lens design for accuracy',
        'Advanced image processing algorithms',
        'Day/night vision capabilities',
        'Cost-effective yet reliable performance'
      ]
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: 'APC EdgeBox™',
      description: 'Same powerful edge computing platform',
      details: [
        'ARM Cortex-A72 quad-core processor',
        'Dedicated AI processing unit',
        '4GB RAM, 64GB storage capacity',
        'Real-time analytics processing',
        'Edge computing for reduced latency',
        'Efficient power management',
        'Robust processing capabilities',
        'Scalable architecture design'
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Advanced Analytics',
      description: 'Full-featured analytics without premium cost',
      details: [
        'Real-time occupancy tracking',
        'Historical trend analysis and reports',
        'Email alert notifications system',
        'Standard reporting dashboard',
        'Data visualization tools',
        'Export capabilities for analysis',
        'Multi-location data aggregation',
        'Performance monitoring metrics'
      ]
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Scalable Solution',
      description: 'Perfect for multi-location deployments',
      details: [
        'Easy replication across multiple sites',
        'Centralized management portal',
        'Volume discount pricing structure',
        'Standardized installation process',
        'Franchise-friendly deployment model',
        'Consistent performance across locations',
        'Simplified training and operations',
        'Efficient rollout capabilities'
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Business Hours Support',
      description: 'Comprehensive support during business hours',
      details: [
        'Email and phone support (8 AM - 6 PM)',
        'Remote troubleshooting capabilities',
        'Software updates included',
        'Knowledge base access',
        'Monthly performance reports',
        'Technical documentation library',
        'Video training resources',
        'Community forum access'
      ]
    }
  ];

  const technicalSpecs = {
    hardware: [
      { spec: 'Camera Resolution', value: '1080p Full HD (1920×1080)' },
      { spec: 'Field of View', value: '90° - 120° adjustable' },
      { spec: 'Operating Temperature', value: '-10°C to +50°C' },
      { spec: 'Power Requirements', value: 'PoE (15.4W max)' },
      { spec: 'Connectivity', value: 'Ethernet, Wi-Fi 5' },
      { spec: 'Storage', value: '64GB local + cloud sync' }
    ],
    software: [
      { spec: 'AI Processing', value: 'Edge-based analytics' },
      { spec: 'Accuracy', value: 'Up to 95% in optimal conditions' },
      { spec: 'Latency', value: '<200ms response time' },
      { spec: 'Analytics', value: 'Standard ML algorithms' },
      { spec: 'API Access', value: 'REST API included' },
      { spec: 'Updates', value: 'Scheduled maintenance updates' }
    ],
    compliance: [
      { spec: 'Privacy', value: 'GDPR, CCPA compliant' },
      { spec: 'Security', value: 'Standard encryption' },
      { spec: 'Environmental', value: 'RoHS, CE, FCC certified' },
      { spec: 'Safety', value: 'UL Listed, IP54 rated' }
    ]
  };

  const useCases = [
    {
      industry: 'Franchises & Chain Stores',
      icon: <ShoppingCart className="h-8 w-8" />,
      description: 'Cost-effective analytics for multi-location retailers',
      benefits: ['Standardized analytics across all locations', '25% cost savings vs premium solutions', 'Centralized management dashboard'],
      roi: '$85K annual savings per location',
      caseStudy: 'Fast food chain reduced costs by 25% while gaining insights'
    },
    {
      industry: 'Mid-Size Offices',
      icon: <Building className="h-8 w-8" />,
      description: 'Smart workspace optimization for growing companies',
      benefits: ['20% energy cost reduction', 'Improved space planning', 'Basic occupancy compliance'],
      roi: '$45K annual efficiency gains',
      caseStudy: 'Tech startup optimized workspace utilization by 30%'
    },
    {
      industry: 'Warehouses & Distribution',
      icon: <Factory className="h-8 w-8" />,
      description: 'Workforce analytics and safety monitoring',
      benefits: ['30% better workforce allocation', 'Safety compliance tracking', 'Operational efficiency insights'],
      roi: '$120K productivity improvements',
      caseStudy: 'Distribution center improved efficiency by 35%'
    },
    {
      industry: 'Small Events & Venues',
      icon: <Music className="h-8 w-8" />,
      description: 'Budget-friendly crowd monitoring for smaller venues',
      benefits: ['Basic crowd safety monitoring', 'Capacity management', 'Event optimization insights'],
      roi: '$25K risk mitigation value',
      caseStudy: 'Community center improved event management'
    }
  ];

  const implementationProcess = [
    {
      phase: '1',
      title: 'Assessment & Planning',
      duration: '1 day',
      description: 'Site evaluation and solution planning',
      activities: [
        'Basic site survey and assessment',
        'Requirements documentation',
        'Standard solution configuration',
        'Installation timeline planning'
      ]
    },
    {
      phase: '2',
      title: 'Installation & Setup',
      duration: '1-2 days',
      description: 'Hardware installation and basic configuration',
      activities: [
        'Camera mounting and positioning',
        'EdgeBox setup and connectivity',
        'Network configuration',
        'Basic system calibration'
      ]
    },
    {
      phase: '3',
      title: 'Testing & Training',
      duration: '0.5 day',
      description: 'System validation and user training',
      activities: [
        'Accuracy testing and validation',
        'Basic dashboard training',
        'User manual walkthrough',
        'Contact information setup'
      ]
    },
    {
      phase: '4',
      title: 'Go-Live & Support',
      duration: 'Ongoing',
      description: 'Launch and business hours support',
      activities: [
        'Production deployment',
        'Business hours support activation',
        'Monthly performance reports',
        'Regular system updates'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "APC Flex gave us enterprise-level analytics at a fraction of the cost. Perfect for our growing franchise network.",
      author: "James Wilson",
      position: "Operations Manager",
      company: "QuickBite Franchise",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      metrics: "25% cost savings, 15 locations deployed"
    },
    {
      quote: "We needed analytics but had budget constraints. APC Flex delivered exactly what we needed without breaking the bank.",
      author: "Lisa Chen",
      position: "Facility Director",
      company: "GrowthTech Startup",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=100",
      metrics: "30% space optimization, $45K savings"
    },
    {
      quote: "The perfect balance of features and cost. APC Flex helps us maintain efficiency without premium pricing.",
      author: "Robert Martinez",
      position: "Warehouse Manager",
      company: "Regional Logistics",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      metrics: "35% efficiency gain, 18-month payback"
    }
  ];

  const faqData = [
    {
      id: 'faq-1',
      question: 'How does APC Flex compare to APC Core in terms of features?',
      answer: 'APC Flex offers the same core AI analytics and EdgeBox™ technology as APC Core, but uses cost-effective cameras instead of premium ones. You get 95% accuracy (vs 99% with Core), standard support (vs 24/7), and basic integrations. Perfect for budget-conscious deployments that still need professional-grade analytics.',
      category: 'Product Comparison'
    },
    {
      id: 'faq-2',
      question: 'What kind of cost savings can I expect with APC Flex?',
      answer: 'APC Flex typically costs 25-40% less than premium solutions while delivering similar analytics capabilities. Most customers see 300-400% ROI in the first year through operational improvements, energy savings, and efficiency gains. The lower upfront cost makes it accessible for growing businesses.',
      category: 'Cost & ROI'
    },
    {
      id: 'faq-3',
      question: 'Is the 95% accuracy sufficient for business decisions?',
      answer: 'Yes, 95% accuracy is excellent for most business applications. While APC Core offers up to 99% accuracy, APC Flex\'s 95% is still industry-leading and provides reliable data for operational decisions, trend analysis, and optimization strategies.',
      category: 'Performance'
    },
    {
      id: 'faq-4',
      question: 'Can I upgrade from APC Flex to APC Core later?',
      answer: 'Absolutely! APC Flex is designed to be upgrade-friendly. You can enhance your system with premium cameras and features as your business grows. The EdgeBox™ platform and analytics remain consistent, making upgrades seamless.',
      category: 'Upgrades'
    },
    {
      id: 'faq-5',
      question: 'What support is included with APC Flex?',
      answer: 'APC Flex includes comprehensive business hours support (8 AM - 6 PM, Monday-Friday) via email and phone, remote troubleshooting, software updates, knowledge base access, and monthly performance reports. Extended support hours are available as an add-on.',
      category: 'Support'
    },
    {
      id: 'faq-6',
      question: 'Is APC Flex suitable for multi-location deployments?',
      answer: 'Yes, APC Flex is specifically designed for scalability. The standardized installation process, centralized management portal, and volume discounts make it perfect for franchises and multi-location businesses looking for consistent analytics across all sites.',
      category: 'Scalability'
    },
    {
      id: 'faq-7',
      question: 'What integrations are available with APC Flex?',
      answer: 'APC Flex supports standard integrations including basic POS systems, email notifications, facilities management systems, and standard APIs. While not as extensive as APC Core, it covers the essential integrations most businesses need.',
      category: 'Integrations'
    },
    {
      id: 'faq-8',
      question: 'How quickly can APC Flex be deployed across multiple locations?',
      answer: 'APC Flex is designed for rapid deployment. After the initial setup, additional locations can typically be deployed within 1-2 days each. Our standardized process and pre-configured systems enable quick rollouts across franchise networks.',
      category: 'Deployment'
    }
  ];

  return (
    <EnhancedProductDetail
      onPageChange={onPageChange}
      productData={productData}
      keyFeatures={keyFeatures}
      technicalSpecs={technicalSpecs}
      useCases={useCases}
      implementationProcess={implementationProcess}
      testimonials={testimonials}
      faqData={faqData}
      productSolutions={[flexProduct]}
    />
  );
}