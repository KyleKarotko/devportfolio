import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard({ title, desc, img, depLink, gitLink }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt={`${title} screenshot`} />
      <Card.Body style={{ textAlign: 'center' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button variant="primary" href={depLink} target="_blank" rel="noopener noreferrer">
          Deployed Application
        </Button>{' '}
        <Button variant="primary" href={gitLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
