# How We Work Component

**Source File:** [components/HowWeWork.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/HowWeWork.tsx)  
**Primary Purpose:** Renders the 4-step corporate process timeline on the About page, outlining the risk-based, outcome-driven engagement model.

---

## 1. Visual Specification & Styling

In contrast to the dark sections of the About page, this component uses a high-contrast white background to improve legibility and visual flow.

*   **Background:** Solid white (`bg-white`).
*   **Layout:** 4-column responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`).
*   **Card Container:** The steps are presented as vertical cards with a clean white background, a light border (`border border-blue-900/20`), and rounded corners (`rounded-2xl`). On hover, the cards lift slightly (`hover:-translate-y-2`) and cast a soft shadow (`hover:shadow-xl`).
*   **Image Header:** Each card features a horizontal illustration at the top (`h-32 w-full object-cover`) with a white gradient overlay to blend the image into the card core.
*   **Step Badge:** A small blue badge is positioned in the top left of the image (`bg-blue-500 text-white border-blue-400 rounded-full`) containing the step number (`Step 01`, etc.) in all-caps micro-text.

---

## 2. The 4-Step Lifecycle

The component maps four sequential steps:

### Step 01: Understand Your Environment
*   **Description:** "We begin by understanding your business context, technology landscape, and risk priorities to ensure security efforts align with real business needs."
*   **Graphic Asset:** `/images/how-we-work/step1.png`
*   **Icon:** Search (Lucide Search, rendered in a light blue container `bg-blue-50 text-blue-600`)

### Step 02: Assess & Validate Risks
*   **Description:** "Security risks are identified and validated using structured assessments that combine expert-driven analysis with targeted testing, focusing on real and exploitable threats."
*   **Graphic Asset:** `/images/how-we-work/step2.png`
*   **Icon:** ShieldCheck (Lucide ShieldCheck)

### Step 03: Act with Precision
*   **Description:** "Findings are prioritized based on impact, with clear remediation guidance and coordinated actions to reduce risk efficiently and effectively."
*   **Graphic Asset:** `/images/how-we-work/step3.png`
*   **Icon:** Target (Lucide Target)

### Step 04: Strengthen & Evolve
*   **Description:** "Security is continuous. We support ongoing improvement through monitoring, reassessments, and strategic guidance to adapt to evolving threats."
*   **Graphic Asset:** `/images/how-we-work/step4.png`
*   **Icon:** TrendingUp (Lucide TrendingUp)

---

## 3. Technical Mappings & Dependencies

*   **Library Imports:** `aos` (triggering `fade-up` scroll entry animations on cards and header text).
*   **Icons Used:** `Search`, `ShieldCheck`, `Target`, `TrendingUp` (Lucide React)
*   **Used In:** [About Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/about.md) (Process Timeline Section)
