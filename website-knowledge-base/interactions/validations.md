# Form Validations & Error Handling

This document details the validation rules, browser constraints, error indicators, and state changes that ensure secure and clean form submissions.

---

## 1. Input Constraints & Validations

The contact form implements a multi-tiered validation approach:

### 1.1 Field Constraints
*   **Name, Subject, and Message Fields:**
    *   *Constraint:* `required` attribute.
    *   *Behavior:* The browser blocks submission if these fields are empty, prompting the user with a validation message.
*   **Email Field:**
    *   *Constraint:* `type="email"` and `required` attributes.
    *   *Behavior:* The browser verifies that the input matches the standard email format before allowing submission, blocking invalid addresses.

### 1.2 Browser-Level Validation (HTML5)
By leveraging HTML5 validation attributes, the form provides instant feedback without relying on complex custom JavaScript:
*   Inputs are evaluated immediately on submit.
*   If a field fails validation, the browser blocks the submit event and shows a localized warning tooltip directly next to the invalid input.

---

## 2. Dynamic Status & Button Feedback

The submit button displays real-time status and feedback:

*   **Standard State (Idle):**
    *   *Button Text:* `Send Message`
    *   *Icon:* Send (Lucide Send, rotates/translates on hover).
*   **Submitting State (Loading):**
    *   *Button Text:* `Sending...`
    *   *Icon:* Spinning Loader (Lucide Loader2, animated spin).
    *   *Behavior:* The button is disabled (`disabled={status === "loading"}`) and the cursor changes to `not-allowed` to prevent double submissions.
*   **Success State (Sent):**
    *   *Button Text:* `Message Sent!`
    *   *Icon:* Checkmark Circle (Lucide CheckCircle).
    *   *Behavior:* Renders a green success badge. After 5 seconds, it automatically resets back to `idle`.
*   **Error State (Failed):**
    *   *Button Text:* `Failed to Send`
    *   *Icon:* Alert Triangle (Lucide AlertCircle).
    *   *Behavior:* Renders a red warning badge. Inputs remain intact, allowing the user to correct errors and retry.

---

## 3. Server-Side Validation & Security

*   **Payload Sanitation:** The backend API parses inputs via `await req.json()`, capturing specific properties (`name`, `email`, `subject`, `message`) to prevent parameter injection.
*   **Exception Catching:** The API endpoint wraps all operations in `try-catch` blocks. If an email transfer fails, it catches the error, logs the details, and returns a `500` error to the client, preventing server crashes.
*   **Configuration Safeguard:** The server checks for SMTP environment variables before processing requests, returning a `500` error if variables are missing to protect credentials and system stability.
