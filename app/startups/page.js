"use client";

import { useApp } from "@/context/AppContext";
import StartupCard from "@/components/StartupCard";
import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";

export default function StartupsPage() {
  const {
    startups,
    searchQuery,
    selectedIndustry,
    selectedBatch,
    sortBy
  } = useApp();

  // 1. Filter by search query, category, and cohort batch
  const filteredStartups = startups.filter((startup) => {
    const matchesSearch =
      startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesIndustry =
      selectedIndustry === "All" || startup.industry === selectedIndustry;

    const matchesBatch =
      selectedBatch === "All" || startup.batch === selectedBatch;

    return matchesSearch && matchesIndustry && matchesBatch;
  });

  // 2. Sort results
  const sortedStartups = [...filteredStartups].sort((a, b) => {
    if (sortBy === "funding-desc") {
      return b.fundingAmount - a.fundingAmount;
    }
    if (sortBy === "newest") {
      return b.foundedYear - a.foundedYear;
    }
    return 0;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Explore Startups
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Discover high-momentum technology companies filtered by sector, batch, and capital.
        </p>
      </div>

      {/* Search and Filters Controls */}
      <div className="space-y-3.5 mb-8">
        <SearchBar placeholder="Filter by company name, keywords, or location..." />
        <Filters />
      </div>

      {/* Results Count */}
      <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
        <span>
          Showing <strong className="text-slate-200">{sortedStartups.length}</strong> of {startups.length} startups
        </span>
      </div>

      {/* Startup Grid */}
      {sortedStartups.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedStartups.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-xl border border-dashed border-slate-800 bg-[#0d131f]/40 py-16 text-center">
          <p className="text-base font-medium text-slate-300">No startups found matching your filters</p>
          <p className="text-xs text-slate-500 mt-1">Try relaxing your search terms or resetting the industry filters.</p>
        </div>
      )}
    </div>
  );
}