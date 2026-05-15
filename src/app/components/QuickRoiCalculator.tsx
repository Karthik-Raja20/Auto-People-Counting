import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

interface QuickRoiCalculatorProps {
  onGetQuote?: () => void;
}

export function QuickRoiCalculator({ onGetQuote }: QuickRoiCalculatorProps) {
  const [visitors, setVisitors] = useState(5000);
  const [sqft, setSqft] = useState(10000);
  const [energyCostPerSqft, setEnergyCostPerSqft] = useState(2);
  
  // Calculated values
  const [results, setResults] = useState({
    conversionIncrease: 0,
    revenueIncrease: 0,
    energySavings: 0,
    totalSavings: 0,
    roiPercentage: 0,
    paybackMonths: 0
  });

  useEffect(() => {
    // Conservative calculations based on industry averages
    const avgTransactionValue = 50; // Average transaction value
    const currentConversionRate = 0.02; // 2% baseline
    const conversionImprovement = 0.23; // 23% improvement (from case studies)
    
    const currentRevenue = visitors * 30 * currentConversionRate * avgTransactionValue; // Monthly
    const newConversionRate = currentConversionRate * (1 + conversionImprovement);
    const newRevenue = visitors * 30 * newConversionRate * avgTransactionValue;
    const revenueIncrease = newRevenue - currentRevenue;
    
    // Energy savings (31% average from case studies)
    const annualEnergyCost = sqft * energyCostPerSqft * 12;
    const energySavings = annualEnergyCost * 0.31; // 31% savings
    const monthlyEnergySavings = energySavings / 12;
    
    // Total monthly savings
    const totalMonthlySavings = revenueIncrease + monthlyEnergySavings;
    const annualSavings = totalMonthlySavings * 12;
    
    // ROI calculation (assuming ₹60,000 investment for APC Core)
    const investment = 60000;
    const roiPercentage = (annualSavings / investment) * 100;
    const paybackMonths = investment / totalMonthlySavings;
    
    setResults({
      conversionIncrease: revenueIncrease,
      revenueIncrease: annualSavings - energySavings,
      energySavings: energySavings,
      totalSavings: annualSavings,
      roiPercentage: roiPercentage,
      paybackMonths: paybackMonths
    });
  }, [visitors, sqft, energyCostPerSqft]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-IN').format(value);
  };

  return (
    <Card className="border-2 border-blue-200 shadow-xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
        <div className="flex items-center gap-2 mb-2">
          <Calculator className="h-6 w-6 text-blue-600" />
          <CardTitle className="text-lg text-gray-900">Quick ROI Calculator</CardTitle>
        </div>
        <CardDescription>
          See your potential savings and ROI in seconds
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6">
        {/* Input Controls */}
        <div className="space-y-6 mb-8">
          {/* Daily Visitors */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">
                Daily Visitors / Foot Traffic
              </label>
              <span className="text-lg font-bold text-blue-600">
                {formatNumber(visitors)}
              </span>
            </div>
            <Slider
              value={[visitors]}
              onValueChange={(value) => setVisitors(value[0])}
              min={100}
              max={50000}
              step={100}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>100</span>
              <span>50,000</span>
            </div>
          </div>

          {/* Square Footage */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">
                Total Space (sq ft)
              </label>
              <span className="text-lg font-bold text-green-600">
                {formatNumber(sqft)}
              </span>
            </div>
            <Slider
              value={[sqft]}
              onValueChange={(value) => setSqft(value[0])}
              min={1000}
              max={100000}
              step={1000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1,000</span>
              <span>100,000</span>
            </div>
          </div>

          {/* Energy Cost per Sq Ft */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">
                Annual Energy Cost per sq ft (₹)
              </label>
              <span className="text-lg font-bold text-purple-600">
                ₹{energyCostPerSqft}
              </span>
            </div>
            <Slider
              value={[energyCostPerSqft]}
              onValueChange={(value) => setEnergyCostPerSqft(value[0])}
              min={1}
              max={10}
              step={0.5}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹1</span>
              <span>₹10</span>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 mb-6 border-2 border-green-200">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-green-600 animate-pulse" />
            <h3 className="font-semibold text-gray-900">Your Projected Annual Savings</h3>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <div className="text-xs text-gray-600 mb-1">Revenue Increase</div>
              <div className="text-xl font-bold text-green-600">
                {formatCurrency(results.revenueIncrease)}
              </div>
              <div className="text-xs text-gray-500 mt-1">From 23% conversion lift</div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <div className="text-xs text-gray-600 mb-1">Energy Savings</div>
              <div className="text-xl font-bold text-blue-600">
                {formatCurrency(results.energySavings)}
              </div>
              <div className="text-xs text-gray-500 mt-1">From 31% reduction</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-6 text-center">
            <div className="text-sm opacity-90 mb-2">Total Annual Savings</div>
            <div className="text-4xl font-bold mb-3">
              {formatCurrency(results.totalSavings)}
            </div>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span>{Math.round(results.roiPercentage)}% ROI</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                <span>{Math.round(results.paybackMonths)} month payback</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span>Based on real customer data from 200+ installations</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span>Conservative estimates - many see 300-500% ROI</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span>Additional savings from labor optimization not included</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={onGetQuote}
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-base font-semibold py-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <Calculator className="mr-2 h-5 w-5" />
          Get Detailed ROI Report
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <p className="text-xs text-center text-gray-500 mt-3">
          Free personalized report • No credit card required
        </p>
      </CardContent>
    </Card>
  );
}
