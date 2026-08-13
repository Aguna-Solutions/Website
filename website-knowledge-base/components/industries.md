# Industries Component

**Source File:** [components/Industries.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/Industries.tsx)  
**Primary Purpose:** Displays a horizontal, infinite-scrolling marquee of the 6 primary industry verticals served by Aguna Solutions at the bottom of the Services page.

---

## 1. Visual Specification & Styling

*   **Background:** Sits on a dark canvas (`bg-black`) with a top border (`border-t border-white/10`).
*   **Edge Masking:** Includes left and right overlay gradients (`bg-gradient-to-r/l from-black to-transparent w-20 absolute`) to smoothly fade out the elements as they slide in and out of the viewport.
*   **Marquee Track (`InfiniteSlider`):** Uses an infinite horizontal scrolling track with a default scroll duration of `40s` which slows down to `100s` on hover (`durationOnHover={100}`) to allow users to inspect items.
*   **Industry Bubbles:** Elements are styled as rounded-full capsules (`rounded-full px-6 py-3 min-w-[200px] border`) with customized borders, icons, and backgrounds depending on their industry:

---

## 2. The 6 Industry Verticals

### 1. Financial
*   **Visuals:** Cyan-blue border and translucent background (`border-blue-500/20 bg-blue-500/10 text-blue-400`).
*   **Icon:** Landmark (Lucide Landmark)

### 2. Educational
*   **Visuals:** Indigo border and translucent background (`border-indigo-500/20 bg-indigo-500/10 text-indigo-400`).
*   **Icon:** GraduationCap (Lucide GraduationCap)

### 3. Healthcare
*   **Visuals:** Sky-blue border and translucent background (`border-sky-500/20 bg-sky-500/10 text-sky-400`).
*   **Icon:** Building2 (Lucide Building2)

### 4. Broadcasting
*   **Visuals:** Cyan border and translucent background (`border-cyan-500/20 bg-cyan-500/10 text-cyan-400`).
*   **Icon:** Tv (Lucide Tv)

### 5. Governmental
*   **Visuals:** Deep blue border and translucent background (`border-blue-600/20 bg-blue-600/10 text-blue-300`).
*   **Icon:** LandPlot (Lucide LandPlot)

### 6. Gaming
*   **Visuals:** Purple-indigo border and translucent background (`border-indigo-400/20 bg-indigo-400/10 text-indigo-300`).
*   **Icon:** Gamepad2 (Lucide Gamepad2)

---

## 3. Technical Mappings & Dependencies

*   **Component Imports:** `InfiniteSlider` (custom horizontal marquee).
*   **Icons Used:** `Landmark`, `GraduationCap`, `Building2`, `Tv`, `LandPlot`, `Gamepad2` (Lucide React)
*   **Used In:** [Services Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/services.md) (Industries Section)
