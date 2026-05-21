import React from "react";
import Project from "./Project";
import projectDetails from "./projectDetails";

function Projects() {
    return (
        <section className="section projects-section" id="projects">
            <div className="section__intro">
                <span className="section__eyebrow">Selected Projects</span>
                <h2>Recent work that best represents my current direction.</h2>
                <p>
                    These projects emphasize enterprise-scale data systems, applied AI products,
                    education technology, and simulation work with real operational constraints.
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
