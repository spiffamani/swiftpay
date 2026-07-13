import React, { useState } from "react";

const CATEGORIES = ["Development", "Design", "Writing", "Marketing", "Other"];

type JobForm = {
  title: string;
  category: string;
  description: string;
  budget: string;
  deadline: string;
};

const EMPTY_FORM: JobForm = {
  title: "",
  category: "Development",
  description: "",
  budget: "",
  deadline: "",
};

export default function PostJob() {
  const [form, setForm] = useState<JobForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<JobForm>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<JobForm> = {};
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.description.trim()) newErrors.description = "Description is required";
    if (!form.budget || Number(form.budget) <= 0)
      newErrors.budget = "Budget must be a positive number";
    if (!form.deadline) newErrors.deadline = "Deadline is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    console.log("Job posted:", form);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="text-5xl mb-6">🎉</div>
        <h2 className="text-2xl font-bold mb-4">Job Posted Successfully!</h2>
        <p className="text-gray-400 mb-8">
          Your job has been posted. Freelancers can now apply and you'll lock
          the budget in escrow when you hire someone.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(EMPTY_FORM); }}
          className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-medium transition"
        >
          Post Another Job
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Post a Job</h1>
      <p className="text-gray-400 mb-8">
        Describe the work you need done. Payment is locked in Soroban escrow
        until you approve the delivery.
      </p>

      <div className="flex flex-col gap-6">
        {/* Title */}
        <div>
          <label className="text-sm font-medium text-gray-300 mb-2 block">
            Job Title *
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Build a Soroban escrow contract"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          />
          {errors.title && (
            <p className="text-red-400 text-xs mt-1">{errors.title}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium text-gray-300 mb-2 block">
            Category *
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-gray-300 mb-2 block">
            Description *
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the work in detail — requirements, deliverables, timeline expectations..."
            rows={5}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 resize-none"
          />
          {errors.description && (
            <p className="text-red-400 text-xs mt-1">{errors.description}</p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label className="text-sm font-medium text-gray-300 mb-2 block">
            Budget (USDC) *
          </label>
          <div className="relative">
            <input
              name="budget"
              type="number"
              value={form.budget}
              onChange={handleChange}
              placeholder="500"
              min="1"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 pr-20"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              USDC
            </span>
          </div>
          {errors.budget && (
            <p className="text-red-400 text-xs mt-1">{errors.budget}</p>
          )}
        </div>

        {/* Deadline */}
        <div>
          <label className="text-sm font-medium text-gray-300 mb-2 block">
            Deadline *
          </label>
          <input
            name="deadline"
            type="date"
            value={form.deadline}
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
          />
          {errors.deadline && (
            <p className="text-red-400 text-xs mt-1">{errors.deadline}</p>
          )}
        </div>

        {/* Escrow notice */}
        <div