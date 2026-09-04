import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { profile } from '../data/portfolioData';

// ---------------------------------------------------------------------------
// Email notifications are sent via EmailJS (https://www.emailjs.com/), a
// service that lets a static site send email directly from the browser —
// no backend server required. Free tier covers ~200 emails/month.
//
// Setup (5 minutes):
//   1. Create a free account at emailjs.com
//   2. Add an Email Service (e.g. connect your Gmail) -> copy the Service ID
//   3. Create an Email Template with variables: from_name, from_email, message
//      -> copy the Template ID
//   4. Account -> General -> copy your Public Key
//   5. Paste all three values into the constants below
// ---------------------------------------------------------------------------
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: real users never fill this hidden field, bots often do.
    if (form.honeypot) return;

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ state: 'error', message: 'Please fill in every field before sending.' });
      return;
    }

    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      setStatus({
        state: 'error',
        message: 'Email isn\'t configured yet — add your EmailJS keys in Contact.jsx.',
      });
      return;
    }

    setStatus({ state: 'sending', message: 'Sending…' });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus({ state: 'success', message: 'Message sent — thank you! I\'ll reply soon.' });
      setForm({ name: '', email: '', message: '', honeypot: '' });
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please email me directly instead.' });
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="eyebrow">
          <span className="beats">
            <span /><span /><span />
          </span>
          Contact
        </p>
        <h2 className="section-title">Let's talk.</h2>
        <p className="section-intro">
          Open to internships, full-stack roles, and interesting collaborations.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              The fastest way to reach me is email. I typically reply within a couple of days.
            </p>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/your-username
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/your-profile
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot field — hidden from real users via CSS, visible to bots */}
            <input
              type="text"
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
              aria-hidden="true"
            />

            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary" type="submit" disabled={status.state === 'sending'}>
              {status.state === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            <p
              className={`form-status ${status.state === 'success' ? 'success' : ''} ${
                status.state === 'error' ? 'error' : ''
              }`}
              role="status"
            >
              {status.message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
