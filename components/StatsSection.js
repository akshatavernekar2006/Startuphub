// components/StatsSection.js
// Grid showing platform volume stats (startups, funding, investors, match rate)

export default function StatsSection() {
  const stats = [
    { value: "1,400+", label: "Startups Profiled", highlight: false },
    { value: "$64.8M", label: "Total Seed Capital", highlight: "indigo" },
    { value: "420+", label: "Active Investors", highlight: false },
    { value: "89%", label: "Follow-On Match Rate", highlight: "emerald" }
  ];

  return (
    <section className="border-y border-slate-800/80 bg-[#070b12]/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {stats.map((item, index) => (
            <div key={index}>
              <p
                className={`text-3xl font-extrabold ${
                  item.highlight === "indigo"
                    ? "text-indigo-400"
                    : item.highlight === "emerald"
                    ? "text-emerald-400"
                    : "text-white"
                }`}
              >
                {item.value}
              </p>
              <p className="mt-1 text-xs text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}