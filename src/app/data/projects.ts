// -----------------------------------------------------------------------------
// PROJECT DATA
// -----------------------------------------------------------------------------
// This is the single source of truth for every project shown on the site.
// To add a new project, copy one entry below and fill in the fields.
//
//  id            unique key (kebab-case)
//  slug          used in the URL: /work/<slug>
//  title         display name
//  subtitle      short descriptor (shown italic on the detail page)
//  category      "WEB & SOFTWARE" | "GAMES & INTERACTIVE" | "EXPERIMENTAL"
//  status        "COMPLETED" | "IN PROGRESS" | "PROTOTYPE" | "UNIVERSITY PROJECT"
//  image         cover image (project cards + detail hero). Files live in
//                /public/projects. Point `image` at one via asset().
//  year          string year
//  description   1-2 sentence overview
//  contribution  what *you* personally built
//  technologies  string[] of tech used
//  github        repo URL, or null if not public / not available yet
//  demo          live demo URL, or null
//  details       optional deeper technical notes
//  gallery       optional Screenshot[] shown in the "More Information" section
//                of the detail page. Drop files in /public/projects and add
//                { src: asset("projects/xyz.jpg"), caption: "..." } entries.
// -----------------------------------------------------------------------------

export type ProjectCategory =
  | "WEB & SOFTWARE"
  | "GAMES & INTERACTIVE"
  | "EXPERIMENTAL";

// Resolve a path inside /public against the deploy base path (works both on
// localhost at "/" and on GitHub Pages at "/mohamed-ahmed-portfolio/").
export const asset = (p: string) =>
  `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;

export interface Screenshot {
  src: string;
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: string;
  image: string;
  year: string;
  description: string;
  contribution: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  details?: string;
  gallery?: Screenshot[];
}

export const projects: Project[] = [
  {
    id: "giu-nexus",
    slug: "giu-nexus",
    title: "GIU Nexus",
    subtitle: "Full-Stack Career Platform",
    category: "WEB & SOFTWARE",
    status: "UNIVERSITY PROJECT",
    image: asset("projects/giu-nexus.jpg"),
    gallery: [
      // Add real screenshots later, e.g.:
      // { src: asset("projects/giu-nexus-dashboard.jpg"), caption: "Admin dashboard" },
    ],
    year: "2024",
    description:
      "A MERN-based career platform connecting students, recruiters, and administrators, with AI-powered job recommendations built on Hugging Face sentence embeddings and cosine similarity.",
    contribution:
      "Backend development, MongoDB/Mongoose schemas, application management, AI-powered job recommendations (Hugging Face sentence embeddings + cosine similarity), React/admin functionality, recruiter management, and a multi-level recruiter approval system.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Hugging Face",
      "Cosine Similarity",
    ],
    github: null, // TODO: add repo URL when public
    demo: null,
    details:
      "The recruiter approval system runs through multiple verification stages, with restrictions applied to unverified accounts. The recommendation engine matches student profiles to job listings by semantic similarity between sentence embeddings rather than keyword matching.",
  },
  {
    id: "workflow-engine",
    slug: "workflow-engine",
    title: "Workflow Engine",
    subtitle: "Java Spring Boot Workflow Engine",
    category: "WEB & SOFTWARE",
    status: "IN PROGRESS",
    image: asset("projects/workflow-engine.jpg"),
    gallery: [],
    year: "2025",
    description:
      "A Java Spring Boot workflow engine I am currently building, modelling workflows, states, transitions, and workflow instances from the ground up.",
    contribution:
      "System design and backend architecture: workflows, states, transitions, and workflow instances modelled with JPA/Hibernate, an H2 database, a service layer, and REST APIs.",
    technologies: [
      "Java",
      "Spring Boot",
      "JPA",
      "Hibernate",
      "H2",
      "REST API",
      "Maven",
    ],
    github: null, // TODO: add repo URL when public
    demo: null,
    details:
      "Workflows are modelled as sets of states and transitions. Workflow instances track their own execution state independently from the workflow definition. Actively being extended with more of the service layer, validation, and richer transition rules. No completion percentage — it is an ongoing build.",
  },
  {
    id: "haunted-forest",
    slug: "haunted-forest",
    title: "Haunted Forest",
    subtitle: "3D Horror / Adventure Game",
    category: "GAMES & INTERACTIVE",
    status: "PROTOTYPE",
    image: asset("projects/haunted-forest.jpg"),
    gallery: [],
    year: "2024",
    description:
      "A Unity/C# 3D horror and adventure project. The player searches for a missing child, follows environmental clues, and must find three keys to open a cave gate.",
    contribution:
      "Unity development in C#: 3D environment, exploration and interaction systems, environmental clue placement, the three-key objective system, and atmosphere/lighting.",
    technologies: ["Unity", "C#", "3D Environment", "Game Logic", "Lighting"],
    github: null, // TODO: add repo URL when public
    demo: null,
    details:
      "The game is driven by environmental storytelling — clues placed across the forest gradually reveal what happened. The three-key system gates progress toward the cave. Built and playable as a prototype.",
  },
  {
    id: "haystack-needle",
    slug: "haystack-needle",
    title: "5 Million Haystack, 1 Needle",
    subtitle: "First-Person 3D Search Game",
    category: "EXPERIMENTAL",
    status: "PROTOTYPE",
    image: asset("projects/haystack-needle.jpg"),
    gallery: [],
    year: "2024",
    description:
      "A first-person 3D search-game concept: a huge farm covered in hay, and a single hidden needle to find. An experiment in scale and the absurdity of an impossible search.",
    contribution:
      "Unity prototype: first-person controller (movement, sprint, jump), physical interaction to push hay aside, randomised needle placement, and collision handling.",
    technologies: [
      "Unity",
      "C#",
      "First-Person Controller",
      "Physics",
    ],
    github: null, // TODO: add repo URL when public
    demo: null,
    details:
      "The needle is placed randomly at runtime, so no two sessions are the same. This is a concept/prototype — the core loop exists but it is not a finished game.",
  },
];
