import { Col, Row } from "react-bootstrap";
import { DataCalculator } from "../../../../utils/Functions";
import { dataReturn } from "../../../../utils/enum";
import './about.css'

const About = () => {
  const age = DataCalculator({ year: 2000, month: 2, day: 15 }, dataReturn.year)
  return (
    <section id="sobre">
      <h2 className="title">Sobre mim</h2>
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
    </section>
  );
};

export default About;
