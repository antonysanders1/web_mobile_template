# Web Mobile Template

A Vite-powered React 18 starter for building mobile-optimized web apps with a polished marketing shell, shared theme tokens, and compatibility-friendly integrations.

## Stack

- React 18
- Vite
- Material UI 5
- React Router 6
- Redux 5
- Firebase compat API
- Vitest + Testing Library

## Quick Start

```bash
yarn install
yarn dev
```

The dev server runs on Vite's default local port and hot reloads automatically.

## Scripts

```bash
yarn dev
yarn build
yarn preview
yarn test
```

## Environment Variables

Preferred variables use the Vite `VITE_` prefix:

```bash
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
VITE_MEASUREMENT_ID=
```

Legacy `REACT_APP_*` Firebase variables are still supported as a fallback during migration.

## Template Notes

- `/`, `/about`, and `/contact` ship as branded marketing-style pages.
- `/login` and `/register` stay as dedicated auth routes.
- The default shell is mobile-first and safe-area aware.
- The template keeps the existing Redux shape and Firebase compat usage for downstream compatibility.
