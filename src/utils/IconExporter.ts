import axiosIcon from '../assets/icons/devIcons/axios.svg';
import bootstrapIcon from '../assets/icons/devIcons/bootstrap.svg';
import cssIcon from '../assets/icons/devIcons/css.svg';
import dockerIcon from '../assets/icons/devIcons/docker.svg';
import expressIcon from '../assets/icons/devIcons/express.svg';
import githubIcon from '../assets/icons/devIcons/github.svg';
import gitlabIcon from '../assets/icons/devIcons/gitlab.svg';
import html5Icon from '../assets/icons/devIcons/html5.svg';
import insomniaIcon from '../assets/icons/devIcons/insomnia.svg';
import javascriptIcon from '../assets/icons/devIcons/javascript.svg';
import knexIcon from '../assets/icons/devIcons/knex.svg';
import mysqlIcon from '../assets/icons/devIcons/mysql.svg';
import nestjsIcon from '../assets/icons/devIcons/nestjs.svg';
import nextjsIcon from '../assets/icons/devIcons/nextjs.svg';
import nodejsIcon from '../assets/icons/devIcons/nodejs.svg';
import postgresqlIcon from '../assets/icons/devIcons/postgresql.svg';
import postmanIcon from '../assets/icons/devIcons/postman.svg';
import prismaIcon from '../assets/icons/devIcons/prisma.svg';
import puttyIcon from '../assets/icons/devIcons/putty.svg';
import pythonIcon from '../assets/icons/devIcons/python.svg';
import reactIcon from '../assets/icons/devIcons/react.svg';
import reactBootstrapIcon from '../assets/icons/devIcons/reactbootstrap.svg';
import redisIcon from '../assets/icons/devIcons/redis.svg';
import sassIcon from '../assets/icons/devIcons/sass.svg';
import socketioIcon from '../assets/icons/devIcons/socketio.svg';
import swaggerIcon from '../assets/icons/devIcons/swagger.svg';
import tailwindIcon from '../assets/icons/devIcons/tailwind.svg';
import typeORMIcon from '../assets/icons/devIcons/typeORM.svg';
import typescriptIcon from '../assets/icons/devIcons/typescript.svg';
import vscodeIcon from '../assets/icons/devIcons/vscode.svg';
import { TechnologyEnum } from './enum';

const getIconByTechnology = (technology: TechnologyEnum) => {
    const icons: { [key in TechnologyEnum]: string } = {
        [TechnologyEnum.Axios]: axiosIcon,
        [TechnologyEnum.Bootstrap]: bootstrapIcon,
        [TechnologyEnum.CSS]: cssIcon,
        [TechnologyEnum.Docker]: dockerIcon,
        [TechnologyEnum.Express]: expressIcon,
        [TechnologyEnum.GitHub]: githubIcon,
        [TechnologyEnum.GitLab]: gitlabIcon,
        [TechnologyEnum.HTML5]: html5Icon,
        [TechnologyEnum.Insomnia]: insomniaIcon,
        [TechnologyEnum.JavaScript]: javascriptIcon,
        [TechnologyEnum.Knex]: knexIcon,
        [TechnologyEnum.Mysql]: mysqlIcon,
        [TechnologyEnum.NestJS]: nestjsIcon,
        [TechnologyEnum.NextJS]: nextjsIcon,
        [TechnologyEnum.NodeJS]: nodejsIcon,
        [TechnologyEnum.PostgreSQL]: postgresqlIcon,
        [TechnologyEnum.Postman]: postmanIcon,
        [TechnologyEnum.Prisma]: prismaIcon,
        [TechnologyEnum.Putty]: puttyIcon,
        [TechnologyEnum.Python]: pythonIcon,
        [TechnologyEnum.React]: reactIcon,
        [TechnologyEnum.ReactBootstrap]: reactBootstrapIcon,
        [TechnologyEnum.Redis]: redisIcon,
        [TechnologyEnum.Sass]: sassIcon,
        [TechnologyEnum.SocketIO]: socketioIcon,
        [TechnologyEnum.Swagger]: swaggerIcon,
        [TechnologyEnum.Tailwind]: tailwindIcon,
        [TechnologyEnum.TypeORM]: typeORMIcon,
        [TechnologyEnum.TypeScript]: typescriptIcon,
        [TechnologyEnum.VSCode]: vscodeIcon,
    };

    return icons[technology] || null;
};

export default getIconByTechnology