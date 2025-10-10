import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import github_icon from "./github.png";
import linkedin_icon from "./linkedin.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  github_icon,
  linkedin_icon,
};

export const headerData = {
  intro: "Hi! I'm Skander Ben Mekki",
  title: "A Software Engineer",
  subtitle:
    "who loves solving hard problems and building things that last. Currently at AppDirect, where I design and deliver backend and full-stack solutions that make complex systems run smoothly.",
  github: "https://github.com/skanderbenmekki",
  linkedin: "https://www.linkedin.com/in/skander-ben-mekki/",
};

export const workData = [
  {
    title: "Unity Game – Path to the Ninja",
    github: "https://github.com/skanderbm123/2D-Platform",
    cardInfo:
      "2D action-platformer built entirely from scratch in Unity with C#, featuring physics-based movement, combat, AI, and a custom UI system.",
    description: [
      "A 2D action-platformer developed from the ground up in Unity (C#) with custom-built systems for movement, combat, AI, and physics",
      "Created player and enemy controllers with smooth animations, hit detection, and attack combos.",
      "Built a responsive UI system with in-game menus, HUD, and transitions.",
      "Integrated visual and particle effects for dynamic feedback, enhancing overall immersion.",
    ],
    bgImage: "2Dgame.png",
    media: [
      // {
      //   type: "video",
      //   src: "PSYLOCKE_2024-12-10_22-32-43.mp4",
      //   caption: "Gameplay demo",
      // },
      {
        type: "image",
        src: "2Dgame-gameplay-1.png",
        caption: "Level design showcasing parallax backgrounds",
      },
      {
        type: "image",
        src: "2Dgame-gameplay-2.png",
        caption: "Combat scene and UI transitions",
      },
    ],
  },
  {
    title: "Soccer Stats Web Application",
    github: "https://github.com/skanderbm123/soccer-stats",
    cardInfo:
      "An open-source full-stack React + Node.js application for exploring global soccer leagues, clubs, and player data in real time.",
    description: [
      "Open-source app for exploring global soccer leagues and players, featuring live scores, formations, and interactive player stats synced with MongoDB",
      "Designed dynamic dashboards for team standings and player statistics, using MongoDB as a caching layer to reduce redundant API calls and improve performance.",
      "Displayed completed and upcoming fixtures, live scores, and tactical formations (e.g., 4-3-3, 4-2-3-1).",
      "Built interactive player profile pages featuring historical stats and match insights, accessible in dedicated tabs.",
    ],
    bgImage: "soccer-stats-card.png",
    media: [
      {
        type: "image",
        src: "soccer-stats-1.png",
        caption: "League standings and team view",
      },
      {
        type: "image",
        src: "soccer-stats-2.png",
        caption: "Player statistics page",
      },
      {
        type: "image",
        src: "soccer-stats-3.png",
        caption: "Live scores (updating in real-time)",
      },
      {
        type: "image",
        src: "soccer-stats-4.png",
        caption: "Fixtures and match details",
      },
      {
        type: "image",
        src: "soccer-stats-5.png",
        caption: "Fixtures and match details",
      },
    ],
  },
];

export const experienceData = [
  {
    logoLight: "icons/appdirect-icon.png",
    logoDark: "icons/appdirect-icon-dark.png",
    company: "AppDirect",
    title: "Software Engineer II – Microsoft Integration Team",
    years: "2021 – Present",
    location: "Montreal, Canada",
    description:
      "I work on large-scale integrations between AppDirect and Microsoft services, leading the design and development of features that improve automation, data reliability, and system scalability. My day-to-day involves Java, Spring Boot, and React across multiple microservices, using Kafka and GraphQL to ensure seamless communication between distributed systems. I’ve contributed to major backend improvements, optimized database performance, and helped modernize our deployment pipelines. Along the way, I’ve also mentored new engineers and helped shape a culture of clean, maintainable code and continuous improvement.",
    link: "https://www.appdirect.com/",
  },
  {
    logoLight: "icons/deloitte.svg",
    logoDark: "icons/deloitte-dark.png",
    company: "Deloitte Canada",
    title: "Software Developer",
    years: "2020 – 2021",
    location: "Montreal, Canada",
    description:
      "At Deloitte, I developed internal tools and enterprise web apps using .NET Core Razor, C#, and Angular, helping teams manage data more efficiently and securely. I applied Test-Driven Development to ensure reliability, implemented JWT authentication for mobile access, and optimized API performance across services. Beyond coding, I mentored junior developers and played an active role in improving collaboration and release processes across the engineering team.",
    link: "https://www.deloitte.com/",
  },
  {
    logoLight: "icons/pratt.png",
    logoDark: "icons/pratt-dark.png",
    company: "Pratt & Whitney Canada",
    title: "Software Developer Intern",
    years: "2019",
    location: "Montreal, Canada",
    description:
      "I built and optimized internal software for the engineering team, including a bug reporting and tracking system that improved QA and visibility across departments. I also fine-tuned SQL queries and front-end components to enhance responsiveness by over 30%. The role gave me hands-on experience collaborating in an enterprise environment and strengthened my foundation in software performance and user-focused design.",
    link: "https://www.prattwhitney.com/",
  },
  {
    logoLight: "icons/upland.png",
    logoDark: "icons/upland-dark.png",
    company: "Upland (Formerly - Cimpl)",
    title: "Quality Assurance Intern",
    years: "2017",
    location: "Montreal, Canada",
    description:
      "As part of the QA team, I created automated and manual reports to support Scrum meetings and monitored product quality metrics. I helped identify and document key defects while ensuring compliance with testing standards and performance expectations. The experience gave me an early appreciation for quality, collaboration, and the importance of robust software validation in the delivery cycle.",
    link: "https://uplandsoftware.com/cimpl/",
  },
];

// ABOUT SECTION DATA
export const aboutData = {
  introTitle: "Introduction",
  sectionTitle: "About Me",
  paragraph: `I’m a Software Engineer with a Bachelor’s in Software Engineering from Concordia University. I’m passionate about full-stack development — there’s nothing more rewarding than seeing backend logic come alive through a clean, intuitive UI.
I’ve worked across the entire development lifecycle, from system design to deployment, focusing on building scalable and maintainable solutions. I enjoy solving complex problems with simple, elegant code.
When I’m not coding, you’ll likely find me cooking, gaming, or exploring new places. Always learning, always creating.
Feel free to reach out — I’m always open to a good conversation about tech, creativity, or anything in between!`,
  infoList: [
    {
      icon: "icons/code-icon.png",
      title: "Core Skills",
      description:
        "Java, Spring Boot, C#, React, Node.js, REST API, GraphQL, Docker, Kubernetes",
    },
    {
      icon: "icons/edu-icon.png",
      title: "Education",
      description:
        "Bachelor of Engineering (BEng) in Software Engineering — Concordia University, Member of the Institute of Co-op Education.",
    },
    {
      icon: "icons/project-icon.png",
      title: "Experience",
      description: "5+ years in backend and full-stack development",
    },
  ],

  toolsTitle: "Tools I use",
  toolsData: [
    // Backend & Infrastructure
    { name: "Spring Boot", src: "icons/springboot.png" },
    { name: "C#", src: "icons/csharp.png" },
    { name: "Docker", src: "icons/docker.png" },
    { name: "Kubernetes", src: "icons/kubernetes.png" },

    // Frontend & Language
    { name: "React", src: "icons/react.png" },
    { name: "TypeScript", src: "icons/typescript.png" },

    // Monitoring / AI
    { name: "Datadog", src: "icons/datadog.png" },
    { name: "ChatGPT", src: "icons/chatgpt.png" },
  ],
};
