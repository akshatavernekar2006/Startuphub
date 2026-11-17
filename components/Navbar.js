"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const pathname = usePathname();
  const { favorites, user, logout } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper to check if a navigation route is active
  const isActive = (path) => pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#090d16]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Startup<span className="text-indigo-400">Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/startups"
            className={`text-sm font-medium transition-colors ${
              isActive("/startups")
                ? "text-indigo-400 font-semibold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Explore Startups
          </Link>
          <Link
            href="/investors"
            className={`text-sm font-medium transition-colors ${
              isActive("/investors")
                ? "text-indigo-400 font-semibold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Investors
          </Link>
          <Link
            href="/dashboard"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive("/dashboard")
                ? "text-indigo-400 font-semibold"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Dashboard
            {/* Live Saved Favorites Badge */}
            {favorites.length > 0 && (
              <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-indigo-300 border border-indigo-500/30">
                {favorites.length}
              </span>
            )}
          </Link>
        </nav>

        {/* Desktop Authentication Controls */}
        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">
                Hi, <span className="font-semibold text-slate-200">{user.name.split(" ")[0]}</span>
              </span>
              <button
                onClick={logout}
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-600 hover:bg-slate-800 hover:text-white transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white transition"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="rounded-lg bg-indigo-600 px-3.5 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 transition"
              >
                Join Now
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-[#0c121e] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link
              href="/startups"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              Explore Startups
            </Link>
            <Link
              href="/investors"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-white"
            >
              Investors
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-medium text-slate-300 hover:text-white"
            >
              <span>Dashboard</span>
              {favorites.length > 0 && (
                <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs text-indigo-300">
                  {favorites.length} saved
                </span>
              )}
            </Link>

            <div className="mt-2 border-t border-slate-800 pt-3">
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left text-sm font-medium text-rose-400 hover:text-rose-300"
                >
                  Sign Out ({user.name})
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-center rounded-lg border border-slate-700 py-2 text-sm text-slate-300"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-center rounded-lg bg-indigo-600 py-2 text-sm font-medium text-white"
                  >
                    Join Now
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}