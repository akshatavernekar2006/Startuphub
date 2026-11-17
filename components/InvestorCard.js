"use client";

import { useState } from "react";

export default function InvestorCard({ investor }) {
  const [introRequested, setIntroRequested] = useState(false);

  const handleRequestIntro = () => {
    setIntroRequested(true);
    setTimeout(() => {
      // Revert after 3 seconds for demonstration replayability
      setIntroRequested(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0d131f]/70 p-5 backdrop-blur-sm transition-all duration-200 hover:border-slate-700 hover:bg-[#111928]">
      <div>
        {/* Header: Investor initials badge & basic info */}
        <div className="flex items-start gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600/30 to-indigo-600/30 border border-violet-500/30 text-base font-bold text-violet-300">
            {investor.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-100 truncate">{investor.name}</h3>
            <p className="text-xs text-indigo-400 font-medium">{investor.role} · {investor.firm}</p>
            <p className="text-xs text-slate-400 mt-0.5">{investor.location}</p>
          </div>
        </div>

        {/* Short Bio */}
        <p className="mt-3.5 text-xs leading-relaxed text-slate-300">
          {investor.bio}
        </p>

        {/* Investment Parameters Grid */}
        <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg bg-slate-900/60 p-2.5 border border-slate-800/80 text-xs">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
              Check Size
            </span>
            <span className="font-semibold text-emerald-400">{investor.checkSize}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
              Stage
            </span>
            <span className="font-semibold text-slate-200">{investor.stage}</span>
          </div>
        </div>

        {/* Sector Focus Tags */}
        <div className="mt-3.5">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1.5">
            Focus Areas
          </span>
          <div className="flex flex-wrap gap-1.5">
            {investor.focusIndustries.map((ind) => (
              <span
                key={ind}
                className="rounded-md border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-300"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* Notable Portfolio Investments */}
        {investor.portfolioHighlights && (
          <div className="mt-3 text-xs text-slate-400">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Notable Bets</span>
            <p className="mt-0.5 text-slate-300">{investor.portfolioHighlights.join(" • ")}</p>
          </div>
        )}
      </div>

      {/* Action CTA: Request Intro */}
      <div className="mt-5 pt-3.5 border-t border-slate-800">
        <button
          onClick={handleRequestIntro}
          disabled={introRequested}
          className={`w-full rounded-lg py-2 text-xs font-semibold transition-all ${
            introRequested
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default"
              : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm hover:shadow-indigo-500/10"
          }`}
        >
          {introRequested ? "Intro Request Sent! ✓" : "Request Intro (Mock)"}
        </button>
      </div>
    </div>
  );
}