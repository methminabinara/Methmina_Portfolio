# Design Guidelines: Software Engineer Portfolio

## Design Approach
**Reference-Based Approach** inspired by modern developer portfolios (GitHub, Linear, Vercel) with focus on technical professionalism and clarity. The design balances visual appeal with functional showcase of technical expertise.

## Core Design Elements

### A. Color Palette

**Dark Mode Primary (default):**
- Background Primary: 220 20% 12% (deep slate)
- Background Secondary: 220 18% 16% (elevated surfaces)
- Background Accent: 220 16% 20% (cards, containers)
- Text Primary: 0 0% 95% (high contrast white)
- Text Secondary: 220 10% 65% (muted gray)
- Brand Primary: 215 90% 60% (professional blue)
- Brand Accent: 215 85% 50% (darker blue for hover states)
- Border: 220 15% 25% (subtle separators)
- Success: 142 70% 50% (for badges/achievements)

**Light Mode:**
- Background Primary: 0 0% 98%
- Background Secondary: 0 0% 100%
- Text Primary: 220 20% 15%
- Text Secondary: 220 10% 45%
- Brand Primary: 215 85% 45%

### B. Typography

**Font Families:**
- Headings: 'Inter' (weights: 600, 700, 800)
- Body: 'Inter' (weights: 400, 500, 600)
- Code/Technical: 'JetBrains Mono' (weight: 400, 500)

**Scale:**
- Hero Title: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl font-bold
- Subsection Headers: text-2xl font-semibold
- Card Titles: text-xl font-semibold
- Body Text: text-base
- Small Text: text-sm
- Technical Labels: text-xs font-mono uppercase tracking-wider

### C. Layout System

**Spacing Units:** Use 4, 8, 12, 16, 20, 24, and 32 (p-4, h-8, m-12, etc.)

**Container Strategy:**
- Max width: max-w-7xl mx-auto
- Section padding: py-16 md:py-24 lg:py-32
- Section horizontal: px-6 md:px-8 lg:px-12
- Component gaps: gap-6 md:gap-8

### D. Component Library

**Navigation:**
- Fixed header with glassmorphism effect (backdrop-blur-xl bg-background/80)
- Logo + horizontal nav links (desktop) / hamburger menu (mobile)
- Smooth scroll behavior with active section highlighting
- Dark/light mode toggle in header

**Hero Section:**
- Full viewport height (min-h-screen) with centered content
- Professional headshot image (circular, 200-250px diameter) with subtle border
- Name as primary heading with gradient text effect on brand colors
- Role/title below (text-xl text-secondary)
- Brief 2-3 line introduction
- Tech stack pills (inline badges with icons)
- CTA buttons: "View Projects" (filled) + "Download Resume" (outline with blur background)
- Subtle animated gradient background or geometric pattern

**Information/About Section:**
- Two-column layout (desktop): Left - extended bio, Right - skills/expertise
- Skills displayed as categorized groups (Frontend, Backend, DevOps, Tools)
- Each skill as pill/badge with proficiency indicator
- Years of experience counter
- Key achievements in timeline format

**Services Section:**
- 3-column grid (2-col tablet, 1-col mobile)
- Service cards with icon, title, description
- Icons from Heroicons (code, server, mobile, etc.)
- Cards with subtle hover lift effect (transform: translateY(-4px))
- Background: bg-secondary with border

**Projects Showcase:**
- Grid layout: 2 columns desktop, 1 column mobile
- Featured project: Full-width card at top with larger image
- Project cards include:
  - Project thumbnail/screenshot (16:9 aspect ratio)
  - Title and brief description
  - Tech stack tags (small pills)
  - GitHub + Live Demo links (icon buttons)
- Hover effect: image slight zoom, card border glow

**Certifications & Badges:**
- Masonry-style grid or 4-column grid
- Badge cards with:
  - Certification logo/icon
  - Certification name
  - Issuing organization
  - Date obtained
  - Verification link (if applicable)
- Subtle badge animation on hover

**Contact Section:**
- Split layout: Form (60%) + Contact info sidebar (40%)
- Form fields: Name, Email, Subject, Message
- Professional contact info with icons: Email, LinkedIn, GitHub, Location
- Form with validation states and submit button
- Background: slightly elevated from page background

**Footer:**
- Social links (GitHub, LinkedIn, Twitter, etc.)
- Copyright notice
- Quick navigation links
- "Built with React" badge

### E. Visual Enhancements

**Micro-interactions:**
- Button hover: subtle scale and brightness change
- Link underline animation on hover
- Card hover: slight elevation with shadow
- Form input focus: border color change + subtle glow

**Borders & Shadows:**
- Cards: border border-border with subtle shadow
- Elevated elements: shadow-lg with brand color tint
- Images: rounded-lg with border

**Icons:**
- Use Heroicons throughout
- Size: 20px (icons), 24px (section icons), 32px (hero tech stack)
- Color: match brand or text-secondary

## Images

**Hero Image:**
- Professional headshot (circular crop, 200-250px)
- High quality, well-lit, professional attire
- Positioned center or left-center of hero section

**Project Screenshots:**
- Desktop mockups of projects (16:9 ratio preferred)
- High-resolution, showing key features
- Consistent styling (use mockup frames if needed)
- 6-8 project images total

**Certification Logos:**
- Official certification/badge images
- Transparent PNGs preferred
- Size: 60-80px square

**Background Elements:**
- Subtle gradient mesh or dot pattern in hero
- Optional: Low-opacity code snippet pattern in background
- Keep subtle - should not distract from content

## Accessibility & Responsiveness

- WCAG AA compliant contrast ratios
- Focus states clearly visible on all interactive elements
- Keyboard navigation support
- Semantic HTML structure
- Mobile-first responsive breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
- Touch targets minimum 44x44px on mobile