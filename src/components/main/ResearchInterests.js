import React from 'react';

function ResearchInterests() {
    const interests = [
        {
            title: 'Education psychology',
            body: 'How students disclose pressure, confusion, avoidance, and motivation gaps when support feels safer.'
        },
        {
            title: 'AI sociology',
            body: 'How agents, memory, routines, and simulated institutions change the social layer around learning.'
        },
        {
            title: 'Human-AI coordination',
            body: 'How AI can mediate between students, parents, teachers, and schools without becoming surveillance.'
        }
    ];

    return (
        <section className="section research-section" id="research">
            <div className="section__intro">
                <span className="section__eyebrow">Research Direction</span>
                <h2>Exploring education psychology and AI sociology</h2>
                <p>
                    I am mapping how AI changes trust, coordination, disclosure, and institutional behavior
                    around learning.
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
