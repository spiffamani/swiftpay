import React from "react";

type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  text?: string;
};

const SIZE_CLASSES = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export default function Spinner({ size = "md", text }: SpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${SIZE_CLASSES[size]} border-2 border-gray-700 border-t-indigo-500 rounded-full animate-spin`}
      />
      {text && <p className="text-gray-400 text-sm">{text}</p>}
    </div>
  );
}