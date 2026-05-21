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
                    I replaced older bootcamp-era demos with projects that show software engineering,
                    data/AI systems, and product judgment in real operating environments.
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
