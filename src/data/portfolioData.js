// ---------------------------------------------------------------------------
// All portfolio copy lives here. Edit this file to update site content
// without touching component code.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Sushmita Naik",
  role: "Full-Stack Developer · Backend Engineer · Cybersecurity Enthusiast",
  tagline:
    "I build systems the way I was taught rhythm: every beat accounted for, nothing left to chance.",
  location: "Mangaluru, Karnataka, India",
  email: "sushmitanaik2703@gmail.com", // TODO: replace with your real email
  github: "https://github.com/Sushmitanaik2703", // TODO
  linkedin: "https://www.linkedin.com/in/sushmitanaik2703/", // TODO
  resumeFile: "/resume.pdf", // TODO: drop your resume PDF into /public/resume.pdf
};

export const about = {
  intro:
    "I'm a Computer Science Engineering student at Sahyadri College of Engineering & Management, currently in my 5th semester, building toward a career in full-stack and backend systems with a strong security mindset.",
  paragraphs: [
    "My focus areas are full-stack web development, backend architecture, and secure coding practices. I like problems that involve real constraints — race conditions, data integrity, systems that have to hold up under load — and I enjoy the discipline of getting the details right.",
    "Outside of engineering, I practice Bharatanatyam, a classical Indian dance form built on precise rhythmic cycles and structured movement vocabulary. It has shaped how I approach code more than I expected: both disciplines reward patience, repetition, and getting the fundamentals exactly right before you improvise.",
    "I'm active in hackathons and structured learning programs, most recently building a video analytics platform for a national hackathon and working through Google Cloud's Arcade Facilitator Program.",
  ],
  highlights: [
    { label: "Degree", value: "B.E. Computer Science Engineering, 2028" },
    { label: "College", value: "Sahyadri College of Engineering & Management" },
    { label: "Focus", value: "Full-Stack · Backend · Cybersecurity" },
    { label: "Based in", value: "Mangaluru, Karnataka" },
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "Vite"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Redis (atomic locking)"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQLite", "Firebase Firestore"],
  },
  {
    category: "Security & Systems",
    items: ["Secure coding practices", "IT Act & cyber law basics", "IAM fundamentals", "Google Cloud Platform"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git & GitHub", "Postman", "Netlify", "Streamlit"],
  },
];

export const projects = [
  {
    title: "FeeSense",
    subtitle: "AI-powered school fee management platform",
    description:
      "A full-stack fintech platform for schools to track, predict, and manage fee collection. Built for the Smart School FinTech Innovation Challenge and shortlisted in Round 1.",
    stack: ["HTML/CSS/JS", "Firebase Firestore", "Netlify"],
    status: "Shortlisted — Round 1",
    links: { live: "", repo: "" }, // TODO: add your links
  },
  {
    title: "Movie Ticket Booking System",
    subtitle: "Concurrency-safe backend booking engine",
    description:
      "A backend system that handles seat reservations without double-booking, using Redis atomic locks (SET key NX EX) to guarantee correctness under concurrent requests, with a PostgreSQL data layer and a cinema-themed React frontend.",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "React", "Vite"],
    status: "Completed",
    links: { live: "", repo: "" }, // TODO
  },
  {
    title: "BorderVision AI",
    subtitle: "Intelligent video analytics for border surveillance",
    description:
      "A four-person team submission for Smart India Hackathon 2026: a video analytics platform combining object detection, tracking, and recognition to support border surveillance workflows in real time.",
    stack: ["YOLOv8", "ByteTrack", "OpenCV", "EasyOCR / ArcFace", "SQLite", "Streamlit"],
    status: "In progress — SIH 2026",
    links: { live: "", repo: "" }, // TODO
  },
];

export const certifications = [
  { name: "MERN Stack Development", grade: "Grade O" },
  { name: "Node.js", grade: "Grade S" },
  { name: "Google Cloud Arcade Facilitator Program 2026", grade: "In progress" },
];

export const resumeTimeline = [
  {
    year: "2024 – 2028",
    title: "B.E. Computer Science Engineering",
    org: "Sahyadri College of Engineering & Management, Mangaluru",
    description: "Coursework in secure coding, systems, and full-stack development. Currently in 5th semester.",
  },
  {
    year: "2026",
    title: "Smart India Hackathon 2026 — BorderVision AI",
    org: "Team of 4",
    description: "Built a real-time video analytics platform for border surveillance using YOLOv8, ByteTrack, and OCR/face recognition.",
  },
  {
    year: "2026",
    title: "Google Cloud Arcade Facilitator Program",
    org: "Google Cloud Skills Boost",
    description: "Completing skill badges and hands-on labs across Cloud Storage, GKE, and Cloud Run.",
  },
  {
    year: "2025",
    title: "FeeSense — Smart School FinTech Challenge",
    org: "Unstop",
    description: "Designed and shipped a full-stack fee management platform; shortlisted in Round 1.",
  },
];
