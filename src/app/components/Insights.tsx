import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  TrendingUp, 
  Download, 
  Play, 
  Calendar,
  Clock,
  Users,
  Building2,
  BarChart3,
  FileText,
  Video,
  Headphones,
  Star,
  ArrowRight,
  Search,
  Filter,
  BookOpen,
  Award,
  Target,
  Zap,
  Globe,
  Shield,
  Cpu,
  PieChart,
  Eye,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Bookmark,
  Share2,
  Heart
} from 'lucide-react';

interface InsightsProps {
  onPageChange: (page: string) => void;
}

// ================================
// CONTENT MANAGEMENT SYSTEM
// Easy to edit content structure
// ================================

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
    company: string;
  };
  tags: string[];
  featured: boolean;
  publishDate: string;
  readTime: string;
  imageUrl?: string;
}

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'whitepaper' | 'video' | 'webinar' | 'case-study' | 'guide' | 'infographic';
  category: string;
  downloadUrl?: string;
  videoUrl?: string;
  duration?: string;
  publishDate: string;
  featured: boolean;
  tags: string[];
  views: number;
  likes: number;
}

interface IndustryInsight {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
}

// ================================
// CONTENT DATA
// ================================

const successStories: SuccessStory[] = [
  {
    id: 'retail-chain-success',
    title: 'National Retail Chain Achieves 35% Cost Reduction',
    company: 'MegaMart Retail',
    industry: 'Retail',
    challenge: 'Inefficient staffing, high energy costs, poor customer flow analysis across 150+ stores',
    solution: 'Deployed APC Core solution with real-time occupancy monitoring and predictive analytics',
    results: [
      {
        metric: 'Cost Reduction',
        value: '35%',
        description: 'Annual operational cost savings'
      },
      {
        metric: 'Energy Savings',
        value: '28%',
        description: 'Reduced HVAC and lighting costs'
      },
      {
        metric: 'Customer Satisfaction',
        value: '42%',
        description: 'Improvement in satisfaction scores'
      },
      {
        metric: 'Staff Efficiency',
        value: '25%',
        description: 'Optimization in staff allocation'
      }
    ],
    testimonial: {
      quote: "APC Solutions transformed our operations. The real-time insights helped us optimize staffing and reduce energy costs significantly. ROI was achieved in just 8 months.",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "MegaMart Retail"
    },
    tags: ['Retail', 'Cost Reduction', 'Energy Efficiency', 'ROI'],
    featured: true,
    publishDate: '2024-01-15',
    readTime: '5 min'
  },
  {
    id: 'corporate-office-optimization',
    title: 'Fortune 500 Company Optimizes Office Space Utilization',
    company: 'TechCorp Global',
    industry: 'Technology',
    challenge: 'Underutilized office space, hybrid work challenges, inefficient meeting room usage',
    solution: 'Implemented APC Flex across 25 floors with workspace analytics and automated controls',
    results: [
      {
        metric: 'Space Efficiency',
        value: '45%',
        description: 'Improvement in space utilization'
      },
      {
        metric: 'Meeting Room Usage',
        value: '60%',
        description: 'Increase in efficient usage'
      },
      {
        metric: 'Employee Satisfaction',
        value: '38%',
        description: 'Better workspace experience'
      },
      {
        metric: 'Real Estate Savings',
        value: '₹2.5M',
        description: 'Annual savings from optimized space'
      }
    ],
    testimonial: {
      quote: "The insights from APC helped us rethink our office design and hybrid work policies. We've created a more efficient and employee-friendly workspace.",
      author: "Michael Chen",
      position: "Facilities Manager",
      company: "TechCorp Global"
    },
    tags: ['Corporate', 'Space Optimization', 'Hybrid Work', 'Savings'],
    featured: true,
    publishDate: '2024-02-20',
    readTime: '6 min'
  },
  {
    id: 'airport-crowd-management',
    title: 'International Airport Enhances Passenger Experience',
    company: 'Metro International Airport',
    industry: 'Transportation',
    challenge: 'Crowd congestion, security bottlenecks, poor passenger flow during peak hours',
    solution: 'APC Core deployment across terminals with predictive crowd analytics and automated alerts',
    results: [
      {
        metric: 'Wait Time Reduction',
        value: '40%',
        description: 'Average reduction in queue times'
      },
      {
        metric: 'Security Efficiency',
        value: '32%',
        description: 'Faster processing at checkpoints'
      },
      {
        metric: 'Passenger Satisfaction',
        value: '55%',
        description: 'Improvement in experience ratings'
      },
      {
        metric: 'Operational Efficiency',
        value: '30%',
        description: 'Better resource allocation'
      }
    ],
    testimonial: {
      quote: "APC's real-time crowd analytics helped us proactively manage passenger flow and significantly improve the travel experience during our busiest periods.",
      author: "David Rodriguez",
      position: "Terminal Operations Manager",
      company: "Metro International Airport"
    },
    tags: ['Transportation', 'Crowd Management', 'Security', 'Experience'],
    featured: false,
    publishDate: '2024-03-10',
    readTime: '7 min'
  }
];

