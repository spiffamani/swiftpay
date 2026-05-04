import { Link } from "react-router-dom";
import { useState } from "react";

// TODO: Replace with real Freighter wallet connection (see Issue #3)
export default function Navbar() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    // Placeholder — Freighter wallet integration coming in Issue #3
    setWalletAddress("G...placeholder");
  };

  return (
    <nav className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-indigo-400">
        SwiftPay 💸
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/browse" className="text-gray-400 hover:text-white transition">
          Browse Jobs
        </Link>
        <Link to="/post-job" className="text-gray-400 hover:text-white transition">
          Post a Job
        </Link>
        <Link to="/dashboard" className="text-gray-400 hover:text-white transition">
          Dashboard
        </Link>

        {walletAddress ? (
          <span className="bg-indigo-900 text-indigo-300 px-3 py-1 rounded-full text-sm">
            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </span>
        ) : (
          <button
            onClick={connectWallet}
            className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
}