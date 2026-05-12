import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      brand: "Mariantonieta Chacon",
      meta: {
        home: {
          title: "Inicio | Mariantonieta Chacon",
          description:
            "Portfolio de Mariantonieta Chacon, desarrolladora Full Stack especializada en Java, Spring Boot, Angular y React.",
        },
        portfolio: {
          title: "Portfolio | Mariantonieta Chacon",
          description:
            "Selección de proyectos de frontend y full stack, incluyendo una plataforma de gestión para fisioterapia en desarrollo.",
        },
        contact: {
          title: "Contacto | Mariantonieta Chacon",
          description:
            "Ponte en contacto con Mariantonieta Chacon para colaborar en proyectos web enterprise y full stack.",
        },
      },
      nav: {
        home: "Inicio",
        portfolio: "Portfolio",
        contact: "Contacto",
        theme: "Cambiar tema",
        language: "Cambiar idioma",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      common: {
        viewCv: "Ver CV",
        contactMe: "Contáctame",
        repository: "Ver repositorio",
        visitSite: "Visitar web",
        liveProject: "Proyecto online",
        viewAllProjects: "Ver portfolio completo",
        askDemo: "Pedir demo",
        inProgress: "En desarrollo",
        privateBuild: "Proyecto privado",
        availableFor: "Disponible para proyectos con impacto real",
      },
      home: {
        hero: {
          eyebrow:
            "Madrid · Aplicaciones enterprise · IA aplicada al desarrollo",
          title: "Desarrolladora Full Stack",
          subtitle: "Java · Spring Boot · Angular · React",
          description:
            "Desarrollo productos web robustos para entornos enterprise, con foco en arquitectura mantenible, integraciones complejas y una experiencia de usuario clara.",
          stats: [
            { value: "2+ años", label: "Experiencia real en empresa" },
            { value: "Madrid", label: "Base actual y trabajo híbrido/remoto" },
          ],
          floatingCards: [
            "Java + Spring Boot",
            "Angular + React",
            "DB2/AS400 + PostgreSQL",
          ],
        },
        about: {
          title: "Sobre mí",
          text: "Desarrolladora Full Stack con experiencia en aplicaciones web enterprise. He trabajado en proyectos reales para grandes editoriales españolas usando Java/Spring Boot, Angular y bases de datos DB2/AS400. Me apasiona construir soluciones robustas y mantenibles, y uso herramientas de IA para acelerar el desarrollo sin sacrificar calidad.",
        },
        skills: {
          title: "Stack técnico",
          intro:
            "Tecnologías con las que trabajo a diario o que forman parte de mi stack habitual en proyectos reales.",
          categories: {
            backend: "Backend",
            frontend: "Frontend",
            databases: "Bases de datos",
            devops: "DevOps",
            testing: "Testing",
            ai: "Herramientas IA",
          },
        },
        experience: {
          title: "Experiencia",
          intro:
            "Mi recorrido reciente combina desarrollo full stack, proyectos enterprise y una capa fuerte de integración con sistemas y herramientas de entrega.",
          items: [
            {
              company: "VAILOS",
              role: "Desarrolladora Full Stack",
              period: "11/2023 - 04/2026",
              location: "Madrid",
              summary: "Proyectos enterprise dentro del ecosistema editorial.",
              bullets: [
                "Backend en Java/Spring Boot y frontend Angular para aplicaciones internas de gestión.",
                "Integración con DB2/AS400, JPA/Hibernate y APIs REST.",
                "Desarrollo de flujos de contratos, compras y operativa editorial.",
              ],
            },
            {
              company: "Industries Tech",
              role: "Desarrolladora Full Stack",
              period: "10/2023 - 08/2025",
              location: "Porto · Remoto",
              summary:
                "Entorno full stack con foco en frontend moderno y servicios backend.",
              bullets: [
                "Frontend con React y TypeScript; backend con Java Spring Boot y Python.",
                "Trabajo con PostgreSQL, MySQL, Docker y pipelines CI/CD con Jenkins.",
                "Testing automatizado con JUnit 5 y Jest.",
              ],
            },
            {
              company: "Panel Sistemas",
              role: "Becaria DevOps",
              period: "03/2025 - 06/2025",
              location: "Madrid",
              summary:
                "Soporte a entorno técnico con herramientas de observabilidad y calidad.",
              bullets: [
                "Trabajo en entornos Linux y contenedores con Docker.",
                "Uso de Elasticsearch y Kibana para monitorización y análisis.",
                "Apoyo en procesos de calidad con SonarQube.",
              ],
            },
          ],
        },
        portfolio: {
          title: "Proyectos",
          intro:
            "Aquí conviven proyectos personales, ejercicios prácticos y una nueva pieza orientada a producto real para reflejar mejor mi perfil actual.",
          previewAction: "Ver todos los proyectos",
        },
        cta: {
          title:
            "¿Buscas una desarrolladora capaz de moverse entre backend, frontend y datos?",
          description:
            "Puedo aportar experiencia real en aplicaciones enterprise y una forma de trabajo enfocada en calidad, mantenibilidad y entrega continua.",
          action: "Hablemos",
        },
      },
      portfolioPage: {
        eyebrow: "Selección de trabajos",
        title: "Mis proyectos desde que comence a programar hasta hoy",
        description:
          "Una mezcla entre práctica continua, frontend interactivo y proyectos que muestran cómo estoy evolucionando hacia producto y entorno enterprise.",
      },
      projects: {
        featured: {
          title: "Plataforma web — Fisioterapia Paulina Rodríguez",
          description:
            "Web freelance para clínica de fisioterapia con sistema de agenda en tiempo real, gestión de pacientes y citas.",
          detail:
            "Construida con Vite, React 19, TypeScript, Tailwind y Supabase, con foco en experiencia clara para clínica, operativa diaria y gestión centralizada.",
        },
        items: {
          fisioterapia: {
            title: "Fisioterapia Paulina Rodríguez",
            description:
              "Web freelance para clínica de fisioterapia con agenda en tiempo real, gestión de pacientes y citas.",
          },
          osto: {
            title: "OSTO",
            description:
              "Proyecto desplegado en Vercel con acceso directo a su flujo de login.",
          },
          game: {
            title: "Rock Paper Scissors",
            description:
              "Juego interactivo para practicar estados, eventos y feedback visual en frontend.",
          },
          login: {
            title: "Login & Register",
            description:
              "Interfaz de autenticación con formularios y validaciones orientadas a UX.",
          },
          budget: {
            title: "Budget App",
            description:
              "Aplicación para gestión de presupuesto personal con enfoque visual y control de gastos.",
          },
          quiz: {
            title: "Quiz App",
            description:
              "Experiencia de preguntas y respuestas para trabajar lógica de estado y navegación.",
          },
          notes: {
            title: "Notes App",
            description:
              "Proyecto CRUD ligero para organizar notas y practicar persistencia de datos.",
          },
          weather: {
            title: "Weather App",
            description:
              "Consulta del clima con consumo de APIs externas y renderizado dinámico.",
          },
          calculator: {
            title: "Calculator",
            description:
              "Calculadora web para reforzar eventos, operaciones y composición de interfaz.",
          },
        },
      },
      contactPage: {
        eyebrow: "Contacto",
        title: "Hablemos de tu próximo proyecto",
        description:
          "Si necesitas apoyo en frontend, backend o una solución full stack completa, estaré encantada de conocer el contexto y ver cómo puedo ayudar.",
        cardTitle: "Disponibilidad",
        availability: "Madrid · remoto / híbrido",
        response: "Respuesta habitual en 24-48h",
        formTitle: "Envíame un mensaje",
        formDescription:
          "Cuéntame el tipo de proyecto, el stack y el objetivo. Responderé lo antes posible.",
        fields: {
          name: "Nombre completo",
          email: "Email",
          message: "Mensaje",
          consent: "Acepto que uses estos datos para responder a mi consulta.",
          submit: "Enviar mensaje",
        },
        placeholders: {
          name: "Tu nombre",
          email: "tu@email.com",
          message:
            "Cuéntame el contexto del proyecto, qué necesitas y en qué stack estáis trabajando.",
        },
        success:
          "Gracias por tu mensaje. El formulario se ha enviado correctamente.",
        socialTitle: "También puedes encontrarme en",
      },
      footer: {
        backToTop: "Volver arriba",
        copyright:
          "© {{year}} Mariantonieta Chacon. Desarrolladora Full Stack.",
      },
    },
  },
  en: {
    translation: {
      brand: "Mariantonieta Chacon",
      meta: {
        home: {
          title: "Home | Mariantonieta Chacon",
          description:
            "Mariantonieta Chacon's portfolio, a Full Stack developer specialized in Java, Spring Boot, Angular, and React.",
        },
        portfolio: {
          title: "Portfolio | Mariantonieta Chacon",
          description:
            "Selected frontend and full stack projects, including an in-progress physiotherapy management platform.",
        },
        contact: {
          title: "Contact | Mariantonieta Chacon",
          description:
            "Get in touch with Mariantonieta Chacon to collaborate on enterprise and full stack web projects.",
        },
      },
      nav: {
        home: "Home",
        portfolio: "Portfolio",
        contact: "Contact",
        theme: "Toggle theme",
        language: "Change language",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      common: {
        viewCv: "View CV",
        contactMe: "Contact me",
        repository: "View repository",
        visitSite: "Visit site",
        liveProject: "Live project",
        viewAllProjects: "View full portfolio",
        askDemo: "Ask for demo",
        inProgress: "In progress",
        privateBuild: "Private build",
        availableFor: "Available for real-world product work",
      },
      home: {
        hero: {
          eyebrow: "Madrid · Enterprise applications · AI-assisted development",
          title: "Full Stack Developer",
          subtitle: "Java · Spring Boot · Angular · React",
          description:
            "I build robust web products for enterprise environments, with a focus on maintainable architecture, complex integrations, and clear user experience.",
          stats: [
            { value: "2+ years", label: "Hands-on company experience" },
            { value: "Madrid", label: "Current base and hybrid/remote setup" },
          ],
          floatingCards: [
            "Java + Spring Boot",
            "Angular + React",
            "DB2/AS400 + PostgreSQL",
          ],
        },
        about: {
          title: "About me",
          text: "Full Stack Developer with experience in enterprise web applications. I have worked on real projects for major Spanish publishing companies using Java/Spring Boot, Angular, and DB2/AS400 databases. I am passionate about building robust, maintainable solutions, and I use AI tools to speed up development without sacrificing quality.",
        },
        skills: {
          title: "Technical stack",
          intro:
            "Technologies I use daily or that are part of my regular stack in real-world projects.",
          categories: {
            backend: "Backend",
            frontend: "Frontend",
            databases: "Databases",
            devops: "DevOps",
            testing: "Testing",
            ai: "AI tools",
          },
        },
        experience: {
          title: "Experience",
          intro:
            "My recent path combines full stack development, enterprise projects, and a strong integration and delivery layer.",
          items: [
            {
              company: "VAILOS",
              role: "Full Stack Developer",
              period: "11/2023 - 04/2026",
              location: "Madrid",
              summary: "Enterprise projects within the publishing ecosystem.",
              bullets: [
                "Java/Spring Boot backend and Angular frontend for internal management applications.",
                "Integration with DB2/AS400, JPA/Hibernate, and REST APIs.",
                "Development of contract, purchasing, and editorial operation flows.",
              ],
            },
            {
              company: "Industries Tech",
              role: "Full Stack Developer",
              period: "10/2023 - 08/2025",
              location: "Porto · Remote",
              summary:
                "Full stack environment with a focus on modern frontend and backend services.",
              bullets: [
                "Frontend with React and TypeScript; backend with Java Spring Boot and Python.",
                "Work with PostgreSQL, MySQL, Docker, and Jenkins CI/CD pipelines.",
                "Automated testing with JUnit 5 and Jest.",
              ],
            },
            {
              company: "Panel Sistemas",
              role: "DevOps Intern",
              period: "03/2025 - 06/2025",
              location: "Madrid",
              summary:
                "Technical environment support with observability and quality tooling.",
              bullets: [
                "Work in Linux environments and Docker-based containers.",
                "Use of Elasticsearch and Kibana for monitoring and analysis.",
                "Support quality processes with SonarQube.",
              ],
            },
          ],
        },
        portfolio: {
          title: "Projects",
          intro:
            "This section combines personal builds, hands-on practice, and a new product-oriented piece that better reflects my current profile.",
          previewAction: "View all projects",
        },
        cta: {
          title:
            "Looking for a developer who can move confidently across backend, frontend, and data?",
          description:
            "I can bring real enterprise experience and a delivery mindset focused on quality, maintainability, and continuous improvement.",
          action: "Let's talk",
        },
      },
      portfolioPage: {
        eyebrow: "Selected work",
        title: "Updated portfolio",
        description:
          "A mix of continuous practice, interactive frontend work, and projects that show how I am growing toward product and enterprise environments.",
      },
      projects: {
        featured: {
          title: "Web platform — Fisioterapia Paulina Rodríguez",
          description:
            "Freelance website for a physiotherapy clinic with real-time scheduling plus patient and appointment management.",
          detail:
            "Built with Vite, React 19, TypeScript, Tailwind, and Supabase, focused on clear clinic workflows, day-to-day operations, and centralized management.",
        },
        items: {
          fisioterapia: {
            title: "Fisioterapia Paulina Rodríguez",
            description:
              "Freelance website for a physiotherapy clinic with real-time scheduling and patient management.",
          },
          osto: {
            title: "OSTO",
            description:
              "Project deployed on Vercel with direct access to its login flow.",
          },
          game: {
            title: "Rock Paper Scissors",
            description:
              "Interactive game to practice state handling, events, and visual feedback in the frontend.",
          },
          login: {
            title: "Login & Register",
            description:
              "Authentication interface with form handling and UX-oriented validations.",
          },
          budget: {
            title: "Budget App",
            description:
              "Personal budget management app with a visual approach to expense control.",
          },
          quiz: {
            title: "Quiz App",
            description:
              "Quiz experience used to work on state logic and step-based navigation.",
          },
          notes: {
            title: "Notes App",
            description:
              "Lightweight CRUD project to organize notes and practice data persistence.",
          },
          weather: {
            title: "Weather App",
            description:
              "Weather lookup app using external APIs and dynamic rendering.",
          },
          calculator: {
            title: "Calculator",
            description:
              "Web calculator built to reinforce events, operations, and interface composition.",
          },
        },
      },
      contactPage: {
        eyebrow: "Contact",
        title: "Let's talk about your next project",
        description:
          "If you need support on frontend, backend, or a complete full stack solution, I would be happy to learn about the context and see how I can help.",
        cardTitle: "Availability",
        availability: "Madrid · remote / hybrid",
        response: "Typical reply time: 24-48h",
        formTitle: "Send me a message",
        formDescription:
          "Tell me about the project type, the stack, and the goal. I will reply as soon as possible.",
        fields: {
          name: "Full name",
          email: "Email",
          message: "Message",
          consent: "I agree that you may use this data to reply to my inquiry.",
          submit: "Send message",
        },
        placeholders: {
          name: "Your name",
          email: "your@email.com",
          message:
            "Tell me about the project context, what you need, and which stack you are working with.",
        },
        success:
          "Thanks for your message. The form has been submitted successfully.",
        socialTitle: "You can also find me on",
      },
      footer: {
        backToTop: "Back to top",
        copyright: "© {{year}} Mariantonieta Chacon. Full Stack Developer.",
      },
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "es",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
