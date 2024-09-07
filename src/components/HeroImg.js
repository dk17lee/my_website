import "./HeroImgStyles.css";

import React from 'react';
import headshot from '../assets/headshot.JPG';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="overall">
            <div className="headshot-container">
                <img src = {headshot} alt = "Daniel headshot" className="headshot"/>
            </div>
            <div className="content">
                {/*<p>I'm Daniel. Welcome to my website!</p>*/}
                <h1>Hi, I'm Daniel</h1>
                <p>Neuroscience + Computer Science @ Brown University</p>
                <p>Fascinated by neuro-oncology specifically in epigenetic mechanisms of oncogenesis
                Currently working @ Tapinos Lab of Cancer Epigenetics & Plasticity. Engaging with</p>


                {/*<div className="btn-container">
                    <Link to="/project"
                    className="btn">Projects</Link>
                </div>

                <div className="btn-container">
                    <Link to="/contact"
                    className="btn btn-light">Contact</Link>
                </div>*/}
            </div>
        </div>
    </div>
  )
}

export default HeroImg