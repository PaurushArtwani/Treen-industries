# Treen Industries — Website

B2B website for Treen Industries, a supplier of epoxy floorings and construction chemicals based in Morbi, Gujarat.

## Tech Stack

- **React 18** — component-based UI
- **Vite 5** — fast dev server and optimised production build
- **react-scroll** — smooth in-page scrolling
- **react-icons** — icon library (HeroIcons, Material Design, Font Awesome)
- **react-hook-form** — form validation

## Prerequisites

- [Node.js 18+](https://nodejs.org/) must be installed on your machine.

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

The site will be available at **http://localhost:5173**

## Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css       Fixed header with smooth scroll navigation
│   ├── Hero.jsx / .css         Full-screen hero with stats bar
│   ├── Products.jsx / .css     Filterable product grid (8 products)
│   ├── About.jsx / .css        Company info with milestone timeline
│   ├── WhyUs.jsx / .css        Differentiators grid + comparison table
│   ├── Contact.jsx / .css      Enquiry form with validation
│   └── Footer.jsx / .css       Full footer with CTA strip
├── App.jsx                     Root component
├── App.css                     App-level styles
├── index.css                   Global design tokens & utilities
└── main.jsx                    React entry point
```

## Customisation

- **Phone / Email** — update contact details in `Contact.jsx` and `Footer.jsx`
- **Products** — edit the `PRODUCTS` array in `Products.jsx`
- **Form submission** — replace the mock `setTimeout` in `Contact.jsx` with a real API call, EmailJS, or Formspree integration
- **Social links** — update `SOCIAL_LINKS` hrefs in `Footer.jsx`
- **Colours** — all design tokens are in `src/index.css` under `:root`
