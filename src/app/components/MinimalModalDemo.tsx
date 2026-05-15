import React, { useState } from 'react';
import { MinimalSpecsModal } from './MinimalSpecsModal';
import { QuickSpecsButton, ProductSpecsButton, BusinessHoursButton, FeaturesButton, InlineSpecsIcon } from './QuickSpecsButton';
import { Info, Settings, Clock, FileText, Camera, Wifi, Database } from 'lucide-react';

export function MinimalModalDemo() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Sample data for different modal types
  const productSpecs = [
    { label: 'Accuracy', value: '99%' },
    { label: 'Processing', value: 'Real-time Edge' },
    { label: 'Deployment', value: 'Cloud/On-premise' },
    { label: 'Connectivity', value: 'Wi-Fi, Ethernet, 4G' },
    { label: 'Power', value: '12V DC, PoE+' },
    { label: 'Storage', value: '128GB Local + Cloud' },
    { label: 'Support', value: '24/7 Global' },
    { label: 'Warranty', value: '18 Months' }
  ];

  const businessHours = [
    { label: 'Monday', value: '9:00 AM - 6:00 PM' },
    { label: 'Tuesday', value: '9:00 AM - 6:00 PM' },
    { label: 'Wednesday', value: '9:00 AM - 6:00 PM' },
    { label: 'Thursday', value: '9:00 AM - 6:00 PM' },
    { label: 'Friday', value: '9:00 AM - 5:00 PM' },
    { label: 'Saturday', value: 'By Appointment' },
    { label: 'Sunday', value: 'Closed' }
  ];

  const features = [
    'AI-powered people counting',
    'Real-time occupancy monitoring',
    'Privacy-compliant edge processing',
    'Multi-zone analytics',
    'Heat map generation',
    'Crowd flow analysis',
    'Integration APIs',
    'Mobile dashboard'
  ];

  const systemRequirements = [
    { label: 'OS', value: 'Linux, Windows, Cloud' },
    { label: 'RAM', value: 'Min 4GB, Rec 8GB' },
    { label: 'Storage', value: 'Min 64GB SSD' },
    { label: 'Network', value: 'Ethernet/Wi-Fi' },
    { label: 'Cameras', value: 'ONVIF Compatible' },
    { label: 'Browser', value: 'Chrome, Firefox, Safari' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Minimal Specs Modal Demo</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Clean, minimalistic modals for displaying specifications, features, and other detailed information. 
          Click any button below to see the different modal variations.
        </p>
      </div>

      {/* Product Card Example */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">APC Flex Pro</h3>
            <p className="text-gray-600">Advanced people counting solution</p>
          </div>
          <InlineSpecsIcon
            title="Quick Specs"
            specs={productSpecs}
            variant="settings"
          />
        </div>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">99% Accuracy</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Real-time</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Edge Processing</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <ProductSpecsButton 
            productName="APC Flex Pro"
            specs={productSpecs}
          />
          <FeaturesButton features={features} />
          <QuickSpecsButton
            title="System Requirements"
            specs={systemRequirements}
            variant="settings"
          />
        </div>
      </div>

      {/* Contact Information Example */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
            <p className="text-gray-600">Get in touch with our team</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <span className="text-gray-700">📞 +1-800-APC-HELP</span>
            <InlineSpecsIcon
              title="Business Hours"
              specs={businessHours}
              variant="time"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-700">📧 support@apcsolutions.com</span>
            <InlineSpecsIcon
              title="Response Times"
              specs={[
                { label: 'Email', value: '< 2 hours' },
                { label: 'Phone', value: 'Immediate' },
                { label: 'Chat', value: '< 30 seconds' },
                { label: 'Emergency', value: '24/7 Available' }
              ]}
              variant="info"
            />
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <BusinessHoursButton hours={businessHours} size="sm" />
        </div>
      </div>

      {/* Feature Showcase Example */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <Camera className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">AI Cameras</h4>
          <p className="text-gray-600 text-sm mb-4">Advanced computer vision technology</p>
          <QuickSpecsButton
            title="Camera Specs"
            specs={[
              { label: 'Resolution', value: 'Up to 4K' },
              { label: 'Frame Rate', value: '30 FPS' },
              { label: 'Field of View', value: '90° - 120°' },
              { label: 'Night Vision', value: 'IR Capable' },
              { label: 'Weather', value: 'IP67 Rated' }
            ]}
            variant="settings"
            size="sm"
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <Wifi className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Connectivity</h4>
          <p className="text-gray-600 text-sm mb-4">Multiple connection options</p>
          <QuickSpecsButton
            title="Network Options"
            specs={[
              { label: 'Ethernet', value: 'Gigabit PoE+' },
              { label: 'Wi-Fi', value: '802.11ac/ax' },
              { label: '4G/5G', value: 'Optional Module' },
              { label: 'Bluetooth', value: 'v5.0 LE' },
              { label: 'Range', value: 'Up to 300m' }
            ]}
            variant="settings"
            size="sm"
          />
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
          <Database className="h-12 w-12 text-purple-600 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Data & Analytics</h4>
          <p className="text-gray-600 text-sm mb-4">Comprehensive insights platform</p>
          <QuickSpecsButton
            title="Analytics Features"
            specs={[
              { label: 'Real-time', value: 'Live dashboard' },
              { label: 'Historical', value: 'Unlimited storage' },
              { label: 'Reports', value: 'Automated/Custom' },
              { label: 'API', value: 'RESTful/GraphQL' },
              { label: 'Export', value: 'CSV, PDF, Excel' }
            ]}
            variant="features"
            size="sm"
          />
        </div>
      </div>

      {/* Integration Examples */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Modal Integration Examples</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => setActiveModal('product')}
            className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Product Specs
          </button>
          <button
            onClick={() => setActiveModal('features')}
            className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Feature List
          </button>
          <button
            onClick={() => setActiveModal('hours')}
            className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Business Hours
          </button>
          <button
            onClick={() => setActiveModal('requirements')}
            className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Requirements
          </button>
        </div>
      </div>

      {/* Manual Modal Controls */}
      <MinimalSpecsModal
        isOpen={activeModal === 'product'}
        onClose={() => setActiveModal(null)}
        title="APC Flex Pro Specifications"
        icon={<Settings className="h-5 w-5" />}
        specs={productSpecs}
      />

      <MinimalSpecsModal
        isOpen={activeModal === 'features'}
        onClose={() => setActiveModal(null)}
        title="Key Features"
        icon={<FileText className="h-5 w-5" />}
        specs={features.map((feature, index) => ({
          label: `${index + 1}`,
          value: feature
        }))}
      />

      <MinimalSpecsModal
        isOpen={activeModal === 'hours'}
        onClose={() => setActiveModal(null)}
        title="Business Hours"
        icon={<Clock className="h-5 w-5" />}
        specs={businessHours}
      />

      <MinimalSpecsModal
        isOpen={activeModal === 'requirements'}
        onClose={() => setActiveModal(null)}
        title="System Requirements"
        icon={<Info className="h-5 w-5" />}
        specs={systemRequirements}
      />
    </div>
  );
}