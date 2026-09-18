import { useState } from 'react';
import { about, highlights, internship, profile, projects, skills, timeline } from './data/portfolioData';

const Arrow = () => <span aria-hidden="true">↗</span>;

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${form.get('name')}`);
    const body = encodeURIComponent(`${form.get('message')}\n\nReply to: ${form.get('email')}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" onClick={closeMenu}>SN<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? '×' : '☰'}
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          {['About', 'Skills', 'Projects', 'Journey', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <a className="nav-status" href="#contact"><span /> Available for opportunities</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="hero-kicker"><span>05</span> Computer Science Engineering · 5th Semester</div>
              <h1>Building practical solutions with <em>code, creativity</em> & curiosity.</h1>
              <p className="hero-intro">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#projects">Explore my work <Arrow /></a>
                <a className="button button-outline" href={profile.resumeFile} target="_blank" rel="noreferrer">View resume <Arrow /></a>
              </div>
              <p className="hero-note">Currently learning, building & experimenting.</p>
            </div>

            <div className="hero-art" aria-label="Photo placeholder and portfolio highlights">
              <div className="art-grid" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="photo-placeholder">
                <span>YOUR PHOTO</span>
                <small>Add later</small>
              </div>
              <div className="float-card card-tech"><b>12+</b><span>technologies explored</span></div>
              <div className="float-card card-projects"><b>05</b><span>featured projects</span></div>
              <div className="art-signature">SUSHMITA<br /><span>NAIK</span></div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <span>BUILD</span><b>✦</b><span>LEARN</span><b>✦</b><span>CREATE</span><b>✦</b><span>ITERATE</span><b>✦</b><span>BUILD</span><b>✦</b><span>LEARN</span>
        </div>

        <section className="section" id="about">
          <div className="container">
            <SectionLabel number="01">About</SectionLabel>
            <div className="section-heading split-heading">
              <h2>Curious by nature.<br /><em>Practical by choice.</em></h2>
              <p>{about.intro}</p>
            </div>
            <div className="about-grid">
              <div className="about-copy">
                {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="highlight-panel">
                {highlights.map((item) => (
                  <div className="highlight" key={item.label}>
                    <span>{item.label}</span><strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-paper" id="skills">
          <div className="container">
            <SectionLabel number="02">Toolkit</SectionLabel>
            <div className="section-heading">
              <h2>Tools I use to <em>turn ideas into working systems.</em></h2>
              <p>Technologies I’ve been learning and applying through coursework, projects, labs and hands-on challenges.</p>
            </div>
            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card" key={group.category}>
                  <div className="skill-number">0{index + 1}</div>
                  <h3>{group.category}</h3>
                  <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionLabel number="03">Selected work</SectionLabel>
            <div className="section-heading project-heading">
              <h2>Projects built to <em>learn by doing.</em></h2>
              <p>A mix of full-stack applications, backend systems and ML-focused team work.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className={`project-card project-${index + 1}`} key={project.title}>
                  <div className="project-visual"><span>{project.visual}</span><b>{String(index + 1).padStart(2, '0')}</b></div>
                  <div className="project-body">
                    <div className="project-top"><span>{project.status}</span><small>0{index + 1}</small></div>
                    <h3>{project.title}</h3>
                    <h4>{project.subtitle}</h4>
                    <p>{project.description}</p>
                    <div className="stack-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                    {project.links.repo && <a className="text-link" href={project.links.repo} target="_blank" rel="noreferrer">View on GitHub <Arrow /></a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-paper" id="journey">
          <div className="container">
            <SectionLabel number="04">Journey</SectionLabel>
            <div className="journey-grid">
              <div>
                <h2>Learning through <em>real work.</em></h2>
                <p className="journey-lead">A snapshot of the experiences shaping how I build, collaborate and learn.</p>
                <div className="internship-card">
                  <span>INTERNSHIP</span>
                  <h3>{internship.title}</h3>
                  <strong>{internship.company}</strong>
                  <p>{internship.description}</p>
                </div>
              </div>
              <div className="timeline">
                {timeline.map((item) => (
                  <article className="timeline-item" key={item.title}>
                    <span className="timeline-year">{item.year}</span>
                    <div className="timeline-dot" />
                    <h3>{item.title}</h3>
                    <strong>{item.org}</strong>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div>
              <SectionLabel number="05">Contact</SectionLabel>
              <h2>Have an idea?<br /><em>Let’s build something.</em></h2>
              <p>I’m open to internships, collaborations, projects and conversations around technology.</p>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label><span>Your name</span><input name="name" required placeholder="Your name" /></label>
              <label><span>Email</span><input type="email" name="email" required placeholder="you@example.com" /></label>
              <label><span>Message</span><textarea name="message" rows="5" required placeholder="Tell me a little about it..." /></label>
              <button className="button button-lime" type="submit">Send message <Arrow /></button>
              {sent && <small className="form-note">Your email app should open with the message ready to send.</small>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <span>© {new Date().getFullYear()} Sushmita Naik</span>
          <span>Code · Creativity · Curiosity</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
