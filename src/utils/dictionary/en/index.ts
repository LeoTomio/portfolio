import githubIcon from "../../../assets/icons/devIcons/github.svg";
import gmailIcon from "../../../assets/icons/gmail.png";
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

import superFlixHome from "../../images/projects/superflix/home.png";
import superFlixFavorites from "../../images/projects/superflix/favorites.png";
import superFlixDescription from "../../images/projects/superflix/description.png";
import { DictionaryType } from "../dictionary";

const en: DictionaryType = {
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
            { icon: gmailIcon, title: 'Email', text: "leo__tomio@hotmail.com", link: 'leo__tomio@hotmail.com' },
            { icon: githubIcon, title: 'Github', text: "LeoTomio", link: 'https://github.com/LeoTomio' }
        ],
        curriculumButton: 'Curriculum',
        curriculumText: "Do you want to see my curriculum?"
    },
    projects: [
        {
            id: 1,
            title: 'Humanizei',
            image: humanizeiHome,
            technologies: [
                { name: "Axios", icon: getIconByTechnology(TechnologyEnum.Axios) },
                { name: "Bootstrap", icon: getIconByTechnology(TechnologyEnum.Bootstrap) },
                { name: "CSS", icon: getIconByTechnology(TechnologyEnum.CSS) },
                { name: "Express", icon: getIconByTechnology(TechnologyEnum.Express) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
                { name: "HTML", icon: getIconByTechnology(TechnologyEnum.HTML5) },
                { name: "Javascript", icon: getIconByTechnology(TechnologyEnum.JavaScript) },
                { name: "Node.js", icon: getIconByTechnology(TechnologyEnum.NodeJS) },
                { name: "PostgreSQL", icon: getIconByTechnology(TechnologyEnum.PostgreSQL) },
                { name: "Prisma", icon: getIconByTechnology(TechnologyEnum.Prisma) },
                { name: "React", icon: getIconByTechnology(TechnologyEnum.React) },
                { name: "Sass", icon: getIconByTechnology(TechnologyEnum.Sass) },
                { name: "Socket.IO", icon: getIconByTechnology(TechnologyEnum.SocketIO) },
                { name: "Typescript", icon: getIconByTechnology(TechnologyEnum.TypeScript) }
            ],
            shortDescription: 'Humanized customer service system for E-commerce',
            detailed: {
                mainDescription: "Humanizei is a customer service startup for e-commerce and digital businesses that offers real-time support to customers. By combining advanced technology and artificial intelligence with the skills of service agents, Humanizei transforms interactions into sales opportunities, aiming to increase average order value and customer satisfaction. Its differentiator is its focus on turning every interaction into a sale and on personalizing service by combining technology with the human touch, providing a more efficient and complete experience.",
                description: [
                    { image: humanizeiAttendantPage, paragraph: "This is the attendant's view. On the STATUS screen, they can set their status as ONLINE or OFFLINE for each company that hired them. The same attendant can serve multiple companies simultaneously, enabling multi-tasking." },
                    { image: humanizeiTickets, paragraph: "In the My Service menu, a list of completed services is shown. The attendant can view each service in detail, including the evaluation of both the customer and the attendant, the messages exchanged during the conversation, and an AI-generated transcript of the call." },
                    { image: humanizeiHome, paragraph: "A Humanizei script is inserted into the client's website, and it is through this script that the customer can start a call with the attendant." },
                    { image: humanizeiClientVision, paragraph: "This is the customer's view. They have the option to request assistance via messages or calls." },
                    { image: humanizeiCall, paragraph: "After the request is accepted by the attendant, the customer is redirected to the call page, which is the heart of the system. In both message and video services, the user has access to all features, such as screen sharing, muting, hiding the chat, and activating the webcam." },
                    { image: humanizeiFeedBack, paragraph: "After the call ends, both the user and the attendant can rate the quality of the service." }
                ],
                github: [
                    { buttonName: "System", isPrivate: false, main: true, link: "https://humanizei.digital/" },
                    { buttonName: "Front end", isPrivate: true, link: "" },
                    { buttonName: "Back end", isPrivate: true, link: "" }
                ]
            }
        },
        {
            id: 2,
            title: 'Form',
            image: formularioHome,
            technologies: [
                { name: "CSS", icon: getIconByTechnology(TechnologyEnum.CSS) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
                { name: "HTML", icon: getIconByTechnology(TechnologyEnum.HTML5) },
                { name: "Javascript", icon: getIconByTechnology(TechnologyEnum.JavaScript) },
            ],
            shortDescription: '10-question form',
            detailed: {
                mainDescription: "A simple 10-question multiple-choice form, where only one answer is correct. Created as a learning exercise through Rockseat's Next Level Week (NLW).",
                description: [
                    { image: formularioHome, paragraph: "A list of 10 questions about JavaScript, each with only one correct answer." },
                    { image: formularioAnswer, paragraph: "As you answer, incorrect choices are marked in red, and correct ones in green. The number of correct answers is displayed at the top of the screen." },
                ],
                github: [
                    { buttonName: "Site", isPrivate: false, main: true, link: "https://leonardotomio-formulario.vercel.app/" },
                    { buttonName: "Front end", isPrivate: false, link: "https://github.com/LeoTomio/NLW-Html-Css-Js" },
                ]
            }
        },
        {
            id: 3,
            title: 'Form Automation',
            image: formularioHome,
            technologies: [
                { name: "Python", icon: getIconByTechnology(TechnologyEnum.Python) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
            ],
            shortDescription: 'Form-filling automation',
            detailed: {
                mainDescription: "Automation to fill out forms using data from a CSV file, developed in Python.",
                description: [
                    { image: formularioHome, paragraph: "When run, a browser opens, navigates to the specified site, logs in, enters the system, and starts filling out the form." },
                    { image: formularioAnswer, paragraph: "The data being entered is sourced from a CSV file." },
                ],
                github: [
                    { buttonName: "Github", isPrivate: false, link: "" },
                ]
            }
        },
        {
            id: 4,
            title: 'SuperFlix',
            image: superFlixHome,
            technologies: [
                { name: "Python", icon: getIconByTechnology(TechnologyEnum.Python) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
            ],
            shortDescription: 'Movie listing website',
            detailed: {
                mainDescription: "A movie listing website where you can save movies to a favorites list.",
                description: [
                    { image: superFlixHome, paragraph: "Home page, featuring a list of 20 movies per page." },
                    { image: superFlixDescription, paragraph: "By clicking 'Access', you are redirected to the movie description page, where you can find details about the movie, the trailer link, and the option to save it to favorites." },
                    { image: superFlixFavorites, paragraph: "When favorited, the movie is saved to a list." }
                ],
                github: [
                    { buttonName: "Site", isPrivate: false, link: "https://leonardotomio-superflix.vercel.app/" },
                    { buttonName: "Front", isPrivate: false, link: "https://github.com/LeoTomio/SuperFlix" },
                ]
            }
        }
        

    ]

}



export default en
