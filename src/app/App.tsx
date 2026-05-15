import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { CompactEnhancedHomepage } from './components/CompactEnhancedHomepage';
import { HighConversionHomepage } from './components/HighConversionHomepage';
import { OptimizedHomepage } from './components/OptimizedHomepage';
import { Products } from './components/Products';
import { RedesignedProductsHub } from './components/RedesignedProductsHubWithComprehensivePricing';
import { Applications } from './components/Applications';
import { Insights } from './components/Insights';
import { InsightsHub } from './components/InsightsHub';
import { AboutUs } from './components/AboutUs';
import { Contact } from './components/Contact';
import { CaseStudies } from './components/CaseStudies';
import { DashboardDemo } from './components/DashboardDemo';
import { DemoForm } from './components/DemoForm';
import { FAQ } from './components/FAQ';
import { ProductCore } from './components/ProductCore';
import { ProductFlex } from './components/ProductFlex';
import { ProductLink } from './components/ProductLink';
import { ProductEventSense } from './components/ProductEventSense';
import { EnterpriseProductPage } from './components/EnterpriseProductPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { VisibleBottomSection } from './components/VisibleBottomSection';
import { MinimalModalDemo } from './components/MinimalModalDemo';
import { SuccessStories } from './components/SuccessStories';
import { DemoEffects } from './components/DemoEffects';
import { SmartChatbot } from './components/SmartChatbot';

