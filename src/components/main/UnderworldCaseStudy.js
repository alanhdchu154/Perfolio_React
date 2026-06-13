import React from 'react';

const roadmapLanes = [
    {
        phase: 'v0.1',
        title: 'Make the world remember safely',
        status: 'Active prototype',
        points: [
            'Persistent character conversations',
            'Memory continuity checks',
            'Provider and fallback hygiene',
            'Alan-facing playtest gate'
        ]
    },
    {
        phase: 'v0.2',
        title: 'Make daily life visible',
        status: 'Next planning lane',
        points: [
            'Daily-life director',
            'Visible props and promises',
            'More durable transcript reliability',
            'Better scene-to-memory feedback'
        ]
    },
    {
        phase: 'Research',
        title: 'Study emotional residue',
        status: 'Separated from product claims',
        points: [
            'Rolling continuity reports',
            'Sleep/reflection shadow mode',
            'Human annotation path',
            'No causal claims without stronger evidence'
        ]
    }
];

const gates = [
    'Character soul expression',
    'Conversation to emotional residue',
    'Yesterday/today memory continuity',
    'Event thread continuity',
    'Human Alan conversation quality',
    'Fallback and provider hygiene',
    'Motif hygiene and repair gate',
    'Night quiet policy'
];

const residueStages = [
    {
        label: '1',
        title: 'Conversation',
        body: 'A character says or notices something in a live scene.'
    },
    {
        label: '2',
        title: 'Residue Candidate',
        body: 'The system asks whether the moment should matter later.'
    },
    {
        label: '3',
        title: 'Sleep / Reflection',
        body: 'Low-confidence traces stay shadowed until they are safe to promote.'
    },
    {
        label: '4',
        title: 'Prompt Read Gate',
        body: 'Only a capped, relevant, non-polluting trace can influence a future reply.'
    }
];

const architectureLayers = [
    {
        label: 'World runtime',
        items: ['Live school scenes', 'Character routines', 'Alan playtest']
    },
    {
        label: 'Continuity engine',
        items: ['Conversation traces', 'Residue candidates', 'Sleep notes']
    },
    {
        label: 'Evidence boundary',
        items: ['Rolling audits', 'Human review', 'Research claims held back']
    }
];

const underworldThemes = [
    {
        id: 'soul-architecture',
        eyebrow: 'Theme 1',
        title: 'Soul architecture',
        body: 'The character profile is treated as a layered interpretation system, not a flat persona prompt. Public behavior, private tension, relational stance, emotional residue, and behavioral drift decide what the LLM should carry forward.',
        diagram: ['Public self', 'Private self', 'Relational self', 'Residue', 'Drift'],
        evidence: 'Source: docs/soul/SOUL_PROGRESSION_PLAN.md and docs/soul/pilots/*.md',
        boundary: 'Public claim boundary: this is a design and evaluation architecture, not proof that a model has stable human-like inner life.'
    },
    {
        id: 'memory-pipeline',
        eyebrow: 'Theme 2',
        title: 'Conversation to memory pipeline',
        body: 'A conversation can become a residue candidate, pass through safety and relevance gates, and later influence behavior. The goal is selective continuity: yesterday matters, but bad traces should not become character brain.',
        diagram: ['Conversation', 'Residue candidate', 'Safety gate', 'Prompt read gate', 'Future behavior'],
        evidence: 'Source: WORKLOG.md, rolling-continuity reports, sleepNotes gate, and soul-memory-flow.svg',
        boundary: 'Public claim boundary: machine gates are useful evidence, but recent eval caveats remain and Alan acceptance is separate.'
    },
    {
        id: 'runtime-reliability',
        eyebrow: 'Theme 3',
        title: 'Runtime reliability for a long-running world',
        body: 'Underworld had to stop treating reset as the normal answer. The work shifted toward state retention, smaller scheduled-job payloads, mobile playtesting, local runtime recovery, and preserving memory tables safely.',
        diagram: ['Local Convex', 'State audit', 'Slim scheduled jobs', 'Mobile playtest', 'Recovery notes'],
        evidence: 'Source: WORKLOG.md and docs/underworld-sustainable-world-system-design.md',
        boundary: 'Public claim boundary: present this as engineering hardening, not as production-grade hosting or always-on availability.'
    }
];

