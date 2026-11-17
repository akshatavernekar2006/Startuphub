"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";
import StartupCard from "@/components/StartupCard";

export default function DashboardPage() {
  const { user, favorites, startups } = useApp();

  // Find user's own startup and user's saved favorites
  const myStartup = startups.find((s) => s.id === user?.startupId);
  const bookmarkedStartups = startups.filter((s) => favorites.includes(s.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Founder Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Welcome back, <span className="font-semibold text-slate-200">{user ? user.name : "Guest Founder"}</span> ({user?.email || "guest@demo.com"})
          </p>
        </div>
        <Link
          href="/startups"
          className="self-start rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 transition"
        >
          Explore More Startups
        </Link>
      </div>

      {/* 3 Overview Stat Metric Cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-[#0d131f]/60 p-5">
          <p className="text-xs uppercase tracking-wider text-slate-400">Saved Bookmarks</p>
          <p className="mt-2 text-3xl font-extrabold text-white">{favorites.length}</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#0d131f]/60 p-5">
          <p className="text-xs uppercase tracking-wider text-slate-400">Profile Views</p>
          <p className="mt-2 text-3xl font-extrabold text-indigo-400">184</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#0d131f]/60 p-5">
          <p className="text-xs uppercase tracking-wider text-slate-400">Investor Inquiries</p>
          <p className="mt-2 text-3xl font-extrabold text-emerald-400">12</p>
        </div>
      </div>

      {/* My Startup Profile Management */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-white mb-4">My Startup Profile</h2>
        {myStartup ? (
          <div className="rounded-xl border border-slate-800 bg-[#0d131f]/70 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-slate-100">{myStartup.name}</h3>
                <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-0.5 text-xs text-emerald-300">
                  Live on Directory
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{myStartup.tagline}</p>
              <div className="mt-3 flex gap-4 text-xs text-slate-300">
                <span>Funding: <strong className="text-emerald-400">{myStartup.funding}</strong></span>
                <span>Batch: <strong>{myStartup.batch}</strong></span>
                <span>Category: <strong>{myStartup.industry}</strong></span>
              </div>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/startups/${myStartup.id}`}
                className="rounded-lg border border-slate-700 bg-slate-800/80 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white"
              >
                View Public Page
              </Link>
              <button
                onClick={() => alert("Profile updated (Mock)!")}
                className="rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500"
              >
                Edit Listing
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-800 p-8 text-center text-slate-400 text-xs">
            No startup listing linked to this account.
          </div>
        )}
      </div>

      {/* Bookmarked / Saved Startups Section */}
      <div className="mt-12" id="saved">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">
            Saved Bookmarks ({favorites.length})
          </h2>
          {favorites.length > 0 && (
            <p className="text-xs text-slate-400">Persisted in local storage</p>
          )}
        </div>

        {bookmarkedStartups.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bookmarkedStartups.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-800 bg-[#0d131f]/40 py-12 text-center">
            <p className="text-sm font-medium text-slate-300">No saved startups yet</p>
            <p className="text-xs text-slate-500 mt-1">
              Click the heart icon on any startup card in the directory to bookmark it here.
            </p>
            <Link
              href="/startups"
              className="mt-4 inline-block text-xs font-semibold text-indigo-400 hover:underline"
            >
              Browse Startups →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}