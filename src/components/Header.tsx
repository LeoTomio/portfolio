import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import AnimatedIcon from './AnimatedIcon';
import homeAnimatedIcon from '../assets/icons/animatedIcons/home.json';
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
        <Navbar.Brand href="#inicio" className="mr-auto" >
          <AnimatedIcon
            style={{ height: 60 }}
            animatedIcon={homeAnimatedIcon} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            {translatedData.titles.map((menu) => {
              return (
                <Nav.Link href={menu.href}>{menu.title}</Nav.Link>
              )
            })}
            <Button onClick={() => {
              if (language === LanguageEnum.pt) {
                setLanguage(LanguageEnum.en)
              } else if (language === LanguageEnum.en) {
                setLanguage(LanguageEnum.pt)
              }
            }}> {translatedData.changeLanguage}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
