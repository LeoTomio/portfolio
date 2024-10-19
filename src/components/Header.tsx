import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Icon from './Icon';
import ProfileIcone from '../assets/icons/profile.jpg'

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home" className="mr-auto">
          <Icon icon={ProfileIcone} alt='foto perfil' size='4rem' className='rounded-circle' />

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
