import { Col, Container, Row } from "react-bootstrap"
import projectsAnimatedIcon from '../../../../assets/icons/animatedIcons/projects.json'
import AnimatedIcon from "../../../../components/AnimatedIcon"
import { TechnologyEnum } from "../../../../utils/enum"
import useDictionary from "../../../../utils/hook/useDictionary"
import project1Icon from "../../../../utils/images/projects/3.png"
import ProjectCard from "./components/ProjectCard"
import { Project } from "../../../../utils/dictionary/dictionary"




const projects: Array<Project> = [
    {
        id: 1,
        title: 'Humanizei',
        image: project1Icon,
        technologies: [TechnologyEnum.React, TechnologyEnum.NodeJS, TechnologyEnum.Bootstrap, TechnologyEnum.Prisma],
        shortDescription: 'Sistema de atendimento humanizado para E-commerce'
    },


    // {
    //     id: 1,
    //     title: 'Humanizei',
    //     image: project1Icon,
    //     technologies: [TechnologyEnum.React, TechnologyEnum.NodeJS, TechnologyEnum.Bootstrap, TechnologyEnum.Prisma],
    //     description: 'Sistema de atendimento humanizado para E-commerce',
    //     githubLinks: [
    //         {
    //             buttonName: 'Front',
    //             link: 'https://github.com/seuusuario/projeto1',
    //             isPrivate: true
    //         },
    //         {
    //             buttonName: 'Backend',
    //             link: 'https://github.com/seuusuario/projeto1',
    //             isPrivate: true
    //         },
    //     ],
    //     deployLink: 'https://humanizei.digital/',
    // },


    // {
    //     id: 1,
    //     title: 'Humanizei',
    //     image: project1Icon,
    //     technologies: [TechnologyEnum.React, TechnologyEnum.NodeJS, TechnologyEnum.Bootstrap, TechnologyEnum.Prisma],
    //     description: 'Sistema de atendimento humanizado para E-commerce',
    //     githubLinks: [
    //         {
    //             buttonName: 'Front',
    //             link: 'https://github.com/seuusuario/projeto1',
    //             isPrivate: true
    //         },
    //         {
    //             buttonName: 'Backend',
    //             link: 'https://github.com/seuusuario/projeto1',
    //             isPrivate: true
    //         },
    //     ],
    //     deployLink: 'https://humanizei.digital/',
    // },
]


const Projects = () => {
    const { translatedData } = useDictionary()

    return (
        <section id="projetos" className="min-vh-100 mb-5">
            <div className="d-flex align-items-end">
                <AnimatedIcon
                    className="animatedIcon"
                    animatedIcon={projectsAnimatedIcon}
                    loop
                />
                <h2 className="title">{translatedData.titles[3].title}</h2>
            </div>
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    {projects.map(project => (
                        <Col key={project.id} xs={12} md={6} lg={4} className="mb-4 d-flex justify-content-center mx-0">
                            <ProjectCard
                                id={project.id}
                                shortDescription={project.shortDescription}
                                image={project.image}
                                technologies={project.technologies}
                                title={project.title}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>

    )
}
export default Projects

