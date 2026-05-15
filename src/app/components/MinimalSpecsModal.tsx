import React, { useState, useEffect, useRef } from 'react';
import { X, Info, ChevronDown, ChevronUp } from 'lucide-react';

interface SpecItem {
  label: string;
  value: string;
}

interface MinimalSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: React.ReactNode;
  specs: SpecItem[];
  className?: string;
}

export function MinimalSpecsModal({ 
  isOpen, 
  onClose, 
  title, 
  icon = <Info className="h-5 w-5" />, 
  specs,
  className = ""
}: MinimalSpecsModalProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLButtonElement>(null);

  // Handle escape key and outside clicks
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Focus the header when modal opens
    if (headerRef.current) {
      headerRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className={`
          w-full max-w-[280px] bg-white rounded-lg shadow-lg border border-gray-200
          transform transition-all duration-300 ease-out
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
          ${className}
        `}
        style={{ 
          minHeight: 'auto',
          maxHeight: '90vh',
          overflow: 'visible'
        }}
      >
        {/* Header Section */}
        <div className="relative">
          <button
            ref={headerRef}
            onClick={() => setIsExpanded(!isExpanded)}
            onKeyDown={handleKeyDown}
            className="
              w-full flex items-center justify-between p-3 
              hover:bg-gray-50 transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset
              rounded-t-lg
            "
            aria-expanded={isExpanded}
            aria-controls="specs-content"
            id="modal-title"
          >
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 w-5 h-5 text-gray-600">
                {icon}
              </div>
              <h3 className="text-sm font-medium text-gray-900 leading-tight">
                {title}
              </h3>
            </div>
            
            <div className="flex items-center gap-1">
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              )}
            </div>
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
              rounded transition-colors duration-200
            "
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content Section */}
        <div
          id="specs-content"
          className={`
            overflow-hidden transition-all duration-300 ease-out
            ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
          aria-hidden={!isExpanded}
        >
          <div className="px-3 pb-3">
            <div className="bg-gray-50 rounded-md p-3 border border-gray-100">
              <div className="space-y-2">
                {specs.map((spec, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-start gap-2"
                  >
                    <span className="text-xs text-gray-600 font-medium flex-shrink-0">
                      {spec.label}:
                    </span>
                    <span className="text-xs text-gray-900 text-right leading-relaxed">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Example usage component with different spec types
export function SpecsModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  
  const sampleSpecs = [
    { label: 'Accuracy', value: '99%' },
    { label: 'Processing', value: 'Real-time' },
    { label: 'Deployment', value: 'Edge/Cloud' },
    { label: 'Connectivity', value: 'Wi-Fi, Ethernet' },
    { label: 'Power', value: '12V DC' },
    { label: 'Storage', value: '128GB Local' },
    { label: 'Support', value: '24/7' }
  ];

  return (
    <div className="p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        View Specifications
      </button>
      
      <MinimalSpecsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="APC Flex"
        specs={sampleSpecs}
      />
    </div>
  );
}

// Variant for operating hours
export function HoursModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const hours = [
    { label: 'Monday', value: '9:00 AM - 6:00 PM' },
    { label: 'Tuesday', value: '9:00 AM - 6:00 PM' },
    { label: 'Wednesday', value: '9:00 AM - 6:00 PM' },
    { label: 'Thursday', value: '9:00 AM - 6:00 PM' },
    { label: 'Friday', value: '9:00 AM - 5:00 PM' },
    { label: 'Saturday', value: 'By Appointment' },
    { label: 'Sunday', value: 'Closed' }
  ];

  return (
    <MinimalSpecsModal
      isOpen={isOpen}
      onClose={onClose}
      title="Business Hours"
      icon={<Info className="h-5 w-5" />}
      specs={hours}
    />
  );
}

// Variant for product features
export function FeaturesModal({ 
  isOpen, 
  onClose, 
  features 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  features: string[];
}) {
  const featureSpecs = features.map((feature, index) => ({
    label: `${index + 1}`,
    value: feature
  }));

  return (
    <MinimalSpecsModal
      isOpen={isOpen}
      onClose={onClose}
      title="Key Features"
      specs={featureSpecs}
    />
  );
}