# Aditya Kumar - Digital Artisan

A minimal, enterprise-grade portfolio website designed with a focus on typography, simplicity, and performance. Built with **React**, **Vite**, and **Tailwind CSS**.

## Design Philosophy

- **"Sticky Stack" Layout**: A unique vertical navigation pattern where sections stack on top of each other like a deck of cards (`position: sticky`).
- **Typography**: Exclusively uses **Times New Roman** to evoke a classic, editorial feel (`font-serif`).
- **Minimalism**: Stripped of excess. No heavy libraries, no gradients, no complex parallax. Just content and structure.
- **Palette**: Strict monochrome. `#0a0a0a` (Jet Black) background with White text.

## Features

- **Responsive Architecture**:
  - **Desktop**: Immersive "Sticky Stack" experience with a custom blend-mode cursor.
  - **Mobile**: Native, touch-friendly vertical scrolling with optimized layouts.
- **Components (`NewComponents`)**:
  - `NanoHero`: High-impact landing with vertical text alignment.
  - `NanoAbout`: Editorial-style bio.
  - `NanoPhilosophy`: A manifesto on design and simplicity.
  - `NanoWork`: Enterprise-style project listing.
  - `NanoProcess`: Technical stack breakdown (Frontend, Backend, Database, DevOps).
  - `NanoServices`: Full Stack Development lifecycle.
  - `NanoContact`: Minimal footer and contact info.

## Tech Stack

- **Core**: [React](https://react.dev/) (v18) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Motion**: [Framer Motion](https://www.framer.com/motion/) (used sparingly for entrance effects)
- **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

```bash
src/
├── NewComponents/     # The new "Nano" component suite
│   ├── NanoHero.jsx
│   ├── NanoAbout.jsx
│   ├── NanoPhilosophy.jsx
│   ├── NanoWork.jsx
│   ├── NanoProcess.jsx
│   ├── NanoServices.jsx
│   ├── NanoContact.jsx
│   └── CustomCursor.jsx
├── App.jsx            # Main layout controller (Sticky logic)
├── main.jsx           # Entry point
└── index.css          # Global styles (reset, fonts)
```

## ⚡ Getting Started

1.  **Install dependencies**:

    ```bash
    npm install
    ```

2.  **Start the development server**:

    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```
