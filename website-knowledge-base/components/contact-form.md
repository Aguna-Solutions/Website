# Contact Form Component

**Source File:** [components/ContactForm.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ContactForm.tsx)  
**Primary Purpose:** Captures inbound client inquiries on the Contact page, validates fields in real-time, and sends submissions securely to the backend API.

---

## 1. Visual Specification & Styling

*   **Card Container:** Curved, semi-transparent frosted glass panel (`bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm`).
*   **Form Core:** Inside the card sits a dark-tinted form container (`space-y-4 bg-black/20 p-5 rounded-lg`).
*   **Input Fields:** Text fields use a solid dark background (`bg-black/50`) with a thin border (`border-white/10`), white text, and a blue focus outline (`focus:ring-blue-500/50 focus:border-blue-500/50`).
*   **Input Icons:** Inputs are styled with a Lucide icon on the left edge (`pl-10 absolute left-0 flex items-center`) to maintain alignment.
*   **Message Textarea:** The message field is styled as a non-resizable text area (`resize-none`).

---

## 2. Input Fields & Validation

*   **Form Data Object:** The component maintains a React state object:
    `const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })`
*   **Fields Mapping:**
    1.  **Name:** `type="text"`, required, Lucide `User` icon, placeholder: "Your name".
    2.  **Email:** `type="email"`, required, Lucide `Mail` icon, placeholder: "your@email.com" (validated using browser email regex).
    3.  **Subject:** `type="text"`, required, Lucide `Tag` icon, placeholder: "Project inquiry".
    4.  **Message:** `textarea`, required, Lucide `MessageSquare` icon, rows: 3, placeholder: "Tell us about your project...".

---

## 3. Submission Lifecycle & State Machine

The submit button and form operate as a 4-state lifecycle machine (`const [status, setStatus] = useState("idle")`):

```
       [Submit Event]
             │
             ▼
        ┌──────────┐
        │  loading │  <-- Disables submit button, turns cursor to not-allowed.
        └────┬─────┘      Renders spinning Loader2 icon & "Sending..." text.
             │
      ┌──────┴──────┐
      ▼             ▼
┌───────────┐ ┌───────────┐
│  success  │ │   error   │
└─────┬─────┘ └─────┬─────┘
      │             │
      │ (5s delay)  │ (Manual retry)
      └──────┬──────┘
             ▼
        ┌──────────┐
        │   idle   │  <-- Standard state. Renders "Send Message" and Send icon.
        └──────────┘
```

### Technical Workflow:
1.  User clicks submit. Form intercepts the event (`e.preventDefault()`) and updates the state to `loading`.
2.  Triggers an asynchronous `fetch` request to the API route `/api/contact`:
    *   **Method:** `POST`
    *   **Headers:** `"Content-Type": "application/json"`
    *   **Body:** `JSON.stringify(formData)`
3.  **If response is OK (Status 200):**
    *   Updates state to `success` (Submit button renders green check icon and "Message Sent!").
    *   Resets input fields back to empty strings.
    *   Triggers a 5-second timer (`setTimeout`) to reset status back to `idle`.
4.  **If response fails or throws an exception:**
    *   Updates state to `error` (Submit button renders red warning icon and "Failed to Send").
    *   Inputs remain intact, allowing the user to correct errors and retry.

---

## 4. Technical Mappings & Dependencies

*   **Icons Used:** `Send`, `User`, `Mail`, `MessageSquare`, `Tag`, `Loader2`, `CheckCircle`, `AlertCircle` (Lucide React)
*   **Used In:** [Contact Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/contact.md) (Inbound Form Section)
