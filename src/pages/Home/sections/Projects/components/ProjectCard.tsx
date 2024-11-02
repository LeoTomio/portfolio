
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Project } from '../../../../../utils/dictionary/dictionary';
import Icon from '../../../../../components/Icon';
import padLockIcon from '../../../../../assets/icons/padlock.svg'
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ id, shortDescription, image, technologies, title }: Project) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/project/${id}`); // Navega para a rota de projeto com o ID do projeto
    };

    return (
        <Card className='w-auto'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <b>Tecnologias:</b> {technologies.join(', ')}
                </Card.Text>
                <Card.Text>{shortDescription}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between position-relative gap-3 align-self-center">
                <Button variant="primary" className='d-flex justify-content-center gap-2 fw-bold' onClick={() => { handleNavigate() }}>
                    Detalhes
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default ProjectCard;