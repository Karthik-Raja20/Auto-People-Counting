// This file contains the updated pricing sections for all product pages
// Each product page should replace their pricing packages section with the ComprehensivePricing component

// For ProductCore.tsx - already updated

// For ProductFlex.tsx 
export const productFlexPricingReplacement = `
              {/* Comprehensive Pricing Options */}
              <ComprehensivePricing 
                onPageChange={onPageChange} 
                coreSolutions={[flexProduct]} 
                allSolutions={[flexProduct]}
              />
`;

// For ProductLink.tsx
export const productLinkPricingReplacement = `
              {/* Comprehensive Pricing Options */}
              <ComprehensivePricing 
                onPageChange={onPageChange} 
                coreSolutions={[linkProduct]} 
                allSolutions={[linkProduct]}
              />
`;

// For ProductEventSense.tsx
export const productEventSensePricingReplacement = `
              {/* Comprehensive Pricing Options - Rental Only */}
              <ComprehensivePricing 
                onPageChange={onPageChange} 
                coreSolutions={[]} 
                allSolutions={[eventSenseProduct]}
              />
`;

// Required imports to add to each product page:
export const requiredImports = `
import { ComprehensivePricing } from './ComprehensivePricingImproved';
import { coreSolutions, allSolutions, productDetails } from './SolutionData';
`;

// Product data updates for each page:
export const productDataUpdates = {
  core: `
  // Get product data from shared data source
  const coreProduct = coreSolutions.find(solution => solution.id === 'core')!;
  const coreDetails = productDetails.core;
  
  const productData = {
    name: coreProduct.name,
    subtitle: coreProduct.subtitle,
    tagline: 'The Ultimate Turnkey People Counting Solution',
    price: coreProduct.price,
    priceDetails: 'One-time Payment',
    subscriptionPrice: coreProduct.subscriptionPrice + ' + ₹5,000/month',
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
  `,
  
  flex: `
  // Get product data from shared data source
  const flexProduct = coreSolutions.find(solution => solution.id === 'flex')!;
  const flexDetails = productDetails.flex;
  
  const productData = {
    name: flexProduct.name,
    subtitle: flexProduct.subtitle,
    tagline: 'Advanced Analytics without Premium Costs',
    price: flexProduct.price,
    priceDetails: 'One-time Payment',
    subscriptionPrice: flexProduct.subscriptionPrice + ' + ₹4,000/month',
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
  `,
  
  link: `
  // Get product data from shared data source
  const linkProduct = coreSolutions.find(solution => solution.id === 'link')!;
  const linkDetails = productDetails.link;
  
  const productData = {
    name: linkProduct.name,
    subtitle: linkProduct.subtitle,
    tagline: 'Maximum ROI with Existing Infrastructure',
    price: linkProduct.price,
    priceDetails: 'One-time Payment',
    subscriptionPrice: linkProduct.subscriptionPrice + ' + ₹3,000/month',
    rentalPrice: linkProduct.rentalPrice,
    description: linkProduct.description + ' Perfect for businesses wanting to leverage existing camera investments.',
    accuracy: linkDetails.accuracy,
    setupTime: linkDetails.setupTime,
    roi: linkDetails.roi,
    warranty: linkDetails.warranty,
    support: linkDetails.support,
    badge: linkProduct.badge,
    badgeColor: linkProduct.badgeColor,
    hero: linkDetails.hero
  };
  `,
  
  eventsense: `
  // Get product data from shared data source
  const eventSenseProduct = allSolutions.find(solution => solution.id === 'eventSense')!;
  const eventSenseDetails = productDetails.eventsense;
  
  const productData = {
    name: eventSenseProduct.name,
    subtitle: eventSenseProduct.subtitle,
    tagline: 'Portable Event Analytics Solution',
    price: 'Rental Only',
    priceDetails: 'Daily Rental Model',
    subscriptionPrice: 'Not Available',
    rentalPrice: eventSenseProduct.rentalPrice,
    description: eventSenseProduct.description + ' Perfect for festivals, conferences, and temporary crowd monitoring.',
    accuracy: eventSenseDetails.accuracy,
    setupTime: eventSenseDetails.setupTime,
    roi: eventSenseDetails.roi,
    warranty: eventSenseDetails.warranty,
    support: eventSenseDetails.support,
    badge: eventSenseProduct.badge,
    badgeColor: eventSenseProduct.badgeColor,
    hero: eventSenseDetails.hero
  };
  `
};