const resources: Resource[] = [
  {
    id: 'roi-whitepaper',
    title: 'The Complete ROI Guide to People Counting Solutions',
    description: 'Comprehensive analysis of ROI metrics, implementation strategies, and real-world case studies showing 300-500% returns.',
    type: 'whitepaper',
    category: 'Business Strategy',
    downloadUrl: '/downloads/roi-guide-people-counting.pdf',
    publishDate: '2024-01-10',
    featured: true,
    tags: ['ROI', 'Business Case', 'Implementation'],
    views: 2847,
    likes: 156
  },
  {
    id: 'retail-optimization-video',
    title: 'Retail Space Optimization: From Data to Action',
    description: 'Watch how leading retailers use people counting data to optimize layouts, improve customer experience, and increase revenue.',
    type: 'video',
    category: 'Industry Solutions',
    videoUrl: 'https://vimeo.com/example-retail-optimization',
    duration: '12:45',
    publishDate: '2024-02-05',
    featured: true,
    tags: ['Retail', 'Optimization', 'Customer Experience'],
    views: 1923,
    likes: 89
  },
  {
    id: 'privacy-compliance-guide',
    title: 'GDPR Compliance in People Counting: A Complete Guide',
    description: 'Essential guide covering privacy requirements, data protection strategies, and compliance best practices for people counting systems.',
    type: 'guide',
    category: 'Compliance',
    downloadUrl: '/downloads/gdpr-compliance-guide.pdf',
    publishDate: '2024-01-25',
    featured: false,
    tags: ['GDPR', 'Privacy', 'Compliance', 'Legal'],
    views: 1456,
    likes: 78
  },
  {
    id: 'smart-buildings-webinar',
    title: 'Building the Future: Smart Buildings and Occupancy Analytics',
    description: 'Join our experts as they discuss the role of people counting in creating intelligent, efficient, and sustainable buildings.',
    type: 'webinar',
    category: 'Technology Trends',
    videoUrl: 'https://zoom.us/rec/example-smart-buildings',
    duration: '45:00',
    publishDate: '2024-03-01',
    featured: true,
    tags: ['Smart Buildings', 'Sustainability', 'Future Trends'],
    views: 3201,
    likes: 198
  }
];

const industryInsights: IndustryInsight[] = [
  {
    id: 'future-retail-analytics',
    title: 'The Future of Retail Analytics: Beyond Traditional Metrics',
    excerpt: 'Exploring how AI-powered people counting is revolutionizing retail decision-making and customer experience optimization.',
    content: 'Full article content here...',
    author: 'Dr. Emily Watson',
    publishDate: '2024-03-15',
    readTime: '8 min',
    category: 'Industry Trends',
    tags: ['Retail', 'AI', 'Future Trends', 'Analytics'],
    featured: true
  },
  {
    id: 'workplace-evolution',
    title: 'Workplace Evolution: How People Counting Shapes the Future Office',
    excerpt: 'Understanding the role of occupancy analytics in creating flexible, efficient, and employee-centric workspaces.',
    content: 'Full article content here...',
    author: 'Michael Thompson',
    publishDate: '2024-02-28',
    readTime: '6 min',
    category: 'Workplace Innovation',
    tags: ['Workplace', 'Office Design', 'Efficiency', 'Employee Experience'],
    featured: false
  }
];

