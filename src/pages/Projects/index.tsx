import { useParams } from 'react-router-dom';
import useDictionary from '../../utils/hook/useDictionary';
import { useEffect, useState } from 'react';
import { DetailedProject } from '../../utils/dictionary/dictionary';
import Page404 from '../NotFound';
import { Col, Container, Image, Modal, Row } from 'react-bootstrap';

const Project = () => {
    const { id } = useParams();
    const { translatedData } = useDictionary();
    const [projectData, setProjectData] = useState<DetailedProject>();
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        setProjectData(translatedData.detailedProject.find((project) => project.id === Number(id)));
    }, [id, translatedData.detailedProject]);

    function handleImageClick(image: string) {
        setSelectedImage(image);
        setShowModal(true);
    };

    if (!projectData) {
        return <Page404 />;
    }

    return (
        <Container fluid className="detailedProject">
            <h1 className="text-center mb-4">{projectData.title}</h1>
            <div className='mainDescription text-center'>
                <p >{projectData.mainDescription}</p>
            </div>
            {projectData.description.map((project, key) => (
                <Row key={key} className="align-items-center mb-4">
                    <Col xs={12} md={6} className={`text-center p-5 ${key % 2 === 1 ? 'order-md-2 slide-in-right' : 'slide-in-left'}`}>
                        <Image
                            className='scalable-img'
                            src={project.image}
                            alt={`Imagem ${key + 1}`}
                            fluid
                            onClick={() => handleImageClick(project.image)} // Abre o modal ao clicar
                            style={{ cursor: 'pointer' }}
                        />
                    </Col>
                    <Col xs={12} md={6} className={`${key % 2 === 1 ? 'order-md-1 slide-in-left' : 'slide-in-right'}`}>
                        <p>{project.paragraph}</p>
                    </Col>
                </Row>
            ))}
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

export default Project;
