import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' }, // Complete product lineup with specs & Smart Analyzer
    { id: 'applications', label: 'Industry' }, // Industry applications & enterprise  
    { id: 'about', label: 'About Us' }, // About APC Solutions
    { id: 'insights', label: 'Insights' }, // Industry insights & expert analysis
    { id: 'success-stories', label: 'Success Stories' }, // Case studies & customer testimonials
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 safe-top">
      <div className="container-responsive">
        <div className="flex justify-between items-center" style={{ minHeight: 'var(--nav-height)' }}>
          {/* Logo */}
          <div className="flex-shrink-0 touch-target">
            <Logo 
              size="sm"
              onClick={() => onPageChange('home')}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`touch-target px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    currentPage === item.id
                      ? 'text-primary bg-primary/10 border-b-2 border-primary'
                      : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Book Demo CTA Button - Desktop */}
            <Button
              onClick={() => onPageChange('demo')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Demo
            </Button>
          </div>



          {/* Tablet Navigation (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            <Button
              onClick={() => onPageChange('demo')}
              size="sm"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book Demo
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="touch-target p-2 text-gray-600 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={() => onPageChange('demo')}
              size="sm"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium text-xs px-3 py-2 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Demo
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="touch-target p-2 text-gray-600 hover:text-primary rounded-lg hover:bg-gray-50 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
            <div className="container-responsive py-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`touch-target block w-full px-4 py-3 text-left font-medium transition-all duration-200 rounded-lg ${
                      currentPage === item.id
                        ? 'text-primary bg-primary/10 border-l-4 border-primary'
                        : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Book Demo Button in Mobile Menu */}
                <div className="pt-2 mt-4 border-t border-gray-200">
                  <Button
                    onClick={() => {
                      onPageChange('demo');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}