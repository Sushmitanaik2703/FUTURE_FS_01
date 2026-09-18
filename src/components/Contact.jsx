import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState({
    state: "idle",
    message: "",
  });

  const handleChange = (e) => {
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.honeypot) return;

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus({
        state: "error",
        message: "Please fill in every field before sending.",
      });
      return;
    }

    if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
      setStatus({
        state: "error",
        message: "Email service is not configured yet.",
      });
      return;
    }

    setStatus({
      state: "sending",
      message: "Sending...",
    });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        state: "success",
        message: "Message sent — thank you! I'll reply soon.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
        honeypot: "",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          "Something went wrong. Please email me directly instead.",
      });
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">

        <p className="eyebrow">CONTACT</p>

        <h2 className="section-title">
          Let's talk.
        </h2>

        <p className="section-intro">
          Open to internships, projects, hackathons, and interesting
          collaborations.
        </p>

        <div className="contact-grid">

          {/* CONTACT INFORMATION */}
          <div className="contact-info">

            <p>
              Have a project idea, opportunity, or simply want to connect?
              Feel free to reach out.
            </p>

            <div className="contact-links">

              <a href="mailto:sushmitanaik2703@gmail.com">
                sushmitanaik2703@gmail.com
              </a>

              <a
                href="https://github.com/Sushmitanaik2703"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sushmitanaik2703/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>

          {/* CONTACT FORM */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* Honeypot */}
            <input
              type="text"
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              tabIndex="-1"
              autoComplete="off"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
              }}
              aria-hidden="true"
            />

            <div className="field">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me what's on your mind..."
                required
              />
            </div>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={status.state === "sending"}
            >
              {status.state === "sending"
                ? "Sending..."
                : "Send message →"}
            </button>

            {status.message && (
              <p
                className={`form-status ${
                  status.state === "success" ? "success" : ""
                } ${
                  status.state === "error" ? "error" : ""
                }`}
                role="status"
              >
                {status.message}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}