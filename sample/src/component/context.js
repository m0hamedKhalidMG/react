import React from 'react'
import { createContext } from 'react'
import  { useState} from 'react';
const userdata=createContext();

 const Context = ({children}) => {
    const [data,setdata] = useState("mohamed") ;

const changedata=(name)=>{
    setdata(name)

}
  return (
    <userdata.Provider value={{data,changedata}}>
   {children}
    </userdata.Provider>
  )
}
export {userdata,Context}