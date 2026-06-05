# Burger Singh App Design System

**Version:** 1.0  
**Last Updated:** June 2026  
**Design Language:** Indian QSR (Quick Service Restaurant) Mobile-First Design  
**Brand Tagline:** "Home of Desi Indian Burgers"

---

## 1. Brand Identity & Positioning

### Brand Essence
Burger Singh is India's largest **Made-in-India Burger Chain**, offering craft burgers infused with Indian spices and authentic desi flavors. The brand champions local, bold flavors while maintaining affordability and accessibility across 175+ outlets in 100+ cities.

### Brand Personality
- **Tone:** Playful, unpretentious, bold, community-driven
- **Attitude:** Irreverent, meme-first marketing approach, Vocal for Local
- **Target Audience:** Tech-savvy millennials & Gen Z, young professionals, students, families seeking authentic Indian fast food
- **Key Promise:** Big Punjabi Burgers with masala-forward recipes and larger serving sizes
- **Differentiation:** Unapologetically Indian alternative to global burger chains

### Brand Values
- **Authenticity** — Real Indian spices and recipes, not Western adaptations
- **Accessibility** — Affordable, widely available across cities
- **Community** — Social-first engagement, user-generated content, loyalty to customers
- **Innovation** — Craft burgers with unique Indian flavor combinations
- **Transparency** — Made-in-India, proud of local operations

---

## 2. Color Palette

### Primary Colors

#### Burger Singh Red (Energy & Appetite)
- **Hex:** `#DC2026` (Primary Brand Red)
- **RGB:** RGB(220, 32, 38)
- **HSL:** HSL(358, 75%, 49%)
- **Usage:** Primary CTAs, brand buttons, heat indicators, special offers, key UI elements
- **Accessibility:** Use on white/light backgrounds only (contrast ratio 7.5:1)
- **Variants:**
  - Red 100: `#FDE8E9` (Light tint for hover/disabled states)
  - Red 200: `#FAC8CC` (Very light backgrounds)
  - Red 300: `#F6A5AC` (Light interactive states)
  - Red 500: `#DC2026` (Primary — base)
  - Red 700: `#A01119` (Dark variants for text emphasis)
  - Red 900: `#5C0B0D` (Very dark for text on light backgrounds)

#### Burger Singh Orange (Warmth & Spice)
- **Hex:** `#FF8C00` (Primary Accent Orange)
- **RGB:** RGB(255, 140, 0)
- **HSL:** HSL(33, 100%, 50%)
- **Usage:** Secondary CTAs, accent elements, spice/heat badges, offer tags, icons, interactive elements
- **Variants:**
  - Orange 100: `#FFF4E6` (Very light background)
  - Orange 200: `#FFE4CC` (Light hover states)
  - Orange 300: `#FFD4B3` (Light interactive states)
  - Orange 500: `#FF8C00` (Primary accent — base)
  - Orange 700: `#CC7000` (Darker interactive states)
  - Orange 900: `#663800` (Dark text/emphasis)

### Secondary Colors

#### Gold/Yellow (Premium & Celebration)
- **Hex:** `#FFB81C` (Secondary Accent Gold)
- **RGB:** RGB(255, 184, 28)
- **HSL:** HSL(43, 100%, 55%)
- **Usage:** Premium/special badges, loyalty rewards, limited-time offers, promotional banners
- **Variants:**
  - Gold 100: `#FFF8E1`
  - Gold 300: `#FFEB99`
  - Gold 500: `#FFB81C` (Base)
  - Gold 700: `#CC9216`

### Neutral Colors (Grayscale & Text)

#### Blacks & Grays (Text & Hierarchy)
- **Black 900:** `#1A1A1A` (Primary text, headings)
- **Black 800:** `#2D2D2D` (Secondary text)
- **Gray 700:** `#424242` (Tertiary text, labels)
- **Gray 600:** `#616161` (Muted text, helper text)
- **Gray 500:** `#757575` (Disabled text, icons)
- **Gray 400:** `#BDBDBD` (Dividers, borders)
- **Gray 300:** `#E0E0E0` (Light borders, subtle backgrounds)
- **Gray 200:** `#EEEEEE` (Very light backgrounds)
- **Gray 100:** `#F5F5F5` (Card backgrounds, sections)
- **White 0:** `#FFFFFF` (Pure white for primary backgrounds)

### Semantic Colors (Status & Feedback)

#### Success (Green)
- **Hex:** `#4CAF50`
- **Usage:** Order confirmed, payment success, positive feedback, checkmarks
- **Light variant:** `#E8F5E9`
- **Dark variant:** `#1B5E20`

