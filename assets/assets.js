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
};

export const workData = [
  {
    title: "Unity Game – Path to the Ninja",
    description:
      "A 2D action-platformer built in Unity using C#. Focused on immersive gameplay, smooth mechanics, and engaging level design that showcases creativity and strong problem-solving skills.",
    bgImage: "work-1.png",
    video: "PSYLOCKE_2024-12-10_22-32-43.mp4",
  },
  {
    title: "Soccer Stats Web Application",
    description:
      "An open-source React app for tracking global soccer clubs, fixtures, and live stats. Developed full-stack features with Node.js, Express, and MongoDB, improving user experience with advanced search and real-time updates.",
    bgImage: "work-2.png",
    images: ["geo-1.png"],
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
      "Designing and building scalable integrations between AppDirect and Microsoft services. I lead backend and DevOps initiatives using Java, Spring Boot, React, and GraphQL, ensuring reliable data synchronization and smooth CI/CD deployments.",
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
      "Developed internal web tools for Deloitte’s EPP team using Angular and Node.js. Focused on improving data automation, visualization, and productivity through clean, efficient backend solutions.",
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
      "Built and optimized internal software for the engineering team, improving reporting workflows and application performance. Focused on clean UI, accessibility, and reliable data handling.",
    link: "https://www.prattwhitney.com/",
  },
];

// ABOUT SECTION DATA
export const aboutData = {
  introTitle: "Introduction",
  sectionTitle: "About Me",
  paragraph: `I’m a Full-Stack Developer with more than five years of professional experience in full-stack development.
My work focuses on designing and optimizing systems using Java, Spring Boot, Node.js, React, and GraphQL, while applying best practices in CI/CD, microservices, and test-driven development.
At AppDirect, I contribute to distributed systems built around Kafka and automation pipelines that improve reliability and reduce support costs. I’m passionate about leveraging modern tools — from Kubernetes to AI-assisted development — to help teams build faster and smarter.`,
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
