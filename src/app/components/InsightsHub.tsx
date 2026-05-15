import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Award, 
  BookOpen, 
  TrendingUp,
  Users,
  BarChart3,
  Building2,
  ShoppingCart,
  Plane,
  Heart,
  Music,
  Star,
  Eye,
  Calendar,
  Clock,
  ArrowRight,
  Target,
  CheckCircle,
  Download,
  Play,
  ExternalLink,
  Share2,
  Bookmark,
  MessageCircle,
  Lightbulb,
  FileText,
  Video,
  Headphones,
  PieChart,
  Globe
} from 'lucide-react';

interface InsightsHubProps {
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

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  views: number;
  imageUrl?: string;
}

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'whitepaper' | 'video' | 'webinar' | 'guide' | 'infographic';
  category: string;
  downloadUrl?: string;
  videoUrl?: string;
  duration?: string;
  publishDate: string;
  views: number;
  featured: boolean;
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
  }
];

const blogPostsData: BlogPost[] = [
  {
    id: 'future-retail-analytics',
    title: 'The Future of Retail Analytics: Beyond Traditional Footfall Metrics',
    excerpt: 'Explore how AI-powered people counting is revolutionizing retail decision-making, moving beyond simple foot traffic to comprehensive customer journey analytics and predictive insights.',
    author: 'Dr. Sarah Mitchell',
    publishDate: '2024-03-15',
    readTime: '12 min',
    category: 'Industry Trends',
    tags: ['Retail Analytics', 'AI', 'Customer Journey', 'Predictive Analytics'],
    featured: true,
    views: 3247
  },
  {
    id: 'workplace-evolution-2024',
    title: 'Workplace Evolution 2024: How People Counting Shapes the Future Office',
    excerpt: 'Understanding the role of occupancy analytics in creating flexible, efficient, and employee-centric workspaces in the post-pandemic era of hybrid work.',
    author: 'Michael Thompson',
    publishDate: '2024-02-28',
    readTime: '9 min',
    category: 'Workplace Innovation',
    tags: ['Workplace Design', 'Hybrid Work', 'Office Optimization', 'Employee Experience'],
    featured: true,
    views: 2891
  },
  {
    id: 'privacy-compliance-guide',
    title: 'Privacy-First People Counting: GDPR Compliance in 2024',
    excerpt: 'A comprehensive guide to implementing people counting solutions while maintaining strict privacy compliance and building customer trust.',
    author: 'Jennifer Lee',
    publishDate: '2024-03-05',
    readTime: '15 min',
    category: 'Privacy & Compliance',
    tags: ['GDPR', 'Privacy', 'Compliance', 'Data Protection'],
    featured: false,
    views: 2156
  },
  {
    id: 'smart-buildings-iot',
    title: 'Smart Buildings & IoT Integration: The Role of People Analytics',
    excerpt: 'How people counting integrates with IoT ecosystems to create intelligent buildings that adapt to occupancy patterns and optimize resource usage.',
    author: 'Robert Kim',
    publishDate: '2024-02-18',
    readTime: '11 min',
    category: 'Smart Buildings',
    tags: ['IoT', 'Smart Buildings', 'Energy Efficiency', 'Automation'],
    featured: false,
    views: 1876
  },
  {
    id: 'roi-calculation-guide',
    title: 'Calculating ROI for People Counting Solutions: A Practical Framework',
    excerpt: 'Step-by-step methodology for calculating and presenting the business case for people counting investments, with real-world examples and templates.',
    author: 'Amanda Chen',
    publishDate: '2024-01-22',
    readTime: '8 min',
    category: 'Business Strategy',
    tags: ['ROI', 'Business Case', 'Investment', 'Financial Planning'],
    featured: true,
    views: 4102
  }
];

const resourcesData: Resource[] = [
  {
    id: 'roi-whitepaper-2024',
    title: 'The Complete ROI Guide to People Counting Solutions',
    description: 'Comprehensive 24-page analysis of ROI metrics, implementation strategies, and real-world case studies showing 300-500% returns on people counting investments.',
    type: 'whitepaper',
    category: 'Business Strategy',
    downloadUrl: '/downloads/roi-guide-people-counting-2024.pdf',
    publishDate: '2024-01-10',
    views: 2847,
    featured: true
  },
  {
    id: 'retail-optimization-video',
    title: 'Retail Space Optimization Masterclass',
    description: 'Watch how leading retailers use people counting data to optimize store layouts, improve customer experience, and increase revenue per square foot.',
    type: 'video',
    category: 'Industry Solutions',
    videoUrl: 'https://vimeo.com/example-retail-optimization',
    duration: '18:32',
    publishDate: '2024-02-05',
    views: 1923,
    featured: true
  },
  {
    id: 'privacy-implementation-guide',
    title: 'Privacy-Compliant Implementation Guide',
    description: 'Essential guide covering GDPR requirements, data protection strategies, and compliance best practices for people counting deployments.',
    type: 'guide',
    category: 'Compliance',
    downloadUrl: '/downloads/privacy-compliance-guide.pdf',
    publishDate: '2024-01-25',
    views: 1456,
    featured: false
  }
];

