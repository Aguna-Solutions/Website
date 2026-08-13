# Forms Interaction Flow

This document details the functional behavior, input lifecycles, backend validations, and state flows for the contact form on the website.

---

## 1. Form Purpose & Scope

The contact form on the `/contact` route captures inbound inquiries from prospective clients, partners, or security leads. Submissions are processed on the server and emailed directly to the firm's central operations inbox.

---

## 2. Input Fields & Constraints

The form maintains a clean, flat data model:

| Field Name | HTML Element | `id` / `name` | Input Type | Required | Validation Constraints |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Name** | `input` | `name` | `text` | **Yes** | Standard text string. Cannot be empty. |
| **Email** | `input` | `email` | `email` | **Yes** | Must match browser-level email regex (e.g. `user@domain.com`). |
| **Subject** | `input` | `subject` | `text` | **Yes** | Standard text string. Cannot be empty. |
| **Message** | `textarea` | `message` | `text` | **Yes** | Standard text string. Cannot be empty. |

---

## 3. Data Lifecycle & State Machine

The client-side form manages submissions using a 4-state lifecycle machine:

```
  [User Action: Click Submit]
             │
             ▼
      ┌─────────────┐
      │   loading   │  <-- Disables inputs & submit button.
      └──────┬──────┘      Renders spinning icon & "Sending...".
             │
       [API Request]
      POST /api/contact
             │
      ┌──────┴──────┐
      ▼             ▼
┌───────────┐ ┌───────────┐
│  success  │ │   error   │  <-- Inputs remain intact. Renders
└─────┬─────┘ └─────┬─────┘      red warning & "Failed to Send".
      │             │
  (Resets inputs,   │ (Manual retry)
   5s delay)        │
      └──────┬──────┘
             ▼
        ┌───────────┐
        │   idle    │  <-- Standard state. Renders "Send Message".
        └───────────┘
```

---

## 4. Backend Routing & Validation Logic

When the client triggers a submit, the form sends a `POST` request to the backend API endpoint `/api/contact` with the stringified form data in the body.

### 4.1 Server-Side Validation:
1.  **SMTP Configuration Check:**
    *   The server checks for the existence of four environment variables: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS`.
    *   *Failure:* If any of these are missing, the server logs `Missing SMTP configuration. Please check .env.local` and returns a `500 Internal Server Error` with JSON `{ error: "Server configuration error" }`.
2.  **Mail Client Instantiation:**
    *   If credentials exist, the server instantiates a secure `nodemailer` transporter:
        *   `host` = `SMTP_HOST`
        *   `port` = `SMTP_PORT`
        *   `secure` = `false` (uses standard TLS upgrade via port 587)
        *   `auth.user` = `SMTP_USER`
        *   `auth.pass` = `SMTP_PASS`
3.  **Mail Drafting:**
    *   Compiles a multi-part notification mail:
        *   `from` = `SMTP_USER` (server sender address)
        *   `to` = `info@agunasolutions.com` (operations inbox)
        *   `subject` = `New Contact Form Submission: ${subject}`
        *   `text` & `html` = formats the client's name, email, subject, and message.
4.  **Mail Transmission:**
    *   Triggers `transporter.sendMail()`.
    *   *Success:* If the mail is successfully routed, the server returns a `200 OK` with JSON `{ message: "Email sent successfully" }`.
    *   *Failure:* If the SMTP server rejects the connection or fails to route the mail, the server catches the error, logs it, and returns a `500 Internal Server Error` with JSON `{ error: "Failed to send email" }`.
