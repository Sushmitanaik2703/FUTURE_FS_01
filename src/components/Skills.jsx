const skillGroups = [
  {
    category: "Languages",
    items: ["Java", "C", "JavaScript", "Python"],
  },
  {
    category: "Frontend",
    items: ["HTML & CSS", "React", "Vite"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Google Cloud"],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">

        <p className="eyebrow">SKILLS</p>

        <h2 className="section-title">
          Tools I use
          <br />
          <span>to build.</span>
        </h2>

        <p className="section-intro">
          A practical set of technologies I’ve been learning and using
          through coursework, projects, and hands-on challenges.
        </p>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <div
              className="skill-card"
              key={group.category}
            >
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{group.category}</h3>

              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}