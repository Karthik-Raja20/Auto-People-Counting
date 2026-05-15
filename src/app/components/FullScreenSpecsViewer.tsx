import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Settings,
  Gauge,
  Cpu,
  Camera,
  Monitor,
  Network,
  Power,
  Database,
  Cloud,
  Activity,
  BarChart3,
  Award,
  Phone,
  Shield,
  Zap,
  Grid,
  Wifi,
  Smartphone,
  HardDrive,
  CheckCircle,
  ArrowRight,
  Eye,
  Layers
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  subtitle: string;
  specifications: {
    accuracy: string;
    processing: string;
    deployment: string;
    connectivity: string;
    power: string;
    storage: string;
    analytics: string;
    support: string;
  };
}

interface FullScreenSpecsViewerProps {
  product: Product;
}

interface SpecCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  description: string;
  details: {
    title: string;
    value: string;
    description: string;
    icon: React.ComponentType<any>;
  }[];
}

export function FullScreenSpecsViewer({ product }: FullScreenSpecsViewerProps) {
  const [activeCategory, setActiveCategory] = useState<string>('performance');
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const specCategories: SpecCategory[] = [
    {
      id: 'performance',
      name: 'Performance',
      icon: Gauge,
      color: 'text-blue-600',
      bgColor: 'from-blue-500 to-blue-600',
      description: 'Core performance metrics and accuracy specifications',
      details: [
        {
          title: 'Accuracy',
          value: product.specifications.accuracy,
          description: 'Real-time people counting precision with AI-powered computer vision',
          icon: Gauge
        },
        {
          title: 'Processing Speed',
          value: product.specifications.processing,
          description: 'Ultra-fast edge processing for instant analytics and reporting',
          icon: Zap
        },
        {
          title: 'Response Time',
          value: '< 100ms',
          description: 'Near-instantaneous detection and tracking capabilities',
          icon: Activity
        },
        {
          title: 'Concurrent Users',
          value: 'Unlimited',
          description: 'Support for multiple simultaneous dashboard users',
          icon: Eye
        }
      ]
    },
    {
      id: 'hardware',
      name: 'Hardware',
      icon: Camera,
      color: 'text-green-600',
      bgColor: 'from-green-500 to-green-600',
      description: 'Complete hardware specifications and components',
      details: [
        {
          title: 'AI Cameras',
          value: 'HD 1080p+',
          description: 'High-resolution sensors with built-in AI processing capabilities',
          icon: Camera
        },
        {
          title: 'EdgeBox™ Controller',
          value: 'ARM Cortex-A78',
          description: 'Dedicated processing unit with 8GB RAM and 128GB storage',
          icon: Monitor
        },
        {
          title: 'Power System',
          value: product.specifications.power,
          description: 'Efficient power management with backup options',
          icon: Power
        },
        {
          title: 'Installation',
          value: 'Ceiling/Wall Mount',
          description: 'Flexible mounting options with professional installation',
          icon: Grid
        }
      ]
    },
    {
      id: 'connectivity',
      name: 'Connectivity',
      icon: Network,
      color: 'text-purple-600',
      bgColor: 'from-purple-500 to-purple-600',
      description: 'Network and connectivity specifications',
      details: [
        {
          title: 'Network',
          value: product.specifications.connectivity,
          description: 'Multiple connectivity options for seamless integration',
          icon: Network
        },
        {
          title: 'Cloud Integration',
          value: 'Real-time Sync',
          description: 'Instant data synchronization with cloud dashboard',
          icon: Cloud
        },
        {
          title: 'API Access',
          value: 'RESTful API',
          description: 'Complete API access for custom integrations',
          icon: Database
        },
        {
          title: 'Mobile App',
          value: 'iOS & Android',
          description: 'Native mobile applications for on-the-go monitoring',
          icon: Smartphone
        }
      ]
    },
    {
      id: 'software',
      name: 'Software',
      icon: Activity,
      color: 'text-indigo-600',
      bgColor: 'from-indigo-500 to-indigo-600',
      description: 'Advanced software capabilities and analytics',
      details: [
        {
          title: 'Analytics Engine',
          value: product.specifications.analytics,
          description: 'Advanced AI-powered analytics with machine learning insights',
          icon: BarChart3
        },
        {
          title: 'Data Storage',
          value: product.specifications.storage,
          description: 'Local and cloud storage with automatic backup',
          icon: HardDrive
        },
        {
          title: 'Dashboard',
          value: 'Web-based',
          description: 'Comprehensive real-time dashboard with customizable widgets',
          icon: Monitor
        },
        {
          title: 'Reporting',
          value: 'Automated',
          description: 'Scheduled reports with custom KPIs and metrics',
          icon: Activity
        }
      ]
    },
    {
      id: 'deployment',
      name: 'Deployment',
      icon: Cloud,
      color: 'text-emerald-600',
      bgColor: 'from-emerald-500 to-emerald-600',
      description: 'Deployment options and implementation details',
      details: [
        {
          title: 'Deployment Type',
          value: product.specifications.deployment,
          description: 'Flexible deployment options for any environment',
          icon: Cloud
        },
        {
          title: 'Setup Time',
          value: '2-4 Hours',
          description: 'Professional installation and configuration included',
          icon: Settings
        },
        {
          title: 'Training',
          value: 'Included',
          description: 'Comprehensive user training and documentation provided',
          icon: Award
        },
        {
          title: 'Go-Live',
          value: 'Same Day',
          description: 'Start collecting data immediately after installation',
          icon: CheckCircle
        }
      ]
    },
    {
      id: 'support',
      name: 'Support',
      icon: Phone,
      color: 'text-orange-600',
      bgColor: 'from-orange-500 to-orange-600',
      description: 'Comprehensive support and maintenance services',
      details: [
        {
          title: 'Support Level',
          value: product.specifications.support,
          description: 'Round-the-clock technical support and assistance',
          icon: Phone
        },
        {
          title: 'Warranty',
          value: '18 Months',
          description: 'Comprehensive warranty covering hardware and software',
          icon: Shield
        },
        {
          title: 'Updates',
          value: 'Automatic',
          description: 'Regular firmware and software updates included',
          icon: Database
        },
        {
          title: 'Maintenance',
          value: 'Remote + Onsite',
          description: 'Proactive monitoring with onsite visits when needed',
          icon: Settings
        }
      ]
    }
  ];

  const currentCategory = specCategories.find(cat => cat.id === activeCategory) || specCategories[0];
  const displayCategory = hoveredCategory 
    ? specCategories.find(cat => cat.id === hoveredCategory) || currentCategory 
    : currentCategory;

  return (
    <div className="w-full flex-shrink-0 h-full min-h-[75vh] lg:min-h-[80vh] overflow-hidden">
      {/* Full-Screen Interactive Layout */}
      <div className="h-full flex flex-col">
        {/* Icon Navigation Bar */}
        <div className="flex-shrink-0 bg-gradient-to-r from-gray-50/90 via-blue-50/90 to-indigo-50/90 backdrop-blur-sm border-b border-gray-200/50 p-4 lg:p-6">
          <div className="flex items-center justify-center gap-3 lg:gap-6 overflow-x-auto scrollbar-hide">
            {specCategories.map((category) => {
              const CategoryIcon = category.icon;
              const isActive = activeCategory === category.id;
              const isHovered = hoveredCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`group relative flex flex-col items-center gap-2 lg:gap-3 p-3 lg:p-4 rounded-xl lg:rounded-2xl transition-all duration-300 transform min-w-[80px] lg:min-w-[120px] touch-target ${
                    isActive || isHovered
                      ? 'bg-white shadow-lg scale-105 ring-2 ring-primary/20' 
                      : 'bg-white/60 hover:bg-white/80 shadow-sm hover:shadow-md scale-95 hover:scale-100'
                  }`}
                >
                  {/* Icon Container */}
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${category.bgColor} shadow-md transform transition-all duration-300 ${
                    isActive || isHovered ? 'scale-110' : 'group-hover:scale-105'
                  }`}>
                    <CategoryIcon className={`h-6 w-6 lg:h-8 lg:w-8 ${isActive || isHovered ? 'animate-pulse' : ''}`} />
                  </div>
                  
                  {/* Label */}
                  <div className="text-center">
                    <span className={`text-xs lg:text-sm font-semibold transition-colors duration-300 ${
                      isActive || isHovered ? 'text-primary' : 'text-gray-700 group-hover:text-primary'
                    }`}>
                      {category.name}
                    </span>
                  </div>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-8 overflow-y-auto scrollbar-thin">
          {/* Category Header */}
          <div className="mb-6 lg:mb-8 text-center">
            <div className={`inline-flex items-center gap-3 lg:gap-4 p-4 lg:p-6 bg-gradient-to-r ${displayCategory.bgColor} rounded-xl lg:rounded-2xl text-white shadow-lg mb-4`}>
              <displayCategory.icon className="h-8 w-8 lg:h-10 lg:w-10" />
              <div>
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold">{displayCategory.name} Specifications</h3>
                <p className="text-sm lg:text-base opacity-90 mt-1">{displayCategory.description}</p>
              </div>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {displayCategory.details.map((detail, index) => {
              const DetailIcon = detail.icon;
              
              return (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4 lg:gap-6">
                    {/* Icon */}
                    <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${displayCategory.bgColor} rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      <DetailIcon className="h-6 w-6 lg:h-8 lg:w-8" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 lg:mb-3">
                        <h4 className="text-lg lg:text-xl font-bold text-gray-900">{detail.title}</h4>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                      
                      <div className={`text-xl lg:text-2xl xl:text-3xl font-bold ${displayCategory.color} mb-3 lg:mb-4`}>
                        {detail.value}
                      </div>
                      
                      <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technical Summary */}
          <div className="mt-8 lg:mt-12 bg-gradient-to-r from-gray-50/80 to-blue-50/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-gray-200/50">
            <div className="text-center mb-6 lg:mb-8">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Complete Technical Overview</h3>
              <p className="text-base lg:text-lg text-gray-600">Comprehensive specifications for {product.name}</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { label: 'Accuracy', value: product.specifications.accuracy, icon: Gauge, color: 'text-blue-600' },
                { label: 'Processing', value: product.specifications.processing, icon: Cpu, color: 'text-green-600' },
                { label: 'Connectivity', value: product.specifications.connectivity, icon: Network, color: 'text-purple-600' },
                { label: 'Support', value: product.specifications.support, icon: Phone, color: 'text-orange-600' }
              ].map((item, index) => (
                <div key={index} className="text-center p-4 lg:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:bg-white hover:shadow-md transition-all duration-200">
                  <item.icon className={`h-8 w-8 lg:h-10 lg:w-10 ${item.color} mx-auto mb-3`} />
                  <div className={`text-lg lg:text-xl font-bold ${item.color} mb-2`}>{item.value}</div>
                  <div className="text-sm lg:text-base text-gray-600 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Navigation Pills */}
          <div className="mt-8 lg:mt-12 flex flex-wrap justify-center gap-2 lg:gap-3">
            {specCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all duration-200 ${
                  activeCategory === category.id 
                    ? `bg-gradient-to-r ${category.bgColor} text-white shadow-md` 
                    : 'hover:bg-gray-50'
                }`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}