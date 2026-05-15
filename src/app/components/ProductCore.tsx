import React from 'react';
import { EnhancedProductDetail } from './EnhancedProductDetail';
import { coreSolutions, allSolutions, productDetails } from './SolutionData';
import { 
  Camera,
  Cpu,
  BarChart3,
  Settings,
  Headphones,
  Shield,
  ShoppingCart,
  Building,
  Plane,
  Music
} from 'lucide-react';

interface ProductCoreProps {
  onPageChange: (page: string) => void;
}

export function ProductCore({ onPageChange }: ProductCoreProps) {
  // Get product data from shared data source
  const coreProduct = coreSolutions.find(solution => solution.id === 'core')!;
  const coreDetails = productDetails.core;
  
  const productData = {
    name: coreProduct.name,
    subtitle: coreProduct.subtitle,
    tagline: 'The Ultimate Turnkey People Counting Solution',
    price: coreProduct.price,
    priceDetails: 'One-time Payment',
    subscriptionPrice: `${coreProduct.subscriptionPrice} + ₹5,000/month`,
    rentalPrice: coreProduct.rentalPrice,
    description: coreProduct.description + ' Perfect for enterprises wanting hassle-free deployment with maximum accuracy.',
    accuracy: coreDetails.accuracy,
    setupTime: coreDetails.setupTime,
    roi: coreDetails.roi,
    warranty: coreDetails.warranty,
    support: coreDetails.support,
    badge: coreProduct.badge,
    badgeColor: coreProduct.badgeColor,
    hero: coreDetails.hero
  };

  const keyFeatures = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: 'Premium AI Cameras',
      description: 'Enterprise-grade cameras with advanced computer vision',
      details: [
        '4K resolution with night vision capability',
        'Wide-angle coverage up to 180° field of view',
        'Weather-resistant IP67 rating for outdoor use',
        'PoE+ powered for easy installation',
        'Advanced lens correction and auto-focus',
        'Multi-spectral imaging for enhanced accuracy',
        'Thermal imaging integration capabilities',
        'Advanced motion detection algorithms'
      ]
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: 'APC EdgeBox™',
      description: 'Revolutionary edge computing platform',
      details: [
        'ARM Cortex-A78 8-core processor',
        'Dedicated Neural Processing Unit (NPU)',
        '8GB LPDDR5 RAM, 128GB storage',
        'Real-time AI processing capabilities',
        'Edge computing reduces latency to <100ms',
        'Local data processing ensures privacy',
        'Advanced machine learning inference',
        'Automatic load balancing and optimization'
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Smart Analytics Platform',
      description: 'Comprehensive dashboard with advanced insights',
      details: [
        'Real-time occupancy monitoring',
        'Historical trend analysis and reporting',
        'Predictive analytics and forecasting',
        'Custom reporting and dashboard tools',
        'Advanced heatmap visualizations',
        'Automated alert and notification system',
        'Multi-location centralized management',
        'API integration for third-party systems'
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Professional Installation',
      description: 'Expert setup and configuration included',
      details: [
        'Comprehensive site survey and optimization',
        'Professional mounting and wiring services',
        'System calibration and accuracy testing',
        'Complete staff training program',
        'Custom configuration for your environment',
        'Network setup and security configuration',
        'Performance testing and validation',
        'Documentation and handover process'
      ]
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: '24/7 Premium Support',
      description: 'Round-the-clock expert assistance',
      details: [
        'Dedicated support hotline available 24/7',
        'Remote monitoring and diagnostics',
        'Proactive maintenance alerts and updates',
        'Priority response times under 2 hours',
        'Dedicated account manager for enterprises',
        'Quarterly optimization reviews',
        'Emergency on-site support available',
        'Comprehensive warranty coverage'
      ]
    }
  ];

  const technicalSpecs = {
    hardware: [
      { spec: 'Camera Resolution', value: '4K Ultra HD (3840×2160)' },
      { spec: 'Field of View', value: '90° - 180° adjustable' },
      { spec: 'Operating Temperature', value: '-20°C to +60°C' },
      { spec: 'Power Requirements', value: 'PoE+ (25.5W max)' },
      { spec: 'Connectivity', value: 'Ethernet, Wi-Fi 6E, 5G/LTE' },
      { spec: 'Storage', value: '128GB local + cloud backup' }
    ],
    software: [
      { spec: 'AI Processing', value: 'Real-time edge computing' },
      { spec: 'Accuracy', value: 'Up to 99% in optimal conditions' },
      { spec: 'Latency', value: '<100ms response time' },
      { spec: 'Analytics', value: 'Advanced ML algorithms' },
      { spec: 'API Access', value: 'RESTful API with webhooks' },
      { spec: 'Updates', value: 'Automatic OTA updates' }
    ],
    compliance: [
      { spec: 'Privacy', value: 'GDPR, CCPA, HIPAA ready' },
      { spec: 'Security', value: 'SOC2 Type II, ISO 27001' },
      { spec: 'Environmental', value: 'RoHS, CE, FCC certified' },
      { spec: 'Safety', value: 'UL Listed, IP67 rated' }
    ]
  };

  const useCases = [
    {
      industry: 'Retail & Shopping Malls',
      icon: <ShoppingCart className="h-8 w-8" />,
      description: 'Optimize customer flow, reduce queues, and increase conversions',
      benefits: ['42% reduction in queue times', '20% increase in conversions', 'Real-time staff optimization'],
      roi: '$180K annual savings per store',
      caseStudy: 'MegaMall chain saw 42% queue reduction across 450 stores'
    },
    {
      industry: 'Corporate Offices',
      icon: <Building className="h-8 w-8" />,
      description: 'Smart workspace optimization and energy efficiency',
      benefits: ['35% energy cost reduction', 'Improved space utilization', 'Enhanced employee productivity'],
      roi: '$120K annual savings per building',
      caseStudy: 'TechCorp achieved 35% energy savings across headquarters'
    },
    {
      industry: 'Transportation Hubs',
      icon: <Plane className="h-8 w-8" />,
      description: 'Passenger flow optimization and security enhancement',
      benefits: ['40% faster security processing', 'Reduced congestion', 'Enhanced safety protocols'],
      roi: '$250K operational efficiency gains',
      caseStudy: 'International Airport improved passenger flow by 40%'
    },
    {
      industry: 'Entertainment Venues',
      icon: <Music className="h-8 w-8" />,
      description: 'Crowd safety and capacity management',
      benefits: ['90% reduction in safety incidents', 'Optimized venue utilization', 'Enhanced guest experience'],
      roi: '$95K risk mitigation value',
      caseStudy: 'Summer festival achieved zero safety incidents'
    }
  ];

  const implementationProcess = [
    {
      phase: '1',
      title: 'Discovery & Planning',
      duration: '1-2 days',
      description: 'Comprehensive site assessment and solution design',
      activities: [
        'Site survey and space analysis',
        'Requirements gathering and documentation',
        'Custom solution design and planning',
        'Timeline and resource allocation'
      ]
    },
    {
      phase: '2',
      title: 'Installation & Setup',
      duration: '1-2 days',
      description: 'Professional hardware installation and configuration',
      activities: [
        'Camera mounting and positioning',
        'EdgeBox deployment and connectivity',
        'Network configuration and testing',
        'System calibration and optimization'
      ]
    },
    {
      phase: '3',
      title: 'Testing & Training',
      duration: '1 day',
      description: 'Comprehensive testing and team training',
      activities: [
        'Accuracy testing and validation',
        'Dashboard training for administrators',
        'User training for staff members',
        'Documentation and knowledge transfer'
      ]
    },
    {
      phase: '4',
      title: 'Go-Live & Support',
      duration: 'Ongoing',
      description: 'Launch and continuous optimization',
      activities: [
        'Production deployment and monitoring',
        '24/7 support activation',
        'Performance optimization',
        'Regular health checks and updates'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "APC Core transformed our operations completely. The setup was seamless, and we saw immediate results. Queue times dropped by 42% in the first month.",
      author: "Sarah Chen",
      position: "Operations Director",
      company: "MegaMall Retail Chain",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=100",
      metrics: "42% queue reduction, $2.3M annual savings"
    },
    {
      quote: "The ROI was evident within 60 days. Customer satisfaction scores have never been higher, and our staff can focus on customer service instead of crowd management.",
      author: "Michael Rodriguez",
      position: "Facility Manager",
      company: "TechCorp Campus",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      metrics: "35% energy savings, $1.8M cost reduction"
    },
    {
      quote: "APC Core's accuracy is unmatched. The real-time insights help us make instant decisions that improve passenger experience and operational efficiency.",
      author: "Emma Thompson",
      position: "Operations Manager",
      company: "International Airport",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      metrics: "40% flow improvement, $1.2M efficiency gains"
    }
  ];

  const faqData = [
    {
      id: 'faq-1',
      question: 'What makes APC Core different from other people counting solutions?',
      answer: 'APC Core offers the highest accuracy in the industry (up to 99%) with our revolutionary EdgeBox™ technology. Unlike competitors, we provide complete edge processing, ensuring privacy and reducing latency. Our turnkey approach includes premium cameras, professional installation, and 24/7 support - everything you need in one package.',
      category: 'Product'
    },
    {
      id: 'faq-2',
      question: 'How long does the installation and setup process take?',
      answer: 'APC Core installation typically takes 1-2 days depending on your facility size. This includes professional camera mounting, EdgeBox™ setup, network configuration, calibration, and team training. We handle everything to ensure you\'re up and running quickly with minimal disruption.',
      category: 'Implementation'
    },
    {
      id: 'faq-3',
      question: 'What kind of ROI can I expect with APC Core?',
      answer: 'Most customers see 350-500% ROI in the first year. Benefits include reduced operational costs (35% average), increased revenue through optimization (20% average), and improved efficiency. Payback period typically ranges from 6-12 months depending on your use case.',
      category: 'ROI'
    },
    {
      id: 'faq-4',
      question: 'Is APC Core GDPR compliant and privacy-focused?',
      answer: 'Yes, APC Core is fully GDPR compliant by design. All processing happens locally on EdgeBox™ - no personal data leaves your premises. We use anonymous movement tracking without facial recognition, ensuring complete privacy compliance while delivering accurate analytics.',
      category: 'Privacy'
    },
    {
      id: 'faq-5',
      question: 'What support is included with APC Core?',
      answer: 'APC Core includes comprehensive 24/7 premium support: dedicated hotline, remote monitoring, proactive maintenance alerts, software updates, and priority response times. You also get quarterly optimization reviews and a dedicated account manager for enterprise customers.',
      category: 'Support'
    },
    {
      id: 'faq-6',
      question: 'Can APC Core integrate with my existing systems?',
      answer: 'Yes, APC Core offers extensive integration capabilities including POS systems, HVAC controls, access control, security systems, and custom APIs. Our team handles all integration setup to ensure seamless operation with your existing infrastructure.',
      category: 'Integration'
    },
    {
      id: 'faq-7',
      question: 'What happens if my internet connection goes down?',
      answer: 'APC Core continues operating normally during internet outages. EdgeBox™ stores up to 30 days of data locally and processes everything in real-time. When connectivity resumes, all data automatically syncs to the cloud without any loss.',
      category: 'Technical'
    },
    {
      id: 'faq-8',
      question: 'How accurate is APC Core in different environments?',
      answer: 'APC Core delivers up to 99% accuracy in optimal conditions. Performance varies based on lighting, crowd density, and camera placement. We provide detailed accuracy reports during your POC and optimize placement for maximum precision in your specific environment.',
      category: 'Performance'
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
      productSolutions={[coreProduct]}
    />
  );
}