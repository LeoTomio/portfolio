import { Col, Container, Row } from "react-bootstrap"
import developerAnimatedIcon from '../../../../assets/icons/animatedIcons/skills.json'
import AnimatedIcon from "../../../../components/AnimatedIcon"
import CardComponent from "../../../../components/Card"
import useDictionary from "../../../../utils/hook/useDictionary"

const Skills = () => {
    const { translatedData } = useDictionary()

    return (
        <section id="habilidades" className="min-vh-100 ">
            <div className="d-flex align-items-end">
                <AnimatedIcon
                    className="animatedIcon"
                    animatedIcon={developerAnimatedIcon}
                    loop
                    style={{
                        marginRight: '1rem'
                    }}
                />
                <h2 className="title">{translatedData.titles[1].title}</h2>
            </div>
            <Container className="mt-5">
                <Row className="m-0 ">
                    {/* <Col lg={12} className="d-flex justify-content-between px-5 mb-4">
                        <Button>Todos</Button>
                        <Button>Iniciante</Button>
                        <Button>Intermediario</Button>
                        <Button>Avancado</Button>
                    </Col> */}
                    {!!translatedData && translatedData.skills.map((skill) => {
                        return (
                            <Col lg={4} xs={12} sm={12} md={6} className="d-flex justify-content-center skils-card">
                                <CardComponent
                                    icon={skill.icon}
                                    title={skill.title}
                                    description={skill.description}
                                    knowledgeLevel={skill.knowledgeLevel}
                                    link={skill.link}
                                />
                            </Col>)
                    })}
                </Row>
            </Container>

        </section >
    )
}
export default Skills
