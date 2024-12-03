import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Niko Soriano",
  initials: "NJ",
  url: "https://kaizenics.xyz/",
  location: "Davao City, Philippines",
  locationLink: "https://www.google.com/maps/place/Davao+City,+Davao+del+Sur",
  description:
    "Web Developer and Graphic Designer",
  summary:
    "Currently 4th Year Student at [Holy Cross of Davao College](/#education), Creatives Committee Head at [HCDC Information Technology Society](https://www.facebook.com/hcdcits), and Former Design Committee at [Google Developer Group Davao](https://www.facebook.com/gdgdavao). I do Freelancing especially in Web Development and Graphic Design.",
  avatarUrl: "/akome.jpg",
  skills: [
    "React",
    "React Native",
    "Flutter",
    "Next.js",
    "Vercel",
    "Vue.js",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "Postgres",
    "MySQL",
    "Supabase",
    "Firebase",
    "Python",
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe XD",
    "Canva",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kaizenics",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kaizenics/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kznics/",
        icon: Icons.x,

        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/kaizernics/",
        icon: Icons.facebook,
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
      company: "Hunnid Agency",
      href: "",
      badges: [],
      location: "Remote",
      title: "Front-end Engineer",
      logoUrl: "/hunnid.png",
      start: "November 2024",
      end: "Present",
      description:
        "Currently working as Front-end Engineer at HunnidBaddies. In-charge front-end development and UI designs for the company.",
    },
    {
      company: "SeaSense",
      href: "",
      badges: [],
      location: "Davao City, Philippines",
      title: "Project Lead, Mobile Developer",
      logoUrl: "/seasense.png",
      start: "August 2024",
      end: "Present",
      description:
        "Currently working as a React Native Developer at SeaSense. In-charge in the mobile application and back-end side of the project.",
    },
  
    {
      company: "HCDC Information Technology Society",
      badges: [],
      href: "",
      location: "Remote",
      title: "Creatives Head",
      logoUrl: "/its-logo.png",
      start: "January 2023",
      end: "Present",
      description:
        "Currently the Creatives Committee Head of the HCDC Information Technology Society. I manage the creatives team and create designs for the organization.",
    },
    {
      company: "HCDC College of Engineering and Technology",
      badges: [],
      href: "",
      location: "Remote",
      title: "Creatives Manager",
      logoUrl: "/cet.webp",
      start: "September 2023",
      end: "Present",
      description:
        "Currently the Creatives Manager of the HCDC College of Engineering and Technology. I manage the creatives team and create designs for the college.",
    },
    {
      company: "Cross Blazers Cup",
      href: "",
      badges: [],
      location: "Davao City, Philippines",
      title: "Lead Developer",
      logoUrl: "/cnc-2024.png",
      start: "September 2024",
      end: "November 2024",
      description:
        "Currently a Project Lead and Full Stack Developer of the Project called Cross Blazers Cup. I maintain the website and develop new features for the project.",
    },
    {
      company: "Unlimit Agency",
      badges: [],
      href: "",
      location: "Remote",
      title: "Video Editor",
      logoUrl: "/unlimit.png",
      start: "September 2024",
      end: "November 2024",
      description:
        "Video Editor at Unlimit Agency. I edit videos for their clients and create promotional videos for their social media platforms.",
    },
    {
      company: "Google Developer Group Davao",
      href: "",
      badges: [],
      location: "Remote",
      title: "Design Committee Volunteer",
      logoUrl: "/gdg.png",
      start: "March 2024",
      end: "July 2024",
      description:
        "Design Committee Volunteer of the Google Developer Group Davao. I create designs for the Google I/O Extended Davao 2024 and manage the design team.",
    },
  ],
  education: [
    {
      school: "Holy Cross of Davao College",
      href: "https://hcdc.edu.ph/",
      degree: "BS Information Technology",
      logoUrl: "/hcdclogo.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Panabo City National High School",
      href: "https://www.facebook.com/PanaboCNHS",
      degree: "Senior High School - Information Communication Technology",
      logoUrl: "/pnhs.jpg",
      start: "2019",
      end: "2021",
    },
    {
      school: "Panabo City National High School",
      href: "https://www.facebook.com/PanaboCNHS",
      degree: "Junior High School - Basic Education Curriculum",
      logoUrl: "/pnhs.jpg",
      start: "2015",
      end: "2019",
    },
    {
      school: "Panabo Central Elementary School",
      href: "https://www.facebook.com/PCESSC2016",
      degree: "Elementary Level - Basic Education Curriculum",
      logoUrl: "/pces.jpg",
      start: "2008",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "SeaSense",
      href: "https://github.com/cosierlabs/geomapper",
      dates: "August 2024 - Present",
      active: true,
      description:
        "Find fishing spots, get weather forecasts, and track marine fishes!",
      technologies: [
        "React Native",
        "NativeWind",
        "Firebase",
        "Expo",
        "Arduino",
        "Google API",
        "TensorFlow.js",
        "Python",
        "QGIS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/cosierlabs/geomapper",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/seasense-bg.png",
      video:
        "",
    },
    {
      title: "Cross Blazers Cup",
      href: "https://intramurals-hcdc.vercel.app/",
      dates: "September 2024 - November 2024",
      active: true,
      description:
        "Join us for an unforgettable experience filled with excitement, sportsmanship, and community pride!",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://hcdc.crossblazerscup.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kaizenics/crossblazers-cup",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cbc-web.png",
      video: "",
    },
    {
      title: "Confession Wall",
      href: "https://confessly.vercel.app/",
      dates: "January 2024 - February 2024",
      active: true,
      description:
        "Let's fill the Valentines with excitement! Share your love stories, confessions, and secrets!",
      technologies: [
        "Next.js",
        "Typescript",
        "Firebase",
        "TailwindCSS",
        "Shadcn UI",
        "Google API",
      ],
      links: [
        {
          type: "Website",
          href: "https://confessly.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kaizenics/confessly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/confessly.jpg",
      video: "",
    },
    {
      title: "Cater Services",
      href: "https://github.com/kaizenics/cater-services",
      dates: "March 2023 - June 2023",
      active: true,
      description:
        "Ate Gangs Catering Services is a catering service that offers a variety of food choices for your special events.",
      technologies: ["React", "JavaScript", "PHP", "MySQL", "SASS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/kaizenics/cater-services",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cater.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Natori",
      dates: "February 2024",
      location: "",
      description:
        "Developed a static website as a fan service for the Natori (my favorite japanese artist)",
      image: "",
      mlh: "",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://natori.vercel.app/",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/kaizenics/natori",
        },
      ],
    },
    {
      title: "Medisina",
      dates: "April 2024",
      location: "",
      description: "Developed a web application for Web Systems Project",
      image: "",
      mlh: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/kaizenics/medisina-admin",
        },
      ],
    },
    {
      title: "Heraeus",
      dates: "January 2024",
      location: "",
      description: "Developed a web application for IT Elective Project",
      image: "",
      mlh: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/kaizenics/heraeus",
        },
      ],
    },
    {
      title: "Anime Quotes",
      dates: "December 2023",
      location: "",
      description:
        "Developed a website that generate a quotes from your favorite anime",
      image: "",
      mlh: "",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ani-quotes.vercel.app/",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/kaizenics/quotes",
        },
      ],
    },
    {
      title: "Beshyfier",
      dates: "August 2023",
      location: "",
      description:
        "Developed a web application that modifies the text into an emoji",
      image: "",
      mlh: "",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://beshyfier.vercel.app/",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/kaizenics/beshyfier",
        },
      ],
    },
    {
      title: "Contact Managenent System",
      dates: "July 2023",
      location: "",
      description:
        "Developed a web application that manages contacts for a company or organization",
      image: "",
      mlh: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/kaizenics/contact-management-system",
        },
      ],
    },
  ],
} as const;
