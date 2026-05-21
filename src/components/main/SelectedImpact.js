import React from 'react';

const impactItems = [
    {
        metric: 'US-scale',
        title: 'Enterprise operations',
        body: 'Worked on systems that reason across thousands of stores and regional operating zones, where reliability and clarity matter more than demo polish.'
    },
    {
        metric: 'Data + backend',
        title: 'Decision workflows',
        body: 'Built APIs, pipelines, monitoring views, and automation that turn operational signals into actions for field and business teams.'
    },
    {
        metric: 'AI systems',
        title: 'Applied intelligence',
        body: 'Exploring LLM coordination, triage, simulation, and AI-assisted workflows with privacy and human trust as first-class constraints.'
    },
    {
        metric: 'Operator mindset',
        title: 'Ambiguous problems',
        body: 'Comfortable moving from messy requirements to maintainable systems, especially in education, logistics, operations, and internal tooling.'
    }
];

function SelectedImpact() {
    return (
        <section className="section impact-section" id="impact">
            <div className="section__intro">
                <span className="section__eyebrow">Selected Impact</span>
                <h2>What I want hiring teams to notice first.</h2>
            </div>
            <div className="impact-grid">
                {impactItems.map((item) => (
                    <article className="impact-card" key={item.title}>
                        <span>{item.metric}</span>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default SelectedImpact;
