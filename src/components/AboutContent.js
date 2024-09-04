import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'
import brain from "../assets/brain_img.webp"
import ninjago from "../assets/ninjago.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am Daniel, a student at Brown University interested in neuroscience and computer science</p>
            <Link to = "/contact">
                <button className="btn">Contact</button>
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