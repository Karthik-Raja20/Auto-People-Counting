// Sample Content and Copy for Product Detail Page
// Production-ready content with SEO optimization

export const ProductDetailContent = {
  // Hero Section Content
  hero: {
    badge: 'AI-Powered Solution',
    headline: 'Auto People Counting System',
    subheadline: 'Transform your space intelligence with 99% accurate, privacy-compliant people counting. Real-time insights for retail, buildings, transit, events, and healthcare facilities.',
    primaryCTA: 'Request Free Demo',
    secondaryCTA: 'Start 15-Day Trial',
    trustIndicators: [
      { icon: 'checkmark', text: '500+ Installations' },
      { icon: 'shield', text: 'GDPR Compliant' },
      { icon: 'star', text: '4.9/5 Rating' },
      { icon: 'target', text: '99% Accuracy' }
    ]
  },

  // Feature Blocks (3 main features)
  keyFeatures: [
    {
      icon: 'accuracy',
      badge: 'AI-Powered',
      title: '99% Accuracy',
      description: 'Industry-leading precision with AI-powered computer vision algorithms validated across 500+ installations worldwide.',
      benefits: [
        'Sub-pixel detection technology',
        'Multi-angle validation system', 
        'Weather-resistant accuracy',
        'Handles high crowd density'
      ],
      metrics: 'Validated across 500+ installations'
    },
    {
      icon: 'analytics',
      badge: 'Real-time',
      title: 'Real-time Analytics',
      description: 'Instant insights with sub-second processing, live dashboards, and automated alerts for immediate actionable intelligence.',
      benefits: [
        '<500ms processing latency',
        'Live data streaming',
        'Automated alert system',
        'API integrations included'
      ],
      metrics: '< 500ms processing latency'
    },
    {
      icon: 'privacy',
      badge: 'Certified',
      title: 'Privacy & GDPR Compliance',
      description: 'Complete privacy protection with anonymous counting, no facial recognition, and full GDPR compliance for global deployments.',
      benefits: [
        'Anonymous counting only',
        'No personal data storage',
        'GDPR certified process',
        'Full data sovereignty'
      ],
      metrics: '100% anonymous & secure'
    }
  ],

  // Industry Solutions (5 solution blurbs)
  industrySolutions: [
    {
      id: 'retail',
      title: 'Retail Analytics',
      subtitle: 'Optimize store performance with advanced footfall insights',
      description: 'Transform your retail operations with comprehensive people counting analytics. Track customer behavior, optimize staffing, improve conversion rates, and enhance the shopping experience with real-time footfall data and heat mapping technology.',
      benefits: [
        '23% average conversion rate improvement',
        'Peak hour staffing optimization',
        'Queue management automation',
        'Customer journey mapping',
        'Heat map visualization',
        'Multi-store performance comparison'
      ],
      useCases: ['Department stores & malls', 'Fashion & apparel chains', 'Grocery & supermarkets', 'Electronics retailers'],
      metrics: { accuracy: '99%', roi: '280%', payback: '4 months' },
      caseStudy: 'FashionForward saw 23% conversion increase and 15% staff optimization savings within 90 days of deployment.'
    },
    {
      id: 'buildings', 
      title: 'Smart Buildings',
      subtitle: 'Enhance building efficiency with intelligent occupancy monitoring',
      description: 'Revolutionize building management with AI-powered occupancy insights. Optimize HVAC systems, reduce energy consumption, improve security protocols, and create more comfortable, efficient workspaces with real-time occupancy data and predictive analytics.',
      benefits: [
        '31% average energy cost reduction',
        'HVAC optimization automation', 
        'Security compliance monitoring',
        'Meeting room efficiency tracking',
        'Workplace utilization insights',
        'Carbon footprint reduction'
      ],
      useCases: ['Corporate office buildings', 'Co-working spaces', 'Educational institutions', 'Government facilities'],
      metrics: { accuracy: '97%', roi: '340%', payback: '6 months' },
      caseStudy: 'TechTower Corporate achieved 31% energy savings and improved employee satisfaction scores by 18%.'
    },
    {
      id: 'transit',
      title: 'Transit & Stations',
      subtitle: 'Improve passenger experience with crowd flow intelligence', 
      description: 'Enhance public transportation efficiency with comprehensive passenger flow analytics. Monitor crowd density, optimize capacity planning, improve safety protocols, and deliver superior passenger experiences with real-time crowd intelligence and predictive modeling.',
      benefits: [
        '45% reduction in crowd incidents',
        'Platform safety alert automation',
        'Capacity planning optimization',
        'Emergency evacuation coordination',
        'Service frequency optimization',
        'Passenger flow visualization'
      ],
      useCases: ['Metro & subway stations', 'Bus terminals', 'Airports & aviation hubs', 'Railway stations'],
      metrics: { accuracy: '96%', roi: '220%', payback: '8 months' },
      caseStudy: 'MetroCity reduced platform incidents by 45% and improved passenger satisfaction ratings.'
    },
    {
      id: 'events',
      title: 'Events & Venues',
      subtitle: 'Optimize event management with real-time attendee insights',
      description: 'Elevate event management with intelligent crowd analytics. Monitor attendee flow, ensure safety compliance, optimize venue layouts, and enhance guest experiences with real-time occupancy monitoring and heat mapping for successful event execution.',
      benefits: [
        'Real-time capacity monitoring',
        'Safety compliance automation', 
        'Crowd density heat mapping',
        'Emergency response coordination',
        'Vendor placement optimization',
        'Attendee behavior analytics'
      ],
      useCases: ['Conferences & exhibitions', 'Festivals & concerts', 'Sports venues', 'Trade shows'],
      metrics: { accuracy: '98%', roi: '195%', payback: 'Immediate' },
      caseStudy: 'MegaFest improved safety compliance by 100% and optimized vendor revenue by 22%.'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Facilities', 
      subtitle: 'Enhance patient care with intelligent facility monitoring',
      description: 'Improve healthcare delivery with advanced occupancy analytics. Monitor waiting areas, optimize staffing levels, ensure patient safety, and enhance operational efficiency with real-time insights that support better patient outcomes and resource allocation.',
      benefits: [
        'Average 28% patient wait time reduction',
        'Staff allocation optimization',
        'Infection control monitoring',
        'Emergency capacity management', 
        'Treatment room utilization',
        'Patient flow optimization'
      ],
      useCases: ['Hospitals & medical centers', 'Emergency departments', 'Outpatient facilities', 'Long-term care facilities'],
      metrics: { accuracy: '99%', roi: '250%', payback: '5 months' },
      caseStudy: 'HealthFirst Hospital reduced patient wait times by 28% and improved staff efficiency by 19%.'
    }
  ],

  // Pricing Table Details
  pricingDetails: {
    rental: {
      name: 'Hardware Rental',
      monthlyPrice: '₹8,000',
      annualPrice: '₹7,200',
      description: 'Complete hardware solution with professional service package',
      badge: 'Most Flexible',
      features: [
        'APC EdgeBox™ hardware included',
        'Professional installation & setup',
        '24/7 monitoring & technical support',
        'Maintenance & firmware updates',
        'Minimum 3-4 days, flexible duration',
        '₹20,000 refundable security deposit',
        'On-site training included',
        'Hardware replacement warranty'
      ],
      bestFor: 'Temporary deployments, events, trial periods',
      setupTime: '24-48 hours',
      supportLevel: '24/7 phone & on-site'
    },
    subscription: {
      starter: {
        name: 'SaaS Starter',
        monthlyPrice: '₹3,000', 
        annualPrice: '₹2,700',
        description: 'Cloud analytics platform for small deployments',
        features: [
          'Up to 3 camera locations',
          'Cloud analytics dashboard',
          'Basic reporting suite',
          'Email support during business hours',
          'API access (basic endpoints)',
          'Mobile app access',
          '30-day data retention',
          'Standard integrations'
        ]
      },
      professional: {
        name: 'SaaS Professional',
        monthlyPrice: '₹5,000',
        annualPrice: '₹4,500', 
        description: 'Full-featured cloud platform for enterprises',
        badge: 'Most Popular',
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
          'White-label options available'
        ]
      }
    },
    license: {
      name: 'Perpetual License',
      price: '₹60,000',
      description: 'Complete ownership with comprehensive support package',
      badge: 'Best Value',
      features: [
        'Complete APC solution suite',
        'Unlimited camera deployments',
        '3-year warranty included',
        'Priority support package',
        'Professional training included',
        'Lifetime software updates',
        'On-premise & cloud deployment',
        'Advanced analytics & reporting',
        'Full API access & integrations',
        'Custom development support'
      ],
      bestFor: 'Large enterprises, permanent installations',
      setupTime: '5-7 business days', 
      supportLevel: 'Priority with dedicated contact'
    }
  },

  // FAQ Entries (6 questions)
  faq: [
    {
      question: 'How accurate is the Auto People Counting system?',
      answer: 'Our AI-powered system achieves up to 99% accuracy using advanced computer vision algorithms that have been validated across 500+ installations worldwide. The system maintains high accuracy across various challenging conditions including different lighting, weather, and crowd density scenarios.',
      category: 'Technology'
    },
    {
      question: 'Is the system GDPR compliant and privacy-safe?',
      answer: 'Yes, our system is fully GDPR compliant with complete anonymity built into the core design. We don\'t use facial recognition, store any personal data, or create identifiable profiles. All processing is done with privacy-first algorithms that count people without identifying or tracking individuals.',
      category: 'Privacy & Compliance'
    },
    {
      question: 'What\'s included in the hardware rental option?',
      answer: 'The rental package includes complete APC EdgeBox™ hardware, professional installation and setup, 24/7 technical monitoring and support, maintenance and firmware updates, on-site training for your team, and hardware replacement warranty. The minimum rental period is 3-4 days with flexible extension options.',
      category: 'Pricing & Plans'
    },
    {
      question: 'Can I integrate the system with my existing infrastructure?',
      answer: 'Absolutely. We provide comprehensive REST APIs, webhooks, and SDKs for seamless integration with existing systems including POS systems, HVAC controls, security platforms, and business intelligence tools. Our team also offers custom integration development for unique requirements.',
      category: 'Integration'
    },
    {
      question: 'What kind of support and training is provided?',
      answer: 'Support varies by plan: Hardware Rental includes 24/7 phone and on-site support; SaaS Professional offers priority phone and chat support; Enterprise plans include dedicated account management. All plans include comprehensive training materials, video tutorials, and access to our expert support team.',
      category: 'Support & Training'
    },
    {
      question: 'How quickly can the system be deployed and operational?',
      answer: 'Standard deployment takes 2-5 business days depending on complexity and scale. This includes hardware installation, network configuration, system calibration, testing, and team training. For urgent requirements, we can arrange expedited deployment within 24-48 hours at no additional cost.',
      category: 'Implementation'
    }
  ],

  // Testimonial Examples (2 detailed testimonials)
  testimonials: [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Retail Operations Manager',
      company: 'FashionForward Chain',
      companySize: '45 locations',
      image: '/images/testimonials/sarah-johnson.jpg',
      avatar: 'SJ',
      rating: 5,
      quote: 'APC Solutions completely transformed our retail analytics capabilities. Within the first quarter, we saw a 23% increase in conversion rates and were able to optimize our staffing schedules based on real traffic patterns. The insights into customer behavior and store layout optimization have been absolutely game-changing for our business.',
      metrics: {
        improvement: '+23%',
        metric: 'Conversion Rate',
        additionalMetrics: [
          { label: 'Staff Optimization', value: '+15%' },
          { label: 'Customer Satisfaction', value: '+18%' }
        ]
      },
      implementation: {
        timeToValue: '30 days',
        roiAchieved: '280%',
        deploymentTime: '3 days per location'
      },
      videoTestimonial: '/videos/testimonials/fashionforward-case-study.mp4',
      caseStudyUrl: '/case-studies/fashionforward-retail-optimization'
    },
    {
      id: 2,
      name: 'Michael Chen', 
      title: 'Facilities Director',
      company: 'TechTower Corporate',
      companySize: '12-floor office complex',
      image: '/images/testimonials/michael-chen.jpg', 
      avatar: 'MC',
      rating: 5,
      quote: 'The energy savings have been incredible and exceeded our projections. Our HVAC optimization based on real occupancy data reduced energy costs by 31% in the first quarter alone. The system pays for itself through energy savings, and we\'ve also improved employee comfort and productivity with better space utilization insights.',
      metrics: {
        improvement: '-31%',
        metric: 'Energy Costs',
        additionalMetrics: [
          { label: 'Space Utilization', value: '+24%' },
          { label: 'Employee Satisfaction', value: '+18%' }
        ]
      },
      implementation: {
        timeToValue: '45 days',
        roiAchieved: '340%',
        deploymentTime: '1 week'
      },
      videoTestimonial: '/videos/testimonials/techtower-energy-savings.mp4',
      caseStudyUrl: '/case-studies/techtower-smart-building-optimization'
    }
  ],

  // Sample Meta Tags & SEO Content
  seoContent: {
    metaTitle: 'Auto People Counting System | AI Analytics Platform | APC Solutions',
    metaDescription: 'Advanced AI-powered people counting system with 99% accuracy, GDPR compliance & real-time analytics. Rental, subscription & license options. Start 15-day free trial today.',
    keywords: 'auto people counting, people counting system, footfall analytics, occupancy monitoring, people flow analytics, real-time people counter, crowd analytics, retail foot traffic, smart building occupancy, people counting camera, edge analytics, privacy-compliant people counting, GDPR compliant people counter, people counting API, people counting software, visitor analytics',
    
    // Open Graph tags
    ogTitle: 'Auto People Counting System - AI-Powered Analytics Platform',
    ogDescription: 'Transform your space intelligence with 99% accurate, privacy-compliant people counting. Real-time insights for retail, buildings, transit, events & healthcare.',
    ogImage: 'https://apcsolutions.com/images/product-og-image.jpg',
    ogImageAlt: 'APC Auto People Counting System dashboard showing real-time analytics and occupancy insights',
    
    // Twitter Card tags
    twitterTitle: 'Auto People Counting System | AI Analytics Platform',
    twitterDescription: '99% accurate people counting with GDPR compliance. Real-time analytics for retail, buildings, transit & events. Start free trial.',
    twitterImage: 'https://apcsolutions.com/images/product-twitter-card.jpg',
    
    // Additional structured data
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: 'Auto People Counting System', url: '/product-detail' }
    ]
  },

  // Call-to-Action variations
  ctaVariations: {
    primary: 'Request Free Demo',
    secondary: 'Start 15-Day Trial', 
    tertiary: 'Contact Sales Team',
    urgency: 'Get Demo Today',
    benefit: 'See Results in 15 Days',
    risk_free: 'Try Risk-Free for 15 Days',
    consultation: 'Get Expert Consultation',
    download: 'Download Product Guide'
  },

  // Trust signals and social proof
  trustSignals: {
    installations: '500+',
    accuracy: '99%',
    rating: '4.9/5', 
    countries: '25+',
    industries: '8',
    supportHours: '24/7',
    uptime: '99.9%',
    gdprCompliant: true,
    iso27001: true,
    soc2: true
  }
};

