import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Phone, 
  Mail,
  ExternalLink,
  Clock
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

interface ChatSupportProps {
  onPageChange: (page: string) => void;
}

export function ChatSupport({ onPageChange }: ChatSupportProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hello! I'm the APC Solutions assistant. How can I help you with people counting solutions today?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        "Tell me about APC Core solution",
        "What's the pricing for APC Flex?",
        "I need a demo",
        "Compare all solutions"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const faqData = [
    {
      keywords: ['pricing', 'cost', 'price', 'how much', 'expensive'],
      response: "Our APC solutions start from:\n\n• APC Flex: From $799/month (cost-efficient)\n• APC Link: From $599/month (use existing cameras)\n• APC Core: From $1,299/month (complete solution)\n• APC EventSense: From $199/day (rental)\n\nAll include APC EdgeBox™ and Smart Analytics Platform. Would you like a detailed quote?",
      suggestions: ["Get detailed quote", "Start free POC", "Compare solutions", "Book consultation"]
    },
    {
      keywords: ['demo', 'trial', 'test', 'poc', 'try'],
      response: "Great! We offer three POC options:\n\n🆓 15-Day Free Live POC - Ready-to-use solution at your location\n🆓 30-Day Extended POC - Comprehensive analytics evaluation\n💰 Custom POC - Tailored for specific requirements\n\nWhich would work best for you?",
      suggestions: ["Start 15-day POC", "Learn about 30-day POC", "Discuss custom POC", "Talk to sales"]
    },
    {
      keywords: ['apc core', 'core solution', 'complete solution', 'turnkey'],
      response: "APC Core is our most popular complete solution:\n\n✅ AI Camera + APC EdgeBox™ + Analytics Platform\n✅ Turnkey installation & 24/7 support\n✅ 99%+ accuracy real-time counting\n✅ Advanced heatmaps & zone analytics\n✅ Staff optimization alerts\n\nPerfect for retail chains, malls, and offices wanting hassle-free deployment.",
      suggestions: ["Start APC Core POC", "See case studies", "Compare with other solutions", "Get pricing"]
    },
    {
      keywords: ['apc flex', 'flex solution', 'budget', 'cost efficient', 'economical'],
      response: "APC Flex is our cost-efficient solution:\n\n💰 Basic Camera + APC EdgeBox™ + Analytics Platform\n💰 Advanced analytics without premium cost\n💰 Scalable for multi-location sites\n💰 95%+ counting accuracy\n\nEconomical without compromising intelligence - perfect for cost-conscious clients.",
      suggestions: ["Start APC Flex POC", "Compare with APC Core", "Multi-location pricing", "Schedule demo"]
    },
    {
      keywords: ['apc link', 'link solution', 'existing cameras', 'retrofit', 'current cameras'],
      response: "APC Link leverages your existing infrastructure:\n\n🔗 Works with your current IP/CCTV cameras\n🔗 APC EdgeBox™ + Smart Analytics Platform\n🔗 Maximum ROI - no new camera costs\n🔗 API integration with existing systems\n\nPerfect for organizations wanting to upgrade existing cameras with AI.",
      suggestions: ["Check camera compatibility", "Start APC Link POC", "API integration info", "ROI calculator"]
    },
    {
      keywords: ['apc eventsense', 'event', 'rental', 'temporary', 'festival', 'concert'],
      response: "APC EventSense is perfect for temporary deployments:\n\n🎪 Portable APC EdgeBox™ + Camera Kit\n🎪 Rapid setup (same-day possible)\n🎪 Live crowd monitoring dashboards\n🎪 Pay only for duration needed\n\nIdeal for concerts, festivals, exhibitions, and events requiring crowd safety monitoring.",
      suggestions: ["Get rental quote", "Event planning consultation", "Crowd safety features", "Setup timeline"]
    },
    {
      keywords: ['deployment', 'localview', 'cloudSync', 'smartconnect', 'connectivity'],
      response: "We offer three deployment options:\n\n🏢 LocalView: On-premise processing, no internet needed\n☁️ CloudSync: Centralized cloud analytics (recommended)\n📱 SmartConnect: Mobile access with SIM + redundancy\n\nEach works with any solution package. What's your connectivity preference?",
      suggestions: ["Learn about LocalView", "CloudSync benefits", "SmartConnect features", "Help me choose"]
    },
    {
      keywords: ['accuracy', 'precision', 'reliable', 'how accurate'],
      response: "Our accuracy rates are industry-leading:\n\n🎯 APC Core: 99%+ accuracy\n🎯 APC Flex: 95%+ accuracy\n🎯 APC Link: 95%+ accuracy (depends on camera quality)\n🎯 APC EventSense: 98%+ accuracy\n\nAll powered by APC EdgeBox™ with advanced AI algorithms and edge computing.",
      suggestions: ["See accuracy case studies", "Technical specifications", "Start POC to verify", "Compare with competitors"]
    },
    {
      keywords: ['industries', 'retail', 'mall', 'office', 'transport', 'healthcare'],
      response: "APC solutions work across industries:\n\n🏪 Retail: Queue optimization, conversion tracking\n🏢 Offices: Space utilization, HVAC optimization\n🚇 Transit: Passenger flow, security compliance\n🏥 Healthcare: Patient flow, capacity management\n🎯 Events: Crowd safety, compliance monitoring",
      suggestions: ["Retail case studies", "Office solutions", "Transit applications", "Healthcare compliance"]
    },
    {
      keywords: ['support', 'help', 'contact', 'talk to human', 'sales'],
      response: "I'd be happy to connect you with our team:\n\n📞 Call: +1-800-APC-HELP\n📧 Email: info@apcsolutions.com\n💬 WhatsApp: +1-800-726-2357\n📅 Book a consultation: Schedule a call\n\nOur sales engineers are available Mon-Fri 9AM-6PM EST.",
      suggestions: ["Book consultation call", "Start WhatsApp chat", "Request callback", "Send email inquiry"]
    },
    {
      keywords: ['privacy', 'gdpr', 'data protection', 'security'],
      response: "Privacy and security are our top priorities:\n\n🔒 Local processing on APC EdgeBox™\n🔒 GDPR compliant by design\n🔒 No personal data collection\n🔒 Hardware encryption\n🔒 Secure boot process\n\nYour data stays private and secure.",
      suggestions: ["Privacy documentation", "GDPR compliance cert", "Security whitepaper", "Data processing info"]
    }
  ];

  const quickActions = [
    { text: "Start Free POC", action: () => onPageChange('demo') },
    { text: "View Solutions", action: () => onPageChange('products') },
    { text: "See Case Studies", action: () => onPageChange('case-studies') },
    { text: "Book Consultation", action: () => window.open('https://calendly.com/apc-solutions', '_blank') }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (userMessage: string): { response: string; suggestions: string[] } => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const faq of faqData) {
      if (faq.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return {
          response: faq.response,
          suggestions: faq.suggestions || []
        };
      }
    }

    // Default response
    return {
      response: "I'd be happy to help! Here are some common topics:\n\n• Solution pricing and packages\n• Free POC demos\n• Technical specifications\n• Industry applications\n• Privacy and security\n\nOr feel free to ask me anything specific about APC solutions!",
      suggestions: [
        "Tell me about pricing",
        "I want a demo",
        "Compare all solutions",
        "Talk to sales team"
      ]
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const { response, suggestions } = findResponse(inputValue);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
        suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    handleSendMessage();
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/18007262357?text=Hi! I\'m interested in APC people counting solutions.', '_blank');
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <Button
          onClick={openWhatsApp}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
        
        {/* Chat Button */}
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg flex items-center justify-center relative"
          title="Open Chat Support"
        >
          <MessageCircle className="h-6 w-6 text-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <Card className="shadow-2xl border-0">
        <CardHeader className="bg-primary text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-lg">APC Assistant</CardTitle>
                <div className="flex items-center gap-2 text-sm text-blue-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Online • Instant replies
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Quick Actions */}
          <div className="p-4 border-b bg-secondary/50">
            <p className="text-sm text-muted-foreground mb-3">Quick actions:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={action.action}
                  className="text-xs h-8"
                >
                  {action.text}
                </Button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="h-80 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' ? 'bg-primary text-white' : 'bg-secondary text-primary'
                    }`}>
                      {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={`rounded-lg p-3 ${
                      message.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-secondary text-foreground'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      {message.suggestions && (
                        <div className="mt-3 space-y-2">
                          {message.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="text-xs h-7 w-full justify-start bg-white/50 hover:bg-white"
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-secondary text-primary flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-secondary rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about APC solutions..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="sm"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
              <span>Powered by APC AI Assistant</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={openWhatsApp}
                className="h-6 text-xs text-green-600 hover:text-green-700"
              >
                <MessageCircle className="h-3 w-3 mr-1" />
                WhatsApp
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}