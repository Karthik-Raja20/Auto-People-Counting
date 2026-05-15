import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

interface MinimalNavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function MinimalNavigation({ currentPage, onPageChange }: MinimalNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when page changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPage]);

  // Navigation items with minimal structure
  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Products', page: 'products' },
    { name: 'Applications', page: 'applications' },
    { name: 'Insights', page: 'insights' },
    { name: 'About', page: 'about' },
    { name: 'Contact', page: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Compact */}
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8">
              <Logo />
            </div>
            <span className="text-lg font-bold text-gray-900 hidden sm:block">
              APC
            </span>
          </button>

          {/* Desktop Navigation - Minimal */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onPageChange(item.page)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  currentPage === item.page
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button - Compact */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onPageChange('demo')}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Free Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => onPageChange(item.page)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                    currentPage === item.page
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 px-4 border-t border-gray-100 mt-4">
                <button
                  onClick={() => onPageChange('demo')}
                  className="w-full px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Start Free Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Sticky navigation variant for pages that need different behavior
export function StickyMinimalNavigation({ currentPage, onPageChange }: MinimalNavigationProps) {
  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-14">
          {/* Compact Logo */}
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-6 h-6">
              <Logo />
            </div>
            <span className="text-base font-bold text-gray-900">
              APC Solutions
            </span>
          </button>

          {/* Breadcrumb-style navigation for internal pages */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <button
              onClick={() => onPageChange('home')}
              className="hover:text-gray-700 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-gray-900 font-medium capitalize">
              {currentPage.replace('-', ' ')}
            </span>
          </div>

          {/* Compact actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPageChange('demo')}
              className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Demo
            </button>
            <button
              onClick={() => onPageChange('contact')}
              className="px-3 py-1.5 border border-gray-300 text-gray-700 text-xs font-medium rounded hover:border-gray-400 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}