import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="eyebrow">
          <span className="beats">
            <span /><span /><span />
          </span>
          Projects
        </p>
        <h2 className="section-title">Work I've shipped and work in progress.</h2>
        <p className="section-intro">
          Three projects that span fintech, systems concurrency, and applied computer vision.
        </p>

        <div className="projects-list">
          {projects.map((project, i) => (
            <article className="project-card" key={project.title}>
              <div className="project-index">{String(i + 1).padStart(2, '0')}</div>

              <div>
                <h3>{project.title}</h3>
                <span className="subtitle">{project.subtitle}</span>
                <p className="description">{project.description}</p>
                <div className="stack-tags">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="project-status">{project.status}</div>
                <div className="project-links">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}
                  {project.links.repo && (
                    <a href={project.links.repo} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
