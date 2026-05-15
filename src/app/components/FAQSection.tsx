import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { 
  ChevronDown, 
  Search, 
  MessageCircle, 
  Phone, 
  Mail,
  HelpCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  category?: string;
  onPageChange?: (page: string) => void;
  showContactCTA?: boolean;
}

export function FAQSection({ 
  title = "Frequently Asked Questions", 
  description = "Find answers to common questions about APC solutions",
  category,
  onPageChange,
  showContactCTA = true
}: FAQSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  const faqs: FAQ[] = [
    // General FAQs
    {
      id: 'what-is-apc',
      question: 'What is APC EdgeBox™ and how does it work?',
      answer: 'APC EdgeBox™ is our ultra-compact AI gateway that powers all APC solutions. It features ARM Cortex-A78 CPU, dedicated AI acceleration chip, and 5G connectivity. It processes video feeds locally using advanced AI algorithms to count people with up to 99% accuracy while ensuring privacy through on-device processing.',
      category: 'general',
      tags: ['edgebox', 'technology', 'how it works']
    },
    {
      id: 'accuracy-rate',
      question: 'How accurate is the people counting?',
      answer: 'Our accuracy rates vary by solution: APC Core delivers up to 99% accuracy, APC Flex and APC Link achieve up to 95% accuracy, and APC EventSense provides up to 98% accuracy. Accuracy depends on camera quality, installation conditions, and environment factors.',
      category: 'technical',
      tags: ['accuracy', 'performance', 'reliability']
    },
    {
      id: 'privacy-gdpr',
      question: 'Is the solution GDPR compliant and privacy-focused?',
      answer: 'Yes, absolutely. APC solutions are GDPR compliant by design. We use privacy-preserving AI that analyzes movement patterns without identifying individuals. All processing happens locally on the EdgeBox™, ensuring no personal data is collected or transmitted.',
      category: 'privacy',
      tags: ['gdpr', 'privacy', 'compliance', 'security']
    },
    
    // Solution-specific FAQs
    {
      id: 'apc-core-vs-flex',
      question: 'What\'s the difference between APC Core and APC Flex?',
      answer: 'APC Core ($1,299/month) is our complete turnkey solution with AI cameras, professional installation, and 24/7 support - delivering up to 99% accuracy. APC Flex ($799/month) uses basic cameras for cost-efficiency while maintaining up to 95% accuracy and advanced analytics capabilities.',
      category: 'solutions',
      tags: ['apc core', 'apc flex', 'comparison', 'pricing']
    },
    {
      id: 'apc-link-compatibility',
      question: 'Can APC Link work with my existing cameras?',
      answer: 'APC Link works with most modern IP/CCTV cameras that support RTSP streaming. We provide a free compatibility assessment during consultation. The solution integrates your existing cameras with our EdgeBox™ for AI analytics without requiring new hardware installation.',
      category: 'solutions',
      tags: ['apc link', 'existing cameras', 'compatibility', 'retrofit']
    },
    {
      id: 'eventsense-rental',
      question: 'How does APC EventSense rental work?',
      answer: 'APC EventSense starts at $199/day for temporary deployments. We provide portable EdgeBox™ + camera kits with same-day installation possible. Perfect for concerts, festivals, exhibitions, and events requiring crowd monitoring and safety compliance.',
      category: 'solutions',
      tags: ['eventsense', 'rental', 'events', 'temporary']
    },
    
    // Deployment FAQs
    {
      id: 'deployment-options',
      question: 'What are the different deployment options?',
      answer: 'We offer three deployment models: LocalView (on-premise processing, no internet needed), CloudSync (centralized cloud analytics for multi-site management), and SmartConnect (mobile access with SIM connectivity and redundancy). Each works with any solution package.',
      category: 'deployment',
      tags: ['localview', 'cloudsync', 'smartconnect', 'deployment']
    },
    {
      id: 'installation-time',
      question: 'How long does installation take?',
      answer: 'Installation time varies by solution: APC Core typically takes 2-4 hours, APC Flex takes 1-3 hours, APC Link takes 1-2 hours (since cameras exist), and APC EventSense can be deployed same-day for events. Our team handles all technical setup.',
      category: 'installation',
      tags: ['installation', 'setup time', 'deployment speed']
    },
    
    // POC and Pricing FAQs
    {
      id: 'poc-details',
      question: 'What\'s included in the free POC?',
      answer: 'Our 15-Day Free POC includes complete system setup, live data collection, real-time dashboard access, basic analytics reports, and technical support. No setup fees or commitments required. We also offer 30-day extended POC and custom POC options.',
      category: 'poc',
      tags: ['poc', 'free trial', 'evaluation', 'demo']
    },
    {
      id: 'pricing-model',
      question: 'How does the pricing work?',
      answer: 'We offer monthly subscription pricing: APC Flex from $799/month, APC Link from $599/month, APC Core from $1,299/month, and APC EventSense from $199/day. All prices include hardware, software, analytics platform, and support. No hidden fees or setup costs.',
      category: 'pricing',
      tags: ['pricing', 'subscription', 'costs', 'monthly']
    },
    
    // Technical FAQs
    {
      id: 'internet-requirements',
      question: 'What are the internet and power requirements?',
      answer: 'LocalView requires no internet for counting (local display only). CloudSync and SmartConnect need reliable internet (minimum 2Mbps upload). Power requirements: Standard PoE (15.4W) or AC power adapter. SmartConnect includes SIM backup for redundancy.',
      category: 'technical',
      tags: ['internet', 'power', 'requirements', 'connectivity']
    },
    {
      id: 'integration-apis',
      question: 'Can APC solutions integrate with our existing systems?',
      answer: 'Yes, we provide REST APIs for integration with POS systems, HVAC controls, ERP software, and existing dashboards. APC Link specifically designed for organizations wanting to integrate with current infrastructure and systems.',
      category: 'technical',
      tags: ['integration', 'api', 'pos', 'hvac', 'erp']
    },
    
    // Industry-specific FAQs
    {
      id: 'retail-benefits',
      question: 'What specific benefits does APC provide for retail?',
      answer: 'For retail: queue optimization (42% reduction average), conversion tracking, heat mapping for store layout optimization, staff allocation insights, peak hour analysis, and customer flow patterns. Integrates with POS for conversion rate analysis.',
      category: 'industry',
      tags: ['retail', 'queue optimization', 'conversion', 'benefits']
    },
    {
      id: 'office-space-optimization',
      question: 'How does APC help with office space utilization?',
      answer: 'APC provides real-time occupancy monitoring, meeting room utilization analytics, HVAC optimization (35% energy savings average), space planning insights, and compliance monitoring. Helps optimize real estate costs and employee productivity.',
      category: 'industry',
      tags: ['office', 'space utilization', 'hvac', 'energy savings']
    },
    
    // Support FAQs
    {
      id: 'support-included',
      question: 'What support is included?',
      answer: 'All solutions include technical support during business hours. APC Core includes 24/7 premium support. We provide phone, email, chat, and remote assistance. Our team handles software updates, troubleshooting, and optimization recommendations.',
      category: 'support',
      tags: ['support', '24/7', 'technical assistance', 'maintenance']
    },
    {
      id: 'data-ownership',
      question: 'Who owns the data and how long is it stored?',
      answer: 'You own all your data. LocalView stores data locally on your premises. CloudSync offers flexible retention periods (30 days to 2 years). We never share or sell your data. All data processing complies with GDPR and local privacy regulations.',
      category: 'privacy',
      tags: ['data ownership', 'storage', 'retention', 'privacy']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', count: faqs.length },
    { id: 'general', label: 'General', count: faqs.filter(f => f.category === 'general').length },
    { id: 'solutions', label: 'Solutions', count: faqs.filter(f => f.category === 'solutions').length },
    { id: 'deployment', label: 'Deployment', count: faqs.filter(f => f.category === 'deployment').length },
    { id: 'poc', label: 'POC & Pricing', count: faqs.filter(f => f.category === 'poc' || f.category === 'pricing').length },
    { id: 'technical', label: 'Technical', count: faqs.filter(f => f.category === 'technical').length },
    { id: 'industry', label: 'Industry', count: faqs.filter(f => f.category === 'industry').length },
    { id: 'privacy', label: 'Privacy & Security', count: faqs.filter(f => f.category === 'privacy').length },
    { id: 'support', label: 'Support', count: faqs.filter(f => f.category === 'support').length }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || 
                           faq.category === selectedCategory || 
                           (selectedCategory === 'poc' && (faq.category === 'poc' || faq.category === 'pricing'));
    const matchesSearch = searchTerm === '' || 
                         faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4">
          <HelpCircle className="h-3 w-3 mr-1" />
          Got Questions?
        </Badge>
        <h2 className="mb-4 text-gray-900">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(cat.id)}
              className="text-xs"
            >
              {cat.label}
              <Badge variant="secondary" className="ml-2 text-xs">
                {cat.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="mb-8">
        {filteredFAQs.length > 0 ? (
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-gray-200 rounded-lg px-6 py-2 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <div className="flex items-start gap-3 w-full">
                    <HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="text-xs capitalize">
                          {faq.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="pl-8">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    <div className="flex gap-1 mt-3">
                      {faq.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or category filter.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Contact CTA */}
      {showContactCTA && (
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our technical experts are here to help. Get personalized answers and recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {onPageChange && (
                <Button onClick={() => onPageChange('contact')} className="group">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Our Experts
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
              <Button variant="outline" onClick={() => onPageChange?.('demo')}>
                <CheckCircle className="mr-2 h-4 w-4" />
                Start Free POC
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +1-800-APC-HELP
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                support@apcsolutions.com
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}