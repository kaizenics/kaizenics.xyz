export const profileData = {
  personalInfo: {
    name: "Nicose John Soriano",
    bio: "Hello, I'm a web developer based in Philippines. I specialize in building responsive and user-friendly web applications with modern technologies.",
    socials: [
      {
        href: "https://www.linkedin.com/in/kaizenics/",
        type: "linkedin",
        label: "LinkedIn Profile",
      },
      {
        href: "https://github.com/kaizenics",
        type: "github",
        label: "GitHub Profile",
      },
      {
        href: "mailto:nicosejohnsoriano@gmail.com",
        type: "mail",
        label: "Email",
      },
    ],
    links: [
      { href: "/cv.pdf", label: "Resume" },
      { href: "https://www.behance.net/kaizenics", label: "Visuals" },
    ],
  },

  skills: [
    "Next.js",
    "React",
    "Vue",
    "JS/TS",
    "Node.js",
    "PHP/Laravel",
    "Python",
    "Tailwind CSS",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "Drizzle",
    "Directus",
    "Git",
  ],

  workExperience: [
    {
      company: "ArtGuerilla",
      position: "UI Designer",
      period: "Full-time",
      location: "Berlin, Germany"
    },
    {
      company: "HunnidBaddies",
      position: "Frontend Developer",
      period: "Full-time",
      location: "Berlin, Germany"
    },
    {
      company: "BDCons Management",
      position: "Social Media Manager",
      period: "Part-time",
      location: "Vienna, Austria"
    },
    {
      company: "NXZ Visuals",
      position: "Developer & Designer",
      period: "Freelance",
      location: "Davao, Philippines"
    },
  ],

  volunteerExperiences: [
    {
      position: "Creatives Head",
      organization: "HCDC Information Technology Society",
      period: "2024 - 2025",
    },
    {
      position: "Creatives Manager",
      organization: "HCDC College of Engineering and Technology",
      period: "2024 - 2025",
    },
    {
      position: "Full-stack Developer",
      organization: "HCDC SSG Executive Department",
      period: "2024",
    },
    {
      position: "Design Committee",
      organization: "Google Developer Group Davao",
      period: "2024",
    },
  ],

  projects: [
    {
      name: "SeaSense",
      description:
        "Lead the development of our capstone project. Built with React Native, Expo, Firebase, QGIS, Open-Meteo, and TensorFlow.",
      link: "https://github.com/devseasense/seasense",
    },
    {
      name: "Cross Blazers Cup",
      description:
        "Lead the development of the official website for the HCDC Cross Blazers Cup 2024. Built with Next.js, Tailwind CSS, shadcn/ui, and Supabase.",
      link: "https://hcdc.crossblazerscup.com/",
    },
    {
      name: "Duospense",
      description:
        "Built a expense tracker app with Next.js, Tailwind CSS, shadcn/ui, and Supabase.",
      link: "https://github.com/kaizenics/duospense",
    },
    {
      name: "Confessly",
      description:
        "Built a confession wall for valentines with Next.js, Tailwind CSS, and Supabase.",
      link: "https://confessly.vercel.app/",
    },
  ],
};
