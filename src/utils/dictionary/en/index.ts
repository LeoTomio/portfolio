import { dataReturn, knowledgeEnum, LanguageEnum, TechnologyEnum } from "../../enum";
import { DataCalculator } from "../../Functions";
import getIconByTechnology from "../../IconExporter";
import { DictionaryType } from "../dictionary";
import gmailIcon from "../../../assets/icons/gmail.png"
import linkedinIcon from "../../../assets/icons/linkedin.svg"
import githubIcon from "../../../assets/icons/devIcons/github.svg"
import humanizeiHome from "../../images/projects/humanizei/home.png"
import attendantPage from "../../images/projects/humanizei/atendantPage.png"
import call from "../../images/projects/humanizei/call.png"

const en: DictionaryType = {
    workingPosition: "Full Stack Developer",
    changeLanguage: "Change language to PT-br",
    titles: [
        { href: "#sobre", title: 'About me' },
        { href: "#habilidades", title: 'Skills' },
        { href: "#contato", title: 'Contact' },
        { href: "#projetos", title: 'Projects' },
    ],
    about: {
        firstP: `My name is Leonardo Tomio, I'm ${DataCalculator({ year: 2000, month: 2, day: 15, fullReturn: dataReturn.year, language: LanguageEnum.en })} old, and I've always been a great admirer of technology`,
        secondP: "I began my career as a developer in March 2021, and since then, I have been honing my skills and expanding my knowledge. I'm always looking for new challenges and learning opportunities in the world of technology",
        itens: [
            `Web developer with ${DataCalculator({ year: 2021, month: 2, day: 15, fullReturn: dataReturn.full, language: LanguageEnum.en })} of experience`,
            "Pursuing a degree in Systems Analysis and Development",
            "Interested in both Front- end and Back-end",
            "Focused on JavaScript",
        ]
    },
    skills: [
        {
            title: "Axios",
            description: "Simple HTTP client based on promises for the browser and for Node.js.",
            icon: getIconByTechnology(TechnologyEnum.Axios),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://axios-http.com/"
        },
        {
            title: "Bootstrap",
            description: "Framework for developing front-end components using HTML, CSS, and JS.",
            icon: getIconByTechnology(TechnologyEnum.Bootstrap),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://getbootstrap.com.br/"
        },
        {
            title: "CSS",
            description: "Styling tool for web pages, applied directly to HTML tags.",
            icon: getIconByTechnology(TechnologyEnum.CSS),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://www.w3schools.com/cssref/index.php"
        },
        {
            title: "Docker",
            description: "Platform for creating and distributing applications encapsulated in containers.",
            icon: getIconByTechnology(TechnologyEnum.Docker),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://www.docker.com/"
        },
        {
            title: "Express",
            description: "Framework for Node.js providing minimal features for building web servers.",
            icon: getIconByTechnology(TechnologyEnum.Express),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://expressjs.com/"
        },
        {
            title: "GitHub",
            description: "Source code hosting platform with version control using Git.",
            icon: getIconByTechnology(TechnologyEnum.GitHub),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://github.com/"
        },
        {
            title: "GitLab",
            description: "Source code hosting platform with version control using Git.",
            icon: getIconByTechnology(TechnologyEnum.GitLab),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://about.gitlab.com/"
        },
        {
            title: "HTML5",
            description: "Markup language used to build web pages.",
            icon: getIconByTechnology(TechnologyEnum.HTML5),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://www.w3schools.com/html/"
        },
        {
            title: "Insomnia",
            description: "Collaborative platform that facilitates creating high-quality APIs.",
            icon: getIconByTechnology(TechnologyEnum.Insomnia),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://insomnia.rest/"
        },
        {
            title: "JavaScript",
            description: "High-level, interpreted, event-driven programming language.",
            icon: getIconByTechnology(TechnologyEnum.JavaScript),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://www.w3schools.com/js/"
        },
        {
            title: "Knex.js",
            description: "Library for Node.js that simplifies query building and migrations.",
            icon: getIconByTechnology(TechnologyEnum.Knex),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://knexjs.org/"
        },
        {
            title: "Nest.js",
            description: "Node.js framework for building scalable and efficient applications.",
            icon: getIconByTechnology(TechnologyEnum.NestJS),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://nestjs.com/"
        },
        {
            title: "Next.js",
            description: "Framework with hybrid rendering, automatic routing, and performance optimization.",
            icon: getIconByTechnology(TechnologyEnum.NextJS),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://nextjs.org/"
        },
        {
            title: "Node.js",
            description: "Execution environment that allows running JavaScript outside the browser.",
            icon: getIconByTechnology(TechnologyEnum.NodeJS),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://nodejs.org/pt"
        },
        {
            title: "PostgreSQL",
            description: "Object-relational database management system.",
            icon: getIconByTechnology(TechnologyEnum.PostgreSQL),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://www.postgresql.org/"
        },
        {
            title: "Postman",
            description: "API platform for designing, building, testing, and collaborating on APIs.",
            icon: getIconByTechnology(TechnologyEnum.Postman),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://www.postman.com/"
        },
        {
            title: "Prisma.js",
            description: "ORM for Node.js and TypeScript that simplifies database access.",
            icon: getIconByTechnology(TechnologyEnum.Prisma),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://www.prisma.io/"
        },
        {
            title: "Python",
            description: "Programming language, object-oriented, functional, with dynamic and strong typing.",
            icon: getIconByTechnology(TechnologyEnum.Python),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://www.python.org/"
        },
        {
            title: "React",
            description: "JavaScript front-end library focused on creating user interfaces on web pages.",
            icon: getIconByTechnology(TechnologyEnum.React),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://reactnative.dev/"
        },
        {
            title: "React Native",
            description: "Framework for mobile development using JavaScript and React.",
            icon: getIconByTechnology(TechnologyEnum.React),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://react.dev/"
        },
        {
            title: "Redis",
            description: "In-memory, distributed key-value database, cache, and message broker.",
            icon: getIconByTechnology(TechnologyEnum.Redis),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://redis.io/"
        },
        {
            title: "Sass",
            description: "The most mature, stable, and powerful professional-grade CSS extension language.",
            icon: getIconByTechnology(TechnologyEnum.Sass),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://sass-lang.com/"
        },
        {
            title: "Socket.io",
            description: "Event-driven library for real-time web applications.",
            icon: getIconByTechnology(TechnologyEnum.SocketIO),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://socket.io/"
        },
        {
            title: "Swagger",
            description: "Tools that assist in the efficient creation and documentation of APIs.",
            icon: getIconByTechnology(TechnologyEnum.Swagger),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://swagger.io/"
        },
        {
            title: "Tailwind CSS",
            description: "CSS framework focused on utility classes.",
            icon: getIconByTechnology(TechnologyEnum.Tailwind),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://tailwindcss.com/"
        },
        {
            title: "TypeORM",
            description: "ORM for TypeScript/JavaScript using object models.",
            icon: getIconByTechnology(TechnologyEnum.TypeORM),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://typeorm.io/"
        },
        {
            title: "TypeScript",
            description: "JavaScript superset that adds static typing.",
            icon: getIconByTechnology(TechnologyEnum.TypeScript),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://www.typescriptlang.org/"
        }
    ],
    contact: {
        description: "Feel free to contact me! My informations are below",
        links: [
            { icon: linkedinIcon, title: 'Linkedin: ', text: "Leonardo Tomio", link: 'https://www.linkedin.com/in/leonardo-tomio-9342a91aa/' },
            { icon: gmailIcon, title: 'Email: ', text: "leo__tomio@hotmail.com", link: 'leo__tomio@hotmail.com' },
            { icon: githubIcon, title: 'Github: ', text: "LeoTomio", link: 'https://github.com/LeoTomio' }
        ],
        curriculumButton: 'Curriculum',
        curriculumText: "Do you want to see my curriculum?"
    },
    projects: [
        {
            id: 1,
            title: 'Humanizei',
            image: humanizeiHome,
            technologies: [TechnologyEnum.React, TechnologyEnum.NodeJS, TechnologyEnum.Bootstrap, TechnologyEnum.Prisma],
            shortDescription: 'Humanized service system for E-commerce'
        },
    ],
    detailedProject: [
        {
            id: 1,
            title: 'Humanizei',
            technologies: [TechnologyEnum.React, TechnologyEnum.NodeJS, TechnologyEnum.Bootstrap, TechnologyEnum.Prisma],
            mainDescription: "Humanizei is a customer support startup for e-commerce and digital businesses that offers real-time support to clients. Combining advanced technology and artificial intelligence with the skills of human agents, Humanizei turns interactions into sales opportunities, aiming to increase the average ticket size and customer satisfaction. Its differentiator lies in the focus on transforming each interaction into a sale and in personalizing the customer experience, blending technology with a human touch to provide a more effective and complete service.",
            description: [
                { image: attendantPage, paragraph: "Humanized service system for E-commerce" },
                { image: call, paragraph: "Humanized service system for E-commerce" },
            ],
            github: [
                // { buttonName: "Github", isPrivate: true },
                { buttonName: "Front", isPrivate: false, link: "https://www.op.gg/summoners/br/THORt%C3%A3op%C3%A1direita" },
                { buttonName: "Backend", isPrivate: false, link: "https://www.op.gg/summoners/br/THORt%C3%A3op%C3%A1direita" },
                { buttonName: "Mobile", isPrivate: false, link: "https://www.op.gg/summoners/br/THORt%C3%A3op%C3%A1direita" }
            ]
        }
    ]

}



export default en
