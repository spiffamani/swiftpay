import React, { useState } from "react";

type Job = {
  id: string;
  title: string;
  budget: number;
  status: "open" | "in-progress" | "completed" | "applied";
  category: string;
  role: "client" | "freelancer";
  counterparty: string;
};

const MOCK_DASHBOARD: Job[] = [
  {
    id: "1",
    title: "Build a Soroban Smart Contract for NFT Marketplace",
    budget: 500,
    status: "in-progress",
    category: "Development",
    role: "client",
    counterparty: "GFRE...7890",
  },
  {
    id: "2",
    title: "Design a DeFi Dashboard UI",
    budget: 300,
    status: "completed",
    category: "Design",
    role: "client",
    counterparty: "GDES...1234",
  },
  {
    id: "3",
    title: "Integrate Freighter Wallet into React App",
    budget: 200,
    status: "applied",
    category: "Development",
    role: "freelancer",
    counterparty: "GCLI...5678",
  },
  {
    id: "4",
    title: "Write Technical Documentation for Stellar SDK",
    budget: 150,
    status: "in-progress",
    category: "Writing",
    role: "freelancer",
    counterparty: "GCLI...9012",
  },
];

const STATUS_STYLES: Record<string, string> = {
  open: "bg-blue-900 text-blue-300",
  "in-progress": "bg-yellow-900 text-yellow-300",
  completed: "bg-green-900 text-green-300",
  applied: "bg-purple-900 text-purple-300",
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"all" | "client" | "freelancer">("all");
  const [releasingId, setReleasingId] = useState<string | null>(null);
  const [released, setReleased] = useState<string[]>([]);

  const filtered = MOCK_DASHBOARD.filter(
    (job) => activeTab === "all" || job.role === activeTab
  );

  const handleRelease = (jobId: string) => {
    setReleasingId(jobId);
    setTimeout(() => {
      setReleased([...released, jobId]);
      setReleasingId(null);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-400 mb-8">
        Track your jobs as a client and your work as a freelancer.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Total Earned", value: "350 USDC", color: "text-green-400" },
          { label: "Active Jobs", value: "2", color: "text-yellow-400" },
          { label: "Completed", value: "1", color: "text-blue-400" },
          { label: "Applied", value: "1", color: "text-purple-400" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center"
          >
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(["all", "client", "freelancer"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition ${
              activeTab === tab
                ? "bg-indigo-600 text-white"
                : "bg-gray-900 text-gray-400 hover:text-white border border-gray-700"
            }`}
          >
            {tab === "all" ? "All