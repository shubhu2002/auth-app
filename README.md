# AuthenTrace

A modern authentication system built with Next.js, featuring credential-based login/signup and social OAuth providers. Styled with a dark-themed UI, animated gradient backgrounds, and parallax effects.

**Live Demo:** [authentrace.vercel.app](https://authentrace.vercel.app/)

## Features

- **Credential Authentication** -- Sign up and log in with username and password
- **Social OAuth Login** -- Google, GitHub, and Twitter (X) via NextAuth.js
- **Real-time Validation** -- Username availability check, password strength indicator
- **Responsive Design** -- Mobile-first layout with Tailwind CSS
- **Parallax Background** -- Animated gradient effects using `react-parallax-mouse`
- **Toast Notifications** -- User feedback via `react-toastify`
- **Environment Validation** -- Type-safe env vars with `@t3-oss/env-nextjs` and Zod

## Tech Stack

| Layer     | Technology                          |
| --------- | ----------------------------------- |
| Framework | Next.js 14 (Pages Router)           |
| Auth      | NextAuth.js v4                      |
| Styling   | Tailwind CSS                        |
| Language  | TypeScript                          |
| Backend   | External API (Node.js on Render)    |
| Hosting   | Vercel                              |
| Package   | pnpm                                |

## Pages

| Route      | Description                                       |
| ---------- | ------------------------------------------------- |
| `/`        | Landing page with welcome message                 |
| `/login`   | Login form with credentials + social providers     |
| `/signup`  | Registration form with validation + social login   |
| `/success` | Authenticated user profile with sign-out option    |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+

### Installation

```bash
git clone https://github.com/shubhu2002/auth-app.git
cd auth-app
pnpm install
```

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# GitHub OAuth
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# Twitter/X OAuth 2.0
TWITTER_CLIENT_ID=""
TWITTER_CLIENT_SECRET=""
```

Generate a NextAuth secret:

```bash
openssl rand -base64 32
```

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── components/
│   ├── gradient-prallax.tsx   # Animated background
│   ├── inputField.tsx         # Reusable input component
│   └── social-providers.tsx   # Google, GitHub, Twitter buttons
├── layout/
│   └── index.tsx              # App shell with head, toast, background
├── pages/
│   ├── api/auth/[...nextauth].ts  # NextAuth API route
│   ├── _app.tsx
│   ├── index.tsx              # Landing page
│   ├── login.tsx              # Login page
│   ├── signup.tsx             # Sign-up page
│   └── success.tsx            # Authenticated profile
├── server/
│   └── auth.ts                # NextAuth config & providers
├── styles/
│   ├── globals.css
│   └── toast.css
├── types/
│   └── next-auth.d.ts         # Session type extensions
├── utils/
│   └── index.ts               # Axios instance
└── env.js                     # Zod env schema
```

## Scripts

| Command          | Description            |
| ---------------- | ---------------------- |
| `pnpm dev`       | Start dev server       |
| `pnpm build`     | Production build       |
| `pnpm start`     | Start production server|
| `pnpm lint`      | Run ESLint             |
| `pnpm typecheck` | Run TypeScript checks  |

## License

This project is open source.
