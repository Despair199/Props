import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function BasicExample(props) {
    return (
<Card style={props.style } >
<Card.Img src={props.image} />
<Card.Body style={props.body}>
  <Card.Title>{props.name}</Card.Title>
  <Card.Text>
{props.description}
  </Card.Text>
  <Button variant="primary"> 
    {props.type}
  </Button>
</Card.Body>
<Card.Footer>Pokedex Entry : {props.number}</Card.Footer>
</Card>
    )
}

export default BasicExample;