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
        status: "Confidential enterprise system"
    },
    {
        title: "GIIS Website & Academic Operations Platform",
        category: "EdTech / Full Stack",
        description: "A production-oriented school platform for Genesis Ideas International School, combining public-facing program pages with internal academic operations workflows such as transcript, pathway, and graduation tooling.",
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
        category: "Applied AI / Privacy-Aware Coordination",
        description: "A lean MVP for student-parent-teacher coordination where a student AI, privacy abstraction layer, coordinator, and triage module work together without exposing raw student conversations.",
        technologies: ["Python", "Streamlit", "LiteLLM", "Prompted agents", "Rule-based triage", "Privacy tests"],
        highlights: [
            "Models the student AI as a trusted disclosure channel, not just a tutoring chatbot.",
            "Separates raw conversation from abstracted profiles to preserve a practical privacy wall.",
            "Why it matters: explores how AI can coordinate people without collapsing privacy, trust, or accountability."
        ],
        github: "https://github.com/alanhdchu154/three-party-ai-mvp.git",
        status: "MVP"
    },
    {
        title: "AI Town: GIIS Underworld",
        category: "AI Simulation / Multi-Agent Worldbuilding",
        description: "A customized AI Town simulation exploring school life, underworld-style narrative dynamics, character routines, and local LLM-driven interactions inside a persistent world.",
        technologies: ["React", "TypeScript", "Convex", "PixiJS", "Ollama", "Agent simulation"],
        highlights: [
            "Extends an agent simulation engine into a school-world prototype with persistent state and routines.",
            "Uses local inference and repeated playtesting to tune character behavior, world time, and narrative events.",
            "Why it matters: connects agent simulation to AI sociology, worldbuilding, and emergent social behavior."
        ],
        github: "https://github.com/alanhdchu154/ai-town.git",
        status: "Experimental build"
    }
];

export default projectDetails;
