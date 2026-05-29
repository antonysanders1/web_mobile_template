# Web Mobile Template

A Vite-powered React 18 starter for building mobile-optimized web apps with a polished landing shell, dedicated auth routes, Firebase compatibility hooks, and lightweight Zustand state.

## What You Get

- A modern Vite + React 18 setup
- Material UI 5 styling with a soft blue landing-page default
- Mobile-friendly routes for `/`, `/about`, `/contact`, `/login`, and `/register`
- Zustand for simple client state without Redux boilerplate
- Firebase compat config with `VITE_*` env support and legacy `REACT_APP_*` fallback
- Vitest + Testing Library for a basic smoke-test setup

## Stack

- React 18
- Vite 7
- Material UI 5
- React Router 6
- Zustand
- Firebase compat API
- Vitest + Testing Library

## Requirements

- Node.js `20.20.0` or newer
- Yarn `1.22.x`
- A Git provider account if you want to publish to GitHub, GitLab, or Bitbucket

## Quick Start

```bash
yarn install
yarn dev
```

Then open the local URL printed by Vite, usually `http://localhost:5173`.

## Available Scripts

```bash
yarn dev
yarn build
yarn preview
yarn test
```

## Environment Variables

Create a local `.env` file from the included example:

```bash
cp .env.example .env
```

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

Legacy `REACT_APP_*` Firebase variables are still supported as a fallback while migrating older projects.

## How To Use This Template

### 1. Install and run it locally

```bash
yarn install
yarn dev
```

### 2. Replace the starter content

The fastest places to customize first are:

- `src/views/HomeScreen.jsx`
- `src/views/AboutScreen.jsx`
- `src/views/ContactScreen.jsx`
- `src/views/LoginScreen.jsx`
- `src/components/MenuBar.jsx`
- `src/Theme.js`
- `src/App.css`
- `src/index.css`

### 3. Update branding

Change the default brand text, CTA labels, and page messaging in:

- `src/components/MenuBar.jsx`
- `src/views/HomeScreen.jsx`
- `src/views/SplashScreen.jsx`
- `public/manifest.json`
- `index.html`

### 4. Wire up auth and data

The template now uses Zustand for app state. The starter auth store lives in:

- `src/state/useAuthStore.js`

Example usage:

```jsx
import useAuthStore from "./state/useAuthStore";

function Example() {
  const currentUser = useAuthStore((state) => state.currentUser);
  const setCurrentUser = useAuthStore((state) => state.setCurrentUser);

  return (
    <button onClick={() => setCurrentUser({ id: "123" })}>
      {currentUser ? "Signed in" : "Sign in"}
    </button>
  );
}
```

### 5. Connect the forms

Starter form components are intentionally UI-only until you attach your backend:

- `src/components/Login.jsx`
- `src/components/SignUp.jsx`
- `src/views/ContactScreen.jsx`

These currently show toast feedback so you can replace them with:

- Firebase Auth
- A custom REST or GraphQL API
- Clerk, Auth0, Supabase Auth, or another hosted auth provider

## Starting A New Repo From This Template

You have two good options depending on whether you want to keep this template repo's history.

### Option A: Start fresh with a brand-new repo history

Use this when each project should look like its own standalone app repository.

1. Copy or clone this template into a new project folder.

```bash
git clone <template-repo-url> my-new-app
cd my-new-app
```

2. Remove the existing Git history.

```bash
rm -rf .git
```

PowerShell:

```powershell
Remove-Item -Recurse -Force .git
```

3. Reinitialize Git for the new project.

```bash
git init
git add .
git commit -m "Initial commit from web mobile template"
git branch -M main
```

4. Create a new empty repo on GitHub, GitLab, or Bitbucket.

5. Attach this project to that new remote.

```bash
git remote add origin <new-repo-url>
git push -u origin main
```

After that, everything you build in this folder will go to the new repo.

### Option B: Keep the template history, but push to a new remote

Use this when you want to preserve the original commit history for reference.

1. Clone the template.

```bash
git clone <template-repo-url> my-new-app
cd my-new-app
```

2. Remove or rename the old remote.

```bash
git remote rename origin template-origin
```

3. Create a new repo on your Git provider.

4. Add the new repo as the main remote.

```bash
git remote add origin <new-repo-url>
git push -u origin main
```

You can still pull updates from the template later by using `template-origin`.

## Recommended First Steps For A New Project

1. Rename the app in `index.html`, `public/manifest.json`, and the nav/header copy.
2. Replace the homepage headline, subcopy, CTA text, and trust-strip placeholders.
3. Hook up auth behavior in `Login.jsx`, `SignUp.jsx`, and `useAuthStore.js`.
4. Add your environment values in `.env`.
5. Run `yarn test` and `yarn build` before the first push.

## Project Structure

```text
src/
  components/     Shared UI pieces like the nav, toast, and auth forms
  config/         External service setup such as Firebase
  state/          Zustand stores
  test/           Test setup helpers
  views/          Route-level screens
  App.jsx         Route shell and layout wiring
  Theme.js        MUI theme tokens
  App.css         Layout and component styling
  index.css       Global CSS variables and document styles
```

## Notes

- The default shell is mobile-friendly and safe-area aware.
- The starter visuals are intentionally reusable rather than brand-specific.
- The current build may show a large chunk-size warning because the template keeps compatibility-oriented dependencies. That warning is non-blocking.
