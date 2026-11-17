# StartupHub 🚀

> A Product Hunt-style discovery and matchmaking platform for early-stage startups, visionary founders, and angel syndicates. Built as a full-stack college capstone MVP.

---

## 1. Problem & Vision
- **Problem:** Early-stage founders struggle to get distribution, early feedback, and investor eyes without preexisting networks. Meanwhile, angel investors spend hours sifting through unstructured pitches.
- **Vision:** StartupHub democratizes early dealflow discovery by offering a curated, searchable directory where products can be surfaced, bookmarked, and connected with capital.

---

## 2. Tech Stack

### Current MVP:
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Dark Mode Native)
- **State Management:** React Context API (`AppContext.js`) + `localStorage` persistence
- **Data Source:** Static in-memory mock datasets (`/data/startups.js` & `/data/investors.js`)
- **Icons & UI:** Native SVG vectors (Zero external package dependencies)

### Future Production Architecture:
- **Backend:** Next.js API Routes / Route Handlers or Node.js Express microservice
- **Database:** PostgreSQL with Prisma ORM (or Supabase / MongoDB)
- **Auth:** NextAuth.js (Auth.js) with OAuth providers (GitHub, Google, LinkedIn)
- **Deployment:** Vercel (Edge network + CI/CD)

---

## 3. Key MVP Features
- 🔍 **Real-Time Search:** Instant multi-parameter search matching names, taglines, and sectors.
- 🏷️ **Categorical Filters:** Filter dynamically by Industry (`DevTools`, `AI`, `Fintech`) and Batch (`YC W24`, `Techstars 23`).
- 📊 **Smart Sorting:** Sort startups by total funding raised or newest founded date.
- 💾 **Bookmarks System:** Save favorite startups to your Founder Dashboard (persisted across browser reloads via `localStorage`).
- 👤 **Founder Dashboard:** Manage startup profile status, monitor saved startups, and view mock engagement analytics.
- 🤝 **Investor Syndicate:** Directory of active angels and micro-VCs with check sizes and sector tags.

---

## 4. Development Milestones

- [x] **Milestone 1: Setup & Foundations**
  - Scaffold Next.js App Router and configure Tailwind CSS.
  - Define data schemas in `/data/startups.js` and `/data/investors.js`.
- [x] **Milestone 2: Component & Layout Architecture**
  - Build atomic components (`Navbar`, `Footer`, `StartupCard`, `InvestorCard`, `SearchBar`, `Filters`).
  - Wire up global `AppContext` for favorites and search state.
- [x] **Milestone 3: Route Pages Implementation**
  - Landing page (`/`), Explore page (`/startups`), Detail page (`/startups/[id]`), Investor directory (`/investors`), Dashboard (`/dashboard`), and Mock Auth (`/login`, `/signup`).
- [ ] **Milestone 4: Future Backend & Production Database**
  - Connect PostgreSQL database with Prisma schema for Startups, Users, and Bookmarks.
  - Implement NextAuth with session tokens.

---

## 5. Suggested GitHub Issues & Task Breakdown

1. `feat(data)`: Setup structured mock datasets for startups and investor syndicates.
2. `feat(context)`: Implement AppContext for search, filter state, and localStorage bookmark synchronization.
3. `feat(ui-components)`: Build accessible, dark-mode cards and filter toolbar.
4. `feat(pages)`: Construct dynamic route `/startups/[id]` with responsive detail views.
5. `feat(dashboard)`: Create Founder Dashboard displaying profile status and favorited startups.
6. `style(theme)`: Refine dark mode gradients, hover interactions, and responsive mobile nav.

---

## 6. Conventional Commit Message Guide

- `feat: implement startup search and multi-tag filtering`
- `feat: add localStorage persistence for startup bookmarks`
- `style: apply dark mode aesthetic with purple glow gradients`
- `fix: resolve event bubbling on favorite bookmark button`
- `docs: write project README and local demo presentation guide`

---

## 7. Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/your-username/startuphub.git

# Enter project directory
cd startuphub

# Install dependencies
npm install

# Start local development server
npm run dev