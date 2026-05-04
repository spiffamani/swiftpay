# Contributing to SwiftPay

Welcome! SwiftPay is part of the **Stellar Wave Program** on [Drips](https://drips.network/wave/stellar). Contributors earn **USDC rewards** for every merged pull request during an active Wave cycle.

---

## Two Ways to Contribute

### 🎨 Frontend (React + TypeScript)
No blockchain experience needed! If you know React, you can contribute.
- UI components
- Pages and routing
- Wallet connection
- Responsive design

### ⚙️ Smart Contracts (Rust + Soroban)
If you know Rust and want to learn Soroban smart contracts.
- Escrow contract logic
- Payment release
- Dispute resolution

---

## How to Earn Rewards via Drips Wave

1. Go to the [Stellar Wave Program](https://drips.network/wave/stellar) on Drips
2. Find SwiftPay issues labeled **Stellar Wave**
3. Click **Apply** on the issue you want
4. Wait to be assigned — **do not start coding before assignment**
5. Fork the repo, build the feature, open a PR
6. Once merged, you earn points and USDC rewards!

---

## Local Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at `http://localhost:5173`

### Smart Contracts
```bash
# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install Stellar CLI
cargo install --locked stellar-cli

# Build contracts
cd contracts
cargo build --target wasm32-unknown-unknown --release
```

---

## Pull Request Guidelines

- Keep PRs focused — one issue per PR
- Include a short description of what you changed and why
- Make sure the app still runs after your changes
- For contracts: include tests for any new logic
- Screenshots welcome for UI changes

## PR Checklist

- [ ] My changes are scoped to one issue
- [ ] I haven't broken any existing functionality
- [ ] I've added comments where the code isn't obvious
- [ ] For contracts: tests pass with `cargo test`
- [ ] For frontend: app runs without errors

---

## Need Help?

Open a GitHub Discussion or comment on the issue you're working on. We're a friendly project — questions are always welcome!