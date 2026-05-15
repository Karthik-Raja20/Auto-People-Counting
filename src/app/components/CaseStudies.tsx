import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Clock, 
  Target,
  Building,
  ShoppingCart,
  Plane,
  Music,
  Hospital,
  Warehouse,
  University,
  DollarSign,
  Star,
  Zap,
  Shield,
  Award,
  PlayCircle,
  ArrowRight,
  BarChart3,
  Lightbulb,
  CheckCircle,
  Filter,
  TrendingUpIcon
} from 'lucide-react';

interface CaseStudiesProps {
  onPageChange: (page: string) => void;
}

export function CaseStudies({ onPageChange }: CaseStudiesProps) {
  const [activeTab, setActiveTab] = useState('all');

  const allCaseStudies = [
    {
      id: 'retailmall',
      company: 'MegaMall Supermarket',
      industry: 'Retail',
      icon: <ShoppingCart className="h-6 w-6" />,
      location: 'Downtown Shopping Center',
      challenge: 'Long customer queues, inefficient staff allocation, and poor conversion rates during peak hours',
      solution: 'Deployed APC Core solution with real-time queue monitoring and staff optimization alerts',
      results: [
        { metric: 'Queue Times', value: '-42%', trend: 'down', description: 'Average wait time reduced from 8.5 to 4.9 minutes' },
        { metric: 'Staff Overtime', value: '-25%', trend: 'down', description: 'Optimized staff scheduling based on traffic patterns' },
        { metric: 'Conversion Rate', value: '+20%', trend: 'up', description: 'Improved customer experience led to higher sales' },
        { metric: 'Customer Satisfaction', value: '+35%', trend: 'up', description: 'Reduced wait times improved NPS scores' }
      ],
      testimonial: {
        quote: "APC Core transformed our operations. The real-time insights allowed us to optimize staffing and reduce queue times by 42%.",
        author: "Sarah Chen",
        role: "Operations Director"
      },
      implementation: "3 weeks",
      roi: "ROI achieved within 4 months",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500"
    },
    {
      id: 'cityairport',
      company: 'International Airport',
      industry: 'Transportation',
      icon: <Plane className="h-6 w-6" />,
      location: 'Terminal 2 Security Checkpoint',
      challenge: 'Passenger congestion and security bottlenecks causing delays and poor experience',
      solution: 'Implemented APC Link with existing security cameras for passenger flow optimization',
      results: [
        { metric: 'Passenger Flow', value: '+40%', trend: 'up', description: 'Improved passenger throughput and movement' },
        { metric: 'Security Efficiency', value: '+30%', trend: 'up', description: 'Optimized security checkpoint staffing' },
        { metric: 'Wait Time Reduction', value: '-45%', trend: 'down', description: 'Average security wait reduced significantly' },
        { metric: 'Operational Savings', value: '$1.2M', trend: 'up', description: 'Annual savings from efficiency improvements' }
      ],
      testimonial: {
        quote: "APC Link seamlessly integrated with our existing systems and delivered immediate improvements in passenger flow.",
        author: "David Kumar",
        role: "Operations Manager"
      },
      implementation: "2 weeks",
      roi: "ROI achieved within 6 months",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500"
    },
    {
      id: 'techoffice',
      company: 'TechCorp Campus',
      industry: 'Office Buildings',
      icon: <Building className="h-6 w-6" />,
      location: '15-floor office complex',
      challenge: 'High energy costs and underutilized meeting rooms affecting productivity',
      solution: 'Deployed APC Flex solution across all floors with HVAC integration and space analytics',
      results: [
        { metric: 'Energy Savings', value: '-35%', trend: 'down', description: 'HVAC optimization based on actual occupancy data' },
        { metric: 'Space Utilization', value: '+28%', trend: 'up', description: 'Better understanding of space usage patterns' },
        { metric: 'Annual Savings', value: '$850K', trend: 'up', description: 'Total cost savings from efficiency improvements' },
        { metric: 'Employee Satisfaction', value: '+25%', trend: 'up', description: 'Improved climate control and space availability' }
      ],
      testimonial: {
        quote: "The 15-day POC convinced us immediately. Setup was seamless and results were instant.",
        author: "Michael Rodriguez",
        role: "Facility Manager"
      },
      implementation: "4 weeks",
      roi: "ROI achieved within 3 months",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500"
    },
    {
      id: 'musicfestival',
      company: 'Summer Music Festival',
      industry: 'Events',
      icon: <Music className="h-6 w-6" />,
      location: 'Outdoor festival grounds',
      challenge: 'Crowd safety and capacity management for 50,000+ attendees',
      solution: 'APC EventSense rental solution for real-time crowd monitoring and safety',
      results: [
        { metric: 'Safety Incidents', value: '-90%', trend: 'down', description: 'Prevented overcrowding through real-time monitoring' },
        { metric: 'Crowd Flow', value: '+50%', trend: 'up', description: 'Optimized entry/exit and stage area flow' },
        { metric: 'Emergency Response', value: '3x Faster', trend: 'up', description: 'Real-time alerts enabled rapid response' },
        { metric: 'Attendee Satisfaction', value: '+40%', trend: 'up', description: 'Improved overall festival experience' }
      ],
      testimonial: {
        quote: "APC EventSense saved our festival. Real-time crowd monitoring prevented potential overcrowding incidents.",
        author: "Emma Thompson",
        role: "Event Director"
      },
      implementation: "Same day setup",
      roi: "Immediate risk mitigation value",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500"
    },
    {
      id: 'hospital',
      company: 'Regional Medical Center',
      industry: 'Healthcare',
      icon: <Hospital className="h-6 w-6" />,
      location: 'Emergency Department & Waiting Areas',
      challenge: 'Long patient wait times and inefficient resource allocation',
      solution: 'APC Core deployment for patient flow optimization and capacity management',
      results: [
        { metric: 'Patient Wait Times', value: '-25%', trend: 'down', description: 'Reduced average ER wait from 4.2 to 3.1 hours' },
        { metric: 'Staff Utilization', value: '+32%', trend: 'up', description: 'Better staff allocation during peak periods' },
        { metric: 'Patient Satisfaction', value: '+18%', trend: 'up', description: 'Improved HCAHPS scores' },
        { metric: 'Operational Efficiency', value: '+28%', trend: 'up', description: 'Enhanced throughput and capacity management' }
      ],
      testimonial: {
        quote: "Patient flow optimization has transformed our emergency department. We can predict busy periods and allocate resources effectively.",
        author: "Dr. Sarah Martinez",
        role: "Emergency Department Director"
      },
      implementation: "5 weeks",
      roi: "ROI achieved within 8 months",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500"
    },
    {
      id: 'university',
      company: 'State University',
      industry: 'Education',
      icon: <University className="h-6 w-6" />,
      location: 'Library & Student Centers',
      challenge: 'Overcrowded facilities and poor space utilization insights',
      solution: 'APC Link leveraging existing campus security cameras for space analytics',
      results: [
        { metric: 'Space Utilization', value: '+45%', trend: 'up', description: 'Better understanding of peak usage periods' },
        { metric: 'Student Satisfaction', value: '+22%', trend: 'up', description: 'Reduced crowding and wait times' },
        { metric: 'Operational Costs', value: '-15%', trend: 'down', description: 'Optimized cleaning and maintenance schedules' },
        { metric: 'Study Space Efficiency', value: '+35%', trend: 'up', description: 'Improved allocation of study areas' }
      ],
      testimonial: {
        quote: "Understanding how students use our facilities has helped us optimize everything from study spaces to dining areas.",
        author: "Professor James Wilson",
        role: "Director of Campus Operations"
      },
      implementation: "3 weeks",
      roi: "ROI achieved within 5 months",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500"
    },
    {
      id: 'warehouse',
      company: 'Global Logistics Hub',
      industry: 'Warehousing',
      icon: <Warehouse className="h-6 w-6" />,
      location: 'Distribution center & loading docks',
      challenge: 'Workforce safety monitoring and operational efficiency optimization',
      solution: 'APC Flex for workforce analytics and safety compliance tracking',
      results: [
        { metric: 'Safety Incidents', value: '-65%', trend: 'down', description: 'Proactive identification of overcrowded areas' },
        { metric: 'Operational Efficiency', value: '+38%', trend: 'up', description: 'Optimized workforce allocation and scheduling' },
        { metric: 'Compliance Score', value: '+95%', trend: 'up', description: 'Improved OSHA compliance and safety ratings' },
        { metric: 'Cost Savings', value: '$450K', trend: 'up', description: 'Annual savings from efficiency improvements' }
      ],
      testimonial: {
        quote: "Worker safety is our top priority. APC solutions help us maintain optimal density levels and prevent accidents.",
        author: "Robert Chen",
        role: "Operations Director"
      },
      implementation: "6 weeks",
      roi: "ROI achieved within 4 months",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500"
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'retail', name: 'Retail', icon: <ShoppingCart className="h-4 w-4" /> },
    { id: 'transportation', name: 'Transportation', icon: <Plane className="h-4 w-4" /> },
    { id: 'office buildings', name: 'Office Buildings', icon: <Building className="h-4 w-4" /> },
    { id: 'events', name: 'Events', icon: <Music className="h-4 w-4" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Hospital className="h-4 w-4" /> },
    { id: 'education', name: 'Education', icon: <University className="h-4 w-4" /> },
    { id: 'warehousing', name: 'Warehousing', icon: <Warehouse className="h-4 w-4" /> }
  ];
  
  const filteredCaseStudies = activeTab === 'all' 
    ? allCaseStudies 
    : allCaseStudies.filter(study => study.industry.toLowerCase() === activeTab.toLowerCase());

  const MetricCard = ({ metric, value, trend, description }: any) => (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="flex items-center justify-center mb-2">
          {trend === 'up' ? (
            <TrendingUp className="h-5 w-5 text-accent mr-2" />
          ) : (
            <TrendingDown className="h-5 w-5 text-accent mr-2" />
          )}
          <span className={`text-2xl font-bold ${trend === 'up' ? 'text-accent' : 'text-primary'}`}>
            {value}
          </span>
        </div>
        <div className="font-medium text-sm text-gray-900 mb-1">{metric}</div>
        <div className="text-xs text-gray-600">{description}</div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-20">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Real Customer Success Stories
            </Badge>
            <h1 className="mb-6 text-gray-900">Customer Success Stories & Case Studies</h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover how organizations across industries have transformed their operations with APC solutions. 
              Real results, measurable ROI, and proven success across 7 major industries.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/70 backdrop-blur rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="bg-white/70 backdrop-blur rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-accent">350%</div>
                <div className="text-sm text-gray-600">Avg ROI</div>
              </div>
              <div className="bg-white/70 backdrop-blur rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="bg-white/70 backdrop-blur rounded-lg p-4 border border-gray-200">
                <div className="text-2xl font-bold text-blue-600">7</div>
                <div className="text-sm text-gray-600">Industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter & Case Studies */}
      <section className="py-16 lg:py-20">
        <div className="container-responsive">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Industry Filter Tabs */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Filter className="h-5 w-5 text-primary" />
                <h2 className="text-gray-900">Filter by Industry</h2>
              </div>
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 w-full max-w-6xl mx-auto gap-2 h-auto p-2">
                {industries.map((industry) => (
                  <TabsTrigger 
                    key={industry.id} 
                    value={industry.id} 
                    className="flex items-center gap-2 p-3 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {industry.icon}
                    <span className="hidden sm:inline">{industry.name}</span>
                    <span className="sm:hidden">{industry.name.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* All Industries */}
            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id} className="space-y-16">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {industry.id === 'all' ? 'All Success Stories' : `${industry.name} Success Stories`}
                  </h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    {industry.id === 'all' 
                      ? 'Explore success stories across all industries to see how APC solutions deliver measurable results.'
                      : `See how ${industry.name.toLowerCase()} organizations have achieved remarkable results with APC solutions.`
                    }
                  </p>
                </div>

                {/* Case Studies Grid */}
                <div className="space-y-20">
                  {filteredCaseStudies.map((study, index) => (
                    <div key={study.id} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Study Header */}
                      <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-primary">
                            {study.icon}
                          </div>
                          <div className="text-left">
                            <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                            <div className="flex items-center gap-3 mt-2">
                              <Badge variant="outline" className="border-primary text-primary">{study.industry}</Badge>
                              <span className="text-gray-600">{study.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="grid lg:grid-cols-2 gap-8 mb-12">
                        <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <CardTitle className="text-lg text-red-600 flex items-center gap-2">
                              <Target className="h-5 w-5" />
                              Challenge
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <CardTitle className="text-lg text-accent flex items-center gap-2">
                              <Lightbulb className="h-5 w-5" />
                              Solution
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Results */}
                      <div className="mb-12">
                        <h4 className="text-center text-2xl font-bold text-gray-900 mb-8">Measurable Results</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {study.results.map((result, idx) => (
                            <MetricCard key={idx} {...result} />
                          ))}
                        </div>
                      </div>

                      {/* Hero Image */}
                      <div className="mb-12">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                          <ImageWithFallback
                            src={study.image}
                            alt={study.company}
                            className="w-full h-64 lg:h-80 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                          <div className="absolute bottom-6 left-6 text-white">
                            <Badge className="bg-primary text-white mb-2">{study.industry}</Badge>
                            <div className="text-xl font-bold">{study.company}</div>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/10 mb-12">
                        <CardContent className="p-8">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-lg">
                                {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className="flex-1">
                              <blockquote className="text-lg text-gray-700 mb-4 italic leading-relaxed">
                                "{study.testimonial.quote}"
                              </blockquote>
                              <div>
                                <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                                <div className="text-gray-600">{study.testimonial.role}</div>
                                <div className="text-sm text-gray-500">{study.company}</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Implementation Details */}
                      <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Clock className="h-5 w-5 text-primary" />
                              Implementation Timeline
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 font-medium">{study.implementation}</p>
                            <p className="text-sm text-gray-600 mt-2">From planning to full deployment</p>
                          </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                              <TrendingUp className="h-5 w-5 text-accent" />
                              Return on Investment
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-700 font-medium">{study.roi}</p>
                            <p className="text-sm text-gray-600 mt-2">Measurable business impact</p>
                          </CardContent>
                        </Card>
                      </div>

                      {index < filteredCaseStudies.length - 1 && (
                        <div className="border-b border-gray-200 mt-16"></div>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-responsive text-center">
          <h2 className="mb-6 text-white">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join 500+ organizations worldwide that have transformed their operations with APC solutions. 
            Start your journey to measurable ROI today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              onClick={() => onPageChange('demo')}
              className="bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Start Free 15-Day POC
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onPageChange('contact')}
              className="border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Users className="mr-2 h-5 w-5" />
              Talk to Expert
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              onClick={() => onPageChange('products')}
              className="text-white hover:bg-white/10"
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              Explore Products
            </Button>
          </div>

          {/* Success Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>500+ Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <span>350% Average ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}