import React from 'react'
import './style.css'
import Card from '../UI/Card'
import Logo from '../Logo'
import Navbar from '../Navbar'
/**
* @author
* @function 
**/

const Hero = (props) => {
  return(
    <div>
      <Card>
          <div style={{padding:'50px 0'}}>
          <Logo></Logo>
          </div>

         <Navbar></Navbar>
        
      </Card>
    </div>
   )

 }

export default Hero