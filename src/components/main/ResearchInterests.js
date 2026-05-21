import React from 'react';

function ResearchInterests() {
    const interests = [
        {
            title: 'AI worlds as social systems',
            body: 'How agent-based environments create norms, incentives, memory, routines, and emergent culture instead of only answering prompts.'
        },
        {
            title: 'Education coordination through AI',
            body: 'How student, parent, teacher, and coordinator perspectives can be mediated without collapsing privacy or trust.'
        },
        {
            title: 'Simulation as product design',
            body: 'Using synthetic worlds and controlled scenarios to reason about school operations, student support, and human-AI workflows before real deployment.'
        }
    ];

    return (
        <section className="section research-section" id="research">
            <div className="section__intro">
                <span className="section__eyebrow">Research Direction</span>
                <h2>AI sociology, worldbuilding, and human coordination</h2>
                <p>
                    My current interest is less about isolated chatbots and more about AI as a social
                    infrastructure: systems that shape how people disclose information, coordinate decisions,
                    and live inside simulated or semi-simulated worlds.
                </p>
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
