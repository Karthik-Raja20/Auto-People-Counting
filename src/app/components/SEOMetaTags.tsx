import { useEffect } from 'react';

interface SEOMetaTagsProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  additionalMeta?: Array<{ name: string; content: string; }>;
}

export function SEOMetaTags({
  title,
  description,
  keywords,
  canonicalUrl = 'https://apcsolutions.com/product-detail',
  ogImage = 'https://apcsolutions.com/images/product-hero.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  additionalMeta = []
}: SEOMetaTagsProps) {

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (property: string, content: string, attribute = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1');
    updateMetaTag('author', 'APC Solutions');
    
    // Viewport and mobile optimization
    updateMetaTag('viewport', 'width=device-width,initial-scale=1,maximum-scale=5,user-scalable=yes');
    updateMetaTag('theme-color', '#2563eb');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('format-detection', 'telephone=no');
    
    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', 'APC Auto People Counting System Dashboard', 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:site_name', 'APC Solutions', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', 'APC Auto People Counting System Dashboard');
    updateMetaTag('twitter:site', '@APCSolutions');
    updateMetaTag('twitter:creator', '@APCSolutions');
    
    // Additional technical meta tags
    updateMetaTag('application-name', 'APC Solutions');
    updateMetaTag('msapplication-TileColor', '#2563eb');
    updateMetaTag('msapplication-config', '/browserconfig.xml');
    
    // Additional custom meta tags
    additionalMeta.forEach(meta => {
      updateMetaTag(meta.name, meta.content);
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonical);
    }

    // Alternate links for different formats/languages
    const alternateLinks = [
      { rel: 'alternate', type: 'application/rss+xml', href: '/feed.xml', title: 'APC Solutions Blog RSS Feed' },
      { rel: 'alternate', hreflang: 'en', href: canonicalUrl },
      { rel: 'alternate', hreflang: 'x-default', href: canonicalUrl }
    ];

    alternateLinks.forEach(link => {
      let existingLink = document.querySelector(`link[rel="${link.rel}"][type="${link.type || ''}"][hreflang="${link.hreflang || ''}"]`);
      if (!existingLink) {
        existingLink = document.createElement('link');
        Object.entries(link).forEach(([key, value]) => {
          existingLink!.setAttribute(key, value);
        });
        document.head.appendChild(existingLink);
      }
    });

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://images.unsplash.com',
      'https://cdn.jsdelivr.net'
    ];

    preconnectDomains.forEach(domain => {
      let link = document.querySelector(`link[rel="preconnect"][href="${domain}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'preconnect');
        link.setAttribute('href', domain);
        link.setAttribute('crossorigin', 'anonymous');
        document.head.appendChild(link);
      }
    });

    // DNS prefetch for performance
    const dnsPrefetchDomains = [
      'https://www.google-analytics.com',
      'https://connect.facebook.net',
      'https://platform.twitter.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      let link = document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'dns-prefetch');
        link.setAttribute('href', domain);
        document.head.appendChild(link);
      }
    });

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }

    // Security headers (if supported by meta tags)
    const securityMeta = [
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
      { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
      { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' }
    ];

    securityMeta.forEach(meta => {
      let existingMeta = document.querySelector(`meta[http-equiv="${meta['http-equiv']}"]`);
      if (!existingMeta) {
        existingMeta = document.createElement('meta');
        existingMeta.setAttribute('http-equiv', meta['http-equiv']);
        existingMeta.setAttribute('content', meta.content);
        document.head.appendChild(existingMeta);
      }
    });

  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard, structuredData, additionalMeta]);

  return null; // This component only manages meta tags, no visual output
}

// SEO-optimized content snippets
export const SEOContent = {
  metaTitle: 'Auto People Counting System | AI Analytics Platform | APC Solutions',
  metaDescription: 'Advanced AI-powered people counting system with 99% accuracy, GDPR compliance & real-time analytics. Rental, subscription & license options. Start 15-day free trial today.',
  keywords: 'auto people counting, people counting system, footfall analytics, occupancy monitoring, people flow analytics, real-time people counter, crowd analytics, retail foot traffic, smart building occupancy, people counting camera, edge analytics, privacy-compliant people counting, GDPR compliant people counter, people counting API, people counting software, visitor analytics, AI people counter, occupancy sensors, crowd monitoring, retail analytics, smart building technology, people tracking system, visitor counting solution, footfall measurement, occupancy tracking, people analytics platform, retail optimization, building management system, crowd density monitoring, people flow management, anonymous people counting',
  
  // Long-form content for SEO
  productOverview: `
    The APC Auto People Counting System represents the pinnacle of spatial intelligence technology, delivering unparalleled accuracy in people flow analytics through advanced AI computer vision and privacy-first design principles. Our revolutionary system combines cutting-edge artificial intelligence with edge processing capabilities to provide real-time insights that transform how organizations understand and optimize their spaces.

    Built on our proprietary EdgeBox™ platform, the system processes data locally to ensure ultra-low latency responses while maintaining maximum privacy protection through complete anonymity and GDPR compliance. This innovative approach eliminates the need for facial recognition or personal data storage, making it the ideal solution for organizations prioritizing both performance and privacy.

    The system's sophisticated machine learning algorithms have been meticulously trained on millions of diverse scenarios, ensuring consistent 99% accuracy across various environments, lighting conditions, and crowd densities. From single-location deployments to enterprise-wide implementations, our scalable architecture adapts to meet the unique requirements of retail stores, smart buildings, transportation hubs, event venues, and healthcare facilities.

    With comprehensive API integrations, real-time dashboard analytics, and flexible deployment options including rental, subscription, and perpetual licensing models, the APC Auto People Counting System empowers organizations to make data-driven decisions that optimize operations, reduce costs, and enhance user experiences through intelligent occupancy analytics and actionable insights.
  `,

  // Alt text examples for images
  altTextExamples: {
    heroDashboard: 'Real-time people counting analytics dashboard showing footfall data, conversion rates, and occupancy metrics with interactive charts and heatmaps',
    retailHeatmap: 'Retail store heatmap visualization displaying customer flow patterns and high-traffic zones with color-coded intensity levels',
    buildingOccupancy: 'Smart building occupancy monitoring interface showing floor-by-floor occupancy levels and energy optimization data',
    transitFlow: 'Transit station passenger flow analytics displaying platform occupancy, crowd density alerts, and real-time passenger counts',
    healthcareDashboard: 'Healthcare facility monitoring system showing patient wait times, department occupancy, and staff allocation optimization',
    edgeboxHardware: 'APC EdgeBox™ hardware unit for local people counting processing with AI computer vision capabilities',
    installationProcess: 'Professional installation of people counting cameras and edge processing units in commercial environment'
  },

  // Structured headings for proper SEO hierarchy
  headings: {
    h1: 'Auto People Counting System - AI-Powered Analytics Platform',
    h2Products: 'Advanced People Counting Technology Solutions',
    h2Features: 'Key Features & Capabilities',
    h2Industries: 'Industry-Specific Applications',
    h2Pricing: 'Flexible Pricing & Deployment Options',
    h2Demo: 'Interactive Analytics Dashboard Demo',
    h2FAQ: 'Frequently Asked Questions',
    h2Contact: 'Get Started with Expert Consultation',
    h3Accuracy: '99% Accuracy with AI Computer Vision',
    h3Privacy: 'GDPR-Compliant Privacy Protection',
    h3Realtime: 'Real-time Analytics & Insights',
    h3Integration: 'Comprehensive API Integrations'
  }
};

// Performance optimization suggestions
export const PerformanceOptimizations = {
  lazyLoadingConfig: {
    rootMargin: '50px 0px',
    threshold: 0.01
  },
  
  criticalCSS: `
    /* Critical above-the-fold styles */
    .hero { background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #f8fafc 100%); }
    .hero__content { position: relative; z-index: 1; }
    .section-title { font-size: clamp(1.875rem, 4vw, 3rem); font-weight: 700; line-height: 1.1; }
    .feature-card { border-radius: 16px; transition: all 0.3s ease; background: white; }
  `,
  
  resourceHints: [
    '<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>',
    '<link rel="preload" href="/images/hero-bg.webp" as="image">',
    '<link rel="prefetch" href="/api/demo-data">',
    '<link rel="preconnect" href="https://images.unsplash.com">',
    '<link rel="dns-prefetch" href="https://fonts.googleapis.com">'
  ]
};