import React from 'react'
import { Row, Button, Col } from 'react-bootstrap';

 const action = ({del,show}) => {
  return (
    <Row className="justify-content-center my-1">
    <Col sm="8" className='d-flex justify-content-between'>
    
    <Button onClick={del} className='btn-style' >clear all</Button>
    <Button  onClick={show} className=' p-2'>show  all</Button>      
    
    </Col>
    </Row>
  )
}
export default action