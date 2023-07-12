import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PlayerCard = ({Player}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Player.image} />
      <Card.Body>
        <Card.Title>{Player.name}</Card.Title>
        <Card.Text>
          {Player.team}
        </Card.Text>
        <Button variant="primary">{Player.nationality}</Button>
      </Card.Body>
    </Card></div>
  )
}

export default PlayerCard