import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { createMemoryRouter } from 'react-router-dom';

const CardComponent= () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=""/>
      <Card.Body>
        <Card.Title>Creator Name</Card.Title>
        <Card.Text>
        Creator Description
        </Card.Text>
        <Button variant="primary">Learn more</Button>
      </Card.Body>
    </Card>
  )
}

export default CardComponent;