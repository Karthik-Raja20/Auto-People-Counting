import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ComprehensivePricing } from './ComprehensivePricingImproved';
import { InteractiveFeatureShowcase } from './InteractiveFeatureShowcase';
import { 
  CheckCircle, 
  Star,
  Users,
  Zap,
  Shield,
  Eye,
  BarChart3,
  Clock,
  DollarSign,
  Camera,
  Cpu,
  Wifi,
  Cloud,
  Target,
  TrendingUp,
  Award,
  Lightbulb,
  MessageCircle,
  PlayCircle,
  Download,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  Mail,
  Calendar,
  Settings,
  Database,
  Lock,
  Smartphone,
  Monitor,
  Layers,
  Activity,
  RefreshCw,
  AlertCircle,
  Globe,
  Building,
  ShoppingCart,
  Plane,
  Music,
  Headphones,
  Package,
  Wrench,
  Box,
  Sparkles
} from 'lucide-react';

interface ProductDetailProps {
  onPageChange: (page: string) => void;
  productData: any;
  keyFeatures: any[];
  technicalSpecs: any;
  useCases: any[];
  implementationProcess: any[];
  testimonials: any[];
  faqData: any[];
  productSolutions: any[];
}

export function EnhancedProductDetail({
  onPageChange,
  productData,
  keyFeatures,
  technicalSpecs,
  useCases,
  implementationProcess,
  testimonials,
  faqData,
  productSolutions
}: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFAQ, setOpenFAQ] = useState<string[]>(['faq-1', 'faq-2', 'faq-3']);
  const [activeSpecCategory, setActiveSpecCategory] = useState('hardware');

  const toggleFAQ = (id: string) => {
    setOpenFAQ(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Convert keyFeatures to interactive format
  const interactiveFeatures = keyFeatures.map((feature, index) => ({
    id: `feature-${index}`,
    icon: feature.icon,
    title: feature.title,
    subtitle: feature.description,
    description: `This feature provides comprehensive capabilities that enhance your ${productData.name} system performance and deliver exceptional value for your business operations.`,
    keyPoints: feature.details.slice(0, 4), // First 4 as key points
    technicalDetails: feature.details.length > 4 ? feature.details.slice(4) : [
      `Seamlessly integrated with ${productData.name} platform`,
      `Optimized for real-time performance and accuracy`,
      `Enterprise-grade reliability and security standards`,
      `Professional installation and configuration included`
    ],
    benefits: [
      `Improved operational efficiency and cost reduction`,
      `Enhanced data accuracy and decision-making capabilities`,
      `Scalable solution that grows with your business needs`,
      `Comprehensive support and maintenance coverage`
    ],
    badge: index === 0 ? 'Core' : index === 1 ? 'Premium' : undefined,
    badgeColor: index === 0 ? 'bg-primary' : index === 1 ? 'bg-accent' : undefined
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-blue-50 to-accent/10 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge className={`${productData.badgeColor} text-white px-4 py-2`}>
                  {productData.badge}
                </Badge>
                <Badge variant="outline" className="border-primary text-primary">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  4.9/5 Rating
                </Badge>
              </div>
              
              <h1 className="mb-4 text-gray-900">{productData.name}</h1>
              <p className="text-xl text-primary font-semibold mb-4">{productData.tagline}</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{productData.description}</p>
              
              {/* Enhanced Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center border border-gray-200 hover:border-primary/20 transition-colors">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{productData.accuracy}</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center border border-gray-200 hover:border-accent/20 transition-colors">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent">{productData.setupTime}</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center border border-gray-200 hover:border-green-300 transition-colors">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">{productData.roi}</div>
                  <div className="text-sm text-gray-600">ROI</div>
                </div>
                <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{productData.price}</div>
                  <div className="text-sm text-gray-600">Starting Price</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => onPageChange('demo')}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                >
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Start Free POC
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Datasheet
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg"
                  onClick={() => onPageChange('contact')}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Talk to Expert
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt={productData.hero?.image || 'Product Image'}
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Enhanced Floating Feature Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-200 max-w-xs backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-600">{productData.accuracy} Accuracy</div>
                    <div className="text-sm text-gray-600">Industry Leading</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-200 max-w-xs backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-blue-600">{productData.setupTime} Setup</div>
                    <div className="text-sm text-gray-600">Plug & Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content with Better Tabs */}
      <section className="py-16 lg:py-20">
        <div className="container-responsive">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Enhanced Tab Navigation */}
            <div className="relative mb-12">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 bg-gray-100 rounded-xl p-1 h-auto">
                <TabsTrigger 
                  value="overview"
                  className="flex flex-col items-center gap-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200"
                >
                  <Package className="h-5 w-5" />
                  <span className="text-sm font-medium">Overview</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="features"
                  className="flex flex-col items-center gap-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200"
                >
                  <Sparkles className="h-5 w-5" />
                  <span className="text-sm font-medium">Features</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="specifications"
                  className="flex flex-col items-center gap-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200"
                >
                  <Settings className="h-5 w-5" />
                  <span className="text-sm font-medium">Specs</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="use-cases"
                  className="flex flex-col items-center gap-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200"
                >
                  <Building className="h-5 w-5" />
                  <span className="text-sm font-medium">Use Cases</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="implementation"
                  className="flex flex-col items-center gap-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200"
                >
                  <Wrench className="h-5 w-5" />
                  <span className="text-sm font-medium">Setup</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="faq"
                  className="flex flex-col items-center gap-2 py-4 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-200"
                >
                  <HelpCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">FAQ</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-12">
              {/* Enhanced Key Features Grid */}
              <div>
                <h2 className="text-center mb-12 text-gray-900">What's Included in {productData.name}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {keyFeatures.map((feature, index) => (
                    <Card key={index} className="border-2 border-gray-100 hover:border-primary/20 transition-all duration-300 group">
                      <CardHeader>
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                          </div>
                          <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                          <CardDescription className="text-center">{feature.description}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {feature.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Comprehensive Pricing Options */}
              <ComprehensivePricing 
                onPageChange={onPageChange} 
                coreSolutions={productSolutions} 
                allSolutions={productSolutions}
              />

              {/* Enhanced Customer Testimonials */}
              <div>
                <h2 className="text-center mb-12 text-gray-900">What Our Customers Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="border-2 border-gray-100 hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <ImageWithFallback
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-semibold">{testimonial.author}</h4>
                            <p className="text-sm text-gray-600">{testimonial.position}</p>
                            <p className="text-xs text-gray-500">{testimonial.company}</p>
                          </div>
                        </div>
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <blockquote className="text-gray-700 italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-sm font-medium text-green-700">Results:</div>
                          <div className="text-sm text-green-600">{testimonial.metrics}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-12">
              <InteractiveFeatureShowcase
                features={interactiveFeatures}
                productName={productData.name}
                accentColor="primary"
                autoSlide={true}
                autoSlideInterval={6000}
              />
            </TabsContent>

            {/* Enhanced Specifications Tab - REMOVED VERTICAL BARS */}
            <TabsContent value="specifications" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="mb-4 text-gray-900">Technical Specifications</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Detailed technical specifications for {productData.name} components and capabilities.
                </p>
              </div>

              {/* Enhanced Spec Category Navigation */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 rounded-xl p-1 flex gap-1">
                  {Object.keys(technicalSpecs).map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveSpecCategory(category)}
                      className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                        activeSpecCategory === category
                          ? 'bg-white text-primary shadow-md'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {category === 'hardware' && <Camera className="h-4 w-4 inline mr-2" />}
                      {category === 'software' && <Cpu className="h-4 w-4 inline mr-2" />}
                      {category === 'compliance' && <Shield className="h-4 w-4 inline mr-2" />}
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Specification Cards - NO MORE VERTICAL BARS */}
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technicalSpecs[activeSpecCategory]?.map((spec, index) => (
                    <Card key={index} className="border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                            {activeSpecCategory === 'hardware' && <Monitor className="h-6 w-6 text-primary" />}
                            {activeSpecCategory === 'software' && <Database className="h-6 w-6 text-primary" />}
                            {activeSpecCategory === 'compliance' && <Lock className="h-6 w-6 text-primary" />}
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{spec.spec}</h4>
                          <p className="text-primary font-medium">{spec.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Specification Summary */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mt-12">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Specification Package</h3>
                  <p className="text-gray-600 mb-6">Get detailed technical documentation, installation guides, and compatibility charts.</p>
                  <Button 
                    onClick={() => onPageChange('contact')}
                    className="bg-gradient-to-r from-primary to-accent text-white"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Complete Specs
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Enhanced Use Cases Tab */}
            <TabsContent value="use-cases" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="mb-4 text-gray-900">Industry Applications & Success Stories</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  See how {productData.name} delivers exceptional results across different industries and use cases.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="border-2 border-gray-100 hover:border-primary/20 transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                          {useCase.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{useCase.industry}</CardTitle>
                          <CardDescription>{useCase.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                          <div className="space-y-2">
                            {useCase.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                                <span className="text-sm text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                            <span className="font-semibold text-green-700">ROI Impact</span>
                          </div>
                          <p className="text-green-700 font-medium">{useCase.roi}</p>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="h-5 w-5 text-blue-600" />
                            <span className="font-semibold text-blue-700">Success Story</span>
                          </div>
                          <p className="text-blue-700 text-sm">{useCase.caseStudy}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Enhanced Implementation Tab */}
            <TabsContent value="implementation" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="mb-4 text-gray-900">Implementation Process</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our proven 4-phase implementation process ensures smooth deployment and optimal results.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {implementationProcess.map((phase, index) => (
                    <div key={index} className="relative">
                      <Card className="border-2 border-gray-100 hover:border-primary/20 transition-all duration-300 h-full">
                        <CardHeader className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                            <span className="text-2xl font-bold">{phase.phase}</span>
                          </div>
                          <CardTitle className="text-lg">{phase.title}</CardTitle>
                          <Badge variant="outline" className="text-primary border-primary">
                            {phase.duration}
                          </Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{phase.description}</p>
                          <div className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                      
                      {/* Connection Line */}
                      {index < implementationProcess.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Enhanced FAQ Tab */}
            <TabsContent value="faq" className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="mb-4 text-gray-900">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Get answers to the most common questions about {productData.name}.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                  {faqData.map((faq) => (
                    <Card key={faq.id} className="border border-gray-200 overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full text-left"
                      >
                        <CardHeader className="hover:bg-gray-50 transition-colors duration-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <HelpCircle className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <CardTitle className="text-left">{faq.question}</CardTitle>
                                <Badge variant="outline" className="text-xs mt-1">
                                  {faq.category}
                                </Badge>
                              </div>
                            </div>
                            {openFAQ.includes(faq.id) ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                        </CardHeader>
                      </button>
                      
                      {openFAQ.includes(faq.id) && (
                        <CardContent className="pt-0 animate-in slide-in-from-top-2 duration-200">
                          <div className="pl-14">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}