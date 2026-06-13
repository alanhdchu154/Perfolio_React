import React from 'react';
import styles from "./AboutMe.module.css";

function AboutMe() {
    const resumePath = '/Resume.pdf';

    return (
        <section className={`section ${styles.selfIntro}`} id="about">
            <div className="section__intro">
                <span className="section__eyebrow">About</span>
                <h2>Engineering judgment for real operating systems.</h2>
                <p>
                    I focus on backend and data systems that make ambiguous operational signals usable.
                    At Walmart, I worked on nationwide tooling where reliability, governance, and clear
                    decision context mattered more than demo polish.
                </p>
                <p>
                    I am pursuing an M.S. in Artificial Intelligence at UT Austin and building AI/EdTech
                    systems around coordination, triage, and simulation. My best-fit roles combine
                    engineering depth, data judgment, and practical product sense.
                </p>
            </div>
            <div className="profile-panel">
                <div>
                    <span className="metric">5+</span>
                    <p>years shipping software, data, and automation workflows</p>
                </div>
                <div>
                    <span className="metric">10+</span>
                    <p>years across STEM education and international learning programs</p>
                </div>
                <div>
                    <span className="metric">AI</span>
                    <p>coordination systems, decision support, and simulation</p>
                </div>
                <a className="button button--primary" href={resumePath} target="_blank" rel="noopener noreferrer">
                    Open Resume
                </a>
            </div>
        </section>
    );
}

export default AboutMe;
