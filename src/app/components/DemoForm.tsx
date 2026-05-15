import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { toast } from 'sonner';
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Building, 
  Users,
  ArrowRight,
  Shield,
  Zap,
  Star,
  InfoIcon
} from 'lucide-react';

interface DemoFormProps {
  onPageChange: (page: string) => void;
}

export function DemoForm({ onPageChange }: DemoFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    solutionInterest: '',
    deploymentOption: '',
    estimatedLocations: '',
    currentSolution: '',
    primaryGoal: '',
    timeline: '',
    pocType: '15-day',
    additionalRequirements: '',
    agreeToContact: false,
    agreeToUpdates: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const industries = [
    'Retail & Shopping Malls',
    'Corporate Offices',
    'Transportation Hubs',
    'Healthcare Facilities',
    'Educational Institutions', 
    'Entertainment Venues',
    'Government Buildings',
    'Manufacturing',
    'Hospitality',
    'Other'
  ];

  const solutions = [
    'APC Core - Complete solution',
    'APC Flex - Cost-efficient',
    'APC Link - Use existing cameras',
    'APC EventSense - Event rental',
    'Not sure - Need recommendation'
  ];

  const deploymentOptions = [
    'LocalView - On-premise processing',
    'CloudSync - Centralized analytics',
    'SmartConnect - Mobile access',
    'Not sure - Need recommendation'
  ];

  const timelines = [
    'Immediate (within 1 month)',
    'Short term (1-3 months)',
    'Medium term (3-6 months)',
    'Long term (6+ months)',
    'Just exploring options'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToContact) {
      toast.error('Please agree to be contacted for the POC setup.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success('POC request submitted successfully! Our team will contact you within 24 hours.');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-secondary pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-0">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              
              <h1 className="mb-4 text-gray-900">POC Request Submitted Successfully!</h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Thank you for your interest in APC solutions. Our technical team will contact you within 
                <span className="font-semibold text-primary"> 24 hours</span> to schedule your POC setup.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium">Quick Setup</div>
                  <div className="text-sm text-gray-600">Same-day installation possible</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium">No Commitment</div>
                  <div className="text-sm text-gray-600">Free 15-day evaluation</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <Star className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium">Expert Support</div>
                  <div className="text-sm text-gray-600">Dedicated technical team</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">What happens next?</h3>
                <div className="text-left max-w-2xl mx-auto space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                    <span>Technical consultation call to understand your specific requirements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
                    <span>Site survey and optimal solution recommendation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">3</div>
                    <span>POC installation and live system demonstration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">4</div>
                    <span>15-day evaluation with full access to analytics and reporting</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-x-4">
                <Button onClick={() => onPageChange('home')}>
                  Return to Homepage
                </Button>
                <Button variant="outline" onClick={() => onPageChange('case-studies')}>
                  View Case Studies
                </Button>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Urgent inquiries?</strong> Call us directly at{' '}
                  <a href="tel:+1-800-726-2357" className="text-primary font-medium">
                    +1-800-APC-HELP
                  </a>{' '}
                  or WhatsApp{' '}
                  <a href="https://wa.me/18007262357" className="text-primary font-medium">
                    +1-800-726-2357
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
            🚀 Start Your Free POC Today
          </Badge>
          <h1 className="mb-4 text-gray-900">Choose Your Demo Package</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience APC EdgeBox™ in your environment with our flexible demo options. 
            From <strong>₹5,000 basic demo</strong> to <strong>extended packages with purchase credits</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  POC Request Form
                </CardTitle>
                <CardDescription>
                  Fill out the form below and our team will contact you within 24 hours to schedule your POC.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="jobTitle">Job Title *</Label>
                        <Input
                          id="jobTitle"
                          value={formData.jobTitle}
                          onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="industry">Industry *</Label>
                        <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="estimatedLocations">Estimated Number of Locations</Label>
                        <Input
                          id="estimatedLocations"
                          value={formData.estimatedLocations}
                          onChange={(e) => handleInputChange('estimatedLocations', e.target.value)}
                          placeholder="e.g., 1, 5, 10+"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Solution Requirements */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Solution Requirements</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="solutionInterest">Interested Solution *</Label>
                        <Select value={formData.solutionInterest} onValueChange={(value) => handleInputChange('solutionInterest', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select APC solution" />
                          </SelectTrigger>
                          <SelectContent>
                            {solutions.map((solution) => (
                              <SelectItem key={solution} value={solution}>
                                {solution}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="deploymentOption">Preferred Deployment</Label>
                        <Select value={formData.deploymentOption} onValueChange={(value) => handleInputChange('deploymentOption', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select deployment option" />
                          </SelectTrigger>
                          <SelectContent>
                            {deploymentOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="currentSolution">Current People Counting Solution</Label>
                        <Input
                          id="currentSolution"
                          value={formData.currentSolution}
                          onChange={(e) => handleInputChange('currentSolution', e.target.value)}
                          placeholder="e.g., Manual counting, competitor product, or none"
                        />
                      </div>
                      <div>
                        <Label htmlFor="timeline">Project Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            {timelines.map((timeline) => (
                              <SelectItem key={timeline} value={timeline}>
                                {timeline}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="primaryGoal">Primary Goal/Use Case *</Label>
                      <Textarea
                        id="primaryGoal"
                        value={formData.primaryGoal}
                        onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                        placeholder="e.g., Reduce queues, optimize staff allocation, improve safety compliance..."
                        required
                      />
                    </div>
                  </div>

                  {/* Demo Type */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Demo Package Type</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className={`cursor-pointer transition-colors ${formData.pocType === '15-day' ? 'border-green-500 bg-green-50' : 'hover:border-green-300'}`}
                            onClick={() => handleInputChange('pocType', '15-day')}>
                        <CardContent className="p-4 text-center">
                          <Badge className="mb-2 bg-green-500">Basic</Badge>
                          <div className="font-medium">15-Day Standard Demo</div>
                          <div className="text-lg font-bold text-green-600 mt-1">₹5,000</div>
                          <div className="text-sm text-gray-600 mt-2">+ Installation charges</div>
                          <div className="text-sm text-gray-600">₹15,000 refundable deposit</div>
                        </CardContent>
                      </Card>
                      <Card className={`cursor-pointer transition-colors ${formData.pocType === '30-day' ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-300'}`}
                            onClick={() => handleInputChange('pocType', '30-day')}>
                        <CardContent className="p-4 text-center">
                          <Badge className="mb-2 bg-blue-500">Popular</Badge>
                          <div className="font-medium">30-Day Extended Demo</div>
                          <div className="text-lg font-bold text-blue-600 mt-1">₹10,000</div>
                          <div className="text-sm text-green-600 font-medium mt-1">70% credit on purchase</div>
                          <div className="text-sm text-gray-600">+ Installation charges</div>
                          <div className="text-sm text-gray-600">₹15,000 refundable deposit</div>
                        </CardContent>
                      </Card>
                      <Card className={`cursor-pointer transition-colors ${formData.pocType === 'custom' ? 'border-purple-500 bg-purple-50' : 'hover:border-purple-300'}`}
                            onClick={() => handleInputChange('pocType', 'custom')}>
                        <CardContent className="p-4 text-center">
                          <Badge className="mb-2 bg-purple-500">Custom</Badge>
                          <div className="font-medium">15-Day Custom Demo</div>
                          <div className="text-lg font-bold text-purple-600 mt-1">₹10,000</div>
                          <div className="text-sm text-green-600 font-medium mt-1">70% credit on purchase</div>
                          <div className="text-sm text-gray-600">+ Installation charges</div>
                          <div className="text-sm text-gray-600">₹15,000 refundable deposit</div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <InfoIcon className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <div className="font-medium text-amber-800 mb-1">Client Infrastructure Requirements:</div>
                          <div className="text-amber-700">
                            You will need to provide: POE (Power over Ethernet), Power supply, Display monitor, 
                            Computer/system, and Backup power supply as required for your installation.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <Label htmlFor="additionalRequirements">Additional Requirements or Questions</Label>
                    <Textarea
                      id="additionalRequirements"
                      value={formData.additionalRequirements}
                      onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                      placeholder="Any specific requirements, integration needs, or questions..."
                    />
                  </div>

                  {/* Consent */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToContact"
                        checked={formData.agreeToContact}
                        onCheckedChange={(checked) => handleInputChange('agreeToContact', checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="agreeToContact" className="text-sm leading-5">
                        I agree to be contacted by APC Solutions for POC setup and technical consultation. *
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToUpdates"
                        checked={formData.agreeToUpdates}
                        onCheckedChange={(checked) => handleInputChange('agreeToUpdates', checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="agreeToUpdates" className="text-sm leading-5">
                        I would like to receive product updates and industry insights from APC Solutions.
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Submitting Request...'
                    ) : (
                      <>
                        Submit POC Request
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* What to Expect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">1</div>
                  <div>
                    <div className="font-medium">Quick Response</div>
                    <div className="text-sm text-gray-600">Contact within 24 hours</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">2</div>
                  <div>
                    <div className="font-medium">Site Assessment</div>
                    <div className="text-sm text-gray-600">Technical consultation call</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">3</div>
                  <div>
                    <div className="font-medium">Installation</div>
                    <div className="text-sm text-gray-600">Professional setup & training</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">4</div>
                  <div>
                    <div className="font-medium">Live Evaluation</div>
                    <div className="text-sm text-gray-600">15 days of real data & insights</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Need Immediate Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Call Sales</div>
                    <a href="tel:+1-800-726-2357" className="text-sm text-primary hover:underline">
                      +1-800-APC-HELP
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <a href="mailto:sales@apcsolutions.com" className="text-sm text-primary hover:underline">
                      sales@apcsolutions.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Live Chat</div>
                    <div className="text-sm text-gray-600">Bottom-right corner</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Signals */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600 mb-4">Successful POCs completed</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">4.9/5 customer satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}