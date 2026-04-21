# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Type-check and build for production (tsc -b && vite build)
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

## Architecture

Single-page React 19 app bootstrapped with Vite + TypeScript. There are no routing, state management libraries, or backend — all logic lives in `src/App.tsx`. The project is currently a skeleton (counter demo) intended to be built out into a todo list.

- Entry: `src/main.tsx` mounts `<App />` into `#root`
- App logic: `src/App.tsx` — the only component file so far
- Styles: `src/index.css` (global), `src/App.css` (component-level, currently unused)
- No test framework is configured
