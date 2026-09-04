import { profile } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero-kicker">Full-stack &amp; backend developer</p>
        <h1>
          Building systems with <span className="accent">precision</span> and rhythm.
        </h1>
        <p className="tagline">
          {profile.tagline}
          <span className="type-cursor" aria-hidden="true" />
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View projects
          </a>
          <a className="btn btn-ghost" href={profile.resumeFile} target="_blank" rel="noreferrer">
            Download resume
          </a>
        </div>

        <div className="hero-meta">
          <div>
            <strong>3</strong>
            featured projects
          </div>
          <div>
            <strong>5th sem</strong>
            CSE, Sahyadri College
          </div>
          <div>
            <strong>Full-stack</strong>
            + backend + security
          </div>
        </div>
      </div>
    </section>
  );
}
