export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid"></div>

      <div className="container hero-inner">

        <div className="hero-content">
          <p className="hero-kicker">
            COMPUTER SCIENCE ENGINEERING STUDENT
          </p>

          <h1>
            Building practical solutions with{" "}
            <span className="hero-accent">code, creativity</span>{" "}
            & curiosity.
          </h1>

          <p className="hero-description">
            I’m a Computer Science Engineering student passionate about
            building practical software solutions and exploring web
            development, AI, and cloud technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              View Resume
            </a>
          </div>

          <div className="hero-mini-info">
            <div>
              <strong>5th</strong>
              <span>Semester</span>
            </div>

            <div>
              <strong>CSE</strong>
              <span>Student</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Curiosity</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">

          <div className="visual-glow"></div>

          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>

          <div className="photo-frame">

            <div className="photo-top-label">
              <span>01</span>
              <span>PORTFOLIO</span>
            </div>

            <img
              src="/profile.jpeg"
              alt="Sushmita Naik"
              className="profile-photo"
            />

            <div className="photo-bottom-label">
              <span>SUSHMITA NAIK</span>
              <span>2026</span>
            </div>

          </div>

          <div className="floating-card floating-card-one">
            <span className="floating-number">01</span>

            <div>
              <strong>Web Development</strong>
              <small>React • Node • MongoDB</small>
            </div>
          </div>

          <div className="floating-card floating-card-two">
            <span className="floating-number">02</span>

            <div>
              <strong>Learning by Building</strong>
              <small>Projects • Hackathons • Cloud</small>
            </div>
          </div>

          <div className="hero-signature">
            SN<span>°</span>
          </div>

        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}