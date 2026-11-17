"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function StartupDetailPage() {
  const params = useParams();
  const { startups, toggleFavorite, isFavorite } = useApp();

  // Find startup from global context using URL id parameter
  const startup = startups.find((s) => s.id === params?.id);
  const favorited = startup ? isFavorite(startup.id) : false;

  if (!startup) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-white">Startup Not Found</h2>
        <p className="text-sm text-slate-400 mt-2">The startup you are looking for does not exist or has been removed.</p>
        <Link
          href="/startups"
          className="mt-6 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 transition"
        >
          ← Back to Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back button */}
      <Link
        href="/startups"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition mb-6"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to startups
      </Link>

      {/* Main Header Banner */}
      <div className="rounded-2xl border border-slate-800 bg-[#0d131f]/80 p-6 sm:p-8 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-2xl font-bold text-indigo-300">
              {startup.name[0]}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{startup.name}</h1>
                <span className="rounded-md border border-slate-700 bg-slate-800/80 px-2.5 py-0.5 text-xs text-slate-300">
                  {startup.batch}
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-1">{startup.location} • Founded {startup.foundedYear}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleFavorite(startup.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold border transition ${
                favorited
                  ? "bg-rose-500/15 text-rose-300 border-rose-500/30"
                  : "bg-slate-800/80 text-slate-300 border-slate-700 hover:text-white"
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
              {favorited ? "Saved" : "Bookmark"}
            </button>

            <a
              href={startup.website}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 transition"
            >
              Visit Website ↗
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300 border-t border-slate-800/80 pt-4">
          {startup.tagline}
        </p>
      </div>

      {/* Grid: Overview & Facts */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column: Description & Founders */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-xl border border-slate-800 bg-[#0d131f]/60 p-6">
            <h2 className="text-base font-semibold text-white">About the Company</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {startup.description}
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0d131f]/60 p-6">
            <h2 className="text-base font-semibold text-white">Founding Team</h2>
            <div className="mt-4 space-y-4">
              {startup.founders.map((founder, idx) => (
                <div key={idx} className="flex items-start gap-3 border-b border-slate-800/80 pb-3 last:border-b-0 last:pb-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-900/30 text-indigo-300 font-bold text-xs">
                    {founder.name[0]}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">
                      {founder.name} <span className="text-xs font-normal text-indigo-400">({founder.role})</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{founder.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Key Metrics Sidebar */}
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-800 bg-[#0d131f]/60 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Overview
            </h2>
            <dl className="mt-4 space-y-3.5 text-xs">
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <dt className="text-slate-400">Total Funding</dt>
                <dd className="font-semibold text-emerald-400">{startup.funding}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <dt className="text-slate-400">Industry</dt>
                <dd className="font-semibold text-slate-200">{startup.industry}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <dt className="text-slate-400">Founded</dt>
                <dd className="font-semibold text-slate-200">{startup.foundedYear}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-400">Location</dt>
                <dd className="font-semibold text-slate-200">{startup.location}</dd>
              </div>
            </dl>
          </div>

          {/* Quick Connect Mock Box */}
          <div className="rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-5 text-center">
            <h3 className="text-sm font-semibold text-white">Interested in investing?</h3>
            <p className="text-xs text-slate-400 mt-1">Get an introduction to the founders directly through StartupHub.</p>
            <button
              onClick={() => alert(`Intro request dispatched to ${startup.name} founders!`)}
              className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition"
            >
              Contact Founders (Mock)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}