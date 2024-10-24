import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Icon from './Icon';
import GithubIcon from '../assets/icons/github.svg';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import OutlookIcon from '../assets/icons/outlook.svg';

const Footer = () => {
  return (
    <footer className="footer-white py-4">
      <Container>
        <Row className="text-center text-md-left">

          <Col md={12}>
            <h3>Leonardo Tomio</h3>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://github.com/LeoTomio" target='_blank'>
                <Icon icon={GithubIcon} size="2rem" className='cursor-pointer' />
              </a>
              <a href="https://www.linkedin.com/in/leonardo-tomio-9342a91aa/" target='_blank'>
                <Icon icon={LinkedinIcon} size="2rem" className='cursor-pointer' />
              </a>
              <a href="mailto:leo__tomio@hotmail.com" target='_blank'>
                <Icon icon={OutlookIcon} size="2rem" className='cursor-pointer' />
              </a>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-4">
          &copy; {new Date().getFullYear()} Leonardo Tomio | Todos os direitos reservados
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
