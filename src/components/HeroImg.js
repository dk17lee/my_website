import "./HeroImgStyles.css";

import React from 'react';
import brainImg from '../assets/brain_img.webp';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="brain-img"
                src={brainImg} alt="brainImg"/>
        </div>

        <div className="content">
            <p>I'm Daniel. Welcome to my website!</p>
            <h1>Get to know me better!</h1>

            <div className="btn-container">
                <Link to="/project"
                className="btn">Projects</Link>
            </div>

            <div className="btn-container">
                <Link to="/contact"
                className="btn btn-light">Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default HeroImg