import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    setConnecting(true);
    setError(null);
    try {
      // Check if Freighter is installed
      if (!window.freighter) {
        setError("Freighter not installed. Please install it from freighter.app");
        setConnecting(false);
        return;
      }
      const { isConnected } = await window.freighter.isConnected();
      if (!isConnected) {
        await window.freighter.requestAccess();
      }
      const { address } = await window.freighter.getAddress();
      setWalletAddress(address);
    } catch (err: any) {
      setError(err?.message || "Failed to connect wallet");
    } finally {
      setConnecting(false);
    }
  };

  const disconnect = () => {
    setWalletAddress(null);
  };

  const shortAddress = walletAddress
    ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`
    : null;

  return (
    <nav className="border-b border-gray-800 px-6 py-4 flex items-center justify-between bg-gray-950 sticky top-0 z-50">
      <Link to="/" className="text-xl font-bold text-white flex items-center gap-2">
        SwiftPay <span>💸</span>
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/browse" className="text-gray-400 hover:text-white transition text-sm">
          Browse Jobs
        </Link>
        <Link to="/post-job" className="text-gray-400 hover:text-white transition text-sm">
          Post a Job
        </Link>
        <Link to="/dashboard" className="text-gray-400 hover:text-white transition text-sm">
          Dashboard
        </Link>

        {error && (
          <span className="text-red-400 text-xs max-w-48">{error}</span>
        )}

        {walletAddress ? (
          <div className="flex items-center gap-2">
            <span className="bg-indigo-900 text-indigo-300 px-3 py-1 rounded-full text-sm">
              {shortAddress}
            </span>
            <button
              onClick={disconnect}
              className="text-gray-400 hover:text-red-400 text-xs transition"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            disabled={connecting}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 px-4 py-2 rounded-lg text-sm font-medium transition text-white"
          >
            {connecting ? "Connecting..." : "Connect Wallet"}
          </button>
        )}
      </div>
    </nav>
  );
}