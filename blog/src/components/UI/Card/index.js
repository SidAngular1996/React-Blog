import React from 'react'
import './style.css'
/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    //style={props.style}
    //{...props}
    <div className="card" style={{width:props.width ? props.width:'100%'}} {...props} >
        {props.children} 
    </div>
   )

 }

export default Card