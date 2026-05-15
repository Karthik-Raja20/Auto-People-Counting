# Interactive Header with Video Demo & Interactive Tools

## Overview
The Interactive Header is a comprehensive header component designed for the APC Solutions website that combines video demonstration capabilities with interactive tools to engage visitors and provide valuable insights.

## Features

### 1. **Video Demo Player**
- 2-minute product demonstration video
- Full-screen modal support
- Play/pause controls
- Mute/unmute functionality
- Duration badge
- Smooth transitions and animations
- Click-to-expand functionality

### 2. **Interactive Tools**

#### ROI Calculator
- **Purpose**: Help potential customers calculate their return on investment
- **Inputs**:
  - Monthly Visitors (1,000 - 100,000)
  - Conversion Rate (0.5% - 20%)
  - Average Transaction Value (₹100 - ₹5,000)
  - Expected Optimization Gain (5% - 50%)
- **Outputs**:
  - Monthly Revenue Gain
  - Annual Revenue Gain
  - ROI (First Year)
  - Payback Period
- **Color Scheme**: Blue accent (primary CTA color)

#### Live Demo Simulator
- **Purpose**: Demonstrate real-time people counting functionality
- **Features**:
  - Simulated live occupancy counter
  - Entry/exit statistics
  - Accuracy display (99.2%)
  - Start/pause controls
  - Dynamic number generation
- **Color Scheme**: Green accent (success/active color)

#### Product Configurator
- **Purpose**: Allow visitors to build their custom solution
- **Steps**:
  1. **Select Product**: Core, Flex, or Link
  2. **Choose Deployment**: LocalView, CloudSync, or SmartConnect
  3. **Select Pricing Model**: One-time, Subscription, or Rental
- **Output**: Configuration summary with pricing
- **Color Scheme**: Gray accent (neutral/professional)

### 3. **Quick Info Tabs**
- **Overview**: Key benefits and accuracy metrics
- **Features**: Real-time monitoring, analytics, multi-zone tracking
- **Pricing**: Quick pricing reference for all products

### 4. **Quick Stats**
- 99% Accuracy
- 500+ Installations
- 15min Setup Time

## Design Guidelines

### Color Scheme (As per requirements)
- **Primary Actions**: Blue (#2563eb)
- **Success/Active**: Green (#10b981)
- **Neutral/Professional**: Gray (#374151, #6b7280)
- **Alerts Only**: Red (reserved for urgency messages)

### Typography
- **Content**: 12-14px (text-xs to text-sm in Tailwind)
- **Headers**: 14px base, up to 18px for main titles
- **Emphasis**: Bold weight for key metrics and CTAs

### Interactions
- **Click-controlled**: All modals and tools open on click
- **No auto-play**: Videos require user interaction
- **Smooth transitions**: All animations use ease-in-out curves
- **Responsive**: Adapts to all screen sizes

## Usage

### Basic Implementation
```tsx
import { InteractiveHeader } from './components/InteractiveHeader';

// In your page component
<InteractiveHeader onPageChange={handlePageChange} />
```

### Integration Points
The component accepts one prop:
- `onPageChange`: Function to navigate to different pages

### Modal States
The component manages three modal states:
1. `showVideoModal` - Full-screen video player
2. `showROICalculator` - ROI calculation tool
3. `showLiveDemo` - Live demo simulator
4. `showConfigurator` - Product configuration tool

## Customization

### Modifying Products
Edit the `products` array in the component:
```tsx
const products = [
  { id: 'core', name: 'APC Core', price: 60000, accuracy: '99%', features: [...] },
  // Add or modify products
];
```

### Updating Deployment Options
Edit the `deploymentOptions` array:
```tsx
const deploymentOptions = [
  { id: 'localView', name: 'LocalView', desc: 'On-premise only', icon: Settings },
  // Add or modify options
];
```

### Adjusting ROI Calculator
Modify the `roiInputs` initial state and slider ranges:
```tsx
const [roiInputs, setRoiInputs] = useState({
  visitors: 10000,        // Default value
  conversionRate: 2.5,    // Default %
  averageSpend: 500,      // Default ₹
  optimizationGain: 15    // Default %
});
```

## Accessibility Features
- Keyboard navigation support (Escape to close modals)
- ARIA labels on interactive elements
- Focus management in modals
- Clear visual feedback on all interactions
- Touch-friendly targets on mobile

## Performance Considerations
- Images use lazy loading via ImageWithFallback
- Modals only render when open
- Smooth animations with CSS transforms
- Optimized re-renders with proper state management

## Mobile Responsiveness
- Grid layout collapses to single column on mobile
- Tool cards stack vertically
- Video player maintains aspect ratio
- Tabs remain accessible and touch-friendly
- All modals are mobile-optimized

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Fallbacks for older browsers via ImageWithFallback

## Future Enhancements
- Video analytics tracking
- A/B testing for different CTAs
- Real video integration (currently uses placeholder images)
- Advanced configuration options
- Integration with backend for real ROI data
- Save configuration feature
- Email configuration summary

## Dependencies
- React hooks (useState, useEffect, useRef)
- Lucide React icons
- ShadCN UI components (Button, Card, Dialog, Slider, Tabs, Badge, Label)
- ImageWithFallback component
- Tailwind CSS for styling
- Custom CSS in `/styles/interactive-header.css`

## Best Practices
1. Always test on multiple devices and screen sizes
2. Ensure all interactive elements are keyboard accessible
3. Maintain color contrast ratios for WCAG compliance
4. Keep modal content concise and scannable
5. Provide clear CTAs in all interactive tools
6. Test with real user data when available
7. Monitor conversion rates from each tool

## Troubleshooting

### Videos not playing
- Check image source URLs
- Verify ImageWithFallback component is working
- For real videos, ensure proper CORS headers

### Modals not closing
- Check if Escape key handler is working
- Verify dialog state management
- Check for z-index conflicts

### Styling issues
- Ensure globals.css imports interactive-header.css
- Check Tailwind class conflicts
- Verify custom CSS is loading

## Support
For issues or questions, refer to the main project documentation or contact the development team.
