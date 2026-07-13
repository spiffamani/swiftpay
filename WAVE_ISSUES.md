# SwiftPay — Wave Issues

Ready to paste into GitHub. Label each with `good first issue` and `Stellar Wave`.

---

## ISSUE 1 — [TRIVIAL] Add toast notifications for Apply Now button

**Labels:** `good first issue`, `Stellar Wave`, `frontend`
**Complexity:** Trivial — 100 points

**Summary:**
When a user clicks "Apply Now" on a job card in `frontend/src/pages/BrowseJobs.tsx`, show a toast notification confirming the application. Use the `sonner` package which is already available.

**Acceptance Criteria:**
- [ ] Install sonner: `npm install sonner`
- [ ] Add `<Toaster />` to `App.tsx`
- [ ] Show success toast: "Application submitted! The client will review your profile."
- [ ] Toast disappears after 3 seconds
- [ ] Styled to match dark theme

---

## ISSUE 2 — [TRIVIAL] Add character counter to Post Job description field

**Labels:** `good first issue`, `Stellar Wave`, `frontend`
**Complexity:** Trivial — 100 points

**Summary:**
Add a character counter below the description textarea in `frontend/src/pages/PostJob.tsx`. Show remaining characters out of a 500 character max.

**Acceptance Criteria:**
- [ ] Counter shows "X / 500 characters"
- [ ] Counter turns red when over 400 characters
- [ ] Form validation rejects descriptions over 500 characters
- [ ] Counter updates in real time as user types

---

## ISSUE 3 — [TRIVIAL] Add empty state illustration to Browse Jobs

**Labels:** `good first issue`, `Stellar Wave`, `frontend`
**Complexity:** Trivial — 100 points

**Summary:**
When no jobs match the search/filter in `BrowseJobs.tsx`, show a better empty state with an illustration and helpful message instead of plain text.

**Acceptance Criteria:**
- [ ] Empty state has an emoji/icon
- [ ] Message: "No jobs found. Try a different category or search term."
- [ ] "Clear filters" button that resets search and category
- [ ] Styled consistently with the rest of the app

---

## ISSUE 4 — [MEDIUM] Build Job Detail page

**Labels:** `Stellar Wave`, `frontend`
**Complexity:** Medium — 150 points

**Summary:**
Create a new page at `frontend/src/pages/JobDetail.tsx` that shows the full details of a job when a user clicks on a job card. Add a route at `/jobs/:id`.

**Acceptance Criteria:**
- [ ] New file `frontend/src/pages/JobDetail.tsx`
- [ ] Route added in `App.tsx`: `/jobs/:id`
- [ ] JobCard links to `/jobs/:id` on click
- [ ] Page shows: title, category, full description, budget, deadline, poster address
- [ ] "Apply for this Job" button
- [ ] Back button to return to Browse Jobs
- [ ] Mobile responsive

---

## ISSUE 5 — [MEDIUM] Add Freelancer Profile page

**Labels:** `Stellar Wave`, `frontend`
**Complexity:** Medium — 150 points

**Summary:**
Create a freelancer profile page at `frontend/src/pages/Profile.tsx` that shows a freelancer's wallet address, completed jobs, earned USDC, and skills.

**Acceptance Criteria:**
- [ ] New file `frontend/src/pages/Profile.tsx`
- [ ] Route added: `/profile/:address`
- [ ] Shows: wallet address (shortened), total earned, completed jobs count, skills tags
- [ ] Edit profile button (UI only, no backend needed)
- [ ] Mobile responsive

---

## ISSUE 6 — [MEDIUM] Add network mismatch warning banner

**Labels:** `Stellar Wave`, `frontend`
**Complexity:** Medium — 150 points

**Summary:**
Use the `useFreighter` hook in `frontend/src/hooks/useFreighter.ts` to detect if the user's Freighter wallet is connected to the wrong network (not Testnet). Show a warning banner at the top of the page.

**Acceptance Criteria:**
- [ ] Banner appears below Navbar when network !== "TESTNET"
- [ ] Message: "Wrong network detected. Please switch to Stellar Testnet in Freighter."
- [ ] Banner is dismissible
- [ ] Yellow/warning color scheme
- [ ] Only shows when wallet is connected

---

## ISSUE 7 — [HIGH] Integrate escrow contract with Post Job form

**Labels:** `Stellar Wave`, `contracts`, `frontend`
**Complexity:** High — 200 points

**Summary:**
Connect the Post Job form (`PostJob.tsx`) to the Soroban escrow contract (`contracts/src/escrow.rs`). When a client posts a job and hires a freelancer, call the contract's `initialize` function to lock USDC in escrow.

**Acceptance Criteria:**
- [ ] New utility file `frontend/src/utils/contractClient.ts`
- [ ] `initializeEscrow(client, freelancer, token, amount)` function implemented
- [ ] Uses `@stellar/stellar-sdk` to build and submit transaction
- [ ] Post Job form calls this when "Hire Freelancer" is clicked
- [ ] Loading state shown during transaction
- [ ] Success/error feedback shown to user
- [ ] Works on Stellar Testnet

---

## ISSUE 8 — [HIGH] Add dispute resolution UI

**Labels:** `Stellar Wave`, `frontend`
**Complexity:** High — 200 points

**Summary:**
Build a dispute resolution flow in the Dashboard. When a job is `in-progress`, both client and freelancer should be able to raise a dispute. Add a modal that explains the process and calls the dispute contract.

**Acceptance Criteria:**
- [ ] "Raise Dispute" button visible on in-progress jobs in Dashboard
- [ ] Modal explains: "A neutral resolver will split the funds based on evidence provided"
- [ ] Dispute status shown as a new badge: "disputed"
- [ ] Integrates with `contracts/src/escrow.rs` `refund` function
- [ ] Works on Stellar Testnet