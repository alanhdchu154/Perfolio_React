import React from "react";

function ContactForm() {
    return (
        <section className="section contact-section" id="contact">
            <div className="section__intro">
                <span className="section__eyebrow">Contact</span>
                <h2>Let’s talk about backend systems, data platforms, and applied AI roles.</h2>
                <p>
                    The fastest way to reach me is email or LinkedIn.
                </p>
            </div>
            <div className="contact-actions">
                <a className="button button--primary" href="mailto:alanhdchu.dev@gmail.com">alanhdchu.dev@gmail.com</a>
                <a className="button button--secondary" href="https://www.linkedin.com/in/alan-hwader-chu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="button button--secondary" href="https://github.com/alanhdchu154" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="button button--secondary" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </section>
    );
}

export default ContactForm;
