import React from 'react'
import './Footer.css'
import { FaLinkedinIn } from "react-icons/fa"
import { AiFillBehanceCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return(
        <footer>

            <a href='https://www.linkedin.com/in/silje-lj%C3%B8dal-74982163/' target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="some-icons" /></a>

            <a href='https://www.behance.net/siljeljoda418d?tracking_source=search-all%7Csilje%20lj%C3%B8dal' target="_blank" rel="noopener noreferrer"><AiFillBehanceCircle className="some-icons" /></a>

            <a href='https://www.instagram.com/slj__art/' target="_blank" rel="noopener noreferrer"><AiFillInstagram className="some-icons" /></a>
      
        </footer>
    )
}

export default Footer