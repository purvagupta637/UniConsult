# UniConsult – Management & Business Consulting Site

A professional, multi-page consulting firm website built with **React + Vite + Tailwind CSS**. Includes responsive layout, light/dark mode, reusable components, and sample content tailored to a management & business consulting practice serving startups, SMEs, corporates, and public-sector organizations.

## Tech Stack
- React (Vite)
- Tailwind CSS (dark mode enabled)
- React Router
- Framer Motion (subtle animations)
- Lucide icons

## Project Structure
- src/
  - components/ — layout, navigation, cards, CTA, theme toggle
  - pages/ — Home, About, Services, Projects, Contact
  - data/ — structured content (services, case studies, team, contact details)
  - providers/ — theme provider for light/dark mode
  - index.css — Tailwind layers and base styles

## Getting Started
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Lint
npm run lint

# Production build
npm run build
```

## Pages & Content
- **Home**: hero, value prop, featured services, why-us, sample projects, CTA
- **About**: company story, mission & vision, nine-member team placeholders
- **Services**: detailed offerings for strategy, technology, financial advisory, public sector
- **Projects**: case studies in Problem → Approach → Outcome format
- **Contact**: contact form, firm details, social links, CTA

## Notes
- Light/dark mode toggle in the navbar (stored in `localStorage`).
- Tailwind custom theme in `tailwind.config.js` defines brand colors and shadow styles.
- Sample content is realistic but placeholder—swap with your firm’s details for production.
