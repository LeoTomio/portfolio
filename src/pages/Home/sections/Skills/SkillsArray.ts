import { knowledgeEnum, TechnologyEnum } from '../../../../utils/enum';
import getIconByTechnology from '../../../../utils/IconExporter'; 

const technologies = [
  {
    icon: getIconByTechnology(TechnologyEnum.Axios),
    title: "Axios",
    description: "Cliente HTTP simples baseado em promessas para o navegador e para o Node.js.",
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
  // Continue adicionando outros objetos
];

export default technologies;