function UnderworldCaseStudy() {
    return (
        <main className="case-study-page underworld-page">
            <nav className="case-study-nav">
                <a href="/">Alan Hwader Chu</a>
                <div>
                    <a href="/#projects">Projects</a>
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </nav>

            <section className="case-study-hero underworld-hero">
                <span className="section__eyebrow">Applied AI System Roadmap</span>
                <h1>GIIS Underworld: persistent AI characters that can remember without drifting.</h1>
                <p>
                    A long-running school-world simulation built on AI Town. The interesting work is not just
                    making agents talk; it is building the runtime, memory gates, continuity audits, and product
                    boundaries that keep character memory useful instead of noisy.
                </p>
                <div className="case-study-tags">
                    <span>Agent memory</span>
                    <span>Rolling continuity</span>
                    <span>Emotional residue</span>
                    <span>Evaluation gates</span>
                    <span>Local runtime recovery</span>
                </div>
                <div className="underworld-architecture-poster" aria-label="Underworld memory and continuity architecture">
                    <div className="architecture-poster-header">
                        <span>Architecture Snapshot</span>
                        <strong>Memory is treated as a gated system, not a transcript dump.</strong>
                    </div>
                    <div className="architecture-layers">
                        {architectureLayers.map((layer) => (
                            <article key={layer.label}>
                                <h2>{layer.label}</h2>
                                <div>
                                    {layer.items.map((item) => (
                                        <span key={item}>{item}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="architecture-flow">
                        <span>Live interaction</span>
                        <i />
                        <span>Residue filter</span>
                        <i />
                        <span>Prompt read gate</span>
                        <i />
                        <span>Future behavior</span>
                    </div>
                </div>
            </section>

            <section className="underworld-snapshot">
                <article>
                    <span>Current state</span>
                    <strong>Active research prototype</strong>
                    <p>Built around memory, continuity, and runtime gates, with empirical claims kept separate from product exploration.</p>
                </article>
                <article>
                    <span>Core question</span>
                    <strong>What should a character carry forward?</strong>
                    <p>Memory must preserve continuity without leaking stale, misattributed, or repetitive traces.</p>
                </article>
                <article>
                    <span>Engineering stance</span>
                    <strong>Evidence before claims</strong>
                    <p>Product readiness, paper readiness, and emotional-residue research are kept as separate lanes.</p>
                </article>
            </section>

            <section className="underworld-theme-index" aria-label="Underworld case study topic index">
                <span className="section__eyebrow">Case Study Topics</span>
                <div>
                    {underworldThemes.map((theme) => (
                        <a key={theme.id} href={`#${theme.id}`}>{theme.title}</a>
                    ))}
                </div>
            </section>

            <section className="underworld-section">
                <div className="case-study-section-heading">
                    <span className="section__eyebrow">System Map</span>
                    <h2>Rolling continuity loop</h2>
                    <p>
                        The world runs as a loop: live interaction creates traces, audits classify them, and only
                        approved signals are allowed to shape future behavior.
                    </p>
                </div>
                <div className="continuity-diagram" aria-label="Rolling continuity system diagram">
                    <div className="diagram-node node-live">
                        <span>Live scene</span>
                        <strong>Characters speak, act, and react</strong>
                    </div>
                    <div className="diagram-arrow">Observe</div>
                    <div className="diagram-node node-eval">
                        <span>Audits</span>
                        <strong>Continuity, motif, provider, and quality checks</strong>
                    </div>
                    <div className="diagram-arrow">Filter</div>
                    <div className="diagram-node node-memory">
                        <span>Memory gates</span>
                        <strong>Residue candidates become safe traces or stay shadowed</strong>
                    </div>
                    <div className="diagram-arrow">Return</div>
                    <div className="diagram-node node-behavior">
                        <span>Future behavior</span>
                        <strong>Characters remember selectively, not everything</strong>
                    </div>
                </div>
            </section>

            <section className="underworld-section underworld-two-column">
                <div>
                    <div className="case-study-section-heading">
                        <span className="section__eyebrow">Memory Design</span>
                        <h2>Emotional residue pipeline</h2>
                        <p>
                            The design treats memory as an approval problem. A dramatic line is not automatically
                            a durable truth; it has to pass through relevance, safety, and pollution checks.
                        </p>
                    </div>
                    <div className="residue-pipeline">
                        {residueStages.map((stage) => (
                            <article key={stage.title}>
                                <span>{stage.label}</span>
                                <h3>{stage.title}</h3>
                                <p>{stage.body}</p>
                            </article>
                        ))}
                    </div>
                </div>
                <div className="evidence-panel">
                    <span className="section__eyebrow">Evidence Gates</span>
                    <h2>What has to stay green</h2>
                    <div className="gate-grid">
                        {gates.map((gate) => (
                            <span key={gate}>{gate}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="underworld-section">
                <div className="case-study-section-heading">
                    <span className="section__eyebrow">Roadmap</span>
                    <h2>Three lanes instead of one vague AI demo</h2>
                    <p>
                        The roadmap separates product behavior, system reliability, and research claims so each
                        lane can move without borrowing evidence from another.
                    </p>
                </div>
                <div className="roadmap-board">
                    {roadmapLanes.map((lane) => (
                        <article key={lane.phase}>
                            <div>
                                <span>{lane.phase}</span>
                                <strong>{lane.status}</strong>
                            </div>
                            <h3>{lane.title}</h3>
                            <ul>
                                {lane.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="underworld-section">
                <div className="case-study-section-heading">
                    <span className="section__eyebrow">Detailed Themes</span>
                    <h2>Three Underworld topics worth explaining publicly</h2>
                    <p>
                        These are the portfolio-safe lanes under the Underworld umbrella. Each one has
                        evidence, a diagram, and a boundary so the case study stays interesting without
                        overstating what the current system proves.
                    </p>
                </div>
                <div className="underworld-theme-grid">
                    {underworldThemes.map((theme) => (
                        <article id={theme.id} key={theme.id} className="underworld-theme-card">
                            <div className="theme-copy">
                                <span>{theme.eyebrow}</span>
                                <h3>{theme.title}</h3>
                                <p>{theme.body}</p>
                                <strong>{theme.evidence}</strong>
                                <em>{theme.boundary}</em>
                            </div>
                            <div className="theme-mini-diagram" aria-label={`${theme.title} diagram`}>
                                {theme.diagram.map((node, index) => (
                                    <React.Fragment key={node}>
                                        <span>{node}</span>
                                        {index < theme.diagram.length - 1 && <i />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="underworld-section underworld-principles">
                <article>
                    <h2>Why this is interesting</h2>
                    <p>
                        Most demos stop when the character says a good line once. Underworld asks the harder
                        question: can an AI character live with the consequences of yesterday without becoming
                        repetitive, overconfident, or polluted by bad traces?
                    </p>
                </article>
                <article>
                    <h2>What I owned</h2>
                    <p>
                        I worked across product framing, local runtime recovery, mobile playtesting, memory and
                        residue gates, continuity reports, and the evidence discipline that keeps the project
                        from overstating what the current system proves.
                    </p>
                </article>
            </section>
        </main>
    );
}

export default UnderworldCaseStudy;
