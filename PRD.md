# Product Requirements Document (PRD)
## Burger Singh — In-Outlet Customer Ordering App
### Version 2.0 | Dine-In & Take-Away

---

## 1. Executive Summary

### 1.1 Product Overview

The **Burger Singh In-Outlet Ordering App** is a mobile-first, customer-facing digital ordering experience designed for deployment at Burger Singh QSR (Quick Service Restaurant) outlets across India. It enables customers to independently browse the menu, customize items, manage their cart, apply offers, and pay — reducing queue wait times, increasing average order value, and delivering a premium brand experience.

### 1.2 Product Vision

> **"Make every customer feel like a Singh at the counter — bold, in control, and well-fed."**

Deliver a frictionless, joyful ordering journey that reflects Burger Singh's desi-premium brand identity while maximizing operational efficiency at every outlet.

### 1.3 Scope

- **In-Scope**: Dine-In ordering, Take-Away ordering, menu browsing, cart management, promotions, coupon/promo codes, loyalty (Singh Coins), payment initiation, order tracking (in-outlet).
- **Out-of-Scope**: Home delivery, third-party delivery integrations, franchise management dashboards, supply chain or inventory management.
- **Platform**: Progressive Web App (PWA) — mobile-first, accessible via QR code scan at each outlet table or counter.

---

## 2. Goals & Success Metrics

### 2.1 Business Goals

| Goal | Metric | Target |
|------|--------|--------|
| Reduce average queue wait time | Time from entry to order placed | < 3 minutes |
| Increase average order value (AOV) | Average bill amount per session | +15% vs. counter orders |
| Drive loyalty adoption | Singh Coins users per outlet per day | 30% of digital orders |
| Reduce staff counter load | % of orders via app vs. counter | 40% within 6 months |
| Coupon redemption | Promo codes applied per 100 orders | 25% redemption rate |

### 2.2 User Goals

| Goal | How the App Addresses It |
|------|--------------------------|
| Order fast with no staff dependency | Self-serve menu with instant cart |
| Discover new items & deals | Offers carousel, tags, homepage highlights |
| Customize their order | Item-level customization (spice, toppings, extras) |
| Save money | Promo codes, Singh Coins redemption, loyalty rewards |
| Know exactly what they get | Item descriptions, calories, veg/non-veg indicators |

### 2.3 Key Performance Indicators (KPIs)

- **App Session-to-Order Rate**: ≥ 70% of sessions result in a placed order
- **Average Session Duration**: 2–4 minutes (fast browsing to order)
- **Cart Abandonment Rate**: < 30%
- **Crash-Free Session Rate**: ≥ 99.5%
- **CSAT Score**: ≥ 4.2/5 (post-order survey, optional)
- **New User Onboarding Completion Rate**: ≥ 85%

---

## 3. User Personas

### 3.1 The Young Professional (Primary)
- **Age**: 22–32 | **Frequency**: 2–3x per week | **Device**: iPhone/Android flagship
- **Motivation**: Quick lunch, no queue, knows what they want
- **Behaviour**: Skips onboarding, goes straight to best sellers, pays via UPI
- **Pain point**: Slow counter service, wrong orders

### 3.2 The College Group (Primary)
- **Age**: 18–24 | **Frequency**: Weekends | **Device**: Mid-range Android
- **Motivation**: Hang out, split bill, discover new items
- **Behaviour**: Browses all categories, reads descriptions, adds combos
- **Pain point**: Menu FOMO, no visible discounts upfront

### 3.3 The Family (Secondary)
- **Age**: 30–45 | **Frequency**: Monthly | **Device**: Varies
- **Motivation**: Easy order for multiple people, veg options for kids
- **Behaviour**: Filters by veg, chooses safe items, looks for combos
- **Pain point**: Confusing menus, not knowing veg/non-veg at a glance

### 3.4 The Loyalty Regular (Secondary)
- **Age**: 25–38 | **Frequency**: Daily/weekly | **Device**: Android
- **Motivation**: Earn and redeem Singh Coins, get personalized deals
- **Behaviour**: Logs in every time, checks loyalty balance, uses promo codes
- **Pain point**: Points not visible, rewards feel distant

---

## 4. User Journeys

### 4.1 Primary Journey — Dine-In (Table Order)

