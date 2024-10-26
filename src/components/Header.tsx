import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import AnimatedIcon from './AnimatedIcon';
import homeAnimatedIcon from '../assets/icons/animatedIcons/home.json';


const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#inicio" className="mr-auto" >
          <AnimatedIcon
            style={{ height: 60}}
            animatedIcon={homeAnimatedIcon} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />

        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
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