#### Warning (Amber)
- **Hex:** `#FF9800`
- **Usage:** Caution alerts, order delays, stock warnings
- **Light variant:** `#FFF3E0`
- **Dark variant:** `#E65100`

#### Error (Red)
- **Hex:** `#F44336`
- **Usage:** Errors, validation failures, out-of-stock items
- **Light variant:** `#FFEBEE`
- **Dark variant:** `#B71C1C`

#### Info (Blue)
- **Hex:** `#2196F3`
- **Usage:** Informational messages, help text, new features
- **Light variant:** `#E3F2FD`
- **Dark variant:** `#0D47A1`

### Color Usage Guidelines

#### Text Colors
- **Primary Text:** Black 900 (`#1A1A1A`) on White/Gray 100
- **Secondary Text:** Gray 700 (`#424242`) for subtitles, captions
- **Muted Text:** Gray 600 (`#616161`) for helper text, timestamps
- **Disabled Text:** Gray 500 (`#757575`)

#### Background Colors
- **Primary Background:** White (`#FFFFFF`)
- **Secondary Background:** Gray 100 (`#F5F5F5`) for sections, cards
- **Tertiary Background:** Gray 200 (`#EEEEEE`) for subtle contrast
- **Dark Mode Background:** Black 900 (`#1A1A1A`) with white text overlay

#### Interactive Elements
- **Default Button:** Red 500 (`#DC2026`) on White
- **Secondary Button:** Orange 500 (`#FF8C00`) or Gray 100 with Gray 700 text
- **Disabled Button:** Gray 300 (`#E0E0E0`) with Gray 500 text
- **Hover State:** Darker variant of primary color (Red 700: `#A01119`)
- **Active/Pressed:** Orange 700 (`#CC7000`)

### Accessibility Compliance
- **WCAG AA Minimum:** 4.5:1 contrast ratio for normal text, 3:1 for large text
- **WCAG AAA:** 7:1 contrast ratio for enhanced accessibility
- **Red/Green Colorblindness:** Never rely on red/green alone; use icons, text, or patterns
- **Color + Pattern:** Use patterns alongside colors for status indicators

---

## 3. Typography System

### Type Scale (Inspired by Zomato's Approach)

#### Font Families
- **Heading/Display Font:** Inter Bold / Poppins Bold (Modern, geometric, friendly)
- **Body/UI Font:** Inter Regular / Roboto (Clean, readable, open-source)
- **Monospace Font:** Courier Prime / IBM Plex Mono (Code, prices, special values)

All fonts must support Devanagari script for potential Hindi/regional language support.

### Font Sizes (Base Unit: 4px)

```
Display XL:  32px / 1.25rem (Line-height: 40px)
Display L:   28px / 1.75rem (Line-height: 36px)
Display M:   24px / 1.5rem  (Line-height: 32px)

Heading XL:  21px / 1.3125rem (Line-height: 28px)
Heading L:   19px / 1.1875rem (Line-height: 24px)
Heading M:   17px / 1.0625rem (Line-height: 24px)
Heading S:   15px / 0.9375rem (Line-height: 20px)

Body Large:  15px / 0.9375rem (Line-height: 24px)  [Primary body text]
Body:        13px / 0.8125rem (Line-height: 20px)  [Standard body text]
Body Small:  12px / 0.75rem   (Line-height: 16px)  [Secondary text]

Caption:     11px / 0.6875rem (Line-height: 16px)  [Labels, helper text]
Overline:    10px / 0.625rem  (Line-height: 14px)  [Tags, labels, category names]
```

### Font Weights

- **Bold (700):** Headings, CTAs, emphasis
- **Semibold (600):** Secondary headings, subheadings
- **Medium (500):** Labels, button text, medium emphasis
- **Regular (400):** Body text, default weight
- **Light (300):** Only for decorative purposes (avoid for body text)

### Line Heights & Letter Spacing

- **Headings:** 1.2x font-size (tight)
- **Body Text:** 1.5x font-size (comfortable reading)
- **UI Labels:** 1.25x font-size
- **Letter Spacing:** 
  - Headings: 0px (normal)
  - Body: 0.2px (slight loosening for readability)
  - All Caps/Overline: 0.5px (loose for emphasis)

### Typography Usage

#### Page Titles
```
Font: Inter Bold, 28px
Color: Black 900
Line-height: 36px
Margin-bottom: 16px
```

