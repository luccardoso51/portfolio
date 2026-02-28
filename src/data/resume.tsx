import type { ReactNode } from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Lucas Cardoso",
  initials: "LC",
  url: "https://portfolio-one-sandy-84.vercel.app",
  location: "Brazil",
  locationLink: "https://www.google.com/maps/place/brazil",
  description:
    "Full Stack Engineer passionate about building innovative solutions that drive user satisfaction and business growth.",
  summary:
    "I'm a Full Stack Engineer with a strong background in product management, design, and software development. I specialize in JavaScript, TypeScript, React, Next.js, React Native, and Node.js, and thrive in cross-functional teams where I can combine technical expertise with a user-centric mindset.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/luccardoso51",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/lucascardoso51",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "hubble",
      href: "https://hubble.social",
      badges: [],
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "/hubble.png",
      start: "2024",
      end: "Present",
      description:
        "Building full-stack features for a modern web platform using React, TypeScript, and Node.js. Contributing to architecture decisions and collaborating across product, design, and engineering to ship high-quality user experiences.",
    },
    {
      company: "Circles",
      href: "https://circleapp.com.br",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/circles.ico",
      start: "2022",
      end: "2024",
      description:
        "Developed and maintained web and mobile applications. Led frontend architecture decisions, optimizing performance and scalability across the stack.",
    },
    {
      company: "Aucto",
      href: "https://aucto.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/aucto.png",
      start: "2021",
      end: "2022",
      description:
        "Led optimization of a marketplace and SaaS platform. Designed and implemented a messaging system and scoped notification systems to improve user engagement and retention.",
    },
    {
      company: "Pertinho de Casa",
      href: "#",
      badges: [],
      location: "Brazil",
      title: "Product Engineer",
      logoUrl: "",
      start: "2020",
      end: "2022",
      description:
        "Joined as a Product Engineer on a non-profit initiative by Rede Asta and Accenture, aimed at strengthening local economies across Brazilian cities. The platform grew to serve 31K+ sellers and 10K+ monthly users as a free alternative to delivery apps.",
    },
    {
      company: "Aua",
      href: "#",
      badges: [],
      location: "Brazil",
      title: "Software Engineer",
      logoUrl: "",
      start: "2019",
      end: "2022",
      description:
        "Engineered scalable web and mobile solutions for a B2B2C social business supporting local entrepreneurs and small businesses in northern Brazil. Contributed to a 300% increase in sales through data-driven optimization. Aua was successfully acquired by Pertinho de Casa after two and a half years.",
    },
    {
      company: "Vibe Tecnologia",
      href: "https://vibetecnologia.com",
      badges: [],
      location: "Brazil",
      title: "Software Engineer",
      logoUrl: "/vibe.png",
      start: "2018",
      end: "2019",
      description:
        "Developed software solutions using JavaScript and TypeScript. Contributed to web application development and helped establish engineering best practices within the team.",
    },
  ],
  education: [
    {
      school: "Your University",
      href: "#",
      degree: "Your Degree",
      logoUrl: "",
      start: "20XX",
      end: "20XX",
    },
  ],
  projects: [
    {
      title: "DropDrive",
      href: "https://github.com/luccardoso51/DropDrive-frontend",
      dates: "2022",
      active: true,
      description:
        "A Dropbox-inspired file storage and sharing application with a React frontend and mobile companion app.",
      technologies: ["React", "React Native", "JavaScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/luccardoso51/DropDrive-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://opengraph.githubassets.com/1/luccardoso51/DropDrive-frontend",
      video: "",
    },
    {
      title: "FindDEV",
      href: "https://github.com/luccardoso51/FindDEV",
      dates: "2021",
      active: true,
      description:
        "Location-based mobile app for discovering nearby developers, built with React Native.",
      technologies: ["React Native", "JavaScript"],
      links: [
        {
          type: "Source",
          href: "https://github.com/luccardoso51/FindDEV",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://opengraph.githubassets.com/1/luccardoso51/FindDEV",
      video: "",
    },
    {
      title: "Ticket Project",
      href: "https://github.com/luccardoso51/ticket-project",
      dates: "2021",
      active: true,
      description:
        "Full-stack ticketing solution for purchasing and managing event tickets, built with TypeScript.",
      technologies: ["TypeScript", "Node.js"],
      links: [
        {
          type: "Source",
          href: "https://github.com/luccardoso51/ticket-project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://opengraph.githubassets.com/1/luccardoso51/ticket-project",
      video: "",
    },
  ],
  hackathons: [] as Array<{
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    mlh?: string;
    win?: string;
    icon?: string;
    links: Array<{ title: string; icon: ReactNode; href: string }>;
  }>,
};
