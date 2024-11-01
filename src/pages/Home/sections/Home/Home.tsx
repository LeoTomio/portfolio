import { Col, Row } from "react-bootstrap"
import ProfileIcon from '../../../../assets/icons/profile.jpg'
import Icon from "../../../../components/Icon"
import useDictionary from "../../../../utils/hook/useDictionary"

const Home = () => {
  const { translatedData } = useDictionary()
  return (
    <section id="inicio" className="min-vh-100">
      <Row className="mx-2">
        <Col lg={12} className="d-flex justify-content-center">
          <Icon icon={ProfileIcon} size="20rem" className="rounded-circle" />
        </Col>
        <Col lg={12} className="mt-2 d-flex justify-content-center">
          <span className="title">Leonardo Tomio</span>
        </Col>
        <Col lg={12} className="mt-3" >
          <span className="subtitle">{translatedData.workingPosition}</span>
        </Col>
      </Row>
    </section>
  )
}

export default Home
