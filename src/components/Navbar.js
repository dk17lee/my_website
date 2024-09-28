import { Link } from "react-scroll"
import './NavbarStyles.css';

import React, {useState} from 'react'

import { FaBars, FaTimes } from "react-icons/fa"

import headShot from "../assets/headshot.JPG"

const Navbar = () => {

  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true)
    }
    else{
      setColor(false)
    }
  };

  window.addEventListener("scroll", changeColor)

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="home" smooth={true} duration={500}>
            {/*<img src = {headShot} alt = "Daniel face" className="headshot"/>*/}
            <h1>Daniel Lee</h1>
        </Link>
        <ul className={click ? "nav-menu active" : 
        "nav-menu"}>
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
          <li>
            <Link to="footer" smooth={true} duration={500}>Footer</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{color: "#fff"}}/>
          ) : (
            <FaBars size={20} style={{color: "#fff"}}/>
          )}
          
        </div>
    </div>
  )
}

export default Navbar