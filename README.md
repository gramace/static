# Exameow — Landing Page

> Know yourself as an aspirant. AI-powered personalised preparation for UPSC aspirants across India.

This is the official landing/waitlist page for **Exameow** — built to give aspirants a place to sign up for early access while the core app is in active development.

---

## Tech Stack

- **Framework** — Next.js (App Router)
- **Styling** — CSS Modules
- **Font** — Nunito (Google Fonts)
- **Email Capture** — Brevo embedded form
- **Deployment** — Vercel

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
exameow-landing/
├── app/
│   ├── layout.tsx        # Global layout, font, metadata
│   ├── page.tsx          # Main page — imports all sections
│   └── globals.css       # CSS variables, reset, global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Mission.tsx
│   └── Signup.tsx
└── public/
    └── logo.png
```

---

## Deployment
 On github pages.

---

© 2026 Exameow Edventures Private Limited. All rights reserved.