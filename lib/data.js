// All site content lives here. Update this file (e.g. after the resume refresh)
// and every section re-renders from it.

export const profile = {
  name: "Skander Ben Mekki",
  role: "Software Engineer II",
  company: "AppDirect",
  location: "Montréal, Canada",
  headline: ["I build the", "backend systems", "that keep", "integrations", "reliable."],
  // Words (by index into the flattened headline) rendered in the serif accent style.
  accentWords: ["reliable."],
  summary:
    "Software engineer at AppDirect, working on large-scale integrations between AppDirect and Microsoft. Java, Spring Boot, Kafka, GraphQL and React across distributed microservices, with a bias for simple, maintainable solutions.",
  github: "https://github.com/skanderbm123",
  linkedin: "https://www.linkedin.com/in/skander-ben-mekki/",
  resume: "Skander-Ben-Mekki-Portfolio-Website.pdf",
};

export const stats = [
  { value: 5, suffix: "+", label: "Years building software" },
  { value: 4, suffix: "", label: "Engineering teams" },
  { value: 30, suffix: "%+", label: "Responsiveness gain shipped at Pratt & Whitney" },
];

export const about = {
  paragraphs: [
    "I'm a software engineer with a Bachelor's in Software Engineering from Concordia University. I like full-stack work most: there's nothing more rewarding than watching backend logic come alive through a clean, intuitive UI.",
    "I've worked across the whole lifecycle, from system design to deployment, with a focus on scalable, maintainable solutions. I enjoy solving complex problems with simple, elegant code, and helping the engineers around me do the same.",
    "Away from the keyboard you'll usually find me cooking, gaming or exploring new places. Always learning, always creating.",
  ],
  education: {
    degree: "BEng, Software Engineering",
    school: "Concordia University",
    note: "Member of the Institute of Co-op Education",
  },
  principles: [
    { title: "Simple over clever", body: "Elegant code that the next engineer can read, change and trust." },
    { title: "Reliability by design", body: "Data integrity, observability and tests are part of the feature, not an afterthought." },
    { title: "Grow the team", body: "Mentoring and clear communication make every release go smoother." },
  ],
};

export const experience = [
  {
    company: "AppDirect",
    link: "https://www.appdirect.com/",
    title: "Software Engineer II, Microsoft Integration Team",
    years: "2021 — Present",
    location: "Montréal, Canada",
    summary:
      "Building and evolving large-scale integrations between AppDirect and Microsoft services.",
    highlights: [
      "Lead the design and development of features that improve automation, data reliability and system scalability.",
      "Work across multiple microservices in Java, Spring Boot and React, with Kafka and GraphQL connecting distributed systems.",
      "Contributed major backend improvements, optimized database performance and helped modernize deployment pipelines.",
      "Mentor new engineers and help shape a culture of clean, maintainable code and continuous improvement.",
    ],
    tags: ["Java", "Spring Boot", "React", "Kafka", "GraphQL", "Microservices"],
    current: true,
  },
  {
    company: "Deloitte Canada",
    link: "https://www.deloitte.com/",
    title: "Software Developer",
    years: "2020 — 2021",
    location: "Montréal, Canada",
    summary:
      "Internal tools and enterprise web apps that help teams manage data more efficiently and securely.",
    highlights: [
      "Developed applications with .NET Core Razor, C# and Angular.",
      "Applied Test-Driven Development, implemented JWT authentication for mobile access and optimized API performance across services.",
      "Mentored junior developers and improved collaboration and release processes across the team.",
    ],
    tags: ["C#", ".NET Core", "Angular", "JWT", "TDD"],
  },
  {
    company: "Pratt & Whitney Canada",
    link: "https://www.prattwhitney.com/",
    title: "Software Developer Intern",
    years: "2019",
    location: "Montréal, Canada",
    summary: "Internal software for the engineering team.",
    highlights: [
      "Built a bug reporting and tracking system that improved QA and visibility across departments.",
      "Tuned SQL queries and front-end components, improving responsiveness by over 30%.",
    ],
    tags: ["SQL", "Front-end", "Internal tools"],
  },
  {
    company: "Upland (formerly Cimpl)",
    link: "https://uplandsoftware.com/cimpl/",
    title: "Quality Assurance Intern",
    years: "2017",
    location: "Montréal, Canada",
    summary: "Where I developed an early appreciation for quality and robust validation.",
    highlights: [
      "Created automated and manual reports supporting Scrum meetings and tracking product quality metrics.",
      "Identified and documented key defects while upholding testing standards.",
    ],
    tags: ["QA", "Scrum", "Reporting"],
  },
];

export const projects = [
  {
    id: "soccer-stats",
    title: "Soccer Stats",
    kind: "Full-stack web app",
    github: "https://github.com/skanderbm123/soccer-stats",
    summary:
      "An open-source React and Node.js app for exploring global soccer leagues, clubs and player data in real time.",
    highlights: [
      "Dashboards for standings and player stats, with MongoDB as a caching layer that cuts redundant API calls.",
      "Completed and upcoming fixtures, live scores and tactical formations (4-3-3, 4-2-3-1 and more).",
      "Player profile pages with historical stats and match insights in dedicated tabs.",
    ],
    tags: ["React", "Node.js", "MongoDB", "REST"],
    zoom: 1.35,
    media: [
      { src: "soccer-stats-1.png", caption: "League standings and team view" },
      { src: "soccer-stats-2.png", caption: "Player statistics page" },
      { src: "soccer-stats-3.png", caption: "Live scores, updating in real time" },
      { src: "soccer-stats-4.png", caption: "Fixtures and match details" },
      { src: "soccer-stats-5.png", caption: "Fixtures and match details" },
    ],
  },
  {
    id: "path-to-the-ninja",
    title: "Path to the Ninja",
    kind: "2D game · Unity",
    github: "https://github.com/skanderbm123/2D-Platform",
    summary:
      "A 2D action-platformer built from scratch in Unity and C#, with custom systems for movement, combat, AI and physics.",
    highlights: [
      "Player and enemy controllers with smooth animation, hit detection and attack combos.",
      "Responsive UI system: in-game menus, HUD and transitions.",
      "Visual and particle effects for dynamic feedback and immersion.",
    ],
    tags: ["Unity", "C#", "Game AI", "Physics"],
    zoom: 1,
    media: [
      { src: "2Dgame-gameplay-1.png", caption: "Level design with parallax backgrounds" },
      { src: "2Dgame-gameplay-2.png", caption: "Combat scene and UI transitions" },
    ],
  },
];

export const stack = [
  { group: "Backend", items: ["Java", "Spring Boot", "C#", ".NET Core", "Node.js"] },
  { group: "APIs & messaging", items: ["REST", "GraphQL", "Kafka", "JWT"] },
  { group: "Frontend", items: ["React", "TypeScript", "Angular"] },
  { group: "Data", items: ["SQL", "MongoDB"] },
  { group: "Infra & observability", items: ["Docker", "Kubernetes", "Datadog", "Deployment pipelines"] },
  { group: "Practice", items: ["Test-Driven Development", "Microservices", "Mentoring", "Scrum"] },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];
