import { dataReturn, knowledgeEnum, LanguageEnum, TechnologyEnum } from "../../enum"
import { DataCalculator } from "../../Functions"
import getIconByTechnology from "../../IconExporter"
import { DictionaryType } from "../dictionary"
import gmailIcon from "../../../assets/icons/gmail.png"
import linkedinIcon from "../../../assets/icons/linkedin.svg"
import githubIcon from "../../../assets/icons/devIcons/github.svg"

const pt: DictionaryType = {
    workingPosition: "Desenvolvedor Full Stack",
    changeLanguage: "alterar idioma para EN",
    titles: [
        { href: "#sobre", title: 'Sobre mim' },
        { href: "#habilidades", title: 'Habilidades' },
        { href: "#contato", title: 'Contato' },
        { href: "#projetos", title: 'Projetos' },
    ],
    about: {
        firstP: `Me chamo Leonardo Tomio, tenho ${DataCalculator({ year: 2000, month: 2, day: 15, fullReturn: dataReturn.year, language: LanguageEnum.pt })} e sempre fui um grande apreciador de tecnologias.`,
        secondP: "Iniciei na carreira de desenvolvedor em março de 2021, desde então venho aprimorando minhas habilidades e conhecimentos. Estou sempre em busca de novos desafios e aprendizados no mundo da tecnologia",
        itens: [
            `Desenvolvedor web a ${DataCalculator({ year: 2021, month: 2, day: 15, fullReturn: dataReturn.full, language: LanguageEnum.pt })}`,
            "Cursando Análise e Desenvolvimento de Sistemas",
            "Interessado em Front-end e Back-end",
            "Foco em Javascrip"
        ]
    },
    skills: [
        {
            title: "Axios",
            description: "Cliente HTTP simples baseado em promessas para o navegador e para o node.js.",
            icon: getIconByTechnology(TechnologyEnum.Axios),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://axios-http.com/"
        },
        {
            title: "Bootstrap",
            description: "Framework para desenvolvimento de componentes front-end usando HTML, CSS e JS.",
            icon: getIconByTechnology(TechnologyEnum.Bootstrap),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://getbootstrap.com.br/"
        },
        {
            title: "CSS",
            description: "Ferramenta de estilização para páginas web, é aplicado diretamente nas tags HTML.",
            icon: getIconByTechnology(TechnologyEnum.CSS),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://www.w3schools.com/cssref/index.php"
        },
        {
            title: "Docker",
            description: "Plataforma para criar e distribuir aplicações encapsuladas em contêineres.",
            icon: getIconByTechnology(TechnologyEnum.Docker),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://www.docker.com/"
        },
        {
            title: "Express",
            description: "Framework para Node.js que fornece recursos mínimos para construção de servidores web.",
            icon: getIconByTechnology(TechnologyEnum.Express),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://expressjs.com/"
        },
        {
            title: "GitHub",
            description: "Plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.",
            icon: getIconByTechnology(TechnologyEnum.GitHub),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://expressjs.com/"
        },
        {
            title: "GitLab",
            description: "Plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.",
            icon: getIconByTechnology(TechnologyEnum.GitLab),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://about.gitlab.com/"
        },
        {
            title: "HTML5",
            description: "Linguagem de marcação utilizada na construção de páginas na Web.",
            icon: getIconByTechnology(TechnologyEnum.HTML5),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://www.w3schools.com/html/"
        },
        {
            title: "Insomnia",
            description: "Plataforma colaborativa que facilita a criação de APIs de alta qualidade.",
            icon: getIconByTechnology(TechnologyEnum.Insomnia),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://insomnia.rest/"
        },
        {
            title: "JavaScript",
            description: "Linguagem de programação de alto nível, interpretada e baseada em eventos.",
            icon: getIconByTechnology(TechnologyEnum.JavaScript),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://www.w3schools.com/js/"
        },
        {
            title: "Knex.js",
            description: "Biblioteca para Node.js que facilita a criação de consultas e migrações.",
            icon: getIconByTechnology(TechnologyEnum.Knex),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://knexjs.org/"
        },
        {
            title: "Nest.js",
            description: "Framework Node.js para a construção de aplicações escaláveis e eficientes.",
            icon: getIconByTechnology(TechnologyEnum.NestJS),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://nestjs.com/"
        },
        {
            title: "Next.js",
            description: "Framework de renderização híbrida, roteamento automático e otimização de performance.",
            icon: getIconByTechnology(TechnologyEnum.NextJS),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://nextjs.org/"
        },
        {
            title: "Node.js",
            description: "Ambiente de execução de códigos que permite executar JavaScript fora do navegador.",
            icon: getIconByTechnology(TechnologyEnum.NodeJS),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://nodejs.org/pt"
        },
        {
            title: "PostgreSQL",
            description: "Sistema gerenciador de banco de dados objeto relacional.",
            icon: getIconByTechnology(TechnologyEnum.PostgreSQL),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://www.postgresql.org/"
        },
        {
            title: "Postman",
            description: "Plataforma de API para projetar, construir, testar e colaborar em APIs.",
            icon: getIconByTechnology(TechnologyEnum.Postman),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://www.postman.com/"
        },
        {
            title: "Prisma.js",
            description: "ORM para Node.js e TypeScript que simplifica o acesso a bancos de dados.",
            icon: getIconByTechnology(TechnologyEnum.Prisma),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://www.prisma.io/"
        },
        {
            title: "Python",
            description: "Linguagem de programação, orientada a objetos, funcional, com tipagem dinâmica e forte.",
            icon: getIconByTechnology(TechnologyEnum.Python),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://www.python.org/"
        },
        {
            title: "React",
            description: "Biblioteca front-end JavaScript com foco em criar interfaces de usuário em páginas web.",
            icon: getIconByTechnology(TechnologyEnum.React),
            knowledgeLevel: knowledgeEnum.Avancado,
            link: "https://reactnative.dev/"
        },
        {
            title: "React Native",
            description: "Framework usado para desenvolvimento mobile utilizando JavaScript e React.",
            icon: getIconByTechnology(TechnologyEnum.React),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://react.dev/"
        },
        {
            title: "Redis",
            description: "Banco de dados em memória, distribuído de chave-valor, cache e agente de mensagens.",
            icon: getIconByTechnology(TechnologyEnum.Redis),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://redis.io/"
        },
        {
            title: "Sass",
            description: "Linguagem de extensão CSS de nível profissional mais madura, estável e poderosa do mundo.",
            icon: getIconByTechnology(TechnologyEnum.Sass),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://sass-lang.com/"
        },
        {
            title: "Socket.io",
            description: "Biblioteca orientada a eventos para aplicações web em tempo real.",
            icon: getIconByTechnology(TechnologyEnum.SocketIO),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://socket.io/"
        },
        {
            title: "Swagger",
            description: "Ferramentas que auxiliam na criação e documentação de APIs de forma eficiente.",
            icon: getIconByTechnology(TechnologyEnum.Swagger),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://swagger.io/"
        },
        {
            title: "Tailwind CSS",
            description: "Framework CSS voltado para utilidades.",
            icon: getIconByTechnology(TechnologyEnum.Tailwind),
            knowledgeLevel: knowledgeEnum.Iniciante,
            link: "https://tailwindcss.com/"
        },
        {
            title: "TypeORM",
            description: "ORM para TypeScript/JavaScript utilizando modelos de objetos.",
            icon: getIconByTechnology(TechnologyEnum.TypeORM),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://typeorm.io/"
        },
        {
            title: "TypeScript",
            description: "Superconjunto JavaScript que adiciona tipagem estática.",
            icon: getIconByTechnology(TechnologyEnum.TypeScript),
            knowledgeLevel: knowledgeEnum.Intermediario,
            link: "https://www.typescriptlang.org/"
        }
    ],
    contact: {
        description: "Fique à vontade para entrar em contato comigo! abaixo segue meus contatos",
        links: [
            { icon: linkedinIcon, title: 'Linkedin: ', text: "Leonardo Tomio", link: 'https://www.linkedin.com/in/leonardo-tomio-9342a91aa/' },
            { icon: gmailIcon, title: 'Email: ', text: "leo__tomio@hotmail.com", link: 'leo__tomio@hotmail.com' },
            { icon: githubIcon, title: 'Github: ', text: "LeoTomio", link: 'https://github.com/LeoTomio' }
        ],
        
        curriculumButton:'Curriculo',
        curriculumText:"Deseja ver meu curriculo?"
    },
    // projects:[
    //     {

    //     }
    // ]
}
export default pt