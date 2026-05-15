import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Building, 
  Zap, 
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Target,
  BarChart3,
  PieChart,
  Clock,
  Shield,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Brain,
  Cpu,
  Camera,
  MapPin,
  Calendar,
  Phone,
  Upload,
  Ruler,
  Wifi,
  Cloud,
  Monitor,
  Smartphone,
  Tablet,
  ChevronRight,
  Package,
  Settings,
  FileImage,
  Home,
  Building2,
  Warehouse,
  ShoppingCart,
  Mail,
  User,
  Factory,
  Globe,
  Laptop
} from 'lucide-react';

interface RequirementInputs {
  // Step 1: Basic Information
  companyName: string;
  industry: string;
  contactPerson: string;
  email: string;
  phone: string;
  
  // Step 2: Use Case & Requirements
  useCase: string;
  specificRequirement: string;
  coveredArea: string;
  estimatedDevices: number;
  
  // Step 3: Technical Specifications
  entryExitWidth: string;
  entryExitHeight: string;
  placementType: 'indoor' | 'outdoor' | 'both';
  existingTechnology: string;
  
  // Step 4: Installation & Data Preferences
  installationLocations: 'single' | 'multiple';
  numberOfLocations: number;
  dataStoragePreference: string;
  accessDevices: string[];
  
  // Step 5: Site Information
  siteImages: File[];
  specialRequirements: string;
  projectTimeline: string;
  budgetRange: string;
}

interface CalculatorResult {
  recommendedProduct: string;
  oneTimeTotal: number;
  subscriptionAdvance: number;
  subscriptionMonthly: number;
  rentalDaily: number;
  savings: number;
  roi: number;
  breakdown: {
    hardware: number;
    installation: number;
    support: number;
    deployment: number;
  };
  recommendations: string[];
  bestOption: 'onetime' | 'subscription' | 'rental';
}

