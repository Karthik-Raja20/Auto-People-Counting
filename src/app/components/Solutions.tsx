import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  CheckCircle, 
  Users, 
  BarChart3, 
  Wifi,
  Music,
  Building,
  ShoppingCart,
  Plane,
  Warehouse,
  Train,
  Landmark,
  Hospital,
  Bus,
  University,
  ArrowRight,
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  Target,
  Zap,
  Shield,
  Award,
  PlayCircle,
  Eye,
  Layers,
  Rocket
} from 'lucide-react';

interface SolutionsProps {
  onPageChange: (page: string) => void;
}

export function Solutions({ onPageChange }: SolutionsProps) {
  const [activeTab, setActiveTab] = useState('products');

  const solutions = [
    {
      id: 'core',
      name: 'APC Core',
      subtitle: 'Complete End-to-End Package',
      price: '$1,299/mo',
      description: 'Turnkey solution with AI Camera + APC EdgeBox™ + Smart Analytics Platform',
      features: ['Turnkey installation', 'AI-powered analytics', '24/7 support included', 'Up to 99% accuracy', 'GDPR compliant'],
      badge: 'Most Popular',
      badgeColor: 'bg-primary',
      icon: <Users className="h-6 w-6" />,
      cta: 'Start Free POC'
    },
    {
      id: 'flex',
      name: 'APC Flex',
      subtitle: 'Cost-Efficient Intelligence',
      price: '$799/mo',
      description: 'Advanced analytics with budget-friendly cameras',
      features: ['Economical solution', 'Multi-location scalable', 'Advanced intelligence', 'Retrofit compatible', 'Cloud analytics'],
      badge: 'Cost Efficient',
      badgeColor: 'bg-accent',
      icon: <BarChart3 className="h-6 w-6" />,
      cta: 'Start Free POC'
    },
    {
      id: 'link',
      name: 'APC Link',
      subtitle: 'Leverage Existing Infrastructure',
      price: '$599/mo',
      description: 'Upgrade existing cameras with AI analytics',
      features: ['Maximum ROI', 'Retrofit solution', 'Leverage current assets', 'Easy integration', 'Quick deployment'],
      badge: 'Use Existing',
      badgeColor: 'bg-blue-500',
      icon: <Wifi className="h-6 w-6" />,
      cta: 'Start Free POC'
    },
    {
      id: 'eventSense',
      name: 'APC EventSense',
      subtitle: 'On-Demand Rental',
      price: '$199/day',
      description: 'Portable solution for temporary events',
      features: ['Pay per duration', 'Rapid deployment', 'Crowd safety monitoring', 'Event optimization', 'Real-time alerts'],
      badge: 'Event Rental',
      badgeColor: 'bg-purple-500',
      icon: <Music className="h-6 w-6" />,
      cta: 'Get Rental Quote'
    }
  ];

  const industries = [
    {
      name: 'Retail & Shopping',
      icon: <ShoppingCart className="h-8 w-8" />,
      description: 'Optimize store layouts, reduce queue times, and increase conversions',
      benefits: ['42% reduction in queue times', '20% increase in conversions', 'Optimized staff scheduling'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Office Buildings',
      icon: <Building className="h-8 w-8" />,
      description: 'Smart workspace optimization and energy efficiency',
      benefits: ['35% energy savings', 'Improved space utilization', 'Health & safety compliance'],
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'Transportation',
      icon: <Plane className="h-8 w-8" />,
      description: 'Airports, train stations, and public transport optimization',
      benefits: ['Reduced congestion', 'Improved passenger flow', 'Enhanced security'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Healthcare',
      icon: <Hospital className="h-8 w-8" />,
      description: 'Patient flow optimization and capacity management',
      benefits: ['Reduced wait times', 'Better resource allocation', 'Improved patient experience'],
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Warehouses',
      icon: <Warehouse className="h-8 w-8" />,
      description: 'Logistics optimization and safety monitoring',
      benefits: ['40% efficiency improvement', 'Safety compliance', 'Optimized workflows'],
      color: 'from-yellow-500 to-red-500'
    },
    {
      name: 'Government',
      icon: <Landmark className="h-8 w-8" />,
      description: 'Public spaces and government facilities',
      benefits: ['Enhanced security', 'Crowd management', 'Emergency response'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Education',
      icon: <University className="h-8 w-8" />,
      description: 'Campus safety and space utilization',
      benefits: ['Student safety', 'Space optimization', 'Event management'],
      color: 'from-teal-500 to-green-500'
    },
    {
      name: 'Public Transport',
      icon: <Bus className="h-8 w-8" />,
      description: 'Bus stations, metro systems, and transit hubs',
      benefits: ['Improved service', 'Capacity planning', 'Passenger safety'],
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const caseStudies = [
    {
      title: 'MegaMall Supermarket',
      industry: 'Retail',
      challenge: 'Long checkout queues and poor customer experience during peak hours',
      solution: 'APC Core with real-time queue monitoring and staff optimization',
      results: [
        { metric: 'Queue Time Reduction', value: '42%', icon: <Clock className="h-5 w-5" /> },
        { metric: 'Customer Satisfaction', value: '+35%', icon: <Star className="h-5 w-5" /> },
        { metric: 'Revenue Increase', value: '$2.3M', icon: <DollarSign className="h-5 w-5" /> },
        { metric: 'Conversion Rate', value: '+20%', icon: <TrendingUp className="h-5 w-5" /> }
      ],
      quote: "APC Core transformed our operations. The real-time insights allowed us to optimize staffing and reduce queue times by 42%.",
      author: "Sarah Chen",
      position: "Operations Director",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500"
    },
    {
      title: 'TechCorp Campus',
      industry: 'Office Buildings',
      challenge: 'High energy costs and underutilized meeting rooms',
      solution: 'APC Flex for occupancy-based HVAC and space optimization',
      results: [
        { metric: 'Energy Savings', value: '35%', icon: <Zap className="h-5 w-5" /> },
        { metric: 'Space Utilization', value: '+28%', icon: <Building className="h-5 w-5" /> },
        { metric: 'Annual Savings', value: '$850K', icon: <DollarSign className="h-5 w-5" /> },
        { metric: 'Employee Satisfaction', value: '+25%', icon: <Star className="h-5 w-5" /> }
      ],
      quote: "The 15-day POC convinced us immediately. Setup was seamless and results were instant.",
      author: "Michael Rodriguez",
      position: "Facility Manager",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500"
    },
    {
      title: 'International Airport',
      industry: 'Transportation',
      challenge: 'Passenger congestion and security bottlenecks',
      solution: 'APC Link integrated with existing security infrastructure',
      results: [
        { metric: 'Passenger Flow', value: '+40%', icon: <Users className="h-5 w-5" /> },
        { metric: 'Security Efficiency', value: '+30%', icon: <Shield className="h-5 w-5" /> },
        { metric: 'Wait Time Reduction', value: '45%', icon: <Clock className="h-5 w-5" /> },
        { metric: 'Operational Savings', value: '$1.2M', icon: <DollarSign className="h-5 w-5" /> }
      ],
      quote: "APC Link seamlessly integrated with our existing systems and delivered immediate improvements in passenger flow.",
      author: "David Kumar",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500"
    },
    {
      title: 'Summer Music Festival',
      industry: 'Events',
      challenge: 'Crowd safety and capacity management for 50,000+ attendees',
      solution: 'APC EventSense for real-time crowd monitoring',
      results: [
        { metric: 'Safety Incidents', value: '-90%', icon: <Shield className="h-5 w-5" /> },
        { metric: 'Crowd Flow', value: '+50%', icon: <Users className="h-5 w-5" /> },
        { metric: 'Emergency Response', value: '3x Faster', icon: <Clock className="h-5 w-5" /> },
        { metric: 'Attendee Satisfaction', value: '+40%', icon: <Star className="h-5 w-5" /> }
      ],
      quote: "APC EventSense saved our festival. Real-time crowd monitoring prevented overcrowding incidents.",
      author: "Emma Thompson",
      position: "Event Director",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary to-accent/5 py-12 lg:py-20">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-primary/20">
              <Layers className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold text-sm">Complete Solutions Portfolio</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="block mb-2">APC Solutions:</span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Products, Applications & Success Stories
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Discover our comprehensive people counting solutions, see real-world applications across industries, 
              and learn from customer success stories with proven ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onPageChange('demo')}
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-responsive text-base lg:text-lg font-semibold"
              >
                <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Start Free POC
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => onPageChange('case-studies')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 btn-responsive"
              >
                <Eye className="mr-2 h-5 w-5" />
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12 lg:py-16">
        <div className="container-responsive">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="products" className="text-sm font-medium">Products</TabsTrigger>
              <TabsTrigger value="applications" className="text-sm font-medium">Applications</TabsTrigger>
            </TabsList>

            {/* Products Tab */}
            <TabsContent value="products" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Choose Your Perfect APC Solution
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  From turnkey solutions to cost-effective analytics and rental options, discover the APC EdgeBox™ solution that perfectly matches your specific requirements and budget.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {solutions.map((solution) => (
                  <Card key={solution.id} className="relative border-2 border-gray-200 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl group">
                    {/* Badge */}
                    <div className="absolute -top-3 left-4">
                      <Badge className={`${solution.badgeColor} text-white px-3 py-1 text-xs font-semibold`}>
                        {solution.badge}
                      </Badge>
                    </div>

                    <CardHeader className="pb-4 pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                          {solution.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg text-gray-900">{solution.name}</CardTitle>
                          <p className="text-sm text-gray-500">{solution.subtitle}</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-primary mb-2">{solution.price}</div>
                      <CardDescription className="text-sm leading-relaxed">{solution.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        onClick={() => onPageChange('demo')}
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-2 text-sm group-hover:shadow-lg transition-all duration-300"
                      >
                        {solution.cta}
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Universal Applications Across Industries
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  APC solutions deliver proven results across diverse industries, from retail optimization to smart building management.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((industry, index) => (
                  <Card key={index} className="border-2 border-gray-200 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-3 bg-gradient-to-r ${industry.color} rounded-lg text-white`}>
                          {industry.icon}
                        </div>
                      </div>
                      <CardTitle className="text-lg text-gray-900 mb-2">{industry.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-600 leading-relaxed">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-3 mb-6">
                        {industry.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        onClick={() => onPageChange('demo')}
                        variant="outline"
                        className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        Start Free POC
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Case Studies Tab */}
            <TabsContent value="case-studies" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Customer Success Stories
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Real results from real customers. See how APC solutions delivered measurable ROI across different industries.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="border-2 border-gray-200 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-white">{study.industry}</Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl text-gray-900 mb-2">{study.title}</CardTitle>
                      <div className="space-y-3 text-sm text-gray-600">
                        <div><strong>Challenge:</strong> {study.challenge}</div>
                        <div><strong>Solution:</strong> {study.solution}</div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-center mb-2 text-primary">
                              {result.icon}
                            </div>
                            <div className="text-lg font-bold text-gray-900">{result.value}</div>
                            <div className="text-xs text-gray-600">{result.metric}</div>
                          </div>
                        ))}
                      </div>

                      <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-gray-700">
                        "{study.quote}"
                      </blockquote>
                      
                      <div className="text-sm text-gray-600 mb-6">
                        <div className="font-medium">{study.author}</div>
                        <div>{study.position}</div>
                      </div>

                      <Button 
                        onClick={() => onPageChange('demo')}
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold transition-all duration-300"
                      >
                        Start Your Success Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-responsive">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join 500+ organizations worldwide who trust APC solutions for accurate people counting and space optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onPageChange('demo')}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-responsive text-base lg:text-lg font-semibold"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Start Free 15-Day POC
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => onPageChange('contact')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 btn-responsive"
              >
                Talk to Expert
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>500+ Installations</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-accent" />
                <span>Up to 99% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}