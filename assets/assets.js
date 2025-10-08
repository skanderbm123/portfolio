import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
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
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
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
  vscode,
  firebase,
  figma,
  git,
  mongodb,
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
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Geo-based app",
    description: "Mobile app using GPS and map APIs.",
    bgImage: "work-2.png",
    images: ["geo-1.png"],
  },
  {
    title: "Frontend project",
    description: "Landing page built with Next.js & TailwindCSS.",
    bgImage: "work-1.png",
    video: "PSYLOCKE_2024-12-10_22-32-43.mp4",
  },
];

export const experienceData = [
  {
    logo: "/logos/appdirect.png",
    company: "AppDirect",
    title: "Full-Stack Engineer II",
    years: "2021 – Present",
    location: "Montreal, Canada",
    description:
      "Building scalable integrations and distributed systems using Java, Spring Boot, React, and GraphQL. Leading DevOps initiatives with CI/CD pipelines and Kubernetes deployments.",
    link: "https://www.appdirect.com/",
  },
  {
    logo: "/logos/desjardins.png",
    company: "Desjardins Group",
    title: "Software Developer Intern",
    years: "2020 – 2021",
    location: "Lévis, Canada",
    description:
      "Developed internal tools for the EPP team using Angular and Node.js. Improved automation and data visualization for the product management department.",
    link: "https://www.desjardins.com/",
  },
  {
    logo: "/logos/veeva.png",
    company: "Veeva Systems",
    title: "Frontend Developer (Contract)",
    years: "2019 – 2020",
    location: "Remote, USA",
    description:
      "Designed and implemented modern React components aligned with Veeva's brand. Focused on performance and accessibility for their SaaS solutions.",
    link: "https://www.veeva.com/",
  },
];

export const infoList = [
  { icon: "icons/code.svg", title: "Languages", description: "HTML, CSS..." },
  {
    icon: "icons/education.svg",
    title: "Education",
    description: "B.Tech...",
  },
  { icon: "icons/projects.svg", title: "Projects", description: "..." },
];

export const toolsData = [
  { name: "VSCode", src: "icons/vscode.svg" },
  { name: "Firebase", src: "icons/firebase.svg" },
  { name: "MongoDB", src: "icons/mongodb.svg" },
  { name: "Figma", src: "icons/figma.svg" },
  { name: "Git", src: "icons/git.svg" },
];

export const logos = {
  appdirect: "logos/appdirect.png",
  desjardins: "logos/desjardins.png",
  veeva: "logos/veeva.png",
};

// ABOUT SECTION DATA
export const aboutData = {
  introTitle: "Introduction",
  sectionTitle: "About Me",
  paragraph:
    "I'm Skander Ben Mekki, a passionate Full-Stack Developer with experience building modern, scalable web applications. I love creating products that are both functional and beautiful, blending clean code with thoughtful design.",

  infoList: [
    {
      icon: "icons/code-icon.png",
      title: "Languages",
      description: "HTML, CSS, JavaScript, React, Next.js",
    },
    {
      icon: "icons/edu-icon.png",
      title: "Education",
      description: "B.Tech in Computer Science",
    },
    {
      icon: "icons/project-icon.png",
      title: "Projects",
      description: "Built more than 5 personal projects",
    },
  ],

  toolsTitle: "Tools I use",
  toolsData: [
    { name: "VSCode", src: "icons/vscode.png" },
    { name: "Firebase", src: "icons/firebase.png" },
    { name: "MongoDB", src: "icons/mongodb.png" },
    { name: "Figma", src: "icons/figma.png" },
    { name: "Git", src: "icons/git.png" },
  ],
};
