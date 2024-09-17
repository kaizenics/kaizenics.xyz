import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Niko Soriano",
  initials: "NJ",
  url: "https://nikodv.me",
  location: "Davao City, Philippines",
  locationLink: "https://www.google.com/maps/place/Davao+City,+Davao+del+Sur",
  description:
    "Web Developer with a passion for Video Editing and Graphic Designing",
  summary:
    "Currently 4th Year Student at [Holy Cross of Davao College](/#education), Creatives Committee Head at [HCDC Information Technology Society](https://www.facebook.com/hcdcits), and Design Committee at [Google Developer Group Davao](https://www.facebook.com/gdgdavao). I attend some seminars, conferences, and tech meetups here in Davao such as PWA Pilipinas, PyConf Mini Davao, and Google I/O Extended Davao to learn more about the latest trends in technology.",
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
      company: "Unlimit Agency",
      badges: [],
      href: "",
      location: "Remote",
      title: "Video Editor",
      logoUrl: "/unlimit.png",
      start: "September 2024",
      end: "Present",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Cosier Labs",
      href: "",
      badges: [],
      location: "Santa Clara, CA",
      title: "Project Lead, Full Stack Developer",
      logoUrl: "/cosier.png",
      start: "August 2024",
      end: "Present",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Cross Blazers Cup",
      href: "",
      badges: [],
      location: "San Jose, CA",
      title: "Project Lead, Full Stack Developer",
      logoUrl: "/cnc.jpg",
      start: "September 2024",
      end: "Present",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "HCDC Information Technology Society",
      badges: [],
      href: "",
      location: "Remote",
      title: "Creatives Committee Head",
      logoUrl: "/its-logo.png",
      start: "January 2023",
      end: "Present",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
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
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Google Developer Group Davao",
      href: "",
      badges: [],
      location: "Remote",
      title: "Design Committee",
      logoUrl: "/gdg.png",
      start: "March 2024",
      end: "July 2024",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
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
      title: "GeoMapper",
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
        "Jupyter Notebook",
        "ArcGIS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/cosierlabs/geomapper",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/geomapper.png",
      video:
        "",
    },
    {
      title: "Cross Blazers Cup",
      href: "https://intramurals-hcdc.vercel.app/",
      dates: "September 2024 - Present",
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
          href: "https://intramurals-hcdc.vercel.app/",
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
      title: "Natori Unofficial Website",
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
      title: "Synd AI",
      dates: "February 2024",
      location: "",
      description:
        "Developed a web application for OpenAI GPT-4o API Testing and Integration",
      image: "",
      mlh: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/kaizenics/synd-ai",
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
