import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Icon from './Icon';
import { knowledgeEnum } from '../utils/enum';

interface CustomCardProps {
    icon: any;
    title: string;
    description: string;
    knowledgeLevel: string;
    link: string
}

const CustomCard: React.FC<CustomCardProps> = ({ icon, title, description, knowledgeLevel, link }) => {
    return (
        <Card className="p-3 d-flex card-skills">
            <Row className="rowCard">
                <Col xs={3} className="text-center firstColumn">
                    <a href={link} target='_blank' className='iconBg' >
                        <Icon icon={icon} size="3rem" className="p-1" />
                    </a>
                </Col>
                <Col xs={9} >
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        
                    </Card.Body>

                    <Card.Footer className="text-start  "> 
                        <b>Nível: </b><span className={`${knowledgeLevel === knowledgeEnum.Iniciante ? 'text-success' : knowledgeLevel === knowledgeEnum.Intermediario ? 'text-warning' : 'text-danger'} `}>{knowledgeLevel}</span>
                    </Card.Footer>
                </Col>
            </Row>
        </Card>
    );
};

export default CustomCard;
