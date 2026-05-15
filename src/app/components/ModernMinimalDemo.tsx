import React, { useState } from 'react';
import { Users, BarChart3, Shield, Smartphone, Clock, CheckCircle, ArrowRight, Star, Zap, Globe } from 'lucide-react';

export function ModernMinimalDemo() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="bg-white">
      {/* Demo Navigation */}
      <nav className="nav-minimal sticky top-0 z-50">
        <div className="container-compact">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-gray-900">Modern Minimal Demo</div>
            <div className="flex items-center gap-4">
              <button className="btn-minimal btn-secondary-minimal">Documentation</button>
              <button className="btn-minimal btn-primary-minimal">Get Started</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Viewport Contained */}
      <section className="section-viewport gradient-minimal">
        <div className="container-compact">
          <div className="text-center max-w-4xl mx-auto">
            {/* Small Icon */}
            <div className="flex justify-center mb-6">
              <div className="icon-container-md bg-professional-blue">
                <Users className="h-5 w-5 text-professional-blue" />
              </div>
            </div>

            {/* Headline - Modern Typography */}
            <h1 className="heading-responsive-minimal font-bold text-gray-900 mb-6 leading-tight">
              Modern Minimal Design
              <br />
              <span className="gradient-text">System Demo</span>
            </h1>

            {/* Compact Subheading */}
            <p className="text-responsive-minimal text-gray-600 mb-8 max-w-2xl mx-auto">
              Demonstrating viewport-contained sections, compact navigation, 
              and click-controlled interactions with elegant 12-14px typography.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="btn-minimal btn-primary-minimal btn-minimal-lg">
                View Components
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="btn-minimal btn-secondary-minimal btn-minimal-lg">
                Design System
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="trust-indicator">
                <CheckCircle className="h-3 w-3" />
                <span>Viewport Contained</span>
              </div>
              <div className="trust-indicator">
                <CheckCircle className="h-3 w-3" />
                <span>No Auto-Sliders</span>
              </div>
              <div className="trust-indicator">
                <CheckCircle className="h-3 w-3" />
                <span>14px Typography</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Section - Viewport Contained */}
      <section className="section-viewport bg-white">
        <div className="container-compact">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Components</h2>
            <p className="text-compact text-gray-600 max-w-2xl mx-auto">
              Click on any component to see detailed specifications and interactions.
            </p>
          </div>

          {/* Component Grid */}
          <div className="grid-minimal-3 max-w-6xl mx-auto">
            {/* Card Component */}
            <div
              className={`card-minimal clickable-card ${activeCard === 0 ? 'active' : ''}`}
              onClick={() => setActiveCard(activeCard === 0 ? null : 0)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="icon-container-sm bg-professional-blue">
                    <BarChart3 className="h-4 w-4 text-professional-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Minimal Cards</h3>
                </div>
                <div className="feature-highlight">New</div>
              </div>
              
              <p className="text-compact text-gray-600 mb-4">
                Clean card design with hover effects and click interactions.
              </p>

              {activeCard === 0 && (
                <div className="expandable-content expanded border-t border-gray-100 pt-4">
                  <div className="space-compact">
                    <div className="flex justify-between text-compact-sm">
                      <span className="text-gray-500">Border radius:</span>
                      <span className="font-medium">0.75rem</span>
                    </div>
                    <div className="flex justify-between text-compact-sm">
                      <span className="text-gray-500">Padding:</span>
                      <span className="font-medium">1.5rem</span>
                    </div>
                    <div className="flex justify-between text-compact-sm">
                      <span className="text-gray-500">Hover effect:</span>
                      <span className="font-medium">translateY(-1px)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Button Component */}
            <div
              className={`card-minimal clickable-card ${activeCard === 1 ? 'active' : ''}`}
              onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="icon-container-sm bg-professional-green">
                    <Zap className="h-4 w-4 text-professional-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Modern Buttons</h3>
                </div>
              </div>
              
              <p className="text-compact text-gray-600 mb-4">
                Gradient buttons with subtle animations and proper touch targets.
              </p>

              <div className="flex gap-2 mb-4">
                <button className="btn-minimal btn-primary-minimal btn-minimal-sm">Primary</button>
                <button className="btn-minimal btn-secondary-minimal btn-minimal-sm">Secondary</button>
              </div>

              {activeCard === 1 && (
                <div className="expandable-content expanded border-t border-gray-100 pt-4">
                  <div className="space-compact">
                    <div className="flex justify-between text-compact-sm">
                      <span className="text-gray-500">Min height:</span>
                      <span className="font-medium">44px (touch target)</span>
                    </div>
                    <div className="flex justify-between text-compact-sm">
                      <span className="text-gray-500">Border radius:</span>
                      <span className="font-medium">0.5rem</span>
                    </div>
                    <div className="flex justify-between text-compact-sm">
                      <span className="text-gray-500">Animation:</span>
                      <span className="font-medium">0.2s ease</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Typography Component */}
            <div
              className={`card-minimal clickable-card ${activeCard === 2 ? 'active' : ''}`}
              onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="icon-container-sm bg-professional-gray">
                    <Globe className="h-4 w-4 text-professional-gray" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Typography</h3>
                </div>
              </div>
              
              <p className="text-compact text-gray-600 mb-4">
                Small, elegant fonts optimized for readability and minimal design.
              </p>

              <div className="space-compact">
                <div className="text-compact-xs text-gray-500">11px - Compact XS</div>
                <div className="text-compact-sm text-gray-600">12px - Compact SM</div>
                <div className="text-compact text-gray-700">14px - Compact Default</div>
              </div>

              {activeCard === 2 && (
                <div className="expandable-content expanded border-t border-gray-100 pt-4 mt-4">
                  <div className="space-compact">
                    <div className="flex justify-between text-compact-sm">
                      <span className="text-gray-500">Body text:</span>
                      <span className="font-medium">14px (0.875rem)</span>
                    </div>
                    <div className="flex justify-between text-compact-sm">
                      <span className="text-gray-500">Small text:</span>
                      <span className="font-medium">12px (0.75rem)</span>
                    </div>
                    <div className="flex justify-between text-compact-sm">
                      <span className="text-gray-500">Line height:</span>
                      <span className="font-medium">1.4-1.6</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Section - Viewport Contained */}
      <section className="section-viewport bg-gray-50">
        <div className="container-compact">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Click-Controlled Interactions</h2>
            <p className="text-compact text-gray-600 max-w-2xl mx-auto">
              No auto-sliders or automatic animations. All content is revealed through user interaction.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 border border-gray-200">
                {['features', 'specs', 'pricing'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 capitalize ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              {activeTab === 'features' && (
                <div className="grid-minimal-3">
                  <div className="text-center">
                    <div className="icon-container-lg bg-blue-100 mx-auto mb-4">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">User-Centric</h3>
                    <p className="text-compact text-gray-600">
                      Every interaction is intentional and user-controlled.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="icon-container-lg bg-green-100 mx-auto mb-4">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Accessible</h3>
                    <p className="text-compact text-gray-600">
                      WCAG compliant with keyboard navigation support.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="icon-container-lg bg-purple-100 mx-auto mb-4">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fast</h3>
                    <p className="text-compact text-gray-600">
                      Optimized for performance and quick loading times.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="space-comfortable">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Typography</h4>
                      <div className="space-compact text-compact">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Body text:</span>
                          <span className="font-medium">14px (0.875rem)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Small text:</span>
                          <span className="font-medium">12px (0.75rem)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Headings:</span>
                          <span className="font-medium">Responsive scale</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Spacing</h4>
                      <div className="space-compact text-compact">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Card padding:</span>
                          <span className="font-medium">1.5rem (24px)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Grid gap:</span>
                          <span className="font-medium">2rem (32px)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Section spacing:</span>
                          <span className="font-medium">Viewport height</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'pricing' && (
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Implementation Options</h3>
                  <div className="grid-minimal-3">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Starter</h4>
                      <div className="text-2xl font-bold text-blue-600 mb-4">Free</div>
                      <p className="text-compact text-gray-600">
                        Basic components and minimal styling for simple projects.
                      </p>
                    </div>
                    <div className="border-2 border-blue-500 rounded-lg p-6 relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-3 py-1 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Professional</h4>
                      <div className="text-2xl font-bold text-blue-600 mb-4">$49</div>
                      <p className="text-compact text-gray-600">
                        Complete design system with advanced components and utilities.
                      </p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Enterprise</h4>
                      <div className="text-2xl font-bold text-blue-600 mb-4">Custom</div>
                      <p className="text-compact text-gray-600">
                        Custom implementation with consultation and ongoing support.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-compact">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Modern Minimal Design</h3>
            <p className="text-compact text-gray-300 mb-8 max-w-2xl mx-auto">
              A comprehensive design system built for modern web applications with 
              viewport-contained sections and elegant user interactions.
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn-minimal btn-primary-minimal">
                Get Started
              </button>
              <button className="btn-minimal bg-gray-700 text-white hover:bg-gray-600">
                Documentation
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}