import React from 'react'
import { Row, Col } from 'react-bootstrap';

 const Catagory = () => {
  return (

    <Row>
    <Col className='justify-content-center d-flex'>
    <button className="btn_ ">الكل</button>
    <button className='btn_'>فطار</button>
    <button className='btn_'>غداء</button>
    <button className='btn_'>عشاء</button>


    
    </Col>
    </Row>
  )

}
export default Catagory