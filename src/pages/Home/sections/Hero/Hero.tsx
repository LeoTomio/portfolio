import Header from "../../../../components/Header"
import Icon from "../../../../components/Icon"
import ProfileIcon from '../../../../assets/icons/profile.jpg'
import { Col, Row } from "react-bootstrap"

const Hero = () => {

  return (
    <section id="hero">
      <Row>
        <Col lg={12} className="d-flex justify-content-center">
          <Icon icon={ProfileIcon} size="20rem" className="rounded-circle" />
        </Col>
        <Col lg={12} className="mt-2">
          <span className="title" >Leonardo Tomio</span>
        </Col>
        <Col lg={12}>
          <span className="subtitle">Desenvolvedor Full Stack</span>
        </Col>
      </Row>
    </section>
  )
}

export default Hero
