
import img from './images/img.jpg'
import img2 from './images/phot.jpg'
import img3 from './images/ph.png'
import State from './component/stateEX'
import Resturant from './component/resturant';
import Navv from './component/navv'
import Error from './component/error'
import Factory from './component/factory'
import Footer from './component/footer'

import React from 'react'
import Header from './header.js'
import Cart from './cart'
import {Routes,BrowserRouter, Route} from 'react-router-dom'
const arr = [{
title:"test1",
des:"des1",imag:img2}
,{title:"test2",
des:"des2",imag:img},
{title:"test3",
des:"des3",imag:img},
{title:"test4",
des:"des4",imag:img3}

];
 function message(title){

  alert(title)
}
 const App = () => {
  return (
    <div>

   
<BrowserRouter>
<Routes>
<Route path='/factory' element ={<Factory/>}/>
<Route path='/resturant' element ={<Resturant/>}/>

<Route path='/' element ={<Footer/>}/>
<Route path='/nav' element ={<Navv/>}/>
<Route path='*' element ={<Error/>}/>
</Routes>
</BrowserRouter>
  
    </div>

  )
}
export default App
