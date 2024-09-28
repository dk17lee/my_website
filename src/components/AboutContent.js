import { Link } from "react-scroll"
import "./AboutContentStyles.css"
import React from 'react'
import brain from "../assets/brain_img.webp"
import ninjago from "../assets/ninjago.png"

const AboutContent = () => {
  return (
    <div id="about" className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am Daniel, a student at Brown University interested in neuroscience and computer science</p>
            <Link to="contact" smooth={true} duration={500}>
                <button className="btn">Contact Me</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={brain} className="img" alt="nuthin"/>
                </div>

                <div className="img-stack bottom">
                    <img src = {ninjago} className="img" alt="nuthin"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent