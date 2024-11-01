import AnimatedIcon from "../../../../components/AnimatedIcon";
import useDictionary from "../../../../utils/hook/useDictionary";
import contactMeAnimatedIcon from '../../../../assets/icons/animatedIcons/contactMe.json';
import { Button, Col, Row } from "react-bootstrap";
import Icon from "../../../../components/Icon";

const Contact = () => {
    const { translatedData } = useDictionary();

    function openResume() {
        window.open('https://drive.google.com/file/d/15Sd92qu6IEryW4QYRXHXGtlGVocjalGp/view?usp=sharing');
    }

    return (
        <section id="contato" className="mt-5 min-vh-100" style={{ overflowX: "hidden" }}>
            <div className="d-flex align-items-end">
                <AnimatedIcon
                    className="animatedIcon"
                    animatedIcon={contactMeAnimatedIcon}
                    loop
                />
                <h2 className="title">{translatedData.titles[2].title}</h2>
            </div>
            <Row className="mt-5">
                <Col lg={12}>
                    <h5>
                        {translatedData.contact.description}
                    </h5>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-start body-min-width">
                <Col lg={6} sm={11}>
                    <ul className="topics-list">
                        {translatedData.contact.links.map((link) => (
                            <div key={link.title} className="d-flex justify-content-start align-items-center mt-3">
                                <Icon icon={link.icon} size="3rem" className="me-3 iconBg p-1" />
                                <a href={link.link} target="_blank" rel="noopener noreferrer" className="fst-italic">
                                    <b>{link.title}</b>{link.text}
                                </a>
                            </div>
                        ))}
                    </ul>
                </Col>
                <Col lg={6} sm={11} className="d-flex flex-column justify-content-center align-items-center mt-5 mt-lg-0">
                    <h5>Deseja ver meu currículo?</h5>
                    <Button className="mt-3" onClick={openResume}>Currículo</Button>
                </Col>
            </Row>
        </section>
    );
}

export default Contact;