```
Customer enters outlet
        ↓
Scans QR code at table
        ↓
App opens (Onboarding or Home)
        ↓
Selects "Dine-In" mode
        ↓
Enters table number
        ↓
Browses menu (Home → Menu → Item)
        ↓
Adds items to cart
        ↓
Reviews cart
        ↓
Goes to Checkout
        ↓
Applies promo code (optional)
        ↓
Redeems Singh Coins (optional)
        ↓
Selects payment method (UPI / Card / Cash at Counter)
        ↓
Confirms order
        ↓
Order confirmation + token number displayed
        ↓
Kitchen notified (KDS / POS integration)
        ↓
Customer waits, food brought to table
```

### 4.2 Primary Journey — Take-Away (Counter Collection)

```
Customer walks into outlet
        ↓
Opens app (or scans QR at counter/door)
        ↓
Selects "Take-Away" mode
        ↓
Browses menu
        ↓
Adds items to cart
        ↓
Goes to Checkout
        ↓
Applies coupon (optional)
        ↓
Selects payment method (UPI / Card / Cash)
        ↓
Confirms order
        ↓
Order token + estimated ready time displayed
        ↓
Customer waits, collects at counter when called
```

---

## 5. Feature Specifications

### 5.1 Onboarding Screen

**Purpose**: First-time user introduction to the app. Lightweight and skippable.

**Screens (3 slides)**:
1. "Desi Burgers, Desi Dil" — Brand intro with hero visual
2. "Order. Pay. Eat. No queue." — Value proposition
3. "Earn Singh Coins with every bite!" — Loyalty teaser

**Interactions**:
- Swipe or tap "Next" to advance
- "Skip" button top-right on all slides
- "Continue without account" (guest mode, no sign-up required)
- Optional: "Sign In / Create Account" for loyalty access

**Acceptance Criteria**:
- [ ] All 3 slides render correctly on 360dp–430dp screen widths
- [ ] "Skip" bypasses remaining slides and goes to Home
- [ ] Onboarding not shown on subsequent app opens (persisted via localStorage)
- [ ] Guest orders possible without login

---

### 5.2 Order Mode Selection

**Purpose**: Let customers choose how they're ordering before any food selection.

**Modes Available**:

| Mode | Icon | Description | Additional Input |
|------|------|-------------|-----------------|
| Dine-In | 🪑 | Eating at the outlet | Table number (required) |
| Take-Away | 🥡 | Collecting and leaving | None |

**Placement**: Prominently on Home screen, switchable at any point before checkout. Order mode persists throughout the session.

**Behaviour**:
- Switching mode mid-cart does not clear the cart
- Take-Away: No delivery fee, no table number
- Dine-In: 10% app discount applied automatically at checkout (incentive to use app)

**Acceptance Criteria**:
- [ ] Mode selection visible on HomeScreen and CheckoutScreen
- [ ] Table number input shown only for Dine-In, mandatory before placing order
- [ ] Mode switch updates checkout summary instantly (discounts recalculate)
- [ ] Selected mode persists across screen navigations

---

### 5.3 Home Screen

**Purpose**: Primary discovery hub and session entry point.

**Sections** (top to bottom):

1. **Header Bar**
   - Burger Singh logo (left)
   - Order mode toggle (Dine-In / Take-Away) — pill toggle
   - Profile/avatar icon (right, opens Profile screen)

2. **Greeting**
   - Time-sensitive: "Good morning, Singh!" / "Good evening, Singh!"
   - Outlet name displayed if detected (e.g., "Connaught Place Outlet")

3. **Active Offer Banner / Carousel**
   - Auto-scrolling horizontal carousel (2–4 offers)
   - Tap to open Offers screen or directly apply
   - Dismiss button per offer

4. **Quick Category Pills**
   - Horizontal scrollable: All | Burgers | Wraps | Sides | Beverages | Desserts | Combos
   - Tapping navigates to Menu filtered by category
   - Active pill highlighted in brand orange

5. **Featured / Bestseller Section**
   - 4–6 horizontally scrollable item cards
   - Shows: Item name, price, rating, bestseller/new badge
   - Tapping opens Item Detail screen

6. **Deals & Combos Section**
   - 2–3 combo cards (combo name, savings amount, items included)
   - "View All Offers" link

