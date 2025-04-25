import githubIcon from "../../../assets/icons/devIcons/github.svg";
import gmailIcon from "../../../assets/icons/gmail.png";
import whatsAppIcon from "../../../assets/icons/whatsapp.svg";
import linkedinIcon from "../../../assets/icons/linkedin.svg";
import { dataReturn, knowledgeEnum, LanguageEnum, TechnologyEnum } from "../../enum";
import { DataCalculator } from "../../Functions";
import getIconByTechnology from "../../IconExporter";
import humanizeiAttendantPage from "../../images/projects/humanizei/atendantPage.png";
import humanizeiCall from "../../images/projects/humanizei/call.png";
import humanizeiFeedBack from "../../images/projects/humanizei/feedback.png";
import humanizeiHome from "../../images/projects/humanizei/home.png";
import humanizeiClientVision from "../../images/projects/humanizei/humanizeiClientVision.png";
import humanizeiTickets from "../../images/projects/humanizei/tickets.png";

import formularioHome from "../../images/projects/formulario/home.png";
import formularioAnswer from "../../images/projects/formulario/answer.png";


import automacaoHome from "../../images/projects/automacao/home.png";
import automacaoFormulario from "../../images/projects/automacao/formulario.png";

import superFlixHome from "../../images/projects/superflix/home.png";
import superFlixFavorites from "../../images/projects/superflix/favorites.png";
import superFlixDescription from "../../images/projects/superflix/description.png";


import portfolioHome from "../../images/projects/portfolio/home.png";
import portfolioContactMe from "../../images/projects/portfolio/contactMe.png";
import portfolioAboutMe from "../../images/projects/portfolio/aboutme.png";
import portfolioSkills from "../../images/projects/portfolio/skills.png";
import portfolioProjects from "../../images/projects/portfolio/projects.png";

import { DictionaryType } from "../dictionary";

