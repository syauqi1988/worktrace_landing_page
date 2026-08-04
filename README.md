# WorkTrace — Landing Page

A conversion-focused landing page for **WorkTrace** (Malaysian contractor
operating system), built with Next.js 14 (App Router) + TypeScript +
Tailwind CSS, and wired directly to your live Supabase project so pricing
always matches what's actually in the app.

## What's inside

- **Copy & structure** follow the *Sell Like Crazy* (Sabri Suby) framework:
  a numbers-driven headline → problem agitation (WhatsApp chaos) → the
  "dream outcome" shown as your real 11-stage gated document trail →
  feature breakdown → an honest trust section (no fabricated testimonials)
  → live pricing → risk-reversal/guarantee → objection-handling FAQ →
  final call to action.
- **Live pricing**: `components/PricingSection.tsx` queries your
  `pricing_plans` table in Supabase directly (project `WorkTrace`,
  `fjzbgxooszxhqwyfgjsr`) using the public anon/publishable key. Row Level
  Security already restricts this to `is_active = true` rows, so it's safe
  to query from the browser or server. The page revalidates every 60
  seconds (ISR), so if you change a price or feature list in Supabase, the
  live site picks it up automatically — no redeploy needed.
- If Supabase is ever unreachable, the page falls back to a static
  snapshot of the same three plans (Free / Pro / Team) so the site never
  breaks.
- All "Mula Percuma" / "Naik Taraf" / "Log Masuk" buttons point at
  `https://app.worktrace.my/onboarding` and `/login`, matching the routes
  in your product doc's application map. Update these in `components/Nav.tsx`,
  `Hero.tsx`, `PricingCards.tsx`, and `FinalCTA.tsx` if your real domain
  differs.

## Design direction

Rather than a generic SaaS template, the page leans into the actual
subject: contractor paperwork. The background is a dark "workbench," and
each document (quotation, invoice, etc.) appears as a paper "docket" card,
including an animated approval-stamp moment in the hero and a numbered,
horizontally-scrolling 11-stage trail (justified because the workflow
really is a strict, gated sequence). Fonts are self-hosted via
`@fontsource` (Space Grotesk / IBM Plex Sans / IBM Plex Mono) so builds
never depend on reaching Google Fonts at build time.

## Running locally

```bash
npm install
cp .env.local.example .env.local   # already pre-filled with your public Supabase keys
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://fjzbgxooszxhqwyfgjsr.supabase.co` | Your WorkTrace project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | (pre-filled in `.env.local.example`) | Public anon key — safe for the browser. Only readable rows are `pricing_plans` where `is_active = true`. |

**Do not** put your `service_role` key anywhere in this project — it's a
static marketing site, it only ever needs read-only public access.

## Deploying to Vercel

**Option A — via the Vercel dashboard (easiest)**
1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no build settings to change.
4. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   (copy both from `.env.local.example`)
5. Click **Deploy**.

**Option B — via the Vercel CLI**
```bash
npm i -g vercel
cd worktrace-landing
vercel                 # first deploy, follow the prompts
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel --prod          # redeploy with env vars applied
```

After deploying, point your domain (e.g. `worktrace.my` or a
`landing.worktrace.my` subdomain) at the Vercel project under
**Settings → Domains**.

## Editing pricing

You don't need to touch this codebase to change prices or plan features —
just update rows in the `pricing_plans` table in your Supabase project
(via the Supabase dashboard, SQL, or your existing admin panel). The
landing page will reflect changes within 60 seconds.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css        Design tokens, paper/docket + perforation styling
components/
  Nav.tsx
  Hero.tsx
  StampTrail.tsx     Signature animated hero visual
  ProblemSection.tsx
  WorkflowSection.tsx  11-stage gated trail
  FeaturesGrid.tsx
  FounderNote.tsx
  PricingSection.tsx   Server component — fetches Supabase
  PricingCards.tsx     Client component — monthly/yearly toggle
  GuaranteeSection.tsx
  FAQSection.tsx
  FinalCTA.tsx
  Footer.tsx
lib/
  supabase.ts        Supabase client + typed fetch + static fallback
  useInView.ts        Scroll-reveal hook
```
