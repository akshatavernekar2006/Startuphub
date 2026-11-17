"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import InvestorCard from "@/components/InvestorCard";
import SearchBar from "@/components/SearchBar";

export default function InvestorsPage() {
  const { investors } = useApp();
  const [investorSearch, setInvestorSearch] = useState("");

  // Filter investors by name, firm, or focus industries
  const filteredInvestors = investors.filter((inv) => {
    const q = investorSearch.toLowerCase();
    const matchesName = inv.name.toLowerCase().includes(q);
    const matchesFirm = inv.firm.toLowerCase().includes(q);
    const matchesSector = inv.focusIndustries.some((ind) =>
      ind.toLowerCase().includes(q)
    );
    return matchesName || matchesFirm || matchesSector;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Active Investor Syndicate
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Connect with angels, micro-VCs, and seed partners looking for their next high-conviction deal.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 max-w-md">
        <SearchBar
          value={investorSearch}
          onChange={(e) => setInvestorSearch(e.target.value)}
          placeholder="Filter by investor, firm, or industry (e.g. AI)..."
        />
      </div>

      {/* Investor Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredInvestors.map((investor) => (
          <InvestorCard key={investor.id} investor={investor} />
        ))}
      </div>

      {filteredInvestors.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-800 bg-[#0d131f]/40 py-16 text-center">
          <p className="text-base font-medium text-slate-300">No investors found matching &quot;{investorSearch}&quot;</p>
        </div>
      )}
    </div>
  );
}