7. **Singh Coins Loyalty Strip** (if logged in)
   - Current balance + "Earn more with every order"
   - Tap navigates to Loyalty screen

**Acceptance Criteria**:
- [ ] Offer carousel auto-scrolls every 3 seconds, pauses on user interaction
- [ ] Category pills filter menu on tap without page reload
- [ ] Bestseller section loads within 1 second
- [ ] Logged-out state: loyalty strip not shown; login prompt shown on loyalty icon tap

---

### 5.4 Menu Screen

**Purpose**: Full menu browsing with filtering and search.

**Features**:

- **Sticky Category Navigation**: Horizontal tab bar at top, auto-highlights as user scrolls
- **Menu Item Cards**: Each card shows:
  - Food item emoji/image
  - Name + short description
  - Price (with crossed-out original price if discounted)
  - Rating + review count
  - Veg/Non-veg indicator (green/red dot — mandatory FSSAI compliance)
  - Calorie count
  - Tags: Bestseller | New | Spicy | Veg | Healthy
  - "Add" button (+ increments quantity if already in cart)
- **Search Bar**: Full-text search across item names and descriptions
- **Veg Only Toggle**: Filters menu to show only vegetarian items (global toggle)
- **Item Detail Navigation**: Tapping item name/image opens full Item screen

**Customizable Items**:
- Items flagged `customizable: true` show a "Customize" button instead of plain "Add"
- Opens customization drawer (see 5.5)

**Acceptance Criteria**:
- [ ] All 30+ menu items render correctly
- [ ] Veg-only toggle filters in real-time
- [ ] Category tab auto-scrolls to correct section
- [ ] Adding item from menu updates cart badge count instantly
- [ ] Sold-out items (if any) shown greyed out with "Not Available" label

---

### 5.5 Item Detail Screen

**Purpose**: Full item information + customization before adding to cart.

**Sections**:
1. **Hero Image/Emoji** — Large food visual with gradient background
2. **Item Header** — Name, rating, review count, veg/non-veg badge
3. **Description** — Full description text
4. **Calories + Tags** — Calorie count, dietary tags
5. **Customization Options** (if `customizable: true`):
   - Spice Level: Mild / Medium / Extra Hot
   - Add Extra Toppings: Cheese (+₹30) / Jalapenos (+₹20) / Extra Patty (+₹60)
   - Remove Ingredients: toggle each (e.g., No onion, No sauce)
6. **Quantity Selector**: − | count | + (minimum 1)
7. **Price Summary**: Base price + customization add-ons = total
8. **"Add to Cart" Button**: Full-width, fixed at bottom

**Acceptance Criteria**:
- [ ] Customization changes update price in real-time
- [ ] Cannot add 0 quantity
- [ ] Cart total updates immediately on "Add to Cart"
- [ ] Back navigation returns to menu scroll position (not top)

---

### 5.6 Cart Screen

**Purpose**: Review selected items, adjust quantities, see subtotal.

**Sections**:
1. **Header**: "Your Cart" + item count
2. **Item List**: Each item card shows:
   - Item name + customizations applied (if any)
   - Price × quantity
   - − | qty | + controls
   - Swipe left or trash icon to remove
3. **Special Instructions** (optional text input): Per order or per item
4. **Order Mode Reminder**: Mode badge (Dine-In / Take-Away) — tappable to change
5. **Upsell Strip**: "Add more to your order" — 3 bestseller quick-adds
6. **Bill Summary**:
   - Subtotal
   - GST (5%)
   - App Discount (Dine-In only: −10%)
   - Coupon Discount (if applied)
   - Singh Coins Discount (if redeemed)
   - **Total** (bold)
7. **Checkout Button**: "Proceed to Checkout → ₹[total]"

**Acceptance Criteria**:
- [ ] Empty cart shows "No items yet" with "Start Ordering" CTA
- [ ] Quantity changes update subtotal immediately
- [ ] Removing last item shows empty state
- [ ] Minimum order validation (if applicable, inform user)
- [ ] Checkout button disabled if cart is empty

---

### 5.7 Checkout Screen

**Purpose**: Final confirmation, payment method, coupon/loyalty, order placement.

**Sections**:

