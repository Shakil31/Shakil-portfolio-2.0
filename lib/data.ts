import { FaAws, FaCss3Alt, FaGithub, FaGitAlt, FaHtml5, FaLaravel, FaLinkedin, FaPhoneAlt, FaPython, FaReact } from "react-icons/fa";
import { SiDjango, SiMysql, SiPostgresql } from "react-icons/si";
import { HiCodeBracket, HiEnvelope, HiMapPin, HiOutlineBookOpen, HiOutlineBriefcase, HiOutlineChatBubbleLeftRight, HiOutlineShoppingCart, HiOutlineTrophy, HiServerStack } from "react-icons/hi2";

export const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export const personal = {
  name: "Shakil Barua",
  role: "Software Engineer / Backend Developer",
  location: "Chattogram, Bangladesh",
  phone: "+88 01644 828192",
  email: "shakilbarua.aiub@gmail.com",
  github: "https://github.com/shakil31",
  linkedin: "https://www.linkedin.com/in/shakil-barua-520568257",
  cv: "/Shakil-Barua-CV.pdf"
};

export const socials = [
  { label: "GitHub", href: personal.github, icon: FaGithub },
  { label: "LinkedIn", href: personal.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${personal.email}`, icon: HiEnvelope },
  { label: "Phone", href: "tel:+8801644828192", icon: FaPhoneAlt }
];

export const skills = [
  { name: "Python", icon: FaPython, color: "#ffd43b" },
  { name: "Django", icon: SiDjango, color: "#ffffff" },
  { name: "DRF", icon: HiServerStack, color: "#ef4444" },
  { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
  { name: "MySQL", icon: SiMysql, color: "#1d9bd7" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#6aa6d8" },
  { name: "Git", icon: FaGitAlt, color: "#f1502f" },
  { name: "AWS", icon: FaAws, color: "#ffb020" },
  { name: "HTML", icon: FaHtml5, color: "#f97316" },
  { name: "CSS", icon: FaCss3Alt, color: "#38bdf8" },
  { name: "React", icon: FaReact, color: "#22d3ee" }
];

export const projects = [
  {
    title: "PetLouma",
    category: "Ecommerce Site",
    description: "Full-stack e-commerce platform built with Django. Features product management, cart, orders, user auth and admin dashboard.",
    tech: ["Django", "MySQL", "Bootstrap"],
    icon: HiOutlineShoppingCart,
    accent: "violet",
    url: "https://github.com/Shakil31/Petlouma_Ecommerce_site"
  },
  {
    title: "Learn Flow",
    category: "Learning Platform",
    description: "Web-based learning platform with course management, user roles, structured modules and DRF APIs for efficient operations.",
    tech: ["Django", "DRF", "PostgreSQL"],
    icon: HiOutlineBookOpen,
    accent: "emerald",
    url: "https://github.com/Shakil31/Learning-Site"
  },
  {
    title: "RealTime Chat",
    category: "Chat Application",
    description: "Real-time chat app using Django Channels and React. WebSocket messaging, chat rooms and live updates.",
    tech: ["Django Channels", "React", "WebSocket"],
    icon: HiOutlineChatBubbleLeftRight,
    accent: "sky",
    url: "https://github.com/Shakil31/Realtime_chat"
  }
];

export const githubProjectCount = {
  publicRepos: 22,
  originalProjects: 21
};

export const allGithubProjects = [
  { name: "DocuMind-Q-A", language: "JavaScript", url: "https://github.com/Shakil31/DocuMind-Q-A", updated: "May 11, 2026", description: "Document intelligence and Q&A project." },
  { name: "krishok-barta", language: "CSS", url: "https://github.com/Shakil31/krishok-barta", updated: "May 5, 2026", description: "Bangla voice-first assistant prototype for farmers." },
  { name: "Bitavio_portfolio", language: "TypeScript", url: "https://github.com/Shakil31/Bitavio_portfolio", updated: "Apr 21, 2026", description: "Modern portfolio project built with TypeScript." },
  { name: "Shakil-Portfolio", language: "JavaScript", url: "https://github.com/Shakil31/Shakil-Portfolio", updated: "Apr 19, 2026", description: "Personal portfolio website." },
  { name: "SmartHealthCare_system", language: "TypeScript", url: "https://github.com/Shakil31/SmartHealthCare_system", updated: "Apr 13, 2026", description: "Smart healthcare system project." },
  { name: "Learning-Site", language: "Python", url: "https://github.com/Shakil31/Learning-Site", updated: "Mar 28, 2026", description: "Learning platform using Django." },
  { name: "Petlouma_Ecommerce_site", language: "Python", url: "https://github.com/Shakil31/Petlouma_Ecommerce_site", updated: "Mar 27, 2026", description: "Django ecommerce site." },
  { name: "Realtime_chat", language: "JavaScript", url: "https://github.com/Shakil31/Realtime_chat", updated: "Mar 26, 2026", description: "Realtime chat application with Django Channels and React." },
  { name: "shakilbarua", language: "Python", url: "https://github.com/Shakil31/shakilbarua", updated: "Mar 26, 2026", description: "Python project repository." },
  { name: "Billing-System-Task", language: "Python", url: "https://github.com/Shakil31/Billing-System-Task", updated: "Jan 31, 2026", description: "Billing system task project." },
  { name: "Ecommerce-site-python-and-django", language: "HTML", url: "https://github.com/Shakil31/Ecommerce-site-python-and-django", updated: "Nov 30, 2025", description: "Ecommerce site where users place orders and admins manage operations." },
  { name: "Job-Mail-", language: "General", url: "https://github.com/Shakil31/Job-Mail-", updated: "Nov 26, 2025", description: "Job mail automation/project repository." },
  { name: "Django-TODO-Project", language: "Python", url: "https://github.com/Shakil31/Django-TODO-Project", updated: "Nov 26, 2025", description: "Beginner-friendly Django to-do application." },
  { name: "Pandas", language: "Python/Data", url: "https://github.com/Shakil31/Pandas", updated: "Dec 24, 2024", description: "Pandas learning and data practice repository." },
  { name: "research", language: "JavaScript", url: "https://github.com/Shakil31/research", updated: "Aug 4, 2023", description: "Research-oriented JavaScript project." },
  { name: "Unico-Online-Mart", language: "Blade", url: "https://github.com/Shakil31/Unico-Online-Mart", updated: "Mar 28, 2023", description: "Laravel/Blade online mart project." },
  { name: "Online-Mart", language: "General", url: "https://github.com/Shakil31/Online-Mart", updated: "Mar 28, 2023", description: "Online mart project repository." },
  { name: "NJN_International_Limited_website", language: "CSS", url: "https://github.com/Shakil31/NJN_International_Limited_website", updated: "Mar 21, 2023", description: "Forked website project.", fork: true },
  { name: "APWT_SUM22_Assign", language: "PHP", url: "https://github.com/Shakil31/APWT_SUM22_Assign", updated: "Jun 11, 2022", description: "Advanced programming web technologies assignment." },
  { name: "learning-web-technologies-spring-2021-2022-sec-g", language: "HTML", url: "https://github.com/Shakil31/learning-web-technologies-spring-2021-2022-sec-g", updated: "Jan 30, 2022", description: "Web technologies coursework repository." },
  { name: "Banking-Management-System", language: "Java", url: "https://github.com/Shakil31/Banking-Management-System", updated: "May 13, 2020", description: "Java banking management system." },
  { name: "Shakil-Barua", language: "General", url: "https://github.com/Shakil31/Shakil-Barua", updated: "Feb 17, 2020", description: "Profile and learning repository." }
];

export const experiences = [
  {
    role: "Backend Developer",
    company: "Raktch Technology & Software",
    location: "Dhaka",
    period: "Nov 2025 - Present",
    icon: HiOutlineBriefcase,
    points: [
      "Led development of scalable backend services using Python and Django.",
      "Developed RESTful APIs with DRF to support frontend needs.",
      "Implemented caching strategies to optimize API performance.",
      "Optimized MySQL queries to improve data retrieval efficiency."
    ]
  },
  {
    role: "Intern - Web Developer",
    company: "Unico IT LTD",
    location: "Dhaka",
    period: "Apr 2023 - Sep 2023",
    icon: HiCodeBracket,
    points: [
      "Developed web applications using Laravel and collaborated with team.",
      "Built responsive and user-friendly interfaces with HTML, CSS and JS.",
      "Developed backend components using Laravel to enhance performance."
    ]
  }
];

export const counters = [
  { value: "21+", label: "Projects Completed", icon: HiCodeBracket },
  { value: "2+", label: "Tech Stacks", icon: HiServerStack },
  { value: "1+", label: "Years Experience", icon: HiOutlineTrophy },
  { value: "100%", label: "Commitment", icon: HiOutlineTrophy }
];

export const contactItems = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: HiEnvelope },
  { label: "Phone", value: personal.phone, href: "tel:+8801644828192", icon: FaPhoneAlt },
  { label: "Location", value: personal.location, href: "#contact", icon: HiMapPin }
];
