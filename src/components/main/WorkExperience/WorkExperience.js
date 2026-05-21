import React from 'react';
import workExperience from '../../../data/workExperience.json';

function WorkExperience() {
    return (
        <section className="section experience-section" id="experience">
            <div className="section__intro">
                <span className="section__eyebrow">Experience</span>
                <h2>Engineering experience with data-heavy operations and education systems.</h2>
            </div>

            <div className="experience-list">
                {workExperience.map((job, index) => (
                    <article key={index} className="experience-item">
                        <div className="experience-item__header">
                            <span>{job.duration}</span>
                            <h3>{job.title}</h3>
                            <h4>{job.company}</h4>
                            {job.tags && (
                                <div className="experience-tags">
                                    {job.tags.map((tag) => <strong key={tag}>{tag}</strong>)}
                                </div>
                            )}
                        </div>
                        <ul>
                            {job.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default WorkExperience;
