# Products List Component

**Source File:** [components/ProductsList.tsx](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/components/ProductsList.tsx)  
**Primary Purpose:** Renders the grid of 5 detailed product specification cards at the bottom of the Products page, detailing values, capabilities, impact, and hover-reveal features.

---

## 1. Visual Specification & Styling

*   **Background:** Sits on a dark canvas (`bg-black relative`).
*   **Layout:** 3-column responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`).
*   **Card Container:** Matte-black cards (`bg-white/5 border border-white/10 rounded-2xl p-8`) that scale and translate upwards slightly (`hover:-translate-y-1`), and brighten on hover (`hover:bg-white/10`).
*   **Card Header:** Displays a large square icon container (`bg-blue-500/10 text-blue-400 w-16 h-16 rounded-xl`) on the left, and a stack of small tags on the right.
*   **Dividing Border:** A horizontal dividing line (`border-t border-white/10`) separates the body copy from the bottom impact metrics and hover panels.
*   **Hover-Reveal Tech Panel:**
    *   *Logic:* An expandable CSS container (`max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300`) that reveals extra technical specifications (rendered as blue-accent chips) only when the card is hovered.

---

## 2. The 5 Product Specifications

### 1. Predictive Maintenance for Industry 4.0
*   **Value Statement:** "Optimize high-value assets across Aerospace & Semiconductors." (cyan text)
*   **Description:** "Eliminate unscheduled downtime and increase yield by predicting component failures and equipment drift before they disrupt global supply chains."
*   **Capabilities:** Real-time sensor data & equipment drift analysis, Predictive failure alerts & yield correlation, Remaining Useful Life (RUL) forecasting.
*   **Impact Metric:** `↓ Costs by 25% | ↑ Yield by 15%` (emerald green)
*   **Tags:** `Aerospace`, `Manufacturing`, `AI-Powered`
*   **Hover Tech Specs:** `Nanometer Precision`, `99.9% Prediction Accuracy` (blue chips)
*   **Icon:** Cpu (Lucide Cpu)

### 2. Anomaly Detection via CCTV
*   **Value Statement:** "Proactive threat prevention and enhanced site safety."
*   **Description:** "Transform passive surveillance into active security that identifies risks the moment they appear."
*   **Capabilities:** Real-time behavioral anomaly detection, Unauthorized access alerts, Crowd density monitoring.
*   **Impact Metric:** `Detect threats in <2 seconds`
*   **Tags:** `Physical Security`, `Surveillance`
*   **Hover Tech Specs:** `Sub-second Latency`, `Low-light Optimization`
*   **Icon:** Eye (Lucide Eye)

### 3. Athermind Intelli DAM (Database Activity Monitoring)
*   **Value Statement:** "Secure critical data and simplify compliance audits."
*   **Description:** "Gain complete visibility into data access to prevent breaches and satisfy regulatory requirements effortlessly."
*   **Capabilities:** Real-time SQL query analysis, Privileged user activity monitoring, Automated audit trail generation.
*   **Impact Metric:** `Reduce audit prep time by 70%`
*   **Tags:** `Data Security`, `Compliance`
*   **Hover Tech Specs:** `Zero Performance Overhead`, `Granular Role-Based Access`
*   **Icon:** Database (Lucide Database)

### 4. Athermind Integrity Module
*   **Value Statement:** "Guarantee system trust and operational integrity."
*   **Description:** "Ensure your critical systems are immune to silent corruption and tampering with continuous integrity verification."
*   **Capabilities:** Continuous file integrity verification, Real-time tampering detection, Automated incident response triggers.
*   **Impact Metric:** `100% File Integrity Assurance`
*   **Tags:** `Infrastructure`, `Zero Trust`
*   **Hover Tech Specs:** `Cryptographic Verification`, `Immutable Audit Logs`
*   **Icon:** ShieldCheck (Lucide ShieldCheck)

### 5. Athermind Intelli DMS (Document Management System)
*   **Value Statement:** "Capture, track, and secure your organizational knowledge."
*   **Description:** "A centralized, intelligent repository that automates document workflows while ensuring absolute data governance and compliance."
*   **Capabilities:** Automated indexing & OCR processing, Granular role-based access control, Advanced versioning & tamper-proof audit trails.
*   **Impact Metric:** `↓ Retrieval time by 60% | 100% Audit Readiness`
*   **Tags:** `Governance`, `Workflow Automation`
*   **Hover Tech Specs:** `AES-256 Encryption`, `Zero-Knowledge Storage`
*   **Icon:** FileText (Lucide FileText)

---

## 3. Technical Mappings & Dependencies

*   **Icons Used:** `Plane`, `Eye`, `Cpu`, `Database`, `ShieldCheck`, `FileText` (Lucide React)
*   **Used In:** [Products Page](file:///c:/Users/pranav/aguna-website/Aguna-portfolio/website-knowledge-base/pages/products.md) (Products Grid Section)
