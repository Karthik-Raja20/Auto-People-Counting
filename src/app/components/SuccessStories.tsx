import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Award, 
  TrendingUp,
  Users,
  BarChart3,
  Building2,
  ShoppingCart,
  Plane,
  Heart,
  Star,
  Eye,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle,
  Share2,
  Download,
  Play,
  ExternalLink,
  Globe,
  Target,
  Lightbulb,
  MessageCircle
} from 'lucide-react';

interface SuccessStoriesProps {
  onPageChange: (page: string) => void;
}

interface SuccessStory {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  tags: string[];
  featured: boolean;
  publishDate: string;
  readTime: string;
  roi: string;
}

const successStoriesData: SuccessStory[] = [
  {
    id: 'retail-megamart',
    title: 'MegaMart Retail Achieves 35% Cost Reduction Across 150+ Stores',
    company: 'MegaMart Retail Chain',
    industry: 'Retail',
    challenge: 'Inefficient staffing allocation, high energy costs from over-cooling/heating empty areas, poor customer flow analysis leading to long queues and lost sales',
    solution: 'Deployed APC Core solution with real-time occupancy monitoring, predictive analytics for staffing optimization, and automated HVAC control based on people density',
    results: [
      {
        metric: 'Cost Reduction',
        value: '35%',
        description: 'Annual operational cost savings through optimized staffing and energy efficiency'
      },
      {
        metric: 'Energy Savings',
        value: '28%',
        description: 'Reduced HVAC and lighting costs through occupancy-based automation'
      },
      {
        metric: 'Customer Satisfaction',
        value: '42%',
        description: 'Improvement in satisfaction scores due to reduced wait times'
      },
      {
        metric: 'Revenue Increase',
        value: '18%',
        description: 'Revenue growth from better customer experience and optimized operations'
      }
    ],
    testimonial: {
      quote: "APC Solutions transformed our operations completely. The real-time insights helped us optimize staffing during peak hours and reduce energy costs significantly. ROI was achieved in just 8 months, and we're now expanding to all locations.",
      author: "Sarah Johnson",
      position: "Operations Director"
    },
    tags: ['Retail', 'Cost Reduction', 'Energy Efficiency', 'Multi-location'],
    featured: true,
    publishDate: '2024-01-15',
    readTime: '6 min',
    roi: '380%'
  },
  {
    id: 'corporate-techcorp',
    title: 'TechCorp Global Optimizes 25-Floor Campus with Smart Occupancy Analytics',
    company: 'TechCorp Global',
    industry: 'Technology',
    challenge: 'Underutilized office space post-pandemic, inefficient meeting room usage, difficulty managing hybrid work policies, high real estate costs',
    solution: 'Implemented APC Flex across all floors with workspace analytics, meeting room optimization, and hybrid work insights dashboard',
    results: [
      {
        metric: 'Space Efficiency',
        value: '45%',
        description: 'Improvement in overall space utilization through data-driven decisions'
      },
      {
        metric: 'Meeting Room Usage',
        value: '60%',
        description: 'Increase in efficient meeting room utilization'
      },
      {
        metric: 'Real Estate Savings',
        value: '₹2.5M',
        description: 'Annual savings from optimized space planning and downsizing'
      },
      {
        metric: 'Employee Satisfaction',
        value: '38%',
        description: 'Better workspace experience through optimal density management'
      }
    ],
    testimonial: {
      quote: "The insights from APC helped us completely rethink our office design and hybrid work policies. We've created a more efficient and employee-friendly workspace while saving millions on real estate costs.",
      author: "Michael Chen",
      position: "Facilities Manager"
    },
    tags: ['Corporate', 'Space Optimization', 'Hybrid Work', 'Real Estate'],
    featured: true,
    publishDate: '2024-02-20',
    readTime: '8 min',
    roi: '520%'
  },
  {
    id: 'airport-metro',
    title: 'Metro International Airport Enhances Passenger Experience with Smart Crowd Management',
    company: 'Metro International Airport',
    industry: 'Transportation',
    challenge: 'Crowd congestion during peak hours, security checkpoint bottlenecks, passenger complaints about wait times, safety concerns during high-traffic periods',
    solution: 'Deployed APC Core across all terminals with predictive crowd analytics, automated alerts for congestion, and real-time passenger flow optimization',
    results: [
      {
        metric: 'Wait Time Reduction',
        value: '40%',
        description: 'Average reduction in security checkpoint and boarding queue times'
      },
      {
        metric: 'Security Efficiency',
        value: '32%',
        description: 'Faster passenger processing through predictive staff allocation'
      },
      {
        metric: 'Passenger Satisfaction',
        value: '55%',
        description: 'Improvement in passenger experience ratings and feedback scores'
      },
      {
        metric: 'Operational Efficiency',
        value: '30%',
        description: 'Better resource allocation and reduced overtime costs'
      }
    ],
    testimonial: {
      quote: "APC's real-time crowd analytics helped us proactively manage passenger flow and significantly improve the travel experience during our busiest periods. The system pays for itself through operational efficiency alone.",
      author: "David Rodriguez",
      position: "Terminal Operations Manager"
    },
    tags: ['Transportation', 'Crowd Management', 'Security', 'Passenger Experience'],
    featured: false,
    publishDate: '2024-03-10',
    readTime: '7 min',
    roi: '290%'
  },
  {
    id: 'healthcare-wellness',
    title: 'WellnessCare Hospital Network Improves Patient Flow Across 12 Facilities',
    company: 'WellnessCare Hospital Network',
    industry: 'Healthcare',
    challenge: 'Patient overcrowding in waiting areas, inefficient staff deployment, compliance with capacity restrictions, patient safety concerns',
    solution: 'APC Flex deployment with patient flow analytics, automated capacity monitoring, and staff optimization algorithms',
    results: [
      {
        metric: 'Wait Times',
        value: '28%',
        description: 'Reduction in average patient waiting times'
      },
      {
        metric: 'Capacity Utilization',
        value: '35%',
        description: 'Improvement in facility capacity optimization'
      },
      {
        metric: 'Staff Efficiency',
        value: '25%',
        description: 'Better nurse and doctor allocation based on real-time data'
      },
      {
        metric: 'Patient Satisfaction',
        value: '41%',
        description: 'Higher patient satisfaction scores and reduced complaints'
      }
    ],
    testimonial: {
      quote: "The people counting system helped us manage patient flow more effectively, especially during COVID restrictions. We can now proactively manage capacity and ensure optimal care delivery.",
      author: "Dr. Emily Watson",
      position: "Chief Operations Officer"
    },
    tags: ['Healthcare', 'Patient Flow', 'Compliance', 'Staff Optimization'],
    featured: false,
    publishDate: '2024-01-28',
    readTime: '5 min',
    roi: '310%'
  },
  {
    id: 'education-university',
    title: 'State University Campus Achieves 50% Better Space Utilization',
    company: 'State University Campus',
    industry: 'Education',
    challenge: 'Overcrowded libraries and study halls, underutilized classrooms, difficulty in planning facility expansions, student complaints about space availability',
    solution: 'APC Flex implementation across 45 buildings with real-time occupancy displays, space booking optimization, and capacity management systems',
    results: [
      {
        metric: 'Space Utilization',
        value: '50%',
        description: 'Improvement in overall campus space utilization efficiency'
      },
      {
        metric: 'Student Satisfaction',
        value: '35%',
        description: 'Higher satisfaction scores for campus facilities and study spaces'
      },
      {
        metric: 'Operational Savings',
        value: '₹1.2M',
        description: 'Annual savings from optimized facility management and staffing'
      },
      {
        metric: 'Planning Accuracy',
        value: '65%',
        description: 'Better accuracy in facility planning and expansion decisions'
      }
    ],
    testimonial: {
      quote: "APC's space analytics revolutionized how we manage our campus facilities. Students can now find available study spaces easily, and we make data-driven decisions for new facilities.",
      author: "Dr. Jennifer Park",
      position: "Campus Facilities Director"
    },
    tags: ['Education', 'Campus Management', 'Space Optimization', 'Student Experience'],
    featured: true,
    publishDate: '2024-02-05',
    readTime: '6 min',
    roi: '340%'
  },
  {
    id: 'government-civic',
    title: 'Metropolitan City Hall Improves Citizen Services with Smart Queue Management',
    company: 'Metropolitan City Government',
    industry: 'Government',
    challenge: 'Long citizen wait times, inefficient service counter allocation, poor visitor experience, difficulty managing peak service hours',
    solution: 'APC Link solution integrated with existing infrastructure, providing real-time queue analytics, service optimization, and citizen flow management',
    results: [
      {
        metric: 'Wait Time Reduction',
        value: '45%',
        description: 'Average reduction in citizen waiting times for government services'
      },
      {
        metric: 'Service Efficiency',
        value: '38%',
        description: 'Improvement in service counter utilization and staff allocation'
      },
      {
        metric: 'Citizen Satisfaction',
        value: '52%',
        description: 'Higher satisfaction ratings for government service experience'
      },
      {
        metric: 'Cost Savings',
        value: '25%',
        description: 'Reduction in operational costs through optimized staffing'
      }
    ],
    testimonial: {
      quote: "The people counting system helped us serve citizens more efficiently and improve their experience with government services. We can now proactively manage service counters during peak hours.",
      author: "Robert Martinez",
      position: "City Operations Manager"
    },
    tags: ['Government', 'Public Service', 'Queue Management', 'Citizen Experience'],
    featured: false,
    publishDate: '2024-03-01',
    readTime: '5 min',
    roi: '280%'
  }
];

