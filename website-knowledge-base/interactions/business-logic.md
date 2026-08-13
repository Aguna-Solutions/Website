# Business Logic & Data Lifecycles

This document details the backend configurations, mail routing services, state cycles, and scroll behaviors that power the website.

---

## 1. Contact Form Data & API Lifecycle

The contact form uses a unified client-to-server data model to handle inquiries:

### 1.1 Client-Side Data Collection
1.  **State Management:** Stores user inputs in a state object:
    `const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })`
2.  **Input Binding:** Captures character inputs, updating the state object in real-time.
3.  **Transit Payload:** On submit, the component converts the state object into a JSON string and sends a `POST` request to `/api/contact`.
4.  **UX Cleanup:** Upon a successful `200 OK` response, the form resets the state object back to empty strings, clearing all inputs.

---

## 2. Server-Side SMTP Configuration & Mail Routing

Form submissions are processed on the server by the API route `app/api/contact/route.ts`:

### 2.1 SMTP Credential Check
Before opening an email connection, the server verifies the existence of four environment variables:
*   `SMTP_HOST` (IP or domain of the mail server)
*   `SMTP_PORT` (port number, typically 587 or 465)
*   `SMTP_USER` (authenticating mail account username)
*   `SMTP_PASS` (authenticating mail account password)
*   *Action:* If any variable is missing, the server logs a configuration error and returns a `500` error code to prevent system crashes.

### 2.2 Nodemailer Transporter Configuration
If credentials exist, the server instantiates a secure `nodemailer` transporter:
```typescript
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // TLS upgrade
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});
```

### 2.3 Email Compiling & Formatting
The server drafts a multi-part notification email to route the lead details securely:
*   **Sender (`from`):** `process.env.SMTP_USER`
*   **Recipient (`to`):** `info@agunasolutions.com`
*   **Subject:** `New Contact Form Submission: ${subject}`
*   **Plain Text Template:**
    ```
    Name: [Name]
    Email: [Email]
    Subject: [Subject]
    Message: [Message]
    ```
*   **HTML Template:**
    ```html
    <h3>New Contact Form Submission</h3>
    <p><strong>Name:</strong> [Name]</p>
    <p><strong>Email:</strong> [Email]</p>
    <p><strong>Subject:</strong> [Subject]</p>
    <p><strong>Message:</strong></p>
    <p>[Message]</p>
    ```

### 2.4 Sending & Error Handling
*   The server triggers `transporter.sendMail()`.
*   If the mail is routed successfully, it returns a `200 OK` status with JSON `{ message: "Email sent successfully" }`.
*   If the SMTP server rejects the connection, the server catches the error, logs the details, and returns a `500 Internal Server Error` with JSON `{ error: "Failed to send email" }`.

---

## 3. Client-Side Scroll Background Interpolation

The background color transitions on scroll are handled by a client-side listener (`ScrollBackground.tsx`):
1.  **Scroll Position Tracking:** Monitors scroll events using a window listener:
    `window.addEventListener("scroll", handleScroll, { passive: true })`
2.  **Normalized Position:** Calculates the current scroll position as a value from `0` to `1` by dividing the scroll offset by the scrollable height:
    `progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)`
3.  **Color Calculations:** Renders the calculated RGB background color inline on the main element, updating the background dynamically as the user scrolls.

---

## 4. Hash Navigation & Retries

To resolve Next.js rendering delays when linking to page hashes, the site uses a custom scroll handler (`SmoothScroll.tsx`):
1.  **Hash Interception:** Monitors route updates via `usePathname` and `useSearchParams`.
2.  **Element Query:** Extracts the hash string, querying the DOM for the target element ID.
3.  **Double Scroll Execution:**
    *   *First Scroll:* Triggers a smooth scroll immediately on mount to provide instant visual response:
        `element.scrollIntoView({ behavior: "smooth", block: "start" })`
    *   *Second Scroll:* Triggers a second, delayed scroll 500ms later via `setTimeout` to ensure exact alignment once all dynamic components finish rendering.
