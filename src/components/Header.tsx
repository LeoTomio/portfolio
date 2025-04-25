import { useState } from 'react';
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import AnimatedIcon from './AnimatedIcon';
import homeAnimatedIcon from '../assets/icons/animatedIcons/home.json';
import ptFlagAnimatedIcon from '../assets/icons/animatedIcons/ptFlag.json';
import enFlagAnimatedIcon from '../assets/icons/animatedIcons/enFlag.json';
import languageAnimatedIcon from '../assets/icons/animatedIcons/language.json';
import useDictionary from '../utils/hook/useDictionary';
import { LanguageEnum } from '../utils/enum';


const Header = () => {
  const { language, setLanguage, translatedData } = useDictionary()

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/#inicio" className="mr-auto" >
          <AnimatedIcon
            style={{ height: 35 }}
            animatedIcon={homeAnimatedIcon} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            {translatedData.section.map((menu) => {
              return (
                <Nav.Link key={menu.title} href={`/${menu.href}`}>{menu.title}</Nav.Link>
              )
            })}

            <NavDropdown className="nav-item-dropdown "
              title={<AnimatedIcon style={{ height: 40 }} animatedIcon={languageAnimatedIcon} />}
              id="language-nav-dropdown">
              <NavDropdown.Item onClick={() => { setLanguage(LanguageEnum.pt) }} >
                <div className='d-flex align-items-center gap-2 pe-3'>
                  {translatedData.language.pt}
                  <AnimatedIcon style={{ height: 40 }} animatedIcon={ptFlagAnimatedIcon} loop />
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => { setLanguage(LanguageEnum.en) }}>
                <div className='d-flex align-items-center gap-2 pe-3'>
                  {translatedData.language.en}
                  <AnimatedIcon style={{ height: 32 }} animatedIcon={enFlagAnimatedIcon} loop />
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


// display: flex;
// gap: 4px;
// align-items: center;