#### Section Headings
```
Font: Inter Bold, 21px
Color: Black 900
Line-height: 28px
Margin-bottom: 12px
```

#### Subsection Headings
```
Font: Inter Semibold, 17px
Color: Black 800
Line-height: 24px
Margin-bottom: 8px
```

#### Body Text
```
Font: Inter Regular, 15px
Color: Gray 700
Line-height: 24px
Margin-bottom: 16px
```

#### Button Text
```
Font: Inter Semibold, 15px
Color: White
Text-transform: None (natural case)
Letter-spacing: 0.2px
```

#### Micro-copy (Helper Text)
```
Font: Inter Regular, 12px
Color: Gray 600
Line-height: 16px
```

---

## 4. Spacing & Layout System

### Spacing Scale (Base Unit: 4px)

```
Spacing Token:  Px Value:
xs              4px
sm              8px
md              12px
lg              16px
xl              24px
2xl             32px
3xl             48px
4xl             64px
5xl             96px
```

### Usage Grid

```
Padding:
  Component padding:       sm (8px)
  Card/Container padding:  lg (16px)
  Section padding:         xl (24px)
  Page margins:            lg (16px) mobile, xl (24px) tablet+

Margin:
  Between elements:        md (12px)
  Between sections:        xl (24px) mobile, 2xl (32px) tablet+
  Bottom of list items:    sm (8px)
  Top of components:       md (12px)

Gap (Flexbox):
  Horizontal list items:   md (12px)
  Vertical list items:     sm (8px)
  Grid items:              lg (16px)
```

### Responsive Breakpoints

```
Mobile (xs):    0px - 480px    [Default, optimized for small screens]
Tablet (sm):    481px - 768px  [Adjusted layout, larger touch targets]
Desktop (md):   769px - 1024px [Multi-column, expanded UI]
Large (lg):     1025px+        [Full desktop experience]
```

### Safe Area & Viewport

- **Mobile Safe Area:** 16px horizontal padding on all sides
- **Max Content Width:** 1200px (desktop)
- **Status Bar Height:** Account for 44px (iPhone) or system-defined heights

---

## 5. Component Design Specifications

### Buttons

#### Primary Button (CTA)
```
Background: Red 500 (#DC2026)
Text: White, Semibold 15px
Padding: 12px (vertical) × 24px (horizontal)
Border Radius: 8px
Height: 44px (min touch target)
Shadow: None (clean)
Hover: Red 700 (#A01119)
Active: Red 900 (#5C0B0D)
Disabled: Gray 300, Gray 500 text

Ripple Effect: Orange 300 (20% opacity) on tap
```

#### Secondary Button
```
Background: Gray 100 (#F5F5F5)
Text: Gray 700, Semibold 15px
Padding: 12px (vertical) × 24px (horizontal)
Border: 1px Gray 400 (#BDBDBD)
Border Radius: 8px
Height: 44px
Hover: Gray 200 (#EEEEEE)
Active: Gray 300 (#E0E0E0)
Disabled: Gray 200, Gray 500 text
```

#### Ghost Button (Tertiary)
```
Background: Transparent
Text: Red 500, Semibold 15px
Padding: 12px × 24px
Border: None
Height: 44px
Hover: Red 100 background (#FDE8E9)
Active: Red 200 background (#FAC8CC)
Disabled: Gray 500 text
```

#### Icon Button (Floating Action)
```
Size: 56px (diameter)
Background: Red 500 (#DC2026)
Icon: 24px white SVG
Border Radius: 50% (circular)
Shadow: 0px 4px 12px rgba(220, 32, 38, 0.3)
Hover: Slightly enlarged (scale 1.05)
Active: Red 700
Position: Bottom-right, 24px margin from edge
```

### Cards

#### Menu Item Card
```
Background: White (#FFFFFF)
Border: 1px Gray 300 (#E0E0E0)
Border Radius: 12px
Padding: 12px
Shadow: 0px 2px 8px rgba(0, 0, 0, 0.08)
Hover: Lift effect, shadow becomes 0px 4px 12px rgba(0, 0, 0, 0.12)
Content Layout:
  - Image (16:9): 100% width, 200px height
  - Title: 17px bold, 20px line-height, 8px margin-top
  - Description: 13px gray, 2 lines max, 4px margin-top
  - Rating & Count: 12px gray, 4px margin-top
  - Price: 17px bold red, 12px margin-top
  - Add Button: Full width, 44px height, 8px margin-top
```

