/**
 * Centralized Color System
 * Single source of truth for all color usage across the application
 * Ensures consistency across all pages, components, and states
 */

// ============================================================================
// BRAND COLORS - Core brand identity
// ============================================================================
export const COLORS_BRAND = {
  // Primary brand color - Lime accent used for highlights and CTAs
  primary: "text-lime-300",
  primaryBg: "bg-lime-300",
  primaryLight: "text-lime-200",
  primaryDark: "text-lime-400",
  primaryGradient: "from-lime-300 to-lime-400",
  primaryHover: "hover:text-lime-200",
  primaryBorder: "border-lime-300",

  // Secondary brand color - Cyan accent for technical/secondary highlights
  secondary: "text-cyan-400",
  secondaryBg: "bg-cyan-400",
  secondaryLight: "text-cyan-300",
  secondaryDark: "text-cyan-500",
  secondaryGradient: "from-cyan-400 to-cyan-500",
  secondaryHover: "hover:text-cyan-300",
  secondaryBorder: "border-cyan-400",

  // Accent color - Blue for additional accents
  accent: "text-blue-500",
  accentBg: "bg-blue-500",
  accentLight: "text-blue-400",
  accentDark: "text-blue-600",
  accentGradient: "from-blue-400 to-blue-500",
  accentHover: "hover:text-blue-400",
  accentBorder: "border-blue-500",
} as const;

// ============================================================================
// TEXT COLORS - Text content hierarchy
// ============================================================================
export const COLORS_TEXT = {
  // Primary text - Headlines, main content
  primary: "text-white",
  primaryHover: "hover:text-gray-100",
  primaryActive: "active:text-gray-200",

  // Secondary text - Descriptions, captions
  secondary: "text-gray-300",
  secondaryHover: "hover:text-gray-200",
  secondaryActive: "active:text-gray-100",

  // Muted text - Disabled, subtle content
  muted: "text-gray-500",
  mutedHover: "hover:text-gray-400",

  // Inverted text - For dark/colored backgrounds
  inverted: "text-black",
  invertedHover: "hover:text-gray-900",

  // Special text colors
  success: "text-green-400",
  warning: "text-orange-400",
  error: "text-red-400",
  info: "text-blue-400",
} as const;

// ============================================================================
// BACKGROUND COLORS - Surfaces and containers
// ============================================================================
export const COLORS_BG = {
  // Primary background - Main page background
  primary: "bg-black",

  // Secondary background - Card surfaces
  secondary: "bg-gray-900",

  // Tertiary background - Hover states
  tertiary: "bg-gray-800",

  // Special backgrounds
  transparent: "bg-transparent",
  glass: "bg-white/10",
  glassLight: "bg-white/5",
  glassDark: "bg-white/15",

  // Overlay backgrounds
  overlay: "bg-black/50",
  overlayLight: "bg-black/30",
  overlayDark: "bg-black/70",
} as const;

// ============================================================================
// BORDER & DIVIDER COLORS - Separation and definition
// ============================================================================
export const COLORS_BORDER = {
  // Primary border - Standard dividers
  primary: "border-white/10",
  primaryLight: "border-white/5",
  primaryDark: "border-white/20",

  // Secondary border - Subtle dividers
  secondary: "border-gray-800",
  secondaryLight: "border-gray-900",
  secondaryDark: "border-gray-700",

  // Brand borders
  brand: "border-lime-300",
  brandSecondary: "border-cyan-400",
  brandAccent: "border-blue-500",

  // Special borders
  active: "border-cyan-400",
  focus: "border-cyan-400",
  hover: "border-white/20",
  error: "border-red-400",
} as const;

// ============================================================================
// BUTTON COLORS - Interactive elements
// ============================================================================
export const COLORS_BUTTONS = {
  // Primary button - Main CTAs
  primary: {
    bg: "bg-lime-300",
    text: "text-black",
    border: "border-lime-300",
    hover: "hover:bg-lime-200",
    active: "active:bg-lime-400",
    disabled: "disabled:bg-gray-600 disabled:text-gray-400",
  },

  // Secondary button - Alternative CTAs
  secondary: {
    bg: "bg-gray-800",
    text: "text-white",
    border: "border-gray-700",
    hover: "hover:bg-gray-700",
    active: "active:bg-gray-600",
    disabled: "disabled:bg-gray-900 disabled:text-gray-500",
  },

  // Tertiary button - Subtle actions
  tertiary: {
    bg: "bg-transparent",
    text: "text-white",
    border: "border-gray-600",
    hover: "hover:bg-gray-900",
    active: "active:bg-gray-800",
    disabled: "disabled:text-gray-500",
  },

  // Accent button - Secondary CTAs
  accent: {
    bg: "bg-cyan-400",
    text: "text-black",
    border: "border-cyan-400",
    hover: "hover:bg-cyan-300",
    active: "active:bg-cyan-500",
    disabled: "disabled:bg-gray-600 disabled:text-gray-400",
  },

  // Destructive button - Delete/dangerous actions
  destructive: {
    bg: "bg-red-500",
    text: "text-white",
    border: "border-red-500",
    hover: "hover:bg-red-600",
    active: "active:bg-red-700",
    disabled: "disabled:bg-gray-600 disabled:text-gray-400",
  },
} as const;

// ============================================================================
// LINK COLORS - Hyperlinks and clickable text
// ============================================================================
export const COLORS_LINKS = {
  // Default link
  default: "text-cyan-400",
  defaultHover: "hover:text-cyan-300",
  defaultActive: "active:text-cyan-500",

  // Brand link
  brand: "text-lime-300",
  brandHover: "hover:text-lime-200",
  brandActive: "active:text-lime-400",

  // Muted link
  muted: "text-gray-400",
  mutedHover: "hover:text-gray-300",

  // Visited link
  visited: "visited:text-purple-400",
} as const;

