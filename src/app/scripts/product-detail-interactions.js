// Interactive functionality for Product Detail Page
// Vanilla JavaScript for demo toggles, pricing switcher, modal demo, and form validation

class ProductDetailInteractions {
  constructor() {
    this.init();
    this.bindEvents();
  }

  init() {
    // Initialize demo data and state
    this.currentDemo = 'retail';
    this.pricingModel = 'subscription';
    this.billingPeriod = 'monthly';
    this.demoPlaying = false;
    this.stickyVisible = false;
    
    // Demo data for live dashboard
    this.demoData = {
      retail: {
        visitors: 1247,
        conversion: 23.4,
        peakHour: '2-3 PM',
        avgDwell: '12m 34s',
        zones: [
          { name: 'Entry', count: 423, percentage: 34 },
          { name: 'Electronics', count: 287, percentage: 23 },
          { name: 'Clothing', count: 312, percentage: 25 },
          { name: 'Checkout', count: 225, percentage: 18 }
        ]
      },
      buildings: {
        occupancy: 68,
        energySaving: 31,
        peakFloor: 'Floor 3',
        capacity: '340/500',
        floors: [
          { floor: 1, occupancy: 78, capacity: 100 },
          { floor: 2, occupancy: 65, capacity: 120 },
          { floor: 3, occupancy: 89, capacity: 150 },
          { floor: 4, occupancy: 42, capacity: 130 }
        ]
      },
      transit: {
        passengers: 2847,
        density: 'Medium',
        peakTime: '8-9 AM',
        alerts: 0,
        platforms: [
          { name: 'Platform A', count: 156, status: 'Normal' },
          { name: 'Platform B', count: 203, status: 'Busy' },
          { name: 'Platform C', count: 89, status: 'Light' },
          { name: 'Platform D', count: 234, status: 'Heavy' }
        ]
      }
    };
  }

  bindEvents() {
    // Demo tab switching
    this.bindDemoTabs();
    
    // Pricing model switching
    this.bindPricingSwitcher();
    
    // Video demo play button
    this.bindVideoDemo();
    
    // Sticky CTA on scroll
    this.bindStickyScroll();
    
    // Form validation
    this.bindFormValidation();
    
    // Keyboard navigation
    this.bindKeyboardNavigation();
    
    // Live data updates
    this.startLiveDataUpdates();
    
    // Intersection observer for animations
    this.bindScrollAnimations();
  }

