export const profile = {
  name: "Sushmita Naik",
  intro: "I’m a Computer Science Engineering student passionate about building practical software solutions and exploring web development, AI, and cloud technologies. I enjoy learning through projects, hackathons, and hands-on challenges while continuously improving my technical skills.",
  email: "sushmitanaik2703@gmail.com",
  github: "https://github.com/Sushmitanaik2703",
  linkedin: "https://www.linkedin.com/in/sushmitanaik2703/",
  resumeFile: "/resume.pdf"
};

export const about = {
  intro: "I’m a Computer Science Engineering student at Sahyadri College of Engineering & Management. I enjoy turning ideas into practical projects and learning through hands-on experience.",
  paragraphs: [
    "My interests include web development, backend systems, AI, and cloud technologies. I like building projects that solve a clear problem and help me understand how different pieces of software work together.",
    "Outside academics, I practice Bharatanatyam. Learning a classical dance form has taught me patience, discipline, consistency, and attention to detail — qualities I carry into my technical work too.",
    "I’m active in hackathons and hands-on learning programs, where I get to experiment, collaborate, and turn concepts into working prototypes."
  ]
};

export const highlights = [
  { label: "Education", value: "B.E. Computer Science Engineering" },
  { label: "College", value: "Sahyadri College of Engineering & Management" },
  { label: "Focus", value: "Web · Backend · AI · Cloud" },
  { label: "Outside code", value: "Bharatanatyam" }
];

export const skills = [
  { category: "Languages", items: ["Java", "C", "JavaScript", "Python"] },
  { category: "Frontend", items: ["HTML & CSS", "React", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { category: "Data", items: ["MongoDB", "SQL"] },
  { category: "Cloud & Tools", items: ["Google Cloud", "Git", "GitHub", "Postman"] }
];

export const projects = [
  {
    title: "Travel Buddy Finder",
    subtitle: "Full-stack travel platform",
    description: "A MERN-based platform for discovering compatible travel companions, creating trips, sending requests and connecting through real-time chat.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    status: "MERN · IN PROGRESS",
    visual: "TRAVEL / 01",
    links: { repo: "https://github.com/Sushmitanaik2703" }
  },
  {
    title: "BorderVision AI",
    subtitle: "CCTV / video analytics platform",
    description: "A machine-learning based video analytics project exploring person and vehicle detection, tracking, restricted-zone monitoring and automated alerts.",
    stack: ["YOLO", "OpenCV", "ByteTrack", "Python"],
    status: "SIH 2026 · TEAM PROJECT",
    visual: "VISION / 02",
    links: { repo: "https://github.com/Sushmitanaik2703" }
  },
  {
    title: "Movie Ticket Booking System",
    subtitle: "Concurrency-aware booking backend",
    description: "A backend-focused booking system designed around seat availability, reservations and safe handling of concurrent booking requests.",
    stack: ["Node.js", "Express", "Redis", "React"],
    status: "BACKEND · PROJECT",
    visual: "CINEMA / 03",
    links: { repo: "https://github.com/Sushmitanaik2703" }
  },
  {
    title: "Assignment Workflow",
    subtitle: "Submission tracking application",
    description: "A web application for organizing assignments, submissions and workflow states with a Node.js and MongoDB backend.",
    stack: ["Node.js", "Express", "MongoDB"],
    status: "WEB APP · PROJECT",
    visual: "WORKFLOW / 04",
    links: { repo: "https://github.com/Sushmitanaik2703" }
  },
  {
    title: "Personal Portfolio",
    subtitle: "This website",
    description: "A responsive portfolio built with React and Vite, designed to present projects, skills, learning and personality in one place.",
    stack: ["React", "Vite", "CSS"],
    status: "LIVE · 2026",
    visual: "PORTFOLIO / 05",
    links: { repo: "https://github.com/Sushmitanaik2703/FUTURE_FS_01" }
  }
];

export const timeline = [
  { year: "2024 — 2028", title: "B.E. Computer Science Engineering", org: "Sahyadri College of Engineering & Management", description: "Building a foundation across software engineering, algorithms, web technologies, cloud and systems." },
  { year: "2026", title: "Smart India Hackathon", org: "BorderVision AI · Team Project", description: "Working on an ML-powered video analytics platform for automated CCTV monitoring." },
  { year: "2026", title: "Smart School FinTech Challenge", org: "FeeSense · Team Project", description: "Worked on a practical fee-management solution for the school ecosystem." },
  { year: "Ongoing", title: "Cloud & hands-on learning", org: "Google Cloud and independent projects", description: "Learning by building labs, prototypes and applications rather than only studying theory." }
];

export const internship = {
  title: "Full Stack Web Development Intern",
  company: "Future Interns",
  description: "Working on practical web development projects involving frontend, backend, databases, and real-world application development."
};
