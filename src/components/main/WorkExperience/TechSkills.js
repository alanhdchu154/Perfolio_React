import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const skillGroups = [
    {
        title: 'Software Engineering',
        skills: ['Python', 'Java', 'Spring Boot', 'FastAPI', 'React', 'Node.js', 'REST APIs']
    },
    {
        title: 'Data & Operations',
        skills: ['SQL', 'ETL pipelines', 'Airflow-style workflows', 'BigQuery', 'Tableau', 'Grafana', 'Splunk']
    },
    {
        title: 'AI Systems',
        skills: ['LLM applications', 'ML workflows', 'Prompted agents', 'Synthetic evaluation', 'Simulation design']
    },
    {
        title: 'Product Context',
        skills: ['EdTech', 'Academic operations', 'STEM programs', 'Student research workflows', 'Cross-cultural communication']
    }
];

function TechSkills() {
    return (
        <section className="section skills-section">
            <div className="section__intro">
                <span className="section__eyebrow">Skills</span>
                <h2>SDE foundation, data instincts, and applied AI product context.</h2>
            </div>
            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <article className="skill-card" key={group.title}>
                        <h3>{group.title}</h3>
                        <div className="tag-list">
                            {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default TechSkills;