export function Insights({ onPageChange }: InsightsProps) {
  const [activeTab, setActiveTab] = useState('success-stories');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  const categories = [
    { id: 'all', name: 'All', count: resources.length },
    { id: 'Business Strategy', name: 'Business Strategy', count: resources.filter(r => r.category === 'Business Strategy').length },
    { id: 'Industry Solutions', name: 'Industry Solutions', count: resources.filter(r => r.category === 'Industry Solutions').length },
    { id: 'Technology Trends', name: 'Technology Trends', count: resources.filter(r => r.category === 'Technology Trends').length },
    { id: 'Compliance', name: 'Compliance', count: resources.filter(r => r.category === 'Compliance').length }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = searchTerm === '' || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getResourceIcon = (type: Resource['type']) => {
    switch (type) {
      case 'whitepaper': return <FileText className="h-5 w-5" />;
      case 'video': return <Video className="h-5 w-5" />;
      case 'webinar': return <Headphones className="h-5 w-5" />;
      case 'case-study': return <BarChart3 className="h-5 w-5" />;
      case 'guide': return <BookOpen className="h-5 w-5" />;
      case 'infographic': return <PieChart className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry.toLowerCase()) {
      case 'retail': return <Building2 className="h-5 w-5" />;
      case 'technology': return <Cpu className="h-5 w-5" />;
      case 'transportation': return <Globe className="h-5 w-5" />;
      case 'healthcare': return <Shield className="h-5 w-5" />;
      default: return <Building2 className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-12 lg:py-16">
        <div className="container-responsive">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 px-4 py-2">
              <TrendingUp className="h-4 w-4 mr-2" />
              Industry Insights & Success Stories
            </Badge>
            <h1 className="mb-4">Insights & Success Stories</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover real success stories, industry insights, and expert resources that showcase the transformative power of people counting analytics.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-blue-100 text-sm">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">₹50M+</div>
                <div className="text-blue-100 text-sm">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-blue-100 text-sm">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">450%</div>
                <div className="text-blue-100 text-sm">Average ROI</div>
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
            <TabsList className="grid w-full max-w-2xl grid-cols-4 bg-white shadow-lg">
              <TabsTrigger value="success-stories" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span className="hidden sm:inline">Success Stories</span>
                <span className="sm:hidden">Success</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Resources</span>
                <span className="sm:hidden">Resources</span>
              </TabsTrigger>
              <TabsTrigger value="insights" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span className="hidden sm:inline">Industry Insights</span>
                <span className="sm:hidden">Insights</span>
              </TabsTrigger>
              <TabsTrigger value="featured" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span className="hidden sm:inline">Featured</span>
                <span className="sm:hidden">Featured</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Success Stories Tab */}
          <TabsContent value="success-stories" className="space-y-8">
            {/* Featured Success Stories */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Featured Success Stories</h2>
                <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Editor's Choice
                </Badge>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {successStories.filter(story => story.featured).map((story) => (
                  <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {getIndustryIcon(story.industry)}
                            <Badge variant="outline" className="text-xs">
                              {story.industry}
                            </Badge>
                            <Badge className="bg-green-500 text-white text-xs">
                              ROI Success
                            </Badge>
                          </div>
                          <CardTitle className="text-lg leading-tight mb-2">
                            {story.title}
                          </CardTitle>
                          <p className="text-sm text-gray-600 mb-3">
                            {story.company} • {story.challenge}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Key Results */}
                      <div className="grid grid-cols-2 gap-3">
                        {story.results.slice(0, 4).map((result, index) => (
                          <div key={index} className="text-center p-3 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
                            <div className="font-bold text-lg text-primary">{result.value}</div>
                            <div className="text-xs text-gray-600">{result.metric}</div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial Preview */}
                      <div className="bg-gray-50 p-4 rounded-lg">
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
                          className="flex-1 bg-primary hover:bg-primary/90"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Read Full Story
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Bookmark className="h-4 w-4" />
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
                {successStories.map((story) => (
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
                          <div key={index} className="text-center p-2 bg-blue-50 rounded">
                            <div className="font-semibold text-primary">{result.value}</div>
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
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
            {/* Search and Filter */}
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      className="whitespace-nowrap"
                    >
                      {category.name}
                      <Badge variant="secondary" className="ml-2">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Resources */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Featured Resources</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredResources.filter(resource => resource.featured).map((resource) => (
                  <Card key={resource.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                              {getResourceIcon(resource.type)}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {resource.type}
                            </Badge>
                            <Badge className="bg-yellow-500 text-white text-xs">
                              Featured
                            </Badge>
                          </div>
                          <CardTitle className="text-lg leading-tight mb-2">
                            {resource.title}
                          </CardTitle>
                          <p className="text-sm text-gray-600 mb-3">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {resource.views.toLocaleString()} views
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {resource.likes} likes
                        </div>
                        {resource.duration && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {resource.duration}
                          </div>
                        )}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {resource.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Button */}
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        {resource.type === 'video' || resource.type === 'webinar' ? (
                          <>
                            <Play className="h-4 w-4 mr-2" />
                            Watch Now
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Resources */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                All Resources 
                <span className="text-sm font-normal text-gray-500 ml-2">
                  ({filteredResources.length} items)
                </span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center text-primary">
                          {getResourceIcon(resource.type)}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                        {resource.featured && (
                          <Badge className="bg-yellow-500 text-white text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-base leading-tight">
                        {resource.title}
                      </CardTitle>
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
                        {resource.type === 'video' || resource.type === 'webinar' ? (
                          <>
                            <Play className="h-3 w-3 mr-2" />
                            Watch
                          </>
                        ) : (
                          <>
                            <Download className="h-3 w-3 mr-2" />
                            Download
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Industry Insights Tab */}
          <TabsContent value="insights" className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Industry Insights</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {industryInsights.map((insight) => (
                  <Card key={insight.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {insight.category}
                        </Badge>
                        {insight.featured && (
                          <Badge className="bg-blue-500 text-white text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {insight.title}
                      </CardTitle>
                      <p className="text-gray-600">
                        {insight.excerpt}
                      </p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>By {insight.author}</span>
                        <div className="flex items-center gap-3">
                          <span>{new Date(insight.publishDate).toLocaleDateString()}</span>
                          <span>{insight.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {insight.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Featured Tab */}
          <TabsContent value="featured" className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Editor's Choice</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Our most impactful success stories and valuable resources, hand-picked by our editorial team.
              </p>
            </div>

            {/* Featured Success Stories */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900">Featured Success Stories</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {successStories.filter(story => story.featured).slice(0, 2).map((story) => (
                  <Card key={story.id} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <Badge className="bg-green-500 text-white text-xs w-fit mb-2">
                        Success Story
                      </Badge>
                      <CardTitle className="text-lg">{story.title}</CardTitle>
                      <p className="text-gray-600">{story.company}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {story.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="font-bold text-green-600">{result.value}</div>
                            <div className="text-xs text-gray-600">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                      <Button 
                        onClick={() => setSelectedStory(story)}
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        Read Success Story
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Featured Resources */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900">Featured Resources</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.filter(resource => resource.featured).map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center text-blue-600">
                          {getResourceIcon(resource.type)}
                        </div>
                        <Badge className="bg-blue-500 text-white text-xs">
                          {resource.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-base">{resource.title}</CardTitle>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {resource.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full" size="sm">
                        {resource.type === 'video' || resource.type === 'webinar' ? (
                          <>
                            <Play className="h-3 w-3 mr-2" />
                            Watch
                          </>
                        ) : (
                          <>
                            <Download className="h-3 w-3 mr-2" />
                            Download
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
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
              Join hundreds of organizations already benefiting from APC Solutions. Start your free 15-day POC and see the impact for yourself.
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
                <Users className="h-4 w-4 mr-2" />
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
                    <div className="text-sm text-gray-600">
                      {selectedStory.testimonial.position}, {selectedStory.testimonial.company}
                    </div>
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