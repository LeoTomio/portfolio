
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../../../../utils/dictionary/dictionary';
import Icon from '../../../../../components/Icon';

const ProjectCard = ({ id, shortDescription, image, technologies, title }: Project) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        setTimeout(() => navigate(`/project/${id}`), 500);
    };

    return (
        <Card className='w-auto' >
            <Card.Img variant="top" src={image} />
            <Card.Body className='d-grid'>
                <Card.Title className='mt-3'>{title}</Card.Title>
                <Card.Text className='d-flex justify-content-center flex-wrap gap-2 w-100'>
                    {technologies.map((tec) => (
                        <Icon key={tec.name} icon={tec.icon} alt={tec.name} size="2rem" className="p-1 iconBg info" />
                    ))}
                </Card.Text>
                <Card.Text className='text-center'>{shortDescription}</Card.Text>
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