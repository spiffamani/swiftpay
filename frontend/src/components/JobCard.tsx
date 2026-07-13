import React from "react";

type JobCardProps = {
  id: string;
  title: string;
  category: string;
  budget: number;
  description: string;
  postedBy: string;
  status: "open" | "in-progress" | "completed";
  onApply?: (id: string) => void;
  applied?: boolean;
};

const CATEGORY_COLORS: Record<string, string> = {
  Development: "bg-blue-900 text-blue-300",
  Design: "bg-purple-900 text-purple-300",
  Writing: "bg-yellow-900 text-yellow-300",
  Marketing: "bg-green-900 text-green-300",
  Other: "bg-gray-800 text-gray-300",
};

export default function JobCard({
  id,
  title,
  category,
  budget,
  description,
  postedBy,
  status,
  onApply,
  applied = false,
}: JobCardProps) {
  const shortAddress = postedBy.length > 10
    ? `${postedBy.slice(0, 4)}...${postedBy.slice(-4)}`
    : postedBy;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:border-indigo-700 transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-base font-semibold leading-snug text-white">
          {title}
        </h2>
        <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap font-medium ${CATEGORY_COLORS[category] || CATEGORY_COLORS.Other}`}>
          {category}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm flex-1 leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-800">
        <span className="text-gray-500 text-xs">By {shortAddress}</span>
        <span className="text-green-400 font-semibold">{budget} USDC</span>
      </div>

      {/* Apply Button */}
      {status === "open" && onApply && (
        <button
          onClick={() => onApply(id)}
          disabled={applied}
          className={`w-full py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            applied
              ? "bg-green-900 text-green-300 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-500/20"
          }`}
        >
          {applied ? "✓ Applied" : "Apply Now"}
        </button>
      )}

      {status !== "open" && (
        <div className={`w-full py-2 rounded-lg text-sm font-medium text-center ${
          status === "in-progress"
            ? "bg-yellow-900 text-yellow-300"
            : "bg-green-900 text-green-300"
        }`}>
          {status === "in-progress" ? "⚡ In Progress" : "✓ Completed"}
        </div>
      )}
    </div>
  );
}