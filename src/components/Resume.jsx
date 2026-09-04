import { resumeTimeline, certifications, profile } from '../data/portfolioData';

export default function Resume() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <p className="eyebrow">
          <span className="beats">
            <span /><span /><span />
          </span>
          Resume
        </p>
        <h2 className="section-title">The path so far.</h2>
        <p className="section-intro">
          A timeline of education, hackathons, and certifications.{' '}
          <a href={profile.resumeFile} target="_blank" rel="noreferrer" style={{ color: 'var(--gold)' }}>
            Download the full PDF →
          </a>
        </p>

        <div className="timeline">
          {resumeTimeline.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className="year">{item.year}</div>
              <h3>{item.title}</h3>
              <span className="org">{item.org}</span>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="cert-list">
          {certifications.map((cert) => (
            <div className="cert" key={cert.name}>
              <span>{cert.name}</span>
              <span className="grade">{cert.grade}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