#### A. Order Mode Indicator
- Non-editable display of current mode + outlet name
- For Dine-In: Table number input (required, numeric, 1–99)
- For Take-Away: Pickup counter info / estimated wait time

#### B. Promo Code / Coupon
- Text input + "Apply" button
- Error states: Invalid code / Minimum order not met / Expired
- Success state: Code name + savings amount in green badge
- Applied coupon shown with "✕ Remove" option
- Sample codes for launch: `WELCOME10`, `DESI20`, `SAVE50`, `SINGH15`, `FRIEND100`

**Coupon Logic**:

| Code | Type | Discount | Max Discount | Min Order |
|------|------|----------|--------------|-----------|
| WELCOME10 | Percentage | 10% | ₹100 | ₹0 |
| DESI20 | Percentage | 20% | ₹150 | ₹200 |
| SAVE50 | Flat | ₹50 | ₹50 | ₹150 |
| SINGH15 | Percentage | 15% | ₹120 | ₹300 |
| FRIEND100 | Flat | ₹100 | ₹100 | ₹500 |

#### C. Singh Coins (Loyalty Redemption)
- Toggle: "Use Singh Coins" (visible only if user is logged in and has ≥ 1 coin)
- Shows: Current balance + redeemable amount (max 20% of order value)
- Redeemed amount shown in bill as deduction

#### D. Payment Method Selection

| Method | Icon | Description |
|--------|------|-------------|
| UPI | 📱 | GPay, PhonePe, Paytm — deep-link to respective apps |
| Card | 💳 | Credit / Debit card — in-app card form |
| Cash at Counter | 💵 | Pay at collection / billing counter |

- Default: UPI (most common)
- UPI: Shows UPI ID input field (optional — can also show QR)
- Card: Shows card number, expiry, CVV fields
- Cash: Confirmation note — "Pay at counter before collecting your order"

#### E. Bill Summary (Final)
- Subtotal
- GST (5%)
- App Discount (−10%, Dine-In only)
- Coupon Discount (−₹X, if applied)
- Singh Coins Redemption (−₹Y, if applied)
- **Total Payable** (large, bold, in brand red)

#### F. Place Order Button
- Text: "Pay ₹[total] & Place Order"
- Disabled if: table number missing (Dine-In), no payment method selected
- On tap: Loading state → Order confirmation

**Acceptance Criteria**:
- [ ] Table number required for Dine-In before order placement
- [ ] Only one coupon can be applied at a time
- [ ] Coupon discount capped at `maxDiscount` value
- [ ] Singh Coins deduction capped at 20% of subtotal
- [ ] Total never goes below ₹0
- [ ] UPI deeplinks open correct apps on Android/iOS
- [ ] Successful order navigates to Orders/Confirmation screen
- [ ] Order ID generated in format: BS + 6-digit timestamp

---

### 5.8 Order Confirmation Screen

**Purpose**: Acknowledge the order, provide a token, set expectations.

**Content**:
1. **Animated Success Checkmark** (green pulse animation)
2. **Order Token Number** (large, prominently displayed): "Token #BS123456"
3. **Order Mode**: Dine-In Table 5 / Take-Away
4. **Estimated Time**: "Your order will be ready in ~12 minutes"
5. **Items Summary**: Condensed list of ordered items
6. **Total Paid**: ₹[amount] via [payment method]
7. **Singh Coins Earned**: "+32 Singh Coins added to your account"
8. **Actions**:
   - "Track My Order" → Orders screen
   - "Order More" → Home screen
   - "Rate Your Experience" → (optional, shows after order done)

**Acceptance Criteria**:
- [ ] Token number unique per session and per order
- [ ] Screen auto-navigates to Orders after 10 seconds (with countdown)
- [ ] Singh Coins balance updated in real-time on AppContext

---

### 5.9 Orders Screen

**Purpose**: View current and past orders placed in this session.

**Sections**:
1. **Active Order** (if any):
   - Token number + order status (Received → Preparing → Ready)
   - Items list
   - Estimated time remaining (simulated countdown)
2. **Past Orders** (this session):
   - Date/time, items, total, mode
   - "Reorder" button to re-add same items to cart
3. **Empty State**: "No orders yet. Start your first order!"

**Order Status Flow**:
```
Order Placed → Received by Kitchen → Being Prepared → Ready for Collection/Table Service
```

