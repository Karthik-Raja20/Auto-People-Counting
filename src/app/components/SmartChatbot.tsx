import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown,
  Zap,
  DollarSign,
  PlayCircle,
  HelpCircle,
  Settings,
  Users,
  BarChart3,
  CheckCircle,
  Minimize2,
  Maximize2,
  RefreshCw,
  Shield,
  Camera,
  Wifi,
  Database,
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

interface ChatbotProps {
  onPageChange: (page: string) => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'quick-reply' | 'suggestion' | 'escalation';
  actions?: Array<{
    label: string;
    action: () => void;
    icon?: React.ReactNode;
  }>;
}

interface KnowledgeBase {
  [key: string]: {
    answer: string;
    followUp?: string[];
    actions?: Array<{
      label: string;
      page?: string;
      action?: string;
      icon?: React.ReactNode;
    }>;
    category: string;
  };
}

export function SmartChatbot({ onPageChange }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Comprehensive knowledge base with complete FAQ integration
  const knowledgeBase: KnowledgeBase = {
    // Greetings & Welcome
    'hello|hi|hey|good morning|good afternoon|good evening': {
      answer: "Hello! 👋 I'm your APC Solutions AI assistant. I can help you with pricing, demo packages, technical questions, ROI analysis, implementation details, and more. How can I assist you today?",
      followUp: ["View Pricing Plans", "Start Free Demo", "Technical Requirements", "Contact Support"],
      category: 'greeting'
    },

    // General Questions - Comprehensive FAQ Integration
    'what is apc|apc solutions|people counting|how does it work': {
      answer: "🏢 **APC Solutions Overview:**\n\n🤖 **AI-Powered People Counting** using advanced computer vision and edge computing technology\n🎯 **APC EdgeBox™** processes video feeds from AI cameras in real-time\n📊 **Up to 99% accuracy** - analyzes movement patterns and distinguishes people from objects\n🔒 **Privacy-first design** - no personal information stored, completely GDPR compliant\n⚡ **Instant occupancy data** with real-time insights\n\n✅ **Key Benefits:**\n• Anonymous counting only\n• Local edge processing\n• Enterprise-grade security\n• 24/7 monitoring & support",
      actions: [
        { label: "See How It Works", page: "about", icon: <Settings className="h-4 w-4" /> },
        { label: "Start Free Demo", page: "demo-packages", icon: <PlayCircle className="h-4 w-4" /> }
      ],
      category: 'general'
    },

    'accuracy|how accurate|precision|performance': {
      answer: "🎯 **Accuracy Specifications:**\n\n✅ **Up to 99% accuracy** in optimal conditions\n✅ **AI-powered computer vision** with edge processing\n✅ **Real-time counting** with sub-second response\n\n📊 **Accuracy factors:**\n• Lighting conditions (optimal: natural + artificial)\n• Camera placement (ceiling mount preferred)\n• Crowd density (performs well in high traffic)\n• Environmental setup (indoor/covered areas best)\n\n🔬 **Performance varies by solution:**\n• APC Core: Up to 99% accuracy\n• APC Flex: Up to 95% accuracy\n• APC Link: Depends on existing camera quality\n\n📈 **We provide detailed accuracy reports during POC**",
      actions: [
        { label: "See Technical Specs", page: "products", icon: <Settings className="h-4 w-4" /> },
        { label: "Start Accuracy Test", page: "demo-packages", icon: <PlayCircle className="h-4 w-4" /> }
      ],
      category: 'technical'
    },

    'industries|applications|use cases|who uses': {
      answer: "🏭 **Industries We Serve:**\n\n🛒 **Retail:** Queue management, store optimization, foot traffic analysis\n🏢 **Corporate Offices:** Workspace utilization, energy efficiency, meeting room optimization\n🚆 **Transportation:** Airports, train stations, crowd management, safety compliance\n🏥 **Healthcare:** Capacity monitoring, patient flow, waiting area optimization\n🎪 **Events & Venues:** Safety compliance, attendance tracking, crowd analytics\n📦 **Warehouses:** Workflow optimization, safety monitoring, efficiency tracking\n🏛️ **Museums & Galleries:** Visitor insights, exhibit popularity, capacity management\n🏛️ **Government Buildings:** Security, efficiency, public service optimization\n🏫 **Education:** Campus monitoring, classroom utilization, student flow analysis",
      actions: [
        { label: "Industry Solutions", page: "applications", icon: <Users className="h-4 w-4" /> },
        { label: "Success Stories", page: "success-stories", icon: <CheckCircle className="h-4 w-4" /> }
      ],
      category: 'general'
    },

    'privacy|gdpr|compliance|data protection|security': {
      answer: "🔒 **Privacy & Compliance:**\n\n✅ **GDPR Compliant by design** - full European compliance\n✅ **No facial recognition** or personal data storage\n✅ **Local edge processing** - data stays on-premises\n✅ **Anonymous counting only** - no personal identification\n\n🛡️ **Security Features:**\n• AES-256 encryption (military-grade)\n• Role-based access controls\n• Secure VPN connections\n• Enterprise-grade security protocols\n\n📋 **Compliance Documentation:**\n• Privacy impact assessments\n• GDPR compliance certificates\n• Security audit reports\n• Data processing agreements\n\n🏢 **All processing happens locally on APC EdgeBox™**",
      actions: [
        { label: "Privacy Documentation", page: "about", icon: <Shield className="h-4 w-4" /> },
        { label: "Security Details", page: "products", icon: <Settings className="h-4 w-4" /> }
      ],
      category: 'privacy'
    },

    // Pricing Questions - Detailed FAQ Integration
    'price|pricing|cost|rates|how much|fees|plans': {
      answer: "💰 **Comprehensive Pricing Options:**\n\n🛒 **One-time Purchase:**\n• APC Core: ₹60,000 (Premium AI cameras)\n• APC Flex: ₹45,000 (Cost-effective cameras)\n• APC Link: ₹35,000 (Retrofit existing cameras)\n\n📅 **Subscription Model (24 months):**\n• Core: ₹30,000 advance + ₹5,000/month\n• Flex: ₹22,500 advance + ₹4,000/month\n• Link: ₹17,500 advance + ₹3,000/month\n\n🏠 **Rental Options:**\n• Daily rates available (min 3-4 days)\n• EventSense: ₹8,000/day (events, min 4-5 days)\n• Security deposits: ₹10,000-₹20,000 (refundable)\n\n✅ **All plans include:** EdgeBox™, installation, training, 24/7 support",
      actions: [
        { label: "Get Detailed Quote", page: "demo", icon: <DollarSign className="h-4 w-4" /> },
        { label: "View All Plans", page: "products", icon: <BarChart3 className="h-4 w-4" /> },
        { label: "Start Free Demo", page: "demo-packages", icon: <PlayCircle className="h-4 w-4" /> }
      ],
      category: 'pricing'
    },

    'hidden fees|additional costs|extra charges|transparent pricing': {
      answer: "💎 **Transparent Pricing - No Hidden Fees:**\n\n✅ **Included in all plans:**\n• APC EdgeBox™ hardware\n• Software platform & analytics\n• Professional installation & setup\n• Comprehensive training (4 hours)\n• 24/7 technical support\n• Software updates & maintenance\n• Remote monitoring & diagnostics\n\n💡 **Optional Add-ons (discussed upfront):**\n• Additional camera zones\n• Advanced analytics modules\n• Custom API integrations\n• Extended warranties\n• Priority support packages\n• Multi-location management\n\n🤝 **All costs discussed during consultation**\n📞 **No surprise charges ever**",
      actions: [
        { label: "Get Full Quote", page: "demo", icon: <DollarSign className="h-4 w-4" /> },
        { label: "Schedule Consultation", page: "contact", icon: <Phone className="h-4 w-4" /> }
      ],
      category: 'pricing'
    },

    'volume discount|multiple locations|enterprise pricing': {
      answer: "🏢 **Volume Discounts & Enterprise Pricing:**\n\n💰 **Multi-location Discounts:**\n• 10+ locations: **10% discount**\n• 25+ locations: **15% discount**\n• 50+ locations: **20% discount**\n• 100+ locations: **Custom enterprise pricing**\n\n🎯 **Enterprise Benefits:**\n• Dedicated account manager\n• Managed service packages\n• Custom deployment schedules\n• Bulk training programs\n• Centralized management dashboard\n• Priority technical support\n• Custom SLA agreements\n\n📈 **Additional Savings:**\n• Volume hardware discounts\n• Reduced per-location installation costs\n• Centralized support & maintenance",
      actions: [
        { label: "Enterprise Quote", page: "demo", icon: <DollarSign className="h-4 w-4" /> },
        { label: "Contact Sales Team", page: "contact", icon: <Users className="h-4 w-4" /> }
      ],
      category: 'pricing'
    },

    // Demo & POC - Comprehensive Details
    'demo|trial|poc|proof of concept|free trial|test': {
      answer: "🎯 **Demo Package Options:**\n\n🆓 **1-Day FREE Demo:**\n• Basic functionality test\n• Live data collection\n• No cost, basic setup\n• Site assessment included\n\n⭐ **15-Day POC (Most Popular) - ₹5,000:**\n• Complete hardware installation\n• Full analytics dashboard access\n• Performance evaluation & reports\n• Expert support throughout\n• Custom reporting available\n\n🚀 **30-Day Extended Trial - ₹10,000:**\n• Complete system evaluation\n• Advanced features access\n• Custom integrations testing\n• ROI calculation support\n• Priority technical support\n\n💡 **60% of POC costs adjustable in final procurement!**\n🔧 **All demos include removal at no extra cost**",
      actions: [
        { label: "Book Free Demo", page: "demo-packages", icon: <PlayCircle className="h-4 w-4" /> },
        { label: "Schedule 15-Day POC", page: "demo", icon: <Zap className="h-4 w-4" /> }
      ],
      category: 'demo'
    },

    // Technical Questions - Detailed FAQ Integration
    'technical requirements|installation|setup|requirements': {
      answer: "⚡ **Installation Requirements:**\n\n🔌 **Minimal Requirements:**\n• Power outlet (110-240V AC)\n• Internet connection (minimum 10 Mbps upload)\n• Mounting points for cameras\n• Basic network infrastructure\n\n🚀 **APC EdgeBox™ Setup:**\n• Plug-and-play design\n• Automatic configuration\n• Professional installation: 2-4 hours\n• No IT expertise required\n\n📱 **Connectivity Options:**\n• PoE cameras supported\n• WiFi connectivity available\n• Ethernet connections\n• Works with existing networks\n• 4G/5G backup available\n\n🛠️ **Installation includes:** Site survey, camera positioning, system configuration, testing, training",
      actions: [
        { label: "Schedule Site Survey", page: "demo", icon: <Users className="h-4 w-4" /> },
        { label: "Technical Details", page: "products", icon: <Settings className="h-4 w-4" /> }
      ],
      category: 'technical'
    },

    'existing cameras|integration|compatibility|camera support': {
      answer: "📹 **Camera Integration & Compatibility:**\n\n🔗 **APC Link Solution:**\n• Works with 200+ camera models\n• Major manufacturers supported (Axis, Hikvision, Dahua, Bosch, etc.)\n• ONVIF compliance preferred\n• IP cameras with RTSP streams\n\n✅ **Integration Process:**\n• Compatibility assessment during POC\n• Firmware update assistance\n• Network configuration support\n• Performance optimization\n\n⚠️ **Camera Requirements:**\n• Minimum 2MP resolution\n• H.264/H.265 encoding\n• Stable network connection\n• Proper positioning for counting\n\n🔍 **Limitations:**\n• Older analog cameras not supported\n• Some proprietary systems may have restrictions\n• Performance depends on existing camera quality",
      actions: [
        { label: "Camera Assessment", page: "demo", icon: <Settings className="h-4 w-4" /> },
        { label: "APC Link Details", page: "product-link", icon: <Camera className="h-4 w-4" /> }
      ],
      category: 'technical'
    },

    'data security|local processing|offline|connectivity': {
      answer: "🔒 **Data Security & Local Processing:**\n\n🏠 **Local Edge Processing:**\n• All AI processing on APC EdgeBox™\n• No video data transmitted externally\n• Real-time analysis & immediate discard\n• Only anonymous count data stored\n\n🛡️ **Security Features:**\n• Enterprise-grade encryption (AES-256)\n• Secure VPN connections\n• Role-based access controls\n• Multi-factor authentication\n• Audit logs & compliance reporting\n\n📶 **Offline Capability:**\n• Continues operating without internet\n• Local data storage up to 30 days\n• Automatic sync when connectivity resumes\n• SMS alerts for critical issues\n• Full functionality during outages\n\n🔐 **Data Protection:** GDPR compliant, ISO 27001 aligned",
      actions: [
        { label: "Security Documentation", page: "about", icon: <Shield className="h-4 w-4" /> },
        { label: "Technical Security", page: "products", icon: <Settings className="h-4 w-4" /> }
      ],
      category: 'technical'
    },

    'internet outage|offline mode|connectivity lost|network down': {
      answer: "📶 **Offline Operation & Connectivity:**\n\n🔋 **Offline Capability:**\n• APC EdgeBox™ continues full operation\n• Local data storage for up to 30 days\n• Real-time counting unaffected\n• Analytics dashboard accessible locally\n\n🔄 **Auto-Recovery Features:**\n• Automatic data sync when online\n• Buffered alert notifications\n• Seamless operation resumption\n• No data loss during outages\n\n📱 **Emergency Communications:**\n• SMS alerts for critical issues (if configured)\n• Local network access maintained\n• On-site dashboard functionality\n• Manual data export options\n\n⚡ **Reliability Features:**\n• UPS battery backup support\n• Redundant connectivity options\n• 4G/5G backup available\n• 99.9% uptime guarantee",
      actions: [
        { label: "Reliability Details", page: "products", icon: <Wifi className="h-4 w-4" /> },
        { label: "Technical Support", page: "contact", icon: <Settings className="h-4 w-4" /> }
      ],
      category: 'technical'
    },

    // Implementation & Support - Comprehensive Details
    'implementation|timeline|how long|deployment': {
      answer: "⏱️ **Implementation Timeline:**\n\n📋 **Standard Implementation (2-3 weeks):**\n• **Site Survey:** 1-2 days (requirements assessment)\n• **Equipment Delivery:** 3-5 days (shipping & logistics)\n• **Installation:** 1 day (professional setup)\n• **Configuration & Training:** 1 day (system setup & user training)\n• **Go-live & Optimization:** 1 week (fine-tuning & support)\n\n⚡ **Express Installation (48 hours):**\n• Available for urgent deployments\n• Expedited shipping & setup\n• Premium service charges apply\n\n🏢 **Enterprise Deployments:**\n• Phased rollout planning\n• Dedicated project management\n• Custom deployment schedules\n• Parallel location setup available",
      actions: [
        { label: "Schedule Implementation", page: "demo", icon: <Zap className="h-4 w-4" /> },
        { label: "Project Planning", page: "contact", icon: <Users className="h-4 w-4" /> }
      ],
      category: 'implementation'
    },

    'training|support|documentation|help': {
      answer: "🎓 **Training & Support Programs:**\n\n📚 **Comprehensive Training:**\n• **On-site Admin Training:** 4 hours with certified trainer\n• **User Manual & Documentation:** Complete system guides\n• **Video Tutorials:** Step-by-step online training\n• **Webinar Training Sessions:** Regular group training\n\n🤝 **Ongoing Support:**\n• **24/7 Technical Support:** Phone, email, chat\n• **Response Times:** Critical < 1 hour, General < 4 hours\n• **Monthly Optimization Reviews:** Performance analysis\n• **Software Updates:** Automatic with new features\n• **Remote Diagnostics:** Proactive monitoring\n\n📞 **Support Channels:**\n• Phone: +1-800-APC-HELP\n• Email: support@apcsolutions.com\n• Live Chat: Available 24/7\n• Remote assistance available",
      actions: [
        { label: "Contact Support", page: "contact", icon: <Phone className="h-4 w-4" /> },
        { label: "Training Schedule", page: "demo", icon: <Users className="h-4 w-4" /> }
      ],
      category: 'support'
    },

    'maintenance|updates|monitoring|ongoing service': {
      answer: "🔧 **Maintenance & Ongoing Service:**\n\n🔄 **Included Maintenance:**\n• **Automatic Software Updates:** Latest features & security\n• **Remote Monitoring:** 24/7 system health monitoring\n• **Preventive Maintenance:** Scheduled system checks\n• **Hardware Replacement:** Coverage for defective units\n• **Performance Optimization:** Regular system tuning\n\n📊 **Proactive Monitoring:**\n• System health dashboards\n• Automated alert notifications\n• Performance trend analysis\n• Predictive maintenance scheduling\n• Issue resolution before impact\n\n🛠️ **Service Level Agreements:**\n• 99.9% uptime guarantee\n• Response time commitments\n• Resolution time targets\n• Escalation procedures\n• Service credit policies",
      actions: [
        { label: "Service Details", page: "about", icon: <Settings className="h-4 w-4" /> },
        { label: "SLA Information", page: "contact", icon: <CheckCircle className="h-4 w-4" /> }
      ],
      category: 'support'
    },

    // ROI & Benefits - Detailed Analysis
    'roi|return on investment|benefits|savings|value': {
      answer: "💰 **ROI & Business Benefits:**\n\n📈 **Financial Returns:**\n• **Typical ROI: 300-500%** in year one\n• **Payback Period:** 6-12 months average\n• **Average Annual Savings:** $50,000-$2.3M (varies by size)\n\n💡 **Cost Savings:**\n• **Energy Costs:** 20-35% reduction through occupancy optimization\n• **Staff Efficiency:** 15-25% improvement in resource allocation\n• **Operational Costs:** 10-20% reduction through automation\n• **Maintenance Costs:** Predictive maintenance saves 15-30%\n\n📊 **Business Benefits:**\n• Enhanced customer satisfaction (20-40% increase)\n• Improved safety & compliance\n• Data-driven decision making\n• Competitive advantage through insights\n• Space utilization optimization",
      actions: [
        { label: "ROI Calculator", page: "demo", icon: <BarChart3 className="h-4 w-4" /> },
        { label: "Case Studies", page: "success-stories", icon: <CheckCircle className="h-4 w-4" /> }
      ],
      category: 'roi'
    },

    'customer experience|satisfaction|service improvement': {
      answer: "😊 **Customer Experience Enhancement:**\n\n⚡ **Direct Improvements:**\n• **Reduced Wait Times:** Queue optimization & management\n• **Optimal Staffing:** Right staff at peak times\n• **Better Space Utilization:** Comfortable environment maintenance\n• **Improved Safety:** Capacity management & crowd control\n• **Personalized Service:** Data-driven service delivery\n\n📊 **Measurable Results:**\n• 20-40% increase in customer satisfaction scores\n• 30-50% reduction in wait times\n• 25% improvement in service quality metrics\n• 15% increase in customer retention\n\n🎯 **Use Cases:**\n• Retail: Faster checkout, better shopping experience\n• Healthcare: Reduced waiting room overcrowding\n• Corporate: Optimized meeting room availability\n• Events: Enhanced safety & crowd management",
      actions: [
        { label: "Success Stories", page: "success-stories", icon: <Users className="h-4 w-4" /> },
        { label: "Industry Examples", page: "applications", icon: <CheckCircle className="h-4 w-4" /> }
      ],
      category: 'roi'
    },

    // Product Details - Comprehensive Information
    'products|solutions|core|flex|link|eventsense|comparison': {
      answer: "🛠️ **Complete APC Product Lineup:**\n\n⭐ **APC Core** - Premium Turnkey Solution\n• Complete package with high-end AI cameras\n• Up to 99% accuracy in optimal conditions\n• ₹60,000 one-time or ₹30,000 advance + ₹5,000/month\n• Best for high-traffic, precision-critical environments\n\n💼 **APC Flex** - Cost-Effective Solution\n• Budget-friendly cameras with smart analytics\n• Up to 95% accuracy, excellent value\n• ₹45,000 one-time or ₹22,500 advance + ₹4,000/month\n• Perfect for franchises & cost-conscious deployments\n\n🔗 **APC Link** - Retrofit Existing Cameras\n• Works with 200+ existing camera models\n• Maximum ROI from current camera investments\n• ₹35,000 one-time or ₹17,500 advance + ₹3,000/month\n• Ideal for locations with existing camera infrastructure\n\n🎪 **APC EventSense** - Portable Event Solution\n• Mobile, battery-powered for temporary deployments\n• ₹8,000/day rental (min 4-5 days)\n• Perfect for festivals, conferences, temporary events",
      actions: [
        { label: "Compare Products", page: "products", icon: <BarChart3 className="h-4 w-4" /> },
        { label: "Get Recommendation", page: "demo", icon: <Users className="h-4 w-4" /> }
      ],
      category: 'products'
    },

    // Rental & Events - Detailed Information
    'rental|rent|event|eventsense|daily rental|temporary': {
      answer: "🎪 **Rental & Event Solutions:**\n\n📅 **Daily Rental Rates:**\n• **APC Core/Flex/Link:** Minimum 3-4 days rental\n• **APC EventSense:** ₹8,000/day (minimum 4-5 days)\n• **Multi-day Discounts:** Available for longer rentals\n\n🛡️ **Security & Requirements:**\n• **Refundable Deposits:** ₹10,000-₹20,000 per unit\n• **30-day Advance Notice:** Required for EventSense\n• **Insurance Coverage:** Recommended for events\n\n✅ **Included Services:**\n• Professional installation & setup\n• On-site technical support during event\n• Real-time monitoring & alerts\n• Post-event analytics report\n• Equipment removal & cleanup\n\n⚠️ **Client Responsibilities:**\n• Power supply (110-240V)\n• Internet connectivity (minimum 10 Mbps)\n• Secure mounting locations\n• Site access for installation team",
      actions: [
        { label: "Get Rental Quote", page: "demo", icon: <DollarSign className="h-4 w-4" /> },
        { label: "EventSense Details", page: "product-eventsense", icon: <Users className="h-4 w-4" /> }
      ],
      category: 'rental'
    },

    // Contact & Support - Complete Information
    'contact|phone|email|support|help|assistance': {
      answer: "🤝 **24/7 Support & Contact Options:**\n\n📞 **Direct Contact:**\n• **Phone:** +1-800-APC-HELP (272-4357)\n• **Email:** support@apcsolutions.com\n• **WhatsApp:** +91-9876543210\n• **Live Chat:** Available on website 24/7\n\n⏰ **Response Time Commitments:**\n• **Critical Issues:** < 1 hour response\n• **General Support:** < 4 hours response\n• **Sales Inquiries:** < 2 hours response\n• **Technical Questions:** < 4 hours response\n\n🏢 **Office Locations:**\n• **Headquarters:** Bangalore, India\n• **Regional Offices:** Mumbai, Delhi, Chennai\n• **International:** Singapore, Dubai\n\n🎯 **Support Specializations:**\n• Technical troubleshooting\n• Implementation planning\n• ROI analysis & consultation\n• Custom integration support",
      actions: [
        { label: "Contact Expert", page: "contact", icon: <Phone className="h-4 w-4" /> },
        { label: "Schedule Call", page: "demo", icon: <Phone className="h-4 w-4" /> }
      ],
      category: 'support'
    }
  };

  // Enhanced quick suggestion buttons
  const quickSuggestions = [
    { text: "Pricing & Plans", icon: <DollarSign className="h-4 w-4" /> },
    { text: "Free Demo", icon: <PlayCircle className="h-4 w-4" /> },
    { text: "Technical Requirements", icon: <Settings className="h-4 w-4" /> },
    { text: "ROI & Benefits", icon: <BarChart3 className="h-4 w-4" /> },
    { text: "Product Comparison", icon: <Users className="h-4 w-4" /> },
    { text: "Contact Support", icon: <Phone className="h-4 w-4" /> }
  ];

  // Initialize with enhanced welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: "Hello! 👋 I'm your APC Solutions AI assistant with access to our complete knowledge base.\n\n🎯 **I can help you with:**\n• Pricing plans & quotes\n• Demo packages & POC options\n• Technical requirements & specifications\n• ROI analysis & business benefits\n• Implementation timelines\n• Privacy & compliance questions\n• Product comparisons\n• Industry applications\n\nWhat would you like to know about our people counting solutions?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'suggestion'
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Enhanced pattern matching for better responses
  const findBestMatch = (userInput: string): string | null => {
    const input = userInput.toLowerCase();
    
    // Create scoring system for better matches
    let bestMatch = null;
    let bestScore = 0;
    
    for (const [pattern, response] of Object.entries(knowledgeBase)) {
      const keywords = pattern.split('|');
      let score = 0;
      
      // Calculate match score
      keywords.forEach(keyword => {
        if (input.includes(keyword)) {
          score += keyword.length; // Longer matches get higher scores
        }
      });
      
      if (score > bestScore) {
        bestScore = score;
        bestMatch = pattern;
      }
    }
    
    return bestScore > 0 ? bestMatch : null;
  };

  // Handle sending messages
  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowSuggestions(false);

    // Simulate typing delay and find response
    setTimeout(() => {
      const matchedPattern = findBestMatch(messageText);
      let botResponse: Message;

      if (matchedPattern) {
        const response = knowledgeBase[matchedPattern];
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: response.answer,
          sender: 'bot',
          timestamp: new Date(),
          actions: response.actions?.map(action => ({
            label: action.label,
            action: () => {
              if (action.page) {
                onPageChange(action.page);
                setIsOpen(false);
              }
            },
            icon: action.icon
          }))
        };
      } else {
        // Enhanced default response with more options
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: "I'd be happy to help! While I don't have specific information about that query, I have comprehensive knowledge about:\n\n• **Pricing & Plans** - All pricing models, discounts, enterprise options\n• **Demo Packages** - Free trials, POC options, testing\n• **Technical Requirements** - Installation, compatibility, security\n• **Product Information** - Core, Flex, Link, EventSense details\n• **ROI & Benefits** - Business value, cost savings, case studies\n• **Implementation** - Timelines, training, support\n• **Privacy & Compliance** - GDPR, security, data protection\n\nYou can also connect with our expert team for personalized assistance!",
          sender: 'bot',
          timestamp: new Date(),
          type: 'escalation',
          actions: [
            {
              label: "Contact Expert",
              action: () => {
                onPageChange('contact');
                setIsOpen(false);
              },
              icon: <Phone className="h-4 w-4" />
            },
            {
              label: "View FAQ",
              action: () => {
                onPageChange('faq');
                setIsOpen(false);
              },
              icon: <HelpCircle className="h-4 w-4" />
            },
            {
              label: "Start Free Demo",
              action: () => {
                onPageChange('demo-packages');
                setIsOpen(false);
              },
              icon: <PlayCircle className="h-4 w-4" />
            }
          ]
        };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  // Handle quick suggestions
  const handleQuickSuggestion = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  // Reset conversation
  const resetConversation = () => {
    setMessages([]);
    setShowSuggestions(true);
    setInputValue('');
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
        >
          <MessageCircle className="h-6 w-6 text-white group-hover:animate-pulse" />
        </Button>
        <div className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 rounded-full animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${isMinimized ? 'w-80' : 'w-96'} transition-all duration-300`}>
      <Card className="shadow-2xl border-2 border-blue-500/20">
        {/* Header */}
        <CardHeader className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-white text-sm font-semibold">APC Assistant</CardTitle>
                <p className="text-blue-100 text-xs">AI-powered support with complete FAQ</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0 text-white hover:bg-gray-800/20"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={resetConversation}
                className="h-8 w-8 p-0 text-white hover:bg-gray-800/20"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 text-white hover:bg-gray-800/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0">
            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] ${message.sender === 'user' 
                    ? 'bg-primary text-white rounded-l-lg rounded-tr-lg' 
                    : 'bg-white text-gray-800 rounded-r-lg rounded-tl-lg shadow-sm border'} p-3`}>
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <Bot className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                      )}
                      <div className="whitespace-pre-line text-sm leading-relaxed">
                        {message.text}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    {message.actions && (
                      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-200">
                        {message.actions.map((action, index) => (
                          <Button
                            key={index}
                            size="sm"
                            onClick={action.action}
                            className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-200"
                          >
                            {action.icon}
                            <span className="ml-1">{action.label}</span>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-r-lg rounded-tl-lg shadow-sm border p-3 flex items-center gap-2">
                    <Bot className="h-4 w-4 text-blue-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Enhanced Quick Suggestions */}
              {showSuggestions && messages.length <= 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 text-center">Popular questions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickSuggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuickSuggestion(suggestion.text)}
                        className="text-xs flex items-center gap-1 border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        {suggestion.icon}
                        {suggestion.text}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about pricing, demos, technical info, ROI..."
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                />
                <Button 
                  size="sm"
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="px-3 bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Enhanced Quick Contact */}
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                <div className="text-xs text-gray-600">
                  Need expert help? 
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => {
                      onPageChange('contact');
                      setIsOpen(false);
                    }}
                    className="text-xs border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    Call Expert
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => {
                      onPageChange('faq');
                      setIsOpen(false);
                    }}
                    className="text-xs border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    <HelpCircle className="h-3 w-3 mr-1" />
                    View FAQ
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}