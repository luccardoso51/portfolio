import type { ReactNode } from 'react';
import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';
import { ReactLight } from '@/components/ui/svgs/reactLight';
import { NextjsIconDark } from '@/components/ui/svgs/nextjsIconDark';
import { Typescript } from '@/components/ui/svgs/typescript';
import { Nodejs } from '@/components/ui/svgs/nodejs';

export const DATA = {
  name: 'Lucas Cardoso',
  initials: 'LC',
  url: 'https://lucascardoso.com',
  location: 'Belém, PA, Brazil',
  locationLink: 'https://www.google.com/maps/place/Belem,State+of+Para,Brazil',
  description:
    'Full Stack Engineer passionate about building innovative solutions that drive user satisfaction and business growth.',
  summary:
    "I'm a Full Stack Engineer with a background spanning software development, product management, and UI/UX design. I specialize in JavaScript, TypeScript, React, Next.js, React Native, and Node.js, and thrive in cross-functional teams where I can combine technical expertise with a user-centric mindset.",
  avatarUrl: '/me.jpg',
  skills: [
    { name: 'React', icon: ReactLight },
    { name: 'Next.js', icon: NextjsIconDark },
    { name: 'TypeScript', icon: Typescript },
    { name: 'Node.js', icon: Nodejs }
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' }
  ],
  contact: {
    email: 'lucascardoso0051@gmail.com',
    tel: '+5591989346161',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/luccardoso51',
        icon: Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/lucascardoso51',
        icon: Icons.linkedin,
        navbar: true
      },
      X: {
        name: 'X',
        url: '#',
        icon: Icons.x,
        navbar: false
      },
      Youtube: {
        name: 'Youtube',
        url: '#',
        icon: Icons.youtube,
        navbar: false
      },
      email: {
        name: 'Send Email',
        url: 'mailto:lucascardoso0051@gmail.com',
        icon: Icons.email,
        navbar: false
      }
    }
  },

  work: [
    {
      company: 'hubble',
      href: 'https://hubble.social',
      badges: [],
      location: 'San Francisco, CA (Remote)',
      title: 'Software Engineer',
      logoUrl: '/hubble.png',
      start: 'Oct 2024',
      end: 'Present',
      description:
        'Launched and maintained responsive front-end applications using React, Next.js, and Tailwind CSS. Implemented a timezone-aware scheduling feature enabling users to book meetings with experts across any country. Built global state management with Zustand, conducted Figma design reviews, wrote unit tests, and delivered secure digital transaction features using Stripe.'
    },
    {
      company: 'Aucto',
      href: 'https://aucto.com',
      badges: [],
      location: 'San Francisco, CA (Remote)',
      title: 'Product Designer & Manager',
      logoUrl: '/aucto.png',
      start: 'Feb 2024',
      end: 'Sep 2024',
      description:
        'Led development and optimization of the Aucto marketplace auction platform and SaaS, enhancing UX and driving conversion rates. Designed a messaging and notification system that enabled communication between buyers and sellers. Created and maintained technical documentation to support team onboarding and knowledge transfer.'
    },
    {
      company: 'Pertinho de Casa',
      href: '#',
      badges: [],
      location: 'Belém, PA',
      title: 'Product Engineer',
      logoUrl: '/pertinho_de_casa_logo.jpeg',
      start: 'May 2022',
      end: 'Jan 2024',
      description:
        'Oversaw a national e-commerce platform with 30,000+ sellers and 10,000+ monthly users. Led technical architecture using React Native, Vue.js, TypeScript, and Node.js. Integrated React Query for efficient server-state management and data caching. Implemented product growth strategies that drove a 78% increase in new sellers on the platform.'
    },
    {
      company: 'AUA - Compre do Pequeno',
      href: '#',
      badges: [],
      location: 'Belém, PA',
      title: 'Founder & Software Engineer',
      logoUrl: '/Aua-logo.jpeg',
      start: 'Dec 2019',
      end: 'Nov 2022',
      description:
        'Founded a B2B2C social business supporting local entrepreneurship in two cities in northern Brazil, growing to 3K+ users. Led mobile app development with React Native including Google Maps geolocation. Used Firebase for event tracking and analytics to inform data-driven decisions. Built a web admin platform with Next.js and designed high-fidelity UI/UX prototypes in Adobe XD.'
    },
    {
      company: 'BitX Software House',
      href: '#',
      badges: [],
      location: 'Belém, PA',
      title: 'Mobile Software Engineer',
      logoUrl: '/bitx_logo.jpeg',
      start: 'Apr 2018',
      end: 'Feb 2020',
      description:
        'Shipped 3 mobile apps using React Native, TypeScript, and Redux following agile methodology. Contributed to a mobile marketplace app with multi-category purchasing. Developed driver tracking and route display in a delivery system using React and Google Maps API. Built an accessible app for hiring medical services and delivered client MVPs using Expo.'
    }
  ],
  education: [
    {
      school: 'Federal University of Pará',
      href: 'https://www.ufpa.br',
      degree: 'B.S. in Computer Engineering',
      logoUrl: '/ufpa-logo.jpeg',
      start: '2017',
      end: '2021'
    }
  ],
  projects: [
    {
      title: 'DropDrive',
      href: 'https://github.com/luccardoso51/DropDrive-frontend',
      dates: '2022',
      active: true,
      description:
        'A Dropbox-inspired file storage and sharing application with a React frontend and mobile companion app.',
      technologies: ['React', 'React Native', 'JavaScript'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/luccardoso51/DropDrive-frontend',
          icon: <Icons.github className="size-3" />
        }
      ],
      image:
        'https://opengraph.githubassets.com/1/luccardoso51/DropDrive-frontend',
      video: ''
    },
    {
      title: 'FindDEV',
      href: 'https://github.com/luccardoso51/FindDEV',
      dates: '2021',
      active: true,
      description:
        'Location-based mobile app for discovering nearby developers, built with React Native.',
      technologies: ['React Native', 'JavaScript'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/luccardoso51/FindDEV',
          icon: <Icons.github className="size-3" />
        }
      ],
      image: 'https://opengraph.githubassets.com/1/luccardoso51/FindDEV',
      video: ''
    },
    {
      title: 'Ticket Project',
      href: 'https://github.com/luccardoso51/ticket-project',
      dates: '2021',
      active: true,
      description:
        'Full-stack ticketing solution for purchasing and managing event tickets, built with TypeScript.',
      technologies: ['TypeScript', 'Node.js'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/luccardoso51/ticket-project',
          icon: <Icons.github className="size-3" />
        }
      ],
      image: 'https://opengraph.githubassets.com/1/luccardoso51/ticket-project',
      video: ''
    }
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
  }>
};
