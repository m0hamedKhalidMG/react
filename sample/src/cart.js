import React from 'react'
import { Button, Card } from 'react-bootstrap'


const cart = ({con,des,title,re}) => {

  const clickme= ()=>{
re(title)

  }
  return (
    <div > <Card  style={{ width: '18rem' }}>
    <Card.Img variant="top" src={con} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {des}
      </Card.Text>
     
      <Button variant="primary" onClick={clickme}>Go somewhere</Button>
    </Card.Body>
  </Card></div>
  )
}

export default cart