export function SuccessStories({ onPageChange }: SuccessStoriesProps) {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const getIndustryIcon = (industry: string) => {
    switch (industry.toLowerCase()) {
      case 'retail': return <ShoppingCart className="h-5 w-5" />;
      case 'technology': return <Globe className="h-5 w-5" />;
      case 'transportation': return <Plane className="h-5 w-5" />;
      case 'healthcare': return <Heart className="h-5 w-5" />;
      case 'education': return <Building2 className="h-5 w-5" />;
      case 'government': return <Building2 className="h-5 w-5" />;
      default: return <Building2 className="h-5 w-5" />;
    }
  };

  const industries = ['all', ...Array.from(new Set(successStoriesData.map(story => story.industry.toLowerCase())))];

  const filteredStories = selectedIndustry === 'all' 
    ? successStoriesData 
    : successStoriesData.filter(story => story.industry.toLowerCase() === selectedIndustry);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12 lg:py-16">
        <div className="container-responsive">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Real Customer Success Stories
            </Badge>
            <h1 className="mb-4">Customer Success Stories</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Discover how leading organizations achieved remarkable results with APC Solutions. Real stories, proven ROI, measurable impact.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-green-100 text-sm">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">₹50M+</div>
                <div className="text-green-100 text-sm">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-green-100 text-sm">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">450%</div>
                <div className="text-green-100 text-sm">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <div className="container-responsive py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {industries.map((industry) => (
            <Button
              key={industry}
              variant={selectedIndustry === industry ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedIndustry(industry)}
              className="capitalize"
            >
              {industry === 'all' ? 'All Industries' : industry}
            </Button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container-responsive pb-12">
        {/* Featured Success Stories */}
        <div className="space-y-8 mb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Featured Success Stories</h2>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              <Star className="h-3 w-3 mr-1" />
              Verified Results
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredStories.filter(story => story.featured).map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-green-500/50">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        {getIndustryIcon(story.industry)}
                        <Badge variant="outline" className="text-xs">
                          {story.industry}
                        </Badge>
                        <Badge className="bg-green-500 text-white text-xs">
                          {story.roi} ROI
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight mb-2">
                        {story.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mb-3">
                        {story.company}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-3">
                    {story.results.slice(0, 4).map((result, index) => (
                      <div key={index} className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                        <div className="font-bold text-lg text-green-600">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge Preview */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Challenge</h4>
                    <p className="text-sm text-gray-700 line-clamp-2">
                      {story.challenge}
                    </p>
                  </div>

                  {/* Testimonial Preview */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 italic mb-2 line-clamp-2">
                      "{story.testimonial.quote}"
                    </p>
                    <div className="text-xs text-gray-500">
                      — {story.testimonial.author}, {story.testimonial.position}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      onClick={() => setSelectedStory(story)}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Read Full Story
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 pt-2 border-t">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(story.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {story.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Success Stories */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">All Success Stories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {getIndustryIcon(story.industry)}
                    <Badge variant="outline" className="text-xs">
                      {story.industry}
                    </Badge>
                    {story.featured && (
                      <Badge className="bg-yellow-500 text-white text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-base leading-tight">
                    {story.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    {story.company}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {story.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="text-center p-2 bg-green-50 rounded">
                        <div className="font-semibold text-green-600">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => setSelectedStory(story)}
                    variant="outline" 
                    className="w-full"
                  >
                    Read Story
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-8">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Your Success Story?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join 150+ organizations that have transformed their operations with APC Solutions. 
                Start your journey to measurable results today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={() => onPageChange('demo')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Start Free Demo
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => onPageChange('contact')}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Discuss Your Needs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-4xl max-h-[90vh] overflow-auto">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl mb-2">{selectedStory.title}</CardTitle>
                  <p className="text-gray-600">{selectedStory.company} • {selectedStory.industry}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedStory(null)}>
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Full story content would go here */}
              <p className="text-gray-700">{selectedStory.challenge}</p>
              <p className="text-gray-700">{selectedStory.solution}</p>
              
              {/* Results Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedStory.results.map((result, index) => (
                  <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{result.value}</div>
                    <div className="text-sm font-semibold">{result.metric}</div>
                    <div className="text-xs text-gray-600 mt-1">{result.description}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">"{selectedStory.testimonial.quote}"</p>
                <div className="text-sm text-gray-600">
                  — {selectedStory.testimonial.author}, {selectedStory.testimonial.position}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}