export function InsightsHub({ onPageChange }: InsightsHubProps) {
  const [activeTab, setActiveTab] = useState('insights-blog');
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getIndustryIcon = (industry: string) => {
    switch (industry.toLowerCase()) {
      case 'retail': return <ShoppingCart className="h-5 w-5" />;
      case 'technology': return <Globe className="h-5 w-5" />;
      case 'transportation': return <Plane className="h-5 w-5" />;
      case 'healthcare': return <Heart className="h-5 w-5" />;
      default: return <Building2 className="h-5 w-5" />;
    }
  };

  const getResourceIcon = (type: Resource['type']) => {
    switch (type) {
      case 'whitepaper': return <FileText className="h-4 w-4" />;
      case 'video': return <Video className="h-4 w-4" />;
      case 'webinar': return <Headphones className="h-4 w-4" />;
      case 'guide': return <BookOpen className="h-4 w-4" />;
      case 'infographic': return <PieChart className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-12 lg:py-16">
        <div className="container-responsive">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 px-4 py-2">
              <Lightbulb className="h-4 w-4 mr-2" />
              Industry Insights & Expert Analysis
            </Badge>
            <h1 className="mb-4">Industry Insights & Expert Analysis</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert insights, industry trends, whitepapers, and resources to help you maximize the value of people counting analytics and stay ahead of the curve.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-blue-100 text-sm">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-blue-100 text-sm">Whitepapers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-blue-100 text-sm">Video Resources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100K+</div>
                <div className="text-blue-100 text-sm">Monthly Readers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-responsive py-8 lg:py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          {/* Navigation Tabs */}
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-xl grid-cols-3 bg-white shadow-lg">
              <TabsTrigger value="insights-blog" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Expert Insights & Blog
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Resources & Whitepapers
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                Video Library
              </TabsTrigger>
            </TabsList>
          </div>



          {/* Industry Insights & Blog Tab */}
          <TabsContent value="insights-blog" className="space-y-8">
            {/* Featured Blog Posts */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Latest Industry Insights</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {blogPostsData.filter(post => post.featured).map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <Badge className="bg-blue-500 text-white text-xs">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        {post.title}
                      </CardTitle>
                      <p className="text-gray-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <span>By {post.author}</span>
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {post.views}
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Blog Posts */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">All Articles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPostsData.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        {post.featured && (
                          <Badge className="bg-blue-500 text-white text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-base leading-tight">
                        {post.title}
                      </CardTitle>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>By {post.author}</span>
                        <div className="flex items-center gap-2">
                          <span>{post.readTime}</span>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {post.views}
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full" size="sm">
                        <BookOpen className="h-3 w-3 mr-2" />
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Expert Insights Section */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Get Expert Insights Delivered
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Subscribe to our newsletter for the latest industry insights, case studies, and expert analysis on people counting technology trends.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <Button className="bg-primary hover:bg-primary/90">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources & Whitepapers Tab */}
          <TabsContent value="resources" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Resources & Whitepapers</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resourcesData.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center text-primary">
                          {getResourceIcon(resource.type)}
                        </div>
                        <Badge variant="outline" className="text-xs capitalize">
                          {resource.type}
                        </Badge>
                        {resource.featured && (
                          <Badge className="bg-blue-500 text-white text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-base">{resource.title}</CardTitle>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {resource.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>{new Date(resource.publishDate).toLocaleDateString()}</span>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {resource.views}
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full" size="sm">
                        <Download className="h-3 w-3 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Video Library Tab */}
          <TabsContent value="videos" className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Video Library</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resourcesData.filter(resource => resource.type === 'video' || resource.type === 'webinar').map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-3">
                        <Play className="h-12 w-12 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs capitalize">
                          {resource.type}
                        </Badge>
                        {resource.duration && (
                          <Badge variant="outline" className="text-xs">
                            {resource.duration}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-base">{resource.title}</CardTitle>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {resource.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>{new Date(resource.publishDate).toLocaleDateString()}</span>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {resource.views}
                        </div>
                      </div>
                      
                      <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                        <Play className="h-3 w-3 mr-2" />
                        Watch Video
                      </Button>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Add more video resources */}
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Play className="h-12 w-12 text-green-600" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">Webinar</Badge>
                      <Badge variant="outline" className="text-xs">45:20</Badge>
                    </div>
                    <CardTitle className="text-base">Smart Buildings ROI Webinar</CardTitle>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      Deep dive into calculating ROI for smart building implementations with people analytics.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>Mar 01, 2024</span>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        1,543
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                      <Play className="h-3 w-3 mr-2" />
                      Watch Webinar
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of organizations already benefiting from APC Solutions. Start your free 15-day POC and see the results for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => onPageChange('demo')}
                className="bg-primary hover:bg-primary/90"
              >
                <Target className="h-4 w-4 mr-2" />
                Start Free POC
              </Button>
              <Button 
                onClick={() => onPageChange('contact')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Speak with Expert
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Success Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {getIndustryIcon(selectedStory.industry)}
                    <Badge variant="outline">{selectedStory.industry}</Badge>
                    <Badge className="bg-green-500 text-white">{selectedStory.roi} ROI</Badge>
                  </div>
                  <CardTitle className="text-xl">{selectedStory.title}</CardTitle>
                  <p className="text-gray-600">{selectedStory.company}</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedStory(null)}
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-700">{selectedStory.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-700">{selectedStory.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Results</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {selectedStory.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                      <div className="font-medium text-gray-900 mb-1">{result.metric}</div>
                      <div className="text-sm text-gray-600">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Client Testimonial</h4>
                <blockquote className="text-gray-700 italic mb-4 text-lg">
                  "{selectedStory.testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{selectedStory.testimonial.author}</div>
                    <div className="text-sm text-gray-600">{selectedStory.testimonial.position}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button 
                  onClick={() => onPageChange('demo')}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  <Target className="h-4 w-4 mr-2" />
                  Start Your Success Story
                </Button>
                <Button 
                  onClick={() => onPageChange('contact')}
                  variant="outline"
                  className="flex-1"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Discuss Your Needs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}