export function AIPricingCalculator({ onPageChange }: { onPageChange: (page: string) => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputs, setInputs] = useState<RequirementInputs>({
    companyName: '',
    industry: '',
    contactPerson: '',
    email: '',
    phone: '',
    useCase: '',
    specificRequirement: '',
    coveredArea: '',
    estimatedDevices: 1,
    entryExitWidth: '',
    entryExitHeight: '',
    placementType: 'indoor',
    existingTechnology: '',
    installationLocations: 'single',
    numberOfLocations: 1,
    dataStoragePreference: '',
    accessDevices: [],
    siteImages: [],
    specialRequirements: '',
    projectTimeline: '',
    budgetRange: ''
  });

  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  
  const totalSteps = 5;

  const steps = [
    {
      title: "Company Information",
      description: "Tell us about your organization",
      icon: <Building className="h-5 w-5" />
    },
    {
      title: "Use Case & Requirements",
      description: "What do you need to achieve?",
      icon: <Target className="h-5 w-5" />
    },
    {
      title: "Technical Specifications",
      description: "Site and installation details",
      icon: <Settings className="h-5 w-5" />
    },
    {
      title: "Data & Access Preferences",
      description: "How do you want to access data?",
      icon: <Cloud className="h-5 w-5" />
    },
    {
      title: "Final Details & Analysis",
      description: "Complete your requirements",
      icon: <Brain className="h-5 w-5" />
    }
  ];

  const industries = [
    { value: 'retail', label: 'Retail & Shopping', icon: <ShoppingCart className="h-4 w-4" /> },
    { value: 'office', label: 'Corporate Office', icon: <Building2 className="h-4 w-4" /> },
    { value: 'healthcare', label: 'Healthcare', icon: <Building className="h-4 w-4" /> },
    { value: 'education', label: 'Education', icon: <Building className="h-4 w-4" /> },
    { value: 'warehouse', label: 'Warehouse & Logistics', icon: <Warehouse className="h-4 w-4" /> },
    { value: 'manufacturing', label: 'Manufacturing', icon: <Factory className="h-4 w-4" /> },
    { value: 'hospitality', label: 'Hospitality', icon: <Home className="h-4 w-4" /> },
    { value: 'transportation', label: 'Transportation', icon: <Globe className="h-4 w-4" /> },
    { value: 'government', label: 'Government', icon: <Building className="h-4 w-4" /> },
    { value: 'other', label: 'Other', icon: <Globe className="h-4 w-4" /> }
  ];

  const useCases = [
    { value: 'footfall-counting', label: 'Count people entering/exiting' },
    { value: 'occupancy-monitoring', label: 'Monitor space occupancy levels' },
    { value: 'queue-management', label: 'Manage queues and wait times' },
    { value: 'space-optimization', label: 'Optimize space utilization' },
    { value: 'security-monitoring', label: 'Security and access control' },
    { value: 'energy-efficiency', label: 'Energy management based on occupancy' },
    { value: 'compliance-monitoring', label: 'Compliance with capacity limits' },
    { value: 'visitor-analytics', label: 'Visitor behavior analytics' },
    { value: 'event-management', label: 'Event and crowd management' },
    { value: 'other', label: 'Other specific requirement' }
  ];

  const existingTechnologies = [
    { value: 'none', label: 'No existing technology' },
    { value: 'ip-cameras', label: 'IP Cameras (ONVIF compatible)' },
    { value: 'analog-cameras', label: 'Analog/CCTV Cameras' },
    { value: 'sensors', label: 'Motion/Infrared Sensors' },
    { value: 'manual-counting', label: 'Manual counting methods' },
    { value: 'basic-counters', label: 'Basic electronic counters' },
    { value: 'other-solution', label: 'Other people counting solution' }
  ];

  const dataStorageOptions = [
    { value: 'cloud', label: 'Cloud Storage', icon: <Cloud className="h-4 w-4" />, description: 'Secure cloud storage with remote access' },
    { value: 'local-desktop', label: 'Local Desktop/Laptop', icon: <Laptop className="h-4 w-4" />, description: 'On-premises storage on your computer' },
    { value: 'edge-device', label: 'Edge Device (EdgeBox)', icon: <Monitor className="h-4 w-4" />, description: 'Local processing and storage on-site' },
    { value: 'hybrid', label: 'Hybrid (Cloud + Local)', icon: <Globe className="h-4 w-4" />, description: 'Best of both worlds' }
  ];

  const accessDeviceOptions = [
    { value: 'desktop', label: 'Desktop/Laptop', icon: <Monitor className="h-4 w-4" /> },
    { value: 'tablet', label: 'Tablet', icon: <Tablet className="h-4 w-4" /> },
    { value: 'smartphone', label: 'Smartphone', icon: <Smartphone className="h-4 w-4" /> },
    { value: 'dashboard', label: 'TV Dashboard', icon: <Monitor className="h-4 w-4" /> }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: keyof RequirementInputs, value: any) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAccessDeviceChange = (device: string, checked: boolean) => {
    setInputs(prev => ({
      ...prev,
      accessDevices: checked 
        ? [...prev.accessDevices, device]
        : prev.accessDevices.filter(d => d !== device)
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setInputs(prev => ({
        ...prev,
        siteImages: [...prev.siteImages, ...files]
      }));
    }
  };

  const calculateRecommendation = (): CalculatorResult => {
    // Simplified AI logic for demo
    let recommendedProduct = 'flex';
    let basePrice = 45000;

    // Industry-based recommendations
    if (inputs.industry === 'retail' && inputs.estimatedDevices > 5) {
      recommendedProduct = 'core';
      basePrice = 60000;
    } else if (inputs.useCase === 'event-management') {
      recommendedProduct = 'eventsense';
      basePrice = 15000;
    } else if (inputs.existingTechnology === 'ip-cameras') {
      recommendedProduct = 'link';
      basePrice = 35000;
    }

    const deviceMultiplier = inputs.estimatedDevices;
    const locationMultiplier = inputs.installationLocations === 'multiple' ? inputs.numberOfLocations : 1;
    const installationCost = deviceMultiplier * locationMultiplier * 2000;

    const oneTimeTotal = (basePrice * deviceMultiplier * locationMultiplier) + installationCost;
    const subscriptionAdvance = oneTimeTotal * 0.4;
    const subscriptionMonthly = basePrice * deviceMultiplier * locationMultiplier * 0.08;
    const rentalDaily = basePrice * 0.15;

    return {
      recommendedProduct,
      oneTimeTotal,
      subscriptionAdvance,
      subscriptionMonthly,
      rentalDaily,
      savings: oneTimeTotal * 0.2,
      roi: 320,
      breakdown: {
        hardware: basePrice * deviceMultiplier * locationMultiplier,
        installation: installationCost,
        support: oneTimeTotal * 0.15,
        deployment: oneTimeTotal * 0.1
      },
      recommendations: [
        `Perfect fit for ${inputs.industry} industry`,
        `Handles ${inputs.estimatedDevices} device(s) efficiently`,
        `${inputs.dataStoragePreference} storage aligns with your needs`
      ],
      bestOption: inputs.budgetRange === 'low' ? 'subscription' : 'onetime'
    };
  };

  const handleSubmit = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const recommendation = calculateRecommendation();
      setResult(recommendation);
      setIsCalculating(false);
    }, 2000);
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return inputs.companyName && inputs.industry && inputs.contactPerson && inputs.email;
      case 2:
        return inputs.useCase && inputs.specificRequirement && inputs.coveredArea;
      case 3:
        return inputs.entryExitWidth && inputs.entryExitHeight && inputs.placementType;
      case 4:
        return inputs.dataStoragePreference && inputs.accessDevices.length > 0;
      case 5:
        return inputs.projectTimeline && inputs.budgetRange;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Company Information</h3>
              <p className="text-gray-600">Help us understand your organization</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  value={inputs.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  value={inputs.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={inputs.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={inputs.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div>
              <Label>Industry/Sector *</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                {industries.map((industry) => (
                  <div
                    key={industry.value}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      inputs.industry === industry.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleInputChange('industry', industry.value)}
                  >
                    <div className="flex items-center gap-2">
                      {industry.icon}
                      <span className="text-sm font-medium">{industry.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Use Case & Requirements</h3>
              <p className="text-gray-600">Tell us what you need to achieve</p>
            </div>

            <div>
              <Label>What is your primary use case? *</Label>
              <div className="grid md:grid-cols-2 gap-3 mt-2">
                {useCases.map((useCase) => (
                  <div
                    key={useCase.value}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      inputs.useCase === useCase.value
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleInputChange('useCase', useCase.value)}
                  >
                    <span className="text-sm font-medium">{useCase.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="specificRequirement">Specific Requirement Details *</Label>
              <Textarea
                id="specificRequirement"
                value={inputs.specificRequirement}
                onChange={(e) => handleInputChange('specificRequirement', e.target.value)}
                placeholder="Describe your specific needs, expected outcomes, or challenges you're trying to solve..."
                className="min-h-[100px]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="coveredArea">Area to be Covered *</Label>
                <Input
                  id="coveredArea"
                  value={inputs.coveredArea}
                  onChange={(e) => handleInputChange('coveredArea', e.target.value)}
                  placeholder="e.g., Main entrance, Store floor, Office building"
                />
              </div>
              <div>
                <Label htmlFor="estimatedDevices">Estimated Number of Devices *</Label>
                <Select value={inputs.estimatedDevices.toString()} onValueChange={(value) => handleInputChange('estimatedDevices', parseInt(value))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Device</SelectItem>
                    <SelectItem value="2">2 Devices</SelectItem>
                    <SelectItem value="3">3-5 Devices</SelectItem>
                    <SelectItem value="6">6-10 Devices</SelectItem>
                    <SelectItem value="11">11-20 Devices</SelectItem>
                    <SelectItem value="21">20+ Devices</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Technical Specifications</h3>
              <p className="text-gray-600">Site and installation details</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="entryExitWidth">Entry/Exit Width *</Label>
                <Input
                  id="entryExitWidth"
                  value={inputs.entryExitWidth}
                  onChange={(e) => handleInputChange('entryExitWidth', e.target.value)}
                  placeholder="e.g., 2 meters, 6 feet"
                />
              </div>
              <div>
                <Label htmlFor="entryExitHeight">Entry/Exit Height *</Label>
                <Input
                  id="entryExitHeight"
                  value={inputs.entryExitHeight}
                  onChange={(e) => handleInputChange('entryExitHeight', e.target.value)}
                  placeholder="e.g., 3 meters, 8 feet"
                />
              </div>
            </div>

            <div>
              <Label>Installation Environment *</Label>
              <RadioGroup 
                value={inputs.placementType} 
                onValueChange={(value) => handleInputChange('placementType', value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="indoor" id="indoor" />
                  <Label htmlFor="indoor" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Indoor Environment
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="outdoor" id="outdoor" />
                  <Label htmlFor="outdoor" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Outdoor Environment
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="both" />
                  <Label htmlFor="both" className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Mixed (Indoor + Outdoor)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Existing Technology/Solution</Label>
              <div className="grid md:grid-cols-2 gap-3 mt-2">
                {existingTechnologies.map((tech) => (
                  <div
                    key={tech.value}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      inputs.existingTechnology === tech.value
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleInputChange('existingTechnology', tech.value)}
                  >
                    <span className="text-sm font-medium">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Data & Access Preferences</h3>
              <p className="text-gray-600">How do you want to store and access data?</p>
            </div>

            <div>
              <Label>Installation Locations</Label>
              <RadioGroup 
                value={inputs.installationLocations} 
                onValueChange={(value) => handleInputChange('installationLocations', value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="single" id="single" />
                  <Label htmlFor="single">Single Location</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="multiple" id="multiple" />
                  <Label htmlFor="multiple">Multiple Locations</Label>
                </div>
              </RadioGroup>
            </div>

            {inputs.installationLocations === 'multiple' && (
              <div>
                <Label htmlFor="numberOfLocations">Number of Locations</Label>
                <Select value={inputs.numberOfLocations.toString()} onValueChange={(value) => handleInputChange('numberOfLocations', parseInt(value))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 Locations</SelectItem>
                    <SelectItem value="3">3-5 Locations</SelectItem>
                    <SelectItem value="6">6-10 Locations</SelectItem>
                    <SelectItem value="11">10+ Locations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label>Data Storage Preference *</Label>
              <div className="grid md:grid-cols-2 gap-3 mt-2">
                {dataStorageOptions.map((option) => (
                  <div
                    key={option.value}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      inputs.dataStoragePreference === option.value
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleInputChange('dataStoragePreference', option.value)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {option.icon}
                      <span className="font-medium">{option.label}</span>
                    </div>
                    <p className="text-xs text-gray-600">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label>How do you want to access the data? *</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                {accessDeviceOptions.map((device) => (
                  <div
                    key={device.value}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      inputs.accessDevices.includes(device.value)
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleAccessDeviceChange(device.value, !inputs.accessDevices.includes(device.value))}
                  >
                    <div className="flex flex-col items-center gap-2">
                      {device.icon}
                      <span className="text-sm font-medium text-center">{device.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Final Details & Analysis</h3>
              <p className="text-gray-600">Complete your requirements for smart analysis</p>
            </div>

            <div>
              <Label htmlFor="siteImages">Site Images (Optional)</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <FileImage className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-sm text-gray-600 mb-2">Upload images of entry/exit points, installation areas</p>
                <Input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Button variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
                  <Upload className="h-4 w-4 mr-2" />
                  Choose Files
                </Button>
                {inputs.siteImages.length > 0 && (
                  <p className="text-sm text-green-600 mt-2">{inputs.siteImages.length} file(s) selected</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="specialRequirements">Special Requirements or Notes</Label>
              <Textarea
                id="specialRequirements"
                value={inputs.specialRequirements}
                onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                placeholder="Any special requirements, constraints, or additional information..."
                className="min-h-[80px]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="projectTimeline">Project Timeline *</Label>
                <Select value={inputs.projectTimeline} onValueChange={(value) => handleInputChange('projectTimeline', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="When do you need this?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (Within 1 week)</SelectItem>
                    <SelectItem value="urgent">Urgent (Within 1 month)</SelectItem>
                    <SelectItem value="planned">Planned (1-3 months)</SelectItem>
                    <SelectItem value="future">Future (3+ months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budgetRange">Budget Range *</Label>
                <Select value={inputs.budgetRange} onValueChange={(value) => handleInputChange('budgetRange', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">₹20,000 - ₹50,000</SelectItem>
                    <SelectItem value="medium">₹50,000 - ₹2,00,000</SelectItem>
                    <SelectItem value="high">₹2,00,000 - ₹5,00,000</SelectItem>
                    <SelectItem value="enterprise">₹5,00,000+</SelectItem>
                    <SelectItem value="flexible">Flexible based on ROI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {isStepValid(5) && (
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardContent className="p-6 text-center">
                  <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Ready for Smart Analysis!</h3>
                  <p className="text-gray-600 mb-4">
                    All information collected. Click below to get your personalized recommendation and pricing analysis.
                  </p>
                  <Button 
                    onClick={handleSubmit}
                    disabled={isCalculating}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    size="lg"
                  >
                    {isCalculating ? (
                      <>
                        <Cpu className="h-5 w-5 mr-2 animate-pulse" />
                        Analyzing Your Requirements...
                      </>
                    ) : (
                      <>
                        <Brain className="h-5 w-5 mr-2" />
                        Generate Smart Analysis
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  if (result) {
    return (
      <div className="space-y-8">
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl flex items-center justify-center gap-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
              Smart Analysis Complete!
            </CardTitle>
            <CardDescription className="text-lg">
              Here's your personalized recommendation based on your requirements
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recommendation Summary */}
          <Card className="border-2 border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="text-green-800">📋 Requirement Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div><strong>Company:</strong> {inputs.companyName}</div>
              <div><strong>Industry:</strong> {inputs.industry}</div>
              <div><strong>Use Case:</strong> {inputs.useCase}</div>
              <div><strong>Devices:</strong> {inputs.estimatedDevices}</div>
              <div><strong>Environment:</strong> {inputs.placementType}</div>
              <div><strong>Storage:</strong> {inputs.dataStoragePreference}</div>
              <div><strong>Budget:</strong> {inputs.budgetRange}</div>
            </CardContent>
          </Card>

          {/* Pricing Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">💰 Pricing Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold">Recommended: APC {result.recommendedProduct.toUpperCase()}</h4>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <span className="text-sm text-gray-600">One-time Payment</span>
                      <div className="text-xl font-bold text-blue-600">₹{result.oneTimeTotal.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Monthly Subscription</span>
                      <div className="text-xl font-bold text-green-600">₹{result.subscriptionMonthly.toLocaleString()}/mo</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-semibold">Why this solution:</h5>
                  {result.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={() => onPageChange('demo')}
            className="bg-green-600 hover:bg-green-700"
            size="lg"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book Free Demo Call
          </Button>
          <Button 
            variant="outline"
            onClick={() => onPageChange('contact')}
            size="lg"
          >
            <Phone className="h-4 w-4 mr-2" />
            Speak with Expert
          </Button>
          <Button 
            variant="outline"
            onClick={() => {
              setResult(null);
              setCurrentStep(1);
            }}
            size="lg"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Start New Analysis
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-3">
            <Brain className="h-8 w-8 text-blue-600" />
            AI Smart Price Analyzer
          </CardTitle>
          <CardDescription className="text-lg">
            Get intelligent product recommendations and smart pricing analysis in 5 easy steps
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Progress Steps */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep > index + 1 ? 'bg-green-500 text-white' :
                  currentStep === index + 1 ? 'bg-blue-500 text-white' :
                  'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > index + 1 ? <CheckCircle className="h-5 w-5" /> : step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-full h-1 mx-2 ${
                    currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold">{steps[currentStep - 1].title}</h3>
            <p className="text-gray-600">{steps[currentStep - 1].description}</p>
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <Card>
        <CardContent className="p-8">
          {renderStep()}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        
        <div className="text-sm text-gray-500 flex items-center">
          Step {currentStep} of {totalSteps}
        </div>

        <Button
          onClick={handleNext}
          disabled={currentStep === totalSteps || !isStepValid(currentStep)}
        >
          Next
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}