#### Offer/Banner Card
```
Background: Linear gradient Red 500 → Orange 500
Border Radius: 12px
Padding: 16px
Text: White, bold
Layout:
  - Emoji/Icon: 32px, left-aligned
  - Title: 17px bold
  - Description: 13px regular, 2 lines
  - CTA Button: White border, transparent background
Shadow: 0px 4px 16px rgba(220, 32, 38, 0.2)
```

#### Order Status Card
```
Background: Gray 100 (#F5F5F5)
Border: 2px solid (color based on status)
Border Radius: 12px
Padding: 16px
Content:
  - Status badge: 12px capsule, top-right
  - Order ID: 13px gray
  - Items summary: 15px bold
  - Time/Location: 13px gray
  - CTA Button: Secondary style
```

### Input Fields

#### Text Input
```
Height: 44px
Padding: 12px (vertical) × 16px (horizontal)
Font: Inter Regular 15px
Border: 1px Gray 400 (#BDBDBD)
Border Radius: 8px
Background: White (#FFFFFF)
Focus: 2px Blue 500 border (#2196F3), shadow: 0px 0px 0px 4px rgba(33, 150, 243, 0.1)
Placeholder: Gray 500 (#757575)
Error: Border becomes Red 500, error message 12px below
Disabled: Gray 200 background, Gray 500 text
```

#### Dropdown Select
```
Height: 44px
Padding: 12px × 16px
Font: 15px
Border: 1px Gray 400
Border Radius: 8px
Chevron Icon: 20px, right-aligned, 16px padding
Focus: Same as text input
Dropdown Menu:
  - Background: White
  - Item height: 44px
  - Item padding: 12px × 16px
  - Hover: Gray 100 background
  - Selected: Blue 100 background, Blue 500 text
```

#### Radio Buttons
```
Size: 20px diameter
Border: 2px Gray 400
Border Radius: 50%
Spacing: 12px from label
Selected: 2px Red 500 border, 8px Red 500 circle inside
Checked label: 15px bold Black 900
Unchecked label: 15px Gray 700
```

#### Checkboxes
```
Size: 20px × 20px
Border: 2px Gray 400
Border Radius: 4px
Unchecked: White background
Checked: Red 500 background, white checkmark (2px stroke)
Disabled: Gray 200 background
Label: 15px, 12px left-margin
```

### Navigation

#### Bottom Tab Navigation
```
Height: 64px (including safe area)
Background: White (#FFFFFF)
Border-top: 1px Gray 300 (#E0E0E0)
Items: 4-5 max
Icon size: 24px
Label: 11px regular, Gray 600 default
Active Tab:
  - Icon: Red 500
  - Label: Red 500, semibold
  - Indicator: 3px Red 500 bar above tab
  - Background: Gray 50 (very subtle)
Inactive Tab:
  - Icon: Gray 500
  - Label: Gray 600
Spacing: Equal distribution
```

#### Top App Bar
```
Height: 56px
Background: White (#FFFFFF)
Border-bottom: 1px Gray 300 (#E0E0E0)
Padding: 8px (vertical) × 16px (horizontal)
Content Alignment:
  - Left: Back button / Menu icon (24px)
  - Center: Title (17px bold) or logo
  - Right: Action icons (24px, up to 2)
Sticky: Position fixed when scrolling
Safe Area: Account for notch/status bar
```

#### Horizontal Scroll Menu (Categories)
```
Height: 40px
Padding: 8px (vertical) × 16px (horizontal)
Spacing: 12px between items
Pill Style:
  - Default: Gray 100 background, Gray 700 text, 12px font
  - Active: Red 500 background, White text
  - Border Radius: 20px
Scroll: Snap-to-item, smooth
```

### Forms

#### Checkout Form
```
Section Spacing: 24px
Input Spacing: 12px
Divider: 1px Gray 300, 16px vertical margin
Order Summary:
  - Subtotal: 15px gray, right-aligned
  - Discount: 15px green, right-aligned
  - Tax: 13px gray, right-aligned
  - Total: 21px bold red, right-aligned, 12px margin-top
CTA: Primary button, full width, 44px height
```

---

## 6. Iconography System

