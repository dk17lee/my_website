import "./HeroImgStyles.css";
import React from 'react';
import headshot from '../assets/headshot.JPG';

const HeroImg = () => {
  return (
    <div id="home" className="hero">
      <div className="overall">
        <div className="hero-content">
          <div className="headshot-container">
            <img src={headshot} alt="Daniel headshot" className="headshot"/>
          </div>
          <div className="text-content">
            <h1>Hi, I'm Daniel</h1>
            <div className="paragraphs">
              <p>Neuroscience + Computer Science @ Brown University</p>
              <p>Fascinated by neuro-oncology specifically in epigenetic mechanisms of oncogenesis. Currently working @ Tapinos Lab of Cancer Epigenetics & Plasticity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroImg