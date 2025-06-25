import { DiTerminal, DiHtml5, DiJavascript1 } from "react-icons/di";
import {
  SiFirebase,
  SiGit,
  SiCss3,
  SiMongodb,
  SiAmazonaws,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";

export const Skills = [
  {
    slug: "javascript",
    Component: DiJavascript1,
    title: "JavaScript",
    Description: () => <>Core language for frontend and backend development</>,
  },
  {
    slug: "typescript",
    Component: SiTypescript,
    title: "TypeScript",
    Description: () => <>Typed JavaScript for scalable apps</>,
  },
  {
    slug: "react",
    Component: FaReact,
    title: "React.js",
    Description: () => <>Reusable UI components and state management</>,
  },
  {
    slug: "nextjs",
    Component: TbBrandNextjs,
    title: "Next.js",
    Description: () => <>Production-ready SSR React apps</>,
  },
  {
    slug: "node",
    Component: FaNodeJs,
    title: "Node.js",
    Description: () => <>Backend logic, APIs and server-side workflows</>,
  },
  {
    slug: "express",
    Component: SiExpress,
    title: "Express.js",
    Description: () => <>Backend routing and RESTful APIs</>,
  },
  {
    slug: "mongodb",
    Component: SiMongodb,
    title: "MongoDB",
    Description: () => <>Storing user data and test history</>,
  },
  {
    slug: "tailwind",
    Component: SiTailwindcss,
    title: "TailwindCSS",
    Description: () => <>Fast and responsive utility-first styling</>,
  },
  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML5",
    Description: () => <>Structure for modern web pages</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS3",
    Description: () => <>Styling layout and responsiveness</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Push notifications, auth, and DB</>,
  },
  {
    slug: "aws",
    Component: SiAmazonaws,
    title: "AWS Lambda",
    Description: () => <>Serverless APIs using cloud functions</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Terminal",
    Description: () => <>Scripts, versioning, and CLI operations</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git & GitHub",
    Description: () => <>Code management and collaboration</>,
  },
  {
    slug: "postman",
    Component: SiPostman,
    title: "Postman",
    Description: () => <>Testing and debugging APIs</>,
  },
];
