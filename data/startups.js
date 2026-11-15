// data/startups.js
// Mock database of early-stage startups

export const initialStartups = [
  {
    id: "hyperflow",
    name: "HyperFlow",
    tagline: "Autonomous multi-agent orchestration for enterprise codebases.",
    industry: "DevTools",
    funding: "$2.4M",
    fundingAmount: 2400000,
    batch: "YC W24",
    location: "San Francisco, CA",
    description:
      "HyperFlow gives engineering teams autonomous agents that safely refactor legacy systems, write unit tests, and resolve migration bottlenecks with chain-of-thought verification.",
    founders: [
      { name: "Alex Rivera", role: "CEO", bio: "Ex-Stripe Infrastructure Lead" },
      { name: "Maya Lin", role: "CTO", bio: "Ph.D. in Computer Science from Stanford" }
    ],
    website: "https://hyperflow.dev",
    foundedYear: 2023,
    featured: true
  },
  {
    id: "novuspay",
    name: "NovusPay",
    tagline: "Real-time cross-border settlements for emerging markets.",
    industry: "Fintech",
    funding: "$4.5M",
    fundingAmount: 4500000,
    batch: "Techstars 23",
    location: "New York, NY",
    description:
      "NovusPay provides an API rail enabling global commerce companies to move funds instantly across Latin America and Southeast Asia with sub-1% FX conversion fees.",
    founders: [
      { name: "Carlos Mendoza", role: "CEO", bio: "Former Regional Director at Wise" },
      { name: "Amina Rao", role: "COO", bio: "Early operator at Flutterwave" }
    ],
    website: "https://novuspay.io",
    foundedYear: 2022,
    featured: true
  },
  {
    id: "carbongraph",
    name: "CarbonGraph",
    tagline: "Automated Scope 3 emissions audit software for supply chains.",
    industry: "ClimateTech",
    funding: "$1.8M",
    fundingAmount: 1800000,
    batch: "YC S23",
    location: "Boston, MA",
    description:
      "CarbonGraph integrates with existing ERPs to compute real-time carbon footprints across supplier tiers, replacing slow manual spreadsheets with verifiable audit-ready logs.",
    founders: [
      { name: "Elena Rostova", role: "CEO", bio: "Clean Energy Fellow at MIT" },
      { name: "David Kim", role: "Head of Product", bio: "Ex-Palantir ESG lead" }
    ],
    website: "https://carbongraph.earth",
    foundedYear: 2023,
    featured: true
  },
  {
    id: "medsynth",
    name: "MedSynth",
    tagline: "Synthetic patient data for privacy-first clinical drug discovery.",
    industry: "HealthTech",
    funding: "$3.2M",
    fundingAmount: 3200000,
    batch: "YC W23",
    location: "Austin, TX",
    description:
      "MedSynth generates statistically valid, HIPAA-compliant synthetic health datasets so biotech research institutions can accelerate clinical trial simulations without exposing real patient records.",
    founders: [
      { name: "Dr. Rachel Vance", role: "CEO", bio: "MD/Ph.D. Johns Hopkins" },
      { name: "Samir Patel", role: "CTO", bio: "Bioinformatics lead at Genentech" }
    ],
    website: "https://medsynth.bio",
    foundedYear: 2022,
    featured: false
  },
  {
    id: "sentinelpulse",
    name: "SentinelPulse",
    tagline: "Zero-trust identity posture management for cloud infrastructure.",
    industry: "Cybersecurity",
    funding: "$5.1M",
    fundingAmount: 5100000,
    batch: "Seed",
    location: "Seattle, WA",
    description:
      "SentinelPulse monitors machine identities, tokens, and ephemeral permissions across AWS, GCP, and Kubernetes clusters, automatically eliminating toxic permission chains.",
    founders: [
      { name: "Marcus Brody", role: "CEO", bio: "Ex-CrowdStrike Security Architect" }
    ],
    website: "https://sentinelpulse.security",
    foundedYear: 2021,
    featured: true
  },
  {
    id: "luminalearn",
    name: "LuminaLearn",
    tagline: "Adaptive AI tutoring companions for neurodivergent K-12 students.",
    industry: "EdTech",
    funding: "$950K",
    fundingAmount: 950000,
    batch: "Techstars 24",
    location: "Chicago, IL",
    description:
      "LuminaLearn creates multimodal learning environments that dynamically adjust reading density, pacing, and visual aids based on user attention and comprehension signals.",
    founders: [
      { name: "Grace O'Connor", role: "Founder", bio: "M.Ed from Harvard Graduate School of Education" }
    ],
    website: "https://luminalearn.com",
    foundedYear: 2023,
    featured: false
  },
  {
    id: "orbitallogic",
    name: "OrbitalLogic",
    tagline: "Low-Earth orbit synthetic aperture radar satellite processing.",
    industry: "SpaceTech",
    funding: "$6.0M",
    fundingAmount: 6000000,
    batch: "YC S22",
    location: "Denver, CO",
    description:
      "OrbitalLogic provides edge-computed planetary observation feeds, helping disaster management and agriculture sectors detect ground shifts and flooding in real time through cloud cover.",
    founders: [
      { name: "Liam Vance", role: "CEO", bio: "Aerospace engineer, former NASA JPL" },
      { name: "Hannah Wu", role: "CTO", bio: "RF systems engineer" }
    ],
    website: "https://orbitallogic.space",
    foundedYear: 2022,
    featured: false
  },
  {
    id: "klyma-energy",
    name: "Klyma Energy",
    tagline: "Next-generation solid-state batteries for commercial fleet transport.",
    industry: "ClimateTech",
    funding: "$8.5M",
    fundingAmount: 8500000,
    batch: "Series A",
    location: "San Jose, CA",
    description:
      "Klyma Energy has developed ceramic electrolyte cells that deliver twice the energy density of conventional lithium-ion cells with zero thermal runaway hazard.",
    founders: [
      { name: "Dr. Vikram Joshi", role: "CEO", bio: "Materials Science researcher at Stanford" }
    ],
    website: "https://klymaenergy.com",
    foundedYear: 2021,
    featured: true
  },
  {
    id: "nexusdb",
    name: "NexusDB",
    tagline: "Distributed multimodal vector database with sub-millisecond recall.",
    industry: "DevTools",
    funding: "$3.8M",
    fundingAmount: 3800000,
    batch: "YC W24",
    location: "San Francisco, CA",
    description:
      "NexusDB is built in Rust from the ground up to index billion-scale image, audio, and text embeddings with hybrid BM25 and HNSW vector search out of the box.",
    founders: [
      { name: "Tariq Mansoor", role: "CEO", bio: "Former Redis maintainer" },
      { name: "Oliver Scott", role: "Chief Architect", bio: "Distributed systems engineer" }
    ],
    website: "https://nexusdb.io",
    foundedYear: 2023,
    featured: false
  },
  {
    id: "apexlegal",
    name: "ApexLegal",
    tagline: "AI agent copilots for cross-jurisdictional contract compliance.",
    industry: "AI",
    funding: "$1.5M",
    fundingAmount: 1500000,
    batch: "Seed",
    location: "New York, NY",
    description:
      "ApexLegal audits commercial agreements across EU, US, and APAC regulations, surfacing clause deviations and negotiation playbook anomalies in seconds.",
    founders: [
      { name: "Jessica Taylor", role: "CEO", bio: "Former Corporate Attorney at Latham & Watkins" }
    ],
    website: "https://apexlegal.ai",
    foundedYear: 2023,
    featured: false
  },
  {
    id: "farmscale",
    name: "FarmScale",
    tagline: "Autonomous micro-weeding robotics for organic acreage crops.",
    industry: "AgTech",
    funding: "$2.1M",
    fundingAmount: 2100000,
    batch: "YC S23",
    location: "Des Moines, IA",
    description:
      "FarmScale deploys solar-powered rover swarms that identify and laser-neutralize weeds with sub-centimeter accuracy, eliminating chemical herbicide usage.",
    founders: [
      { name: "Bradley Miller", role: "CEO", bio: "4th-generation farmer and mechanical engineer" },
      { name: "Siddharth Sen", role: "CTO", bio: "Robotics Ph.D. from Carnegie Mellon" }
    ],
    website: "https://farmscale.ag",
    foundedYear: 2023,
    featured: false
  },
  {
    id: "deepvoice",
    name: "DeepVoice Health",
    tagline: "Acoustic biomarker analysis for early neurological screening.",
    industry: "HealthTech",
    funding: "$1.2M",
    fundingAmount: 1200000,
    batch: "Seed",
    location: "San Diego, CA",
    description:
      "DeepVoice analyzes 30-second conversational voice clips to detect early micro-tremors associated with Parkinson's and ALS before conventional symptoms arise.",
    founders: [
      { name: "Dr. Chloe Martin", role: "CEO", bio: "Clinical Neurologist & Voice Scientist" }
    ],
    website: "https://deepvoicehealth.com",
    foundedYear: 2024,
    featured: false
  },
  {
    id: "vesselos",
    name: "VesselOS",
    tagline: "Operating system for containerized port logistics and drayage.",
    industry: "SupplyChain",
    funding: "$4.0M",
    fundingAmount: 4000000,
    batch: "YC W23",
    location: "Los Angeles, CA",
    description:
      "VesselOS coordinates shipping manifests, crane schedules, and autonomous yard trucks to cut dwell time in major container hubs by up to 34%.",
    founders: [
      { name: "Mateo Silva", role: "CEO", bio: "Former Operations Manager, Port of Long Beach" }
    ],
    website: "https://vesselos.trade",
    foundedYear: 2022,
    featured: false
  },
  {
    id: "veritasid",
    name: "VeritasID",
    tagline: "Decentralized biometrics for deepfake fraud prevention.",
    industry: "Cybersecurity",
    funding: "$2.7M",
    fundingAmount: 2700000,
    batch: "Techstars 23",
    location: "London, UK",
    description:
      "VeritasID protects financial institutions and video verification services from real-time generative AI impersonation using hardware-bound cryptographic challenges.",
    founders: [
      { name: "Julian Thorne", role: "CEO", bio: "Former UK Cyber Defense advisor" },
      { name: "Priya Nair", role: "Head of Cryptography", bio: "Cambridge University researcher" }
    ],
    website: "https://veritasid.io",
    foundedYear: 2023,
    featured: false
  }
];