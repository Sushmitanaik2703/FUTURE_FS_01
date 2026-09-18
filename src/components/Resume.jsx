export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="container resume-container">

        <div>
          <p className="section-kicker">RESUME</p>

          <h2>
            A little about
            <br />
            what I’m building.
          </h2>

          <p className="resume-text">
            I’m continuously learning through projects, technical challenges,
            hackathons, and hands-on development.
          </p>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          View Resume →
        </a>

      </div>
    </section>
  );
}