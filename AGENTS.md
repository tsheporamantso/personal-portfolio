# AGENTS.md

## Commands

- Dev: `npm start` · Build: `npm run build` (Create React App / react-scripts 5)
- Tests: `npm test` (CRA Jest, interactive watch). Non-interactive single file:
  `npm test -- --watchAll=false src/Components/about/About.test.jsx`
- Lint: `npm run lint` / `npm run lint:fix` — **only covers `src/**/*.{js,jsx}`**. CI also runs
  `npx stylelint "**/*.{css,scss}"` repo-wide; run that locally too before pushing.
- Docs: `npm run docs` (JSDoc, config in `jsdoc.json`)

## Git hooks (Husky)

- `pre-commit`: runs `npm run lint` — commits fail on ESLint errors.
- `commit-msg`: commitlint with **Conventional Commits** required (`feat:`, `fix:`, etc.).

## Environment

- Single env var: `REACT_APP_API_URL` in `.env` (backend base URL). No `.env.example`.
- CRA inlines `REACT_APP_*` vars at **build time**: Docker image requires
  `--build-arg REACT_APP_API_URL=...` (see `Dockerfile`, multi-stage node→nginx).
- README is stale (describes an early HTML/CSS version of this project). Trust code and configs over it.

## Testing

- Tests are colocated `*.test.jsx` files using Jest + React Testing Library.
- Several components use **Jest snapshots** (header, nav, footer, articles): update deliberately with `npm test -- -u`.
- `vitest` sits in devDependencies but is **unused** — everything runs on CRA's Jest.

## Architecture

- Entry `src/index.js` nests BrowserRouter → QueryClientProvider (TanStack Query v5) → Redux Provider.
- Routes in `src/App.js`: `/` (single-page portfolio), `/login`, `/tip` (Stripe TipJar), `/dashboard`.
  `/dashboard` is guarded only client-side via `token` in localStorage.
- Server-state fetching is split three ways — match the pattern the section already uses:
  - **Services**: Redux Toolkit slice (`src/features/services/servicesSlice.js`, `createAsyncThunk`) — the only Redux state.
  - **Experience / Portfolio / Testimonials (queries) and Login (mutation)**: TanStack React Query.
  - **Contact / Dashboard / TipJar**: plain `fetch`/axios inside the component.
- All backend endpoints are centralized in `src/utils/api.js` (`REACT_APP_API_URL` + `/api/v1/*`).
- Tech-stack badges render via the name→icon map in `src/utils/techIcons.js`.

## Dead code — do not edit expecting behavior changes

These exist but nothing imports them (leftovers from a pre-RTK refactor):

- `src/Components/services/actions.js`, `reducer.js`, `fetchServices.jsx` (superseded by the RTK slice)
- `src/utils/fetchdata.js` (unused axios helper)
- `src/utils/data.js` (legacy hardcoded project list; Portfolio actually fetches from the API)
