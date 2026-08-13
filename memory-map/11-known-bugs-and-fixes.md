# 11 — Known Bugs, Fixes & Decisions

A running log of every bug identified, the root cause, the fix applied, and the current state. Useful for understanding why code looks the way it does.

---

## Bug 1: Navbar logo out of bounds

**Symptom**: Logo cropped/overflowing the navbar bar at the top.

**Root cause**: Navbar height was too short for the logo dimensions.

**Fix applied**:
- Navbar `<nav>` set to `h-20`
- Logo `Image` set to `width={64} height={70}`
- Hero `pt-36` to compensate for taller navbar

**Current state** ✅: Logo fits in the bar. Logo is 609×666 (near-square), rendered at 64×70.

---

## Bug 2: Dropdown closes before you can click an option

**Symptom**: "Cybersecurity Services" dropdown disappears when moving cursor from the button to the dropdown panel — you can never click Services or Cyber Security.

**Root cause**: `onMouseLeave` on the trigger element fires immediately as cursor moves downward toward the panel, closing the panel before the cursor arrives.

**Fix applied** (`components/Navbar.tsx`):
1. `dropdownTimerRef = useRef<ReturnType<typeof setTimeout>>()` — deferred close
2. `onMouseEnter`: `clearTimeout(dropdownTimerRef.current)` + `setDropdownOpen(true)`
3. `onMouseLeave`: `dropdownTimerRef.current = setTimeout(() => setDropdownOpen(false), 150)` — 150ms grace
4. Invisible bridge div: `<div className="absolute top-full left-0 right-0 h-2" />` — covers the gap between trigger and panel so `mouseLeave` doesn't fire while crossing it

**Current state** ✅: Dropdown stays open when moving cursor to options.

---

## Bug 3: SecurityPrompt section looked like an error/alert

**Symptom**: The "Is Your Company Secure?" section was bright red, making the page look like it had a system error.

**Root cause**: Original design used aggressive red color scheme for urgency.

**Fix applied** (`components/SecurityPrompt.tsx`):
- Rewrote entire component
- Color: `bg-slate-900` dark navy + `blue` accents (border-blue-500/40, text-blue-400)
- Left accent stripe: blue gradient, not red
- All red removed entirely

**Current state** ✅: Section looks professional — dark with blue cyber aesthetic.

---

## Bug 4: InfiniteSlider customer logos — hover pauses on wrong logo

**Symptom**: Hovering over any logo in the "Our Customers" marquee caused the animation to pause/slow but on a different logo than the one being hovered.

**Root cause**: `durationOnHover` prop modified a React state variable `duration` which changed a CSS custom property `--duration`. The CSS transition on `animation-duration` doesn't work frame-perfectly with React state updates — the animation restarts from the wrong position.

**Fix applied** (`components/ui/infinite-slider.tsx`):
- Removed all React state for duration
- Removed `durationOnHover` prop from the interface
- Animation runs purely via CSS: `animation: marquee-slide var(--duration, 30s) linear infinite` — never changed
- Removed `durationOnHover` prop from all call sites: `TrustSection.tsx` and `Industries.tsx`

**Current state** ✅: Logos scroll smoothly at constant speed, no hover interaction.

---

## Bug 5: "What Sets Us Apart" — bottom 2 cards left-aligned

**Symptom**: With 5 cards in a 3-column grid, the bottom row had 2 cards left-justified, looking unbalanced.

**Root cause**: CSS Grid `grid-cols-3` leaves last 2 cells left-aligned in an incomplete row.

**Fix applied** (`components/TrustSection.tsx`):
- Changed from CSS Grid to Flexbox: `flex flex-wrap justify-center gap-6`
- Each card: `w-full md:w-[calc(33.333%-1rem)]`
- `justify-center` on the flex container centers the last partial row

**Current state** ✅: All 5 cards, with bottom 2 centered.

---

## Bug 6: Certificate logos overlapping text

**Symptom**: In `CertificatesGrid`, the certificate logo images were overlapping the title/description text below them.

**Root cause**: Logo `Image` was positioned inline with text content, without a fixed height container, causing overflow.

**Fix applied** (`components/CertificatesGrid.tsx`):
- Added dedicated logo block: `<div className="relative w-full h-[90px] flex items-center justify-center bg-white/5 rounded-xl overflow-hidden">`
- `Image` inside: `width={110} height={75} className="object-contain max-h-[75px] w-auto"`
- Logo block sits entirely above the title — separate blocks, no overlap possible

**Current state** ✅: Logos in own fixed-height container, title below.

---

## Bug 7: Riverbed and Broadcom logos not showing

**Symptom**: After adding Broadcom and Riverbed to `partners.ts`, the logos were not visible on the About page.

