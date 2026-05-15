import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  X,
  Calculator,
  MousePointerClick,
  Settings,
  ChevronRight,
  Eye,
  BarChart3,
  Users,
  Layers,
  Zap,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InteractiveHeaderProps {
  onPageChange: (page: string) => void;
}

export function InteractiveHeader({ onPageChange }: InteractiveHeaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [showLiveDemo, setShowLiveDemo] = useState(false);
  const [showConfigurator, setShowConfigurator] = useState(false);
  
  // ROI Calculator State
  const [roiInputs, setRoiInputs] = useState({
    visitors: 10000,
    conversionRate: 2.5,
    averageSpend: 500,
    optimizationGain: 15
  });

  // Live Demo State
  const [peopleCount, setPeopleCount] = useState(0);
  const [isDemoRunning, setIsDemoRunning] = useState(false);

  // Product Configurator State
  const [selectedProduct, setSelectedProduct] = useState('core');
  const [selectedDeployment, setSelectedDeployment] = useState('cloudSync');
  const [selectedPricing, setSelectedPricing] = useState('subscription');

  const videoRef = useRef<HTMLVideoElement>(null);

  // Simulate video playback
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  // Calculate ROI
  const calculateROI = () => {
    const monthlyRevenue = roiInputs.visitors * (roiInputs.conversionRate / 100) * roiInputs.averageSpend;
    const optimizedRevenue = monthlyRevenue * (1 + roiInputs.optimizationGain / 100);
    const monthlyGain = optimizedRevenue - monthlyRevenue;
    const annualGain = monthlyGain * 12;
    const productCost = selectedProduct === 'core' ? 60000 : selectedProduct === 'flex' ? 45000 : 35000;
    const roi = ((annualGain - productCost) / productCost) * 100;
    const paybackMonths = productCost / monthlyGain;

    return { monthlyGain, annualGain, roi, paybackMonths };
  };

  // Simulate live demo
  useEffect(() => {
    if (isDemoRunning) {
      const interval = setInterval(() => {
        setPeopleCount(prev => {
          const change = Math.floor(Math.random() * 5) - 2;
          const newCount = Math.max(0, Math.min(50, prev + change));
          return newCount;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isDemoRunning]);

  const products = [
    { id: 'core', name: 'APC Core', price: 60000, accuracy: '99%', features: ['Premium AI Cameras', 'EdgeBox™', '24/7 Support'] },
    { id: 'flex', name: 'APC Flex', price: 45000, accuracy: '95%', features: ['Budget Cameras', 'EdgeBox™', 'Business Hours Support'] },
    { id: 'link', name: 'APC Link', price: 35000, accuracy: '90%', features: ['Existing IP Cameras', 'EdgeBox™', 'Email Support'] }
  ];

  const deploymentOptions = [
    { id: 'localView', name: 'LocalView', desc: 'On-premise only', icon: Settings },
    { id: 'cloudSync', name: 'CloudSync', desc: 'Cloud + Local', icon: Layers },
    { id: 'smartConnect', name: 'SmartConnect', desc: 'Full integration', icon: Zap }
  ];

  const pricingOptions = [
    { id: 'onetime', name: 'One-time', desc: 'Single payment', discount: '0%' },
    { id: 'subscription', name: 'Subscription', desc: '40% + monthly', discount: '20%' },
    { id: 'rental', name: 'Rental', desc: 'Per day', discount: 'Flexible' }
  ];

  const interactiveTools = [
    {
      id: 'roi',
      icon: Calculator,
      title: 'ROI Calculator',
      desc: 'Calculate your investment return',
      color: 'bg-blue-600',
      onClick: () => setShowROICalculator(true)
    },
    {
      id: 'demo',
      icon: Eye,
      title: 'Live Demo',
      desc: 'See real-time analytics',
      color: 'bg-green-600',
      onClick: () => setShowLiveDemo(true)
    },
    {
      id: 'config',
      icon: Settings,
      title: 'Product Configurator',
      desc: 'Build your solution',
      color: 'bg-gray-700',
      onClick: () => setShowConfigurator(true)
    }
  ];

  const roiResults = calculateROI();

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-8 max-w-7xl interactive-header-container">
        {/* Main Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Video Demo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-blue-600 text-white border-0">Live Demo</Badge>
              <Badge variant="outline" className="border-green-600 text-green-700">Interactive Tools</Badge>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              AI-Powered People Counting
              <span className="block text-blue-600 mt-1">See It In Action</span>
            </h1>
            
            <p className="text-gray-600 mb-6">
              Watch our 2-minute product demo or explore interactive tools to understand how APC Solutions 
              transforms space analytics with 99% accuracy and privacy-first technology.
            </p>

            {/* Video Player */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black group cursor-pointer border-4 border-gray-300">
              <div className="aspect-video relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="APC Product Demo"
                  className="w-full h-full object-cover"
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 video-overlay-gradient flex items-center justify-center">
                  {!isPlaying && (
                    <Button
                      onClick={() => {
                        setIsPlaying(true);
                        setShowVideoModal(true);
                      }}
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-20 h-20 p-0 shadow-2xl transform hover:scale-110 transition-transform play-button-pulse"
                    >
                      <Play className="h-10 w-10 ml-1" fill="white" />
                    </Button>
                  )}
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handlePlayPause}
                        className="text-white hover:text-white hover:bg-white/20 p-2 h-auto"
                      >
                        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleMuteToggle}
                        className="text-white hover:text-white hover:bg-white/20 p-2 h-auto"
                      >
                        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                      </Button>
                      <span className="text-xs">2:15</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowVideoModal(true)}
                      className="text-white hover:text-white hover:bg-white/20 p-2 h-auto"
                    >
                      <Maximize className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-black/80 text-white border-0">2:15 min</Badge>
                </div>
              </div>
            </div>

            {/* Quick Stats Below Video */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-xs text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-xs text-gray-600">Installations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">15min</div>
                <div className="text-xs text-gray-600">Setup Time</div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Tools */}
          <div className="space-y-4">
            <h2 className="font-bold text-gray-900 mb-4">Interactive Tools & Explorers</h2>
            
            {/* Tool Cards */}
            <div className="space-y-3">
              {interactiveTools.map((tool) => (
                <Card
                  key={tool.id}
                  className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-blue-300 group tool-card-hover card-border-transition"
                  onClick={tool.onClick}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`${tool.color} rounded-lg p-3 text-white`}>
                        <tool.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{tool.title}</h3>
                        <p className="text-xs text-gray-600">{tool.desc}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Access Tabs */}
            <Card className="mt-6">
              <CardContent className="p-4">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-3 mt-0">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700">99% accuracy with AI-powered edge analytics</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700">GDPR compliant with privacy-first architecture</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700">Real-time insights with cloud & local deployment</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="features" className="space-y-3 mt-0">
                    <div className="flex items-start gap-2">
                      <Zap className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700">Real-time occupancy monitoring & alerts</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <BarChart3 className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700">Advanced analytics & reporting dashboards</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700">Multi-zone tracking & heatmap visualization</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pricing" className="space-y-3 mt-0">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700"><strong>Core:</strong> ₹60,000 one-time or ₹30K + ₹5K/mo</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700"><strong>Flex:</strong> ₹45,000 one-time or ₹22.5K + ₹4K/mo</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-700"><strong>Link:</strong> ₹35,000 one-time or ₹17.5K + ₹3K/mo</p>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
                  <Button onClick={() => onPageChange('demo')} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    Get Free Demo
                  </Button>
                  <Button onClick={() => onPageChange('products')} variant="outline" className="flex-1">
                    View Products
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Full Screen Video Modal */}
      <Dialog open={showVideoModal} onOpenChange={setShowVideoModal}>
        <DialogContent className="max-w-6xl p-0 bg-black border-0">
          <div className="relative aspect-video">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="APC Product Demo Full Screen"
              className="w-full h-full object-cover"
            />
            <Button
              onClick={() => setShowVideoModal(false)}
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            >
              <X className="h-5 w-5" />
            </Button>
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                onClick={handlePlayPause}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-24 h-24 p-0 shadow-2xl"
              >
                {isPlaying ? <Pause className="h-12 w-12" /> : <Play className="h-12 w-12 ml-1" fill="white" />}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ROI Calculator Modal */}
      <Dialog open={showROICalculator} onOpenChange={setShowROICalculator}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              ROI Calculator
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div>
                <Label className="text-xs">Monthly Visitors: {roiInputs.visitors.toLocaleString()}</Label>
                <Slider
                  value={[roiInputs.visitors]}
                  onValueChange={(val) => setRoiInputs({ ...roiInputs, visitors: val[0] })}
                  min={1000}
                  max={100000}
                  step={1000}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-xs">Conversion Rate: {roiInputs.conversionRate}%</Label>
                <Slider
                  value={[roiInputs.conversionRate]}
                  onValueChange={(val) => setRoiInputs({ ...roiInputs, conversionRate: val[0] })}
                  min={0.5}
                  max={20}
                  step={0.5}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-xs">Average Transaction: ₹{roiInputs.averageSpend}</Label>
                <Slider
                  value={[roiInputs.averageSpend]}
                  onValueChange={(val) => setRoiInputs({ ...roiInputs, averageSpend: val[0] })}
                  min={100}
                  max={5000}
                  step={100}
                  className="mt-2"
                />
              </div>

              <div>
                <Label className="text-xs">Expected Optimization Gain: {roiInputs.optimizationGain}%</Label>
                <Slider
                  value={[roiInputs.optimizationGain]}
                  onValueChange={(val) => setRoiInputs({ ...roiInputs, optimizationGain: val[0] })}
                  min={5}
                  max={50}
                  step={5}
                  className="mt-2"
                />
              </div>
            </div>

            {/* Results */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold text-gray-900 mb-4">Your Projected ROI</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Monthly Revenue Gain</div>
                    <div className="font-bold text-green-600">₹{Math.round(roiResults.monthlyGain).toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Annual Revenue Gain</div>
                    <div className="font-bold text-green-600">₹{Math.round(roiResults.annualGain).toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">ROI (First Year)</div>
                    <div className="font-bold text-blue-600">{Math.round(roiResults.roi)}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Payback Period</div>
                    <div className="font-bold text-gray-700">{Math.round(roiResults.paybackMonths)} months</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-2">
              <Button onClick={() => onPageChange('demo')} className="flex-1 bg-blue-600 hover:bg-blue-700">
                Schedule Demo
              </Button>
              <Button onClick={() => onPageChange('products')} variant="outline" className="flex-1">
                View Products
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Live Demo Modal */}
      <Dialog open={showLiveDemo} onOpenChange={setShowLiveDemo}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-green-600" />
              Live Demo Simulator
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Live Demo Area */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                alt="Live Demo Simulation"
                className="w-full h-full object-cover opacity-60"
              />
              
              {/* Overlay Stats */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-white mb-4 stat-counter">{peopleCount}</div>
                  <div className="text-white text-xl">Current Occupancy</div>
                </div>
              </div>

              {/* Top Stats Bar */}
              <div className="absolute top-4 left-4 right-4 flex gap-4">
                <Card className="flex-1 bg-white/90 backdrop-blur">
                  <CardContent className="p-3">
                    <div className="text-xs text-gray-600">Entering</div>
                    <div className="font-bold text-green-600">↑ {Math.floor(peopleCount * 0.6)}</div>
                  </CardContent>
                </Card>
                <Card className="flex-1 bg-white/90 backdrop-blur">
                  <CardContent className="p-3">
                    <div className="text-xs text-gray-600">Exiting</div>
                    <div className="font-bold text-blue-600">↓ {Math.floor(peopleCount * 0.4)}</div>
                  </CardContent>
                </Card>
                <Card className="flex-1 bg-white/90 backdrop-blur">
                  <CardContent className="p-3">
                    <div className="text-xs text-gray-600">Accuracy</div>
                    <div className="font-bold text-gray-900">99.2%</div>
                  </CardContent>
                </Card>
              </div>

              {/* Control Button */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <Button
                  onClick={() => setIsDemoRunning(!isDemoRunning)}
                  className={`${isDemoRunning ? 'bg-gray-700 hover:bg-gray-800' : 'bg-green-600 hover:bg-green-700'} text-white`}
                >
                  {isDemoRunning ? (
                    <>
                      <Pause className="h-4 w-4 mr-2" />
                      Pause Demo
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Start Demo
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={() => onPageChange('demo')} className="flex-1 bg-green-600 hover:bg-green-700">
                Try Real System
              </Button>
              <Button onClick={() => setShowLiveDemo(false)} variant="outline" className="flex-1">
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Product Configurator Modal */}
      <Dialog open={showConfigurator} onOpenChange={setShowConfigurator}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-gray-700" />
              Product Configurator
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Product Selection */}
            <div>
              <Label className="text-xs font-bold mb-3 block">1. Select Your Product</Label>
              <div className="grid grid-cols-3 gap-3">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className={`cursor-pointer transition-all border-2 ${
                      selectedProduct === product.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="font-bold text-gray-900 mb-1">{product.name}</div>
                      <div className="text-xs text-gray-600 mb-2">₹{product.price.toLocaleString()}</div>
                      <Badge className={selectedProduct === product.id ? 'bg-blue-600' : 'bg-gray-500'}>
                        {product.accuracy}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Deployment Selection */}
            <div>
              <Label className="text-xs font-bold mb-3 block">2. Choose Deployment Option</Label>
              <div className="grid grid-cols-3 gap-3">
                {deploymentOptions.map((option) => (
                  <Card
                    key={option.id}
                    className={`cursor-pointer transition-all border-2 ${
                      selectedDeployment === option.id ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedDeployment(option.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <option.icon className={`h-6 w-6 mx-auto mb-2 ${selectedDeployment === option.id ? 'text-green-600' : 'text-gray-400'}`} />
                      <div className="font-bold text-gray-900 text-xs mb-1">{option.name}</div>
                      <div className="text-xs text-gray-600">{option.desc}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pricing Model Selection */}
            <div>
              <Label className="text-xs font-bold mb-3 block">3. Select Pricing Model</Label>
              <div className="grid grid-cols-3 gap-3">
                {pricingOptions.map((option) => (
                  <Card
                    key={option.id}
                    className={`cursor-pointer transition-all border-2 ${
                      selectedPricing === option.id ? 'border-gray-700 bg-gray-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedPricing(option.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="font-bold text-gray-900 text-xs mb-1">{option.name}</div>
                      <div className="text-xs text-gray-600 mb-2">{option.desc}</div>
                      <Badge variant="outline" className={selectedPricing === option.id ? 'border-gray-700 text-gray-700' : ''}>
                        {option.discount}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Configuration Summary */}
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Your Configuration</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Product:</span>
                    <span className="font-bold text-gray-900">{products.find(p => p.id === selectedProduct)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deployment:</span>
                    <span className="font-bold text-gray-900">{deploymentOptions.find(d => d.id === selectedDeployment)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pricing:</span>
                    <span className="font-bold text-gray-900">{pricingOptions.find(p => p.id === selectedPricing)?.name}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-300">
                    <span className="text-gray-600">Base Price:</span>
                    <span className="font-bold text-blue-600">₹{products.find(p => p.id === selectedProduct)?.price.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-2">
              <Button onClick={() => onPageChange('demo')} className="flex-1 bg-gray-700 hover:bg-gray-800">
                Get Quote
              </Button>
              <Button onClick={() => onPageChange('products')} variant="outline" className="flex-1">
                View Details
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
