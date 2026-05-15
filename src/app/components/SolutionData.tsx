import React from 'react';
import { Users, BarChart3, Wifi, Music } from 'lucide-react';

export const coreSolutions = [
  {
    id: 'core',
    name: 'APC Core',
    subtitle: 'Complete End-to-End Package',
    description: 'Transform your space with our premium turnkey solution featuring AI cameras, APC EdgeBox™, and comprehensive analytics platform.',
    icon: <Users className="h-5 w-5" />,
    price: '₹60,000',
    subscriptionPrice: '₹30,000',
    subscriptionDetails: 'Advance ₹30,000 + ₹5,000/month for 24 months',
    rentalPrice: '₹8,000',
    rentalDetails: 'Min 3-4 days, max as per client requirement, ₹20,000 security deposit per unit',
    badge: 'Most Popular',
    badgeColor: 'bg-primary',
    features: [
      'Premium AI cameras included',
      'APC EdgeBox™ processing unit',
      'Professional installation',
      '24/7 premium support',
      'Up to 99% accuracy',
      'Complete turnkey solution'
    ]
  },
  {
    id: 'flex',
    name: 'APC Flex',
    subtitle: 'Cost-Effective Excellence',
    description: 'Advanced people counting analytics with budget-friendly cameras. Perfect for growing businesses and franchises.',
    icon: <BarChart3 className="h-5 w-5" />,
    price: '₹45,000',
    subscriptionPrice: '₹22,500',
    subscriptionDetails: 'Advance ₹22,500 + ₹4,000/month for 24 months',
    rentalPrice: '₹6,000',
    rentalDetails: 'Min 3-4 days, max as per client requirement, ₹15,000 security deposit per unit',
    badge: 'Best Value',
    badgeColor: 'bg-green-500',
    features: [
      'Advanced AI cameras',
      'APC EdgeBox™ analytics',
      'Professional setup',
      'Business hours support',
      'Up to 95% accuracy',
      'Scalable solution'
    ]
  },
  {
    id: 'link',
    name: 'APC Link',
    subtitle: 'Upgrade Existing Cameras',
    description: 'Transform your existing IP cameras into intelligent people counting systems. Maximum ROI with minimal investment.',
    icon: <Wifi className="h-5 w-5" />,
    price: '₹35,000',
    subscriptionPrice: '₹17,500',
    subscriptionDetails: 'Advance ₹17,500 + ₹3,000/month for 24 months',
    rentalPrice: '₹4,500',
    rentalDetails: 'Min 3-4 days, max as per client requirement, ₹12,000 security deposit per unit',
    badge: 'Maximum ROI',
    badgeColor: 'bg-accent',
    features: [
      'Works with existing cameras',
      'APC EdgeBox™ retrofit',
      'Quick installation',
      'Standard support',
      'Up to 90% accuracy',
      'Cost-effective upgrade'
    ]
  }
];

export const allSolutions = [
  ...coreSolutions,
  {
    id: 'eventSense',
    name: 'APC EventSense',
    subtitle: 'Event & Temporary Solution',
    description: 'Portable people counting for events, festivals, and temporary deployments. Available in rental model only.',
    icon: <Music className="h-5 w-5" />,
    price: 'Rental Only',
    subscriptionPrice: 'Not Available',
    subscriptionDetails: 'Not available for EventSense',
    rentalPrice: '₹8,000/day',
    rentalDetails: 'Min 4-5 days, ₹10,000 security deposit per unit, 30-day advance notice',
    badge: 'Event Special',
    badgeColor: 'bg-purple-500',
    features: [
      'Portable event solution',
      'Quick deployment',
      'Crowd monitoring',
      'Real-time analytics',
      'Festival & event optimized',
      'Temporary installation'
    ]
  }
];

// Pricing model configurations
export const pricingModels = {
  onetime: {
    title: 'One-time Purchase',
    description: 'Complete ownership with no recurring payments',
    applicableTo: ['core', 'flex', 'link']
  },
  subscription: {
    title: 'Subscription Model', 
    description: '50% advance + monthly payments over 24 months',
    applicableTo: ['core', 'flex', 'link']
  },
  rental: {
    title: 'Rental Model',
    description: 'Flexible short-term rental, min 3-4 days, max as per client requirement',
    applicableTo: ['core', 'flex', 'link', 'eventSense']
  }
};

// Product-specific data
export const productDetails = {
  core: {
    accuracy: 'Up to 99%',
    setupTime: '1-2 days',
    roi: '350-500% in Year 1',
    warranty: '3-year comprehensive',
    support: '24/7 premium support',
    cameras: 'Premium AI cameras included',
    processing: 'APC EdgeBox™ included',
    installation: 'Professional installation',
    hero: {
      image: 'modern retail store premium cameras smart technology',
      video: 'Product demo video showcasing APC Core installation and results'
    }
  },
  flex: {
    accuracy: 'Up to 95%',
    setupTime: '1-2 days', 
    roi: '250-400% in Year 1',
    warranty: '2-year standard',
    support: 'Business hours support',
    cameras: 'Advanced AI cameras included',
    processing: 'APC EdgeBox™ included',
    installation: 'Professional installation',
    hero: {
      image: 'modern office building smart cameras analytics',
      video: 'Product demo video showcasing APC Flex installation and results'
    }
  },
  link: {
    accuracy: 'Up to 90%',
    setupTime: '1 day',
    roi: '200-350% in Year 1', 
    warranty: '2-year standard',
    support: 'Standard support',
    cameras: 'Works with existing IP cameras',
    processing: 'APC EdgeBox™ retrofit kit',
    installation: 'Quick installation',
    hero: {
      image: 'existing security cameras upgrade smart technology',
      video: 'Product demo video showcasing APC Link retrofit installation'
    }
  },
  eventsense: {
    accuracy: 'Up to 95%',
    setupTime: '2-4 hours',
    roi: 'Event optimization',
    warranty: 'Rental warranty included',
    support: 'Event support hotline',
    cameras: 'Portable event cameras',
    processing: 'Mobile EdgeBox™ unit',
    installation: 'Rapid deployment setup',
    hero: {
      image: 'outdoor festival event crowd monitoring portable cameras',
      video: 'Product demo video showcasing APC EventSense deployment'
    }
  }
};