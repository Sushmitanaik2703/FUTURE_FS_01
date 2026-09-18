export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">

        <div className="about-heading">
          <p className="section-kicker">ABOUT ME</p>

          <h2>
            Curious mind.
            <br />
            <span>Creative builder.</span>
          </h2>
        </div>

        <div className="about-content">

          <p className="about-intro">
            I’m a Computer Science Engineering student at Sahyadri College
            of Engineering & Management. I enjoy turning ideas into practical
            projects and learning through hands-on experience.
          </p>

          <p>
            My interests include web development, backend systems, AI, and
            cloud technologies. I enjoy exploring new technologies and
            improving my skills by actually building things.
          </p>

          <p>
            Outside academics, I practice Bharatanatyam, which has taught me
            patience, discipline, consistency, and attention to detail.
          </p>

          <div className="about-facts">

            <div className="about-fact">
              <span>01</span>
              <strong>Build</strong>
              <p>Turning ideas into practical projects.</p>
            </div>

            <div className="about-fact">
              <span>02</span>
              <strong>Explore</strong>
              <p>Learning web, AI & cloud technologies.</p>
            </div>

            <div className="about-fact">
              <span>03</span>
              <strong>Create</strong>
              <p>Combining technology with creativity.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}