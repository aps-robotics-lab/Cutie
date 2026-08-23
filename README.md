# APS LBS RoboKriti 2026 — Production Redesign

A responsive, animated robotics championship site inspired by the energy of TechKriti and the structured/product feel of CodeBots, with an original RoboKriti visual identity.

## Stack
- Frontend: HTML/CSS/vanilla JS
- Backend: Cloudflare Worker
- Database: Cloudflare D1
- Auth: private Author portal with email/password and signed sessions
- Email: optional Resend adapter through Worker secrets
- Hosting: GitHub + Cloudflare Pages/Workers

## Public pages
- index.html
- events/robo-race.html
- events/robo-soccer.html
- events/robo-tug-of-war.html
- events/robo-war.html
- registration.html
- help.html
- about.html

## Private
- author/login.html
- author/dashboard.html

The Author dashboard is not linked from public navigation. Access is protected server-side; hiding a URL alone is not considered security.

## Setup
1. Create a Cloudflare D1 database.
2. Run `database/schema.sql` against it.
3. Deploy `worker/worker.js` as a Cloudflare Worker and bind the D1 database as `DB`.
4. Set Worker secrets: `SESSION_SECRET`, `RESEND_API_KEY`, `MAIL_FROM`.
5. Generate an author password hash using `scripts/hash-password.mjs`, then insert the author row into D1.
6. Set `API_BASE` in `js/config.js` to the Worker URL if the API is on a different origin. If served from the same custom domain, leave it empty.
7. Deploy the frontend to GitHub Pages or Cloudflare Pages.
8. Point `robokriti.site` to the deployment.

## Important
Do not put database credentials, session secrets, or email API keys in frontend files.
