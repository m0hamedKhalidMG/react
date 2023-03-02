import React from 'react'
import { Row, Col } from 'react-bootstrap';

export const title = ({per}) => {
  return (
    <Row className="justify-content-center">
    <Col sm="8">
you have {per.length} appoertuinty
    </Col>
    </Row>
  )
}
export default title