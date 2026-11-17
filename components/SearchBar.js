"use client";

import { useApp } from "@/context/AppContext";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search startups by name, tagline, or keyword..."
}) {
  const context = useApp();

  // Use props if provided; otherwise fallback to global AppContext
  const currentQuery = value !== undefined ? value : context.searchQuery;
  const handleQueryChange = onChange || ((e) => context.setSearchQuery(e.target.value));

  const handleClear = () => {
    if (onChange) {
      onChange({ target: { value: "" } });
    } else {
      context.setSearchQuery("");
    }
  };

  return (
    <div className="relative w-full">
      {/* Search Glass Icon */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={currentQuery}
        onChange={handleQueryChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 py-2.5 pl-10 pr-10 text-sm text-slate-100 placeholder-slate-500 backdrop-blur-sm transition focus:border-indigo-500 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />

      {/* Clear Button (renders only when search field has text) */}
      {currentQuery && (
        <button
          onClick={handleClear}
          type="button"
          aria-label="Clear search input"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-200"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}