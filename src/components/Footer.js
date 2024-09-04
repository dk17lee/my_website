import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaMailBulk, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">

            {/*this is for the left part of the footer (delete one of them later*/} 
            <div className="left"> 
                <div className="location"> {/*my addy (i dont need)*/} 
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>
                            I don't need this I think
                        </p>
                    </div>
                </div>

                <div className="phone"> {/*PHONE DON"T NEED*/} 
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    i'm not giving out my phone num bru
                </div>

                <div className="email">
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    daniel_k_lee@brown.edu
                </div>

            </div>

            {/*this is for the right part of the footer (delete one of them later*/} 
            <div className="right">
                <h4>I don't need this about my company</h4>
                <p>I don't need this fahimal kabur</p>

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