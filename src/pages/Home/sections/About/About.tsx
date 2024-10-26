import { Col, Row } from "react-bootstrap";
import developerAnimatedIcon from '../../../../assets/icons/animatedIcons/developer.json';
import aboutAnimatedIcon from '../../../../assets/icons/animatedIcons/about.json';
import AnimatedIcon from "../../../../components/AnimatedIcon";
import { DataCalculator } from "../../../../utils/Functions";
import { dataReturn } from "../../../../utils/enum";

const About = () => {
  const age = DataCalculator({ year: 2000, month: 2, day: 15 }, dataReturn.year)
  const isMobile = window.innerWidth < 991
  return (
    <section id="sobre">
      <div className="d-flex align-items-end">
        <AnimatedIcon
          className="animatedIcon"
          animatedIcon={aboutAnimatedIcon}
          loop
          style={{
            marginBottom:'1rem',
            marginRight:'1rem'
          }}
        />
        <h2 className="title">Sobre mim</h2>
      </div>
      <Row className="mt-5 justify-content-center">
        <Col lg={6} sm={11} className="about-text">
          <p >
            Me chamo Leonardo Tomio, tenho {age} e sempre fui um grande apreciador de tecnologias.
          </p>
          <p>
            Iniciei na carreira de desenvolvedor em março de 2021, desde então venho aprimorando minhas habilidades e conhecimentos. Estou sempre em busca de novos desafios e aprendizados no mundo da tecnologia.
          </p>
        </Col>
        <Col lg={6} sm={11}>
          <ul className="topics-list">
            <li>Desenvolvedor web a <b>{DataCalculator({ year: 2021, month: 2, day: 15 }, dataReturn.full)}</b></li>
            <li>Cursando Análise e Desenvolvimento de Sistemas</li>
            <li>Interessado em Front-end e Back-end</li>
            <li>Foco em Javascript </li>
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
