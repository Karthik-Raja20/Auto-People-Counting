import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { toast } from 'sonner';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Users, 
  Headphones,
  Globe,
  Calendar,
  ArrowRight,
  CheckCircle,
  Send,
  Building,
  Zap,
  Shield,
  Star
} from 'lucide-react';

interface ContactProps {
  onPageChange: (page: string) => void;
}

export function Contact({ onPageChange }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    inquiry: '',
    message: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1-800-APC-HELP (800-272-4357)',
      availability: 'Mon-Fri 8AM-8PM EST',
      action: 'Call Now',
      urgency: 'Immediate response',
      color: 'bg-primary',
      link: 'tel:+18002724357'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp Business',
      description: 'Quick chat with instant responses',
      contact: '+1-800-726-2357',
      availability: 'Mon-Fri 8AM-8PM EST',
      action: 'Start Chat',
      urgency: 'Response within 5 mins',
      color: 'bg-green-500',
      link: 'https://wa.me/18007262357?text=Hi! I\'m interested in APC solutions.'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Support',
      description: 'Detailed inquiries and documentation',
      contact: 'info@apcsolutions.com',
      availability: '24/7 Monitoring',
      action: 'Send Email',
      urgency: 'Response within 4 hours',
      color: 'bg-blue-500',
      link: 'mailto:info@apcsolutions.com'
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Schedule Consultation',
      description: 'Book a personalized demo session',
      contact: 'Book 30-min session',
      availability: 'Multiple time slots',
      action: 'Book Now',
      urgency: 'Next available: Today',
      color: 'bg-purple-500',
      link: 'https://calendly.com/apc-solutions'
    }
  ];

  const departments = [
    {
      name: 'Sales & New Business',
      email: 'sales@apcsolutions.com',
      phone: '+1-800-272-4357 ext. 1',
      description: 'Product inquiries, quotes, and new POCs',
      hours: 'Mon-Fri 8AM-8PM EST'
    },
    {
      name: 'Technical Support',
      email: 'support@apcsolutions.com',
      phone: '+1-800-272-4357 ext. 2',
      description: 'Installation help, troubleshooting, and maintenance',
      hours: '24/7 for APC Core customers'
    },
    {
      name: 'Partnerships & Channel',
      email: 'partners@apcsolutions.com',
      phone: '+1-800-272-4357 ext. 3',
      description: 'Reseller programs and strategic partnerships',
      hours: 'Mon-Fri 9AM-6PM EST'
    },
    {
      name: 'Billing & Accounts',
      email: 'billing@apcsolutions.com',
      phone: '+1-800-272-4357 ext. 4',
      description: 'Billing questions, account management, and renewals',
      hours: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const offices = [
    {
      city: 'New York (Headquarters)',
      address: '123 Tech Boulevard, Suite 500',
      fullAddress: 'New York, NY 10001, USA',
      phone: '+1-212-555-0123',
      email: 'ny.office@apcsolutions.com',
      timezone: 'EST',
      type: 'Primary'
    },
    {
      city: 'San Francisco',
      address: '456 Innovation Drive, Floor 12',
      fullAddress: 'San Francisco, CA 94105, USA',
      phone: '+1-415-555-0156',
      email: 'sf.office@apcsolutions.com',
      timezone: 'PST',
      type: 'West Coast Hub'
    },
    {
      city: 'London',
      address: '789 Tech Park, Building C',
      fullAddress: 'London EC2A 4NE, UK',
      phone: '+44-20-7555-0189',
      email: 'london.office@apcsolutions.com',
      timezone: 'GMT',
      type: 'European Hub'
    },
    {
      city: 'Singapore',
      address: '321 Marina Bay Center, Level 15',
      fullAddress: 'Singapore 018936',
      phone: '+65-6555-0234',
      email: 'singapore.office@apcsolutions.com',
      timezone: 'SGT',
      type: 'Asia-Pacific Hub'
    }
  ];

  const inquiryTypes = [
    'General Product Information',
    'Request Demo/POC',
    'Technical Support',
    'Pricing & Quotes',
    'Partnership Opportunities',
    'Billing & Account Issues',
    'Integration Questions',
    'Compliance & Security',
    'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully! We\'ll respond within 4 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        inquiry: '',
        message: '',
        urgency: 'normal'
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              🤝 We're Here to Help
            </Badge>
            <h1 className="mb-6 text-gray-900">
              Get in Touch with APC Experts
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Whether you need technical support, want to explore solutions, or ready to start your POC — 
              our team of experts is standing by to help you succeed with intelligent people counting.
            </p>
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: '< 5min', label: 'WhatsApp Response', icon: <MessageCircle className="h-5 w-5" /> },
                { value: '< 4hrs', label: 'Email Response', icon: <Mail className="h-5 w-5" /> },
                { value: '24/7', label: 'Support Available', icon: <Clock className="h-5 w-5" /> },
                { value: '95%', label: 'Customer Satisfaction', icon: <Star className="h-5 w-5" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white/60 backdrop-blur">
                  <div className="flex items-center justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">Choose Your Preferred Contact Method</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us — pick the one that works best for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="font-medium text-primary">{method.contact}</div>
                    <div className="text-xs text-gray-500">{method.availability}</div>
                    <Badge variant="outline" className="text-xs">
                      {method.urgency}
                    </Badge>
                  </div>

                  <Button 
                    className="w-full group"
                    onClick={() => window.open(method.link, '_blank')}
                  >
                    {method.action}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form and we'll get back to you within 4 hours during business hours.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="inquiry">Inquiry Type *</Label>
                      <Select value={formData.inquiry} onValueChange={(value) => handleInputChange('inquiry', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - General inquiry</SelectItem>
                          <SelectItem value="normal">Normal - Standard response</SelectItem>
                          <SelectItem value="high">High - Need quick response</SelectItem>
                          <SelectItem value="urgent">Urgent - Critical issue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please describe your inquiry, requirements, or questions in detail..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending Message...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Departments */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Headphones className="h-5 w-5 text-primary" />
                    Department Contacts
                  </CardTitle>
                  <CardDescription>
                    Reach the right team directly for faster assistance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-l-4 border-primary/20 pl-4">
                      <h4 className="font-semibold text-gray-900">{dept.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3 text-primary" />
                          <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="text-primary hover:underline">
                            {dept.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3 text-primary" />
                          <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                            {dept.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3 text-gray-400" />
                          <span className="text-gray-500">{dept.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Emergency Support */}
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <Zap className="h-5 w-5" />
                    Emergency Support
                  </CardTitle>
                  <CardDescription className="text-red-600">
                    Critical system issues affecting operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-red-500" />
                      <a href="tel:+18002724357" className="font-semibold text-red-700 hover:underline">
                        +1-800-APC-HELP (24/7 Hotline)
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-red-500" />
                      <a href="mailto:emergency@apcsolutions.com" className="font-semibold text-red-700 hover:underline">
                        emergency@apcsolutions.com
                      </a>
                    </div>
                    <p className="text-sm text-red-600 mt-2">
                      For APC Core customers: Guaranteed response within 15 minutes
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">Global Offices</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to serve you across different time zones with local expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{office.city}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {office.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div>{office.address}</div>
                        <div className="text-gray-500">{office.fullAddress}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-sm text-primary hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href={`mailto:${office.email}`} className="text-sm text-primary hover:underline">
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Timezone: {office.timezone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-8 text-gray-900">Business Hours & Response Times</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Standard Support</h3>
                <div className="text-sm text-gray-600">
                  <div>Monday - Friday</div>
                  <div className="font-medium">8:00 AM - 8:00 PM EST</div>
                  <div className="mt-2 text-xs text-gray-500">Response within 4 hours</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Premium Support</h3>
                <div className="text-sm text-gray-600">
                  <div>24/7 Availability</div>
                  <div className="font-medium">APC Core Customers</div>
                  <div className="mt-2 text-xs text-gray-500">Response within 15 minutes</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Instant Chat</h3>
                <div className="text-sm text-gray-600">
                  <div>WhatsApp & Live Chat</div>
                  <div className="font-medium">Monday - Friday</div>
                  <div className="mt-2 text-xs text-gray-500">Response within 5 minutes</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">
            Let's Start the Conversation
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're ready to deploy or just exploring options, our team is here to guide you 
            every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onPageChange('demo')}
              className="bg-white text-primary hover:bg-gray-100 group"
            >
              Start Free POC
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://wa.me/18007262357', '_blank')}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}