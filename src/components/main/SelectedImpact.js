import React from 'react';

const impactItems = [
    {
        metric: 'US-scale',
        title: 'Enterprise operations',
        body: 'Built for large operating networks where reliability, governance, and shared signals matter.'
    },
    {
        metric: 'Data + backend',
        title: 'Decision systems',
        body: 'Turned messy inputs into APIs, pipelines, monitoring views, and decision-support workflows.'
    },
    {
        metric: 'AI systems',
        title: 'Applied intelligence',
        body: 'Building LLM coordination, privacy-aware reporting, agent memory, and evaluation gates.'
    }
];

const targetRoles = [
    'Backend / Data Platform Engineer',
    'Backend Engineer, Operations Systems',
    'Applied AI Engineer',
    'Analytics Engineering'
];

function SelectedImpact() {
    return (
        <section className="section impact-section" id="impact">
            <div className="section__intro">
                <span className="section__eyebrow">Selected Impact</span>
                <h2>The signal I want hiring teams to see quickly.</h2>
            </div>
            <div className="target-role-panel">
                <span>Target roles</span>
                <div className="target-role-list">
                    {targetRoles.map((role) => <strong key={role}>{role}</strong>)}
                </div>
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
