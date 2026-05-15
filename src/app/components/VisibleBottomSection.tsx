import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { 
  ChevronUp,
  ChevronDown,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Rocket,
  Users,
  Shield,
  Award,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  ExternalLink,
  Zap,
  Clock,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface VisibleBottomSectionProps {
  onPageChange: (page: string) => void;
}

export function VisibleBottomSection({ onPageChange }: VisibleBottomSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const quickActions = [
    {
      title: '15-Day Free POC',
      description: 'Start your proof of concept today',
      icon: Rocket,
      color: 'bg-primary',
      hoverColor: 'hover:bg-primary/90',
      action: () => onPageChange('demo'),
      badge: 'Most Popular'
    },
    {
      title: 'Expert Consultation',
      description: 'Talk to our solution architects',
      icon: Users,
      color: 'bg-accent',
      hoverColor: 'hover:bg-accent/90',
      action: () => window.open('https://calendly.com/apc-solutions', '_blank'),
      badge: 'Free'
    },
    {
      title: 'View All Solutions',
      description: 'Compare APC Core, Flex, Link & EventSense',
      icon: CheckCircle,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      action: () => onPageChange('products'),
      badge: null
    },
    {
      title: 'WhatsApp Support',
      description: 'Get instant help via WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      action: () => window.open('https://wa.me/18007262357?text=Hi! I\'m interested in APC people counting solutions.', '_blank'),
      badge: 'Online'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+1-800-APC-HELP',
      href: 'tel:+18002724357',
      available: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: 'info@apcsolutions.com',
      href: 'mailto:info@apcsolutions.com',
      available: '24/7 Response'
    },
    {
      icon: Calendar,
      label: 'Book Meeting',
      value: 'Schedule Call',
      href: 'https://calendly.com/apc-solutions',
      available: 'Available Slots'
    }
  ];

  const trustIndicators = [
    {
      icon: Shield,
      title: 'GDPR Compliant',
      description: 'Privacy-first design',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: 'ISO 27001 Certified',
      description: 'Enterprise security',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: '500+ Customers',
      description: 'Trusted worldwide',
      color: 'text-purple-600'
    },
    {
      icon: Star,
      title: '4.9/5 Rating',
      description: '150+ reviews',
      color: 'text-yellow-600'
    }
  ];

  const openWhatsAppChat = () => {
    window.open('https://wa.me/18007262357?text=Hi! I\'m interested in APC people counting solutions. Can you help me?', '_blank');
  };

  const openPhoneCall = () => {
    window.location.href = 'tel:+18002724357';
  };

  const isBusinessHours = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    return day >= 1 && day <= 5 && hour >= 9 && hour <= 18; // Monday-Friday 9AM-6PM EST
  };

  return (
    <>
      {/* Floating Action Section - Always Visible */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        {/* Quick Actions Bar */}
        <div className="bg-gradient-to-r from-primary via-blue-600 to-accent text-white">
          <div className="container-responsive py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {isBusinessHours() ? (
                    <>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm font-medium">Live Support Available</span>
                    </>
                  ) : (
                    <>
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">24/7 Chat Support</span>
                    </>
                  )}
                </div>
                <Separator orientation="vertical" className="h-4 bg-white/30" />
                <Badge className="bg-yellow-500 text-black animate-pulse">
                  15-Day Free Trial
                </Badge>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white hover:bg-white/10 flex items-center gap-2"
              >
                <span className="text-sm">Get Started</span>
                {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Expandable Action Panel */}
        {isExpanded && (
          <div className="bg-white border-t border-gray-100 animate-in slide-in-from-bottom duration-300">
            <div className="container-responsive py-6">
              
              {/* Primary Actions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {quickActions.map((action, index) => (
                  <Card 
                    key={index}
                    className="border-2 border-gray-100 hover:border-primary/30 transition-all duration-200 cursor-pointer group"
                    onClick={action.action}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${action.color} ${action.hoverColor} transition-colors group-hover:scale-105 transform duration-200`}>
                          <action.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900 text-sm">{action.title}</h3>
                            {action.badge && (
                              <Badge className="text-xs bg-primary/10 text-primary">
                                {action.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed">{action.description}</p>
                          <div className="flex items-center text-primary text-xs mt-2 group-hover:text-primary/80">
                            <span>Learn more</span>
                            <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {contactMethods.map((contact, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => contact.href.startsWith('http') ? window.open(contact.href, '_blank') : window.location.href = contact.href}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm text-gray-900">{contact.label}</div>
                      <div className="text-xs text-gray-600">{contact.value}</div>
                      <div className="text-xs text-gray-500">{contact.available}</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <indicator.icon className={`h-5 w-5 ${indicator.color}`} />
                    <div>
                      <div className="font-medium text-sm text-gray-900">{indicator.title}</div>
                      <div className="text-xs text-gray-600">{indicator.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Links */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Solutions</h4>
                  <div className="space-y-2">
                    {['APC Core', 'APC Flex', 'APC Link', 'APC EventSense'].map((product) => (
                      <button 
                        key={product}
                        onClick={() => onPageChange('products')}
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {product}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Industries</h4>
                  <div className="space-y-2">
                    {['Retail & Malls', 'Corporate Offices', 'Transportation', 'Healthcare'].map((industry) => (
                      <button 
                        key={industry}
                        onClick={() => onPageChange('applications')}
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Resources</h4>
                  <div className="space-y-2">
                    {['Case Studies', 'Blog Articles', 'Whitepapers', 'FAQ'].map((resource) => (
                      <button 
                        key={resource}
                        onClick={() => onPageChange(resource === 'Case Studies' ? 'insights' : resource === 'FAQ' ? 'faq' : 'insights')}
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {resource}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Company</h4>
                  <div className="space-y-2">
                    {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((page) => (
                      <button 
                        key={page}
                        onClick={() => onPageChange(page === 'About Us' ? 'about' : page === 'Contact' ? 'contact' : 'about')}
                        className="block text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Copyright and Social */}
              <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200 gap-4">
                <div className="text-sm text-gray-600">
                  © 2024 APC Solutions. All rights reserved. | Powered by APC EdgeBox™
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-3">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Buttons - Only when footer is collapsed */}
      {!isExpanded && (
        <div className="fixed bottom-20 right-4 z-40 flex flex-col gap-3">
          {/* WhatsApp Button */}
          <Button
            onClick={openWhatsAppChat}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center group"
            title="Chat on WhatsApp - Instant Response"
          >
            <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">!</span>
            </div>
          </Button>

          {/* Call Button - Only during business hours */}
          {isBusinessHours() && (
            <Button
              onClick={openPhoneCall}
              className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl flex items-center justify-center group"
              title="Call Now - Live Support Available"
            >
              <Phone className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            </Button>
          )}

          {/* Demo Button */}
          <Button
            onClick={() => onPageChange('demo')}
            className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-2xl flex items-center justify-center group"
            title="Start Free POC - 15 Days"
          >
            <Rocket className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            <Badge className="absolute -top-2 -left-8 bg-yellow-500 text-black text-xs animate-bounce">
              Free
            </Badge>
          </Button>
        </div>
      )}

      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-12" aria-hidden="true" />
    </>
  );
}