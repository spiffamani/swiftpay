# SwiftPay 

**Decentralized Freelance Payments on Stellar**

 **Live Website:** https://spiffamani.github.io/swiftpay  
 **GitHub:** https://github.com/spiffamani/swiftpay  
 **Part of the Stellar Wave Program on Drips**

> No middlemen. No delays. No hidden fees. Just work, deliver, get paid in USDC.

## The Problem

Freelancers worldwide face the same frustrations:
- Payment platforms charge 5–20% fees
- Payments take days or weeks to process
- No protection against clients who don't pay
- Clients have no protection against freelancers who don't deliver

## The Solution

SwiftPay uses **Soroban smart contracts** to hold payment in escrow while work is completed. When both parties are satisfied, USDC is released instantly. If there's a dispute, a transparent resolution process kicks in — no platform deciding who wins.
---
## How It Works

```
1. Client posts a job with a USDC budget
        ↓
2. Freelancer applies and gets hired
        ↓
3. Client locks USDC in Soroban escrow contract
        ↓
4. Freelancer completes the work
        ↓
5. Client approves → USDC released instantly to freelancer
        ↓
   (If dispute → on-chain resolution process)
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + TypeScript + Tailwind CSS |
| Smart Contracts | Rust + Soroban (Stellar) |
| Payments | USDC on Stellar network |
| Wallet | Freighter Wallet integration |

## Project Structure

```
swiftpay/
├── frontend/                  # React + TypeScript frontend
│   └── src/
│       ├── components/        # Reusable UI components
│       ├── pages/             # App pages
│       ├── hooks/             # Custom React hooks
│       └── utils/             # Stellar/Soroban helpers
├── contracts/                 # Rust Soroban smart contracts
│   └── src/
│       ├── escrow.rs          # Escrow contract
│       ├── payment.rs         # Payment release logic
│       └── dispute.rs         # Dispute resolution
├── docs/                      # Documentation
└── .github/ISSUE_TEMPLATE/    # Issue templates for contributors
```
---

## Roadmap

### Phase 1 — Foundation (Current)
- [ ] Project setup and architecture
- [ ] Landing page
- [ ] Wallet connection (Freighter)
- [ ] Basic escrow smart contract

### Phase 2 — Core Features
- [ ] Job posting and browsing
- [ ] Freelancer profiles
- [ ] Escrow payment flow
- [ ] Payment release and confirmation

### Phase 3 — Advanced
- [ ] Dispute resolution system
- [ ] Ratings and reviews
- [ ] Email/in-app notifications
- [ ] Mobile responsive design

---

## Contributing

This project is part of the [Stellar Wave Program](https://drips.network/wave/stellar) on Drips. Contributors earn **USDC rewards** for merged pull requests!

See [CONTRIBUTING.md](./CONTRIBUTING.md) to get started. No experience with blockchain required for frontend issues!
---

## License

MIT