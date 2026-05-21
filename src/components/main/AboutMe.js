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
                    I am a software engineer with experience in backend services, data pipelines, automation,
                    and analytics systems. At Walmart, I worked on real-time operations workflows, Python and
                    SQL data tooling, monitoring, and backend APIs that helped turn operational signals into
                    faster decisions.
                </p>
                <p>
                    I am also pursuing an M.S. in Artificial Intelligence at UT Austin and building education-AI
                    systems around GIIS, three-party coordination, and AI-driven simulated worlds. The common
                    thread is practical: build systems that are understandable, testable, and useful when real
                    people depend on them.
                </p>
            </div>
            <div className="profile-panel">
                <div>
                    <span className="metric">3+</span>
                    <p>years shipping software and data workflows in enterprise and startup contexts</p>
                </div>
                <div>
                    <span className="metric">10+</span>
                    <p>years across STEM education, mentorship, and international learning programs</p>
                </div>
                <div>
                    <span className="metric">AI</span>
                    <p>focused on applied AI, coordination systems, and human-centered automation</p>
                </div>
                <a className="button button--primary" href={resumePath} target="_blank" rel="noopener noreferrer">
                    Open Resume
                </a>
            </div>
        </section>
    );
}

export default AboutMe;
