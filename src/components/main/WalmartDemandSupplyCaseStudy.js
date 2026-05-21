import React from 'react';

const sections = [
    {
        title: 'Problem',
        body: 'Large-scale retail operations constantly balance customer demand, available supply, driver capacity, service-zone constraints, and local execution realities. The useful engineering problem was not only computing a metric, but making imbalance signals understandable enough for operators to trust and act on.'
    },
    {
        title: 'Scale',
        body: 'The work supported nationwide operating views across thousands of stores and regional delivery zones. Details are intentionally abstracted, but the core challenge was building workflows that remained useful across many local contexts instead of optimizing for one isolated market.'
    },
    {
        title: 'My Role',
        body: 'I contributed backend and data workflow implementation: transforming operational inputs, tightening signal definitions, supporting monitoring views, improving data quality checks, and helping turn ambiguous business questions into maintainable decision-support tooling.'
    },
    {
        title: 'Technical Shape',
        body: 'The system required Python and SQL-heavy data work, backend workflow logic, monitoring/observability, and careful handling of changing operational assumptions. The emphasis was reliability, traceability, and clear handoff from raw signal to field-facing decision context.'
    },
    {
        title: 'Constraints',
        body: 'The project operated under normal enterprise constraints: confidential data, evolving business rules, high-volume inputs, cross-functional stakeholders, and the need to avoid brittle one-off scripts. This case study intentionally avoids internal names, table structures, exact KPIs, and proprietary business logic.'
    },
    {
        title: 'Impact',
        body: 'The value was actionable visibility: surfacing where imbalance patterns, bottlenecks, or data quality issues deserved attention so operations teams could triage faster and reason from shared signals instead of scattered manual interpretation.'
    }
];

function WalmartDemandSupplyCaseStudy() {
    return (
        <main className="case-study-page">
            <nav className="case-study-nav">
                <a href="/">Alan Hwader Chu</a>
                <div>
                    <a href="/#projects">Projects</a>
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </nav>
            <section className="case-study-hero">
                <span className="section__eyebrow">Confidential Case Study</span>
                <h1>Enterprise Demand-Supply Gap Decision System</h1>
                <p>
                    A confidential Walmart operations project, abstracted for portfolio use. This case study
                    focuses on the engineering shape: data-heavy backend workflows, operational analytics,
                    observability, and decision support at national retail scale.
                </p>
                <div className="case-study-tags">
                    <span>Backend workflows</span>
                    <span>Operational analytics</span>
                    <span>Data quality</span>
                    <span>Decision support</span>
                    <span>Enterprise scale</span>
                </div>
            </section>
            <section className="case-study-summary">
                <article>
                    <span>Role</span>
                    <strong>Software Engineer, Data & Operations Systems</strong>
                </article>
                <article>
                    <span>Domain</span>
                    <strong>Nationwide retail operations</strong>
                </article>
                <article>
                    <span>Disclosure</span>
                    <strong>Internal details abstracted</strong>
                </article>
            </section>
            <section className="case-study-content">
                {sections.map((section) => (
                    <article key={section.title}>
                        <h2>{section.title}</h2>
                        <p>{section.body}</p>
                    </article>
                ))}
            </section>
            <section className="case-study-close">
                <h2>Why This Work Matters</h2>
                <p>
                    This is the clearest example of the kind of work I want to keep doing: backend and data
                    systems that make complex operations legible, reliable, and actionable for real teams.
                </p>
                <a className="button button--primary" href="mailto:alanhdchu.dev@gmail.com">alanhdchu.dev@gmail.com</a>
            </section>
        </main>
    );
}

export default WalmartDemandSupplyCaseStudy;
