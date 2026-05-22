# Trixie Mission Control

Mission Control dashboard for Trixie OS — the operating system for Keep Group.

## Tech Stack

- **React 18** + TypeScript
- **Vite** for fast dev/build
- **React Router** v6 for navigation
- **Tailwind CSS** + CSS custom properties (design tokens)
- **Lucide React** for icons

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Modules

| Module | Status | Description |
|--------|--------|-------------|
| Dashboard | ✅ Live | Overview & module cards |
| Pipeline | 🔨 Built | Lead management |
| Quotes | 📋 Planned | Quote generation |
| Enquiries | 📋 Planned | Form submissions |
| Projects | 🔨 Built | Project tracking |
| Schedule | 📋 Planned | Production calendar |
| Field | 📋 Planned | Site reports |
| Feasibility | 📋 Planned | Lot assessments |
| Studio | ✅ Live | Content library |
| Publishing | 📋 Planned | Social media ops |

## Design System

This app uses the **Trixie Design System** tokens:

- **Font**: DM Sans
- **Colors**: 
  - Background: #F3F4F1
  - Black/Header: #111111
  - Olive accent: #4A5240
  - Gold: #D4AF37

## Alex AI Assistant

Press `⌘K` (or `Ctrl+K`) to open the Alex assistant panel.

## Deployment

### Replit

1. Import from GitHub
2. It auto-detects Vite config
3. Run `npm run dev`

The `.replit` file is pre-configured.

### Vercel / Netlify

```bash
npm run build
# Deploy the `dist/` folder
```

## License

Private — Keep Group internal use only.
