import React from "react";
import Project from "./Project";
import projectDetails from "./projectDetails";

function Projects() {
    return (
        <section className="section projects-section" id="projects">
            <div className="section__intro">
                <span className="section__eyebrow">Selected Case Studies & Projects</span>
                <h2>Public-safe evidence for the work behind my positioning.</h2>
                <p>
                    A few examples across enterprise operations, EdTech, applied AI coordination,
                    and long-running simulation systems.
                </p>
            </div>
            <div className="projects-grid">
            {projectDetails.map((project) => (
                <Project project={project} key={project.title} />
            ))}
            </div>
        </section>
    );
}

export default Projects;
