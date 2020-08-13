import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const[search,setSearch]=useState(false)

    const submitSearch=(e)=>{
        console.log("Submit")
        e.preventDefault()
        alert("Searched")
    }

    const openSearch=()=>{
        setSearch(true)
    }

    const searchClass=search?'searchinput active':'searchinput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">AboutUs</NavLink></li>
            <li><NavLink to="/post/1">Post</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={submitSearch}>
            <input type="text" className={searchClass} placeholder="Search"></input>
            <img onClick={openSearch} className="searchicon" src={require('../../assets/search-32.png')} alt="Search"></img>
            </form>

        </div>
    </div>
   )

 }

export default Navbar