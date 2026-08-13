# Contact Page

**URL:** `/contact`  
**Source File:** [app/contact/page.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/app/contact/page.tsx)  
**Purpose:** Serves as the primary lead acquisition page for Aguna Solutions. It hosts a secure contact form and provides verified corporate communication channels.

---

## SEO & Metadata

*   **SEO Title:** Contact Secure Operations | Aguna Solutions
*   **Meta Description:** Connect with our security team to discuss your VAPT, infrastructure protection, or custom software project. Submit a secure inquiry today.
*   **Canonical URL:** `https://www.agunasolutions.com/contact`
*   **Navigation Position:** Primary CTA Route (Linked via the right-hand Phone button in the header and the "Contact Us" link in the footer)
*   **Breadcrumbs:** `Home` > `Contact`

---

## Page Summary

The Contact page is a highly interactive lead generation portal. In the background, it runs the `ArtificialHero` component, which renders a looping, responsive ASCII art sphere that rotates dynamically. The foreground is organized into a two-column grid: the left side displays corporate contact info cards (location and email), while the right side displays a secure, interactive contact form with dynamic status states.

---

## Sections

### 1. Header (Global Navbar)
*   **Component:** [Navbar Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/navbar.md)

---

### 2. Inbound Contact Portal
*   **Component:** `ContactInfo` & `ContactForm` inside `ArtificialHero`
*   **Background Visuals:** Looping, interactive ASCII art sphere background (`ArtificialHero`) floating in a dark canvas with blue-indigo radial glow overlays (`blur-[100px]` and `blur-[120px]`).
*   **Left Column: Corporate Contact Cards (`ContactInfo`)**
    *   *Heading:* "Let's Create Together" (gradient text)
    *   *Description:* "Ready to transform your vision into reality? We'd love to hear about your project and explore how we can help you achieve your goals."
    *   *Email Card:* "Email" (`info@agunasolutions.com`, Lucide Mail icon, hover-highlighted border)
    *   *Location Card:* "Location" ("Noida, India", Lucide MapPin icon)
*   **Right Column: Secure Contact Form (`ContactForm`)**
    *   *Form Container:* Curved frosted glass card (`bg-white/5 backdrop-blur-sm`).
    *   *Input Fields:*
        1.  **Name:** `type="text"`, required, Lucide User icon, placeholder: "Your name".
        2.  **Email:** `type="email"`, required, Lucide Mail icon, placeholder: "your@email.com".
        3.  **Subject:** `type="text"`, required, Lucide Tag icon, placeholder: "Project inquiry".
        4.  **Message:** `textarea`, required, Lucide MessageSquare icon, placeholder: "Tell us about your project...".
    *   *Submit Button:* Interactive, state-dependent CTA (`bg-blue-600` with hover scale).
        *   `idle` State: Displays "Send Message" with a Send icon.
        *   `loading` State: Displays "Sending..." with a spinning Loader2 icon (disables inputs during transit).
        *   `success` State: Displays "Message Sent!" with a CheckCircle icon.
        *   `error` State: Displays "Failed to Send" with an AlertCircle icon.
*   **Purpose:** Capture inbound project inquiries and route them securely.

---

### 3. Footer (Global Footer)
*   **Component:** [Footer Component](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/components/footer.md)
