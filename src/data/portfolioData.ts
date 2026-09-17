import type { Person, Project } from "../types";

export const siteName = "TriCode";

export const siteTagline = "Three minds. One practice.";

export const people: Person[] = [
  {
    id: "humble",
    name: "Humble Chawang",
    role: "Product & UI/UX",
    shortBio:
      "CS undergrad who moves between user research, Figma prototypes, and the code that has to make them real.",
    longBio:
      "Studying computer science at Dyal Singh College, University of Delhi, with a focus on the gap between how a product is designed and how it actually gets built. Runs user interviews and feature-prioritization work, then builds high-fidelity prototypes in Figma before validating direction with quick Python proofs of concept. Currently leading product strategy for an early-stage team effort, and co-built an AI-assisted safety app at a national hackathon.",
    initials: "HC",
    photo: "/photo .png",
    photoPosition: "72% 32%",
    frame: "slab",
    skills: [
      "Product Research",
      "Figma",
      "Prototyping",
      "User Journey Mapping",
      "Python",
      "C++",
    ],
    links: {
      github: "https://github.com/Humblechawang",
      linkedin: "https://www.linkedin.com/in/humble-chawang-18085632a",
      email: "chawanghumble04@gmail.com",
    },
  },
  {
    id: "devyash",
    name: "Devyash Singh",
    role: "AI Engineer & Backend",
    shortBio:
      "Backend and AI-integration developer who led a hackathon team from idea to a deployed, working app.",
    longBio:
      "Computer science undergrad building at the intersection of backend engineering and applied AI — prompt engineering, REST API integration, and shipping with Flutter and Python. Led a multidisciplinary team building an AI-powered safety application at a national hackathon, handling backend architecture, AI research, and GitHub-based collaboration. Also works freelance, applying large language models to real content workflows for clients.",
    initials: "DS",
    photo: "/portraits/devyash.png",
    photoPosition: "center 18%",
    frame: "prism",
    skills: [
      "Python",
      "Flutter",
      "REST APIs",
      "Prompt Engineering",
      "Git & GitHub",
      "Vercel",
    ],
    links: {
      github: "https://github.com/SidFlames",
      linkedin: "https://linkedin.com/in/devyash-singh-865719313",
      email: "devyashsingh1806@gmail.com",
    },
  },
  {
    id: "ritika",
    name: "Ritika Ranjan",
    role: "Aspiring Data Scientist",
    shortBio:
      "Early-career CS student building toward data science, currently deep in Python fundamentals and the math behind ML.",
    longBio:
      "Studying computer science at Dyal Singh College, University of Delhi, with a growing focus on data science. Building fundamentals in Python and working through machine learning and deep learning coursework online, alongside coordinating events and leading as a member of her college society and volleyball team.",
    initials: "RR",
    photo: "/portraits/ritika.png",
    photoPosition: "center 18%",
    frame: "lens",
    skills: ["Python", "C++", "Event Coordination", "Team Leadership"],
    learning: ["Machine Learning", "Deep Learning"],
    links: {
      github: "https://github.com/ritikaaar",
      linkedin: "https://www.linkedin.com/in/ritika-ranjan-689777334",
      email: "ritikaranj20@gmail.com",
    },
  },
];

export const projects: Project[] = [
  {
    id: "safety-app",
    title: "AI Women's Safety Application",
    description:
      "Built at a national hackathon — a Flutter app with an AI-integrated backend designed to help users signal for help and share location context quickly and reliably. Devyash led backend architecture and AI integration; Humble led product direction and UI/UX.",
    category: "Product",
    status: "shipped",
    contributorIds: ["devyash", "humble"],
    technologies: ["Flutter", "Python", "REST APIs", "Vercel"],
  },
  {
    id: "ritika-building",
    title: "Building toward data science",
    description:
      "No shipped project yet — currently working through Python, machine learning, and deep learning fundamentals, with a small collaborative project in progress.",
    category: "Research",
    status: "building",
    contributorIds: ["ritika"],
    technologies: ["Python"],
  },
];

export const projectCategories = [
  "All",
  "Product",
  "Design",
  "Development",
  "Research",
] as const;
