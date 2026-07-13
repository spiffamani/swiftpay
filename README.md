# SwiftPay 💸

**Decentralized Freelance Payments on Stellar**

🌐 **Live Website:** https://spiffamani.github.io/swiftpay  
⭐ **Part of the Stellar Wave Program on Drips**

> No middlemen. No delays. No hidden fees. Just work, deliver, get paid in USDC.

---

## The Problem

Freelancers worldwide face the same frustrations:
- Payment platforms charge 5–20% fees
- Payments take days or weeks to process
- No protection against clients who don't pay
- Clients have no protection against freelancers who don't deliver

## The Solution

SwiftPay uses **Soroban smart contracts** to hold payment in escrow while work is completed. When both parties are satisfied, USDC is released instantly. No platform deciding who wins.

---

## How It Works

```
1. Client posts a job with a USDC budget
        ↓
2. Client locks USDC in Soroban escrow contract
        ↓
3. Freelancer applies and gets hired
        ↓
4. Freelancer completes the work
        ↓
5. Client approves → USDC released instantly
        ↓
   (If dispute → on-chain resolution process)
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + TypeScript + Tailwind CSS |
| Smart Contracts | Rust + Soroban (Stellar) |
| Payments | USDC on Stellar network |
| Wallet | Freighter Wallet integration |
| Build Tool | Vite |

---

## Project Structure

```
swiftpay/
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── JobCard.tsx       # Reusable job listing card
│       │   ├── Navbar.tsx        # Navigation with wallet connect
│       │   └── Spinner.tsx       # Loading spinner
│       ├── hooks/
│       │   └── useFreighter.ts   # Freighter wallet hook
│       ├── pages/
│       │   ├── LandingPage.tsx   # Hero + how it works
│       │   ├── BrowseJobs.tsx    # Job listings + search + filter
│       │   ├── PostJob.tsx       # Post a job form
│       │   ├── Dashboard.tsx     # Client + freelancer dashboard
│       │   └── NotFound.tsx      # 404 page
│       └── types/
│           └── freighter.d.ts    # Freighter type declarations
├── contracts/
│   └── src/
│       ├── escrow.rs             # Soroban escrow contract
│       └── lib.rs
└── docs/
    └── screenshots/              # App screenshots
```

---

## Roadmap

### Phase 1 — Foundation ✅
- [x] Landing page with hero section
- [x] Browse jobs with search and filter
- [x] Post a job form with validation
- [x] Dashboard with job tracking
- [x] Freighter wallet connection
- [x] Soroban escrow contract skeleton

### Phase 2 — Core Features (In Progress)
- [ ] Job detail page
- [ ] Real Soroban escrow integration
- [ ] Freelancer profile pages
- [ ] Real-time notifications
- [ ] On-chain payment release

### Phase 3 — Advanced
- [ ] Dispute resolution system
- [ ] Ratings and reviews
- [ ] Mobile responsive design
- [ ] Mainnet deployment

---

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at `http://localhost:5173`

### Smart Contracts
```bash
cd contracts
cargo build --target wasm32-unknown-unknown --release
```

---

## Contributing

This project is part of the [Stellar Wave Program](https://drips.network/wave/stellar) on Drips. Contributors earn **USDC rewards** for merged pull requests!

See [CONTRIBUTING.md](./CONTRIBUTING.md) to get started. No blockchain experience required for frontend issues!

---