// ============================================================================
// STATUS COLORS - Feedback and validation
// ============================================================================
export const COLORS_STATUS = {
  // Success state
  success: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
    icon: "text-green-400",
  },

  // Warning state
  warning: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-400",
    icon: "text-orange-400",
  },

  // Error state
  error: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    text: "text-red-400",
    icon: "text-red-400",
  },

  // Info state
  info: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    icon: "text-blue-400",
  },
} as const;

// ============================================================================
// GRADIENT COLORS - Multi-color backgrounds and text
// ============================================================================
export const COLORS_GRADIENTS = {
  // Brand gradient
  brandPrimary: "from-lime-300 to-lime-400",
  brandSecondary: "from-cyan-400 to-cyan-500",
  brandAccent: "from-blue-400 to-blue-500",

  // Dark gradient
  dark: "from-gray-900 to-black",
  darkLight: "from-gray-800 to-gray-900",

  // Text gradients
  titleGradient: "from-white via-lime-300 to-white", // Main heading gradient
  textBrand: "from-lime-300 to-lime-400",
  textSecondary: "from-cyan-400 to-cyan-500",
} as const;

// ============================================================================
// OPACITY VARIANTS - Alpha/transparency colors
// ============================================================================
export const COLORS_OPACITY = {
  // Lime with various opacity
  lime: {
    veryLight: "text-lime-300/20",
    light: "text-lime-300/40",
    medium: "text-lime-300/60",
    normal: "text-lime-300",
    dark: "text-lime-300/80",
  },

  // Cyan with various opacity
  cyan: {
    veryLight: "text-cyan-400/20",
    light: "text-cyan-400/40",
    medium: "text-cyan-400/60",
    normal: "text-cyan-400",
    dark: "text-cyan-400/80",
  },

  // White with various opacity
  white: {
    veryLight: "text-white/20",
    light: "text-white/40",
    medium: "text-white/60",
    normal: "text-white",
    dark: "text-white/80",
  },
} as const;

// ============================================================================
// COMPONENT-SPECIFIC COLORS - Pre-built component color combos
// ============================================================================
export const COLORS_COMPONENTS = {
  // Card component
  card: {
    bg: "bg-gray-900",
    border: "border-gray-800",
    hover: "hover:border-gray-700",
  },

  // Input component
  input: {
    bg: "bg-gray-900",
    border: "border-gray-700",
    focus: "focus:border-cyan-400 focus:ring-cyan-400/20",
    text: "text-white",
    placeholder: "placeholder:text-gray-500",
  },

  // Badge component
  badge: {
    primary: "bg-lime-300/20 text-lime-300 border-lime-300/30",
    secondary: "bg-cyan-400/20 text-cyan-400 border-cyan-400/30",
    success: "bg-green-400/20 text-green-400 border-green-400/30",
    warning: "bg-orange-400/20 text-orange-400 border-orange-400/30",
    error: "bg-red-400/20 text-red-400 border-red-400/30",
  },

  // Alert component
  alert: {
    success: "bg-green-500/10 border-green-500/30 text-green-400",
    warning: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    error: "bg-red-500/10 border-red-500/30 text-red-400",
    info: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  },

  // Tag/Pill component
  tag: {
    primary: "bg-lime-300/10 text-lime-300 border-lime-300/20",
    secondary: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
    neutral: "bg-gray-800 text-gray-300 border-gray-700",
  },

  // Modal/Dialog
  modal: {
    bg: "bg-gray-900",
    backdrop: "bg-black/50",
    header: "border-b border-gray-800",
    footer: "border-t border-gray-800",
  },

  // Tooltip
  tooltip: {
    bg: "bg-gray-800",
    text: "text-gray-100",
    arrow: "bg-gray-800",
  },
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Combine multiple color classes into a single string
 * @param colors - Color class strings to combine
 * @returns Combined color class string
 */
export function combineColors(...colors: (string | undefined | null)[]): string {
  return colors.filter(Boolean).join(" ");
}

/**
 * Get button colors based on variant
 * @param variant - Button variant (primary, secondary, tertiary, accent, destructive)
 * @returns Button color object
 */
export function getButtonColors(
  variant: "primary" | "secondary" | "tertiary" | "accent" | "destructive" = "primary"
) {
  return COLORS_BUTTONS[variant];
}

/**
 * Get status colors based on status type
 * @param status - Status type (success, warning, error, info)
 * @returns Status color object
 */
export function getStatusColors(status: "success" | "warning" | "error" | "info" = "info") {
  return COLORS_STATUS[status];
}

/**
 * Get badge colors based on type
 * @param type - Badge type (primary, secondary, success, warning, error)
 * @returns Badge color string
 */
export function getBadgeColors(type: "primary" | "secondary" | "success" | "warning" | "error" = "primary") {
  return COLORS_COMPONENTS.badge[type];
}

// ============================================================================
// COLOR PALETTE EXPORT - For design systems and documentation
// ============================================================================
export const COLOR_PALETTE = {
  brand: COLORS_BRAND,
  text: COLORS_TEXT,
  background: COLORS_BG,
  border: COLORS_BORDER,
  buttons: COLORS_BUTTONS,
  links: COLORS_LINKS,
  status: COLORS_STATUS,
  gradients: COLORS_GRADIENTS,
  components: COLORS_COMPONENTS,
} as const;

export default COLOR_PALETTE;
