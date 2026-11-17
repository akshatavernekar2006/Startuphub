"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import StartupCard from "@/components/StartupCard";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  const router = useRouter();
  const { startups, setSearchQuery } = useApp();

  // Featured startups shown on landing
  const featuredStartups = startups.filter((s) => s.featured).slice(0, 6);

  const handleHeroSearch = (e) => {
    e.preventDefault();
    router.push("/startups");
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 glow-bg opacity-70" />

      {/* 1. Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 backdrop-blur-sm mb-6">
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping"></span>
          Now Live: YC W24 & Seed Accelerator Cohorts
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-tight">
          Where <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Visionary Founders</span> Meet Global Capital
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
          StartupHub is the community directory to discover breakout tech startups, track early funding rounds, and connect directly with angel syndicates.
        </p>

        {/* Quick Search Bar */}
        <form onSubmit={handleHeroSearch} className="mx-auto mt-8 max-w-xl">
          <div className="flex gap-2">
            <SearchBar placeholder="Search by name, AI, Climate, Fintech..." />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition"
            >
              Explore
            </button>
          </div>

          {/* Popular Tag Suggestions */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span>Trending:</span>
            {["AI", "DevTools", "ClimateTech", "Fintech"].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setSearchQuery(tag);
                  router.push("/startups");
                }}
                className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-0.5 text-slate-300 hover:border-slate-700 hover:text-white transition"
              >
                #{tag}
              </button>
            ))}
          </div>
        </form>
      </section>

      {/* 2. Stats Section */}
      <section className="border-y border-slate-800/80 bg-[#070b12]/60 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div>
              <p className="text-3xl font-extrabold text-white">1,400+</p>
              <p className="mt-1 text-xs text-slate-400">Startups Profiled</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-indigo-400">$64.8M</p>
              <p className="mt-1 text-xs text-slate-400">Total Seed Capital</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">420+</p>
              <p className="mt-1 text-xs text-slate-400">Active Investors</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-emerald-400">89%</p>
              <p className="mt-1 text-xs text-slate-400">Follow-On Match Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Startups Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">Featured Startups Today</h2>
            <p className="text-sm text-slate-400 mt-1">Hand-picked early stage products gaining rapid traction.</p>
          </div>
          <Link
            href="/startups"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
          >
            View all ({startups.length}) →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStartups.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/startups"
            className="inline-block rounded-lg border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-200"
          >
            View all startups ({startups.length}) →
          </Link>
        </div>
      </section>

      {/* 4. Founder CTA Banner */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900/40 p-8 text-center sm:p-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Are you building the next category leader?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
            Get your product in front of thousands of founders, early adopters, and active angel syndicates. Listing takes under 2 minutes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/signup"
              className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition"
            >
              List Your Startup Free
            </Link>
            <Link
              href="/investors"
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-2.5 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition"
            >
              Meet Investors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}