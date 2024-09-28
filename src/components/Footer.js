import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="footer">
        <div className="footer-container">
            <div className="left"> 
                <p>
                    Daniel Lee 2024
                </p>
            </div>

            <div className="right">
                <div className="social">
                    <FaFacebook size = {30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaTwitter size = {30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size = {30} style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer