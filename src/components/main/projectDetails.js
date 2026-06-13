const projectDetails = [
    {
        title: "Enterprise Demand-Supply Gap Decision System",
        category: "Confidential Case Study / Data Systems",
        description: "A Walmart operations project abstracted for portfolio use: helped build the data and backend workflows behind demand-supply imbalance visibility across thousands of U.S. stores and regional delivery zones.",
        technologies: ["Python", "SQL", "Backend workflows", "ETL", "Operational analytics", "Monitoring", "Data quality"],
        highlights: [
            "Problem: field teams needed clearer visibility into where demand and available supply were drifting apart across a large, dynamic operating network.",
            "Owned implementation work across data transformation, backend workflow logic, monitoring views, and operational signal quality.",
            "Designed for enterprise constraints: high-volume inputs, changing business rules, governance boundaries, and reliability expectations.",
            "Why it matters: this is the clearest example of enterprise decision support work at national operating scale."
        ],
        github: null,
        caseStudy: "/case-studies/walmart-demand-supply",
        status: "Confidential enterprise system"
    },
    {
        title: "GIIS Website & Academic Operations Platform",
        category: "EdTech / Full Stack",
        description: "A production-oriented school platform for Genesis of Ideas International School, combining public-facing program pages with internal academic operations workflows such as transcript, pathway, and graduation tooling.",
        technologies: ["React", "Bootstrap", "Node.js", "Academic workflows", "PDF generation", "Automation"],
        highlights: [
            "Connects marketing, academic planning, and operational tooling in one school-facing system.",
            "Supports transcript and graduation workflows that turn curriculum policy into repeatable execution.",
            "Why it matters: shows product engineering in a real organization with messy users, policy, and workflows."
        ],
        github: "https://github.com/alanhdchu154/GIIS-website.git",
        status: "Active product"
    },
    {
        title: "Three-Party AI Education Coordinator",
        category: "Applied AI / Privacy-Aware Benchmarking",
        description: "A research prototype and synthetic benchmark for student-parent-teacher coordination, focused on privacy-preserving abstraction, human review, and audience-safe reporting.",
        technologies: ["Python", "Streamlit", "LiteLLM", "Prompted agents", "Privacy tests", "Synthetic benchmark", "Human review gates"],
        highlights: [
            "Built a multi-party support architecture with private party chats, abstraction, coordinator synthesis, triage, and audience-specific reports.",
            "Maintains a growing 300+ conversation synthetic corpus while explicitly separating benchmark evidence from real-student validation claims.",
            "Added privacy and reviewer gates for quote leakage, reconstructability, unsafe escalation, and human-review readiness.",
            "Why it matters: explores how AI can coordinate people without collapsing privacy, trust, or accountability."
        ],
        github: "https://github.com/alanhdchu154/three-party-ai-mvp.git",
        caseStudy: "/case-studies/three-party-ai",
        status: "Research prototype"
    },
    {
        title: "AI Town: GIIS Underworld",
        category: "AI Simulation / Multi-Agent Worldbuilding",
        description: "A persistent school-world AI simulation built on AI Town, with character memory, continuity checks, local runtime recovery, and mobile playtest support.",
        technologies: ["React", "TypeScript", "Convex", "PixiJS", "Ollama", "LLM evaluation", "Agent memory"],
        highlights: [
            "Extended an agent simulation engine into a school-world prototype with persistent state, character routines, and human-facing conversations.",
            "Built evidence gates for memory continuity, provider/fallback hygiene, motif repetition, and Alan-facing conversation quality.",
            "Recovered and stabilized a local Convex runtime, added mobile same-Wi-Fi playtesting, and kept product-readiness separate from research-paper claims.",
            "Why it matters: connects agent simulation to AI sociology, worldbuilding, and the practical engineering needed for long-running AI characters."
        ],
        github: "https://github.com/alanhdchu154/ai-town.git",
        caseStudy: "/case-studies/giis-underworld",
        visual: "underworld-continuity",
        status: "Human-review-ready prototype"
    }
];

export default projectDetails;
