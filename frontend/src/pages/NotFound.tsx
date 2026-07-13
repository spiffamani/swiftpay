import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="text-8xl mb-6">🔍</div>
      <h1 className="text-4xl font-bold mb-4">404 — Page Not Found</h1>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you're looking for doesn't exist. It may have been moved or deleted.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-medium transition"
      >
        Back to Home
      </Link>
    </div>
  );
}