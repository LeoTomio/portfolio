import { Col, Container, Row } from "react-bootstrap"
import projectsAnimatedIcon from '../../../../assets/icons/animatedIcons/projects.json'
import AnimatedIcon from "../../../../components/AnimatedIcon"
import useDictionary from "../../../../utils/hook/useDictionary"
import ProjectCard from "./components/ProjectCard"

const Projects = () => {
    const { translatedData } = useDictionary()

    return (
        <section id="projetos" style={{ minHeight: '75dvh', marginTop: "8rem" }}>
            <div className="d-flex align-items-end">
                <AnimatedIcon
                    className="animatedIcon"
                    animatedIcon={projectsAnimatedIcon}
                    loop
                />
                <h2 className="title">{translatedData.section[3].title}</h2>
            </div>
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    {translatedData.projects.map((project) => (
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

