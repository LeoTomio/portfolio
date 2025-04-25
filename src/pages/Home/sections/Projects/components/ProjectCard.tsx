
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../../../../utils/dictionary/dictionary';
import Icon from '../../../../../components/Icon';
import noPhoto from '../../../../../assets/images/noPhoto.jpeg'
import useDictionary from '../../../../../utils/hook/useDictionary';

const ProjectCard = ({ id, shortDescription, image, technologies, title, underDevelopment }: Project) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        setTimeout(() => navigate(`/project/${id}`), 500);
    };

    return (
        <Card className='w-auto' >
            {image ? <Card.Img variant="top" src={image} /> : <Card.Img variant="top" src={noPhoto} style={{ height: '167px', objectFit: 'cover' }} />}

            <Card.Body className='d-grid p-0'>
                <Card.Title className='mt-3'>{title}</Card.Title>
                {underDevelopment && <Card.Text className='d-flex justify-content-center text-warning fs-6'>{underDevelopment}</Card.Text>}
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