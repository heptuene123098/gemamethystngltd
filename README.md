# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Using a .env file for local development

This project reads server-side environment variables (used by API routes in `src/api`) from the process environment. For local development you can store values in a `.env` file and preload them when starting the dev server.

1. Create a `.env` file at the project root by copying the example:

```powershell
copy .env.example .env
```

2. Install `dotenv` (already added to devDependencies):

```powershell
pnpm install --dev
```

3. Start the dev server. The `dev` script is configured to preload `dotenv`, so a normal `pnpm dev` will load your `.env` values automatically.

```powershell
pnpm dev
```

Notes:
- Keep `.env` out of version control. The repo contains `.env.example` as a template.
- For client-side environment values used in your React code, Vite requires `VITE_` prefixed variables in `.env` (e.g. `VITE_API_URL`). Do not put secrets there — only use `process.env` in server-side code for secrets like `RESEND_API_KEY`.

