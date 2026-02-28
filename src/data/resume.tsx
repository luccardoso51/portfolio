import type { ReactNode } from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Your Name",
  initials: "YN",
  url: "https://yourportfolio.dev",
  location: "Your City, Country",
  locationLink: "https://www.google.com/maps/place/yourcity",
  description:
    "Software Engineer passionate about building great products and helping people.",
  summary:
    "I'm a software engineer with experience building web applications. I enjoy working across the stack and am always looking for new challenges.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+10000000000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yourusername",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@yourusername",
        icon: Icons.youtube,
        navbar: true,
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
      company: "Example Company",
      href: "https://example.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "",
      start: "Jan 2023",
      end: "Present",
      description:
        "Built and maintained full-stack web applications. Collaborated with cross-functional teams to deliver features on time.",
    },
  ],
  education: [
    {
      school: "Example University",
      href: "https://example.edu",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Example Project",
      href: "https://example.com",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "An example project showcasing my skills in building modern web applications.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
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
