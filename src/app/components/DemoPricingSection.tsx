import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  CheckCircle, 
  Shield, 
  Zap,
  Eye,
  Cpu,
  Sparkles,
  Star,
  Calendar,
  Clock
} from 'lucide-react';

interface DemoPricingSectionProps {
  onPageChange: (page: string) => void;
}

export function DemoPricingSection({ onPageChange }: DemoPricingSectionProps) {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container-responsive">
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm">Demo Package Options</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Try APC EdgeBox™ in Your Environment
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience APC EdgeBox™ with our flexible demo packages. From basic 15-day evaluation to extended packages with purchase credits. 
            <span className="font-semibold text-primary"> All packages include ₹15,000 refundable security deposit.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* 15-Day Standard Demo */}
          <Card className="border-2 border-green-200 hover:border-green-300 transition-colors shadow-lg hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg text-gray-900">15-Day Standard Demo</CardTitle>
                <Badge className="bg-green-500 text-white">Basic</Badge>
              </div>
              <CardDescription className="text-sm">Essential evaluation package</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-4 bg-gradient-to-r from-gray-50 to-green-50 rounded-lg border border-green-100">
                  <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">₹5,000</div>
                  <div className="text-sm text-gray-600 font-medium">Demo fee</div>
                  <div className="text-xs text-gray-500 mt-1">+ Installation charges</div>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">15-day evaluation period</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Complete system setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Live data analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">Technical support included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">₹15,000 refundable deposit</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={() => onPageChange('demo')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3"
                >
                  Request Standard Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 30-Day Extended Demo */}
          <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors shadow-lg hover:shadow-xl border-blue-300 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
            </div>
            <CardHeader className="pb-4 pt-6">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg text-gray-900">30-Day Extended Demo</CardTitle>
                <Badge className="bg-orange-500 text-white">Credit</Badge>
              </div>
              <CardDescription className="text-sm">Extended evaluation with purchase credit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-blue-100">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">₹10,000</div>
                  <div className="text-sm text-gray-600 font-medium">Demo fee</div>
                  <div className="text-xs text-green-600 mt-1 font-semibold">₹7,000 credit on purchase</div>
                  <div className="text-xs text-gray-500">+ Installation charges</div>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">30-day evaluation period</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm">70% purchase credit (₹7,000)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">Extended analytics access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">Priority technical support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">₹15,000 refundable deposit</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={() => onPageChange('demo')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                >
                  Request Extended Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 15-Day Custom Demo */}
          <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors shadow-lg hover:shadow-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg text-gray-900">15-Day Custom Demo</CardTitle>
                <Badge className="bg-purple-500 text-white">Custom</Badge>
              </div>
              <CardDescription className="text-sm">Tailored for specific requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg border border-purple-100">
                  <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-1">₹10,000</div>
                  <div className="text-sm text-gray-600 font-medium">Demo fee</div>
                  <div className="text-xs text-green-600 mt-1 font-semibold">₹7,000 credit on purchase</div>
                  <div className="text-xs text-gray-500">+ Installation charges</div>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                    <span className="text-sm">15-day custom evaluation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm">70% purchase credit (₹7,000)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                    <span className="text-sm">Tailored to requirements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                    <span className="text-sm">Dedicated technical team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm">₹15,000 refundable deposit</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={() => onPageChange('demo')}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3"
                >
                  Request Custom Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Information */}
        <div className="mt-8 lg:mt-12 max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                <Cpu className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-3">Client Infrastructure Requirements</h3>
                <p className="text-amber-700 mb-3">
                  For all demo packages, the client will need to provide the following infrastructure:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-amber-600 flex-shrink-0" />
                      <span className="text-sm text-amber-700">POE (Power over Ethernet)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-amber-600 flex-shrink-0" />
                      <span className="text-sm text-amber-700">Power supply</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-amber-600 flex-shrink-0" />
                      <span className="text-sm text-amber-700">Display monitor</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-amber-600 flex-shrink-0" />
                      <span className="text-sm text-amber-700">Computer/System</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-amber-600 flex-shrink-0" />
                      <span className="text-sm text-amber-700">Backup power supply</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                      <span className="text-sm text-amber-700">Any desired additional systems</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg border border-amber-200">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">Security Deposit:</span>
                    <span className="text-sm text-gray-700">₹15,000 refundable deposit required for all demo packages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}