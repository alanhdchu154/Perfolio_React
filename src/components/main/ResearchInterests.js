import React from 'react';

function ResearchInterests() {
    const interests = [
        {
            title: 'Education psychology',
            body: 'Exploring how students disclose pressure, confusion, avoidance, and motivation gaps when the system gives them a safer way to be understood.'
        },
        {
            title: 'AI sociology',
            body: 'Studying AI agents, memory, routines, norms, and simulated institutions as a new layer of social reality around learning.'
        },
        {
            title: 'Human-AI coordination',
            body: 'Thinking about how AI can mediate between students, parents, teachers, and schools without turning support into surveillance.'
        }
    ];

    return (
        <section className="section research-section" id="research">
            <div className="section__intro">
                <span className="section__eyebrow">Research Direction</span>
                <h2>Exploring education psychology and AI sociology</h2>
                <p>
                    I am still mapping this world: how AI changes the social layer around learning,
                    how students become willing to share what they actually feel, and how simulated
                    AI worlds can help us reason about trust, coordination, and institutional behavior.
                </p>
                <a
                    className="button button--secondary research-link"
                    href="https://github.com/alanhdchu154/Perfolio_React/blob/main/docs/ai-sociology-education-psychology-knowledge-map.md"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read working map
                </a>
            </div>
            <div className="research-grid">
                {interests.map((interest) => (
                    <article className="research-card" key={interest.title}>
                        <h3>{interest.title}</h3>
                        <p>{interest.body}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ResearchInterests;
