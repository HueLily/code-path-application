import React from 'react'
import CardComponent from '../../components/Card';
import {Container, Row, Col } from "react-bootstrap"
// import CardComponent from '../../components/Card';

const ShowCreator = () => {
  return (
    <div className='show-creator'>
       <div>
        <Container >
          <Row>
            <Col><CardComponent /></Col>
            <Col><CardComponent /></Col>
            <Col><CardComponent /></Col>
            <Col><CardComponent /></Col>
            <Col><CardComponent /></Col>
          </Row>
        </Container>
        
      {/* {creators.length > 0 ? (
        creators.map((creator) => (
          <CardComponent key={creator.id} creator={creator} />
        ))
      ) : (
        <p>No content creators found in the database.</p>
      )} */}
    </div>
    </div>
  )
}

export default ShowCreator;
