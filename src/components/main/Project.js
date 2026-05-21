import styles from "./project.module.css";

function Project(props) {
    const { project } = props;
    return (
        <article className={styles.container}>
            <div className={styles.header}>
                <span>{project.category}</span>
                <strong>{project.status}</strong>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
                {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>
            <div className={styles.techList}>
                {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                ))}
            </div>
            {project.caseStudy && (
                <a className="button button--primary" href={project.caseStudy}>
                    Read Case Study
                </a>
            )}
            {project.github ? (
                <a className="button button--secondary" href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            ) : !project.caseStudy && (
                <span className={styles.privateNote}>Confidential work - details abstracted for portfolio use.</span>
            )}
            {!project.github && project.caseStudy && (
                <span className={styles.privateNote}>Confidential work - details abstracted for portfolio use.</span>
            )}
        </article>
    );
}

export default Project;