### Icon Library
- **Icon Set:** Lucide React or Feather Icons (24px/32px default)
- **Style:** Minimal, 2px stroke weight, rounded corners
- **Colors:**
  - Primary action: Red 500 (#DC2026)
  - Secondary: Orange 500 (#FF8C00)
  - Muted: Gray 500 (#757575)
  - Active/Highlight: Red 500
  - Disabled: Gray 300 (#E0E0E0)

### Common Icons (with Meanings)

| Icon | Usage | Variants |
|------|-------|----------|
| Home | Home screen | Default, Active (Red 500) |
| Search | Search/Find | Magnifying glass, 24px |
| MapPin | Location/Outlet | Pinpoint style |
| Clock | Timing/Delivery | Delivery ETA, wait time |
| Star | Ratings/Favorites | Filled (active), outlined (inactive) |
| Heart | Wishlist | Filled red (active), outline (inactive) |
| ShoppingCart | Cart/Orders | With badge for count |
| User | Profile | Circle avatar, user silhouette |
| Settings | Options | Gear icon, 24px |
| ChevronRight | Navigation | Forward action |
| X | Close | Dismiss, cancel |
| Check | Confirm | Success, completion |
| AlertCircle | Warnings | Error states, cautions |
| Flame | Spicy/Hot | Heat level indicator |
| Filter | Menu Filters | Funnel shape |
| Phone | Contact | Call action |
| Share | Social Sharing | Share icon |

### Icon Usage

- **Action Icons (Buttons):** 24px, centered
- **Navigation Icons:** 24px in bottom nav, 28px in top nav
- **List Item Icons:** 20px, left-aligned, 16px margin
- **Status Icons:** 20px-32px depending on prominence
- **Decorative Icons:** 48px-64px for illustrations

---

## 7. Animations & Micro-interactions

### Principles
- **Duration:** Keep animations under 300ms for UI feedback, up to 600ms for delightful interactions
- **Easing:** Use ease-out for exits, ease-in-out for continuous motion
- **Subtlety:** Avoid distracting; animations should support, not distract
- **Purpose:** Every animation must have a functional reason

### Common Animations

#### Button Interaction
```
On Tap/Click:
  - Scale: 0.95 (3px shrink)
  - Duration: 150ms
  - Easing: ease-out
  - Then return to 1.0 over 200ms

On Hover (Desktop):
  - Background color shift (darker)
  - Duration: 200ms
  - Easing: ease-in-out
```

#### Add-to-Cart Animation
```
1. Button feedback: Scale down (0.95) for 150ms
2. Ripple effect: Orange radial ripple from center
3. Cart badge update: Scale pop-in animation (0 → 1.1 → 1.0)
   Duration: 300ms, easing: cubic-bezier(0.34, 1.56, 0.64, 1)
4. Toast notification: Slide-up from bottom
   Duration: 300ms, easing: ease-out
5. Icon change: Cross-fade (current → checkmark)
   Duration: 200ms
```

#### Pull-to-Refresh
```
Threshold: 64px pull distance
Loading spinner: Continuous rotation 300ms per cycle
Release momentum: Snap animation, 200ms
Refresh complete: Fade out over 200ms
```

#### List Item Entrance (Skeleton to Content)
```
Skeleton loader: Pulsing Gray 300 → Gray 200 → Gray 300
  Duration: 1000ms, infinite
When content loads:
  Skeleton fades out (100ms)
  Content fades in (200ms)
  Slight scale-in (0.98 → 1.0) over 300ms
```

#### Bottom Sheet Modal Entry
```
Slide-up from bottom:
  Distance: Full height or content height
  Duration: 300ms
  Easing: cubic-bezier(0, 0, 0.2, 1)
  Overlay fade-in: 0 → 0.5 opacity, 250ms
Exit: Reverse animation, 250ms
```

#### Swipe Gesture Feedback
```
On swipe (horizontal):
  - Snap animation to final position
  - Duration: 200ms
  - Easing: ease-out
On swipe cancel:
  - Bounce back animation
  - Duration: 300ms
  - Spring-like easing
```

#### Loading States
```
Spinner:
  - Rotation: Infinite, 1 cycle = 1000ms
  - Color: Red 500 or Orange 500
  - Size: 32px (large), 24px (medium)
Skeleton:
  - Gray gradient pulse, 1000ms cycle
  - Opacity: 0.6 → 1.0 → 0.6
Dots:
  - Sequential fade + scale
  - 3 dots, 200ms stagger
```

#### Toast Notifications
```
Entrance: Slide-up from bottom, 300ms, ease-out
Duration: 3000ms (can be extended for error messages)
Exit: Fade-out or slide-down, 200ms, ease-in
Position: Bottom-center, 16px from bottom (account for safe area)
Max width: 90% viewport width
```

---

## 8. Accessibility Standards

### WCAG 2.1 AA Compliance (Target: AAA where possible)

#### Color Contrast Ratios
- **Normal Text:** Minimum 4.5:1 contrast ratio
- **Large Text (18px+):** Minimum 3:1 contrast ratio
- **UI Components & Borders:** Minimum 3:1 contrast ratio
- **Graphics:** Should maintain minimum 3:1

#### Font Sizes & Readability
- **Minimum font size:** 12px for body text
- **Recommended minimum:** 14px for mobile
- **Line height:** Minimum 1.5x font-size for body text
- **Letter spacing:** Minimum 0.12x font-size

#### Touch Targets
- **Minimum size:** 44px × 44px (iOS), 48px × 48px (Android)
- **Minimum spacing:** 8px between touch targets
- **Recommendation:** Aim for 56px × 56px for primary actions

#### Focus & Keyboard Navigation
- **Focus indicator:** 2px solid Blue 500 (`#2196F3`) with 4px glow
- **Focus order:** Tab order must match visual flow (top-left → bottom-right)
- **Keyboard shortcuts:** Accessible via Tab, Enter, Space, Arrow keys
- **Skip links:** Provide "Skip to content" for lengthy lists

#### Screen Reader Support
- **Semantic HTML:** Use proper `<button>`, `<input>`, `<label>` tags
- **ARIA labels:** Provide descriptive labels for icons-only buttons
- **Image alt text:** All images must have meaningful alt text
- **Form labels:** Every input must have associated `<label>`
- **Live regions:** Use `aria-live` for dynamic content updates (cart, status)
- **Landmarks:** Use `<header>`, `<nav>`, `<main>`, `<footer>` tags

#### Motion & Animation
- **Respect preferences:** Honor `prefers-reduced-motion` media query
- **No auto-play:** Avoid auto-playing videos with sound
- **No flashing:** Avoid content that flashes more than 3 times/second
- **Pause controls:** Provide pause/play buttons for carousels

#### Dark Mode Considerations
- **Support system preference:** `prefers-color-scheme: dark`
- **Adequate contrast in dark mode:** Use Gray 100 text on Black 900
- **Avoid pure black:** Use Black 900 (`#1A1A1A`) instead of `#000000`
- **Adjust color palette:** Lighter variants for dark backgrounds

---

## 9. Mobile-First Design Approach

### Design Principles

1. **Start Mobile, Scale Desktop:** Design for 360px-480px first, then tablet/desktop
2. **Touch-First Interactions:** Assume finger/thumb input, not mouse clicks
3. **Progressive Enhancement:** Core functionality works at low bandwidth
4. **Flexible Layouts:** Use flexbox/grid, avoid fixed widths
5. **Readable at Any Size:** Test across all breakpoints

### Layout Patterns

#### Single Column Layout (Mobile)
```
Header (56px) + Top padding
Content area (full width - 32px padding)
  - Cards/sections stacked vertically
  - Full-width buttons, 44px height
Bottom nav (64px including safe area)
```

#### Content Sections
```
Padding: 16px horizontal, 24px vertical (between sections)
Max-width: 100% (mobile), 1200px (desktop)
Margin: 0 auto (center on larger screens)
Cards: Full-width on mobile, grid on desktop
```

#### Imagery
```
Mobile: Full-width images, 16:9 or 4:3 aspect ratio
Tablet: Side-by-side images where appropriate
Desktop: Multi-column layouts, consistent aspect ratios
Optimization: Serve appropriately sized images (Lighthouse scores)
```

### Performance Targets

- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Core Web Vitals:** All green

### Image Optimization

- **Lazy loading:** Load images only when in viewport
- **Responsive images:** Serve different sizes for different devices
- **Format:** Use WebP with JPEG fallback
- **Compression:** Optimize before serving (TinyPNG, ImageOptim)

---

## 10. Component Library Structure

### Folder Organization
```
components/
├── atoms/
│   ├── Button.jsx
│   ├── Badge.jsx
│   ├── Icon.jsx
│   ├── Avatar.jsx
│   └── Tag.jsx
├── molecules/
│   ├── SearchBar.jsx
│   ├── MenuItem.jsx
│   ├── OfferCard.jsx
│   ├── RatingBar.jsx
│   └── QuantitySelector.jsx
├── organisms/
│   ├── Header.jsx
│   ├── BottomNav.jsx
│   ├── MenuList.jsx
│   ├── CartSummary.jsx
│   └── CheckoutForm.jsx
├── templates/
│   ├── HomeTemplate.jsx
│   ├── MenuTemplate.jsx
│   ├── CheckoutTemplate.jsx
│   └── OrderTemplate.jsx
└── hooks/
    ├── useCart.js
    ├── useLocation.js
    └── useLoyalty.js
```

### Component Props Convention
```jsx
// Button component example
<Button
  variant="primary" | "secondary" | "ghost"
  size="sm" | "md" | "lg"
  icon={IconComponent}
  loading={false}
  disabled={false}
  fullWidth={false}
  onClick={handleClick}
>
  Button Text
</Button>
```

---

## 11. Design Tokens (CSS Variables)

### CSS Variables (Tailwind Config Alternative)

```css
/* Colors */
--color-red-500: #DC2026;
--color-red-700: #A01119;
--color-orange-500: #FF8C00;
--color-orange-700: #CC7000;
--color-gold-500: #FFB81C;
--color-gray-900: #1A1A1A;
--color-gray-700: #424242;
--color-gray-600: #616161;
--color-white: #FFFFFF;

/* Spacing */
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 12px;
--spacing-lg: 16px;
--spacing-xl: 24px;
--spacing-2xl: 32px;

/* Typography */
--font-family-heading: 'Inter', sans-serif;
--font-family-body: 'Inter', sans-serif;
--font-size-base: 15px;
--font-size-sm: 13px;
--font-size-xs: 12px;
--line-height-tight: 1.2;
--line-height-normal: 1.5;

/* Shadows */
--shadow-sm: 0px 2px 8px rgba(0, 0, 0, 0.08);
--shadow-md: 0px 4px 12px rgba(0, 0, 0, 0.12);
--shadow-lg: 0px 8px 24px rgba(0, 0, 0, 0.16);

/* Border Radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;

/* Z-Index */
--z-dropdown: 100;
--z-sticky: 200;
--z-fixed: 300;
--z-modal-backdrop: 400;
--z-modal: 500;
--z-popover: 600;
--z-tooltip: 700;
```

---

## 12. QSR-Specific Design Patterns

### Menu Browsing Flow
```
1. User lands on Home
   ↓
2. Selects Fulfillment (Dine-in / Delivery / Takeout) — TOP PRIORITY
   ↓
3. Browsable categories with horizontal scroll
   ↓
4. Cards showing:
     - 16:9 burger image
     - Name & description (2 lines max)
     - Rating (stars + count)
     - Price (bold, red)
     - "Add to Cart" button (red, 44px height)
   ↓
5. Detail sheet on card tap (swipe-up modal)
   ↓
6. Customization options (toppings, spice level, instructions)
   ↓
7. Add to cart with quantity selector
```

### Dine-in vs. Delivery/Takeout Toggle
```
Position: Top of app, after location
Style: 3 segmented buttons or pills
Default: Based on location & time
Visual: Red 500 for selected, Gray 100 for unselected
Impact: Changes:
  - Available outlets
  - Menu items (some may not be delivery-eligible)
  - Pricing (dine-in may have different rates)
  - Checkout flow (table number vs. address)
  - Timing (immediate for dine-in, ETA for delivery)
```

### Loyalty Program Integration
```
1. Loyalty badge/tier visible in header/profile
2. Points display on every order
   - "Earn ₹X with this order"
3. Rewards section in menu (special prices with points)
4. Redemption at checkout
   - Show available points
   - Allow redemption for discount
   - Clear confirmation
5. Push notifications for expiring points (weekly)
6. Tier-up celebration with confetti animation
```

### Offers & Deals Presentation
```
1. Prominent banner carousel on home (auto-scroll, 3s interval)
2. Individual offer cards:
   - Gradient background (Red → Orange)
   - Emoji/icon
   - Title & description (2 lines max)
   - Discount badge (e.g., "30% OFF")
   - Valid until time
   - CTA button (white border)
3. Offer detail modal with full T&Cs
4. Badge on applicable menu items
```

### Order Status Tracking
```
Stages:
  1. Order Placed (Confirm) → Green checkmark
  2. Being Prepared → Cooking animation
  3. Ready/Out for Delivery → Notification
  4. Delivered/Pickup Ready → Tap to open
  5. Completed → Rate & Review prompt

Timeline:
  - Horizontal stepper showing stages
  - Current stage highlighted (Red 500)
  - Completed stages grayed out
  - Est. time remaining
  - Live notification updates (via socket/polling)
```

### Cart & Checkout Flow
```
1. Floating cart button (56px FAB, bottom-right)
   - Shows item count badge
   - Sticky when scrolling

2. Cart drawer/modal:
   - Swipe-up from bottom (mobile)
   - Slide-in from right (desktop)
   - List of items with quantity controls
   - Subtotal, taxes, delivery fee, discount
   - "Proceed to Checkout" button

3. Checkout form:
   - Address (pre-filled if dine-in, selectable if delivery)
   - Payment method (UPI, card, wallet)
   - Special instructions
   - Promo code input
   - Order summary (final amounts)
   - "Place Order" button (full-width, 44px)

4. Order confirmation:
   - Order ID prominently displayed
   - Expected time
   - Order tracking option
   - Call restaurant option
   - Return to menu button
```

---

## 13. Best Practices & Guidelines

### Design Decisions
1. **Consistency:** Use design system components, don't create variants
2. **Simplicity:** Maximum 3 taps to reach any feature
3. **Feedback:** Every action has instant visual feedback
4. **Clarity:** Information hierarchy is obvious
5. **Delight:** Micro-interactions add personality without friction

### Common Mistakes to Avoid
- ❌ Using brand red for all UI (too harsh; reserve for primary actions)
- ❌ Text smaller than 12px (hard to read, fails accessibility)
- ❌ Buttons smaller than 44×44px (hard to tap on mobile)
- ❌ Auto-playing videos/audio (annoying, accessibility issue)
- ❌ Requiring registration before browsing menu (friction)
- ❌ Long forms on mobile (use progressive disclosure)
- ❌ Image-heavy without lazy loading (slow)
- ❌ Relying on color alone for status (colorblind users)

### Testing Checklist
- [ ] Tested on iOS 14+ and Android 10+
- [ ] Touch targets are 44px minimum
- [ ] Text has minimum 4.5:1 contrast
- [ ] Works offline (cache critical resources)
- [ ] Lighthouse scores: 90+ Performance, 95+ Accessibility
- [ ] Loading states visible for all async operations
- [ ] Keyboard navigation fully functional
- [ ] Screen reader testing (VoiceOver, TalkBack)
- [ ] Dark mode tested
- [ ] Fast mobile network throttling (3G) tested

---

## 14. Indian Language Support (Future Roadmap)

### Devanagari Script Considerations
- **Font:** Noto Sans Devanagari (Google Fonts)
- **Line height:** 1.6x (more spacing for legibility)
- **Character width:** Account for wider characters
- **Truncation:** Avoid mid-word truncation

### Right-to-Left (RTL) Readiness
- **CSS:** Support for `direction: rtl`
- **Flexbox:** Use `flex-direction: row-reverse` for RTL
- **Margins/Padding:** Use logical properties (`margin-inline-start`)
- **Icons:** Mirror directional icons (arrows, chevrons)

### Regional Preferences
- **Festivals:** Display seasonal offers (Diwali, Holi, Independence Day)
- **Local languages:** Support Hindi, Punjabi, Bengali, Tamil (future)
- **Regional burgers:** Highlight region-specific menu items
- **Local payment:** Emphasize UPI, Paytm, Google Pay

---

## 15. Resources & References

### Design Files
- **Figma:** [Link to shared design system file]
- **Storybook:** Component library documentation
- **Brandfetch:** Brand assets repository

### Tool Stack
- **Design:** Figma (components, prototypes)
- **Development:** React.js with Tailwind CSS
- **Icons:** Lucide React (24px/32px recommended)
- **Animations:** Framer Motion
- **Fonts:** Google Fonts (Inter, Poppins, Noto Sans)

### External References
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Mobile App Design Principles](https://material.io/design)
- [Zomato Design System (Sushi)](https://blog.zomato.com/defining-our-typography-system)
- [Food Delivery UX Best Practices](https://baymard.com/blog/food-delivery-and-takeout-2024-benchmark)
- [Micro-interactions Best Practices](https://www.nngroup.com/articles/microinteractions/)

---

## 16. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | June 2026 | Initial design system release |
| 1.1 | TBD | Dark mode, RTL support |
| 1.2 | TBD | Regional language support |
| 2.0 | TBD | Major refresh with new brand evolution |

---

## 17. Approval & Ownership

**Design System Owner:** Design Team  
**Last Updated By:** Design System Curator  
**Approved By:** Product Lead, Brand Manager  
**Review Schedule:** Quarterly  
**Contact:** design@burgersingh.com

---

**The Burger Singh Design System is a living document.** Please submit feedback, requests, and suggestions through the design team's feedback channel. Together, we'll build an app that's as delicious as our burgers.

🍔 *Home of Desi Indian Burgers* 🍔
