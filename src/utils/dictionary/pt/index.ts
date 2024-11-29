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

import automacaoHome from "../../images/projects/automacao/home.png";
import automacaoFormulario from "../../images/projects/automacao/formulario.png";

import superFlixHome from "../../images/projects/superflix/home.png";
import superFlixFavorites from "../../images/projects/superflix/favorites.png";
import superFlixDescription from "../../images/projects/superflix/description.png";


import { DictionaryType } from "../dictionary";

const pt: DictionaryType = {
    workingPosition: "Desenvolvedor Full Stack",
    sistemTexts: [
        "Tecnologias",
        "Acessos",
        "Explicando Algumas Funcionalidade",

    ],
    section: [
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
            "Foco em Javascript"
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
        description: "Fique à vontade para entrar em contato!",
        links: [
            { icon: linkedinIcon, title: 'Linkedin', text: "Leonardo Tomio", link: 'https://www.linkedin.com/in/leonardo-tomio-9342a91aa/' },
            { icon: gmailIcon, title: 'Email', text: "leo__tomio@hotmail.com", link: 'leo__tomio@hotmail.com' },
            { icon: githubIcon, title: 'Github', text: "LeoTomio", link: 'https://github.com/LeoTomio' }
        ],

        curriculumButton: 'Curriculo',
        curriculumText: "Deseja ver meu curriculo?"
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
            ]
            ,
            shortDescription: 'Sistema de atendimento humanizado para E-commerce.',
            detailed: {
                mainDescription: "A Humanizei é uma startup de atendimento para e-commerces e negócios digitais que oferece suporte em tempo real aos clientes. Combinando tecnologia avançada e inteligência artificial com as habilidades de atendentes, a Humanizei transforma interações em oportunidades de venda, visando aumentar o ticket médio e a satisfação dos clientes. Seu diferencial está no foco em transformar cada interação em venda e na personalização do atendimento, que alia tecnologia e o toque humano, proporcionando uma experiência mais eficaz e completa.",
                description: [
                    { image: humanizeiAttendantPage, paragraph: "Esta é a visão do atendente. Na tela de STATUS, pode definir o estado como ONLINE ou OFFLINE para cada empresa que o contratou. O mesmo atendente pode atender várias empresas simultaneamente, facilitando o multiatendimento." },
                    { image: humanizeiTickets, paragraph: "No menu Meus Atendimentos, é exibido uma lista dos atendimentos realizados. O atendente pode visualizar cada atendimento em detalhe, incluindo a avaliação do cliente e do atendente, as mensagens trocadas durante a conversa e uma transcrição feita por IA do que foi falado durante a chamada." },
                    { image: humanizeiHome, paragraph: "Um script da Humanizei é inserido no site do contratante, e é através dele que o cliente poderá iniciar uma chamada com o atendente." },
                    { image: humanizeiClientVision, paragraph: "Esta é a visão do cliente. Ele tem a opção de solicitar atendimento por mensagens ou por ligação." },
                    { image: humanizeiCall, paragraph: "Após a solicitação e a aceitação por parte do atendente, o cliente é redirecionado para a página de ligação, que é o coração do sistema. Em ambos os tipos de atendimento (mensagem e vídeo), o usuário tem acesso a todas as funcionalidades, como compartilhamento de tela, mutar, ocultar o chat, e ativar a webcam." },
                    { image: humanizeiFeedBack, paragraph: "Ao encerrar a ligação, tanto o usuário quanto o atendente podem avaliar a qualidade do atendimento." }

                ],
                github: [
                    { buttonName: "Site", isPrivate: false, main: true, link: "https://humanizei.digital/" },
                    { buttonName: "Front end", isPrivate: true, link: "" },
                    { buttonName: "Back end", isPrivate: true, link: "" }

                ]
            }
        },
        {
            id: 2,
            title: 'Formulário',
            image: formularioHome,
            technologies: [
                { name: "CSS", icon: getIconByTechnology(TechnologyEnum.CSS) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
                { name: "HTML", icon: getIconByTechnology(TechnologyEnum.HTML5) },
                { name: "Javascript", icon: getIconByTechnology(TechnologyEnum.JavaScript) },
            ],
            shortDescription: 'Formulário de perguntas de multipla escolha.',
            detailed: {
                mainDescription: "Um formulário simples, de 10 perguntas de multípla escolha, onde apenas 1 resposta esta correta. Foi feito como aprendizado atráves da Next Level Week(NLW) da Rockseat",
                description: [
                    { image: formularioHome, paragraph: "Uma listagem com 10 perguntas sobre javascript, cada uma contém apenas 1 resposta correta." },
                    { image: formularioAnswer, paragraph: "Conforme for respondendo, será exibido em vermelho caso esteja errado, e em verde caso acerte. No topo da tela é exibido o número de acerto " },

                ],
                github: [
                    { buttonName: "Site", isPrivate: false, main: true, link: "https://leonardotomio-formulario.vercel.app/" },
                    { buttonName: "Front end", isPrivate: false, link: "https://github.com/LeoTomio/NLW-Html-Css-Js" },
                ]
            }
        },
        {
            id: 3,
            title: 'Automação para Formulário',
            image: automacaoHome,
            technologies: [
                { name: "Python", icon: getIconByTechnology(TechnologyEnum.Python) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
            ],
            shortDescription: 'Automação para preencher formulários.',
            detailed: {
                mainDescription: "Automação para preencher formulários através de um arquivos csv, desenvolvido em python.",
                description: [
                    { image: automacaoHome, paragraph: "Ao executar, o navegador é aberto, entra no site especificado, executa o login, entra no sistema, e então começa a preencher o formulário." },
                    { image: automacaoFormulario, paragraph: "Os dados que estão sendo inseridos estão dentro de um arquivo csv." },

                ],
                github: [
                    { buttonName: "Github", isPrivate: false, link: "https://github.com/LeoTomio/automacaoFormularioPython" },
                ]
            }
        },
        {
            id: 4,
            title: 'SuperFlix',
            image: superFlixHome,
            technologies: [
                { name: "CSS", icon: getIconByTechnology(TechnologyEnum.CSS) },
                { name: "Github", icon: getIconByTechnology(TechnologyEnum.GitHub) },
                { name: "HTML", icon: getIconByTechnology(TechnologyEnum.HTML5) },
                { name: "Javascript", icon: getIconByTechnology(TechnologyEnum.JavaScript) },
                { name: "React", icon: getIconByTechnology(TechnologyEnum.React) },
            ],
            shortDescription: 'Site com listagem de filmes.',
            detailed: {
                mainDescription: "Site com listagem de filmes, onde há a possibilidade de salvar o filme em uma listagem de favoritos",
                description: [
                    { image: superFlixHome, paragraph: "Tela inicial, possui a listagem de 20 filmes por pagina" },
                    { image: superFlixDescription, paragraph: "Ao clicar em 'Acessar' você é redirecionado para a pagina de descrição do filme, onde possui informações dele, além do link do trailer, e a opção de salvar nos favoritos" },
                    { image: superFlixFavorites, paragraph: "Ao favoritar, o filme fica salvo em uma listagem." }
                ],
                github: [
                    { buttonName: "Site", isPrivate: true, link: "https://leonardotomio-superflix.vercel.app/" },
                    { buttonName: "Front", isPrivate: false, link: "https://github.com/LeoTomio/SuperFlix" },
                ]
            }
        }
    ]
}
export default pt


