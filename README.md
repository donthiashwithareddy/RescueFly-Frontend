# RescueFly React frontend

This folder is the React + Vite frontend only. It does not replace the Spring Boot backend or Aiven database.

## Run locally

1. Install Node.js LTS if it is not installed.
2. Open this folder in VS Code.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the localhost URL Vite prints.

## Build for Netlify

- Build command: `npm run build`
- Publish directory: `dist`

The frontend defaults to `https://rescuefly-backend.onrender.com/api`. Test login, registration and app pages before replacing the currently deployed site.
