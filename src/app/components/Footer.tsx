import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Youtube,
  Shield,
  Award,
  Users
} from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const companyLinks = [
    { name: 'About Us', href: '#', onClick: () => onPageChange('about') },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' }
  ];

  const productLinks = [
    { name: 'APC Core', href: '#', onClick: () => onPageChange('products') },
    { name: 'APC Flex', href: '#', onClick: () => onPageChange('products') },
    { name: 'APC Link', href: '#', onClick: () => onPageChange('products') },
    { name: 'APC EventSense', href: '#', onClick: () => onPageChange('products') },
    { name: 'APC EdgeBox™', href: '#', onClick: () => onPageChange('products') }
  ];

  const solutionsLinks = [
    { name: 'Retail & Malls', href: '#', onClick: () => onPageChange('applications') },
    { name: 'Corporate Offices', href: '#', onClick: () => onPageChange('applications') },
    { name: 'Transportation', href: '#', onClick: () => onPageChange('applications') },
    { name: 'Events & Venues', href: '#', onClick: () => onPageChange('applications') },
    { name: 'All Applications', href: '#', onClick: () => onPageChange('applications') }
  ];

  const resourceLinks = [
    { name: 'Whitepapers', href: '#', onClick: () => onPageChange('insights') },
    { name: 'Blog Articles', href: '#', onClick: () => onPageChange('insights') },
    { name: 'Video Library', href: '#', onClick: () => onPageChange('insights') },
    { name: 'All Insights', href: '#', onClick: () => onPageChange('insights') }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#', onClick: () => onPageChange('faq') },
    { name: 'Technical Support', href: 'tel:+18002724357' },
    { name: 'WhatsApp Chat', href: 'https://wa.me/18007262357' },
    { name: 'Schedule Call', href: 'https://calendly.com/apc-solutions' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">APC Solutions</h3>
                <p className="text-gray-400 mb-4">
                  Powered by APC EdgeBox™ — the ultra-compact AI gateway transforming spaces with smart counting solutions.
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">
                    123 Tech Boulevard, NYC 10001
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <a href="tel:+18002724357" className="text-sm text-gray-400 hover:text-white transition-colors">
                    +1-800-APC-HELP
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a href="mailto:info@apcsolutions.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                    info@apcsolutions.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">APC Solutions</h4>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={link.onClick || (() => {})}
                      className="text-gray-400 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div>
              <h4 className="font-semibold mb-4">Applications</h4>
              <ul className="space-y-2">
                {solutionsLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={link.onClick || (() => {})}
                      className="text-gray-400 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insights */}
            <div>
              <h4 className="font-semibold mb-4">Insights</h4>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={link.onClick || (() => {})}
                      className="text-gray-400 hover:text-white transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <ul className="space-y-2 mb-6">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="text-gray-400 hover:text-white transition-colors text-sm text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a 
                        href={link.href}
                        target={link.href?.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href?.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div>
                <h5 className="font-medium mb-3">Stay Updated</h5>
                <div className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter email"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm"
                  />
                  <Button variant="secondary" size="sm">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Weekly insights & updates
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Trust Indicators */}
        <div className="py-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Shield className="h-6 w-6 text-accent" />
              <div className="text-left">
                <div className="font-semibold text-sm">GDPR Compliant</div>
                <div className="text-xs text-gray-400">Privacy-first design</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Award className="h-6 w-6 text-accent" />
              <div className="text-left">
                <div className="font-semibold text-sm">ISO 27001 Certified</div>
                <div className="text-xs text-gray-400">Enterprise security</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="h-6 w-6 text-accent" />
              <div className="text-left">
                <div className="font-semibold text-sm">500+ Customers</div>
                <div className="text-xs text-gray-400">Trusted worldwide</div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Copyright */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 APC Solutions. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}