  // Demo Tab Switching
  bindDemoTabs() {
    const tabTriggers = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');
    
    tabTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        const targetId = trigger.getAttribute('aria-controls') || trigger.dataset.target;
        this.switchDemoTab(targetId);
      });
      
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        }
      });
    });
  }

  switchDemoTab(targetId) {
    this.currentDemo = targetId;
    
    // Update tab states
    document.querySelectorAll('[role="tab"]').forEach(tab => {
      tab.setAttribute('aria-selected', 'false');
      tab.classList.remove('active');
    });
    
    document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
      panel.classList.add('hidden');
      panel.setAttribute('aria-hidden', 'true');
    });
    
    // Activate selected tab
    const activeTab = document.querySelector(`[data-target="${targetId}"]`);
    const activePanel = document.getElementById(targetId);
    
    if (activeTab && activePanel) {
      activeTab.setAttribute('aria-selected', 'true');
      activeTab.classList.add('active');
      activePanel.classList.remove('hidden');
      activePanel.setAttribute('aria-hidden', 'false');
      
      // Update demo data
      this.updateDemoData(targetId);
      
      // Announce change to screen readers
      this.announceToScreenReader(`Switched to ${targetId} demo`);
    }
  }

  updateDemoData(demoType) {
    const data = this.demoData[demoType];
    if (!data) return;
    
    // Update metrics with smooth animation
    const metrics = document.querySelectorAll('.demo-metric');
    metrics.forEach(metric => {
      const key = metric.dataset.metric;
      if (data[key]) {
        this.animateNumber(metric, data[key]);
      }
    });
    
    // Update progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const key = bar.dataset.progress;
      if (data[key]) {
        this.animateProgressBar(bar, data[key]);
      }
    });
  }

  // Pricing Model Switching
  bindPricingSwitcher() {
    const pricingButtons = document.querySelectorAll('.pricing-toggle-btn');
    const billingSwitch = document.querySelector('#billing-toggle');
    
    pricingButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.switchPricingModel(btn.dataset.model);
      });
    });
    
    if (billingSwitch) {
      billingSwitch.addEventListener('change', (e) => {
        this.billingPeriod = e.target.checked ? 'annual' : 'monthly';
        this.updatePricingDisplay();
      });
    }
  }

  switchPricingModel(model) {
    this.pricingModel = model;
    
    // Update button states
    document.querySelectorAll('.pricing-toggle-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    
    document.querySelector(`[data-model="${model}"]`).classList.add('active');
    document.querySelector(`[data-model="${model}"]`).setAttribute('aria-selected', 'true');
    
    // Update pricing display
    this.updatePricingDisplay();
    
    // Show/hide billing toggle for subscription
    const billingToggle = document.querySelector('.billing-toggle');
    if (billingToggle) {
      billingToggle.style.display = model === 'subscription' ? 'flex' : 'none';
    }
    
    this.announceToScreenReader(`Switched to ${model} pricing`);
  }

  updatePricingDisplay() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
      const model = card.dataset.model;
      card.style.display = model === this.pricingModel ? 'block' : 'none';
    });
    
    // Update prices based on billing period
    if (this.pricingModel === 'subscription') {
      const priceElements = document.querySelectorAll('.price-amount');
      priceElements.forEach(price => {
        const monthly = price.dataset.monthly;
        const annual = price.dataset.annual;
        
        if (monthly && annual) {
          price.textContent = this.billingPeriod === 'monthly' ? monthly : annual;
        }
      });
    }
  }

  // Video Demo Functionality
  bindVideoDemo() {
    const playButton = document.querySelector('.demo-play-btn');
    const videoContainer = document.querySelector('.demo-video');
    
    if (playButton && videoContainer) {
      playButton.addEventListener('click', () => {
        this.playDemo();
      });
    }
  }

  playDemo() {
    this.demoPlaying = true;
    const playButton = document.querySelector('.demo-play-btn');
    const videoContainer = document.querySelector('.demo-video');
    
    if (playButton) {
      playButton.style.display = 'none';
    }
    
    if (videoContainer) {
      videoContainer.innerHTML = `
        <div class="demo-loading">
          <div class="loading-spinner"></div>
          <p>Loading ${this.currentDemo} demonstration...</p>
        </div>
      `;
      
      // Simulate video loading
      setTimeout(() => {
        videoContainer.innerHTML = `
          <div class="demo-player">
            <div class="demo-controls">
              <button class="play-pause-btn" aria-label="Pause video">⏸️</button>
              <div class="progress-slider">
                <div class="progress-fill" style="width: 0%"></div>
              </div>
              <span class="time-display">0:00 / 2:30</span>
            </div>
          </div>
        `;
        
        this.simulateVideoPlayback();
      }, 2000);
    }
  }

  simulateVideoPlayback() {
    const progressFill = document.querySelector('.progress-fill');
    const timeDisplay = document.querySelector('.time-display');
    let progress = 0;
    
    const interval = setInterval(() => {
      progress += 1;
      if (progressFill) {
        progressFill.style.width = `${progress}%`;
      }
      if (timeDisplay) {
        const seconds = Math.floor(progress * 1.5);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timeDisplay.textContent = `${minutes}:${remainingSeconds.toString().padStart(2, '0')} / 2:30`;
      }
      
      if (progress >= 100) {
        clearInterval(interval);
        this.demoPlaying = false;
        this.resetVideoDemo();
      }
    }, 150);
  }

  resetVideoDemo() {
    const videoContainer = document.querySelector('.demo-video');
    const playButton = document.querySelector('.demo-play-btn');
    
    if (videoContainer) {
      videoContainer.innerHTML = '';
    }
    if (playButton) {
      playButton.style.display = 'flex';
    }
  }

  // Sticky CTA on Scroll
  bindStickyScroll() {
    const stickyElement = document.querySelector('.sticky-cta');
    if (!stickyElement) return;
    
    let ticking = false;
    
    const updateStickyVisibility = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 800;
      
      if (shouldShow !== this.stickyVisible) {
        this.stickyVisible = shouldShow;
        stickyElement.style.transform = shouldShow ? 'translateY(0)' : 'translateY(100%)';
        stickyElement.setAttribute('aria-hidden', !shouldShow);
      }
      ticking = false;
    };
    
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateStickyVisibility);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Form Validation
  bindFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.validateForm(form);
      });
      
      // Real-time validation
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearFieldError(input));
      });
    });
  }

  validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('[required]');
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });
    
    if (isValid) {
      this.submitForm(form);
    } else {
      this.announceToScreenReader('Please correct the errors in the form');
      // Focus first invalid field
      const firstError = form.querySelector('.field-error');
      if (firstError) {
        firstError.focus();
      }
    }
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Required field check
    if (field.required && !value) {
      isValid = false;
      errorMessage = `${this.getFieldLabel(field)} is required`;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
      }
    }
    
    this.showFieldError(field, isValid ? null : errorMessage);
    return isValid;
  }

  showFieldError(field, message) {
    this.clearFieldError(field);
    
    if (message) {
      field.classList.add('field-error');
      field.setAttribute('aria-invalid', 'true');
      
      const errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.textContent = message;
      errorElement.id = `${field.id}-error`;
      field.setAttribute('aria-describedby', errorElement.id);
      
      field.parentNode.appendChild(errorElement);
    }
  }

  clearFieldError(field) {
    field.classList.remove('field-error');
    field.removeAttribute('aria-invalid');
    
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }

  getFieldLabel(field) {
    const label = document.querySelector(`label[for="${field.id}"]`);
    return label ? label.textContent.replace('*', '').trim() : field.name || 'This field';
  }

  submitForm(form) {
    const submitButton = form.querySelector('[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
      this.showSubmissionSuccess();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      form.reset();
    }, 2000);
  }

  showSubmissionSuccess() {
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = `
      <div class="success-content">
        <div class="success-icon">✅</div>
        <h3>Thank you for your interest!</h3>
        <p>We'll contact you within 24 hours to schedule your demo.</p>
        <button class="close-success" aria-label="Close message">×</button>
      </div>
    `;
    
    document.body.appendChild(successMessage);
    
    successMessage.querySelector('.close-success').addEventListener('click', () => {
      successMessage.remove();
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (successMessage.parentNode) {
        successMessage.remove();
      }
    }, 5000);
    
    this.announceToScreenReader('Form submitted successfully. We will contact you soon.');
  }

  // Keyboard Navigation
  bindKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // ESC key handling
      if (e.key === 'Escape') {
        this.handleEscapeKey();
      }
      
      // Tab navigation enhancements
      if (e.key === 'Tab') {
        this.handleTabNavigation(e);
      }
    });
  }

  handleEscapeKey() {
    // Close any open modals or dropdowns
    const openModals = document.querySelectorAll('.modal.open');
    openModals.forEach(modal => {
      modal.classList.remove('open');
    });
    
    // Reset video demo if playing
    if (this.demoPlaying) {
      this.resetVideoDemo();
    }
  }

  handleTabNavigation(e) {
    // Ensure tab navigation stays within modal if one is open
    const openModal = document.querySelector('.modal.open');
    if (openModal) {
      const focusableElements = openModal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }

  // Live Data Updates
  startLiveDataUpdates() {
    // Simulate live data updates every 5 seconds
    setInterval(() => {
      this.updateLiveMetrics();
    }, 5000);
  }

  updateLiveMetrics() {
    if (!this.demoPlaying) {
      const currentData = this.demoData[this.currentDemo];
      if (currentData) {
        // Add small random variations to simulate live data
        Object.keys(currentData).forEach(key => {
          if (typeof currentData[key] === 'number') {
            const variation = (Math.random() - 0.5) * 0.1; // ±5% variation
            const newValue = Math.round(currentData[key] * (1 + variation));
            this.updateMetricDisplay(key, newValue);
          }
        });
      }
    }
  }

  updateMetricDisplay(metricKey, newValue) {
    const element = document.querySelector(`[data-metric="${metricKey}"]`);
    if (element) {
      this.animateNumber(element, newValue);
    }
  }

  // Animation Helpers
  animateNumber(element, targetValue) {
    const currentValue = parseInt(element.textContent) || 0;
    const difference = targetValue - currentValue;
    const steps = 20;
    const stepValue = difference / steps;
    let currentStep = 0;
    
    const animate = () => {
      currentStep++;
      const newValue = Math.round(currentValue + (stepValue * currentStep));
      element.textContent = newValue;
      
      if (currentStep < steps) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }

  animateProgressBar(bar, percentage) {
    const fill = bar.querySelector('.progress-fill');
    if (fill) {
      fill.style.transition = 'width 1s ease-in-out';
      fill.style.width = `${percentage}%`;
    }
  }

  // Scroll Animations
  bindScrollAnimations() {
    const observerOptions = {
      rootMargin: '50px 0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Stagger child animations
          const children = entry.target.querySelectorAll('.animate-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * 100);
          });
        }
      });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  // Accessibility Helpers
  announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  // Performance Monitoring
  measurePerformance() {
    // Web Vitals monitoring
    if ('web-vital' in window) {
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          console.log(`${entry.name}: ${entry.value}`);
        }
      }).observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    }
  }
}

// CSS for animations and interactions
const styles = `
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .animate-child {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease-out, transform 0.4s ease-out;
  }
  
  .animate-child.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .sticky-cta {
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
  }
  
  .field-error {
    border-color: #ef4444 !important;
    box-shadow: 0 0 0 1px #ef4444 !important;
  }
  
  .error-message {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
  
  .form-success {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    max-width: 400px;
    text-align: center;
  }
  
  .success-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .close-success {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .loading-spinner {
    width: 2rem;
    height: 2rem;
    border: 3px solid #f3f4f6;
    border-top: 3px solid #2563eb;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  .sr-only {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ProductDetailInteractions();
  });
} else {
  new ProductDetailInteractions();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ProductDetailInteractions;
}