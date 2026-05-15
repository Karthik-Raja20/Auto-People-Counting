import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Shield,
  Zap,
  DollarSign,
  Settings,
  Users,
  BarChart3,
  Wifi,
  Camera,
  Database,
  CheckCircle,
  AlertCircle,
  Smartphone,
  Monitor,
  Globe,
  Lock,
  Cpu,
  Cloud,
  Download,
  Headphones
} from 'lucide-react';

interface FAQProps {
  onPageChange: (page: string) => void;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  popular?: boolean;
}

export function FAQ({ onPageChange }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<string[]>(['general-1', 'pricing-1', 'technical-1']);

  const faqData: FAQItem[] = [
    // General Questions
    {
      id: 'general-1',
      category: 'general',
      question: 'What is APC Solutions and how does people counting work?',
      answer: 'APC Solutions is an AI-powered people counting platform that uses advanced computer vision and edge computing technology. Our APC EdgeBox™ processes video feeds from AI cameras in real-time to count people with up to 99% accuracy. The system analyzes movement patterns, distinguishes between people and objects, and provides instant occupancy data without storing personal information, ensuring complete privacy compliance.',
      tags: ['overview', 'technology', 'accuracy', 'privacy'],
      popular: true
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'How accurate is your people counting solution?',
      answer: 'Our APC EdgeBox™ delivers up to 99% accuracy in optimal conditions. Accuracy varies based on environmental factors like lighting, crowd density, and camera placement. We provide detailed accuracy reports during your POC period and work with you to optimize placement for maximum precision in your specific environment.',
      tags: ['accuracy', 'performance', 'optimization'],
      popular: true
    },
    {
      id: 'general-3',
      category: 'general',
      question: 'What industries benefit most from people counting?',
      answer: 'Our solutions serve diverse industries including: Retail (queue management, store optimization), Corporate offices (workspace utilization, energy efficiency), Transportation hubs (crowd management, safety), Healthcare facilities (capacity monitoring), Events & venues (safety compliance, analytics), Warehouses (workflow optimization), Museums & galleries (visitor insights), and Government buildings (security, efficiency).',
      tags: ['industries', 'applications', 'use-cases']
    },
    {
      id: 'general-4',
      category: 'general',
      question: 'Is the system GDPR and privacy compliant?',
      answer: 'Yes, our system is fully GDPR compliant and privacy-first by design. We process anonymous movement data without facial recognition or personal identification. All processing happens locally on the APC EdgeBox™, ensuring no personal data leaves your premises. We provide comprehensive privacy documentation and compliance certifications.',
      tags: ['privacy', 'gdpr', 'compliance', 'security'],
      popular: true
    },

    // Pricing Questions
    {
      id: 'pricing-1',
      category: 'pricing',
      question: 'What are your pricing plans and what\'s included?',
      answer: 'We offer four main solutions: APC Core ($1,299/month) - complete turnkey solution; APC Flex ($799/month) - cost-efficient with budget cameras; APC Link ($599/month) - retrofit existing cameras; APC EventSense ($199/day) - event rentals. All plans include APC EdgeBox™, analytics platform, installation, training, and ongoing support.',
      tags: ['pricing', 'plans', 'packages', 'included'],
      popular: true
    },
    {
      id: 'pricing-2',
      category: 'pricing',
      question: 'Are there any hidden fees or additional costs?',
      answer: 'No hidden fees. Our transparent pricing includes hardware, software, installation, training, and 24/7 support. Optional add-ons include: additional camera zones, advanced analytics modules, custom integrations, extended warranties, and priority support. All costs are discussed upfront during your consultation.',
      tags: ['fees', 'transparent', 'additional-costs']
    },
    {
      id: 'pricing-3',
      category: 'pricing',
      question: 'Do you offer volume discounts for multiple locations?',
      answer: 'Yes, we provide significant volume discounts for multi-location deployments. Discounts start at 10 locations (10% off), 25 locations (15% off), 50+ locations (20% off), and custom enterprise pricing for 100+ locations. We also offer managed service packages for large deployments.',
      tags: ['volume', 'discounts', 'enterprise', 'multi-location']
    },
    {
      id: 'pricing-4',
      category: 'pricing',
      question: 'What\'s included in the free POC and how long does it last?',
      answer: 'Our 15-day free POC includes: complete hardware installation, live data collection, analytics dashboard access, expert support, custom reporting, and removal at no cost. You can extend to a 30-day enhanced POC for $299 which includes advanced features, priority support, and custom integrations.',
      tags: ['poc', 'free-trial', 'included', 'duration']
    },

    // Technical Questions
    {
      id: 'technical-1',
      category: 'technical',
      question: 'What are the technical requirements for installation?',
      answer: 'Minimal requirements: Power outlet (110-240V), Internet connection (minimum 10 Mbps upload), mounting points for cameras. Our APC EdgeBox™ is plug-and-play with automatic configuration. We support PoE cameras, WiFi connectivity, and can work with existing network infrastructure. Professional installation takes 2-4 hours.',
      tags: ['requirements', 'installation', 'network', 'power'],
      popular: true
    },
    {
      id: 'technical-2',
      category: 'technical',
      question: 'Can you integrate with our existing cameras?',
      answer: 'Yes, through our APC Link solution. We support 200+ camera models from major manufacturers (Axis, Hikvision, Dahua, Bosch, etc.). Our compatibility assessment during POC determines integration feasibility. Some older cameras may require firmware updates or have limited functionality.',
      tags: ['integration', 'existing-cameras', 'compatibility', 'link']
    },
    {
      id: 'technical-3',
      category: 'technical',
      question: 'How does data security and local processing work?',
      answer: 'All AI processing happens locally on the APC EdgeBox™ - no video data is transmitted to external servers. We use enterprise-grade encryption (AES-256), secure VPN connections, and role-based access controls. Video data is processed in real-time and immediately discarded, only anonymous count data is stored.',
      tags: ['security', 'local-processing', 'encryption', 'data-protection']
    },
    {
      id: 'technical-4',
      category: 'technical',
      question: 'What happens if internet connection is lost?',
      answer: 'The APC EdgeBox™ continues operating offline with local data storage for up to 30 days. When connectivity resumes, all data automatically syncs to the cloud. Critical alerts can be sent via SMS. The system maintains full functionality during outages.',
      tags: ['offline', 'connectivity', 'reliability', 'data-storage']
    },

    // Implementation Questions
    {
      id: 'implementation-1',
      category: 'implementation',
      question: 'How long does implementation take from start to finish?',
      answer: 'Standard implementation: Site survey (1-2 days), Equipment delivery (3-5 days), Installation (1 day), Configuration & training (1 day), Go-live & optimization (1 week). Total timeline: 2-3 weeks. Express installation available in 48 hours for urgent deployments.',
      tags: ['timeline', 'implementation', 'installation', 'go-live']
    },
    {
      id: 'implementation-2',
      category: 'implementation',
      question: 'What training and support do you provide?',
      answer: 'Comprehensive training includes: On-site admin training (4 hours), User manual and video tutorials, Ongoing technical support (24/7), Monthly optimization reviews, Software updates and maintenance. We ensure your team is fully competent before go-live.',
      tags: ['training', 'support', 'documentation', 'ongoing']
    },
    {
      id: 'implementation-3',
      category: 'implementation',
      question: 'Do you provide ongoing maintenance and updates?',
      answer: 'Yes, all plans include: Automatic software updates, Remote monitoring and diagnostics, Preventive maintenance, Hardware replacement coverage, Performance optimization, and 24/7 technical support. We proactively monitor system health and address issues before they impact operations.',
      tags: ['maintenance', 'updates', 'monitoring', 'support']
    },

    // ROI & Benefits
    {
      id: 'roi-1',
      category: 'roi',
      question: 'What ROI can I expect from people counting?',
      answer: 'Typical ROI ranges from 300-500% in year one. Benefits include: Reduced energy costs (20-35%), Optimized staffing (15-25% efficiency gain), Improved customer experience (20-40% satisfaction increase), Enhanced security and safety, Data-driven decision making. Payback period averages 6-12 months.',
      tags: ['roi', 'benefits', 'savings', 'payback']
    },
    {
      id: 'roi-2',
      category: 'roi',
      question: 'How does people counting improve customer experience?',
      answer: 'Enhanced customer experience through: Reduced wait times (queue optimization), Optimal staff allocation during peak hours, Better space utilization, Improved safety and comfort, Personalized service delivery, Real-time capacity management, and Proactive issue resolution.',
      tags: ['customer-experience', 'optimization', 'service']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: <HelpCircle className="h-4 w-4" />, count: faqData.length },
    { id: 'general', name: 'General', icon: <Users className="h-4 w-4" />, count: faqData.filter(item => item.category === 'general').length },
    { id: 'pricing', name: 'Pricing', icon: <DollarSign className="h-4 w-4" />, count: faqData.filter(item => item.category === 'pricing').length },
    { id: 'technical', name: 'Technical', icon: <Settings className="h-4 w-4" />, count: faqData.filter(item => item.category === 'technical').length },
    { id: 'implementation', name: 'Implementation', icon: <Zap className="h-4 w-4" />, count: faqData.filter(item => item.category === 'implementation').length },
    { id: 'roi', name: 'ROI & Benefits', icon: <BarChart3 className="h-4 w-4" />, count: faqData.filter(item => item.category === 'roi').length }
  ];

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqData.filter(item => item.popular);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-12 lg:py-16">
        <div className="container-responsive">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4 px-4 py-2">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help Center
            </Badge>
            <h1 className="mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Find answers to common questions about APC Solutions, implementation, pricing, and technical requirements. Can't find what you're looking for? Our experts are here to help.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-responsive py-8 lg:py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Categories */}
              <Card className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                        activeCategory === category.id
                          ? 'bg-primary text-white'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {category.icon}
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <Badge variant={activeCategory === category.id ? "secondary" : "outline"}>
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <h3 className="font-semibold mb-4 text-primary">Still Need Help?</h3>
                <div className="space-y-3">
                  <Button 
                    onClick={() => onPageChange('contact')}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Expert
                  </Button>
                  <Button 
                    onClick={() => onPageChange('demo')}
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary/5"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Start Free POC
                  </Button>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Phone className="h-4 w-4" />
                    <span>+1-800-APC-HELP</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Mail className="h-4 w-4" />
                    <span>support@apcsolutions.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>24/7 Support Available</span>
                  </div>
                </div>
              </Card>

              {/* Popular FAQs */}
              {activeCategory === 'all' && (
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 text-accent">Popular Questions</h3>
                  <div className="space-y-2">
                    {popularFAQs.slice(0, 4).map((faq) => (
                      <button
                        key={faq.id}
                        onClick={() => toggleItem(faq.id)}
                        className="w-full text-left p-2 rounded text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                      >
                        {faq.question}
                      </button>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Summary */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {activeCategory === 'all' ? 'All Questions' : categories.find(c => c.id === activeCategory)?.name}
                </h2>
                <Badge variant="outline" className="text-gray-500">
                  {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'}
                </Badge>
              </div>
              {searchTerm && (
                <p className="text-gray-600 mt-2">
                  Search results for "<span className="font-medium">{searchTerm}</span>"
                </p>
              )}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.length === 0 ? (
                <Card className="p-8 text-center">
                  <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">No questions found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search terms or browse different categories.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('all');
                    }}
                    variant="outline"
                  >
                    Clear Search
                  </Button>
                </Card>
              ) : (
                filteredFAQs.map((faq) => (
                  <Card key={faq.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-2">
                            <h3 className="font-semibold text-gray-900 leading-tight">
                              {faq.question}
                            </h3>
                            {faq.popular && (
                              <Badge className="bg-accent text-white text-xs">Popular</Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {faq.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          {openItems.includes(faq.id) ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    {openItems.includes(faq.id) && (
                      <CardContent className="pt-0 pb-6">
                        <div className="border-t border-gray-100 pt-4">
                          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                            {faq.answer}
                          </div>
                          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                            <span className="text-sm text-gray-500">Was this helpful?</span>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Yes
                              </Button>
                              <Button size="sm" variant="outline" className="text-xs">
                                No
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))
              )}
            </div>

            {/* Contact CTA */}
            <Card className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <div className="text-center">
                <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Can't find what you're looking for?</h3>
                <p className="text-gray-600 mb-4">
                  Our expert team is available 24/7 to help with any questions about APC Solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    onClick={() => onPageChange('contact')}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button 
                    onClick={() => onPageChange('demo')}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}