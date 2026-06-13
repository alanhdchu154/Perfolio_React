import React from 'react';

const topics = [
    {
        id: 'privacy-wall',
        eyebrow: 'Topic 1',
        title: 'Privacy wall coordination',
        body: 'The system separates private student, parent, and teacher conversations from the coordination layer. The coordinator receives abstracted profiles and protected signals, not raw disclosures.',
        diagram: ['Private chats', 'Abstraction', 'Privacy wall', 'Coordinator'],
        boundary: 'Public boundary: this is a reference architecture and benchmark setting, not a deployed real-student privacy guarantee.'
    },
    {
        id: 'synthetic-benchmark',
        eyebrow: 'Topic 2',
        title: 'Synthetic benchmark design',
        body: 'The corpus stress-tests shallow, medium, and deep support scenarios so the system can evaluate false escalation, under-escalation, privacy probes, and reconstructability risk before touching real minors data.',
        diagram: ['Shallow cases', 'Medium cases', 'Deep cases', 'Stress tests'],
        boundary: 'Current audit: 348 synthetic conversations on 2026-06-13. Synthetic distribution must not be presented as real student behavior.'
    },
    {
        id: 'party-aware-reports',
        eyebrow: 'Topic 3',
        title: 'Party-aware reporting',
        body: 'Parent-safe and teacher-safe reports should explain useful support actions without exposing raw private details, quotes, or reconstructable events from another party.',
        diagram: ['Coordinator snapshot', 'Parent-safe view', 'Teacher-safe view', 'Reviewer view'],
        boundary: 'Public boundary: report usefulness is evaluated as a prototype artifact, not as a validated school outcome.'
    },
    {
        id: 'human-review-gate',
        eyebrow: 'Topic 4',
        title: 'Human review gate',
        body: 'The benchmark treats AI as support infrastructure around human reviewers. Privacy, escalation, and actionability should pass review before any real-world pilot claim.',
        diagram: ['Leak audit', 'Triage check', 'Reviewer rubric', 'Release decision'],
        boundary: 'Public boundary: no autonomous counseling, clinical validity, or pilot-readiness claim without consent, crisis handoff, deletion, and reviewer ownership.'
    }
];

const summary = [
    ['Project shape', 'Research prototype and synthetic benchmark'],
    ['Current evidence', '348 synthetic conversations audited on 2026-06-13'],
    ['Claim boundary', 'No real-student validation claim']
];

function TopicDiagram({ nodes, title }) {
    return (
        <div className="case-topic-diagram" aria-label={`${title} diagram`}>
            {nodes.map((node, index) => (
                <React.Fragment key={node}>
                    <span>{node}</span>
                    {index < nodes.length - 1 && <i />}
                </React.Fragment>
            ))}
        </div>
    );
}

function ThreePartyCaseStudy() {
    return (
        <main className="case-study-page three-party-page">
            <nav className="case-study-nav">
                <a href="/">Alan Hwader Chu</a>
                <div>
                    <a href="/#projects">Projects</a>
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </nav>

            <section className="case-study-hero three-party-hero">
                <span className="section__eyebrow">Applied AI Benchmark Case Study</span>
                <h1>Three-Party AI: coordinating support without collapsing privacy.</h1>
                <p>
                    A research prototype and synthetic benchmark for student-parent-teacher support
                    coordination. The system explores how private disclosures can become safe,
                    human-reviewable support signals without exposing raw conversations.
                </p>
                <div className="case-study-tags">
                    <span>Privacy wall</span>
                    <span>Synthetic benchmark</span>
                    <span>Party-aware reports</span>
                    <span>Human review</span>
                    <span>Responsible AI</span>
                </div>
                <div className="three-party-map" aria-label="Three-party AI coordination map">
                    <div className="party-column">
                        <span>Student</span>
                        <span>Parent</span>
                        <span>Teacher</span>
                    </div>
                    <i />
                    <div className="party-core">
                        <strong>Privacy abstraction layer</strong>
                        <span>Raw disclosures stay separated from coordination.</span>
                    </div>
                    <i />
                    <div className="party-output">
                        <span>Coordinator</span>
                        <span>Triage</span>
                        <span>Safe reports</span>
                    </div>
                </div>
            </section>

            <section className="case-study-summary">
                {summary.map(([label, value]) => (
                    <article key={label}>
                        <span>{label}</span>
                        <strong>{value}</strong>
                    </article>
                ))}
            </section>

            <section className="case-topic-index" aria-label="Three-party case study topics">
                <span className="section__eyebrow">Case Study Topics</span>
                <div>
                    {topics.map((topic) => (
                        <a key={topic.id} href={`#${topic.id}`}>{topic.title}</a>
                    ))}
                </div>
            </section>

            <section className="case-topic-grid">
                {topics.map((topic) => (
                    <article id={topic.id} key={topic.id} className="case-topic-card">
                        <div>
                            <span>{topic.eyebrow}</span>
                            <h2>{topic.title}</h2>
                            <p>{topic.body}</p>
                            <em>{topic.boundary}</em>
                        </div>
                        <TopicDiagram nodes={topic.diagram} title={topic.title} />
                    </article>
                ))}
            </section>

            <section className="case-study-close">
                <h2>Why This Work Matters</h2>
                <p>
                    This project frames AI coordination as an accountability problem: useful support should
                    preserve privacy boundaries, stay evidence-grounded, and keep humans responsible for
                    sensitive decisions.
                </p>
                <a className="button button--primary" href="https://github.com/alanhdchu154/three-party-ai-mvp.git" target="_blank" rel="noopener noreferrer">View Repository</a>
            </section>
        </main>
    );
}

export default ThreePartyCaseStudy;
