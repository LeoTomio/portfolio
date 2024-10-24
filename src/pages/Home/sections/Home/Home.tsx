import Header from "../../../../components/Header"
import Icon from "../../../../components/Icon"
import ProfileIcon from '../../../../assets/icons/profile.jpg'
import { Col, Row } from "react-bootstrap"

const Home = () => {

  return (
    <section id="inicio" className="min-vh-100">
      <Row className="mx-2">
        <Col lg={12} className="d-flex justify-content-center">
          <Icon icon={ProfileIcon} size="20rem" className="rounded-circle" />
        </Col>
        <Col lg={12} className="mt-2 d-flex justify-content-center">
          <span className="title">Leonardo Tomio</span>
        </Col>
        <Col lg={12} >
          <span className="subtitle">Desenvolvedor Full Stack</span>
        </Col>
      </Row>
    </section>
  )
}

export default Home
