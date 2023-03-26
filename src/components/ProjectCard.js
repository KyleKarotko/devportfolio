import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard({ title, desc, img }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt={`${title} screenshot`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary">Deployed Application</Button>
        <Button variant="primary">GitHub Repository</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
