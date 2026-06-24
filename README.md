# Advocate K. Thangarasu & Associates

A modern React + TypeScript website for Advocate K. Thangarasu & Associates, built with Vite. The site includes a polished landing experience, practice-area sections, consultation booking, and a contact form.

## Features

- Responsive legal services website
- Multi-section navigation for Home, About, Practice Areas, and Contact
- Consultation booking modal
- Contact form integration with EmailJS
- Centralized site content for easy updates

## Tech Stack

- React
- TypeScript
- Vite
- Motion for animations
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The app will be available at http://localhost:3000.

## Environment Variables

If you want the contact form to send emails, create a `.env.local` file in the project root with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```text
src/
  components/      # Page sections and UI components
  config/          # Shared site content and configuration
  assets/          # Images, media, and static assets
  App.tsx          # Main app layout
  main.tsx         # App entry point
```

## Build for Production

```bash
npm run build
```

## Notes

- Contact details and branding text are centralized in [src/config/siteContent.ts](src/config/siteContent.ts) for easier maintenance.
- The project already includes a production build setup through Vite.
