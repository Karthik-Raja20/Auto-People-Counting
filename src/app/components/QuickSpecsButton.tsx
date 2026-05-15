import React, { useState } from 'react';
import { Info, Clock, Settings, FileText } from 'lucide-react';
import { MinimalSpecsModal } from './MinimalSpecsModal';

interface SpecItem {
  label: string;
  value: string;
}

interface QuickSpecsButtonProps {
  title: string;
  specs: SpecItem[];
  variant?: 'info' | 'settings' | 'time' | 'features';
  className?: string;
  size?: 'sm' | 'md';
}

export function QuickSpecsButton({ 
  title, 
  specs, 
  variant = 'info',
  className = "",
  size = 'md'
}: QuickSpecsButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const icons = {
    info: <Info className="h-4 w-4" />,
    settings: <Settings className="h-4 w-4" />,
    time: <Clock className="h-4 w-4" />,
    features: <FileText className="h-4 w-4" />
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm"
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`
          inline-flex items-center gap-2 
          bg-gray-50 hover:bg-gray-100 
          border border-gray-200 hover:border-gray-300
          rounded-md transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
          ${sizes[size]} ${className}
        `}
        aria-label={`View ${title} details`}
      >
        {icons[variant]}
        <span className="font-medium text-gray-700">{title}</span>
      </button>

      <MinimalSpecsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        icon={icons[variant]}
        specs={specs}
      />
    </>
  );
}

// Pre-configured components for common use cases
export function ProductSpecsButton({ 
  productName, 
  specs, 
  className = "" 
}: { 
  productName: string; 
  specs: SpecItem[]; 
  className?: string;
}) {
  return (
    <QuickSpecsButton
      title={`${productName} Specs`}
      specs={specs}
      variant="settings"
      className={className}
    />
  );
}

export function BusinessHoursButton({ 
  hours, 
  className = "" 
}: { 
  hours: SpecItem[]; 
  className?: string;
}) {
  return (
    <QuickSpecsButton
      title="Business Hours"
      specs={hours}
      variant="time"
      className={className}
    />
  );
}

export function FeaturesButton({ 
  features, 
  className = "" 
}: { 
  features: string[]; 
  className?: string;
}) {
  const featureSpecs = features.map((feature, index) => ({
    label: `${index + 1}`,
    value: feature
  }));

  return (
    <QuickSpecsButton
      title="Key Features"
      specs={featureSpecs}
      variant="features"
      className={className}
    />
  );
}

// Inline version that appears as just an icon with tooltip
export function InlineSpecsIcon({ 
  title, 
  specs, 
  variant = 'info',
  className = ""
}: QuickSpecsButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const icons = {
    info: <Info className="h-4 w-4" />,
    settings: <Settings className="h-4 w-4" />,
    time: <Clock className="h-4 w-4" />,
    features: <FileText className="h-4 w-4" />
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`
          p-1 text-gray-400 hover:text-gray-600
          hover:bg-gray-100 rounded
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
          ${className}
        `}
        aria-label={`View ${title} details`}
        title={`Click to view ${title}`}
      >
        {icons[variant]}
      </button>

      <MinimalSpecsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        icon={icons[variant]}
        specs={specs}
      />
    </>
  );
}