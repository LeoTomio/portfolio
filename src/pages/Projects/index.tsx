import { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Modal, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Icon from '../../components/Icon';
import { Project } from '../../utils/dictionary/dictionary';
import useDictionary from '../../utils/hook/useDictionary';
import Page404 from '../NotFound';
import padlockIcon from '../../assets/icons/padlock.svg';
import noPhoto from '../../assets/images/noPhoto.jpeg';

const ProjectComponent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { translatedData } = useDictionary();
    const [projectData, setProjectData] = useState<Project>();
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        setProjectData(translatedData.projects.find((project) => project.id === id));
    }, [id, translatedData.projects]);

    function handleImageClick(image: string) {
        setTimeout(() => window.open(image, '_blank'), 500);

    };

    function handleNavigate(url: string) {
        setTimeout(() => window.open(url), 500);
    };

    if (!projectData) {
        return <Page404 />;
    }

    return (
        <Container fluid className="detailedProject">
            <Row className='mainDescription text-center'>
                <Col lg={12}>
                    <h1 className="text-center mb-4 title-no-row">{projectData.title}</h1>
                </Col>
                <Col lg={12}>
                    <pre className="mainDescription text-center preserve-breaks">{projectData.detailed?.mainDescription}</pre>
                </Col>

                <Col lg={12} className='mt-5'>
                    <h2 className="title">{translatedData.sistemTexts[2]}</h2>
                </Col>
            </Row>
            {projectData.detailed?.description.map((project, key) =>
                <Row key={key} className="align-items-center mb-4 mt-5">
                    <Col xs={12} md={6} className={`text-center px-3 px-lg-5 ${key % 2 === 1 ? 'order-md-2 slide-in-right' : 'slide-in-left'}`}>
                        <Image
                            className='scalable-img'
                            src={project.image ? project.image : noPhoto}
                            alt={`Imagem ${key + 1}`}
                            fluid
                            onClick={() => project.image && handleImageClick(project.image)}
                            style={{ cursor: 'pointer' }}
                        />
                    </Col>
                    <Col xs={12} md={6} className={`px-3 px-lg-5 ${key % 2 === 1 ? 'order-md-1 slide-in-left' : 'slide-in-right'}`}>
                        <p>{project.paragraph}</p>
                    </Col>
                </Row>
            )}
            <Row className='mainDescription text-center mt-3'>
                <Col lg={12} className='mt-3'>
                    <h3 className="title-no-row">{translatedData.sistemTexts[0]}</h3>
                </Col>
                <Col lg={12} className='d-flex justify-content-center mt-2 gap-3 flex-wrap'>
                    {projectData.technologies.map((tec) => {
                        return (
                            <Icon icon={tec.icon} alt={tec.name} size="3rem" className="p-1 iconBg info" />
                        );
                    })}
                </Col>
                {!!projectData.detailed?.github.length &&
                    <>
                        <Col lg={12} className='mt-5'>
                            <h3 className="title-no-row">{translatedData.sistemTexts[1]}</h3>
                        </Col>
                        <Col lg={12} className='d-flex justify-content-center position-relative gap-2 align-self-center mt-3 flex-wrap'>
                            {!!projectData.detailed && projectData.detailed.github.map((link) =>
                                <Button variant={`${link.main ? 'secondary' : 'primary'}`} className='d-flex justify-content-center gap-2 fw-bold' onClick={() => { !link.isPrivate && handleNavigate(link.link) }}>
                                    <div className='d-flex align-items-center gap-2 '>
                                        {link.isPrivate && <Icon icon={padlockIcon} size="1rem" />}
                                        {link.buttonName}
                                    </div>
                                </Button>
                            )}
                        </Col>
                    </>}
            </Row>

            <Modal dialogClassName="ts-modal ts-modal-xl" contentClassName="content-modal" show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="d-flex justify-content-center p-0">
                    <Image
                        src={selectedImage}
                        alt="Imagem Ampliada"
                        style={{ width: '100%', height: 'auto', maxHeight: '100vh', objectFit: 'contain' }}
                    />
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default ProjectComponent;
