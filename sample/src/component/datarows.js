import React from 'react'
import { Row, Col } from 'react-bootstrap';

 const datarows = ({per}) => {
  return (
    <Row className='justify-content-center'>
    
    
    <Col sm="8">
    
    <div className='rectangle p-2'>
    
   {per.length? (per.map((item)=>{

return(

    <div key={item.id} className="d-flex border-bottom  my-3 mx-2">
    <img src={item.img} alt='no' className='img-avanter '/>
    <div className='px-2'>
    <p className='d-inline fs-5'>{item.name}</p>
    <p>{item.num}</p>

    </div>
    </div>

)



   })):<h2>no data</h2>}

    </div>
    
    
    </Col>
    
    </Row>
  )
}
export default datarows