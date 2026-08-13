# Navigation Interaction Flow

This document details the functional behavior, responsive transitions, menu controls, and hash-link routing that drive the website's navigation.

---

## 1. Header & Footer Navigation Matrix

The site uses a dual-zone global header and a multi-column footer to organize routing:

*   **Global Header:** Offers high-contrast link nodes centered in a floating pill layout. The right side features a persistent Contact button, and the left displays the corporate logo.
*   **Global Footer:** Groups detailed deep links into three structural columns (Quick Links, Trust Links, and Tech Links), providing immediate access to sub-sections across different pages.

---

## 2. Dropdown & Mobile Menu Accordion Mechanics

### 2.1 Desktop Dropdown Hover State:
*   The "Cybersecurity Services" link in the header is a hover-activated node.
*   *Interaction:* Hovering over the node updates the state, showing the dropdown panel. The panel uses CSS transitions to fade in and translate upwards slightly, ensuring a smooth transition.
*   *Links:* Redirects to `/services` and `/cyber-security`.

### 2.2 Mobile Full-Screen Overlay:
*   On screens under `768px`, the horizontal header is replaced by a hamburger menu button.
*   *Interaction:* Clicking the button overlays a full-screen menu (`bg-slate-900/95 backdrop-blur-xl fixed inset-0`).
*   *Accordion Logic:* The "Cybersecurity Services" dropdown is converted into a collapsible accordion panel. Clicking it rotates a chevron icon `180°` and slides the panel open vertically, while clicking other links automatically closes the menu.

---

## 3. Hash Anchored Scrolling & Hydration Retries

The website uses hash anchors (e.g., `/about#partners`) to link directly to specific sections on other pages. To resolve Next.js hydration lag when loading these elements, the site employs a custom scroll handler component (`SmoothScroll`):

```
          [Route Changes]
                 │
                 ▼
       ┌───────────────────┐
       │   SmoothScroll    │  <-- Intercepts hash (e.g., #partners).
       └─────────┬─────────┘
                 │
                 ▼
       ┌───────────────────┐
       │   First Attempt   │  <-- Calculates offset and triggers immediately.
       └─────────┬─────────┘
                 │
                 ▼ (500ms delay)
       ┌───────────────────┐
       │  Second Attempt   │  <-- Retries scroll once components render
       └───────────────────┘      to guarantee exact alignment.
```

### Technical Workflow:
1.  **Route Transition:** The user clicks a link containing a hash anchor (e.g., `/services#methodologies`).
2.  **Mount Event:** The `SmoothScroll` component mounts and intercepts the URL parameters.
3.  **Element Query:** Extracts the hash string, querying the DOM for the target element ID (`methodologies`).
4.  **Immediate Scroll:** If the element is found, it triggers a smooth scroll immediately:
    `element.scrollIntoView({ behavior: "smooth", block: "start" })`
5.  **Delayed Retry:** Because dynamic React components or images can shift layout offsets during hydration, the component schedules a second scroll event 500ms later to ensure the page is aligned perfectly with the top of the section.
