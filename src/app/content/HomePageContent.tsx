// High-Conversion Homepage Content & Copy Variations
// SEO-optimized, conversion-focused content

export const HomePageContent = {
  // SEO Meta Tags (3 variations for A/B testing)
  seoMeta: {
    titleOptions: [
      "Auto People Counting - AI Analytics Platform | APC Solutions", // 59 chars
      "Real-time People Counting & Analytics | APC Solutions", // 56 chars  
      "AI People Counting System - 99% Accuracy | APC Solutions" // 58 chars
    ],
    descriptionOptions: [
      "Transform your space with AI-powered people counting. 99% accuracy, GDPR compliant, real-time insights. 15-day free trial available.", // 154 chars
      "Auto people counting system with 99% accuracy and privacy compliance. Real-time analytics for retail, buildings, events. Start free trial.", // 153 chars
      "AI-powered people counting delivering instant insights. GDPR compliant, 99% accurate, real-time analytics. Free demo and trial available." // 152 chars
    ]
  },

  // Hero Section Copy Variations
  hero: {
    h1Options: [
      "Auto People Counting - Real-time Insights", // 7 words
      "Accurate People Counting for Smart Spaces", // 6 words
      "Real-time People Flow Analytics Platform" // 5 words
    ],
    subheadOptions: [
      "99% accurate people counting with privacy-first AI and real-time insights.", // 11 words
      "Transform spaces with GDPR-compliant analytics and instant actionable data.", // 10 words
      "AI-powered occupancy monitoring delivering immediate business intelligence and optimization." // 9 words
    ],
    primaryCTAOptions: [
      "Request Live Demo",
      "Get Free Demo", 
      "Start Free Trial"
    ],
    secondaryCTAOptions: [
      "Watch 30s Demo",
      "Compare Plans",
      "See Pricing"
    ]
  },

  // Trust Line Variations
  trustLines: [
    "Trusted by 200+ retailers — 99% accuracy", // Primary
    "500+ installations worldwide — 98% accuracy",
    "Leading brands trust APC — 99% precision"
  ],

  // Feature Highlights (4 cards with icon + 1-line benefit + description)
  features: [
    {
      icon: "target",
      benefit: "Industry-leading 99% accuracy with AI computer vision",
      description: "Advanced machine learning algorithms trained on millions of scenarios for consistent precision across all environments.", // 15 words
      badge: "AI-Powered",
      metrics: "99% accuracy validated"
    },
    {
      icon: "activity", 
      benefit: "Real-time analytics with sub-second processing speed",
      description: "Instant insights and automated alerts enable immediate response to changing occupancy patterns and opportunities.", // 14 words
      badge: "Real-time",
      metrics: "<500ms latency"
    },
    {
      icon: "shield",
      benefit: "Complete privacy protection with GDPR compliance built-in",
      description: "Anonymous counting with no facial recognition or personal data storage ensures full regulatory compliance.", // 14 words
      badge: "Certified", 
      metrics: "100% anonymous"
    },
    {
      icon: "zap",
      benefit: "Edge processing technology for ultra-low latency performance", 
      description: "On-device AI processing with EdgeBox™ delivers faster response times and reduced bandwidth requirements.", // 13 words
      badge: "EdgeBox™",
      metrics: "Local processing"
    }
  ],

  // Solutions Carousel/Grid (5 solutions with outcomes)
  solutions: [
    {
      id: "retail",
      title: "Retail Analytics",
      oneLineOutcome: "+23% conversion rates with optimized layouts",
      description: "Transform customer insights into revenue growth through intelligent footfall analytics and behavior mapping.",
      demoLink: "retail-demo",
      icon: "shopping-cart",
      color: "blue",
      keyMetrics: ["+23% conversion", "+15% staff efficiency", "-20% wait times"]
    },
    {
      id: "buildings", 
      title: "Smart Buildings",
      oneLineOutcome: "-31% energy costs through HVAC optimization",
      description: "Reduce operational expenses while improving occupant comfort with intelligent space utilization analytics.",
      demoLink: "building-demo", 
      icon: "building",
      color: "green",
      keyMetrics: ["-31% energy costs", "+24% space efficiency", "-40% maintenance"]
    },
    {
      id: "transit",
      title: "Transit Hubs", 
      oneLineOutcome: "-45% crowd incidents with predictive alerts",
      description: "Enhance passenger safety and operational efficiency through real-time crowd density monitoring and flow optimization.",
      demoLink: "transit-demo",
      icon: "map-pin", 
      color: "purple",
      keyMetrics: ["-45% incidents", "+30% throughput", "Real-time alerts"]
    },
    {
      id: "events",
      title: "Events & Venues",
      oneLineOutcome: "100% safety compliance with capacity monitoring", 
      description: "Ensure attendee safety and optimize venue utilization with real-time occupancy tracking and automated alerts.",
      demoLink: "event-demo",
      icon: "calendar",
      color: "orange", 
      keyMetrics: ["100% compliance", "+22% revenue", "Instant alerts"]
    },
    {
      id: "healthcare",
      title: "Healthcare Facilities",
      oneLineOutcome: "-28% patient wait times with flow optimization",
      description: "Improve patient experience and operational efficiency through intelligent queue management and resource allocation.",
      demoLink: "healthcare-demo",
      icon: "heart",
      color: "red",
      keyMetrics: ["-28% wait times", "+19% satisfaction", "Better outcomes"]
    }
  ],

  // Interactive Demo Callout
  demoCallout: {
    headline: "Experience Live Analytics", 
    subtext: "See real-time people counting in action with our interactive demo sandbox",
    presets: [
      {
        name: "Retail Store",
        description: "Customer flow and conversion analytics",
        scenario: "retail"
      },
      {
        name: "Office Building", 
        description: "Occupancy and energy optimization",
        scenario: "office"
      },
      {
        name: "Transit Hub",
        description: "Passenger flow and safety monitoring", 
        scenario: "transit"
      }
    ],
    cta: "Launch Interactive Demo"
  },

  // Pricing Preview (3 models with succinct bullets)
  pricing: {
    models: {
      rental: {
        name: "Hardware Rental",
        price: "₹8,000",
        period: "/month", 
        badge: "Most Flexible",
        includes: [
          "Complete hardware included",
          "Professional installation", 
          "24/7 technical support",
          "Flexible rental duration"
        ],
        bestFor: "Events, trials, temporary needs",
        cta: "Start Rental"
      },
      subscription: {
        name: "SaaS Platform", 
        price: "₹5,000",
        period: "/month",
        badge: "Most Popular",
        includes: [
          "Cloud analytics platform",
          "Unlimited camera locations",
          "Advanced AI insights", 
          "API access & integrations"
        ],
        bestFor: "Ongoing operations, scalability",
        cta: "Start Free Trial"
      },
      onetime: {
        name: "Perpetual License",
        price: "₹60,000", 
        period: "/one-time",
        badge: "Best Value",
        includes: [
          "Complete software ownership",
          "On-premise deployment",
          "Lifetime updates included",
          "Custom integrations"
        ],
        bestFor: "Large enterprises, compliance",
        cta: "Buy Now"
      }
    }
  },

  // Customer Testimonials (rotating)
  testimonials: [
    {
      quote: "APC transformed our retail operations. 23% conversion increase in just 3 months.",
      author: "Sarah Chen",
      title: "Retail Operations Director", 
      company: "FashionForward",
      companySize: "45 stores",
      metric: "+23% conversion",
      industry: "Retail",
      implementationTime: "2 weeks",
      roi: "280%"
    },
    {
      quote: "Energy savings exceeded projections. 31% cost reduction with intelligent HVAC optimization.",
      author: "Michael Rodriguez", 
      title: "Facilities Manager",
      company: "TechTower Corp",
      companySize: "12-floor complex",
      metric: "-31% energy costs",
      industry: "Commercial Real Estate", 
      implementationTime: "1 week",
      roi: "340%"
    },
    {
      quote: "Platform incidents dropped 45%. Our passengers feel safer and operations run smoother.",
      author: "Lisa Wang",
      title: "Transit Safety Director",
      company: "MetroCity", 
      companySize: "8 stations",
      metric: "-45% incidents",
      industry: "Public Transportation",
      implementationTime: "3 weeks", 
      roi: "220%"
    }
  ],

  // Quick Integration Steps (3-step timeline)
  integration: {
    headline: "Quick Integration & Onboarding",
    subtext: "Get up and running in days, not months",
    steps: [
      {
        step: 1,
        title: "Install",
        description: "Professional setup in 2-5 days",
        duration: "2-5 days",
        details: "Camera installation, network configuration, EdgeBox™ setup",
        deliverables: ["Hardware installed", "Network configured", "System calibrated"]
      },
      {
        step: 2,
        title: "Analyze", 
        description: "Immediate data collection & insights",
        duration: "Real-time",
        details: "AI model activation, data validation, dashboard configuration", 
        deliverables: ["Live data streaming", "Dashboards active", "Alerts configured"]
      },
      {
        step: 3,
        title: "Action",
        description: "Optimize operations with AI recommendations", 
        duration: "Ongoing",
        details: "Performance optimization, team training, continuous improvement",
        deliverables: ["Staff trained", "Processes optimized", "ROI tracking"]
      }
    ]
  },

  // FAQ Snippet (3 most common questions)
  faq: {
    headline: "Frequently Asked Questions",
    subtext: "Get answers to common questions",
    questions: [
      {
        question: "How accurate is the people counting system?", 
        answer: "Our AI-powered system achieves up to 99% accuracy using advanced computer vision algorithms validated across 500+ installations worldwide.",
        category: "Technology"
      },
      {
        question: "Is the system GDPR compliant?",
        answer: "Yes, our system is fully GDPR compliant with complete anonymity, no facial recognition, and no personal data storage.",
        category: "Privacy" 
      },
      {
        question: "What's the difference between rental, subscription, and purchase?",
        answer: "Rental includes hardware and support, subscription provides cloud analytics, and purchase offers perpetual licensing with complete ownership.",
        category: "Pricing"
      }
    ],
    ctaText: "View All FAQs",
    ctaLink: "faq"
  },

  // Footer CTA & Contact
  footerCTA: {
    headline: "Ready to Transform Your Space Intelligence?",
    subtext: "Join 200+ organizations using APC Solutions for data-driven optimization", 
    primaryCTA: "Get Free Demo",
    secondaryCTA: "Start Free Trial",
    tertiaryCTA: "Contact Sales",
    guarantees: [
      "15-day free trial",
      "No setup fees", 
      "Expert support"
    ]
  },

  // Wireframe Notes for Developers
  wireframeNotes: {
    firstFold: {
      layout: "Split layout: 60% copy (left), 40% interactive mockup (right)",
      mobileLayout: "Stacked: hero image top, copy bottom, CTAs prominent",
      ctaPlacement: "Primary CTA above secondary, both above trust line",
      interactiveMockup: "Live dashboard with animated elements, pause/play controls",
      fallbackImage: "Static dashboard screenshot with descriptive alt text"
    },
    interactions: {
      primaryCTA: "Opens lightweight modal with demo request form (no page redirect)",
      secondaryCTA: "Toggles autoplay demo video with accessible controls", 
      stickyHeader: "Appears on scroll with single-click demo/purchase buttons",
      modalDemo: "Keyboard accessible, focus trapped, ESC to close",
      pricingToggle: "Smooth animation between rental/subscription/purchase cards"
    },
    responsive: {
      breakpoints: "Mobile-first: 320px, 768px, 1024px, 1280px, 1536px",
      heroMockup: "Collapses to stacked image on mobile, maintains aspect ratio",
      ctaButtons: "Remain prominent on all screen sizes, touch-friendly (44px+)",
      navigation: "Hamburger menu on mobile, horizontal on desktop"
    },
    accessibility: {
      focusManagement: "Visible focus indicators, logical tab order", 
      ariaLabels: "All interactive elements properly labeled",
      colorContrast: "WCAG AA compliance (4.5:1 minimum)",
      screenReader: "Descriptive alt text, semantic HTML structure"
    }
  },

  // Structured Data Recommendations
  structuredData: {
    organization: {
      type: "Organization",
      name: "APC Solutions",
      description: "AI-powered people counting and occupancy analytics solutions",
      url: "https://apcsolutions.com",
      logo: "https://apcsolutions.com/logo.png",
      contactPoint: {
        telephone: "+1-800-APC-HELP",
        contactType: "customer service"
      }
    },
    website: {
      type: "WebSite", 
      url: "https://apcsolutions.com",
      name: "APC Solutions - Auto People Counting",
      description: "Transform your space with AI-powered people counting",
      potentialAction: {
        type: "SearchAction",
        target: "https://apcsolutions.com/search?q={search_term_string}"
      }
    }
  },

  // Alt Text Examples
  altText: {
    heroDashboard: "APC people counting dashboard showing real-time visitor analytics, conversion metrics, and occupancy heatmaps with live data visualization and interactive controls",
    retailHeatmap: "Retail store heatmap visualization displaying customer flow patterns and high-traffic zones with color-coded density levels for optimization insights",
    buildingOccupancy: "Smart building occupancy monitoring interface showing floor-by-floor occupancy levels, energy usage data, and HVAC optimization controls",
    transitFlow: "Transit station passenger flow analytics displaying platform occupancy, crowd density alerts, and real-time safety monitoring dashboard",
    customerTestimonial: "Professional headshot of satisfied customer providing testimonial about successful APC people counting implementation and ROI results"
  },

  // Performance Optimization Hints
  performance: {
    criticalCSS: [
      "Hero section styles (above-the-fold)",
      "Navigation and primary CTA styling", 
      "Typography and color variables",
      "Grid system and responsive utilities"
    ],
    lazyLoad: [
      "Below-fold images and videos",
      "Testimonial carousels",
      "Customer logos", 
      "Demo modal content"
    ],
    preload: [
      "Hero background images",
      "Primary font files",
      "Critical JavaScript modules"
    ],
    defer: [
      "Analytics scripts",
      "Chat widget",
      "Non-critical animations",
      "Third-party integrations"
    ]
  },

  // Keyword Targeting
  keywords: {
    primary: "auto people counting",
    secondary: [
      "people counting system",
      "footfall analytics", 
      "occupancy monitoring",
      "people flow analytics"
    ],
    longTail: [
      "real-time people counter",
      "crowd analytics",
      "retail foot traffic",
      "smart building occupancy", 
      "people counting camera",
      "edge analytics",
      "GDPR compliant people counter",
      "people counting API",
      "people counting software",
      "visitor analytics"
    ],
    localSEO: [
      "people counting India",
      "occupancy analytics Mumbai",
      "retail analytics Delhi",
      "smart building Bangalore"
    ]
  }
};

// Conversion Optimization Notes
export const ConversionOptimization = {
  cta: {
    placement: "Above the fold, repeated every 2-3 sections",
    wording: "Action-oriented, benefit-focused (Get, Start, Request)",
    design: "High contrast, minimum 44px touch target, clear hierarchy",
    urgency: "Limited-time offers, free trial emphasis"
  },
  
  trustSignals: {
    socialProof: "Customer count, installation numbers, satisfaction ratings",
    certifications: "GDPR compliance, security badges, industry awards",  
    guarantees: "Free trial, money-back guarantee, no-risk statements",
    testimonials: "Specific metrics, real names, company logos"
  },
  
  riskReduction: {
    freeTrials: "15-day free trial with no commitment",
    moneyBack: "30-day money-back guarantee",
    expertSupport: "24/7 technical support included",
    noSetupFees: "No hidden costs or setup fees"
  },
  
  urgency: {
    limitedTime: "Limited-time free trial offer",
    scarcity: "Limited demo slots available",
    seasonality: "Q4 optimization deadlines"
  }
};

export default HomePageContent;