**Acceptance Criteria**:
- [ ] Status updates every 30 seconds (simulated for MVP)
- [ ] Reorder adds all previous items to current cart (with conflict warning if cart not empty)
- [ ] Order history persists for the session (not between sessions for guests)

---

### 5.10 Loyalty / Singh Coins Screen

**Purpose**: Showcase loyalty program, balance, history, and how to earn more.

**Sections**:
1. **Balance Card**: Current Singh Coins balance (large gold display)
2. **Coins Value**: "1 Singh Coin = ₹1 discount"
3. **Earning Rules**:
   - ₹10 spent = 1 Singh Coin
   - Bonus: First order = +50 coins, Refer a friend = +100 coins
   - Special days: 2x coins on weekends (promotable)
4. **Redemption Rules**:
   - Minimum 50 coins to redeem
   - Max redemption per order: 20% of order value
5. **Transaction History**: List of earned/redeemed coin events (this session)
6. **How to Earn More**: Promotional section (refer, review, birthday bonus)

**Acceptance Criteria**:
- [ ] Balance updates in real-time after each order
- [ ] History shows earned coins per order with order ID
- [ ] Redemption option only shown if balance ≥ 50 coins
- [ ] Non-logged-in users see "Sign In to earn and use Singh Coins" prompt

---

### 5.11 Offers Screen

**Purpose**: Central hub for all active promotions and deals.

**Content**:
1. **Active Coupon Codes**: Visual coupon cards with code, discount, expiry
2. **Combo Deals**: Special combo packages with savings highlighted
3. **Happy Hour Offers**: Time-limited discounts (e.g., 3PM–6PM)
4. **Seasonal Offers**: Festive specials, new item promotions
5. **"Copy Code" button** on each coupon card — pre-fills checkout input

**Acceptance Criteria**:
- [ ] "Copy Code" copies code to clipboard and shows "Copied!" toast
- [ ] Expired offers shown in greyed-out state with "Expired" label
- [ ] Tapping a combo offer adds all combo items to cart (with confirmation)

---

### 5.12 Profile Screen

**Purpose**: User account, preferences, order history access.

**Sections** (logged in):
1. Avatar + Name + Phone number
2. Singh Coins balance (shortcut to Loyalty screen)
3. Past Orders (link to Orders screen)
4. Preferences: Veg-only toggle (syncs with menu), language preference
5. About / Terms / Privacy Policy links
6. Sign Out button

**Guest state**:
- "Sign In to access your profile and earn Singh Coins"
- Login / Register options

**Acceptance Criteria**:
- [ ] Veg-only toggle on profile syncs instantly with menu filter
- [ ] Sign Out clears user data from session
- [ ] Profile accessible without login (shows guest state)

---

## 6. Non-Functional Requirements

### 6.1 Performance

| Metric | Target |
|--------|--------|
| Initial load time (3G network) | < 3 seconds |
| Menu screen render | < 1 second |
| Add to cart response | < 200ms |
| Checkout screen load | < 500ms |
| Bundle size (JS + CSS) | < 200 KB gzipped |
| Lighthouse Performance Score | ≥ 85 |
| Lighthouse Accessibility Score | ≥ 90 |

### 6.2 Accessibility (WCAG 2.1 AA)

- All interactive elements have touch targets ≥ 44×44 pixels
- Color contrast ratio ≥ 4.5:1 for all text
- All images have descriptive alt text
- Screen reader labels on all buttons and inputs
- Keyboard navigation supported (for tablet/desktop use)
- No reliance on color alone to convey meaning (veg: dot + border, not just color)

### 6.3 Compatibility

- **iOS**: Safari on iOS 14+ (iPhone 11 and newer)
- **Android**: Chrome on Android 9+ (mid-range devices, 3GB+ RAM)
- **Screen sizes**: 360dp (min) to 430dp (max) mobile width optimized
- **Offline behavior**: Graceful fallback — "No internet connection" message, retain cart in localStorage
- **PWA**: Installable via "Add to Home Screen" on both iOS and Android

### 6.4 Security

- No sensitive payment data stored in the app (UPI deep-links only; card payments via PCI-compliant gateway)
- User session stored in memory only (no PII in localStorage for guests)
- HTTPS enforced for all API calls
- Coupon validation server-side (client-side for MVP, must move server-side pre-production)

