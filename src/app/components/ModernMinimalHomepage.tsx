import React, { useState } from 'react';
import { Users, BarChart3, Shield, Wifi, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { QuickSpecsButton, InlineSpecsIcon } from './QuickSpecsButton';

interface ModernMinimalHomepageProps {
  onPageChange: (page: string) => void;
}

export function ModernMinimalHomepage({ onPageChange }: ModernMinimalHomepageProps) {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [activeComparison, setActiveComparison] = useState<string | null>(null);

  // Feature data with small descriptions
  const features = [
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Real-Time Counting',
      description: 'AI-powered cameras provide 99% accurate people counting with instant analytics.',
      details: [
        { label: 'Accuracy', value: 'Up to 99%' },
        { label: 'Processing', value: 'Real-time edge' },
        { label: 'Latency', value: '< 100ms' },
        { label: 'Capacity', value: 'Unlimited concurrent' }
      ]
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights with heat maps, flow analysis, and occupancy trends.',
      details: [
        { label: 'Dashboards', value: 'Real-time & Historical' },
        { label: 'Reports', value: 'Automated & Custom' },
        { label: 'API', value: 'RESTful integration' },
        { label: 'Export', value: 'CSV, PDF, Excel' }
      ]
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Privacy Compliant',
      description: 'GDPR-compliant edge processing ensures complete privacy protection.',
      details: [
        { label: 'Processing', value: 'Edge-only option' },
        { label: 'Compliance', value: 'GDPR, CCPA ready' },
        { label: 'Storage', value: 'Local or encrypted cloud' },
        { label: 'Anonymization', value: 'No personal data stored' }
      ]
    }
  ];

  // Product comparison data
  const products = {
    core: {
      name: 'APC Core',
      price: '₹60,000',
      monthly: '₹5,000/mo',
      features: ['AI cameras included', 'EdgeBox™ controller', '24/7 support', 'Professional installation'],
      specs: [
        { label: 'Accuracy', value: '99%' },
        { label: 'Deployment', value: 'Turnkey solution' },
        { label: 'Support', value: '24/7 premium' },
        { label: 'Warranty', value: '18 months' }
      ]
    },
    flex: {
      name: 'APC Flex',
      price: '₹45,000',
      monthly: '₹4,000/mo',
      features: ['Budget-friendly cameras', 'Cloud processing', 'Business hours support', 'Self-installation kit'],
      specs: [
        { label: 'Accuracy', value: '95%' },
        { label: 'Deployment', value: 'Flexible options' },
        { label: 'Support', value: '16/5 business' },
        { label: 'Warranty', value: '12 months' }
      ]
    },
    link: {
      name: 'APC Link',
      price: '₹35,000',
      monthly: '₹3,000/mo',
      features: ['Works with existing cameras', 'ONVIF compatibility', 'Cloud-based processing', 'Quick setup'],
      specs: [
        { label: 'Accuracy', value: '90%' },
        { label: 'Deployment', value: 'Software only' },
        { label: 'Support', value: '12/5 business' },
        { label: 'Warranty', value: '12 months' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Viewport Contained */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-responsive relative z-10 text-center max-w-4xl">
          {/* Supporting Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
              <Users className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Accurate Real-Time
            <br />
            <span className="gradient-text">People Counting</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your space with AI-powered analytics. 99% accuracy, GDPR compliant, 
            instant insights for smarter business decisions.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => onPageChange('demo')}
              className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Request Demo
              <ArrowRight className="h-5 w-5" />
            </button>
            <QuickSpecsButton
              title="View Pricing"
              specs={[
                { label: 'Starting from', value: '₹35,000 one-time' },
                { label: 'Subscription', value: '₹3,000/month' },
                { label: 'Rental', value: '₹4,500/day' },
                { label: 'Free trial', value: '15 days' }
              ]}
              variant="info"
              className="bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 px-6 py-3 text-lg"
            />
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>99% Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>15-Day Free Trial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Viewport Contained */}
      <section className="min-h-screen bg-white flex items-center py-20">
        <div className="container-responsive">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose APC Solutions?
            </h2>
            <p className="text-lg text-gray-600">
              Advanced technology meets practical implementation for real business results.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setActiveFeature(activeFeature === index ? null : index)}
              >
                {/* Feature Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <InlineSpecsIcon
                    title={`${feature.title} Details`}
                    specs={feature.details}
                    variant="info"
                  />
                </div>

                {/* Feature Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Expandable Details */}
                {activeFeature === index && (
                  <div className="border-t border-gray-100 pt-4 mt-4 space-y-2 animate-in slide-in-from-top-2 duration-300">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">{detail.label}:</span>
                        <span className="text-xs text-gray-900 font-semibold">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Comparison Section - Viewport Contained */}
      <section className="min-h-screen bg-gray-50 flex items-center py-20">
        <div className="container-responsive">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Solution
            </h2>
            <p className="text-lg text-gray-600">
              Click on any product to see detailed specifications and features.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(products).map(([key, product]) => (
              <div
                key={key}
                className={`bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  activeComparison === key 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActiveComparison(activeComparison === key ? null : key)}
              >
                {/* Product Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <div className="text-sm text-gray-500">
                        Starting from
                      </div>
                    </div>
                    <InlineSpecsIcon
                      title={`${product.name} Specs`}
                      specs={product.specs}
                      variant="settings"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-600">
                      or {product.monthly}
                    </div>
                  </div>
                </div>

                {/* Product Features */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Specs */}
                  {activeComparison === key && (
                    <div className="border-t border-gray-100 pt-4 space-y-2 animate-in slide-in-from-top-2 duration-300">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Technical Specifications</h4>
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-xs font-medium text-gray-500">{spec.label}:</span>
                          <span className="text-xs text-gray-900 font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onPageChange(`product-${key}`);
                    }}
                    className="w-full mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <button
              onClick={() => onPageChange('products')}
              className="btn-primary px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              Compare All Products
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section - Compact */}
      <section className="bg-white py-16">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with our experts for a personalized consultation and live demo.
            </p>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                <p className="text-sm text-gray-600 mb-2">+1-800-APC-HELP</p>
                <QuickSpecsButton
                  title="Business Hours"
                  specs={[
                    { label: 'Monday-Friday', value: '9:00 AM - 6:00 PM' },
                    { label: 'Saturday', value: 'By Appointment' },
                    { label: 'Sunday', value: 'Closed' },
                    { label: 'Emergency', value: '24/7 Available' }
                  ]}
                  variant="time"
                  size="sm"
                />
              </div>

              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                <p className="text-sm text-gray-600 mb-2">info@apcsolutions.com</p>
                <span className="text-xs text-gray-500">Response within 2 hours</span>
              </div>

              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                <p className="text-sm text-gray-600 mb-2">Global Offices</p>
                <button
                  onClick={() => onPageChange('contact')}
                  className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Locations
                </button>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onPageChange('demo')}
                className="btn-primary px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onPageChange('contact')}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}