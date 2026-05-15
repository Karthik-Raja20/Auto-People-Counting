import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Users, 
  Target, 
  Eye, 
  Handshake, 
  Building, 
  TrendingUp,
  Award,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Zap,
  Shield,
  Heart,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Briefcase
} from 'lucide-react';

interface AboutUsProps {
  onPageChange: (page: string) => void;
}

export function AboutUs({ onPageChange }: AboutUsProps) {
  const [activeTab, setActiveTab] = useState('company');

  const companyStats = [
    { value: '2018', label: 'Founded', icon: <Calendar className="h-5 w-5" /> },
    { value: '500+', label: 'Global Installations', icon: <Globe className="h-5 w-5" /> },
    { value: '50+', label: 'Team Members', icon: <Users className="h-5 w-5" /> },
    { value: '15+', label: 'Countries Served', icon: <MapPin className="h-5 w-5" /> }
  ];

  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      position: 'CEO & Co-Founder',
      bio: 'Former Stanford AI researcher with 15+ years in computer vision and edge computing. Led teams at Google and NVIDIA before founding APC Solutions.',
      image: 'professional woman ceo technology leader',
      linkedin: '#',
      email: 'sarah.chen@apcsolutions.com',
      expertise: ['AI Leadership', 'Computer Vision', 'Strategic Planning']
    },
    {
      name: 'Michael Rodriguez',
      position: 'CTO & Co-Founder',
      bio: 'Ex-Apple hardware engineer specializing in edge AI acceleration. 20+ patents in IoT and edge computing technologies.',
      image: 'professional man cto technology engineer',
      linkedin: '#',
      email: 'michael.rodriguez@apcsolutions.com',
      expertise: ['Edge Computing', 'Hardware Design', 'IoT Architecture']
    },
    {
      name: 'Emily Thompson',
      position: 'VP of Sales & Partnerships',
      bio: 'Former Cisco enterprise sales leader with deep expertise in B2B technology solutions and global channel development.',
      image: 'professional woman sales executive business',
      linkedin: '#',
      email: 'emily.thompson@apcsolutions.com',
      expertise: ['Enterprise Sales', 'Channel Partnerships', 'Market Expansion']
    },
    {
      name: 'Dr. James Liu',
      position: 'Head of AI Research',
      bio: 'PhD in Machine Learning from MIT. Previously at OpenAI working on computer vision models. 50+ publications in top-tier conferences.',
      image: 'professional man ai researcher scientist',
      linkedin: '#',
      email: 'james.liu@apcsolutions.com',
      expertise: ['Machine Learning', 'Computer Vision', 'Research & Development']
    },
    {
      name: 'Anna Kowalski',
      position: 'VP of Engineering',
      bio: 'Former Microsoft Azure architect with expertise in scalable cloud systems and enterprise software development.',
      image: 'professional woman engineering manager technology',
      linkedin: '#',
      email: 'anna.kowalski@apcsolutions.com',
      expertise: ['Software Architecture', 'Cloud Systems', 'Team Leadership']
    },
    {
      name: 'David Park',
      position: 'Head of Customer Success',
      bio: 'Customer experience expert from Salesforce with proven track record of scaling support operations for high-growth tech companies.',
      image: 'professional man customer success manager',
      linkedin: '#',
      email: 'david.park@apcsolutions.com',
      expertise: ['Customer Success', 'Support Operations', 'Account Management']
    }
  ];

  const associations = [
    {
      name: 'IEEE Computer Society',
      description: 'Active member contributing to computer vision and AI standards development',
      logo: 'ieee technology association logo',
      type: 'Professional Association',
      since: '2019'
    },
    {
      name: 'International Association of Privacy Professionals (IAPP)',
      description: 'Certified in privacy engineering and GDPR compliance for AI systems',
      logo: 'iapp privacy association logo',
      type: 'Privacy & Compliance',
      since: '2020'
    },
    {
      name: 'Edge Computing Consortium',
      description: 'Founding member driving edge AI standards and best practices',
      logo: 'edge computing consortium logo',
      type: 'Industry Consortium',
      since: '2019'
    },
    {
      name: 'Retail Technology Standards Association',
      description: 'Contributing to retail analytics and people counting standards',
      logo: 'retail technology standards logo',
      type: 'Industry Standards',
      since: '2021'
    }
  ];

  const oemPartners = [
    {
      name: 'NVIDIA',
      description: 'AI computing platform integration for edge inference acceleration',
      logo: 'nvidia technology partner logo',
      partnership: 'AI Computing Partner',
      products: 'Jetson Edge AI Platform'
    },
    {
      name: 'Intel',
      description: 'Intel OpenVINO toolkit integration for optimized AI performance',
      logo: 'intel technology partner logo',
      partnership: 'Technology Partner',
      products: 'OpenVINO AI Toolkit'
    },
    {
      name: 'Axis Communications',
      description: 'Camera hardware integration and compatibility certification',
      logo: 'axis communications camera partner logo',
      partnership: 'Hardware Partner',
      products: 'Professional IP Cameras'
    },
    {
      name: 'Hikvision',
      description: 'Global camera manufacturer partnership for integrated solutions',
      logo: 'hikvision camera partner logo',
      partnership: 'OEM Partner',
      products: 'Smart Camera Integration'
    },
    {
      name: 'Microsoft Azure',
      description: 'Cloud platform integration for hybrid edge-cloud deployments',
      logo: 'microsoft azure cloud partner logo',
      partnership: 'Cloud Partner',
      products: 'Azure IoT Edge Platform'
    },
    {
      name: 'Amazon Web Services',
      description: 'AWS IoT Core integration for scalable cloud analytics',
      logo: 'aws cloud partner logo',
      partnership: 'Cloud Partner',
      products: 'AWS IoT Greengrass'
    }
  ];

  const investments = [
    {
      round: 'Series A',
      amount: '$12M',
      date: 'March 2022',
      leadInvestor: 'Andreessen Horowitz (a16z)',
      participants: ['Google Ventures', 'Intel Capital', 'Bessemer Venture Partners'],
      description: 'Accelerate product development and international expansion'
    },
    {
      round: 'Seed',
      amount: '$3.5M',
      date: 'June 2020',
      leadInvestor: 'Sequoia Capital',
      participants: ['Y Combinator', 'First Round Capital', 'Founders Fund'],
      description: 'Initial product development and market validation'
    }
  ];

  const investmentHighlights = [
    {
      title: 'Market Opportunity',
      value: '$4.2B',
      description: 'Global people counting market size by 2028',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: 'Revenue Growth',
      value: '300%',
      description: 'Year-over-year growth in 2023',
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: 'Customer Retention',
      value: '95%',
      description: 'Annual customer retention rate',
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'International Presence',
      value: '15',
      description: 'Countries with active deployments',
      icon: <Globe className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              🏢 About APC Solutions
            </Badge>
            <h1 className="mb-6 text-gray-900">
              Pioneering the Future of Intelligent Counting
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Founded in 2018 by AI researchers from Stanford and Apple, APC Solutions transforms how organizations 
              understand and optimize space utilization through cutting-edge people counting technology powered by our revolutionary APC EdgeBox™.
            </p>
            
            {/* Company Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {companyStats.map((stat, index) => (
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

      {/* Main Content Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12 bg-secondary h-auto p-2">
              <TabsTrigger value="company" className="flex items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                <Building className="h-4 w-4" />
                Company
              </TabsTrigger>
              <TabsTrigger value="team" className="flex items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                <Users className="h-4 w-4" />
                Leadership
              </TabsTrigger>
              <TabsTrigger value="associations" className="flex items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                <Award className="h-4 w-4" />
                Associations
              </TabsTrigger>
              <TabsTrigger value="partners" className="flex items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                <Handshake className="h-4 w-4" />
                Partners
              </TabsTrigger>
              <TabsTrigger value="investment" className="flex items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-white">
                <TrendingUp className="h-4 w-4" />
                Investment
              </TabsTrigger>
            </TabsList>

            {/* Company Tab */}
            <TabsContent value="company">
              <div className="space-y-16">
                {/* Vision & Mission */}
                <div className="grid lg:grid-cols-2 gap-12">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Eye className="h-6 w-6 text-primary" />
                        Our Vision
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        To create a world where every space is intelligently optimized, where businesses make data-driven 
                        decisions based on real-time insights, and where privacy-first AI transforms operational efficiency 
                        across all industries.
                      </p>
                      <p className="text-gray-600">
                        We envision APC EdgeBox™ as the universal standard for intelligent occupancy monitoring, 
                        deployed in millions of locations worldwide.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Target className="h-6 w-6 text-accent" />
                        Our Mission
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        To democratize intelligent people counting through innovative edge AI technology that respects 
                        privacy, delivers unmatched accuracy, and provides actionable insights that drive operational excellence.
                      </p>
                      <p className="text-gray-600">
                        We empower organizations of all sizes to optimize their spaces, reduce costs, and enhance 
                        experiences through cutting-edge AI solutions.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Core Values */}
                <div>
                  <h2 className="text-center mb-12 text-gray-900">Our Core Values</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        icon: <Shield className="h-8 w-8" />,
                        title: 'Privacy First',
                        description: 'We design privacy protection into every solution from the ground up, ensuring GDPR compliance and data security.'
                      },
                      {
                        icon: <Lightbulb className="h-8 w-8" />,
                        title: 'Innovation',
                        description: 'We push the boundaries of edge AI technology to deliver breakthrough solutions that transform industries.'
                      },
                      {
                        icon: <Heart className="h-8 w-8" />,
                        title: 'Customer Success',
                        description: 'Our customers\' success is our success. We\'re committed to delivering exceptional value and support.'
                      },
                      {
                        icon: <CheckCircle className="h-8 w-8" />,
                        title: 'Excellence',
                        description: 'We strive for excellence in every aspect of our business, from product quality to customer service.'
                      }
                    ].map((value, index) => (
                      <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                            {value.icon}
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-3">{value.title}</h3>
                          <p className="text-sm text-gray-600">{value.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Company Story */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          APC Solutions was born from a simple frustration: existing people counting solutions were either 
                          inaccurate, privacy-invasive, or impossibly complex to deploy. Our founders, Dr. Sarah Chen and 
                          Michael Rodriguez, met at Stanford's AI lab where they were researching privacy-preserving computer vision.
                        </p>
                        <p className="text-gray-600">
                          After witnessing retailers struggle with outdated foot traffic measurement tools, they realized 
                          the massive potential for edge AI to transform how businesses understand space utilization while 
                          respecting individual privacy.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-600">
                          Starting with a prototype built in Sarah's garage, APC Solutions has grown to serve 500+ 
                          installations across 15 countries. Our breakthrough APC EdgeBox™ technology delivers 99%+ accuracy 
                          while ensuring complete privacy compliance.
                        </p>
                        <p className="text-gray-600">
                          Today, we continue to innovate at the intersection of AI, edge computing, and privacy technology, 
                          with the goal of making intelligent space optimization accessible to every organization worldwide.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team">
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="mb-4 text-gray-900">Leadership Team</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Meet the experienced leaders driving innovation in AI-powered people counting technology
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="relative mb-6">
                          <ImageWithFallback
                            src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU4MzU2NDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral`}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-colors"
                          />
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                        <Badge className="mb-4 bg-primary/10 text-primary">
                          {member.position}
                        </Badge>
                        
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {member.bio}
                        </p>

                        <div className="flex flex-wrap justify-center gap-1 mb-4">
                          {member.expertise.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-center gap-3">
                          <Button size="sm" variant="outline" className="group">
                            <Linkedin className="h-3 w-3 mr-1" />
                            LinkedIn
                          </Button>
                          <Button size="sm" variant="outline" className="group">
                            <Mail className="h-3 w-3 mr-1" />
                            Contact
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Associations Tab */}
            <TabsContent value="associations">
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="mb-4 text-gray-900">Professional Associations</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Active participation in industry organizations driving standards and best practices
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {associations.map((association, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <CardTitle className="text-lg">{association.name}</CardTitle>
                          <Badge variant="outline">{association.type}</Badge>
                        </div>
                        <CardDescription className="text-sm">
                          Member since {association.since}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{association.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-accent">Active Member</Badge>
                          <Button variant="outline" size="sm">
                            View Profile
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Partners Tab */}
            <TabsContent value="partners">
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="mb-4 text-gray-900">Technology & OEM Partners</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Strategic partnerships with industry leaders enabling best-in-class solutions
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {oemPartners.map((partner, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          {partner.name}
                          <Badge className="bg-primary/10 text-primary">
                            {partner.partnership}
                          </Badge>
                        </CardTitle>
                        <CardDescription>
                          {partner.products}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">{partner.description}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          View Partnership Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Investment Tab */}
            <TabsContent value="investment">
              <div className="space-y-12">
                <div className="text-center">
                  <h2 className="mb-4 text-gray-900">Investment & Growth</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Backed by leading VCs and showing strong growth across all key metrics
                  </p>
                </div>

                {/* Investment Highlights */}
                <div className="grid md:grid-cols-4 gap-6">
                  {investmentHighlights.map((highlight, index) => (
                    <Card key={index} className="text-center">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                          {highlight.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">{highlight.value}</div>
                        <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                        <p className="text-sm text-gray-600">{highlight.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Funding Rounds */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Funding History</h3>
                  {investments.map((investment, index) => (
                    <Card key={index} className="border-l-4 border-primary">
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{investment.round}</h4>
                            <div className="text-2xl font-bold text-primary mb-1">{investment.amount}</div>
                            <div className="text-sm text-gray-500">{investment.date}</div>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Lead Investor</h5>
                            <div className="text-primary font-medium mb-3">{investment.leadInvestor}</div>
                            <h5 className="font-medium text-gray-900 mb-2">Participants</h5>
                            <div className="flex flex-wrap gap-1">
                              {investment.participants.map((participant, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {participant}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Use of Funds</h5>
                            <p className="text-sm text-gray-600">{investment.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Investment Opportunity */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Series B Investment Opportunity
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                      We're raising $25M Series B to accelerate international expansion, enhance our AI capabilities, 
                      and capture the growing $4.2B people counting market opportunity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="group">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Investors Relations
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button size="lg" variant="outline">
                        Download Investor Deck
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're interested in our solutions, partnerships, or career opportunities, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onPageChange('contact')}
              className="bg-white text-primary hover:bg-gray-100 group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onPageChange('demo')}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Start Free POC
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}