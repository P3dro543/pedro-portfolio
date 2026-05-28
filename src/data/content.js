export const data = {
  name: "Pedro Romero",
  role: "Full-Stack Developer",
  location: "San José, Costa Rica",
  available: true,
  bio: "Full-stack web developer focused on building modern, scalable and user-friendly applications. I specialize in backend development with Node.js and .NET, while creating responsive interfaces using React and Tailwind CSS. I also have experience working with Flutter, Python and Java across different types of projects.",  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "12+", label: "Projects completed" },
    { value: "8+", label: "Technologies" },
  ],
  projects: [
    {
      index: "01",
      title: "Romero Café Legacy",
      description:
        "Full-stack e-commerce with authentication, cart, order history and admin panel. Flutter + Node.js + MySQL.",
      tags: ["Flutter", "Node.js", "MySQL", "Express"],
      status: "Active",
    },
    {
      index: "02",
      title: "Simulated Payment Gateway",
      description:
        "Card processing engine with Luhn validation, BIN detection, SHA-256 tokenization and SINPE Móvil support. ACID transactions with MySQL.",
      tags: ["Node.js", "MySQL", "Dart", "SHA-256"],
      status: "Active",
    },
    {
      index: "03",
      title: "TSE Identity Service",
      description:
        "REST service replicating Costa Rica's Electoral Tribunal API for ID validation with full audit logging.",
      tags: ["Node.js", "Express", "MySQL", "REST"],
      status: "Active",
    },
    {
      index: "04",
      title: "Cascading Geographic Selector",
      description:
        "Flutter component for country → province → canton → district selection with normalized data and cascading endpoints.",
      tags: ["Flutter", "Dart", "MySQL"],
      status: "Completed",
    },
  ],
skills: [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", level: "Advanced" },
      { name: "React",      level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
    ],
  },


  {
    category: "Backend",
    items: [
      { name: "Node.js",   level: "Advanced" },
      { name: "Express",   level: "Intermediate" },
      { name: "C# / .NET", level: "Beginner"     },
    ],
  },

  {
    category: "Databases",
    items: [
      { name: "MySQL",     level: "Advanced"     },
      {name: "SQL Server", level: "Intermediate" },
      { name: "MongoDB",   level: "Beginner"     },
    ],
  },

  {
    category: "Tools & Other",
    items: [
      { name: "Git",        level: "Advanced"    },
      { name: "Postman",    level: "Intermediate" },
      { name: "Figma",      level: "Beginner"    },
      { name: "Linux",      level: "Beginner"    },
    ],
  },

  {
    category: "Mobile",
    items: [
      { name: "Flutter",    level: "Beginner"    },
      { name: "Dart",       level: "Beginner"    },
    ],
  },

],

  contact: {
    github: "github.com/P3dro543",
    linkedin: "www.linkedin.com/in/pedro-romero-araya-4340b4384",
    email: "romeropedro07@outlook.com",
  },
}