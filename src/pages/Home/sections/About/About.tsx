import { Col, Row } from "react-bootstrap";
import aboutAnimatedIcon from '../../../../assets/icons/animatedIcons/about.json';
import developerAnimatedIcon from '../../../../assets/icons/animatedIcons/developer.json';
import AnimatedIcon from "../../../../components/AnimatedIcon";
import useDictionary from "../../../../utils/hook/useDictionary";

const About = () => {
  const { translatedData } = useDictionary()
  const isMobile = window.innerWidth < 991
  return (
    <section id="sobre">
      <div className="d-flex align-items-end">
        <AnimatedIcon
          className="animatedIcon"
          animatedIcon={aboutAnimatedIcon}
          loop
          style={{
            marginBottom: '1rem',
            marginRight: '1rem'
          }}
        />
        <h2 className="title">{translatedData.titles[0].title}</h2>
      </div>
      <Row className="mt-5 justify-content-center">
        <Col lg={6} sm={11} className="about-text">
          <p>
            {translatedData.about.firstP}
          </p>
          <p>
            {translatedData.about.secondP}
          </p>
        </Col>
        <Col lg={6} sm={11}>
          <ul className="topics-list">
            {translatedData.about.itens.map((item) => {
              return (
                <li>{item}</li>
              )
            })}

          </ul>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="about-div-icon">
          <AnimatedIcon
            style={{ height: `${isMobile ? '100%' : '20%'}`, width: `${isMobile ? '100%' : '55%'}` }}
            animatedIcon={developerAnimatedIcon}
            loop
          />
        </Col>
      </Row>
    </section>
  );
};

export default About;
