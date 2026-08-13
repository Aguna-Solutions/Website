# Contact Info Component

**Source File:** [components/ContactInfo.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ContactInfo.tsx)  
**Primary Purpose:** Renders corporate communication channels (email and location detail cards) on the Contact page, helping users connect with Aguna.

---

## 1. Visual Specification & Styling

*   **Layout:** Responsive grid system transitioning from a single column on mobile to two columns on tablet (`grid grid-cols-1 sm:grid-cols-2 gap-4`).
*   **Card Container:** Small, rounded-xl frosted glass cards (`bg-white/5 border border-white/10 p-4`) that highlight backgrounds and borders on hover (`hover:bg-white/10`).
*   **Icon Container:** Small square containers (`bg-blue-500/10 text-blue-400 p-2 rounded-lg`) that change colors on hover (`group-hover:text-blue-300 group-hover:bg-blue-500/20`).

---

## 2. Contact Detail Cards

### 1. Email Card
*   **Visuals:** Styled with a blue-accented envelope icon.
*   **Action:** Renders a clickable, high-contrast mailto link.
*   **Data:**
    *   *Heading:* Email
    *   *Link:* `info@agunasolutions.com`
    *   *Icon:* Mail (Lucide Mail)

### 2. Location Card
*   **Visuals:** Styled with a blue-accented map pin icon.
*   **Data:**
    *   *Heading:* Location
    *   *Address:* Noida, India
    *   *Icon:* MapPin (Lucide MapPin)

---

## 3. Technical Mappings & Dependencies

*   **Icons Used:** `Mail`, `MapPin` (Lucide React)
*   **Used In:** [Contact Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/contact.md) (Information Panel)