// Alt text examples for all images
export const ImageAltTexts = {
  heroDashboard: 'Real-time people counting analytics dashboard displaying footfall data, conversion rates, occupancy metrics with interactive charts and heatmaps for retail optimization',
  retailAnalytics: 'Retail store people counting heatmap showing customer flow patterns, high-traffic zones with color-coded density visualization and zone-based analytics',
  smartBuilding: 'Smart building occupancy monitoring interface displaying floor-by-floor occupancy levels, energy optimization data and HVAC control integration',
  transitStation: 'Transit station passenger flow analytics showing platform occupancy levels, crowd density alerts, real-time passenger counts and safety monitoring',
  healthcareFacility: 'Healthcare facility patient flow monitoring system displaying wait times, department occupancy, staff allocation and patient satisfaction metrics',
  eventsVenue: 'Event venue crowd management dashboard showing real-time attendee counts, area capacity monitoring, safety compliance and emergency coordination tools',
  edgeboxHardware: 'APC EdgeBox™ edge computing hardware unit for local AI people counting processing with computer vision capabilities and network connectivity',
  installationProcess: 'Professional technician installing people counting cameras and configuring edge processing units in modern commercial retail environment',
  apiIntegration: 'Software development interface showing APC people counting API integration with existing business systems and real-time data webhooks',
  privacyShield: 'GDPR compliance and privacy protection visualization showing anonymous people counting without facial recognition or personal data storage'
};

export default ProductDetailContent;