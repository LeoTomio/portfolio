import { knowledgeEnum, TechnologyEnum } from "../../../../utils/enum";
import getIconByTechnology from "../../../../utils/IconExporter";

const skills = [
  {
      icon: getIconByTechnology(TechnologyEnum.Axios),
      title: "Axios",
      description: "Cliente HTTP simples baseado em promessas para o navegador e para o node.js.",
      knowledgeLevel: knowledgeEnum.Intermediario,
      link: "https://axios-http.com/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.Bootstrap),
      title: "Bootstrap",
      description: "Framework para desenvolvimento de componentes front-end usando HTML, CSS e JS.",
      knowledgeLevel: knowledgeEnum.Avancado,
      link: "https://getbootstrap.com.br/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.CSS),
      title: "CSS",
      description: "Ferramenta de estilização para páginas web, é aplicado diretamente nas tags HTML.",
      knowledgeLevel: knowledgeEnum.Avancado,
      link: "https://www.w3schools.com/cssref/index.php"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.Docker),
      title: "Docker",
      description: "Plataforma para criar e distribuir aplicações encapsuladas em contêineres.",
      knowledgeLevel: knowledgeEnum.Iniciante,
      link: "https://www.docker.com/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.Express),
      title: "Express",
      description: "Framework para Node.js que fornece recursos mínimos para construção de servidores web.",
      knowledgeLevel: knowledgeEnum.Avancado,
      link: "https://expressjs.com/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.GitHub),
      title: "Github",
      description: "Plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.",
      knowledgeLevel: knowledgeEnum.Intermediario,
      link: "https://expressjs.com/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.GitLab),
      title: "GitLab",
      description: "Plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.",
      knowledgeLevel: knowledgeEnum.Iniciante,
      link: "https://about.gitlab.com/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.HTML5),
      title: "HTML5",
      description: "Linguagem de marcação utilizada na construção de páginas na Web.",
      knowledgeLevel: knowledgeEnum.Avancado,
      link: "https://www.w3schools.com/html/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.Insomnia),
      title: "Insomnia",
      description: "Plataforma colaborativa que facilita a criação de APIs de alta qualidade.",
      knowledgeLevel: knowledgeEnum.Avancado,
      link: "https://insomnia.rest/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.JavaScript),
      title: "JavaScript",
      description: "Linguagem de programação de alto nível, interpretada e baseada em eventos.",
      knowledgeLevel: knowledgeEnum.Avancado,
      link: "https://www.w3schools.com/js/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.Knex),
      title: "Knex.js",
      description: "Biblioteca para Node.js que facilita a criação de consultas e migrações.",
      knowledgeLevel: knowledgeEnum.Avancado,
      link: "https://knexjs.org/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.NestJS),
      title: "Nest.js",
      description: "Framework Node.js para a construção de aplicações escaláveis e eficientes.",
      knowledgeLevel: knowledgeEnum.Intermediario,
      link: "https://nestjs.com/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.NextJS),
      title: "Next.js",
      description: "Framework de renderização híbrida, roteamento automático e otimização de performance.",
      knowledgeLevel: knowledgeEnum.Iniciante,
      link: "https://nextjs.org/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.NodeJS),
      title: "Node.js",
      description: "Ambiente de execução de códigos que permite executar JavaScript fora do navegador.",
      knowledgeLevel: knowledgeEnum.Avancado,
      link: "https://nodejs.org/pt"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.PostgreSQL),
      title: "PostgreSQL",
      description: "Sistema gerenciador de banco de dados objeto relacional.",
      knowledgeLevel: knowledgeEnum.Intermediario,
      link: "https://www.postgresql.org/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.Postman),
      title: "Postman",
      description: "Plataforma de API para projetar, construir, testar e colaborar em APIs.",
      knowledgeLevel: knowledgeEnum.Intermediario,
      link: "https://www.postman.com/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.Prisma),
      title: "Prisma.js",
      description: "ORM para Node.js e TypeScript que simplifica o acesso a bancos de dados.",
      knowledgeLevel: knowledgeEnum.Avancado,
      link: "https://www.prisma.io/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.Python),
      title: "Python",
      description: "Linguagem de programação, orientada a objetos, funcional, com tipagem dinâmica e forte.",
      knowledgeLevel: knowledgeEnum.Iniciante,
      link: "https://www.python.org/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.React),
      title: "React",
      description: "Biblioteca front-end JavaScript com foco em criar interfaces de usuário em páginas web.",
      knowledgeLevel: knowledgeEnum.Avancado,
      link: "https://reactnative.dev/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.React),
      title: "React Native.js",
      description: "Framework usado para desenvolvimento mobile utilizando Javascript e React.",
      knowledgeLevel: knowledgeEnum.Avancado,
      link: "https://react.dev/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.Redis),
      title: "Redis",
      description: "Banco de dados em memória, distribuídor de chave-valor, cache e agente de mensagens.",
      knowledgeLevel: knowledgeEnum.Iniciante,
      link: "https://redis.io/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.Sass),
      title: "Sass",
      description: "Linguagem de extensão CSS de nível profissional mais madura, estável e poderosa do mundo.",
      knowledgeLevel: knowledgeEnum.Intermediario,
      link: "https://sass-lang.com/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.SocketIO),
      title: "Socket.io",
      description: "Biblioteca orientada a eventos para aplicações web em tempo real.",
      knowledgeLevel: knowledgeEnum.Intermediario,
      link: "https://socket.io/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.Swagger),
      title: "Swagger",
      description: "Ferramentas que auxilia na criação e documentação de APIs de forma eficiente.",
      knowledgeLevel: knowledgeEnum.Iniciante,
      link: "https://swagger.io/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.Tailwind),
      title: "Tailwind CSS",
      description: "Framework CSS voltado para utilidades.",
      knowledgeLevel: knowledgeEnum.Iniciante,
      link: "https://tailwindcss.com/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.TypeORM),
      title: "TypeORM",
      description: "ORM para TypeScript/JavaScript utilizando modelos de objetos.",
      knowledgeLevel: knowledgeEnum.Intermediario,
      link: "https://typeorm.io/"
  },
  {
      icon: getIconByTechnology(TechnologyEnum.TypeScript),
      title: "TypeScript",
      description: "Superconjunto JavaScript que adiciona tipagem estática.",
      knowledgeLevel: knowledgeEnum.Intermediario,
      link: "https://www.typescriptlang.org/"
  }
];
