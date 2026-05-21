import React from 'react';
import workExperience from '../../../data/workExperience.json';

function WorkExperience() {
    return (
        <section className="section experience-section" id="experience">
            <div className="section__intro">
                <span className="section__eyebrow">Experience</span>
                <h2>Engineering experience with data-heavy operations and education systems.</h2>
            </div>

            {workExperience.map((job, index) => (
                <article key={index} className="experience-item">
                    <div className="experience-item__header">
                        <h3>{job.title}</h3>
                        <span>{job.duration}</span>
                    </div>
                    <h4>{job.company}</h4>
                    <ul>
                        {job.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    );
}

export default WorkExperience;
