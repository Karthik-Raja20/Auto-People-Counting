import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
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
  Layers,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Expand,
  Minimize2
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

interface NoScrollSpecsViewerProps {
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

export function NoScrollSpecsViewer({ product }: NoScrollSpecsViewerProps) {
  const [activeCategory, setActiveCategory] = useState<string>('performance');
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

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
          description: 'Real-time people counting precision with AI-powered computer vision algorithms and advanced machine learning models',
          icon: Gauge
        },
        {
          title: 'Processing Speed',
          value: product.specifications.processing,
          description: 'Ultra-fast edge processing for instant analytics, real-time reporting, and immediate response capabilities',
          icon: Zap
        },
        {
          title: 'Response Time',
          value: '< 100ms',
          description: 'Near-instantaneous detection and tracking capabilities with sub-second latency for critical applications',
          icon: Activity
        },
        {
          title: 'Concurrent Users',
          value: 'Unlimited',
          description: 'Support for multiple simultaneous dashboard users with real-time data synchronization across all interfaces',
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
          description: 'High-resolution sensors with built-in AI processing, advanced lens technology, and intelligent auto-calibration',
          icon: Camera
        },
        {
          title: 'EdgeBox™ Controller',
          value: 'ARM Cortex-A78',
          description: 'Dedicated processing unit with 8GB RAM, 128GB storage, and specialized neural processing capabilities',
          icon: Monitor
        },
        {
          title: 'Power System',
          value: product.specifications.power,
          description: 'Efficient power management with backup options, PoE+ support, and intelligent power optimization',
          icon: Power
        },
        {
          title: 'Installation',
          value: 'Ceiling/Wall Mount',
          description: 'Flexible mounting options with professional installation, weatherproof housing, and cable management',
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
          description: 'Multiple connectivity options including Ethernet, Wi-Fi 6, cellular backup, and satellite communication',
          icon: Network
        },
        {
          title: 'Cloud Integration',
          value: 'Real-time Sync',
          description: 'Instant data synchronization with cloud dashboard, automatic backup, and multi-region deployment',
          icon: Cloud
        },
        {
          title: 'API Access',
          value: 'RESTful API',
          description: 'Complete API access for custom integrations, webhooks, real-time data streaming, and third-party connectivity',
          icon: Database
        },
        {
          title: 'Mobile App',
          value: 'iOS & Android',
          description: 'Native mobile applications with push notifications, offline capabilities, and cross-platform synchronization',
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
          description: 'Advanced AI-powered analytics with machine learning insights, predictive modeling, and behavioral analysis',
          icon: BarChart3
        },
        {
          title: 'Data Storage',
          value: product.specifications.storage,
          description: 'Local and cloud storage with automatic backup, data encryption, and compliance-ready archival systems',
          icon: HardDrive
        },
        {
          title: 'Dashboard',
          value: 'Web-based',
          description: 'Comprehensive real-time dashboard with customizable widgets, drag-and-drop interface, and responsive design',
          icon: Monitor
        },
        {
          title: 'Reporting',
          value: 'Automated',
          description: 'Scheduled reports with custom KPIs, automated insights, executive summaries, and exportable formats',
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
          description: 'Flexible deployment options including on-premise, cloud, hybrid, and edge computing configurations',
          icon: Cloud
        },
        {
          title: 'Setup Time',
          value: '2-4 Hours',
          description: 'Professional installation and configuration with minimal downtime and comprehensive testing procedures',
          icon: Settings
        },
        {
          title: 'Training',
          value: 'Included',
          description: 'Comprehensive user training, administrator certification, video tutorials, and ongoing education programs',
          icon: Award
        },
        {
          title: 'Go-Live',
          value: 'Same Day',
          description: 'Start collecting data immediately after installation with real-time validation and performance monitoring',
          icon: CheckCircle
        }
      ]
    }
  ];

  const currentCategory = specCategories.find(cat => cat.id === activeCategory) || specCategories[0];
  const currentDetail = currentCategory.details[activeDetailIndex];

  // Auto-rotate through details every 5 seconds
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setActiveDetailIndex(prev => {
        const nextIndex = (prev + 1) % currentCategory.details.length;
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRotate, currentCategory.details.length]);

  const nextCategory = () => {
    const currentIndex = specCategories.findIndex(cat => cat.id === activeCategory);
    const nextIndex = (currentIndex + 1) % specCategories.length;
    setActiveCategory(specCategories[nextIndex].id);
    setActiveDetailIndex(0);
  };

  const prevCategory = () => {
    const currentIndex = specCategories.findIndex(cat => cat.id === activeCategory);
    const prevIndex = (currentIndex - 1 + specCategories.length) % specCategories.length;
    setActiveCategory(specCategories[prevIndex].id);
    setActiveDetailIndex(0);
  };

  const nextDetail = () => {
    setActiveDetailIndex(prev => (prev + 1) % currentCategory.details.length);
    setAutoRotate(false);
  };

  const prevDetail = () => {
    setActiveDetailIndex(prev => (prev - 1 + currentCategory.details.length) % currentCategory.details.length);
    setAutoRotate(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const resetAutoRotate = () => {
    setAutoRotate(true);
    setActiveDetailIndex(0);
  };

  return (
    <div className="w-full flex-shrink-0 h-full min-h-[75vh] lg:min-h-[80vh] flex flex-col no-scroll-container">
      {/* Header with Category Navigation - NO HORIZONTAL SCROLL */}
      <div className="flex-shrink-0 bg-gradient-to-r from-gray-50/90 via-blue-50/90 to-indigo-50/90 backdrop-blur-sm border-b border-gray-200/50 p-4 lg:p-6">
        {/* Category Selector with Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            onClick={prevCategory}
            className="p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex-1 mx-4">
            <div className="category-grid">
              {specCategories.map((category) => {
                const CategoryIcon = category.icon;
                const isActive = activeCategory === category.id;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setActiveDetailIndex(0);
                      setAutoRotate(false);
                    }}
                    className={`group relative flex flex-col items-center gap-2 p-3 lg:p-4 rounded-xl spec-content-transition ${
                      isActive
                        ? 'bg-white shadow-lg scale-105 ring-2 ring-primary/20' 
                        : 'bg-white/60 hover:bg-white/80 shadow-sm hover:shadow-md hover:scale-105'
                    }`}
                  >
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-white bg-gradient-to-r ${category.bgColor} shadow-md ${
                      isActive ? 'scale-110' : 'group-hover:scale-105'
                    } transition-transform duration-300`}>
                      <CategoryIcon className={`h-5 w-5 lg:h-6 lg:w-6 ${isActive ? 'animate-pulse' : ''}`} />
                    </div>
                    
                    <span className={`text-xs lg:text-sm font-semibold transition-colors duration-300 text-center ${
                      isActive ? 'text-primary' : 'text-gray-700 group-hover:text-primary'
                    }`}>
                      {category.name}
                    </span>
                    
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <Button
            variant="outline"
            onClick={nextCategory}
            className="p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Category Description */}
        <div className="text-center">
          <h3 className={`text-xl lg:text-2xl font-bold ${currentCategory.color} mb-2`}>
            {currentCategory.name} Specifications
          </h3>
          <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
            {currentCategory.description}
          </p>
        </div>
      </div>

      {/* Main Content Area - NO VERTICAL SCROLL */}
      <div className="flex-1 p-4 lg:p-8 flex flex-col">
        {/* Current Detail Display */}
        <div className="flex-1 flex items-center justify-center">
          <Card className="w-full max-w-4xl mx-auto border-2 border-gray-200 hover:border-primary/30 spec-detail-card spec-fade-in">
            <CardContent className="p-6 lg:p-8">
              {/* Detail Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${currentCategory.bgColor} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    <currentDetail.icon className="h-8 w-8 lg:h-10 lg:w-10" />
                  </div>
                  <div>
                    <h4 className="text-2xl lg:text-3xl font-bold text-gray-900">{currentDetail.title}</h4>
                    <div className={`text-3xl lg:text-4xl font-bold ${currentCategory.color} mt-2`}>
                      {currentDetail.value}
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={resetAutoRotate}
                    className={`p-2 ${autoRotate ? 'bg-green-50 text-green-600' : 'text-gray-600'}`}
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleExpanded}
                    className="p-2"
                  >
                    {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Detail Description */}
              <div className="space-y-4">
                <p className={`text-lg lg:text-xl text-gray-700 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
                  {currentDetail.description}
                </p>

                {isExpanded && (
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl p-6 border border-gray-200">
                    <h5 className="font-bold text-gray-900 mb-3">Technical Details:</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-gray-700">Implementation:</div>
                        <div className="text-sm text-gray-600">Professional grade deployment with enterprise-level reliability and comprehensive monitoring.</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-gray-700">Compliance:</div>
                        <div className="text-sm text-gray-600">GDPR, SOC2, ISO 27001 certified with complete audit trail and data protection.</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detail Navigation */}
        <div className="flex-shrink-0 mt-6">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevDetail}
              className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white hover:shadow-md nav-button"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            {/* Detail Progress Indicators */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 font-medium">
                {activeDetailIndex + 1} of {currentCategory.details.length}
              </span>
              <div className="flex gap-2">
                {currentCategory.details.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveDetailIndex(index);
                      setAutoRotate(false);
                    }}
                    className={`h-2 rounded-full progress-indicator ${
                      index === activeDetailIndex 
                        ? `bg-gradient-to-r ${currentCategory.bgColor} w-8 shadow-md` 
                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                    }`}
                  />
                ))}
              </div>
              {autoRotate && (
                <Badge className="bg-green-100 text-green-700 text-xs auto-rotate-indicator">
                  Auto-rotating
                </Badge>
              )}
            </div>

            <Button
              variant="outline"
              onClick={nextDetail}
              className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white hover:shadow-md nav-button"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Summary Grid */}
        <div className="flex-shrink-0 mt-8">
          <div className="detail-summary-grid">
            {currentCategory.details.map((detail, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveDetailIndex(index);
                  setAutoRotate(false);
                }}
                className={`p-4 rounded-xl text-left transition-all duration-200 ${
                  index === activeDetailIndex 
                    ? `bg-gradient-to-r ${currentCategory.bgColor} text-white shadow-lg` 
                    : 'bg-white border border-gray-200 hover:border-primary/30 hover:shadow-md'
                }`}
              >
                <detail.icon className={`h-6 w-6 mb-2 ${index === activeDetailIndex ? 'text-white' : currentCategory.color}`} />
                <div className={`font-semibold text-sm ${index === activeDetailIndex ? 'text-white' : 'text-gray-900'}`}>
                  {detail.title}
                </div>
                <div className={`text-xs ${index === activeDetailIndex ? 'text-white/90' : 'text-gray-600'}`}>
                  {detail.value}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}