import React from 'react'
import '../Style/Footer/Footer.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineLocationCity } from "react-icons/md";

function Footer() {
  return (
<div className='footerHeader'>
<footer>
    <div className="ContactInfo">
        <h3>Contact Me</h3>
    <Col className='contact '><SiGmail className='contactIcon'/> businessbyaminul@gmail.com</Col>
    <Col className='contact '><FaPhoneAlt className='contactIcon'/> +6013-219 4479</Col>
    </div>
    <div className="ContactInfo">
     <h3>Follow Me</h3>
     <Col className='contact social'>
     <a href="https://www.facebook.com/freelancerAminul1/ " target="_blank" ><FaFacebook  className='facebook contactIcon'/> Facebook</a>
     </Col>
     <Col className='contact social'>
     <a href="https://www.instagram.com/dj7cat/" target="_blank" >< FaInstagramSquare className='instagram contactIcon' alt="" /> Instagram</a>
     </Col>
     <Col className='contact social'>
     <a href="https://www.linkedin.com/in/md-aminul-islam-showrov/" target="_blank" ><FaLinkedin className='linkedin contactIcon'/> Linkedin</a>
     </Col>
     <Col className='contact social'>
     <a href="https://t.me/Web_Expert_Aminul" target="_blank" ><FaTelegram className='telegram contactIcon'/> Telegram</a>
     </Col>
    </div>
    <div className="ContactInfo">
    <h3>Location</h3>
    <Col className='contact'><ImLocation2 className='location contactIcon'/> Johor Bahru, Johor, Malaysia</Col>
    <Col className='contact'><MdOutlineLocationCity className='location contactIcon'/> Taman Desa Cemerlang, 81800</Col>
    </div>
  
   </footer>
     <>
    <h5 style={{display:'block',textAlign:'center'}}>&copy; 2024 Copyright Aminul Islam</h5>
    </>
</div>
  )
}

export default Footer
