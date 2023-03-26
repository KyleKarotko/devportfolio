import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({title}, {desc}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=''/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}
          test
        </Card.Text>
        <Button variant="primary">Deployed Application</Button>
        <Button variant="primary">GitHub Repositorie</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;