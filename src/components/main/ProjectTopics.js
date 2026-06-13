import React from 'react';

const topics = [
    {
        title: 'Soul Depth and LLM Influence',
        label: 'Underworld research system',
        body: 'How a character profile becomes more than a prompt: public behavior, private tension, relational stance, emotional residue, and behavioral drift all shape what the LLM should remember or ignore.',
        diagram: 'soul',
        detailsHref: '/case-studies/giis-underworld#soul-architecture'
    },
    {
        title: 'Memory, Residue, and Rolling Continuity',
        label: 'Long-running agent simulation',
        body: 'A live conversation becomes a residue candidate, passes safety and relevance gates, and only then affects future behavior. The point is selective continuity, not storing everything.',
        diagram: 'residue',
        detailsHref: '/case-studies/giis-underworld#memory-pipeline'
    },
    {
        title: 'Privacy-Aware Multi-Party Coordination',
        label: 'Three-party AI benchmark',
        body: 'Student, parent, and teacher perspectives stay separated by a privacy wall. The coordinator works from abstractions and reviewer gates rather than raw private disclosures.',
        diagram: 'privacy',
        detailsHref: 'https://github.com/alanhdchu154/three-party-ai-mvp'
    },
    {
        title: 'School Operations and Trust Infrastructure',
        label: 'GIIS platform work',
        body: 'Public trust, academic workflows, manual review sales, and evidence gates turn a school website into an operating surface instead of just a brochure.',
        diagram: 'ops',
        detailsHref: 'https://github.com/alanhdchu154/GIIS-website.git'
    }
];

function TopicDiagram({ type }) {
    if (type === 'soul') {
        return (
            <svg className="topic-svg" viewBox="0 0 640 360" role="img" aria-label="Five layer soul depth and LLM influence diagram">
                <rect x="0" y="0" width="640" height="360" rx="16" fill="#132238" />
                <text x="28" y="42" fill="#a7f3d0" fontSize="16" fontWeight="800">Five-layer soul model</text>
                <text x="28" y="66" fill="#d6dee8" fontSize="12">A conversation is interpreted through character depth before it can become memory.</text>
                {[
                    ['1', 'Public Self', 'visible behavior'],
                    ['2', 'Private Self', 'hidden fear / desire'],
                    ['3', 'Relational Self', 'who this person is to me'],
                    ['4', 'Emotional Residue', 'what remains after the scene'],
                    ['5', 'Behavioral Drift', 'how tomorrow changes']
                ].map(([index, title, note], itemIndex) => (
                    <g key={title} transform={`translate(28 ${96 + itemIndex * 44})`}>
                        <rect width="268" height="32" rx="8" fill={itemIndex === 3 ? '#0f766e' : 'rgba(255,255,255,0.1)'} stroke="rgba(255,255,255,0.2)" />
                        <circle cx="17" cy="16" r="10" fill="#ffffff" />
                        <text x="13" y="20" fill="#132238" fontSize="11" fontWeight="800">{index}</text>
                        <text x="38" y="14" fill="#ffffff" fontSize="12" fontWeight="800">{title}</text>
                        <text x="38" y="27" fill="#d6dee8" fontSize="10">{note}</text>
                    </g>
                ))}
                <path d="M328 176 H420" stroke="#a7f3d0" strokeWidth="3" markerEnd="url(#topicArrow)" />
                <defs>
                    <marker id="topicArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                        <path d="M0 0 L8 4 L0 8 Z" fill="#a7f3d0" />
                    </marker>
                </defs>
                <rect x="430" y="112" width="178" height="120" rx="12" fill="#f8fafc" />
                <text x="448" y="144" fill="#132238" fontSize="15" fontWeight="800">LLM memory gate</text>
                <text x="448" y="169" fill="#334155" fontSize="11">Does this moment</text>
                <text x="448" y="185" fill="#334155" fontSize="11">deserve to affect</text>
                <text x="448" y="201" fill="#334155" fontSize="11">future behavior?</text>
                <rect x="430" y="250" width="178" height="50" rx="10" fill="#ecfdf5" stroke="#0f766e" />
                <text x="448" y="280" fill="#0f766e" fontSize="13" fontWeight="800">Selective continuity</text>
            </svg>
        );
    }

    if (type === 'privacy') {
        return (
            <div className="topic-flow topic-flow--privacy">
                <span>Student private chat</span>
                <span>Abstraction layer</span>
                <span>Coordinator</span>
                <span>Parent / teacher safe report</span>
            </div>
        );
    }

    if (type === 'ops') {
        return (
            <div className="topic-stack">
                <span>Parent trust path</span>
                <span>Academic operations</span>
                <span>Manual review sales</span>
                <span>Production gates</span>
            </div>
        );
    }

    return (
        <div className="topic-flow">
            <span>Live conversation</span>
            <span>Residue candidate</span>
            <span>Safety gates</span>
            <span>Future behavior</span>
        </div>
    );
}

function ProjectTopics() {
    return (
        <section className="section topics-section" id="topics">
            <div className="section__intro">
                <span className="section__eyebrow">Project Topics</span>
                <h2>Systems I am actively turning into clearer public case studies.</h2>
                <p>
                    This is the living layer between project work and polished portfolio case studies:
                    each topic has a system diagram, a public-safe framing, and a path for weekly updates.
                </p>
            </div>
            <div className="topics-grid">
                {topics.map((topic) => (
                    <article className="topic-card" key={topic.title}>
                        <TopicDiagram type={topic.diagram} />
                        <div>
                            <span>{topic.label}</span>
                            <h3>{topic.title}</h3>
                            <p>{topic.body}</p>
                            <a
                                className="button button--secondary topic-link"
                                href={topic.detailsHref}
                                target={topic.detailsHref.startsWith('http') ? '_blank' : undefined}
                                rel={topic.detailsHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                                Read Details
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ProjectTopics;
