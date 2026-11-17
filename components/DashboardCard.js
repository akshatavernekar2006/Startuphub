// components/DashboardCard.js
// Reusable KPI metric card for dashboards and summaries

export default function DashboardCard({
  title,
  value,
  subtitle,
  badgeText,
  badgeColor = "emerald" // "emerald" | "indigo" | "amber"
}) {
  const badgeColorStyles = {
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-[#0d131f]/70 p-5 backdrop-blur-sm transition-all hover:border-slate-700">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {title}
        </span>
        {badgeText && (
          <span
            className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
              badgeColorStyles[badgeColor] || badgeColorStyles.indigo
            }`}
          >
            {badgeText}
          </span>
        )}
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <p className="text-3xl font-extrabold tracking-tight text-white">{value}</p>
      </div>

      {subtitle && (
        <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}