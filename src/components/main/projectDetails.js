const projectDetails = [
    {
        title: "Enterprise Demand-Supply Gap Decision System",
        category: "Confidential Case Study / Data Systems",
        description: "A confidential Walmart operations project abstracted for portfolio use: backend and data workflows for demand-supply imbalance visibility across U.S. stores and regional delivery zones.",
        technologies: ["Python", "SQL", "Backend workflows", "ETL", "Operational analytics", "Monitoring", "Data quality"],
        highlights: [
            "Helped turn demand-supply drift into clearer operating signals for field and business teams.",
            "Implemented data transformation, backend workflow logic, monitoring views, and signal-quality checks.",
            "Designed around high-volume inputs, changing rules, governance boundaries, and reliability expectations."
        ],
        github: null,
        caseStudy: "/case-studies/walmart-demand-supply",
        status: "Confidential enterprise system"
    },
    {
        title: "GIIS Website & Academic Operations Platform",
        category: "EdTech / Full Stack",
        description: "A production-oriented school platform combining public program pages with academic operations workflows.",
        technologies: ["React", "Bootstrap", "Node.js", "Academic workflows", "PDF generation", "Automation"],
        highlights: [
            "Connects marketing, academic planning, transcripts, pathways, and graduation tooling.",
            "Shows product engineering in a real organization with messy users, policy, and workflows."
        ],
        github: "https://github.com/alanhdchu154/GIIS-website.git",
        status: "Active product"
    },
    {
        title: "Three-Party AI Education Coordinator",
        category: "Applied AI / Privacy-Aware Benchmarking",
        description: "A research prototype and synthetic benchmark for privacy-preserving student-parent-teacher coordination.",
        technologies: ["Python", "Streamlit", "LiteLLM", "Prompted agents", "Privacy tests", "Synthetic benchmark", "Release gates", "Human review"],
        highlights: [
            "Built private party chats, abstraction, coordinator synthesis, triage, and audience-specific reports.",
            "Packaged a 348-conversation synthetic benchmark with raw-vs-privacy-wall baseline comparison.",
            "Added a reproducible release gate covering leak audits, semantic trace checks, reviewer coverage, tests, claim boundaries, and secret scanning."
        ],
        github: "https://github.com/alanhdchu154/three-party-ai-mvp.git",
        caseStudy: "/case-studies/three-party-ai",
        status: "Research prototype"
    },
    {
        title: "AI Town: GIIS Underworld",
        category: "AI Simulation / Multi-Agent Worldbuilding",
        description: "A long-running school-world research prototype with selective memory, runtime recovery, and partial cultivation-loop evidence.",
        technologies: ["React", "TypeScript", "Convex", "PixiJS", "Ollama", "LLM evaluation", "Agent memory", "Runtime preflight"],
        highlights: [
            "Extended an agent simulation engine into a school-world prototype with retained local state, character routines, and human-facing conversations.",
            "Built evidence gates for memory continuity, provider hygiene, motif repetition, runtime health, and cultivation-loop closure.",
            "Shifted evaluation from isolated dialogue quality toward traceable growth chains: seed, pursuit, outcome, world event, self drift, and changed future behavior.",
            "Keeps the public claim boundary conservative: partial local evidence, narrow cast breadth, and dialogue quality still active."
        ],
        github: "https://github.com/alanhdchu154/ai-town.git",
        caseStudy: "/case-studies/giis-underworld",
        visual: "underworld-continuity",
        status: "Partial local evidence"
    }
];

export default projectDetails;
