# About Mission Component

**Source File:** [components/AboutMission.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/AboutMission.tsx)  
**Primary Purpose:** Establishes the company's identity on the About page, displaying corporate mission copy beside a looping high-tech video player, and presenting the "One Team" section.

---

## 1. Visual Specification & Styling

*   **Background:** Sits on a solid dark canvas (`bg-black relative`).
*   **Layout:** Renders a 2-column grid (`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12`).
*   **Video Container (Right Column):**
    *   *Positioning:* Sticky on desktop viewports (`lg:sticky lg:top-32`), aligning it with the scrolling text on the left.
    *   *Visuals:* Curved borders (`rounded-2xl`), subtle border (`border-white/10`), and a glowing cyan-purple gradient overlay (`from-accent/10 to-purple-500/10`).
*   **Text Columns (Left Column):** Organizes copy into two sections with accent underlines.

---

## 2. Text & Media Assets

### 2.1 "Who We Are"
*   *Heading:* "Who We Are" (gradient fill, Montserrat display font).
*   *Accent:* A solid light blue accent underline (`h-1 w-16 bg-accent`).
*   *Copy:* "Our vision is to fuel the future of digital innovation through inspired creativity. A new world unbounded by traditional software and systems, where the creative potential in every organization is unleashed."

### 2.2 "Digital Transformation"
*   *Heading:* "Digital Transformation for Enterprise Performance"
*   *Copy:* "We are building a future where connected leaders and teams are able to constantly adapt, transform and reinvent their businesses. We make it possible to share actionable insights, empower and unleash creativity, and drive innovation. With Aguna Solutions, systematically orchestrating business performance transforms challenge to advantage."

### 2.3 Looping Video Player
*   *Source Asset:* `/videos/about-video.mp4` (looping corporate operations video).
*   *Logic:* Configured to autoplay, loop, and mute, with picture-in-picture disabled for a clean background appearance.

---

## 3. "One Team" Section

Below the main grid, the component calls the `HandWrittenTitle` component to display a high-impact team section:
*   **Title:** "One Team – One Goal" (rendered in a custom handwriting-style script).
*   **Subtitle:** "We enable decisive action in dynamic conditions, turning complexity into clarity and alignment."

---

## 4. Technical Mappings & Dependencies

*   **Component Imports:** `HandWrittenTitle` (specialized typography component).
*   **Used In:** [About Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/about.md) (Mission & Vision Section)
