import React from 'react';
import { ProductSpecsButton, InlineSpecsIcon } from './QuickSpecsButton';
import { Settings, Info } from 'lucide-react';

interface ProductSpecs {
  accuracy: string;
  processing: string;
  deployment: string;
  connectivity: string;
  power: string;
  storage: string;
  analytics: string;
  support: string;
}

interface ProductCardWithSpecsProps {
  name: string;
  subtitle: string;
  price: string;
  monthlyPrice: string;
  rentalPrice: string;
  specs: ProductSpecs;
  features: string[];
  className?: string;
}

export function ProductCardWithSpecs({
  name,
  subtitle,
  price,
  monthlyPrice,
  rentalPrice,
  specs,
  features,
  className = ""
}: ProductCardWithSpecsProps) {
  // Convert specs object to array format for modal
  const specsArray = [
    { label: 'Accuracy', value: specs.accuracy },
    { label: 'Processing', value: specs.processing },
    { label: 'Deployment', value: specs.deployment },
    { label: 'Connectivity', value: specs.connectivity },
    { label: 'Power', value: specs.power },
    { label: 'Storage', value: specs.storage },
    { label: 'Analytics', value: specs.analytics },
    { label: 'Support', value: specs.support }
  ];

  // Pricing information
  const pricingSpecs = [
    { label: 'One-time', value: price },
    { label: 'Monthly', value: monthlyPrice },
    { label: 'Rental/day', value: rentalPrice },
    { label: 'Min Rental', value: '3-4 days' }
  ];

  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}>
      {/* Header with inline specs icon */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          <InlineSpecsIcon
            title="Quick Specs"
            specs={specsArray}
            variant="settings"
          />
        </div>
        
        {/* Key metrics */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Accuracy:</span>
            <span className="text-sm font-semibold text-blue-600">{specs.accuracy}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Starting:</span>
            <span className="text-sm font-semibold text-green-600">{price}</span>
            <InlineSpecsIcon
              title="Pricing Options"
              specs={pricingSpecs}
              variant="info"
            />
          </div>
        </div>
      </div>

      {/* Features preview */}
      <div className="p-6 border-b border-gray-100">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Key Features</h4>
        <div className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
          {features.length > 3 && (
            <div className="text-sm text-gray-500 font-medium">
              +{features.length - 3} more features
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <ProductSpecsButton 
            productName={name}
            specs={specsArray}
            className="flex-1 min-w-0"
          />
          <InlineSpecsIcon
            title="All Features"
            specs={features.map((feature, index) => ({
              label: `${index + 1}`,
              value: feature
            }))}
            variant="info"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
            Get Quote
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

// Example usage component
export function ProductGridWithSpecs() {
  const products = [
    {
      name: 'APC Core',
      subtitle: 'Premium turnkey solution',
      price: '₹60,000',
      monthlyPrice: '₹5,000/month',
      rentalPrice: '₹8,000/day',
      specs: {
        accuracy: '99%',
        processing: 'Real-time Edge',
        deployment: 'Turnkey',
        connectivity: 'Wi-Fi, Ethernet, 4G',
        power: '12V DC, PoE+',
        storage: '256GB + Cloud',
        analytics: 'Advanced AI',
        support: '24/7 Premium'
      },
      features: [
        'AI-powered cameras included',
        'EdgeBox™ controller',
        'Professional installation',
        'Advanced analytics dashboard',
        'Multi-zone tracking',
        'Heat map generation',
        'API integration',
        'Mobile app'
      ]
    },
    {
      name: 'APC Flex',
      subtitle: 'Cost-effective solution',
      price: '₹45,000',
      monthlyPrice: '₹4,000/month',
      rentalPrice: '₹6,000/day',
      specs: {
        accuracy: '95%',
        processing: 'Edge/Cloud Hybrid',
        deployment: 'Flexible',
        connectivity: 'Wi-Fi, Ethernet',
        power: '12V DC',
        storage: '128GB + Cloud',
        analytics: 'Standard AI',
        support: '16/5 Business'
      },
      features: [
        'Budget-friendly cameras',
        'Cloud processing option',
        'Self-installation kit',
        'Standard analytics',
        'Single-zone tracking',
        'Basic reporting',
        'Web dashboard',
        'Email alerts'
      ]
    },
    {
      name: 'APC Link',
      subtitle: 'Upgrade existing cameras',
      price: '₹35,000',
      monthlyPrice: '₹3,000/month',
      rentalPrice: '₹4,500/day',
      specs: {
        accuracy: '90%',
        processing: 'Cloud-based',
        deployment: 'Software Only',
        connectivity: 'Existing Network',
        power: 'Existing Infrastructure',
        storage: 'Cloud Only',
        analytics: 'Basic AI',
        support: '12/5 Business'
      },
      features: [
        'Works with existing cameras',
        'ONVIF compatibility',
        'Cloud-based processing',
        'Quick deployment',
        'Basic counting',
        'Simple dashboard',
        'CSV exports',
        'Email reports'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">APC Product Lineup</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Compare our people counting solutions with detailed specifications and features. 
          Click the spec icons for detailed information.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCardWithSpecs
            key={index}
            name={product.name}
            subtitle={product.subtitle}
            price={product.price}
            monthlyPrice={product.monthlyPrice}
            rentalPrice={product.rentalPrice}
            specs={product.specs}
            features={product.features}
          />
        ))}
      </div>
    </div>
  );
}