// SEO Meta data for each page
const pageMetadata = {
  home: {
    title: 'Auto People Counting - AI Analytics Platform | APC Solutions',
    description: 'Transform your space with AI-powered people counting. 99% accuracy, GDPR compliant, real-time insights. 15-day free trial available.',
    keywords: 'auto people counting, people counting system, footfall analytics, occupancy monitoring, people flow analytics, real-time people counter, crowd analytics, retail foot traffic, smart building occupancy, people counting camera, edge analytics, GDPR compliant people counter, people counting API, people counting software, visitor analytics'
  },
  products: {
    title: 'APC Products Hub | Complete Lineup & Detailed Specifications | Overview & Tech Specs',
    description: 'Complete APC product hub with overview and detailed specifications. Core (₹60,000), Flex (₹45,000), Link (₹35,000), EventSense (₹8,000/day). Compare features, pricing, and technical details.',
    keywords: 'people counting products, APC Core, APC Flex, APC Link, APC EventSense, product specifications, detailed features, technical specs, product comparison, pricing options'
  },
  applications: {
    title: 'Industry Solutions & Enterprise Applications | Retail, Office, Healthcare, Transport',
    description: 'Enterprise APC solutions for retail, offices, airports, hospitals, warehouses, museums, government. Real case studies with proven ROI and professional-grade implementations.',
    keywords: 'retail analytics, office optimization, airport crowd management, healthcare occupancy, warehouse efficiency, enterprise applications, industry solutions'
  },

  insights: {
    title: 'Industry Insights & Expert Analysis | Blog, Whitepapers & Resources | APC Solutions',
    description: 'Expert insights, industry trends, whitepapers, and video resources. Stay ahead with the latest people counting analytics trends and best practices.',
    keywords: 'industry insights, expert analysis, blog posts, whitepapers, video resources, people counting trends, analytics best practices, AI technology insights'
  },
  'success-stories': {
    title: 'Success Stories & Case Studies | Real ROI Results & Customer Testimonials | APC Solutions',
    description: 'Real customer success stories with proven ROI results across 25+ industries. See how leading organizations achieved remarkable results with APC Solutions.',
    keywords: 'success stories, case studies, customer testimonials, ROI results, customer success, implementation examples, real results, proven solutions'
  },
  about: {
    title: 'About APC Solutions | AI Pioneers in People Counting Technology',
    description: 'Founded by Stanford AI researchers. $15.5M funded. 500+ global installations. Meet our team, partners, and vision for intelligent space optimization.',
    keywords: 'about APC Solutions, AI company, Stanford founders, people counting technology, investment'
  },
  'case-study': {
    title: 'Success Stories, Case Studies & Industry Insights | Real ROI Results & Expert Resources',
    description: '7 detailed case studies across 8 industries plus expert insights, whitepapers, videos. See real ROI results, customer testimonials, and proven success stories.',
    keywords: 'case studies, success stories, customer testimonials, ROI results, implementation examples, customer success, industry insights, whitepapers, resources'
  },
  contact: {
    title: 'Contact APC Solutions | Get Expert Help & Support',
    description: 'Contact APC experts: +1-800-APC-HELP, WhatsApp support, global offices. Technical support, sales inquiry, and customer service.',
    keywords: 'contact APC Solutions, customer support, technical help, sales inquiry, phone support'
  },

  demo: {
    title: 'Try APC EdgeBox™ in Your Environment | Demo Package Options | APC Solutions',
    description: 'Choose from 1-Day FREE demo, 15-Day ₹5,000 POC, or 30-Day ₹10,000 trial. 60% adjustable in final procurement. Installation & conveyance charges applicable.',
    keywords: 'free demo, POC, 1-day free trial, 15-day demo, 30-day trial, EdgeBox demo, people counting trial, proof of concept, demo packages'
  },
  'demo-packages': {
    title: 'Demo Package Options | Try APC EdgeBox™ in Your Environment | APC Solutions',
    description: '1-Day FREE demo, 15-Day ₹5,000 POC (Popular), 30-Day ₹10,000 trial. Complete system trial, full analytics access, performance evaluation, ROI calculation support.',
    keywords: 'demo packages, free demo, 1-day demo, 15-day POC, 30-day trial, system evaluation, analytics access, performance evaluation, ROI calculation'
  },
  faq: {
    title: 'FAQ | People Counting Questions & Answers | APC Solutions',
    description: 'Comprehensive FAQ covering APC solutions, pricing, technical requirements, implementation, and ROI. Expert answers to all your people counting questions.',
    keywords: 'FAQ, frequently asked questions, people counting help, APC support, technical questions, pricing questions'
  },
  'product-core': {
    title: 'APC Core | Premium People Counting Solution | ₹60,000',
    description: 'Complete turnkey people counting with AI cameras, EdgeBox™, and 24/7 support. Up to 99% accuracy. One-time ₹60,000, subscription ₹30,000 advance + ₹5,000/month, or rental min 3-4 days.',
    keywords: 'APC Core, premium people counting, AI cameras, EdgeBox, turnkey solution, 99% accuracy, Indian pricing'
  },
  'product-flex': {
    title: 'APC Flex | Cost-Effective People Counting | ₹45,000',
    description: 'Advanced people counting analytics with budget-friendly cameras. Up to 95% accuracy. One-time ₹45,000, subscription ₹22,500 advance + ₹4,000/month, or rental min 3-4 days.',
    keywords: 'APC Flex, budget people counting, cost effective, franchises, 95% accuracy, scalable, Indian pricing'
  },
  'product-link': {
    title: 'APC Link | Upgrade Existing Cameras | ₹35,000',
    description: 'Transform existing IP cameras into intelligent people counting systems. Maximum ROI. One-time ₹35,000, subscription ₹17,500 advance + ₹3,000/month, or rental min 3-4 days.',
    keywords: 'APC Link, existing cameras, IP camera upgrade, maximum ROI, retrofit, ONVIF cameras, Indian pricing'
  },
  'product-eventsense': {
    title: 'APC EventSense | Event Rental Solution | ₹8,000/day',
    description: 'Portable people counting for events, festivals, and temporary deployments. ₹8,000/day rental, min 4-5 days, ₹10,000 refundable deposit. 30-day advance notice required.',
    keywords: 'APC EventSense, event rental, festival crowd monitoring, portable people counting, temporary deployment, event pricing'
  },
  'enterprise': {
    title: 'Enterprise Auto People Counting | Professional Grade Solutions',
    description: 'Enterprise-grade people counting with 99% accuracy, real-time analytics, and privacy compliance. Rental, subscription, and perpetual license options available.',
    keywords: 'enterprise people counting, professional analytics, business intelligence, enterprise software, real-time monitoring'
  },
  'product-detail': {
    title: 'Auto People Counting System | AI-Powered Analytics Platform',
    description: 'Advanced people counting system with 99% accuracy, GDPR compliance, and real-time analytics. Rental, subscription, and license options. 15-day free trial available.',
    keywords: 'auto people counting, people counting system, footfall analytics, occupancy monitoring, people flow analytics, real-time people counter, crowd analytics, retail foot traffic, smart building occupancy, people counting camera, edge analytics, privacy-compliant people counting, GDPR compliant people counter, people counting API, people counting software, visitor analytics'
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update page metadata for SEO and responsive settings
  useEffect(() => {
    const metadata = pageMetadata[currentPage as keyof typeof pageMetadata] || pageMetadata.home;
    
    // Ensure proper viewport meta tag for responsive design
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');

    // Add responsive meta tags
    let formatDetection = document.querySelector('meta[name="format-detection"]');
    if (!formatDetection) {
      formatDetection = document.createElement('meta');
      formatDetection.setAttribute('name', 'format-detection');
      formatDetection.setAttribute('content', 'telephone=no');
      document.head.appendChild(formatDetection);
    }

    // Add theme-color for mobile browsers
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.setAttribute('name', 'theme-color');
      themeColor.setAttribute('content', '#2563eb');
      document.head.appendChild(themeColor);
    }

    // Add mobile web app capability
    let webAppCapable = document.querySelector('meta[name="mobile-web-app-capable"]');
    if (!webAppCapable) {
      webAppCapable = document.createElement('meta');
      webAppCapable.setAttribute('name', 'mobile-web-app-capable');
      webAppCapable.setAttribute('content', 'yes');
      document.head.appendChild(webAppCapable);
    }

    // Update document title
    document.title = metadata.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metadata.description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', metadata.keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = metadata.keywords;
      document.head.appendChild(meta);
    }

    // Add canonical URL
    const canonicalUrl = document.querySelector('link[rel="canonical"]');
    const currentUrl = `https://apcsolutions.com/${currentPage === 'home' ? '' : currentPage}`;
    if (canonicalUrl) {
      canonicalUrl.setAttribute('href', currentUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = currentUrl;
      document.head.appendChild(link);
    }

    // Add Open Graph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', metadata.title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = metadata.title;
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', metadata.description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = metadata.description;
      document.head.appendChild(meta);
    }

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "APC Solutions - Auto People Counting",
      "description": "AI-powered people counting and occupancy analytics solution",
      "applicationCategory": "Business Software",
      "operatingSystem": "Cross-platform",
      "offers": [
        {
          "@type": "Offer",
          "name": "One-time Payment",
          "price": "35000",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "35000",
            "priceCurrency": "INR",
            "unitText": "One-time"
          }
        },
        {
          "@type": "Offer", 
          "name": "Subscription Model",
          "price": "17500",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "3000",
            "priceCurrency": "INR",
            "unitCode": "MON"
          }
        },
        {
          "@type": "Offer",
          "name": "Rental Model", 
          "price": "4500",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "4500",
            "priceCurrency": "INR",
            "unitText": "Min 3-4 days, max as per client requirement"
          }
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      },
      "provider": {
        "@type": "Organization",
        "name": "APC Solutions",
        "telephone": "+1-800-272-4357",
        "email": "info@apcsolutions.com",
        "url": "https://apcsolutions.com"
      }
    };

    const scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <OptimizedHomepage onPageChange={handlePageChange} />;
      case 'products':
        return <RedesignedProductsHub onPageChange={handlePageChange} />;
      case 'applications':
        return <Applications onPageChange={handlePageChange} />;
      case 'about':
        return <AboutUs onPageChange={handlePageChange} />;
      case 'insights':
        return <InsightsHub onPageChange={handlePageChange} />;
      case 'success-stories':
        return <SuccessStories onPageChange={handlePageChange} />;
      case 'contact':
        return <Contact onPageChange={handlePageChange} />;

      case 'dashboard':
        return <DashboardDemo />;
      case 'demo':
        return <DemoForm onPageChange={handlePageChange} />;
      case 'demo-packages':
        return <DemoEffects onPageChange={handlePageChange} />;
      case 'faq':
        return <FAQ onPageChange={handlePageChange} />;
      case 'product-core':
        return <ProductCore onPageChange={handlePageChange} />;
      case 'product-flex':
        return <ProductFlex onPageChange={handlePageChange} />;
      case 'product-link':
        return <ProductLink onPageChange={handlePageChange} />;
      case 'product-eventsense':
        return <ProductEventSense onPageChange={handlePageChange} />;
      case 'enterprise':
        return <EnterpriseProductPage onPageChange={handlePageChange} />;
      case 'product-detail':
        return <ProductDetailPage onPageChange={handlePageChange} />;
      case 'modal-demo':
        return <MinimalModalDemo />;
      // Legacy routes for compatibility and merged navigation
      case 'solutions':
        return <CaseStudies onPageChange={handlePageChange} />;
      case 'resources':
        return <Insights onPageChange={handlePageChange} />;
      case 'case-studies':
        return <CaseStudies onPageChange={handlePageChange} />;
      
      // Legacy routes for compatibility and merged navigation
      case 'case-study':
        return <InsightsHub onPageChange={handlePageChange} />;
      case 'case-studies':
        return <InsightsHub onPageChange={handlePageChange} />;
      case 'success-stories':
        return <InsightsHub onPageChange={handlePageChange} />;
      case 'resources':
        return <InsightsHub onPageChange={handlePageChange} />;
      
      // Legacy product routes - redirect to new RedesignedProductsHub
      case 'product-overview':
        return <RedesignedProductsHub onPageChange={handlePageChange} />;
      case 'product-comparison':
        return <RedesignedProductsHub onPageChange={handlePageChange} />;
      default:
        return <CompactEnhancedHomepage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="flex-1 relative main-content-area">
        {renderPage()}
      </main>
      <VisibleBottomSection onPageChange={handlePageChange} />
      <SmartChatbot onPageChange={handlePageChange} />
    </div>
  );
}