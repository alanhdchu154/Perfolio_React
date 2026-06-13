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
        description: "A research prototype and synthetic benchmark for student-parent-teacher coordination.",
        technologies: ["Python", "Streamlit", "LiteLLM", "Prompted agents", "Privacy tests", "Synthetic benchmark", "Human review gates"],
        highlights: [
            "Built private party chats, abstraction, coordinator synthesis, triage, and audience-specific reports.",
            "Maintains a 300+ conversation synthetic corpus while separating benchmark evidence from real-student validation claims.",
            "Added privacy and reviewer gates for leakage, reconstructability, escalation, and human-review readiness."
        ],
        github: "https://github.com/alanhdchu154/three-party-ai-mvp.git",
        caseStudy: "/case-studies/three-party-ai",
        status: "Research prototype"
    },
    {
        title: "AI Town: GIIS Underworld",
        category: "AI Simulation / Multi-Agent Worldbuilding",
        description: "A persistent school-world AI simulation with character memory, continuity checks, runtime recovery, and mobile playtest support.",
        technologies: ["React", "TypeScript", "Convex", "PixiJS", "Ollama", "LLM evaluation", "Agent memory"],
        highlights: [
            "Extended an agent simulation engine into a school-world prototype with persistent state, character routines, and human-facing conversations.",
            "Built evidence gates for memory continuity, provider hygiene, motif repetition, and Alan-facing conversation quality.",
            "Kept product readiness separate from research-paper claims."
        ],
        github: "https://github.com/alanhdchu154/ai-town.git",
        caseStudy: "/case-studies/giis-underworld",
        visual: "underworld-continuity",
        status: "Human-review-ready prototype"
    }
];

export default projectDetails;
