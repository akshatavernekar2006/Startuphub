"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function StartupCard({ startup }) {
  const { toggleFavorite, isFavorite } = useApp();
  const favorited = isFavorite(startup.id);

  // Handle bookmark toggle without triggering the parent card's link
  const handleBookmarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(startup.id);
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0d131f]/70 p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:bg-[#111928] hover:shadow-xl hover:shadow-indigo-500/5">
      {/* Top Header: Initial Avatar, Name & Bookmark Button */}
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Startup Brand Placeholder Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 font-bold text-lg">
              {startup.name.slice(0, 1)}
            </div>

            <div>
              <Link href={`/startups/${startup.id}`}>
                <h3 className="font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                  {startup.name}
                </h3>
              </Link>
              <p className="text-xs text-slate-400">{startup.location}</p>
            </div>
          </div>

          {/* Bookmark / Favorite Action Button */}
          <button
            onClick={handleBookmarkClick}
            aria-label={favorited ? "Remove from bookmarks" : "Save to bookmarks"}
            className={`rounded-lg p-2 transition-colors ${
              favorited
                ? "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                : "bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/60"
            }`}
          >
            <svg
              className="h-4 w-4"
              fill={favorited ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Tagline / Value Proposition */}
        <p className="mt-3.5 text-xs leading-relaxed text-slate-300 line-clamp-2">
          {startup.tagline}
        </p>

        {/* Badges: Category & Batch */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 text-[11px] font-medium text-indigo-300">
            {startup.industry}
          </span>
          <span className="rounded-md border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-300">
            {startup.batch}
          </span>
        </div>
      </div>

      {/* Card Footer: Funding info & Detail link */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-3.5 text-xs">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
            Funding
          </span>
          <span className="font-semibold text-emerald-400">{startup.funding}</span>
        </div>

        <Link
          href={`/startups/${startup.id}`}
          className="inline-flex items-center gap-1 font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors"
        >
          Details
          <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}