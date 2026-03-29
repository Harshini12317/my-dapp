import { WalletButton } from '@/components/wallet-button';
import { ERC721InteractionPanel } from '@/lib/erc721-stylus/src/ERC721InteractionPanel';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="container mx-auto px-5 py-10 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">TechiesApp: NFT dApp Toolkit</h1>
          <p className="text-base sm:text-lg text-slate-300 mb-8">
            A modern Web3 platform for ERC-721 minting, transfers, approvals, and on-chain flow control.
            Connect wallets, switch networks, and interact with your Stylus/Rust contract in real time.
          </p>

          <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:gap-4">
            <WalletButton />
            <a href="#interaction-panel" className="inline-block rounded-lg border border-violet-500 bg-violet-500/25 px-4 py-2 text-sm font-semibold text-violet-100 hover:bg-violet-500/40">
              Open Interactions
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <article className="rounded-xl border border-slate-700 p-4 bg-slate-900/40">
              <h3 className="text-sm font-semibold text-violet-300">Wallet + Network</h3>
              <p className="text-xs text-slate-300 mt-1">RainbowKit + Wagmi + viem. Auto-chain switching and safe connection checks.</p>
            </article>
            <article className="rounded-xl border border-slate-700 p-4 bg-slate-900/40">
              <h3 className="text-sm font-semibold text-violet-300">ERC721 Controls</h3>
              <p className="text-xs text-slate-300 mt-1">Mint, safe mint, transfer, burn, approve, and read operations all in one panel.</p>
            </article>
            <article className="rounded-xl border border-slate-700 p-4 bg-slate-900/40">
              <h3 className="text-sm font-semibold text-violet-300">Multiple Chains</h3>
              <p className="text-xs text-slate-300 mt-1">Supports Arbitrum Sepolia, Arbitrum One, Superposition, and Robinhood testnets.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="interaction-panel" className="container mx-auto px-5 pb-16">
        <div className="max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">ERC-721 Interaction Panel</h2>
          <p className="text-sm text-slate-300 mb-6">Switch networks, select your contract, and manage token operations safely. Includes interactive status notifications and explorer links.</p>
          <ERC721InteractionPanel />
        </div>
      </section>
    </main>
  );
}