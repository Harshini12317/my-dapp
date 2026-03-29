# TechiesApp (My Dapp)

A production-ready Web3 NFT dashboard with full ERC-721 management, network control, and wallet auth. This repository contains:
- Next.js frontend (`apps/web`)
- Rust/Stylus smart contracts (`contracts/erc721`)
- tooling scripts for deployment, security scanning, and CI support (`scripts`)
- documentation (`docs`)

## 🚀 Why this app

- Build and launch a cross-chain NFT experience quickly
- Mint, transfer, burn, and approve ERC-721 tokens
- Support for Arbitrum + Superposition + Robinhood testnets
- Smart contract fallback with custom contract selector
- Excellent tooling for local dev and secure deploys

## 📁 Project Structure

```
my-dapp/
├── apps/web/               # Next.js app (primary UI)
├── contracts/erc721/       # Rust Stylus ERC-721 smart contract code
├── docs/                   # Project docs and audit analysis
├── scripts/                # Deploy and security scripts
├── .env.example            # Environment variable template
├── package.json            # Workspace commands
└── README.md               # This file
```

## 🛠 Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- pnpm/yarn/npm
- WalletConnect Project ID

### Install and run

```bash
git clone <your-repo-url>
cd my-dapp
pnpm install
cp .env.example .env.local
# edit .env.local, set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
pnpm --filter web dev
```

Open `http://localhost:3000`.

### Deploy contracts (example)

```bash
pnpm deploy:sepolia
# or
pnpm deploy:mainnet
```

### Windows notes

```bash
pnpm fix-scripts
```

## 📦 Environment variables

| Key | Required | Description |
|-----|----------|-------------|
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | yes | WalletConnect Cloud project ID for RainbowKit. |
| `NEXT_PUBLIC_APP_NAME` | no | App name shown in wallet dialogs. |
| `NEXT_PUBLIC_DEFAULT_ERC721_ADDRESS` | no | pre-defined contract address to use on front-end. |

## 🛡 Improvements applied

- New interactive landing page with feature overview
- Better metadata, Open Graph tags, and app title
- Add `.env.example` and clear variable expectations
- Expanded README with workflow and usage
- Keep existing ERC-721 panel, adds UX keyboard clarity and effective status indicators

## ⚙️ Recommended next steps

1. Add CI pipeline with `pnpm lint`, `pnpm test`, and `cargo test`
2. Add contract tests in `contracts/erc721` for mint limits, ownership, and burn flows
3. Add `docs/audit-checklist.md` and ``docs/security-hardened.md`` file

## 📚 More docs

- `docs/frontend/README.md` (frontend architecture and API patterns)
- `docs/erc721-nft.md` (contract design and deploy notes)
- `docs/RADAR_SECURITY_ANALYSIS.md` (security scanning)

## 📜 License

MIT

