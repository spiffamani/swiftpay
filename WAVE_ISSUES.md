# SwiftPay — Wave Issues

Ready to paste into GitHub. Label each with `good first issue` and `Stellar Wave`.

---

## ISSUE 1 — [TRIVIAL] Build the landing page hero section UI

**Labels:** `good first issue`, `Stellar Wave`, `frontend`
**Complexity:** Trivial — 100 points

**Summary:**
Improve the existing landing page hero section in `frontend/src/pages/LandingPage.tsx`. The current version is basic — make it visually polished with proper spacing, gradient text, and a clean call-to-action section.

**Acceptance Criteria:**
- [ ] Hero headline uses gradient text (indigo to purple)
- [ ] "Find Work" and "Hire a Freelancer" buttons are clearly styled
- [ ] Layout is responsive on mobile and desktop
- [ ] Tailwind CSS used throughout (no custom CSS files)

---

## ISSUE 2 — [TRIVIAL] Create a reusable JobCard component

**Labels:** `good first issue`, `Stellar Wave`, `frontend`
**Complexity:** Trivial — 100 points

**Summary:**
Create a reusable `JobCard` component in `frontend/src/components/JobCard.tsx` that displays a job listing. It will be used on the Browse Jobs page.

**Props it should accept:**
```typescript
{
  title: string;
  budget: number;       // in USDC
  category: string;
  postedBy: string;     // wallet address (shortened)
  description: string;
}
```

**Acceptance Criteria:**
- [ ] Component created at `frontend/src/components/JobCard.tsx`
- [ ] Displays all props cleanly
- [ ] Budget shown as "X USDC"
- [ ] Wallet address shortened (first 4 + last 4 chars)
- [ ] Styled with Tailwind CSS

---

## ISSUE 3 — [MEDIUM] Integrate Freighter Wallet connection

**Labels:** `Stellar Wave`, `frontend`
**Complexity:** Medium — 150 points

**Summary:**
Implement real Freighter wallet connection in `frontend/src/components/Navbar.tsx`. Currently the connect button is a placeholder. Use the `@stellar/freighter-api` package (already in package.json) to connect a real Stellar wallet.

**Expected behaviour:**
- User clicks "Connect Wallet"
- Freighter browser extension opens for approval
- On success, navbar shows shortened wallet address
- On error, shows a friendly error message

**Acceptance Criteria:**
- [ ] Uses `@stellar/freighter-api` — `isConnected()`, `getPublicKey()`
- [ ] Handles case where Freighter is not installed (show install link)
- [ ] Wallet address stored in React state
- [ ] Address displayed as `GABC...XYZ` format

---

## ISSUE 4 — [MEDIUM] Build the Post a Job form

**Labels:** `Stellar Wave`, `frontend`
**Complexity:** Medium — 150 points

**Summary:**
Implement the job posting form in `frontend/src/pages/PostJob.tsx`. Currently a placeholder. Build a form that collects job details from the client.

**Form fields:**
- Job title (text input)
- Category (dropdown: Design, Development, Writing, Marketing, Other)
- Description (textarea)
- Budget in USDC (number input)
- Deadline (date picker)

**Acceptance Criteria:**
- [ ] All fields present and validated (no empty submission)
- [ ] Budget must be a positive number
- [ ] On submit, logs form data to console (blockchain integration is a separate issue)
- [ ] Styled with Tailwind CSS
- [ ] Mobile responsive

---

## ISSUE 5 — [MEDIUM] Build the Browse Jobs page with mock data

**Labels:** `Stellar Wave`, `frontend`
**Complexity:** Medium — 150 points

**Summary:**
Implement `frontend/src/pages/BrowseJobs.tsx` using the `JobCard` component (Issue #2). Use mock data for now — real blockchain data comes later.

**Acceptance Criteria:**
- [ ] Page renders a grid of at least 6 mock job listings using `JobCard`
- [ ] Filter bar at top with category filter (All, Design, Dev, Writing)
- [ ] Filtering works client-side
- [ ] Empty state shown when no jobs match filter
- [ ] Mobile responsive grid (1 col mobile, 2 col tablet, 3 col desktop)

---

## ISSUE 6 — [HIGH] Implement escrow contract tests

**Labels:** `Stellar Wave`, `contracts`
**Complexity:** High — 200 points

**Summary:**
Write comprehensive tests for the escrow contract in `contracts/src/escrow.rs` using the Soroban test utilities.

**Tests to cover:**
- Successful escrow initialization
- Payment release by client
- Refund flow
- Unauthorized release attempt (should fail)
- Double release attempt (should fail)

**Acceptance Criteria:**
- [ ] All 5 test cases implemented
- [ ] Tests use `soroban-sdk` testutils
- [ ] All tests pass with `cargo test`
- [ ] Each test has a clear name and comment explaining what it checks

---

## ISSUE 7 — [HIGH] Implement dispute contract

**Labels:** `Stellar Wave`, `contracts`
**Complexity:** High — 200 points

**Summary:**
Create a new file `contracts/src/dispute.rs` implementing a basic dispute resolution system. When a dispute is raised, a third-party resolver address (set at initialization) can split the funds between client and freelancer.

**Functions needed:**
- `raise_dispute(env)` — called by either party
- `resolve_dispute(env, client_percent: u32, freelancer_percent: u32)` — called by resolver
- `get_dispute_status(env)` — returns current status

**Acceptance Criteria:**
- [ ] File created at `contracts/src/dispute.rs`
- [ ] Registered in `contracts/src/lib.rs`
- [ ] Only resolver address can call `resolve_dispute`
- [ ] Percentages must add up to 100
- [ ] At least 3 tests written
- [ ] Added to README contracts section