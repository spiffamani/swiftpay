import React, { useState } from "react";

type Job = {
  id: string;
  title: string;
  category: string;
  budget: number;
  description: string;
  postedBy: string;
  status: "open" | "in-progress" | "completed";
};

const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: "Build a Soroban Smart Contract for NFT Marketplace",
    category: "Development",
    budget: 500,
    description: "Need an experienced Rust developer to build and deploy a Soroban smart contract for an NFT marketplace on Stellar.",
    postedBy: "GBXY...1234",
    status: "open",
  },
  {
    id: "2",
    title: "Design a DeFi Dashboard UI",
    category: "Design",
    budget: 300,
    description: "Looking for a UI/UX designer to create a clean, modern dashboard for a DeFi platform on Stellar.",
    postedBy: "GABC...5678",
    status: "open",
  },
  {
    id: "3",
    title: "Write Technical Documentation for Stellar SDK",
    category: "Writing",
    budget: 150,
    description: "Need a technical writer to document our Stellar SDK integration and write developer guides.",
    postedBy: "GDEF...9012",
    status: "open",
  },
  {
    id: "4",
    title: "Integrate Freighter Wallet into React App",
    category: "Development",
    budget: 200,
    description: "Looking for a React developer to integrate Freighter wallet into our existing dApp.",
    postedBy: "GHIJ...3456",
    status: "open",
  },
  {
    id: "5",
    title: "Create Marketing Content for Stellar Project",
    category: "Marketing",
    budget: 100,
    description: "Need a content creator to write blog posts and social media content for our Stellar-based project.",
    postedBy: "GKLM...7890",
    status: "open",
  },
  {
    id: "6",
    title: "Build REST API for Stellar Payment Gateway",
    category: "Development",
    budget: 400,
    description: "Looking for a backend developer to build a REST API that integrates with Stellar payment infrastructure.",
    postedBy: "GNOP...1234",
    status: "open",
  },
];

const CATEGORIES = ["All", "Development", "Design", "Writing", "Marketing"];

export default function BrowseJobs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);

  const filtered = MOCK_JOBS.filter((job) => {
    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApply = (jobId: string) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Browse Jobs</h1>
      <p className="text-gray-400 mb-8">
        Find work and get paid instantly in USDC via Soroban escrow.
      </p>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
        />
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white border border-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Job Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No jobs found matching your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((job) => (
            <div
              key={job.id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:border-indigo-700 transition"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-semibold leading-snug">{job.title}</h2>
                <span className="bg-indigo-900 text-indigo-300 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                  {job.category}
                </span>
              </div>

              <p className="text-gray-400 text-sm flex-1">{job.description}</p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  By {job.postedBy}
                </span>
                <span className="text-green-400 font-semibold">
                  {job.budget} USDC
                </span>
              </div>

              <button
                onClick={() => handleApply(job.id)}
                disabled={appliedJobs.includes(job.id)}
                className={`w-full py-2 rounded-lg text-sm font-medium transition ${
                  appliedJobs.includes(job.id)
                    ? "bg-green-900 text-green-300 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white"
                }`}
              >
                {appliedJobs.includes(job.id) ? "✓ Applied" : "Apply Now"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}