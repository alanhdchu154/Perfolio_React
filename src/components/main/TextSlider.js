import React, { useState, useEffect } from 'react';

function TextSlider(props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((currentIndex) => (currentIndex + 1) % props.textList.length);
        }, props.interval || 1500);
        return () => clearInterval(intervalId);
    }, [props.interval, props.textList.length]);

    return (
        <section className="hero" id="home">
            <div className="hero__eyebrow">Alan Hwader Chu</div>
            <h1>Software engineer for backend, data, and applied AI systems.</h1>
            <p>
                I build practical systems for operations: reliable workflows, clearer signals,
                and tools people can use when the problem is messy.
            </p>
            <div className="hero__role">Current focus: {props.textList[index]}.</div>
            <div className="hero__actions">
                <a className="button button--primary" href="#projects">View Projects</a>
                <a className="button button--secondary" href="#experience">Experience</a>
                <a className="button button--secondary" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </section>
    );

}

export default TextSlider;
