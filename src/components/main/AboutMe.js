import React from 'react';
import styles from "./AboutMe.module.css";

function AboutMe() {
    const resumePath = '/Resume.pdf';

    return (
        <section className={`section ${styles.selfIntro}`} id="about">
            <div className="section__intro">
                <span className="section__eyebrow">About</span>
                <h2>Software, data, and applied AI with an operator's sense of reality.</h2>
                <p>
                    I am a software engineer focused on backend systems, data workflows, operational analytics,
                    and applied AI. At Walmart, I worked on nationwide operations tooling where messy business
                    signals had to become reliable systems for decision-making.
                </p>
                <p>
                    I am also pursuing an M.S. in Artificial Intelligence at UT Austin and building AI/EdTech
                    systems around coordination, triage, and simulated worlds. I am strongest in roles that
                    combine software engineering, data systems, and high-ambiguity product judgment.
                </p>
            </div>
            <div className="profile-panel">
                <div>
                    <span className="metric">5+</span>
                    <p>years shipping software, data, and automation workflows across enterprise and startup contexts</p>
                </div>
                <div>
                    <span className="metric">10+</span>
                    <p>years across STEM education, mentorship, and international learning programs</p>
                </div>
                <div>
                    <span className="metric">AI</span>
                    <p>applied AI focus across coordination systems, decision support, and simulation</p>
                </div>
                <a className="button button--primary" href={resumePath} target="_blank" rel="noopener noreferrer">
                    Open Resume
                </a>
            </div>
        </section>
    );
}

export default AboutMe;
