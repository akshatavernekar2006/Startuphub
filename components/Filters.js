"use client";

import { useApp } from "@/context/AppContext";

export default function Filters() {
  const {
    startups,
    selectedIndustry,
    setSelectedIndustry,
    selectedBatch,
    setSelectedBatch,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery
  } = useApp();

  // Extract unique industries dynamically from startup data
  const industries = ["All", ...new Set(startups.map((s) => s.industry))];

  // Extract unique batches dynamically
  const batches = ["All", ...new Set(startups.map((s) => s.batch))];

  // Check if any filter is actively applied
  const isFiltered =
    selectedIndustry !== "All" ||
    selectedBatch !== "All" ||
    sortBy !== "funding-desc" ||
    searchQuery !== "";

  // Reset all filters back to defaults
  const handleReset = () => {
    setSelectedIndustry("All");
    setSelectedBatch("All");
    setSortBy("funding-desc");
    setSearchQuery("");
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-[#0d131f]/60 p-3.5 backdrop-blur-sm">
      <div className="flex flex-wrap items-center gap-3">
        {/* Industry Filter Dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="industry-filter" className="text-xs font-medium text-slate-400">
            Industry:
          </label>
          <select
            id="industry-filter"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-900/90 px-2.5 py-1.5 text-xs text-slate-200 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        {/* Batch Filter Dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="batch-filter" className="text-xs font-medium text-slate-400">
            Batch:
          </label>
          <select
            id="batch-filter"
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-900/90 px-2.5 py-1.5 text-xs text-slate-200 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            {batches.map((batch) => (
              <option key={batch} value={batch}>
                {batch}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort-filter" className="text-xs font-medium text-slate-400">
            Sort by:
          </label>
          <select
            id="sort-filter"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-900/90 px-2.5 py-1.5 text-xs text-slate-200 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="funding-desc">Funding (High to Low)</option>
            <option value="newest">Newest Founded</option>
          </select>
        </div>
      </div>

      {/* Reset Filters Button */}
      {isFiltered && (
        <button
          onClick={handleReset}
          className="text-xs font-medium text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}