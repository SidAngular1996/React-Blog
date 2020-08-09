import React from 'react'
import './style.css'

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><a href="#">Home</a></li>
            <li><a href="#">AboutUs</a></li>
            <li><a href="#">Post</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="search">
            <input type="text" placeholder="Search"></input>
            <img src={require('../../assets/search-32.png')} alt="Search"></img>
        </div>
    </div>
   )

 }

export default Navbar