### 6.5 Localization

- **Language**: English (MVP)
- **Currency**: INR (₹) with no decimal display
- **Numerals**: Arabic (1, 2, 3) — standard
- **Future**: Hindi support, RTL not required

---

## 7. Design & Brand Guidelines

### 7.1 Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| bs-red-500 | #DC2026 | Primary brand, headers, CTA highlights |
| bs-orange-500 | #FF8C00 | Buttons, interactive elements, accents |
| bs-gold-500 | #FFB81C | Loyalty / premium, badges, Singh Coins |
| bs-gray-50 | #F5F5F5 | Page backgrounds |
| bs-gray-900 | #1A1A1A | Primary body text |
| White | #FFFFFF | Cards, input backgrounds |

### 7.2 Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| App headings (H1) | Poppins | Black (900) | 28–32px |
| Section headings (H2) | Poppins | Bold (700) | 21–24px |
| Card titles (H3) | Poppins | SemiBold (600) | 17–19px |
| Body text | Inter | Regular (400) | 13–15px |
| Labels / Captions | Inter | Medium (500) | 11–12px |
| Buttons | Inter | SemiBold (600) | 15–17px |

### 7.3 Component Standards

- **Border Radius**: 8px (cards, inputs), 12px (modals), 9999px (pills/badges)
- **Shadows**: `0px 2px 8px rgba(0,0,0,0.08)` (cards), `0px 8px 24px rgba(0,0,0,0.16)` (modals)
- **Spacing**: 4px base unit — multiples of 4px for all padding/margin
- **Animations**: 300ms ease-out for all transitions; 500ms for modals/drawers
- **Touch feedback**: `active:scale-95` on all buttons

---

## 8. Technical Architecture

### 8.1 Frontend Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 (Create React App) |
| Styling | Tailwind CSS 3.4 with design system tokens |
| State Management | React Context API (AppContext) |
| Routing | Screen-based state machine (no React Router for MVP) |
| Build | CRA with Tailwind PostCSS pipeline |
| Deployment | GitHub Pages (PWA, static hosting) |
| Fonts | Google Fonts: Poppins + Inter |

### 8.2 Screen State Machine

```
onboarding → home → menu → item → cart → checkout → orders
                 ↘ offers
                 ↘ loyalty
                 ↘ profile
```

All navigation managed via `setScreen(screenName)` in AppContext.

### 8.3 Data Layer (MVP)

- **Menu Data**: Static JSON (`menuData.js`) — categories, items, pricing, tags
- **Cart State**: In-memory via `useState` in AppContext
- **User State**: In-memory (mock login for MVP)
- **Orders**: In-memory for session, cleared on refresh

### 8.4 Future Backend Integration Points

| Feature | API Endpoint (Future) |
|---------|----------------------|
| Menu | `GET /api/outlet/:id/menu` |
| Order Placement | `POST /api/orders` |
| Coupon Validation | `POST /api/coupons/validate` |
| Loyalty Balance | `GET /api/users/:id/coins` |
| Order Status | `GET /api/orders/:id/status` (WebSocket) |
| Outlet Info | `GET /api/outlets/:id` |

---

## 9. Coupon & Promotions Engine

### 9.1 Coupon Types Supported

| Type | Description | Example |
|------|-------------|---------|
| `percentage` | Percentage off the subtotal | 10% off |
| `flat` | Fixed rupee amount off | ₹50 off |

### 9.2 Validation Rules

1. Code must exist in the coupon database
2. Minimum order value must be met (checked against subtotal before discounts)
3. Only one coupon can be active at a time
4. Coupon discounts capped at `maxDiscount` value
5. Coupon does not apply on top of itself if re-applied

### 9.3 Discount Stacking Order

```
Subtotal
  − App Discount (Dine-In 10%, applied first)
  − Coupon Discount (applied on subtotal, not post-app-discount)
  − Singh Coins Redemption (applied last)
  + GST (5%, applied on subtotal before discounts)
= Total Payable (minimum ₹0)
```

### 9.4 Edge Cases

| Scenario | Expected Behaviour |
|----------|-------------------|
| Coupon makes total negative | Total floored at ₹0 |
| Coupon code entered in lowercase | Auto-converted to uppercase |
| Cart modified after coupon applied | Coupon re-validated automatically |
| Minimum order no longer met after cart edit | Coupon removed with notification |

