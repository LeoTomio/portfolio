import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Icon from './Icon';

import AnimatedHome from '../assets/icons/animatedHome.gif'
import StaticHome from '../assets/icons/staticHome.svg';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [iconSrc, setIconSrc] = useState(StaticHome); // Começa com a imagem estática

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleMouseEnter = () => {
    setIconSrc(AnimatedHome); // Muda para o GIF animado ao passar o mouse
  };

  const handleMouseLeave = () => {
    setIconSrc(StaticHome); // Volta para o ícone estático ao tirar o mouse
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand
          href="#inicio"
          className="mr-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icon icon={iconSrc} alt='foto perfil' size='3rem' />

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />

        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            {/* <Nav.Link href="#home">Início</Nav.Link> */}
            <Nav.Link href="#sobre">Sobre Mim</Nav.Link>
            <Nav.Link href="#habilidades">Habilidades</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
            <Nav.Link href="#projetos">Projetos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
