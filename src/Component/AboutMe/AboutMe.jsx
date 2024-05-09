import React, { useEffect, useState } from 'react'
import { AboutData } from './AboutData'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../Style/About/About.css'
import Skill from '../Services/Skill'
import AOS from 'aos';
import 'aos/dist/aos.css';
function AboutMe() {
    useEffect(() => {
        AOS.init();
      }, [])
    const [toggle,SetToggle]=useState(false)
    const ToggleBar =()=>{
        SetToggle(!toggle)
    }
  return (
   <div className="AboutMeHeader"data-aos="fade-up">
    <h2 className="display-5 AboutMe">About Me</h2>
    {
        AboutData.map((About,index)=>{
            const {img,name,text1,text2}=About;
            return <div className="AboutChildHeade" key={index}>
                 <Container className='AboutContainer'>
            <div>
            <Row>
        <Col  data-aos="zoom-out"><Image src={img} className='fluid AboutImg'/> </Col>
        </Row>
        
            </div>
       <div>
       <Row>
            <Col className='display-6 AboutName'>{name} </Col>
        </Row>
       <Row>
            <Col  data-aos="flip-right" className='AboutDescription'>{text1} 
      <span onClick={ToggleBar} className='ShowMore'>
                {
                    toggle ? " ": "Show More..."
                }
                </span> <br />
                {toggle && <span>{text2}</span> }
                </Col>
        </Row>
       </div>
    </Container>
       <div data-aos="fade-up"
     data-aos-anchor-placement="top-center">
       <Skill />
       </div>
            </div>
        })
    }
   </div> 
  )
}

export default AboutMe
664652205