const en: DictionaryType = {
    language: {
        pt: "Portuguse",
        en: "English",
    },
    workingPosition: "Full Stack Developer",
    sistemTexts: [
        "Tecnologies",
        "Accesses",
        "Explaining Some Features",
    ],
    section: [
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
        description: "Feel free to contact me!",
        links: [
            { icon: linkedinIcon, title: 'Linkedin', text: "Leonardo Tomio", link: 'https://www.linkedin.com/in/leonardo-tomio-9342a91aa/' },
            { icon: gmailIcon, title: 'Email', text: "leo__tomio@hotmail.com", link: 'mailto:leo__tomio@hotmail.com' },
            { icon: whatsAppIcon, title: 'WhatsApp', text: "(47) 98449 3179", link: 'https://api.whatsapp.com/send?phone=5547984493179&text=Hello,%20I%20came%20through%20your%20portfolio' },
            { icon: githubIcon, title: 'Github', text: "LeoTomio", link: 'https://github.com/LeoTomio' }
        ],
        curriculumButton: 'Curriculum',
        curriculumText: "Do you want to see my curriculum?"
    },
    projects: [
        {
            id: 'portfolio',
            title: 'Portfolio',
            image: portfolioHome,
            technologies: [
                { name: "Bootstrap", icon: getIconByTechnology(TechnologyEnum.Bootstrap) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
                { name: "HTML", icon: getIconByTechnology(TechnologyEnum.HTML5) },
                { name: "CSS", icon: getIconByTechnology(TechnologyEnum.CSS) },
                { name: "Javascript", icon: getIconByTechnology(TechnologyEnum.JavaScript) },
                { name: "React", icon: getIconByTechnology(TechnologyEnum.React) },
                { name: "Sass", icon: getIconByTechnology(TechnologyEnum.Sass) },
                { name: "Typescript", icon: getIconByTechnology(TechnologyEnum.TypeScript) },
            ],
            shortDescription: 'Personal portfolio where I showcase my projects and skills.',
            detailed: {
                mainDescription: `Personal portfolio where I showcase my projects and skills. The portfolio is divided into 4 sections: About Me, Skills, Contact, and Projects.`,
                description: [
                    { image: portfolioAboutMe, paragraph: "In the About Me section, I briefly describe myself and highlight some relevant information." },
                    { image: portfolioSkills, paragraph: "In the Skills section, you can see the level of knowledge I have in each technology." },
                    { image: portfolioContactMe, paragraph: "In the Contact section, you'll find the ways to get in touch with me." },
                    { image: portfolioProjects, paragraph: "In the Projects section, I present some of the projects I've developed. If you want to see more details, just click on the 'Details' button." },
                ],
                github: [
                    { buttonName: "Website", isPrivate: false, link: "https://leonardotomio-portfolio.vercel.app/" },
                    { buttonName: "Github", isPrivate: true, link: "https://github.com/LeoTomio/portfolio" },
                ]
            }
        },
        {
            id: 'projectDelivery',
            title: 'Delivery Project',
            image: null,
            technologies: [
                { name: "Next.js", icon: getIconByTechnology(TechnologyEnum.NextJS) },
                { name: "Axios", icon: getIconByTechnology(TechnologyEnum.Axios) },
                { name: "Bootstrap", icon: getIconByTechnology(TechnologyEnum.Bootstrap) },
                { name: "Express", icon: getIconByTechnology(TechnologyEnum.Express) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
                { name: "HTML", icon: getIconByTechnology(TechnologyEnum.HTML5) },
                { name: "CSS", icon: getIconByTechnology(TechnologyEnum.CSS) },
                { name: "Javascript", icon: getIconByTechnology(TechnologyEnum.JavaScript) },
                { name: "Node.js", icon: getIconByTechnology(TechnologyEnum.NodeJS) },
                { name: "PostgreSQL", icon: getIconByTechnology(TechnologyEnum.PostgreSQL) },
                { name: "Prisma", icon: getIconByTechnology(TechnologyEnum.Prisma) },
                { name: "React", icon: getIconByTechnology(TechnologyEnum.React) },
                { name: "Sass", icon: getIconByTechnology(TechnologyEnum.Sass) },
                { name: "Socket.IO", icon: getIconByTechnology(TechnologyEnum.SocketIO) },
                { name: "Typescript", icon: getIconByTechnology(TechnologyEnum.TypeScript) },
                { name: "Zod", icon: getIconByTechnology(TechnologyEnum.Zod) },
            ],
            underDevelopment: 'IN DEVELOPMENT',
            shortDescription: 'Delivery management system.',
            detailed: {
                mainDescription: `System focused on delivery management. Divided into two parts: the user part, where it is possible to choose products and their extras, add to cart, apply a coupon, fill in delivery and payment information, and place the order, which is sent through the system and via WhatsApp. 
                The restaurant part includes the entire management area, where it is possible to add products and extras, categories, coupons, edit account information, manage orders and view graphical statistics.
                `,
                description: [
                    { image: null, paragraph: "More information about the project coming soon." },
                ],
                github: [
                    { buttonName: "Site", isPrivate: false, link: "https://pizzaria-homolog.vercel.app/" },
                    { buttonName: "Github", isPrivate: true, link: "" },
                ]
            }
        },        
        {
            id: 'humanizei',
            title: 'Humanizei',
            image: humanizeiHome,
            technologies: [
                { name: "Axios", icon: getIconByTechnology(TechnologyEnum.Axios) },
                { name: "Bootstrap", icon: getIconByTechnology(TechnologyEnum.Bootstrap) },
                { name: "Express", icon: getIconByTechnology(TechnologyEnum.Express) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
                { name: "HTML", icon: getIconByTechnology(TechnologyEnum.HTML5) },
                { name: "CSS", icon: getIconByTechnology(TechnologyEnum.CSS) },
                { name: "Javascript", icon: getIconByTechnology(TechnologyEnum.JavaScript) },
                { name: "Node.js", icon: getIconByTechnology(TechnologyEnum.NodeJS) },
                { name: "PostgreSQL", icon: getIconByTechnology(TechnologyEnum.PostgreSQL) },
                { name: "Prisma", icon: getIconByTechnology(TechnologyEnum.Prisma) },
                { name: "React", icon: getIconByTechnology(TechnologyEnum.React) },
                { name: "Sass", icon: getIconByTechnology(TechnologyEnum.Sass) },
                { name: "Socket.IO", icon: getIconByTechnology(TechnologyEnum.SocketIO) },
                { name: "Typescript", icon: getIconByTechnology(TechnologyEnum.TypeScript) }
            ],
            shortDescription: 'Humanized support system for e-commerce.',
            detailed: {
                mainDescription: "Humanizei is a customer service startup for e-commerce and digital businesses, offering real-time support. It combines advanced technology and AI with human skills to turn interactions into sales opportunities, aiming to increase average ticket and customer satisfaction. Its differential lies in the focus on transforming each interaction into a sale, combining technology and human touch for a more effective and complete experience.",
                description: [
                    { image: humanizeiAttendantPage, paragraph: "This is the attendant's view. On the STATUS screen, they can set their status as ONLINE or OFFLINE for each company they work for. The same agent can serve multiple companies simultaneously, facilitating multi-service." },
                    { image: humanizeiTickets, paragraph: "In the 'My Tickets' menu, all handled interactions are listed. The attendant can view details of each service, including customer and agent ratings, exchanged messages, and an AI-generated transcription of the call." },
                    { image: humanizeiHome, paragraph: "A Humanizei script is embedded on the client's website, through which the customer can initiate a call with the agent." },
                    { image: humanizeiClientVision, paragraph: "This is the customer view. They can choose to request support via messages or voice call." },
                    { image: humanizeiCall, paragraph: "After the request is accepted, the customer is redirected to the call page — the core of the system. In both message and video modes, all features are available: screen sharing, mute, hide chat, and enable webcam." },
                    { image: humanizeiFeedBack, paragraph: "At the end of the call, both customer and agent can rate the quality of the service." }
                ],
                github: [
                    { buttonName: "Site", isPrivate: false, main: true, link: "https://humanizei.digital/" },
                    { buttonName: "Front end", isPrivate: true, link: "" },
                    { buttonName: "Back end", isPrivate: true, link: "" }
                ]
            }
        },
        {
            id: 'superFlix',
            title: 'SuperFlix',
            image: superFlixHome,
            technologies: [
                { name: "CSS", icon: getIconByTechnology(TechnologyEnum.CSS) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
                { name: "HTML", icon: getIconByTechnology(TechnologyEnum.HTML5) },
                { name: "Javascript", icon: getIconByTechnology(TechnologyEnum.JavaScript) },
                { name: "React", icon: getIconByTechnology(TechnologyEnum.React) },
            ],
            shortDescription: 'Movie listing website.',
            detailed: {
                mainDescription: "Website for listing movies, with the option to save movies to a favorites list.",
                description: [
                    { image: superFlixHome, paragraph: "Home screen displaying 20 movies per page." },
                    { image: superFlixDescription, paragraph: "Clicking 'Access' redirects to the movie's details page with information, trailer link, and favorite option." },
                    { image: superFlixFavorites, paragraph: "Favorited movies are saved in a list." }
                ],
                github: [
                    { buttonName: "Site", isPrivate: false, link: "https://leonardotomio-superflix.vercel.app/" },
                    { buttonName: "Front", isPrivate: false, link: "https://github.com/LeoTomio/SuperFlix" },
                ]
            }
        },
        {
            id: 'form',
            title: 'Form',
            image: formularioHome,
            technologies: [
                { name: "CSS", icon: getIconByTechnology(TechnologyEnum.CSS) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
                { name: "HTML", icon: getIconByTechnology(TechnologyEnum.HTML5) },
                { name: "Javascript", icon: getIconByTechnology(TechnologyEnum.JavaScript) },
            ],
            shortDescription: 'Multiple choice questionnaire.',
            detailed: {
                mainDescription: "A simple 10-question multiple choice quiz, with only one correct answer per question. Built as part of Rockseat’s Next Level Week (NLW).",
                description: [
                    { image: formularioHome, paragraph: "A list of 10 JavaScript questions, each with one correct answer." },
                    { image: formularioAnswer, paragraph: "As questions are answered, incorrect choices are shown in red, correct ones in green. Score is shown at the top of the screen." },
                ],
                github: [
                    { buttonName: "Site", isPrivate: false, main: true, link: "https://leonardotomio-formulario.vercel.app/" },
                    { buttonName: "Front end", isPrivate: false, link: "https://github.com/LeoTomio/NLW-Html-Css-Js" },
                ]
            }
        },
        {
            id: 'formAutomation',
            title: 'Form Automation',
            image: automacaoHome,
            technologies: [
                { name: "Python", icon: getIconByTechnology(TechnologyEnum.Python) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
            ],
            shortDescription: 'Form auto-filling automation.',
            detailed: {
                mainDescription: "Automation for filling out forms using a CSV file, developed in Python.",
                description: [
                    { image: automacaoHome, paragraph: "When executed, the browser opens, logs into the site, navigates through the system, and begins filling out the form." },
                    { image: automacaoFormulario, paragraph: "The inserted data comes from a CSV file." },
                ],
                github: [
                    { buttonName: "Github", isPrivate: false, link: "https://github.com/LeoTomio/automacaoFormularioPython" },
                ]
            }
        },
        {
            id: 'sagep',
            title: 'Prison Management Support System (SAGEP)',
            image: null,
            technologies: [
                { name: "Axios", icon: getIconByTechnology(TechnologyEnum.Axios) },
                { name: "Bootstrap", icon: getIconByTechnology(TechnologyEnum.Bootstrap) },
                { name: "Express", icon: getIconByTechnology(TechnologyEnum.Express) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
                { name: "HTML", icon: getIconByTechnology(TechnologyEnum.HTML5) },
                { name: "CSS", icon: getIconByTechnology(TechnologyEnum.CSS) },
                { name: "Javascript", icon: getIconByTechnology(TechnologyEnum.JavaScript) },
                { name: "Node.js", icon: getIconByTechnology(TechnologyEnum.NodeJS) },
                { name: "PostgreSQL", icon: getIconByTechnology(TechnologyEnum.PostgreSQL) },
                { name: "Knex", icon: getIconByTechnology(TechnologyEnum.Knex) },
                { name: "React", icon: getIconByTechnology(TechnologyEnum.React) },
                { name: "Sass", icon: getIconByTechnology(TechnologyEnum.Sass) },
                { name: "Typescript", icon: getIconByTechnology(TechnologyEnum.TypeScript) },
            ],
            shortDescription: 'Prison Management System.',
            detailed: {
                mainDescription: `SAGEP is an ERP system for prison management, offering control of inmate funds, labor activities, financial movements — both for inmates and prison units —, as well as visitor management, incidents, health, education, and other essential areas.
    This is a private company system, developed over 2 years by me and two other developers during my first job.`,
                description: [
                    { image: null, paragraph: "As it's a private system, I cannot share further details or images." },
                ],
                github: []
            }
        }
    ]
}
export default en