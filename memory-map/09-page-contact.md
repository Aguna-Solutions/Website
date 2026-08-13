# 09 — Page: Contact (`/contact`)

**File**: `app/contact/page.tsx`  
**Type**: Server component

## Component Stack

```
<main className="relative min-h-screen bg-[#0B1120]">
  <ArtificialHero />           ← ASCII sphere background (absolute, z-0)
  <div relative z-10>          ← foreground content
    <div lg:grid-cols-2 gap-12>
      <ContactInfo />
      <ContactForm />
    </div>
  </div>
</main>
```

## SEO / Metadata

```ts
title: "Contact Secure Operations | Aguna Solutions"
description: "Get in touch with Aguna Solutions for enterprise cybersecurity, VAPT, and AI solutions."
canonical: "https://www.agunasolutions.com/contact"
```

---

## ArtificialHero (`components/ui/artificial-hero.tsx`)

ASCII/particle sphere animation as the page background. Sits absolute/behind the foreground content. The foreground grid has `relative z-10` to sit above it. Container has `py-32` to push content down far enough from the navbar.

---

## ContactInfo (`components/ContactInfo.tsx`)

Left column. Contains:
- Address: 7th floor, Eco Tower, Sector 125, Noida
- Email: `info@agunasolutions.com`
- LinkedIn: https://www.linkedin.com/company/aguna-solutions/posts/?feedView=all

(These are the same details shown in the Footer — single source of truth would be a data file, but currently hardcoded in both Footer.tsx and ContactInfo.tsx.)

---

## ContactForm (`components/ContactForm.tsx`)

**Client component** (`"use client"`)

### Form fields (all required)
| Field | Input type | Placeholder |
|---|---|---|
| name | text | "Your name" |
| email | email | "your@email.com" |
| subject | text | "Project inquiry" |
| message | textarea (3 rows) | "Tell us about your project..." |

Each field has a leading icon (`User`, `Mail`, `FileText`, `MessageSquare` from lucide-react).

### Form state machine

```ts
type FormStatus = "idle" | "loading" | "success" | "error"
```

| State | Submit button | Color |
|---|---|---|
| `idle` | "Send Message" + `Send` icon | `bg-blue-600 hover:bg-blue-500` |
| `loading` | "Sending..." + `Loader2 animate-spin` | `bg-blue-600/60 cursor-not-allowed opacity-70` |
| `success` | "Message Sent!" + `CheckCircle` | `bg-blue-600/60 cursor-not-allowed opacity-70` |
| `error` | "Failed to Send" + `AlertCircle` | `bg-red-600 hover:bg-red-500` |

On success: form fields reset to empty, status auto-resets to `idle` after 5 seconds.  
On error: error banner (`role="alert"`) appears above the fields.  
`isDisabled = status === "loading" || status === "success"` — both these states disable all inputs and button.

### Submit handler
```ts
async function handleSubmit(e) {
  e.preventDefault()
  setStatus("loading")
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
  if (response.ok) {
    setStatus("success")
    // reset fields
    setTimeout(() => setStatus("idle"), 5000)
  } else {
    setStatus("error")
  }
}
```

---

## API Route: `app/api/contact/route.ts`

### POST /api/contact

**Request body** (JSON):
```json
{ "name": "string", "email": "string", "subject": "string", "message": "string" }
```

**Environment variables required** (all four must be set):
```
SMTP_HOST    — SMTP server hostname
SMTP_PORT    — SMTP port (e.g. 587)
SMTP_USER    — SMTP username / sending address
SMTP_PASS    — SMTP password
```

**Behavior**:
- If any env var is missing → `500 { error: "Server configuration error" }`
- Creates Nodemailer transporter (`secure: false` — STARTTLS on port 587)
- Sends to `info@agunasolutions.com`
- Subject: `"New Contact Form Submission: {subject}"`
- Body: plain text + HTML (both)
- Success → `200 { message: "Email sent successfully" }`
- SMTP failure → `500 { error: "Failed to send email" }`
- JSON parse error → `500 { error: "Failed to send email" }`

### Other methods
All other HTTP methods (GET, PUT, DELETE, PATCH) return `405 null`.

---

## Styling notes

The form container:
```tsx
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
  <form className="space-y-4 bg-black/20 p-5 rounded-lg">
```

Input fields: `bg-black/50 border border-white/10 rounded-lg` — dark semi-transparent glass style consistent with the dark `#0B1120` page background.
