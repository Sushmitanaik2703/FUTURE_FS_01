import { about } from '../data/portfolioData';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="eyebrow">
          <span className="beats">
            <span /><span /><span />
          </span>
          About
        </p>
        <h2 className="section-title">A little rhythm, a lot of systems thinking.</h2>

        <div className="about-grid">
          <div>
            <p>{about.intro}</p>
            {about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="highlight-list">
            {about.highlights.map((h) => (
              <div className="item" key={h.label}>
                <div className="label">{h.label}</div>
                <div className="value">{h.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
