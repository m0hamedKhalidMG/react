import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import IM from '../images/img.jpg'
 const cardrest = () => {
  return (
    <Row style={{marginTop:20}}>
    <Col sm="12 " style={{marginTop:20}}>
    <Card className='d-flex flex-row'  >

    <img src={IM} alt='no' className=' iuu ' variant="top"/>
    <Card.Body>
      <Card.Title className='d-flex justify-content-between'>
      <div>تفاصيل الوجبه</div>
      <div>60</div>
      </Card.Title>
      <Card.Text>
       jjkjinn
      </Card.Text>
     
    </Card.Body>
  </Card> 
  </Col>
  <Col sm="12 " style={{marginTop:20}}>
  <Card className='d-flex flex-row'  >

  <img src={IM} alt='no' className=' iuu ' variant="top"/>
  <Card.Body>
    <Card.Title className='d-flex justify-content-between'>
    <div>تفاصيل الوجبه</div>
    <div>60</div>
    </Card.Title>
    <Card.Text>
     jjkjinn
    </Card.Text>
   
  </Card.Body>
</Card> 
</Col>
<Col sm="12 " style={{marginTop:20}}>
<Card className='d-flex flex-row'  >

<img src={IM} alt='no' className=' iuu ' variant="top"/>
<Card.Body>
  <Card.Title className='d-flex justify-content-between'>
  <div>تفاصيل الوجبه</div>
  <div>60</div>
  </Card.Title>
  <Card.Text>
   jjkjinn
  </Card.Text>
 
</Card.Body>
</Card> 
</Col>
  </Row>)
}
export default cardrest