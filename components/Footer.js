import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#070b12] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-sm">
                S
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Startup<span className="text-indigo-400">Hub</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              The launchpad for high-growth tech ventures. Discover emerging startups, connect with angel syndicates, and track the next cohort of market leaders.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              College Project MVP Edition
            </div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Explore
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/startups" className="hover:text-indigo-400 transition">
                  Browse All Startups
                </Link>
              </li>
              <li>
                <Link href="/startups" className="hover:text-indigo-400 transition">
                  YC & Accelerator Cohorts
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-indigo-400 transition">
                  Active Angel Investors
                </Link>
              </li>
              <li>
                <Link href="/startups" className="hover:text-indigo-400 transition">
                  Trending DevTools & AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Platform
            </h4>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/dashboard" className="hover:text-indigo-400 transition">
                  Founder Dashboard
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-indigo-400 transition">
                  Submit a Startup
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-indigo-400 transition">
                  Investor Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech Stack & Architecture */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Tech Stack
            </h4>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              Built with Next.js App Router, React Context API, and Tailwind CSS. Zero external UI dependencies for fast performance and easy demonstration.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} StartupHub Inc. Built for educational and demo use.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">MVP v1.0.0</span>
            <span>•</span>
            <span className="text-slate-500">Dark Mode Native</span>
          </div>
        </div>
      </div>
    </footer>
  );
}