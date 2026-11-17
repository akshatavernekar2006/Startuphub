// data/investors.js
// Mock database of active angel investors and venture funds

export const initialInvestors = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    firm: "Horizon Seed Fund",
    role: "General Partner",
    focusIndustries: ["AI", "DevTools", "Cybersecurity"],
    checkSize: "$250k - $1M",
    stage: "Pre-Seed / Seed",
    location: "San Francisco, CA",
    bio: "Ex-engineer turned early-stage investor. Focused on deep tech primitives, developer workflow tooling, and novel AI systems.",
    portfolioHighlights: ["Vercel", "Retool", "Supabase"]
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    firm: "Apex Horizon Ventures",
    role: "Managing Director",
    focusIndustries: ["Fintech", "SupplyChain"],
    checkSize: "$1M - $3M",
    stage: "Seed / Series A",
    location: "New York, NY",
    bio: "Investing in the rails underpinning international settlement, embedded credit infrastructure, and industrial supply logistics.",
    portfolioHighlights: ["Stripe", "Flexport", "Ramp"]
  },
  {
    id: "dr-elena-moreau",
    name: "Dr. Elena Moreau",
    firm: "Aura Bio & Health",
    role: "Founding Partner",
    focusIndustries: ["HealthTech", "ClimateTech"],
    checkSize: "$500k - $2M",
    stage: "Seed",
    location: "Boston, MA",
    bio: "Former biotech founder with two successful exits. Championing computational therapeutics, synthetic biology, and decarbonization tech.",
    portfolioHighlights: ["Ginkgo Bioworks", "Recursion"]
  },
  {
    id: "aravind-rajan",
    name: "Aravind Rajan",
    firm: "NextWave Syndicate",
    role: "Lead Angel Investor",
    focusIndustries: ["DevTools", "AI", "EdTech"],
    checkSize: "$50k - $250k",
    stage: "Pre-Seed / First Check",
    location: "Seattle, WA",
    bio: "First-check operator angel backing technical founders tackling high-friction developer and education workflows.",
    portfolioHighlights: ["Linear", "Postman"]
  },
  {
    id: "claire-dupont",
    name: "Claire Dupont",
    firm: "Vanguard Climate Capital",
    role: "Partner",
    focusIndustries: ["ClimateTech", "AgTech"],
    checkSize: "$750k - $2.5M",
    stage: "Seed / Series A",
    location: "Austin, TX",
    bio: "Dedicated to planetary durability: carbon offset verification, battery chemistry breakthroughs, and agricultural robotics.",
    portfolioHighlights: ["Pachama", "Monarch Tractor"]
  },
  {
    id: "kenji-takahashi",
    name: "Kenji Takahashi",
    firm: "Kitsune Global Ventures",
    role: "Partner (Cross-Border)",
    focusIndustries: ["Fintech", "Cybersecurity", "SpaceTech"],
    checkSize: "$1M - $4M",
    stage: "Series A",
    location: "London, UK",
    bio: "Connecting Western software platforms with APAC/EMEA market distribution and institutional security deployments.",
    portfolioHighlights: ["Snyk", "Checkout.com"]
  },
  {
    id: "priya-deshmukh",
    name: "Priya Deshmukh",
    firm: "Beacon Micro-Fund",
    role: "Solo Capitalist",
    focusIndustries: ["AI", "SupplyChain"],
    checkSize: "$100k - $500k",
    stage: "Pre-Seed",
    location: "Chicago, IL",
    bio: "Product strategist and angel investor supporting enterprise software founders from raw whiteboard concept to first $100k ARR.",
    portfolioHighlights: ["Weights & Biases", "Anyscale"]
  }
];