import React from "react";

function ContactForm() {
    return (
        <section className="section contact-section" id="contact">
            <div className="section__intro">
                <span className="section__eyebrow">Contact</span>
                <h2>Let’s talk about software, AI systems, or education technology.</h2>
            </div>
            <div className="form-group">
                <form name="contact" netlify="true" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" id="name" name="name" required />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" id="email" name="email" required />
                    </p>
                    <p>
                        <label htmlFor="message">Message</label> <br />
                        <textarea id="message" name="message" required></textarea>
                    </p>
                    <p>
                        <button type="submit" className="button button--primary">Submit</button>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
