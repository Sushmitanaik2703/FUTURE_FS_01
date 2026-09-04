import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="eyebrow">
          <span className="beats">
            <span /><span /><span />
          </span>
          Skills
        </p>
        <h2 className="section-title">Tools I reach for, and trust.</h2>
        <p className="section-intro">
          A working set built through coursework, certifications, and shipped projects —
          not a checklist.
        </p>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
