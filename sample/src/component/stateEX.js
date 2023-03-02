/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from 'react-bootstrap';
import React, { useState,useEffect,useRef } from 'react';
import {useContext} from 'react'
import {userdata} from './context'

function   stateEX () {
  const {changedata}=useContext(userdata)
    const [count,setcount] =useState(0) ;
    const [text,settext] = useState('') ;
    useEffect(()=>{
console.log("again")

    },[text])
    const refer= useRef(null)
   const handlevent =(e)=>{
setcount(count+1)
   }
   const handlechange =(e)=>{
    settext(e.target.value)
    console.log(e.target.value)
   }
   const focus=()=>{
refer.current.focus()
changedata(refer.current.value)
   }
  return (
<div>
<Button onClick={handlevent}>+</Button>
<Button onClick={()=>{setcount(count-1)}}>-</Button>
<label>{count}</label>
<input type="text" value={text}  onChange={handlechange} />  
<input type="text" ref ={refer}/>
<Button onClick={focus}>focus</Button>
</div>
  )
}
export default stateEX