import Card from 'react-bootstrap/Card';
import "../img/dr1.jpg";

const Doctors = ({ id, name, dep, img}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <img src={img} alt="img" />
      <Card.Title>{name}</Card.Title>
      <Card.Text>{dep}</Card.Text>
      </Card.Body>
      </Card>
  )
}

export default Doctors;