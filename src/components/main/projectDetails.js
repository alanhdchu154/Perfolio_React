const projectDetails = [
    {
        title: "Enterprise Demand-Supply Gap Decision System",
        category: "Data Systems / Enterprise Operations",
        description: "A confidential Walmart operations project abstracted for portfolio use: built data and backend workflows that helped surface demand-supply imbalance signals across thousands of U.S. stores and regional delivery zones.",
        technologies: ["Python", "SQL", "ETL", "Operational analytics", "Monitoring", "Data quality", "Decision support"],
        highlights: [
            "Translated high-volume operational signals into structured demand-supply gap views for nationwide field decision-making.",
            "Worked across store and service-zone dimensions at enterprise scale while respecting reliability, governance, and privacy constraints.",
            "Focused on actionable visibility: imbalance patterns, recurring bottlenecks, data quality issues, and faster operational triage."
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
            "Reflects a real operating context rather than a toy portfolio project."
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
            "Includes provider flexibility, dataset evaluation hooks, and regression tests for safer iteration."
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
            "Connects directly to the broader interest in AI sociology: how artificial worlds produce social patterns."
        ],
        github: "https://github.com/alanhdchu154/ai-town.git",
        status: "Experimental build"
    }
];

export default projectDetails;
