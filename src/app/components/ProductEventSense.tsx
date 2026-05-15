import React from 'react';
import { EnhancedProductDetail } from './EnhancedProductDetail';
import { coreSolutions, allSolutions, productDetails } from './SolutionData';
import { 
  Calendar,
  Truck,
  BarChart3,
  Battery,
  Clock,
  PhoneCall,
  Music,
  PartyPopper,
  Building2,
  Tent
} from 'lucide-react';

interface ProductEventSenseProps {
  onPageChange: (page: string) => void;
}

export function ProductEventSense({ onPageChange }: ProductEventSenseProps) {
  // Get product data from shared data source - EventSense is typically in coreSolutions or has its own entry
  const eventSenseProduct = coreSolutions.find(solution => solution.id === 'eventsense') || {
    id: 'eventsense',
    name: 'APC EventSense',
    subtitle: 'Portable Event Analytics',
    price: '₹8,000/day',
    subscriptionPrice: '₹240,000',
    rentalPrice: '₹8,000/day',
    description: 'Portable people counting solution for events, festivals, and temporary deployments',
    badge: 'Event Rental',
    badgeColor: 'bg-purple-600'
  };
  
  const eventSenseDetails = productDetails.eventsense || {
    accuracy: '85%',
    setupTime: '30min',
    roi: '50%',
    warranty: '6 months',
    support: 'Event support'
  };
  
  const productData = {
    name: eventSenseProduct.name,
    subtitle: eventSenseProduct.subtitle,
    tagline: 'Portable Analytics for Events & Temporary Deployments',
    price: eventSenseProduct.price,
    priceDetails: 'Daily Rental Rate',
    subscriptionPrice: `${eventSenseProduct.subscriptionPrice} monthly`,
    rentalPrice: eventSenseProduct.rentalPrice,
    description: eventSenseProduct.description + ' Perfect for event organizers, festivals, and temporary installations that need professional crowd analytics.',
    accuracy: eventSenseDetails.accuracy,
    setupTime: eventSenseDetails.setupTime,
    roi: eventSenseDetails.roi,
    warranty: eventSenseDetails.warranty,
    support: eventSenseDetails.support,
    badge: eventSenseProduct.badge,
    badgeColor: eventSenseProduct.badgeColor,
    hero: eventSenseDetails.hero || { image: 'Event analytics setup' }
  };

  const keyFeatures = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Portable Design',
      description: 'Self-contained units for easy transportation',
      details: [
        'Battery-powered operation for 12+ hours',
        'Weatherproof IP65 rated enclosures',
        'Quick-mount tripod systems included',
        'Compact carrying cases for transport',
        'Lightweight design for easy handling',
        'Modular component system',
        'Tool-free assembly and disassembly',
        'Professional transport cases included'
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Rapid Deployment',
      description: 'Set up and running in under 30 minutes',
      details: [
        'Plug-and-play setup process',
        'Pre-configured systems ready to use',
        '4G/LTE wireless connectivity',
        'Automated calibration and testing',
        'Quick positioning and alignment',
        'Instant network connection',
        'Real-time system verification',
        'Minimal technical expertise required'
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Real-Time Analytics',
      description: 'Live crowd monitoring and safety alerts',
      details: [
        'Live occupancy tracking and monitoring',
        'Advanced crowd density mapping',
        'Flow rate monitoring and analysis',
        'Automated safety threshold alerts',
        'Real-time dashboard updates',
        'Multi-zone coverage capabilities',
        'Emergency notification system',
        'Historical data capture and analysis'
      ]
    },
    {
      icon: <Battery className="h-6 w-6" />,
      title: 'Extended Battery Life',
      description: 'All-day operation without external power',
      details: [
        '12+ hour continuous battery life',
        'Solar charging options available',
        'Intelligent power management system',
        'Low battery alerts and notifications',
        'Hot-swappable battery packs',
        'External power source compatibility',
        'Energy-efficient component design',
        'Battery status monitoring dashboard'
      ]
    },
    {
      icon: <PhoneCall className="h-6 w-6" />,
      title: 'Event Support',
      description: 'Dedicated support during your event',
      details: [
        '24/7 event day support coverage',
        'Remote system monitoring',
        'Instant alert notifications',
        'Technical troubleshooting assistance',
        'On-site support available if needed',
        'Pre-event system testing',
        'Post-event data analysis',
        'Emergency response protocols'
      ]
    }
  ];

  const technicalSpecs = {
    hardware: [
      { spec: 'Camera Resolution', value: '1080p HD with night vision' },
      { spec: 'Battery Life', value: '12+ hours continuous operation' },
      { spec: 'Weather Rating', value: 'IP65 weatherproof' },
      { spec: 'Connectivity', value: '4G/LTE + Wi-Fi backup' },
      { spec: 'Detection Range', value: 'Up to 100m coverage area' },
      { spec: 'Operating Temperature', value: '-10°C to +50°C' }
    ],
    software: [
      { spec: 'AI Processing', value: 'Real-time edge analytics' },
      { spec: 'Accuracy', value: '85-90% in outdoor conditions' },
      { spec: 'Latency', value: '<100ms live updates' },
      { spec: 'Analytics', value: 'Crowd-optimized algorithms' },
      { spec: 'Alerts', value: 'Real-time safety notifications' },
      { spec: 'Reporting', value: 'Live dashboard + post-event reports' }
    ],
    compliance: [
      { spec: 'Safety', value: 'Event safety certified' },
      { spec: 'Privacy', value: 'Anonymous tracking only' },
      { spec: 'Connectivity', value: 'Carrier certified modems' },
      { spec: 'Environmental', value: 'Outdoor event rated' }
    ]
  };

  const useCases = [
    {
      industry: 'Music Festivals & Concerts',
      icon: <Music className="h-8 w-8" />,
      description: 'Crowd safety and capacity management for large events',
      benefits: ['Real-time crowd density monitoring', 'Safety threshold alerts', 'Entry/exit flow optimization'],
      roi: '₹2L+ saved in security costs',
      caseStudy: 'Summer music festival prevented overcrowding incidents'
    },
    {
      industry: 'Corporate Events & Conferences',
      icon: <Building2 className="h-8 w-8" />,
      description: 'Professional event analytics and attendee insights',
      benefits: ['Session popularity tracking', 'Space utilization analysis', 'Networking zone optimization'],
      roi: '₹1.5L+ in space optimization',
      caseStudy: 'Tech conference optimized breakout room allocation'
    },
    {
      industry: 'Trade Shows & Exhibitions',
      icon: <PartyPopper className="h-8 w-8" />,
      description: 'Booth traffic analysis and visitor flow insights',
      benefits: ['Booth performance metrics', 'Visitor flow patterns', 'Peak time identification'],
      roi: '₹3L+ in improved exhibitor satisfaction',
      caseStudy: 'Auto expo provided detailed foot traffic reports to exhibitors'
    },
    {
      industry: 'Temporary Installations',
      icon: <Tent className="h-8 w-8" />,
      description: 'Short-term deployments for special projects',
      benefits: ['Quick setup for temporary needs', 'No permanent installation required', 'Flexible rental terms'],
      roi: '₹80K+ vs permanent installation',
      caseStudy: 'Pop-up retail store tracked customer patterns'
    }
  ];

  const implementationProcess = [
    {
      phase: '1',
      title: 'Event Planning',
      duration: '30 days before',
      description: 'Pre-event coordination and planning',
      activities: [
        'Site survey and layout planning',
        'Unit placement optimization',
        'Logistics coordination',
        'Timeline and requirements finalization'
      ]
    },
    {
      phase: '2',
      title: 'Delivery & Setup',
      duration: 'Event day -1',
      description: 'Equipment delivery and installation',
      activities: [
        'Equipment delivery to venue',
        'Unit positioning and setup',
        'System testing and calibration',
        'Dashboard access configuration'
      ]
    },
    {
      phase: '3',
      title: 'Event Monitoring',
      duration: 'Event duration',
      description: 'Live monitoring and support',
      activities: [
        '24/7 system monitoring',
        'Real-time analytics dashboard',
        'Alert notifications',
        'On-call technical support'
      ]
    },
    {
      phase: '4',
      title: 'Wrap-up & Reporting',
      duration: 'Post-event',
      description: 'Equipment collection and final reporting',
      activities: [
        'Equipment pickup and inspection',
        'Comprehensive event report generation',
        'Data analysis and insights',
        'Post-event consultation'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "APC EventSense helped us manage crowd safety at our music festival. The real-time alerts prevented potential overcrowding situations.",
      author: "Raj Patel",
      position: "Event Director",
      company: "Harmony Music Festival",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      metrics: "Zero safety incidents, 25K+ attendees managed"
    },
    {
      quote: "The insights from EventSense helped us optimize our conference layout. We saw 30% better space utilization in breakout areas.",
      author: "Priya Sharma",
      position: "Conference Manager",
      company: "TechIndia Conference",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=100",
      metrics: "30% space optimization, improved attendee satisfaction"
    },
    {
      quote: "Exhibitors loved the detailed foot traffic reports. EventSense helped us provide real value to our trade show participants.",
      author: "Mike Chen",
      position: "Exhibition Director",
      company: "Global Trade Expo",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      metrics: "95% exhibitor satisfaction, detailed analytics"
    }
  ];

  const faqData = [
    {
      id: 'faq-1',
      question: 'What is the minimum rental duration for APC EventSense?',
      answer: 'The minimum rental duration is 4-5 days, which includes delivery, setup, event duration, and pickup. This ensures adequate time for proper deployment and provides value for the logistics involved.',
      category: 'Rental Terms'
    },
    {
      id: 'faq-2',
      question: 'How much advance notice do you need for event bookings?',
      answer: 'We recommend booking at least 30 days in advance to ensure availability and proper planning. For large events or peak seasons, earlier booking is advisable. Rush orders may be accommodated with additional fees.',
      category: 'Booking'
    },
    {
      id: 'faq-3',
      question: 'What support is provided during the event?',
      answer: 'EventSense includes 24/7 monitoring and support during your event. Our team remotely monitors all systems and provides immediate assistance if needed. On-site support can be arranged for large events.',
      category: 'Support'
    },
    {
      id: 'faq-4',
      question: 'Can EventSense work in outdoor conditions?',
      answer: 'Yes, EventSense units are specifically designed for outdoor events with IP65 weatherproof rating. They can operate in various weather conditions including light rain, but extreme weather may require additional precautions.',
      category: 'Weather Resistance'
    },
    {
      id: 'faq-5',
      question: 'What kind of reports do you provide after the event?',
      answer: 'You receive comprehensive post-event reports including attendance patterns, peak times, flow analysis, and crowd density maps. Reports are delivered within 48 hours after event completion.',
      category: 'Reporting'
    },
    {
      id: 'faq-6',
      question: 'Is there a security deposit required?',
      answer: 'Yes, there is a ₹10,000 refundable security deposit per unit. This covers potential damage or loss during rental period. The deposit is fully refunded upon return of equipment in good condition.',
      category: 'Deposit'
    },
    {
      id: 'faq-7',
      question: 'Can you provide coverage for very large events?',
      answer: 'Yes, we can scale up for large events with multiple units. For events requiring 10+ units, we offer volume discounts and enhanced coordination services. Contact us for custom large-event packages.',
      category: 'Large Events'
    },
    {
      id: 'faq-8',
      question: 'Do you provide training for event staff?',
      answer: 'Yes, we provide basic training for your event staff on using the dashboard and understanding alerts. Training can be conducted remotely or on-site depending on event requirements.',
      category: 'Training'
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
      productSolutions={[eventSenseProduct]}
    />
  );
}