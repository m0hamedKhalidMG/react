import React,{useContext} from 'react'
import {userdata} from './context'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
 const Error = () => {
  const {data}=useContext(userdata)
return (
 <div> {data}
<Link to='/'> <Button>CLICK HERE</Button></Link>
</div>
  )
}
export default Error