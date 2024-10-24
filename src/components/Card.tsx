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
        <Card className="p-3 ">
            <Row className="align-items-center">
                <Col xs={2} className="text-center ">
                    <a href={link} target='_blank' className='iconBg' >
                        <Icon icon={icon} size="3rem" className="rounded-circle" />
                    </a>
                </Col>
                <Col xs={10}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>

                    <Card.Footer className="text-start">
                        <b>Nível: </b><span className={`${knowledgeLevel === knowledgeEnum.iniciante ? 'text-success' : knowledgeLevel === knowledgeEnum.intermediario ? 'text-warning' : 'text-danger'} `}>{knowledgeLevel}</span>
                    </Card.Footer>
                </Col>
            </Row>
        </Card>
    );
};

export default CustomCard;
