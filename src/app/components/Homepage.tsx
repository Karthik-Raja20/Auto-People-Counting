import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Users, 
  BarChart3, 
  Bell, 
  Wifi, 
  Shield, 
  CheckCircle,
  TrendingUp,
  Clock,
  Target
} from 'lucide-react';

interface HomepageProps {
  onPageChange: (page: string) => void;
}

export function Homepage({ onPageChange }: HomepageProps) {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Real-time Counts",
      description: "Accurate people counting with 99%+ precision using advanced computer vision"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Dwell & Zone Analytics",
      description: "Track visitor behavior, dwell times, and zone-specific insights"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Threshold Alerts",
      description: "Automated notifications when occupancy limits are reached"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "POS & HVAC Integrations",
      description: "Seamless integration with existing systems for optimized operations"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "On-prem / Cloud",
      description: "Flexible deployment options ensuring privacy and compliance"
    }
  ];

  const industries = [
    {
      id: "retail",
      name: "Retail",
      description: "Optimize store layout, reduce queues, and improve customer experience",
      metrics: ["Conversion tracking", "Queue management", "Heat mapping"]
    },
    {
      id: "transit",
      name: "Transit",
      description: "Monitor passenger flow, ensure safety compliance, and optimize capacity",
      metrics: ["Platform monitoring", "Crowd density", "Safety alerts"]
    },
    {
      id: "events",
      name: "Events",
      description: "Track attendance, manage crowd flow, and ensure venue safety",
      metrics: ["Real-time attendance", "Emergency response", "Zone monitoring"]
    },
    {
      id: "buildings",
      name: "Smart Buildings",
      description: "Energy optimization, space utilization, and security enhancement",
      metrics: ["HVAC optimization", "Space utilization", "Energy savings"]
    },
    {
      id: "healthcare",
      name: "Healthcare",
      description: "Patient flow optimization, waiting time reduction, and compliance",
      metrics: ["Patient flow", "Wait time reduction", "Capacity planning"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Privacy-First Technology
              </Badge>
              <h1 className="mb-6 text-gray-900">
                APC EdgeBox™ — The Heart of Smart Counting
              </h1>
              <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                An ultra-compact AI gateway that combines edge computing, built-in AI acceleration, 
                5G connectivity, and secure analytics — powering all APC Solutions for smarter spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => onPageChange('demo')}
                  className="bg-primary hover:bg-primary/90"
                >
                  Request Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => onPageChange('case-studies')}
                >
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1595014373317-8eef4f231fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGJ1aWxkaW5nJTIwY2VpbGluZyUyMGNhbWVyYSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MzU2NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Smart building ceiling camera technology"
                className="rounded-lg shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">Advanced People Counting Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive analytics and insights to transform how you understand and optimize your spaces
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">Solutions by Industry</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored people counting solutions designed for your industry's unique needs
            </p>
          </div>

          <Tabs defaultValue="retail" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              {industries.map((industry) => (
                <TabsTrigger key={industry.id} value={industry.id} className="text-sm">
                  {industry.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">{industry.name} Solutions</CardTitle>
                    <CardDescription className="text-lg">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {industry.metrics.map((metric, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-accent" />
                          <span className="text-gray-700">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Study Strip */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 text-primary bg-white">
                  Case Study Success
                </Badge>
                <h2 className="mb-4 text-white">RetailMall Supermarket</h2>
                <p className="mb-6 text-blue-100 text-lg">
                  Discover how RetailMall Supermarket transformed their operations 
                  with our people counting solution
                </p>
                <Button 
                  variant="secondary" 
                  onClick={() => onPageChange('case-studies')}
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Read Full Case Study
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">-42%</div>
                  <div className="text-blue-100 text-sm">Queue Times</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">-25%</div>
                  <div className="text-blue-100 text-sm">Staff Overtime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">+20%</div>
                  <div className="text-blue-100 text-sm">Conversion Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900">Our Product Range</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of people counting solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow border-primary">
              <CardHeader>
                <Badge className="w-fit bg-primary">Most Popular</Badge>
                <CardTitle>APC Core</CardTitle>
                <CardDescription>
                  Complete end-to-end solution package
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-xs">Turnkey installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-xs">AI-powered analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-xs">24/7 support included</span>
                  </li>
                </ul>
                <Button size="sm" className="w-full">
                  Start POC
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit">Cost Efficient</Badge>
                <CardTitle>APC Flex</CardTitle>
                <CardDescription>
                  Advanced analytics with budget-friendly cameras
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-xs">Economical solution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-xs">Multi-location scalable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-xs">Advanced intelligence</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit">Use Existing</Badge>
                <CardTitle>APC Link</CardTitle>
                <CardDescription>
                  Upgrade existing cameras with AI analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-xs">Maximum ROI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-xs">Retrofit solution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-xs">Leverage current assets</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit bg-accent text-white">Event Rental</Badge>
                <CardTitle>APC EventSense</CardTitle>
                <CardDescription>
                  On-demand rental for temporary events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-xs">Pay per duration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-xs">Rapid deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                    <span className="text-xs">Crowd safety monitoring</span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  Get Rental Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600">
              Request a personalized demo and see how our solution can transform your space
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your use case
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="What kind of space do you want to monitor? What are your main goals?"
                  />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" size="lg" className="w-full">
                    Request Live Demo
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}