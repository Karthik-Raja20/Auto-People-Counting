import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Users, 
  BarChart3, 
  Wifi, 
  Music, 
  CheckCircle, 
  InfoIcon,
  Clock,
  Shield,
  CreditCard,
  Calendar,
  Home,
  AlertCircle,
  Star,
  Sparkles,
  PlayCircle,
  DollarSign
} from 'lucide-react';

interface ComprehensivePricingProps {
  onPageChange: (page: string) => void;
  coreSolutions: any[];
  allSolutions: any[];
}

export function ComprehensivePricing({ onPageChange, coreSolutions, allSolutions }: ComprehensivePricingProps) {
  const [selectedModel, setSelectedModel] = useState('onetime');

  // Function to get the appropriate solutions array based on pricing model
  const getSolutions = (model: string) => {
    const mapSolution = (solution: any) => ({
      ...solution,
      subscriptionMonthly: (() => {
        const match = solution.subscriptionDetails?.match(/₹(\d+,?\d*)/);
        return match ? '₹' + match[1] : '₹0';
      })(),
      rentalSecurity: (() => {
        const match = solution.rentalDetails?.match(/₹(\d+,?\d*)/);
        return match ? match[1] : '0';
      })()
    });

    switch (model) {
      case 'onetime':
      case 'subscription':
        return coreSolutions.map(mapSolution);
      case 'rental':
        return allSolutions.map(mapSolution);
      default:
        return coreSolutions.map(mapSolution);
    }
  };

  const renderPricingCard = (solution: any, model: string) => {
    let displayPrice = '';
    let priceDetails = '';
    let additionalInfo = '';

    switch (model) {
      case 'onetime':
        displayPrice = solution.price;
        priceDetails = 'One-time Payment';
        additionalInfo = 'Complete ownership, no recurring costs';
        break;
      case 'subscription':
        displayPrice = solution.subscriptionPrice;
        priceDetails = `50% Advance + ${solution.subscriptionMonthly}/month`;
        additionalInfo = '24-month commitment, balance payable regardless of continuation';
        break;
      case 'rental':
        if (solution.id === 'eventSense') {
          displayPrice = solution.rentalPrice;
          priceDetails = 'Per day per unit';
          additionalInfo = 'Min 4-5 days, ₹10,000 refundable deposit per unit, 30-day advance notice';
        } else {
          displayPrice = solution.rentalPrice;
          priceDetails = 'Per unit (min 3-4 days)';
          additionalInfo = `Max as per client requirement, ₹${solution.rentalSecurity} security deposit per unit`;
        }
        break;
      case 'demo':
        displayPrice = 'From ₹5,000';
        priceDetails = 'Multiple demo options';
        additionalInfo = '15-day, 30-day, or custom demos available';
        break;
    }

    // Determine pricing class and card styling based on model
    const priceClass = model === 'rental' ? 'rental-price-compact' : 'price-responsive';
    const isRental = model === 'rental';

    return (
      <Card key={solution.id} className={`relative border-2 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl ${isRental ? 'h-full flex flex-col' : ''}`}>
        <CardHeader className={`pb-4 ${isRental ? 'flex-shrink-0' : ''}`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 lg:gap-3 flex-1 min-w-0">
              <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                {solution.icon}
              </div>
              <div className="min-w-0 flex-1">
                <CardTitle className={`${isRental ? 'text-base lg:text-lg' : 'text-lg'} truncate`}>
                  {solution.name}
                </CardTitle>
                <CardDescription className="text-xs lg:text-sm truncate">
                  {solution.subtitle}
                </CardDescription>
              </div>
            </div>
            <Badge className={`${solution.badgeColor} text-white text-xs flex-shrink-0 ml-2`}>
              {solution.badge}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className={isRental ? 'flex-1 flex flex-col' : ''}>
          <div className={`space-y-4 ${isRental ? 'flex-1 flex flex-col' : ''}`}>
            {/* Pricing Display */}
            <div className="text-center py-3 lg:py-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
              <div className={`${priceClass} text-primary mb-1`}>{displayPrice}</div>
              <div className="text-xs lg:text-sm text-gray-600 font-medium">{priceDetails}</div>
              <div className={`text-xs text-gray-500 mt-1 ${isRental ? 'text-truncate-responsive' : ''}`}>
                {additionalInfo}
              </div>
            </div>

            {/* Features */}
            <div className={`space-y-2 ${isRental ? 'flex-1' : ''}`}>
              {solution.features.slice(0, isRental ? 3 : solution.features.length).map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-500 flex-shrink-0" />
                  <span className="text-xs lg:text-sm line-clamp-1">{feature}</span>
                </div>
              ))}
              {isRental && solution.features.length > 3 && (
                <div className="text-xs text-gray-500 italic">+{solution.features.length - 3} more features</div>
              )}
            </div>

            {/* CTA Button */}
            <Button 
              onClick={() => onPageChange('demo')}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 lg:py-3 text-xs lg:text-sm mt-auto"
            >
              Get Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Flexible Payment Options
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose the payment model that best fits your business needs. All options include installation, training, and support.
          </p>
        </div>

        {/* Payment Model Selector */}
        <div className="mb-8">
          <Tabs value={selectedModel} onValueChange={setSelectedModel} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="onetime" className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                <CreditCard className="h-4 w-4" />
                <span className="hidden sm:inline">One-time</span>
                <span className="sm:hidden">Buy</span>
              </TabsTrigger>
              <TabsTrigger value="subscription" className="flex items-center gap-2 data-[state=active]:bg-green-500 data-[state=active]:text-white">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Subscription</span>
                <span className="sm:hidden">Subscribe</span>
              </TabsTrigger>
              <TabsTrigger value="rental" className="flex items-center gap-2 data-[state=active]:bg-purple-500 data-[state=active]:text-white">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Rental</span>
                <span className="sm:hidden">Rent</span>
              </TabsTrigger>
            </TabsList>

            {/* Payment Model Details */}
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200">
              <TabsContent value="onetime" className="mt-0">
                <div className="flex items-start gap-4">
                  <CreditCard className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">One-time Purchase</h3>
                    <p className="text-gray-700 mb-3">Complete ownership with no recurring payments. Includes full system, installation, training, and 1-year warranty.</p>
                    <div className="text-sm text-gray-600">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Installation & service charges as applicable</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>All taxes included in pricing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="subscription" className="mt-0">
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Subscription Model</h3>
                    <p className="text-gray-700 mb-3">Lower upfront cost with 50% advance payment and monthly installments over 24 months.</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        <span><strong>24-month minimum commitment</strong> - Balance payable even if discontinued</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Monthly payments automatically deducted</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Full ownership after 24 months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="rental" className="mt-0">
                <div className="flex items-start gap-4">
                  <Home className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Rental Model</h3>
                    <p className="text-gray-700 mb-3">Perfect for events, temporary installations, and short-term deployments.</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        <span><strong>Core/Flex/Link: Min 3-4 days, max as per client requirement</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        <span><strong>EventSense: ₹8,000/day, Min 4-5 days, 30-day advance notice</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span>₹10,000-₹20,000 refundable security deposit per device</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Installation, conveyance & engineer charges as per actual</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        <span><strong>Client provides:</strong> Power, PC, Display, POE, Computer/Laptop</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Site visit included for assessment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>

            {/* Pricing Cards */}
            <TabsContent value="onetime">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {getSolutions('onetime').map((solution) => renderPricingCard(solution, 'onetime'))}
              </div>
            </TabsContent>

            <TabsContent value="subscription">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {getSolutions('subscription').map((solution) => renderPricingCard(solution, 'subscription'))}
              </div>
            </TabsContent>

            <TabsContent value="rental">
              {/* Improved responsive grid for rental - 4 cards arrangement */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {getSolutions('rental').map((solution) => renderPricingCard(solution, 'rental'))}
              </div>
              
              {/* Additional rental info for mobile */}
              <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200 lg:hidden">
                <h4 className="font-semibold text-purple-900 mb-2 text-sm">📱 Rental Quick Info</h4>
                <div className="text-xs text-purple-700 space-y-1">
                  <div>• <strong>Core/Flex/Link:</strong> Min 3-4 days, max as per client requirement</div>
                  <div>• <strong>EventSense:</strong> Daily rental, min 4-5 days</div>
                  <div>• <strong>Security deposits:</strong> ₹10,000-₹20,000 per unit</div>
                  <div>• <strong>EventSense:</strong> 30-day advance notice required</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Additional Information */}
        <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Additional Information</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">All-Inclusive Pricing</h4>
              <p className="text-sm text-gray-600">No hidden costs. All taxes, installation, and service charges clearly mentioned.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">GDPR Compliant</h4>
              <p className="text-sm text-gray-600">Privacy-focused design with comprehensive data protection.</p>
            </div>
            <div className="text-center md:col-span-2 lg:col-span-1">
              <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
              <h4 className="font-medium text-gray-900 mb-1">24/7 Support</h4>
              <p className="text-sm text-gray-600">Round-the-clock technical support and monitoring.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to get started?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Button 
              onClick={() => onPageChange('demo-packages')}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <PlayCircle className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Request DEMO
            </Button>
            <Button 
              onClick={() => onPageChange('demo')}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <DollarSign className="h-5 w-5 mr-2" />
              Get Quote
            </Button>
            <Button 
              onClick={() => onPageChange('products')}
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <InfoIcon className="h-5 w-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}