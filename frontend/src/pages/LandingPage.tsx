import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-center">
      {/* Hero */}
      <div className="mb-16">
        <span className="bg-indigo-900 text-indigo-300 text-sm px-3 py-1 rounded-full mb-6 inline-block">
          Built on Stellar · Powered by Soroban
        </span>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Get Paid as a Freelancer.{" "}
          <span className="text-indigo-400">Instantly. Trustlessly.</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
          SwiftPay uses smart contracts to hold payment in escrow while you work.
          No middlemen, no delays, no 20% platform fees. Just deliver and get paid in USDC.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/browse"
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-medium transition"
          >
            Find Work
          </Link>
          <Link
            to="/post-job"
            className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg font-medium transition"
          >
            Hire a Freelancer
          </Link>
        </div>
      </div>

      {/* How it works */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-20">
        {[
          {
            step: "01",
            title: "Client Posts Job",
            desc: "Client posts a job with a USDC budget and locks funds in a Soroban escrow contract.",
          },
          {
            step: "02",
            title: "Freelancer Delivers",
            desc: "Freelancer applies, gets hired, completes the work, and submits for review.",
          },
          {
            step: "03",
            title: "Instant Payment",
            desc: "Client approves the work and USDC is released instantly to the freelancer's wallet.",
          },
        ].map((item) => (
          <div key={item.step} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <span className="text-indigo-400 font-mono text-sm">{item.step}</span>
            <h3 className="text-lg font-semibold mt-2 mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        {[
          { value: "0%", label: "Platform Fees" },
          { value: "USDC", label: "Stable Payments" },
          { value: "< 5s", label: "Settlement Time" },
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="text-3xl font-bold text-indigo-400">{stat.value}</div>
            <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </main>
  );
}