const projects = [
  {
    number: "01",
    title: "Travel Buddy Finder",
    subtitle: "MERN • Real-time collaboration",
    description:
      "A web application that helps travelers discover and connect with people planning similar trips. It includes trip creation, location selection, travel preferences, requests, and real-time communication.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    status: "PROJECT",
  },
  {
    number: "02",
    title: "BorderVision AI",
    subtitle: "AI • CCTV Video Analytics",
    description:
      "A video analytics platform designed to analyze CCTV footage using machine learning for person and vehicle detection, tracking, restricted-zone monitoring, and automated alerts.",
    technologies: ["Python", "Machine Learning", "Computer Vision"],
    status: "SIH 2026",
  },
  {
    number: "03",
    title: "Movie Ticket Booking System",
    subtitle: "Backend • Concurrency",
    description:
      "A backend-focused movie booking system concept designed around reliable seat reservation, concurrency handling, notifications, and a smooth booking workflow.",
    technologies: ["Node.js", "Express", "MongoDB", "Redis"],
    status: "IN PROGRESS",
  },
  {
    number: "04",
    title: "Assignment Workflow & Submission Tracking",
    subtitle: "Web Application • Backend",
    description:
      "A web application for managing assignments, submissions, and workflow between users through a structured backend system.",
    technologies: ["Node.js", "Express", "MongoDB"],
    status: "PROJECT",
  },
  {
    number: "05",
    title: "Personal Portfolio",
    subtitle: "Frontend • Personal Website",
    description:
      "A personal portfolio website showcasing my projects, technical skills, learning journey, and experience as a Computer Science Engineering student.",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    status: "LIVE",
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">

        <p className="eyebrow">PROJECTS</p>

        <h2 className="section-title">
          Things I’ve built
          <br />
          <span>&amp; explored.</span>
        </h2>

        <p className="section-intro">
          A selection of academic, personal, and hands-on projects where
          I’ve explored web development, backend systems, AI, and real-world
          problem solving.
        </p>

        <div className="projects-list">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.title}
            >

              <div className="project-index">
                {project.number}
              </div>

              <div className="project-main">

                <p className="project-status">
                  {project.status}
                </p>

                <h3>
                  {project.title}
                </h3>

                <span className="subtitle">
                  {project.subtitle}
                </span>

                <p className="description">
                  {project.description}
                </p>

                <div className="stack-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              <div className="project-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}