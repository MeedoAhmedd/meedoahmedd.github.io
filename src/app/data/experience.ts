// -----------------------------------------------------------------------------
// EXPERIENCE DATA
// -----------------------------------------------------------------------------
// Drives the Experience section on the home page and the full /experience page.
// Edit here — no component changes needed.
// -----------------------------------------------------------------------------

export interface ExperienceRole {
  company: string;
  role: string;
  period: string;
  location?: string;
  /** One-paragraph summary shown on the home page + top of the detail page. */
  summary: string;
  /** Short bullets for the home-page section (keep to ~4). */
  highlights: string[];
  /** Tech tags for the home-page section. */
  stack: string[];
  /** Grouped deep-dive shown only on /experience. */
  sections: { title: string; body: string; points?: string[] }[];
  /** Grouped technology list shown only on /experience. */
  technologies: { label: string; items: string[] }[];
  /** CV-style one-liners shown at the bottom of /experience. */
  resumeBullets: string[];
}

export const experience: ExperienceRole[] = [
  {
    company: "ASSET Technology Group",
    role: "Software Engineering Intern",
    period: "Aug 2026 – Sep 2026",
    location: "Egypt",
    summary:
      "A software engineering internship focused on backend development with Java and Spring Boot, alongside full-stack work on a MERN career platform. The core workstream was building a workflow engine from the data layer upward; the rest spanned REST API design, database modelling, an AI job-recommendation component, and a multi-level recruiter approval system.",
    highlights: [
      "Built backend applications in Java / Spring Boot with REST APIs, JPA/Hibernate, and relational databases.",
      "Designed and implemented a workflow engine — workflows, states, transitions, instances, entity relationships, services, and persistence.",
      "Contributed backend and admin-panel functionality to GIU Nexus, a MERN career platform (Mongoose schemas, REST APIs, recruiter/application management).",
      "Developed an AI job-recommendation system using Hugging Face sentence embeddings and cosine similarity, plus a three-level recruiter approval flow.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "JPA / Hibernate",
      "REST APIs",
      "MongoDB",
      "Node.js",
      "Express",
      "React",
      "Hugging Face",
    ],
    sections: [
      {
        title: "Backend Development",
        body:
          "Worked on backend applications and how to structure them properly — a layered architecture of models/entities, repositories, services, and controllers — with a focus on how the components communicate rather than writing isolated Java classes.",
        points: [
          "Java, Spring Boot, Spring Data JPA, Hibernate, Maven",
          "REST API design and layered / MVC architecture",
          "Relational persistence with H2; document persistence with MongoDB / MongoDB Atlas",
          "Entity relationships, including one-to-many, and database persistence",
        ],
      },
      {
        title: "Workflow Engine",
        body:
          "A primary internship workstream: a workflow engine in Java / Spring Boot, built gradually from the model and database layer toward the execution logic. Demonstrates backend architecture and business-process automation rather than basic CRUD.",
        points: [
          "Domain model: Workflow → States → Transitions → Workflow Instance",
          "Relationships between entities and database persistence",
          "Business logic through a service layer, exposed over REST APIs",
          "Workflow execution logic, extended progressively",
        ],
      },
      {
        title: "GIU Nexus — Full-Stack Career Platform",
        body:
          "Backend and admin contributions to GIU Nexus, a MERN-based career/recruitment platform connecting students and job seekers with recruiters.",
        points: [
          "Designed the Application schema with Mongoose; worked with MongoDB",
          "Built and modified REST API functionality for application management",
          "Implemented recruiter approval logic and auth-related backend logic",
          "Contributed to the React admin panel for managing users and approvals",
        ],
      },
      {
        title: "AI Job Recommendation System",
        body:
          "A recommendation component inside GIU Nexus that ranks jobs by how semantically relevant they are to a user's profile and skills, rather than by keyword matching.",
        points: [
          "Hugging Face sentence embeddings",
          "Sentence similarity via cosine similarity",
          "Compares a user's profile/skills against job descriptions to surface relevant roles",
        ],
      },
      {
        title: "Recruiter Approval System",
        body:
          "A three-level recruiter/admin approval flow: Recruiter → Admin Level 1 → Admin Level 2 → Admin Level 3 → fully approved. Recruiters who were not fully approved were blocked from posting or editing jobs.",
        points: [
          "Concepts: adminLevel, approvalStage, pending-review users",
          "Endpoints such as PATCH /users/:id/approve-stage and GET /users/pending-review",
          "Access restrictions applied to unapproved recruiters",
        ],
      },
    ],
    technologies: [
      { label: "Languages", items: ["Java", "JavaScript", "SQL (concepts)"] },
      {
        label: "Backend",
        items: [
          "Spring Boot",
          "Spring Data JPA",
          "Hibernate",
          "REST APIs",
          "Maven",
          "Node.js",
          "Express.js",
        ],
      },
      {
        label: "Databases",
        items: ["MongoDB", "MongoDB Atlas", "H2 Database", "Relational / SQL concepts"],
      },
      { label: "Frontend", items: ["React", "Vite"] },
      {
        label: "AI / ML",
        items: [
          "Hugging Face",
          "Sentence embeddings",
          "Cosine similarity",
          "AI-based job recommendation",
        ],
      },
      {
        label: "Tools",
        items: ["IntelliJ IDEA", "Git", "GitHub", "Postman / API testing"],
      },
      {
        label: "Architecture & Concepts",
        items: [
          "RESTful API design",
          "MVC / layered architecture",
          "Entity relationships",
          "Authentication & authorization",
          "Business logic",
          "Workflow engines",
          "Database persistence",
        ],
      },
    ],
    resumeBullets: [
      "Developed backend applications using Java, Spring Boot, REST APIs, JPA/Hibernate, and relational databases.",
      "Designed and implemented a workflow engine, working with workflows, states, transitions, instances, entity relationships, services, and persistence.",
      "Contributed to GIU Nexus, a MERN-based career platform, developing backend functionality for applications, recruiters, and job management.",
      "Designed MongoDB/Mongoose schemas and implemented REST API functionality using Node.js and Express.js.",
      "Developed an AI-powered job recommendation system using Hugging Face sentence embeddings and cosine similarity to match users with relevant job opportunities.",
      "Implemented a three-level recruiter approval system, including approval stages, pending-review functionality, and access restrictions for unapproved recruiters.",
      "Contributed to the React-based admin panel for managing users and recruiter approvals.",
      "Worked with MongoDB Atlas, H2, Git, GitHub, Maven, and Vite while following structured backend and full-stack development practices.",
    ],
  },
];
