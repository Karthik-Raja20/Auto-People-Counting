import React from 'react';

// SVG Icon Set for Product Detail Page
export const ProductIcons = {
  // Accuracy icon
  AccuracyIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="16" r="2" fill="currentColor"/>
      <path d="M16 2v4M16 26v4M30 16h-4M6 16H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  // Real-time analytics icon
  AnalyticsIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 24h24v2H4v-2zM6 22V12h3v10H6zM12 22V8h3v14h-3zM18 22V16h3v6h-3zM24 22V6h3v16h-3z" fill="currentColor"/>
      <circle cx="26" cy="6" r="4" fill="currentColor"/>
    </svg>
  ),

  // Privacy shield icon
  PrivacyIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L8 6v8c0 6.627 4.477 12 10 12s10-5.373 10-12V6l-8-4z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 14l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // Edge processing icon
  EdgeIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="8" y="12" width="4" height="8" fill="currentColor"/>
      <rect x="14" y="14" width="4" height="6" fill="currentColor"/>
      <rect x="20" y="16" width="4" height="4" fill="currentColor"/>
      <circle cx="6" cy="6" r="2" fill="currentColor"/>
      <circle cx="16" cy="6" r="2" fill="currentColor"/>
      <circle cx="26" cy="6" r="2" fill="currentColor"/>
    </svg>
  ),

  // Low latency icon
  SpeedIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.3726 22.6274 4 16 4C9.3726 4 4 9.3726 4 16C4 22.6274 9.3726 28 16 28Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M16 8v8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 2L14 6L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // Integration API icon
  IntegrationIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="8" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 8h8M8 12v8M20 12v8M12 24h8" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),

  // Retail icon
  RetailIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 8h20l-2 12H8L6 8z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M6 8L4 4H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="10" cy="26" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="22" cy="26" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),

  // Building icon
  BuildingIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="20" height="24" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="10" y="10" width="3" height="3" fill="currentColor"/>
      <rect x="19" y="10" width="3" height="3" fill="currentColor"/>
      <rect x="10" y="16" width="3" height="3" fill="currentColor"/>
      <rect x="19" y="16" width="3" height="3" fill="currentColor"/>
      <rect x="13" y="22" width="6" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),

  // Transit icon
  TransitIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="10" y="12" width="12" height="6" fill="currentColor"/>
      <circle cx="12" cy="26" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="20" cy="26" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M6 20h20" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),

  // Healthcare icon
  HealthcareIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4L14 2L10 6L6 10L10 14L14 18L16 20L18 18L22 14L26 10L22 6L18 2L16 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M16 8v8M12 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),

  // Events icon
  EventsIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M10 2v8M22 2v8M4 12h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="18" r="2" fill="currentColor"/>
      <circle cx="16" cy="22" r="2" fill="currentColor"/>
      <circle cx="20" cy="18" r="2" fill="currentColor"/>
    </svg>
  ),

  // Heatmap visualization icon
  HeatmapIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="8" y="8" width="4" height="4" fill="#3B82F6" opacity="0.7"/>
      <rect x="12" y="8" width="4" height="4" fill="#10B981" opacity="0.8"/>
      <rect x="16" y="8" width="4" height="4" fill="#F59E0B" opacity="0.6"/>
      <rect x="20" y="8" width="4" height="4" fill="#EF4444" opacity="0.9"/>
      <rect x="8" y="12" width="4" height="4" fill="#10B981" opacity="0.6"/>
      <rect x="12" y="12" width="4" height="4" fill="#F59E0B" opacity="0.9"/>
      <rect x="16" y="12" width="4" height="4" fill="#EF4444" opacity="0.8"/>
      <rect x="20" y="12" width="4" height="4" fill="#3B82F6" opacity="0.5"/>
      <rect x="8" y="16" width="4" height="4" fill="#F59E0B" opacity="0.7"/>
      <rect x="12" y="16" width="4" height="4" fill="#EF4444" opacity="0.6"/>
      <rect x="16" y="16" width="4" height="4" fill="#10B981" opacity="0.9"/>
      <rect x="20" y="16" width="4" height="4" fill="#3B82F6" opacity="0.8"/>
    </svg>
  ),

  // Footfall graph icon
  FootfallIcon: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 26h24v2H4v-2z" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 24V6h2v18h-2zM10 24V12h2v12h-2zM14 24V18h2v6h-2zM18 24V8h2v16h-2zM22 24V14h2v10h-2zM26 24V10h2v14h-2z" fill="currentColor"/>
      <path d="M4 6L8 10L12 8L16 4L20 6L24 2L28 4" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  )
};

// Utility function to render icons with proper accessibility
export function IconWrapper({ 
  children, 
  ariaLabel, 
  className = "", 
  size = "w-8 h-8" 
}: {
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  size?: string;
}) {
  return (
    <div 
      className={`${size} ${className}`}
      role="img"
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      {children}
    </div>
  );
}