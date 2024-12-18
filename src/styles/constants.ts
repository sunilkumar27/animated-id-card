/**
 * Design system spacing values
 * Used for consistent margins, padding, and layout spacing throughout the application
 * Values follow a geometric progression for visual harmony
 */
export const SPACING = {
    tiny: '0.1rem',  // 1.6px - Used for micro-interactions and minimal adjustments
    xxs: '0.25rem',  // 4px - Used for minimal spacing and fine adjustments
    xs: '0.5rem',    // 8px - Used for tight spacing between related elements
    sm: '0.75rem',   // 12px - Used for default element spacing
    md: '1rem',      // 16px - Used for standard component padding
    lg: '1.5rem',    // 24px - Used for section spacing
    xl: '2rem'       // 32px - Used for major section divisions
  } as const;
  
  /**
   * Typography scale
   * Defines consistent font sizes across the application
   * Based on a modular scale with a 1.25 ratio
   */
  export const FONT_SIZES = {
    xs: '0.75rem',  // 12px - Small labels, captions
    sm: '0.875rem', // 14px - Secondary text, supporting content
    md: '1rem',     // 16px - Body text, primary content
    lg: '1.5rem',   // 24px - Headings, emphasis text
    xl: '2rem'      // 32px - Major headings, display text
  } as const;
  
  /**
   * Animation timing configurations
   * Provides consistent motion design across the application
   */
  export const ANIMATIONS = {
    duration: {
      fast: '200ms',   // Quick interactions (e.g., hover states)
      normal: '300ms', // Standard transitions
      slow: '500ms'    // Complex animations
    },
    timing: 'cubic-bezier(0.4, 0, 0.2, 1)' // Material Design easing
  } as const;
  
  /**
   * Core color values
   * Basic color constants used for various UI elements
   * These complement the theme-specific colors
   */
  export const COLORS = {
    transparent: 'transparent',               // Used for reset values
    overlay: 'rgba(0, 0, 0, 0.5)',           // Modal/dialog overlays
    white: '#ffffff',                        // Pure white
    black: '#000000',                        // Pure black
  } as const;
  
  /**
   * Z-index scale
   * Manages stacking context across the application
   * Uses semantic naming for better maintainability
   */
  export const Z_INDEX = {
    base: 1,     // Default stacking context
    above: 2,    // Elements that should appear above base
    overlay: 10, // Overlays, tooltips
    modal: 100,  // Modal dialogs, popups
  } as const;