---

## 10. Launch Plan & Milestones

### Phase 1 — MVP (Current, Completed)
- ✅ Onboarding flow
- ✅ Home screen with offers and categories
- ✅ Full menu with 30+ items across 7 categories
- ✅ Item detail with customization
- ✅ Cart management
- ✅ Checkout with coupon codes and loyalty coins
- ✅ Order confirmation and history
- ✅ Design system with Burger Singh brand colors
- ✅ Deployed to GitHub Pages (PWA-ready)

### Phase 2 — Beta Outlet Testing (4–6 weeks)
- [ ] QR code generation per table and outlet entry
- [ ] POS/KDS integration (Kitchen Display System)
- [ ] Real-time order status updates (WebSocket)
- [ ] Backend API for menu, orders, coupons
- [ ] Backend coupon validation (move off client-side)
- [ ] Google Analytics / Mixpanel event tracking
- [ ] Feedback widget post-order (1-5 star + comment)

### Phase 3 — Scale & Personalization (8–12 weeks)
- [ ] User accounts with OTP login (phone number)
- [ ] Persistent loyalty across sessions
- [ ] Personalized "Your Favourites" section
- [ ] Seasonal and time-based offer automation
- [ ] Multi-outlet support (outlet selector on open)
- [ ] Hindi language support
- [ ] Accessibility audit and fixes (WCAG 2.1 AA full compliance)

### Phase 4 — Growth Features (12+ weeks)
- [ ] Refer-a-friend with coin rewards
- [ ] Birthday bonus coins (auto-applied)
- [ ] Combo builder (custom meal deals)
- [ ] Happy hour automation (time-based pricing)
- [ ] Staff dashboard (order management view)
- [ ] Customer satisfaction surveys
- [ ] Apple Pay / Google Pay integration

---

## 11. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Low QR scan adoption by older customers | Medium | High | Counter staff trained to assist; QR at eye-level placement |
| POS integration delays | High | High | MVP uses manual KDS forwarding; paper token backup |
| Poor network at outlets | Medium | High | PWA offline caching; cart persists in localStorage |
| Coupon abuse (sharing codes) | Low | Medium | Server-side validation + per-user redemption limits (Phase 2) |
| Cart abandonment due to long checkout | Medium | Medium | Guest checkout default; minimize required fields |
| Device compatibility issues | Low | Medium | Chrome/Safari testing matrix; polyfills for older OS |

---

## 12. Appendix

### A. Coupon Code Reference

| Code | Discount | Max | Min Order | Notes |
|------|----------|-----|-----------|-------|
| WELCOME10 | 10% | ₹100 | ₹0 | All new users; no minimum |
| DESI20 | 20% | ₹150 | ₹200 | Standard promo |
| SAVE50 | ₹50 flat | ₹50 | ₹150 | Quick discount |
| SINGH15 | 15% | ₹120 | ₹300 | Mid-value orders |
| FRIEND100 | ₹100 flat | ₹100 | ₹500 | High-value orders |

### B. Menu Categories

| Category | Item Count (MVP) | Notes |
|----------|-----------------|-------|
| Burgers | 6 | Core product, hero category |
| Wraps | 3 | Lighter option |
| Sides | 4 | Fries, rings, wedges |
| Beverages | 4 | Shakes, soft drinks |
| Desserts | 3 | Singh Shake, sundae |
| Combos | 4 | Burger + Side + Beverage |
| All | 30+ | Combined view |

### C. Glossary

| Term | Definition |
|------|-----------|
| Singh Coins | Burger Singh loyalty currency (1 coin = ₹1 redeemable) |
| QSR | Quick Service Restaurant |
| KDS | Kitchen Display System — screen showing active orders in kitchen |
| POS | Point of Sale — billing/payment terminal |
| PWA | Progressive Web App — web app installable like a native app |
| AOV | Average Order Value |
| CSAT | Customer Satisfaction Score |
| FSSAI | Food Safety and Standards Authority of India |

---

*Document Owner: Product Team, Burger Singh Digital*  
*Last Updated: June 2026*  
*Version: 2.0*  
*Status: APPROVED — Ready for development*
