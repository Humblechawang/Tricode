import type { Person, Post, Project } from "../types";

export const siteName = "TriCode";

export const siteTagline = "Three minds. One practice.";

export const posts: Post[] = [
  {
    id: "studio-diary",
    title: "Studio diary: building with intent",
    category: "Updates",
    date: "18 Sep 2026",
    excerpt:
      "A behind-the-scenes look at how we shape rough ideas into user-first product decisions and prototypes that actually hold up in conversation.",
    cover: "/portraits/Humble.png",
    coverPosition: "center 18%",
    note: "We begin with the problem, not the interface.",
    story: [
      "Every project starts with a conversation about behavior, friction, and the small moments that make an experience feel trustworthy. We try to listen before we design, because the strongest interfaces usually come from understanding the work people already do.",
      "From there, we move into sketches, prototypes, and quick experiments. The goal is not to chase perfection in the first pass, but to expose decision points early and avoid building the wrong thing in a polished shell.",
      "The final product is always a product of testing, revision, and shared language. Design and engineering are one conversation when the goal is clarity.",
    ],
  },
  {
    id: "maker-log",
    title: "Maker log: tools, thinking, and patterns",
    category: "Engineering",
    date: "12 Sep 2026",
    excerpt:
      "The rituals we use to stay focused while building systems, from prompt experiments and backend builds to interface polish and code reviews.",
    cover: "/portraits/devyash.png",
    coverPosition: "center 18%",
    note: "Systems grow stronger when attention is shared and friction is visible.",
    story: [
      "We treat tools as part of the process, not just the output. A clean backend, a deliberate API flow, and a stable review habit help the product stay coherent as the idea evolves.",
      "When we build with AI, we use it as a collaborator for iteration rather than a replacement for judgment. The best outputs come from pairing fast experimentation with clear constraints and a strong understanding of what we want to improve.",
      "The real craft is in noticing what keeps getting repeated and refining it. That is what turns a prototype into a reliable product.",
    ],
  },
  {
    id: "learning-archive",
    title: "Learning archive: curiosity before certainty",
    category: "Design",
    date: "04 Sep 2026",
    excerpt:
      "What we are learning right now in data, ML, and the math behind better decisions — notes from the process, not the finished answer.",
    cover: "/portraits/ritika.png",
    coverPosition: "center 18%",
    note: "The work is less about being finished and more about being teachable.",
    story: [
      "We believe in learning in public. A half-finished experiment can still teach more than a polished presentation, especially when we document what is confusing and what we are trying to prove.",
      "Across data science and product work, the same challenge often appears: turning noisy signals into useful understanding. We work through that by building small, testable pieces and letting the evidence shape the next move.",
      "Curiosity is still the best design system we have. It keeps us honest, adaptable, and willing to revise our assumptions before they become fixed beliefs.",
    ],
  },
  {
      id: "team-culture",
      title: "The rituals behind better collaboration",
      category: "Culture",
      date: "28 Aug 2026",
      excerpt:
        "The small habits that help a growing team make room for clear thinking, generous critique, and ambitious ideas.",
      cover: "/portraits/Humble.png",
      coverPosition: "center 62%",
      note: "Good work gets stronger when everyone has room to contribute.",
      story: [
        "Culture is not a slogan on a wall. It is the way a team makes decisions when the brief is incomplete and the deadline is real.",
        "We make space for direct feedback, focused solo time, and the kind of conversations that turn a rough thought into something the whole team can carry.",
        "Those rituals keep the work human while giving the product the structure it needs to move forward.",
      ],
    },
];

export const teamMembers: Person[] = [
  {
    id: "humble",
    name: "Humble Chawang",
    role: "Product & UI/UX",
    shortBio:
      "CS undergrad who moves between user research, Figma prototypes, and the code that has to make them real.",
    longBio:
      "Studying computer science at Dyal Singh College, University of Delhi, with a focus on the gap between how a product is designed and how it actually gets built. Runs user interviews and feature-prioritization work, then builds high-fidelity prototypes in Figma before validating direction with quick Python proofs of concept. Currently leading product strategy for an early-stage team effort, and co-built an AI-assisted safety app at a national hackathon.",
    initials: "HC",
    photo: "/portraits/Humble.png",
    photoPosition: "center 18%",
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
    frame: "panel",
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
