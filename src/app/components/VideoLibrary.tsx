import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Play, 
  Clock, 
  Eye, 
  Star, 
  Search,
  Filter,
  PlayCircle,
  Video,
  Users,
  Building,
  ShoppingCart,
  Plane,
  Calendar,
  Download,
  Share,
  Bookmark,
  Book,
  ArrowRight
} from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  views: string;
  publishDate: string;
  category: string;
  type: 'case-study' | 'demo' | 'testimonial' | 'webinar' | 'tutorial';
  industry?: string;
  thumbnail: string;
  featured?: boolean;
  rating?: number;
  videoUrl?: string;
}

interface VideoLibraryProps {
  title?: string;
  description?: string;
  showFilters?: boolean;
  featuredOnly?: boolean;
  limit?: number;
  categories?: string[];
  onPageChange?: (page: string) => void;
}

export function VideoLibrary({ 
  title = "Video Library",
  description = "Watch real-world case studies and product demonstrations",
  showFilters = true,
  featuredOnly = false,
  limit,
  categories,
  onPageChange
}: VideoLibraryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const videos: Video[] = [
    // Case Studies
    {
      id: 'megamall-case-study',
      title: 'MegaMall Success Story: 42% Queue Reduction',
      description: 'See how APC Core transformed customer experience at MegaMall Supermarket with real-time queue optimization and staff allocation.',
      duration: '8:32',
      views: '12.3K',
      publishDate: '2024-02-15',
      category: 'case-study',
      type: 'case-study',
      industry: 'retail',
      thumbnail: 'retail mall supermarket success story',
      featured: true,
      rating: 4.9,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'airport-transformation',
      title: 'International Airport: Passenger Flow Revolution',
      description: 'Complete transformation of security checkpoint management resulting in 35% reduction in wait times and improved passenger satisfaction.',
      duration: '12:45',
      views: '8.7K',
      publishDate: '2024-02-08',
      category: 'case-study',
      type: 'case-study',
      industry: 'transportation',
      thumbnail: 'airport security passengers transportation',
      featured: true,
      rating: 4.8,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'smart-office-campus',
      title: 'Corporate Campus: 30% Energy Savings Achievement',
      description: 'TechCorp headquarters achieves significant energy savings and space optimization using APC CloudSync across 12 floors.',
      duration: '10:15',
      views: '6.2K',
      publishDate: '2024-01-25',
      category: 'case-study',
      type: 'case-study',
      industry: 'office',
      thumbnail: 'corporate office smart building energy',
      rating: 4.7,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    // Product Demos
    {
      id: 'apc-edgebox-demo',
      title: 'APC EdgeBox™ Complete Technology Demo',
      description: 'Comprehensive walkthrough of APC EdgeBox™ features, installation process, and real-time analytics capabilities.',
      duration: '15:20',
      views: '25.1K',
      publishDate: '2024-02-12',
      category: 'demo',
      type: 'demo',
      thumbnail: 'technology demo edgebox hardware',
      featured: true,
      rating: 4.9,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'apc-core-installation',
      title: 'APC Core Installation & Setup Guide',
      description: 'Step-by-step installation guide showing professional deployment of APC Core solution from unboxing to live operation.',
      duration: '18:45',
      views: '15.4K',
      publishDate: '2024-02-05',
      category: 'tutorial',
      type: 'tutorial',
      thumbnail: 'installation setup guide professional',
      rating: 4.6,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'dashboard-analytics-tour',
      title: 'Smart Analytics Platform Deep Dive',
      description: 'Complete tour of the APC analytics dashboard, showing real-time data, reporting features, and advanced insights.',
      duration: '22:10',
      views: '18.9K',
      publishDate: '2024-01-30',
      category: 'demo',
      type: 'demo',
      thumbnail: 'analytics dashboard software demo',
      rating: 4.8,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    // Customer Testimonials
    {
      id: 'retail-manager-testimonial',
      title: 'Retail Manager: "Game-Changing Results"',
      description: 'Sarah Johnson, Operations Director at MegaMall, shares her experience with APC solutions and the tangible business impact.',
      duration: '5:45',
      views: '9.3K',
      publishDate: '2024-02-10',
      category: 'testimonial',
      type: 'testimonial',
      industry: 'retail',
      thumbnail: 'customer testimonial retail manager',
      rating: 4.9,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'facilities-director-interview',
      title: 'Facilities Director: Smart Building Success',
      description: 'Michael Chen from TechCorp explains how APC solutions transformed their corporate campus operations and energy efficiency.',
      duration: '7:20',
      views: '5.8K',
      publishDate: '2024-01-28',
      category: 'testimonial',
      type: 'testimonial',
      industry: 'office',
      thumbnail: 'facilities manager testimonial office',
      rating: 4.7,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },

    // Webinars
    {
      id: 'retail-optimization-webinar',
      title: 'Live Webinar: Retail Optimization Strategies 2024',
      description: 'Interactive session with APC experts covering the latest retail optimization trends, queue management, and conversion analytics.',
      duration: '62:15',
      views: '4.2K',
      publishDate: '2024-02-20',
      category: 'webinar',
      type: 'webinar',
      industry: 'retail',
      thumbnail: 'webinar retail optimization strategies',
      rating: 4.8,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'privacy-compliance-webinar',
      title: 'GDPR & Privacy-First AI: Technical Deep Dive',
      description: 'Technical webinar covering privacy-preserving AI technologies, GDPR compliance, and data protection in people counting.',
      duration: '45:30',
      views: '3.1K',
      publishDate: '2024-01-18',
      category: 'webinar',
      type: 'webinar',
      thumbnail: 'privacy gdpr compliance webinar technical',
      rating: 4.6,
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  const videoCategories = [
    { id: 'all', label: 'All Videos', count: videos.length, icon: <Video className="h-4 w-4" /> },
    { id: 'case-study', label: 'Case Studies', count: videos.filter(v => v.category === 'case-study').length, icon: <Star className="h-4 w-4" /> },
    { id: 'demo', label: 'Product Demos', count: videos.filter(v => v.category === 'demo').length, icon: <PlayCircle className="h-4 w-4" /> },
    { id: 'testimonial', label: 'Testimonials', count: videos.filter(v => v.category === 'testimonial').length, icon: <Users className="h-4 w-4" /> },
    { id: 'webinar', label: 'Webinars', count: videos.filter(v => v.category === 'webinar').length, icon: <Calendar className="h-4 w-4" /> },
    { id: 'tutorial', label: 'Tutorials', count: videos.filter(v => v.category === 'tutorial').length, icon: <Book className="h-4 w-4" /> }
  ];

  const industryFilter = [
    { id: 'all', label: 'All Industries' },
    { id: 'retail', label: 'Retail & Malls' },
    { id: 'office', label: 'Corporate Offices' },
    { id: 'transportation', label: 'Transportation' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'education', label: 'Education' }
  ];

  let filteredVideos = videos;

  // Apply filters
  if (featuredOnly) {
    filteredVideos = filteredVideos.filter(video => video.featured);
  }

  if (categories && categories.length > 0) {
    filteredVideos = filteredVideos.filter(video => categories.includes(video.category));
  }

  if (selectedCategory !== 'all') {
    filteredVideos = filteredVideos.filter(video => video.category === selectedCategory);
  }

  if (selectedType !== 'all') {
    filteredVideos = filteredVideos.filter(video => video.industry === selectedType);
  }

  if (searchTerm) {
    filteredVideos = filteredVideos.filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Apply limit
  if (limit) {
    filteredVideos = filteredVideos.slice(0, limit);
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const handleVideoClick = (video: Video) => {
    // In a real implementation, this would open a modal or navigate to video page
    if (video.videoUrl) {
      window.open(video.videoUrl, '_blank');
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="mb-4 text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Search and Filters */}
      {showFilters && (
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {videoCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.icon}
                {category.label}
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {industryFilter.map((industry) => (
              <Button
                key={industry.id}
                variant={selectedType === industry.id ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setSelectedType(industry.id)}
              >
                {industry.label}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Video Grid */}
      {filteredVideos.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => handleVideoClick(video)}>
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU4MzU2NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral`}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="h-6 w-6 text-primary ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3">
                  <Badge className="bg-black/70 text-white">
                    {video.duration}
                  </Badge>
                </div>

                {/* Featured Badge */}
                {video.featured && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-accent">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-white/90 capitalize">
                    {video.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {video.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {video.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Video Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {video.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(video.publishDate)}
                    </div>
                  </div>
                  {video.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{video.rating}</span>
                    </div>
                  )}
                </div>

                {/* Industry Tag */}
                {video.industry && (
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs capitalize">
                      {video.industry}
                    </Badge>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 group">
                    <Play className="mr-2 h-3 w-3" />
                    Watch Now
                  </Button>
                  <Button size="sm" variant="outline" className="px-3">
                    <Share className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="px-3">
                    <Bookmark className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-12 text-center">
            <Video className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedType('all');
              }}
            >
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      )}

      {/* View More CTA */}
      {!showFilters && filteredVideos.length > 0 && onPageChange && (
        <div className="text-center mt-8">
          <Button onClick={() => onPageChange('insights')} className="group">
            View Complete Video Library
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      )}
    </div>
  );
}