**Root cause**: Initially file format was assumed to be `.png` but the actual files are `.webp`.

**Fix applied** (`lib/data/partners.ts`):
- `imageSrc: "/images/broadcom-logo.webp"` (not .png)
- `imageSrc: "/images/riverbed-logo.webp"` (not .png)

**Current state** ✅: Paths match actual files in `public/images/`.

---

## Bug 8: `about-video.mp4` missing

**Symptom**: AboutMission video was broken — file not in `public/videos/`.

**Root cause**: Video file was on a different machine path (`C:\Users\pranav\Aguna-portfolio\public\videos\`).

**Fix**: User manually copied file to `D:\Aguna\website\public\videos\about-video.mp4`.

**Current state** ✅: File exists at correct path, verified with `Test-Path`.

---

## Design Decision: Orbital animation approach

**Context**: The Products page orbital (RadialOrbitalTimeline) was originally built with CSS `animation` and static positioning. It looked flat/2D.

**Decision made**: Rewrite using:
- CSS `perspective: 1100px` on container
- `rotateX(58deg)` tilt on the SVG ring plane
- Pure JavaScript `requestAnimationFrame` + `useState(t)` for node positions
- Elliptical orbit math (ORBIT_X=40, ORBIT_Y=21) to match the tilted plane
- Depth-based scale/opacity/zIndex for parallax

**Why not Framer Motion?**: rAF gives frame-perfect control over the orbital math. Framer Motion's `useAnimationFrame` was considered but the math is simpler with raw rAF.

---

## Design Decision: Aguna logo at orbital center

**Context**: The original orbital had "CORE" text at the center.

**Decision**: Replace with the Aguna Solutions logo (`/aguna-logo.png`) in a circular disc with blue glow.

**Implementation**: `Image` sized to `h-[72%] w-auto` inside a 26%×26% absolute div, with `animate-ping` outer halo and `box-shadow` glow ring.

---

## Design Decision: BinaryRain parallax layers

**Context**: User wanted "3D effect" with depth in the binary rain background.

**Decision**: Three depth layers with different fontSize/speed/opacity:
- Far: 10px, 0.4px/frame, 25% opacity
- Mid: 14px, 0.8px/frame, 45% opacity
- Near: 20px, 1.4px/frame, 70% opacity

Only ~55% of possible column positions are filled per layer (random skip) to avoid visual clutter.

---

## Bug 9: "Our Team Expertise" heading invisible on dark background

**Symptom**: On the Services page, the "Our Team Expertise" heading and subheading were dark text (`text-brand-slate` and `text-gray-500`) against a dark background, making them unreadable.

**Root cause**: The container had a transparent/dark background but the text classes were styled for a light background.

**Fix applied** (`components/ServiceExpertise.tsx`):
- Changed heading from `text-brand-slate` to `text-brand-light`.
- Changed subheading from `text-gray-500` to `text-slate-300/90`.

**Current state** ✅: The heading and subheading are now clearly visible.

---

## Bug 10: Black separation between sections on Cybersecurity page

**Symptom**: A thick black horizontal bar appeared between the "Advanced Security Operations" and "Why Cybersecurity Matters" sections.

**Root cause**: The global `<SectionDivider />` uses transparent padding (`py-2`) to create a gap. Because the page `body` has a dark navy background (`var(--brand-dark)`), the gap between the two light-themed sections (`bg-blue-50` and `bg-gray-100`) exposed the dark body background.

**Fix applied** (`app/cyber-security/page.tsx`):
- Replaced `<SectionDivider />` between these two sections with a custom inline divider.
- The custom divider sits inside a `bg-gray-100` container and renders a simple centered line (`h-px w-1/2 max-w-3xl`) with reduced opacity (`bg-slate-400/30`) and a soft down shadow, perfectly blending the two sections.

**Current state** ✅: The black bar is gone, replaced by an elegant, seamless visual separator.

---

## Bug 11: Section separation gaps on the Cyber Security page

**Symptom**: Noticeable full-width black gaps appeared between the following sections on the Cyber Security page:
1. "Types of Penetration Testing" and "Advanced Capabilities"
2. "Why Cybersecurity Matters" and "Types of Penetration Testing"

**Root cause**: Similar to Bug 10, the `<SectionDivider />` component's padding exposed the underlying body background, creating a visual disconnect between differently colored sections.

**Fix applied** (`app/cyber-security/page.tsx`):
- Replaced `<SectionDivider />` with custom inline dividers in these locations.
- For the gap above "Advanced Capabilities", used a `bg-slate-900` container with a dark line (`bg-slate-700/50`) to seamlessly blend.
- For the gap above "Types of Penetration Testing", used a `bg-[#0B1120]` container with a dark line (`bg-slate-700/50`).

**Current state** ✅: The sections transition smoothly with centered, soft dividers that match their adjacent backgrounds.

---

## Bug 12: TrustSection placeholder images replaced

**Symptom**: The "How We Can Help" grid panels in `TrustSection` on the Home page were using generic placeholder images (e.g., `lock-v2.jpg`, `methodology.jpg`).

**Fix applied** (`components/TrustSection.tsx`):
- Added 4 custom images to `public/images/`.
- Updated image paths for:
  - "Prepared not surprised" -> `prepared-not-surprised.png`
  - "Security without disruption" -> `security-without-disruption.png`
  - "Security that supports growth" -> `security-that-supports-growth.jpg`
  - "Clarity over uncertainty" -> `clarity-over-uncertainty.png`

**Current state** ✅: The approach panels display the final, custom visual assets.

---

## Bug 13: Sharp vertical line in AuroraBackground

**Symptom**: A sharp, perfectly straight vertical line split the background behind the "Foundational Pillars" section on the Cybersecurity page, with differing colors on the left and right halves.

**Root cause**: The `AuroraBackground` animates a background tile of `200% 200%`. The original `radial-gradient` definitions had radii up to `80%` anchored near the edges, causing them to extend past the tile boundary. When the browser repeated the tile, it sharply cut off the gradient at the edge, creating a visible seam in the middle of the screen as it animated.

**Fix applied** (`components/ui/aurora-background.tsx`):
- Constrained the radii of all four radial gradients to smaller values (e.g., `40% 40%`).
- Centered their anchor points safely within the tile (e.g., `at 40% 40%`, `at 60% 40%`) so that `position + radius <= 100%` and `position - radius >= 0%`.

**Current state** ✅: The gradients fade to transparent well before the tile edges, creating a perfectly seamless repeating animation with no sharp lines.

---

## Bug 14: Broken images in "Our Testing Methodologies"

**Symptom**: Images for PTES, OWASP, and OSSTMM on the Services page were broken.

**Root cause**: `ServiceMethodologies.tsx` referenced images in `/images/methodologies/` folder which didn't exist.

**Fix applied** (`components/ServiceMethodologies.tsx`):
- Updated paths to use existing images in the root `/images/` folder (`methodology.jpg`, `owasp.jpg`, `osstmm.jpg`).

**Current state** ✅: Images display properly.

---

## Bug 15: Methodology images hidden behind blue hover overlay

**Symptom**: The methodology images were obscured by a blue overlay until hovered, which the user found undesirable.

**Root cause**: A blue absolute `div` overlay and opacity/scale hover effects were applied to the images.

**Fix applied** (`components/ServiceMethodologies.tsx`):
- Removed the absolute blue overlay `div`.
- Removed the `group-hover:opacity-100`, `opacity-80`, `transform` and `group-hover:scale-[1.02]` classes from the `Image`.

**Current state** ✅: Images are fully visible in true color at all times.

---

## Bug 16: Thick separation bar between AboutValues and TechPartners

**Symptom**: A thick full-width band separated the "Operating Principles" and "Tech Partners We Work With" sections on the About page.

**Root cause**: A full-width `SectionDivider` with transparent padding exposed the page background, and `TechPartners` had a full-width top border.

**Fix applied**:
- Removed the `<SectionDivider />` between them in `app/about/page.tsx`.
- Removed `border-t border-white/10` from the `<section>` wrapper in `components/TechPartners.tsx`.
- Added a custom, centered separator line (`w-1/2 md:w-1/3 mx-auto border-t border-white/5 mb-16`) directly inside `TechPartners`.

**Current state** ✅: A subtle, centered line elegantly separates the two dark sections.

---

## Current known state (as of last session)

- `next build` exits 0 ✅
- `npx tsc --noEmit` exits 0 ✅
- All 7 PBTs passing ✅
- Dev server runs on `http://localhost:3000` (started manually by user)
- 7 pages, 28+ components, 4 data files all in place
- All visual bugs from Task 3 resolved ✅

---

## Things to watch out for (footguns)

- `lucide-react@1.21.0` — no `Linkedin` named export. Use inline SVG.
- `next.config` must be `.mjs` not `.ts`.
- `LucideIcon` type in `products.ts` — when passing icons to `OrbitalNode.icon`, cast: `Cpu as unknown as OrbitalIconType` (structural compatibility, Lucide's `size` prop type is wider).
- `InfiniteSlider` has no `durationOnHover` prop — don't add it back.
- `public/images/Our Customers/` — folder name has spaces. Use the exact path with spaces in `imageSrc` strings.
- `framer-motion@12.42.0` — v12 API. Some v10/v11 snippets online won't work directly.
