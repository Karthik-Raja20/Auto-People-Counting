import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  TrendingUp, 
  Users, 
  Shield, 
  Clock, 
  CheckCircle, 
  Bus,
  Plane,
  Building2,
  Church,
  Camera,
  Calendar,
  Zap,
  Music,
  Factory,
  Store,
  ShoppingBag
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Industry {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  caseStudy: {
    client: string;
    result: string;
    metric: string;
  };
  image: string;
  gradient: string;
  icon: React.ReactNode;
}

const industries: Industry[] = [
  {
    id: 'retail',
    name: 'Retail & Malls',
    description: 'Optimize customer flow, reduce queue times, and enhance shopping experiences with real-time occupancy insights.',
    benefits: ['Queue Management', 'Peak Hour Analysis', 'Store Layout Optimization', 'Customer Journey Mapping'],
    caseStudy: {
      client: 'MegaMall',
      result: '42% reduction in queue times',
      metric: 'Customer satisfaction increased by 35%'
    },
    image: 'modern retail store',
    gradient: 'from-blue-500 to-purple-600',
    icon: <ShoppingBag className="h-6 w-6" />
  },
  {
    id: 'warehouses',
    name: 'Warehouses',
    description: 'Enhance operational efficiency and worker safety with automated people tracking and zone monitoring.',
    benefits: ['Safety Zone Monitoring', 'Worker Efficiency Tracking', 'Automated Reporting', 'Compliance Management'],
    caseStudy: {
      client: 'LogiCenter',
      result: '28% improvement in efficiency',
      metric: 'Zero safety incidents for 12 months'
    },
    image: 'modern warehouse facility',
    gradient: 'from-green-500 to-teal-600',
    icon: <Shield className="h-6 w-6" />
  },
  {
    id: 'transport',
    name: 'Metro-Railway Stations',
    description: 'Manage crowd flow, improve passenger safety, and optimize platform capacity during peak hours.',
    benefits: ['Crowd Flow Management', 'Platform Optimization', 'Safety Monitoring', 'Capacity Planning'],
    caseStudy: {
      client: 'Metro Transit',
      result: '15% better crowd flow',
      metric: 'Reduced platform congestion by 40%'
    },
    image: 'modern train station',
    gradient: 'from-orange-500 to-red-600',
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    id: 'banks',
    name: 'Government Institutions',
    description: 'Improve citizen service, reduce wait times, and enhance security with intelligent occupancy monitoring.',
    benefits: ['Queue Optimization', 'Security Enhancement', 'Resource Allocation', 'Citizen Experience'],
    caseStudy: {
      client: 'City Hall Complex',
      result: '32% reduction in wait times',
      metric: 'Citizen satisfaction up 40%'
    },
    image: 'modern government building',
    gradient: 'from-indigo-500 to-blue-600',
    icon: <Building2 className="h-6 w-6" />
  },
  {
    id: 'hospitals',
    name: 'Hospitals',
    description: 'Optimize patient flow, manage waiting areas, and ensure compliance with capacity regulations.',
    benefits: ['Patient Flow Optimization', 'Emergency Response', 'Capacity Management', 'Staff Allocation'],
    caseStudy: {
      client: 'Regional Medical Center',
      result: '18% improvement in patient flow',
      metric: 'Reduced ER wait times by 25%'
    },
    image: 'modern hospital lobby',
    gradient: 'from-teal-500 to-green-600',
    icon: <CheckCircle className="h-6 w-6" />
  },
  {
    id: 'airports',
    name: 'Airports & Shuttles',
    description: 'Enhance passenger experience, optimize security checkpoints, and manage terminal capacity efficiently.',
    benefits: ['Security Optimization', 'Terminal Management', 'Passenger Flow', 'Gate Optimization'],
    caseStudy: {
      client: 'International Airport',
      result: '40% faster security processing',
      metric: 'Passenger satisfaction up 45%'
    },
    image: 'modern airport terminal',
    gradient: 'from-purple-500 to-pink-600',
    icon: <Plane className="h-6 w-6" />
  },
  {
    id: 'buses',
    name: 'Buses & Shuttles',
    description: 'Monitor passenger boarding, optimize capacity utilization, and ensure safety compliance on buses and shuttles.',
    benefits: ['Capacity Monitoring', 'Boarding Optimization', 'Safety Compliance', 'Route Planning'],
    caseStudy: {
      client: 'City Transit Authority',
      result: '25% better capacity utilization',
      metric: 'Reduced boarding delays by 30%'
    },
    image: 'modern bus interior',
    gradient: 'from-yellow-500 to-orange-600',
    icon: <Bus className="h-6 w-6" />
  },
  {
    id: 'temples',
    name: 'Temples & Religious Sites',
    description: 'Manage crowd flow during festivals, ensure visitor safety, and optimize ceremonial space utilization.',
    benefits: ['Crowd Management', 'Festival Planning', 'Safety Monitoring', 'Space Optimization'],
    caseStudy: {
      client: 'Sacred Temple Complex',
      result: '50% better crowd flow',
      metric: 'Zero safety incidents during festivals'
    },
    image: 'beautiful temple interior',
    gradient: 'from-amber-500 to-yellow-600',
    icon: <Church className="h-6 w-6" />
  },
  {
    id: 'museums',
    name: 'Museums & Galleries',
    description: 'Enhance visitor experience, protect valuable exhibits, and optimize gallery space utilization.',
    benefits: ['Visitor Flow', 'Exhibit Protection', 'Capacity Control', 'Experience Enhancement'],
    caseStudy: {
      client: 'National Art Museum',
      result: '35% improved visitor experience',
      metric: 'Exhibit protection increased by 60%'
    },
    image: 'modern museum gallery',
    gradient: 'from-rose-500 to-pink-600',
    icon: <Camera className="h-6 w-6" />
  },
  {
    id: 'outdoor-events',
    name: 'Outdoor Events',
    description: 'Monitor attendance at outdoor venues, ensure safety compliance, and optimize space utilization.',
    benefits: ['Attendance Monitoring', 'Safety Compliance', 'Space Optimization', 'Emergency Response'],
    caseStudy: {
      client: 'Summer Festival Grounds',
      result: '45% better crowd control',
      metric: 'Zero safety incidents across 50+ events'
    },
    image: 'outdoor event venue',
    gradient: 'from-green-400 to-blue-500',
    icon: <Calendar className="h-6 w-6" />
  },
  {
    id: 'carnivals',
    name: 'Carnivals & Fairs',
    description: 'Track visitor flow through attractions, manage ride capacity, and ensure crowd safety at entertainment venues.',
    benefits: ['Attraction Monitoring', 'Ride Capacity', 'Safety Management', 'Queue Optimization'],
    caseStudy: {
      client: 'State Fair Grounds',
      result: '38% reduced wait times',
      metric: 'Visitor satisfaction up 42%'
    },
    image: 'colorful carnival scene',
    gradient: 'from-pink-500 to-violet-600',
    icon: <Zap className="h-6 w-6" />
  },
  {
    id: 'stadiums',
    name: 'Stadiums & Arenas',
    description: 'Optimize entry/exit flow, manage concourse capacity, and enhance spectator safety during events.',
    benefits: ['Entry Optimization', 'Concourse Management', 'Emergency Evacuation', 'Capacity Planning'],
    caseStudy: {
      client: 'Metropolitan Stadium',
      result: '30% faster entry processing',
      metric: 'Fan experience rating up 35%'
    },
    image: 'modern stadium interior',
    gradient: 'from-red-500 to-orange-600',
    icon: <Users className="h-6 w-6" />
  },
  {
    id: 'concerts',
    name: 'Concerts & Venues',
    description: 'Monitor audience density, optimize venue layout, and ensure performer and audience safety.',
    benefits: ['Audience Monitoring', 'Venue Optimization', 'Safety Management', 'Emergency Response'],
    caseStudy: {
      client: 'Grand Concert Hall',
      result: '40% improved safety protocols',
      metric: 'Zero incidents across 100+ shows'
    },
    image: 'concert venue with stage',
    gradient: 'from-purple-600 to-blue-600',
    icon: <Music className="h-6 w-6" />
  },
  {
    id: 'corporate',
    name: 'Corporate Houses',
    description: 'Monitor office occupancy, optimize workspace utilization, and enhance employee safety and productivity.',
    benefits: ['Space Utilization', 'Employee Safety', 'Energy Efficiency', 'Productivity Tracking'],
    caseStudy: {
      client: 'TechCorp Headquarters',
      result: '35% space optimization',
      metric: 'Energy costs reduced by 28%'
    },
    image: 'modern corporate office',
    gradient: 'from-slate-500 to-gray-600',
    icon: <Building2 className="h-6 w-6" />
  },
  {
    id: 'factories',
    name: 'Plants & Factories',
    description: 'Track worker movement, ensure safety compliance, and optimize production floor efficiency.',
    benefits: ['Worker Safety', 'Production Efficiency', 'Compliance Monitoring', 'Zone Management'],
    caseStudy: {
      client: 'Manufacturing Plant Alpha',
      result: '22% efficiency improvement',
      metric: 'Safety incidents down 85%'
    },
    image: 'modern factory floor',
    gradient: 'from-orange-500 to-red-500',
    icon: <Factory className="h-6 w-6" />
  },
  {
    id: 'exhibitions',
    name: 'Exhibitions & Trade Shows',
    description: 'Track visitor engagement, optimize booth placement, and manage crowd flow at indoor and outdoor exhibitions.',
    benefits: ['Visitor Analytics', 'Booth Optimization', 'Crowd Management', 'ROI Tracking'],
    caseStudy: {
      client: 'International Trade Center',
      result: '55% better visitor flow',
      metric: 'Exhibitor satisfaction up 48%'
    },
    image: 'exhibition hall with booths',
    gradient: 'from-cyan-500 to-blue-600',
    icon: <Store className="h-6 w-6" />
  }
];

