import { Users, Cpu, Eye } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'light' | 'dark' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export function Logo({ 
  variant = 'default', 
  size = 'md', 
  className = '',
  onClick 
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const iconSizeClasses = {
    sm: 'h-5 w-5',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-10 w-10'
  };

  const getColorClasses = () => {
    switch (variant) {
      case 'light':
        return 'text-white';
      case 'dark':
        return 'text-gray-900';
      case 'icon-only':
        return 'text-primary';
      default:
        return 'text-primary';
    }
  };

  const LogoIcon = () => (
    <div className="relative">
      {/* Main circle representing the EdgeBox */}
      <div className={`${iconSizeClasses[size]} rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center relative overflow-hidden`}>
        {/* AI chip representation */}
        <Cpu className={`${size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-3.5 w-3.5' : size === 'lg' ? 'h-4 w-4' : 'h-5 w-5'} text-white`} />
        
        {/* Counting dots overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-0.5 opacity-30">
            <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
            <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
            <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
            <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Edge AI indicator */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-white flex items-center justify-center">
        <Eye className="h-1.5 w-1.5 text-white" />
      </div>
    </div>
  );

  if (variant === 'icon-only') {
    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center ${className}`}
      >
        <LogoIcon />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-3 ${getColorClasses()} ${className}`}
    >
      <LogoIcon />
      <div className="flex flex-col items-start">
        <div className={`${textSizeClasses[size]} font-bold leading-tight`}>
          <span className="text-primary">APC</span> Solutions
        </div>
        <div className={`${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : size === 'lg' ? 'text-base' : 'text-lg'} font-medium text-gray-600 leading-tight`}>
          Auto People Counting
        </div>
      </div>
    </button>
  );
}

// Alternative text-based logo component
interface TextLogoProps {
  variant?: 'default' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  showTagline?: boolean;
}

export function TextLogo({ 
  variant = 'default', 
  size = 'md', 
  className = '',
  onClick,
  showTagline = true
}: TextLogoProps) {
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl', 
    xl: 'text-4xl'
  };

  const taglineSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  const getColorClasses = () => {
    switch (variant) {
      case 'light':
        return 'text-white';
      case 'dark':
        return 'text-gray-900';
      default:
        return 'text-primary';
    }
  };

  const getTaglineColorClasses = () => {
    switch (variant) {
      case 'light':
        return 'text-blue-100';
      case 'dark':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex flex-col items-start ${className}`}
    >
      <div className={`${textSizeClasses[size]} font-bold leading-tight ${getColorClasses()}`}>
        <span className="text-primary">Auto People Counting</span> Solution
      </div>
      {showTagline && (
        <div className={`${taglineSizeClasses[size]} font-medium leading-tight ${getTaglineColorClasses()}`}>
          Powered by APC EdgeBox™
        </div>
      )}
    </button>
  );
}

// Compact horizontal logo
export function CompactLogo({ 
  variant = 'default', 
  size = 'md', 
  className = '',
  onClick 
}: LogoProps) {
  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  const getColorClasses = () => {
    switch (variant) {
      case 'light':
        return 'text-white';
      case 'dark':
        return 'text-gray-900';
      default:
        return 'text-primary';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 ${getColorClasses()} ${className}`}
    >
      <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
        <span className="text-white font-bold text-sm">APC</span>
      </div>
      <div className={`${textSizeClasses[size]} font-semibold leading-tight`}>
        Auto People Counting
      </div>
    </button>
  );
}