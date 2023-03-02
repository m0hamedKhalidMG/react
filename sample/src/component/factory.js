import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {person} from './datauser'
import Datarows from "./datarows";
import Action from './action'
import  Title  from "./title";
 const factory = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[per,setstate]= useState(person)
// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(()=>{
    setstate([])


},[])
    const delet=()=>{
        setstate([])

console.log(per)

    }

    const show=()=>{

        setstate(person)
        console.log(per)
  
            }
  return (
    <div className='color-body'>
    <Container className="py-5  ">
   <Title per={per}/>
    <Datarows per={per}/>

   <Action del={delet} show={show}/>
    </Container>
    
    
    </div>
  )
}
export default factory