export function UniversalApplications() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [industrySlide, setIndustrySlide] = useState(0);

  // Industries per slide based on screen size
  const industriesPerSlide = {
    mobile: 4,    // 2x2 grid on mobile
    tablet: 8,    // 4x2 grid on tablet  
    desktop: 8    // 4x2 grid on desktop
  };

  const maxIndustrySlides = Math.ceil(industries.length / industriesPerSlide.desktop);

  // Auto-advance main showcase slider
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIndustry((prev) => (prev + 1) % industries.length);
    }, 6000); // Increased to 6 seconds for better UX

    return () => clearInterval(timer);
  }, []);

  // Auto-advance industry selection slider
  useEffect(() => {
    const timer = setInterval(() => {
      setIndustrySlide((prev) => (prev + 1) % maxIndustrySlides);
    }, 8000); // Slower auto-advance for industry slider

    return () => clearInterval(timer);
  }, [maxIndustrySlides]);

  // Main showcase navigation
  const nextSlide = () => {
    setSelectedIndustry((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setSelectedIndustry((prev) => (prev - 1 + industries.length) % industries.length);
  };

  // Industry slider navigation
  const nextIndustrySlide = () => {
    setIndustrySlide((prev) => (prev + 1) % maxIndustrySlides);
  };

  const prevIndustrySlide = () => {
    setIndustrySlide((prev) => (prev - 1 + maxIndustrySlides) % maxIndustrySlides);
  };

  // Get visible industries for current slide
  const getVisibleIndustries = (itemsPerSlide: number) => {
    const startIndex = industrySlide * itemsPerSlide;
    const endIndex = Math.min(startIndex + itemsPerSlide, industries.length);
    return industries.slice(startIndex, endIndex);
  };

  const currentIndustry = industries[selectedIndustry];

  return (
    <section className="py-8 lg:py-12 bg-gradient-to-br from-gray-50 to-blue-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-50/20 to-blue-50/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <div className="container-responsive max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm">
            <div className="p-1 bg-gradient-to-r from-primary to-accent rounded-full">
              <Globe className="h-3 w-3 text-white" />
            </div>
            <span className="text-primary font-medium text-sm">Universal Application</span>
          </div>
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-3 lg:mb-4">
            Proven Across <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Every Industry</span>
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See how our AI-powered people counting delivers results across retail, healthcare, transport, government institutions, temples, museums, outdoor events, carnivals, stadiums, concerts, corporate houses, manufacturing plants, exhibitions, and more.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Industry Slider - Left Side */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Industry Slider Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground text-sm lg:text-base">Select Industry</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">8 industries per page • 4 rows × 2 columns</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevIndustrySlide}
                    className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-sm border border-border hover:shadow-md hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <ChevronLeft className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </button>
                  <button
                    onClick={nextIndustrySlide}
                    className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-sm border border-border hover:shadow-md hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <ChevronRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </button>
                </div>
              </div>

              {/* Mobile Industry Grid (4 items: 2x2) */}
              <div className="block sm:hidden">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {getVisibleIndustries(industriesPerSlide.mobile).map((industry, index) => {
                    const actualIndex = industrySlide * industriesPerSlide.mobile + index;
                    return (
                      <button
                        key={industry.id}
                        onClick={() => setSelectedIndustry(actualIndex)}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 text-left group hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                          selectedIndustry === actualIndex
                            ? 'border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 shadow-lg shadow-primary/20 ring-2 ring-primary/20'
                            : 'border-border bg-white hover:border-primary/40 hover:shadow-md hover:bg-primary/5'
                        }`}
                      >
                        <div className={`inline-flex p-1.5 rounded-lg mb-2 transition-all duration-300 ${
                          selectedIndustry === actualIndex
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-sm'
                            : 'bg-muted text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary'
                        }`}>
                          <div className="w-3 h-3">{industry.icon}</div>
                        </div>
                        <h3 className={`font-semibold text-xs transition-colors duration-300 ${
                          selectedIndustry === actualIndex ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
                        }`}>
                          {industry.name}
                        </h3>
                        <div className={`text-xs mt-1 transition-colors duration-300 font-medium ${
                          selectedIndustry === actualIndex ? 'text-primary' : 'text-muted-foreground group-hover:text-primary/80'
                        }`}>
                          View Solutions
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tablet/Desktop Industry Grid (8 items: 4x2) */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-3">
                  {getVisibleIndustries(industriesPerSlide.desktop).map((industry, index) => {
                    const actualIndex = industrySlide * industriesPerSlide.desktop + index;
                    return (
                      <button
                        key={industry.id}
                        onClick={() => setSelectedIndustry(actualIndex)}
                        className={`p-3 lg:p-4 rounded-xl border-2 transition-all duration-300 text-left group hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                          selectedIndustry === actualIndex
                            ? 'border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 shadow-lg shadow-primary/20 ring-2 ring-primary/20'
                            : 'border-border bg-white hover:border-primary/40 hover:shadow-md hover:bg-primary/5'
                        }`}
                      >
                        <div className={`inline-flex p-2 rounded-lg mb-2 transition-all duration-300 ${
                          selectedIndustry === actualIndex
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-sm'
                            : 'bg-muted text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary'
                        }`}>
                          <div className="w-4 h-4">{industry.icon}</div>
                        </div>
                        <h3 className={`font-semibold text-xs lg:text-sm transition-colors duration-300 ${
                          selectedIndustry === actualIndex ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
                        }`}>
                          {industry.name}
                        </h3>
                        <div className={`text-xs mt-1 transition-colors duration-300 font-medium ${
                          selectedIndustry === actualIndex ? 'text-primary' : 'text-muted-foreground group-hover:text-primary/80'
                        }`}>
                          View Solutions
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Industry Slider Dots */}
              <div className="flex justify-center gap-1.5">
                {Array.from({ length: maxIndustrySlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setIndustrySlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                      industrySlide === index
                        ? 'bg-gradient-to-r from-primary to-accent scale-125 shadow-sm'
                        : 'bg-muted hover:bg-muted-foreground/40 hover:scale-110'
                    }`}
                  />
                ))}
              </div>

              {/* Industry Counter */}
              <div className="text-center mt-2">
                <span className="text-xs text-muted-foreground font-medium">
                  Page {industrySlide + 1} of {maxIndustrySlides} • Showing {Math.min(industriesPerSlide.desktop, industries.length - (industrySlide * industriesPerSlide.desktop))} of {industries.length} Industries
                </span>
              </div>
            </div>
          </div>

          {/* Industry Showcase - Right Side */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Main Industry Card */}
              <div className="bg-white rounded-2xl shadow-xl shadow-primary/10 overflow-hidden border border-border">
                {/* Industry Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentIndustry.gradient} opacity-90`} />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
                    alt={currentIndustry.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Accuracy Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md border border-accent/20">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                      <span className="font-semibold text-foreground text-xs">Up to 99% Accuracy</span>
                    </div>
                  </div>

                  {/* Industry Icon */}
                  <div className="absolute top-3 left-3 p-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-md border border-primary/20">
                    <div className="text-primary w-4 h-4">
                      {currentIndustry.icon}
                    </div>
                  </div>
                </div>

                {/* Industry Content */}
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">
                    {currentIndustry.name}
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-4">
                    {currentIndustry.description}
                  </p>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {currentIndustry.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-1.5 text-xs lg:text-sm">
                        <CheckCircle className="h-3 w-3 text-accent flex-shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Case Study Card */}
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-3 lg:p-4 border border-primary/20">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm">Solution</h4>
                        <p className="text-primary font-medium text-sm">{currentIndustry.caseStudy.client}</p>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full border border-accent/20">
                        <span className="text-xs font-semibold text-accent">✓ Deployed</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="h-3 w-3 text-accent" />
                        <span className="font-semibold text-foreground text-sm">{currentIndustry.caseStudy.result}</span>
                      </div>
                      <p className="text-muted-foreground text-xs">{currentIndustry.caseStudy.metric}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={prevSlide}
                  className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md border border-border hover:shadow-lg hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-1.5">
                  {industries.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedIndustry(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        selectedIndustry === index
                          ? 'bg-gradient-to-r from-primary to-accent scale-125 shadow-sm'
                          : 'bg-muted hover:bg-muted-foreground/40 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md border border-border hover:shadow-lg hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 lg:mt-10">
          <div className="inline-flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-md">
              Explore All Solutions
            </button>
            <button className="px-6 py-2.5 bg-white text-foreground font-semibold rounded-lg border border-border hover:border-primary/40 hover:shadow-md hover:bg-primary/5 transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
              Start Free POC
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}