import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export const translations = {
  en: {
    role:     'Full-Stack Developer',
    location: 'San José, Costa Rica',
    headline: ['I design systems', 'that work.'],
    bio:      [
      'Full-stack web developer focused on building ',
      'modern, scalable and user-friendly applications',
      '. I specialize in backend development with Node.js and .NET, while creating responsive interfaces using React and Tailwind CSS.',
    ],
    cta1: 'View my work',
    cta2: "Let's talk",
    stats: [
      { value: '3+',  label: 'Years of experience'  },
      { value: '12+', label: 'Projects completed'   },
      { value: '8+',  label: 'Technologies'         },
    ],
    nav: {
      home: 'Home', about: 'About', skills: 'Skills',
      work: 'Work', terminal: 'Terminal', contact: 'Contact',
    },
    available:     'Available',
    aboutTitle:    'About me',
    profileLabel:  'Profile',
    profileTitle:  'Full-Stack Developer',
    profileBody:   'Full-stack web developer focused on building modern, scalable and user-friendly applications. I specialize in backend development with Node.js and .NET, while creating responsive interfaces using React and Tailwind CSS.',
    currentLabel:  'Currently',
    currentTitle:  'E-commerce & payment systems',
    currentBody:   'Building Romero Café Legacy: a complete e-commerce system with payment gateway, cascading geolocation and transactional MySQL architecture.',

    timelineLabel: 'Timeline',
    timeline: [
      {
        year: '2026 — Present',
        title: 'Building real-world digital products',
        desc: 'Developing ambitious e-commerce platforms like Romeo Legacy using Flutter, Node.js and MySQL, focused on scalability, performance and modern user experience.',
      },
      {
        year: '2025',
        title: 'Modern full-stack & scalable APIs',
        desc: 'Specialized in REST API development using Clean Architecture while expanding into frontend development with React and Tailwind CSS to create fast and modern interfaces.',
      },
      {
        year: '2024',
        title: 'Backend & business-oriented systems',
        desc: 'Started building more advanced backend systems with Node.js and .NET, including authentication, role management, access control and structured relational databases.',
      },
      {
        year: '2023',
        title: 'Software engineering foundations',
        desc: 'Started my Software Engineering journey learning programming fundamentals, data structures and object-oriented programming with Java, Python and C#.',
      },
    ],

    workTitle:    'Selected work',
    projects:     'projects',
    skillsTitle:  'Tech stack',
    technologies: 'technologies',
    termTitle:    'Terminal',
    termSub:      'Type a command',
    contactLabel: 'Contact',
    contactTitle: ['Got a project', 'in mind?'],
    contactBody:  "Available for collaborations, freelance projects and job opportunities. Let's talk.",
    nameLabel:   'Name',
    namePh:      'Your name',
    emailLabel:  'Email',
    emailPh:     'you@email.com',
    msgLabel:    'Message',
    msgPh:       'Tell me about your idea...',
    sendBtn:     'Send message',
    sentTitle:   'Message sent',
    sentBody:    "I'll get back to you as soon as possible.",
    sendAnother: 'Send another',
    termWelcome: "Pedro Romero's portfolio terminal.",
    termHelp:    'Type help to get started.',

    cmdHelp: [
      'Available commands:',
      '',
      '  about      Who I am',
      '  skills     Tech stack',
      '  projects   Selected projects',
      '  contact    Contact information',
      '  clear      Clear terminal',
    ],

    cmdAbout: [
      'Pedro Romero — Full-Stack Developer',
      'San José, Costa Rica',
      'Node.js · .NET · React · Flutter · MySQL',
      'Available for projects and collaborations.',
    ],

    cmdSkills: [
      'Tech stack:',
      '',
      '  JavaScript   ●●●  Advanced',
      '  MySQL        ●●●  Advanced',
      '  Git          ●●●  Advanced',
      '  React        ●●○  Intermediate',
      '  Node.js      ●●○  Intermediate',
      '  Express      ●●○  Intermediate',
      '  Postman      ●●○  Intermediate',
      '  Flutter      ●○○  Beginner',
      '  Dart         ●○○  Beginner',
      '  C# / .NET    ●○○  Beginner',
      '  Figma        ●○○  Beginner',
    ],

    cmdProjects: [
      'Selected projects:',
      '',
      '  01  Romero Café Legacy',
      '  02  Simulated Payment Gateway',
      '  03  TSE Identity Service',
      '  04  Cascading Geographic Selector',
    ],

    cmdContact: [
      'Contact:',
      '',
      '  GitHub    → github.com/P3dro543',
      '  LinkedIn  → linkedin.com/in/pedro',
      '  Email     → romeropedro07@outlook.com',
      '  Location  → San José, Costa Rica',
    ],

    cmdNotFound: 'zsh: command not found:',
  },

  es: {
    role:     'Desarrollador Full-Stack',
    location: 'San José, Costa Rica',
    headline: ['Diseño sistemas', 'que funcionan.'],
    bio:      [
      'Desarrollador web full-stack enfocado en construir ',
      'aplicaciones modernas, escalables y amigables',
      '. Me especializo en backend con Node.js y .NET, creando interfaces responsivas con React y Tailwind CSS.',
    ],
    cta1: 'Ver mi trabajo',
    cta2: 'Hablemos',

    stats: [
      { value: '3+',  label: 'Años de experiencia'  },
      { value: '12+', label: 'Proyectos terminados' },
      { value: '8+',  label: 'Tecnologías'          },
    ],

    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Skills',
      work: 'Trabajo',
      terminal: 'Terminal',
      contact: 'Contacto',
    },

    available:     'Disponible',
    aboutTitle:    'Sobre mí',
    profileLabel:  'Perfil',
    profileTitle:  'Desarrollador Full-Stack',
    profileBody:   'Desarrollador web full-stack enfocado en construir aplicaciones modernas, escalables y amigables. Me especializo en backend con Node.js y .NET, creando interfaces responsivas con React y Tailwind CSS.',

    currentLabel:  'Actualmente',
    currentTitle:  'E-commerce y sistemas de pago',
    currentBody:   'Desarrollando Romero Café Legacy: un e-commerce completo con gateway de pagos, geolocalización cascada y arquitectura transaccional con MySQL.',

    timelineLabel: 'Trayectoria',
    timeline: [
      {
        year: '2026 — Presente',
        title: 'Construcción de productos digitales reales',
        desc: 'Desarrollando plataformas e-commerce más ambiciosas como Romeo Legacy utilizando Flutter, Node.js y MySQL, enfocadas en escalabilidad, rendimiento y experiencia de usuario moderna.',
      },
      {
        year: '2025',
        title: 'Full-stack moderno y APIs escalables',
        desc: 'Especialización en desarrollo de REST APIs aplicando Clean Architecture, mientras expandía mis habilidades frontend con React y Tailwind CSS para crear interfaces rápidas y modernas.',
      },
      {
        year: '2024',
        title: 'Backend y sistemas empresariales',
        desc: 'Comencé a desarrollar sistemas backend más avanzados con Node.js y .NET, incorporando autenticación, gestión de roles, control de acceso y bases de datos relacionales estructuradas.',
      },
      {
        year: '2023',
        title: 'Fundamentos de ingeniería de software',
        desc: 'Inicié mi camino en Ingeniería en Sistemas aprendiendo fundamentos de programación, estructuras de datos y programación orientada a objetos utilizando Java, Python y C#.',
      },
    ],

    workTitle:    'Proyectos seleccionados',
    projects:     'proyectos',
    skillsTitle:  'Stack técnico',
    technologies: 'tecnologías',
    termTitle:    'Terminal',
    termSub:      'Escribe un comando',

    contactLabel: 'Contacto',
    contactTitle: ['¿Tienes un proyecto', 'en mente?'],
    contactBody:  'Disponible para colaboraciones, proyectos freelance y oportunidades laborales. Hablemos.',

    nameLabel:   'Nombre',
    namePh:      'Tu nombre',
    emailLabel:  'Email',
    emailPh:     'tu@email.com',
    msgLabel:    'Mensaje',
    msgPh:       'Cuéntame sobre tu idea...',
    sendBtn:     'Enviar mensaje',

    sentTitle:   'Mensaje enviado',
    sentBody:    'Te responderé lo antes posible.',
    sendAnother: 'Enviar otro',

    termWelcome: 'Terminal del portafolio de Pedro Romero.',
    termHelp:    'Escribe help para ver los comandos.',

    cmdHelp: [
      'Comandos disponibles:',
      '',
      '  about      Quién soy',
      '  skills     Stack técnico',
      '  projects   Proyectos destacados',
      '  contact    Información de contacto',
      '  clear      Limpiar terminal',
    ],

    cmdAbout: [
      'Pedro Romero — Desarrollador Full-Stack',
      'San José, Costa Rica',
      'Node.js · .NET · React · Flutter · MySQL',
      'Disponible para proyectos y colaboraciones.',
    ],

    cmdSkills: [
      'Stack técnico:',
      '',
      '  JavaScript   ●●●  Avanzado',
      '  MySQL        ●●●  Avanzado',
      '  Git          ●●●  Avanzado',
      '  React        ●●○  Intermedio',
      '  Node.js      ●●○  Intermedio',
      '  Express      ●●○  Intermedio',
      '  Postman      ●●○  Intermedio',
      '  Flutter      ●○○  Principiante',
      '  Dart         ●○○  Principiante',
      '  C# / .NET    ●○○  Principiante',
      '  Figma        ●○○  Principiante',
    ],

    cmdProjects: [
      'Proyectos seleccionados:',
      '',
      '  01  Romero Café Legacy',
      '  02  Gateway de pagos simulado',
      '  03  Servicio de identidad TSE',
      '  04  Selector geográfico cascada',
    ],

    cmdContact: [
      'Contacto:',
      '',
      '  GitHub    → github.com/P3dro543',
      '  LinkedIn  → linkedin.com/in/pedro',
      '  Email     → romeropedro07@outlook.com',
      '  Ubicación → San José, Costa Rica',
    ],

    cmdNotFound: 'zsh: comando no encontrado:',
  },
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')

  function toggleLang() {
    setLang(l => l === 'en' ? 'es' : 'en')
  }

  const tr = translations[lang]

  return (
    <LangContext.Provider value={{ lang, toggleLang, tr }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}