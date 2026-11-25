export interface Project {
  title: string;
  tagline: string;
  description: string;
  problemSolved: string;
  architectureHighlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  tools: string[];
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  score: string;
}

export const PERSONAL_INFO = {
  name: "Anshul Choudhari",
  role: "Full Stack Developer",
  email: "anshulchaudhari97@gmail.com",
  phone: "+91-9579182784",
  github: "https://github.com/anshulchaudhari001",
  linkedin: "https://www.linkedin.com/in/anshul-choudhari-aa1046230/",
  resumeUrl: "https://drive.google.com/file/d/1Mu9XSt2vcSVRoRnCTHsoeEGkjhKgaX9c/view?usp=sharing",
  summary:
    "Full Stack Developer with 1+ year of professional experience building responsive user interfaces, modular reusable components, and API-integrated features. Experienced across React.js, Node.js, Express.js, MongoDB, Three.js 3D web engineering, and Spring Boot.",
};

export const EXPERIENCES: Experience[] = [
  {
    role: "React.js Developer",
    company: "Arrastur Innovations Pvt Ltd",
    location: "Nagpur, India",
    period: "July 2025 – July 2026",
    type: "Full-time",
    tools: ["React.js", "JavaScript", "REST APIs", "CRUD Operations", "Component Architecture"],
    bullets: [
      "Designed and developed responsive user interfaces using modular React.js components and clean state management.",
      "Integrated React client screens with backend RESTful APIs for real-time CRUD workflows and client specifications.",
      "Conducted thorough testing, code reviews, and frontend performance optimizations before production releases.",
      "Collaborated closely with cross-functional software teams to deliver scalable product features on time.",
    ],
  },
  {
    role: "Networking Intern",
    company: "MSIT Services",
    location: "Nagpur, India",
    period: "March 2023 – April 2023",
    type: "Internship",
    tools: ["VLAN", "Firewall Configuration", "Network Security", "Switching"],
    bullets: [
      "Deployed VLANs across 12 physical network switches to isolate network traffic and bolster internal security posture.",
      "Configured and verified firewall policies to enforce strict, secure remote access controls adhering to company security standards.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Developer Productivity Dashboard",
    tagline: "Full-stack analytics & session management dashboard",
    description:
      "A centralized developer workspace featuring task tracking, focus sessions, and real-time GitHub activity analytics.",
    problemSolved:
      "Context switching across developer tooling harms daily output. Unified task management, session tracking, and GitHub metrics into a single responsive dashboard with live data visualizations.",
    architectureHighlights: [
      "Node.js & Express RESTful API backend handling session data and task states",
      "MongoDB database modeling for scalable user session tracking and history",
      "Integrated GitHub REST API to fetch and visualize commit activity with Recharts",
      "Responsive client engineered with Vite, React, and Tailwind CSS",
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vite", "GitHub API", "Recharts"],
    githubUrl: "https://github.com/anshulchaudhari001",
    liveUrl: "https://github.com/anshulchaudhari001",
  },
  {
    title: "Flyora Aerospace — 3D Web Experience",
    tagline: "Interactive 3D web application with smooth hardware-accelerated animations",
    description:
      "An interactive aerospace website combining WebGL 3D rendering with fluid animations to showcase aeronautical models.",
    problemSolved:
      "Rendering 3D models on the web often causes frame drops on lower-powered devices. Optimized Three.js polygon counts, geometry caching, and lighting shaders while managing smooth scroll animations via GSAP.",
    architectureHighlights: [
      "Three.js canvas integration for interactive 3D model manipulation and camera views",
      "GSAP timeline animations for scroll-triggered micro-interactions",
      "Custom contact form built with client-side input validation and error feedback",
      "Fully responsive layout optimized for mobile touch gestures and desktop controls",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Three.js", "GSAP", "WebGL"],
    githubUrl: "https://github.com/anshulchaudhari001/Flyora-Aerospace",
    liveUrl: "https://anshulchaudhari001.github.io/Flyora-Aerospace/",
  },
];

export const SKILLS_CATEGORIES = [
  {
    category: "Frontend Development",
    skills: ["React.js", "JavaScript (ES6+)", "Three.js", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap", "GSAP", "Recharts", "Vite", "Webpack"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST API Design", "Spring Boot", "Core Java", "JSP & Servlets", "GitHub API"],
  },
  {
    category: "Databases & Core CS",
    skills: ["MongoDB", "MongoDB Atlas", "SQL", "OOPs Concepts", "Multithreading", "Exception Handling", "Collections Framework", "C / C++"],
  },
  {
    category: "Testing & DevOps Tools",
    skills: ["Git & GitHub", "GitHub Actions (CI/CD)", "Docker", "Postman (API Testing)", "Jest", "Vercel", "Render", "Performance Optimization"],
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech) — Information Technology",
    institution: "Priyadarshini Bhagwati College of Engineering",
    location: "Nagpur, India",
    year: "Graduated: 2025",
    score: "CGPA: 7.05 / 10",
  },
];
