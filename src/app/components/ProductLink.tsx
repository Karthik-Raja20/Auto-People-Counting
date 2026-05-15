import React from 'react';
import { EnhancedProductDetail } from './EnhancedProductDetail';
import { coreSolutions, allSolutions, productDetails } from './SolutionData';
import { 
  Link2,
  Cpu,
  BarChart3,
  Recycle,
  Settings,
  Mail,
  ShoppingCart,
  Building,
  Camera,
  Router
} from 'lucide-react';

interface ProductLinkProps {
  onPageChange: (page: string) => void;
}

export function ProductLink({ onPageChange }: ProductLinkProps) {
  // Get product data from shared data source
  const linkProduct = coreSolutions.find(solution => solution.id === 'link')!;
  const linkDetails = productDetails.link;
  
  const productData = {
    name: linkProduct.name,
    subtitle: linkProduct.subtitle,
    tagline: 'Transform Existing Cameras into Smart Analytics',
    price: linkProduct.price,
    priceDetails: 'One-time Payment',
    subscriptionPrice: `${linkProduct.subscriptionPrice} + ₹3,000/month`,
    rentalPrice: linkProduct.rentalPrice,
    description: linkProduct.description + ' Perfect for businesses that want to maximize ROI from existing camera infrastructure.',
    accuracy: linkDetails.accuracy,
    setupTime: linkDetails.setupTime,
    roi: linkDetails.roi,
    warranty: linkDetails.warranty,
    support: linkDetails.support,
    badge: linkProduct.badge,
    badgeColor: linkProduct.badgeColor,
    hero: linkDetails.hero
  };

  const keyFeatures = [
    {
      icon: <Link2 className="h-6 w-6" />,
      title: 'Existing Camera Integration',
      description: 'Works with your current IP camera setup',
      details: [
        'ONVIF-compatible IP cameras supported',
        'No camera replacement needed',
        'Seamless integration process',
        'Preserves existing infrastructure investment',
        'Compatible with 720p minimum resolution',
        'Works with most major camera brands',
        'Automatic camera discovery and setup',
        'Legacy system modernization'
      ]
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: 'APC EdgeBox™',
      description: 'Powerful edge computing for analytics',
      details: [
        'ARM Cortex-A55 processor',
        'Dedicated AI processing capabilities',
        '2GB RAM, 32GB storage',
        'Software-based analytics engine',
        'Cloud-assisted processing',
        'Efficient power consumption',
        'Compact form factor design',
        'Easy network integration'
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Cloud-Based Analytics',
      description: 'Comprehensive analytics platform in the cloud',
      details: [
        'Real-time dashboard access from anywhere',
        'Historical data analysis and trends',
        'Cloud-based reporting system',
        'Remote system monitoring',
        'Automatic data backup and sync',
        'Multi-device access capabilities',
        'Secure cloud infrastructure',
        'Scalable data storage'
      ]
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: 'Maximum ROI',
      description: 'Leverage existing investments for new capabilities',
      details: [
        'Use existing camera infrastructure',
        'Minimal additional hardware requirements',
        'Quick deployment timeline (1-2 days)',
        'Cost-effective upgrade path',
        '60-80% cost savings vs replacement',
        'Extended camera system lifespan',
        'Immediate analytics capabilities',
        'Gradual technology modernization'
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Support',
      description: 'Reliable email-based support system',
      details: [
        'Email support during business hours',
        'Remote diagnostic capabilities',
        'Comprehensive knowledge base access',
        'Software update notifications',
        'Technical documentation library',
        'Video setup guides available',
        'Community forum support',
        'FAQ and troubleshooting guides'
      ]
    }
  ];

  const technicalSpecs = {
    hardware: [
      { spec: 'Camera Compatibility', value: 'ONVIF-compliant IP cameras' },
      { spec: 'Minimum Resolution', value: '720p HD (1280×720)' },
      { spec: 'Network Requirements', value: 'Ethernet connectivity' },
      { spec: 'Power Requirements', value: 'Standard power adapter' },
      { spec: 'EdgeBox Storage', value: '32GB local storage' },
      { spec: 'Processing Unit', value: 'ARM Cortex-A55 processor' }
    ],
    software: [
      { spec: 'AI Processing', value: 'Cloud-assisted analytics' },
      { spec: 'Accuracy', value: 'Up to 90% depending on camera quality' },
      { spec: 'Latency', value: '<500ms response time' },
      { spec: 'Analytics', value: 'Basic ML algorithms' },
      { spec: 'API Access', value: 'Standard REST API' },
      { spec: 'Updates', value: 'Automatic cloud updates' }
    ],
    compliance: [
      { spec: 'Privacy', value: 'GDPR, CCPA compliant' },
      { spec: 'Security', value: 'TLS encryption' },
      { spec: 'Environmental', value: 'RoHS, CE, FCC certified' },
      { spec: 'Safety', value: 'Standard electrical safety' }
    ]
  };

  const useCases = [
    {
      industry: 'Retail Stores with Existing Cameras',
      icon: <ShoppingCart className="h-8 w-8" />,
      description: 'Add analytics to existing security camera systems',
      benefits: ['No camera replacement costs', 'Quick ROI realization', 'Minimal operational disruption'],
      roi: '$65K saved vs new camera installation',
      caseStudy: 'Retail chain added analytics to 200 existing cameras'
    },
    {
      industry: 'Office Buildings',
      icon: <Building className="h-8 w-8" />,
      description: 'Transform security cameras into occupancy sensors',
      benefits: ['Leverage existing security infrastructure', 'Basic space optimization', 'Energy management insights'],
      roi: '$30K annual efficiency gains',
      caseStudy: 'Office complex optimized HVAC using existing cameras'
    },
    {
      industry: 'Small Businesses',
      icon: <Camera className="h-8 w-8" />,
      description: 'Budget-friendly analytics for small operations',
      benefits: ['Minimal upfront investment', 'Use existing security cameras', 'Basic foot traffic insights'],
      roi: '$15K operational improvements',
      caseStudy: 'Small clinic optimized staff scheduling'
    },
    {
      industry: 'Legacy Infrastructure',
      icon: <Router className="h-8 w-8" />,
      description: 'Modernize older camera systems with AI',
      benefits: ['Extend camera system lifespan', 'Add modern analytics capabilities', 'Gradual technology upgrade'],
      roi: '$40K infrastructure cost savings',
      caseStudy: 'Manufacturing facility modernized 10-year-old camera system'
    }
  ];

  const implementationProcess = [
    {
      phase: '1',
      title: 'Camera Assessment',
      duration: '0.5 day',
      description: 'Evaluate existing camera compatibility',
      activities: [
        'Camera system compatibility check',
        'Network infrastructure assessment',
        'ONVIF compliance verification',
        'Integration planning'
      ]
    },
    {
      phase: '2',
      title: 'EdgeBox Installation',
      duration: '1 day',
      description: 'Install and configure EdgeBox™ unit',
      activities: [
        'EdgeBox hardware installation',
        'Network connectivity setup',
        'Camera integration configuration',
        'Basic system testing'
      ]
    },
    {
      phase: '3',
      title: 'Software Configuration',
      duration: '0.5 day',
      description: 'Configure analytics and dashboard access',
      activities: [
        'Analytics software configuration',
        'Cloud dashboard setup',
        'User account creation',
        'Basic training session'
      ]
    },
    {
      phase: '4',
      title: 'Go-Live & Support',
      duration: 'Ongoing',
      description: 'Launch system and provide support',
      activities: [
        'System activation',
        'Email support setup',
        'Performance monitoring',
        'Regular software updates'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "APC Link transformed our existing security cameras into powerful analytics tools. We got insights without replacing our entire camera system.",
      author: "David Park",
      position: "Store Manager",
      company: "Metro Electronics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      metrics: "$65K saved vs new system, 6-month payback"
    },
    {
      quote: "Perfect for our budget constraints. We leveraged our existing cameras and got the analytics we needed without breaking the bank.",
      author: "Maria Santos",
      position: "Operations Director",
      company: "Community Clinic",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=100",
      metrics: "90% cost savings vs full replacement"
    },
    {
      quote: "APC Link helped us modernize our 10-year-old camera system. Now we have analytics capabilities we never thought possible.",
      author: "Tom Johnson",
      position: "Facility Manager",
      company: "Legacy Manufacturing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      metrics: "Extended system life by 5+ years"
    }
  ];

  const faqData = [
    {
      id: 'faq-1',
      question: 'Will APC Link work with my existing cameras?',
      answer: 'APC Link works with most IP cameras that support ONVIF standards. We can assess your current camera system for compatibility during our initial consultation. Cameras need to be at least 720p resolution for basic analytics functionality.',
      category: 'Compatibility'
    },
    {
      id: 'faq-2',
      question: 'How much can I save compared to replacing my entire camera system?',
      answer: 'Most customers save 60-80% compared to a complete camera system replacement. APC Link leverages your existing infrastructure investment while adding modern AI analytics capabilities, dramatically reducing upfront costs.',
      category: 'Cost Savings'
    },
    {
      id: 'faq-3',
      question: 'What level of accuracy can I expect with my current cameras?',
      answer: 'Accuracy depends on your camera quality and positioning. With good quality IP cameras, APC Link typically delivers 85-90% accuracy. While lower than our dedicated camera solutions, it\'s still highly effective for most business applications.',
      category: 'Performance'
    },
    {
      id: 'faq-4',
      question: 'How quickly can APC Link be deployed?',
      answer: 'APC Link can typically be deployed within 1-2 days since it leverages your existing cameras. The process involves installing the EdgeBox™ unit, configuring software connections, and setting up your analytics dashboard.',
      category: 'Deployment'
    },
    {
      id: 'faq-5',
      question: 'What support is provided with APC Link?',
      answer: 'APC Link includes email support during business hours, remote diagnostic capabilities, software updates, and access to our knowledge base. Phone support is available as an optional add-on service.',
      category: 'Support'
    },
    {
      id: 'faq-6',
      question: 'Can I upgrade to APC Core or Flex later?',
      answer: 'Yes, APC Link provides an excellent upgrade path. If you later decide to enhance your capabilities, we can upgrade your system to APC Flex or Core with premium cameras while retaining your EdgeBox™ investment.',
      category: 'Upgrades'
    },
    {
      id: 'faq-7',
      question: 'Does APC Link require internet connectivity?',
      answer: 'Yes, APC Link uses cloud-based analytics processing, so reliable internet connectivity is required. The EdgeBox™ can buffer data during short outages, but consistent connectivity is needed for real-time analytics.',
      category: 'Technical Requirements'
    },
    {
      id: 'faq-8',
      question: 'What if my cameras are older or lower resolution?',
      answer: 'APC Link works best with cameras that are 720p or higher resolution. Older or lower resolution cameras may provide limited analytics accuracy. We can assess your specific setup and recommend the best approach during consultation.',
      category: 'Camera Requirements'
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
      productSolutions={[linkProduct]}
    />
  );
}