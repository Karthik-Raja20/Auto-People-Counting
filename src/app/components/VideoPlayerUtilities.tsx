import React, { useState, useRef, useEffect } from 'react';

/**
 * Video Player Utilities
 * Helper functions and hooks for video playback in the Interactive Header
 */

// Video sources configuration
export const VIDEO_SOURCES = {
  productDemo: {
    url: 'https://example.com/product-demo.mp4', // Replace with actual video URL
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    duration: '2:15',
    title: 'APC Product Demo'
  },
  featureShowcase: {
    url: 'https://example.com/feature-showcase.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    duration: '1:45',
    title: 'Feature Showcase'
  },
  customerTestimonial: {
    url: 'https://example.com/testimonial.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
    duration: '3:00',
    title: 'Customer Success Story'
  }
};

// Video player hook
export const useVideoPlayer = (videoRef: React.RefObject<HTMLVideoElement>) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', handleEnded);
    };
  }, [videoRef]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const changeVolume = (newVolume: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = newVolume;
    setVolume(newVolume);
    
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const seek = (time: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = time;
    setCurrentTime(time);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      video.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    isPlaying,
    isMuted,
    currentTime,
    duration,
    volume,
    isFullscreen,
    togglePlay,
    toggleMute,
    changeVolume,
    seek,
    toggleFullscreen,
    formatTime,
    progress: duration > 0 ? (currentTime / duration) * 100 : 0
  };
};

// Analytics tracking for video events
export const trackVideoEvent = (eventName: string, videoId: string, data?: any) => {
  // Integrate with your analytics platform
  console.log('Video Event:', eventName, videoId, data);
  
  // Example: Google Analytics
  // if (window.gtag) {
  //   window.gtag('event', eventName, {
  //     video_id: videoId,
  //     ...data
  //   });
  // }
  
  // Example: Mixpanel
  // if (window.mixpanel) {
  //   window.mixpanel.track(eventName, {
  //     video_id: videoId,
  //     ...data
  //   });
  // }
};

// Video progress milestones
export const VIDEO_MILESTONES = [25, 50, 75, 100];

export const useVideoAnalytics = (
  videoId: string,
  currentTime: number,
  duration: number,
  isPlaying: boolean
) => {
  const [trackedMilestones, setTrackedMilestones] = useState<number[]>([]);

  useEffect(() => {
    if (!duration || !isPlaying) return;

    const progress = (currentTime / duration) * 100;

    VIDEO_MILESTONES.forEach(milestone => {
      if (progress >= milestone && !trackedMilestones.includes(milestone)) {
        trackVideoEvent('video_progress', videoId, { progress: milestone });
        setTrackedMilestones(prev => [...prev, milestone]);
      }
    });
  }, [currentTime, duration, isPlaying, videoId, trackedMilestones]);

  const trackPlay = () => {
    trackVideoEvent('video_play', videoId, { timestamp: currentTime });
  };

  const trackPause = () => {
    trackVideoEvent('video_pause', videoId, { timestamp: currentTime });
  };

  const trackComplete = () => {
    trackVideoEvent('video_complete', videoId, { duration });
  };

  return {
    trackPlay,
    trackPause,
    trackComplete
  };
};

// Video quality selector
export const VIDEO_QUALITIES = [
  { label: '1080p', value: 1080 },
  { label: '720p', value: 720 },
  { label: '480p', value: 480 },
  { label: '360p', value: 360 },
  { label: 'Auto', value: 'auto' }
];

// Playback speed options
export const PLAYBACK_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

// Subtitle/Caption support
export interface Subtitle {
  language: string;
  label: string;
  url: string;
}

export const AVAILABLE_SUBTITLES: Subtitle[] = [
  { language: 'en', label: 'English', url: '/subtitles/en.vtt' },
  { language: 'hi', label: 'हिन्दी', url: '/subtitles/hi.vtt' },
  { language: 'mr', label: 'मराठी', url: '/subtitles/mr.vtt' }
];

// Video preload strategy
export const getPreloadStrategy = (connectionSpeed: string): 'auto' | 'metadata' | 'none' => {
  if (connectionSpeed === 'slow-2g' || connectionSpeed === '2g') {
    return 'none';
  } else if (connectionSpeed === '3g') {
    return 'metadata';
  }
  return 'auto';
};

// Check if browser supports video format
export const supportsVideoFormat = (format: string): boolean => {
  const video = document.createElement('video');
  return video.canPlayType(format) !== '';
};

// Get optimal video format
export const getOptimalVideoFormat = (): string => {
  if (supportsVideoFormat('video/webm')) {
    return 'webm';
  } else if (supportsVideoFormat('video/mp4')) {
    return 'mp4';
  }
  return 'mp4'; // fallback
};

// Picture-in-Picture support
export const usePictureInPicture = (videoRef: React.RefObject<HTMLVideoElement>) => {
  const [isPiPActive, setIsPiPActive] = useState(false);

  const togglePiP = async () => {
    const video = videoRef.current;
    if (!video || !document.pictureInPictureEnabled) return;

    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        setIsPiPActive(false);
      } else {
        await (video as any).requestPictureInPicture();
        setIsPiPActive(true);
      }
    } catch (error) {
      console.error('PiP error:', error);
    }
  };

  return { isPiPActive, togglePiP };
};

// Video loading states
export enum VideoLoadState {
  IDLE = 'idle',
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error'
}

// Auto-quality selection based on network
export const useAdaptiveQuality = () => {
  const [quality, setQuality] = useState<number | 'auto'>('auto');
  const [networkSpeed, setNetworkSpeed] = useState<string>('4g');

  useEffect(() => {
    // Check for Network Information API
    const connection = (navigator as any).connection || 
                      (navigator as any).mozConnection || 
                      (navigator as any).webkitConnection;

    if (connection) {
      const updateQuality = () => {
        const effectiveType = connection.effectiveType;
        setNetworkSpeed(effectiveType);

        if (effectiveType === 'slow-2g' || effectiveType === '2g') {
          setQuality(360);
        } else if (effectiveType === '3g') {
          setQuality(480);
        } else if (effectiveType === '4g') {
          setQuality(720);
        }
      };

      updateQuality();
      connection.addEventListener('change', updateQuality);

      return () => {
        connection.removeEventListener('change', updateQuality);
      };
    }
  }, []);

  return { quality, networkSpeed };
};

export default {
  useVideoPlayer,
  useVideoAnalytics,
  usePictureInPicture,
  useAdaptiveQuality,
  trackVideoEvent,
  VIDEO_SOURCES,
  VIDEO_QUALITIES,
  PLAYBACK_SPEEDS,
  AVAILABLE_SUBTITLES
};
