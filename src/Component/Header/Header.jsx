import React from 'react'
import { HeaderData } from './HeaderData'
import '../Style/Header/Header.css'
import { TypeAnimation } from 'react-type-animation';
// import { FaRegSmile } from "react-icons/fa";
// import { FaHandshake } from "react-icons/fa";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFaceSmile} from '@fortawesome/free-regular-svg-icons'
import {faHandshake} from '@fortawesome/free-regular-svg-icons'

function Header() {
  return (
    <div className='HeaderSction'>
      {
        HeaderData.map((Header )=>{
            const {hi, name,msg,img,msg2,id}=Header;
            return <div key={id}>
            <video autoPlay loop muted playsInline className='videoBg'>
                <source src={img} type='video/mp4'/>
            </video>
            <div className="headerMsg">
                 <img className='hiGif' src="./Images/hi.gif" alt="" />
                <h1 className='headerText display-3 transHeadText'>{name}</h1>
                <h3 className='headerDownText'>{msg}</h3>
                <h3 className='headerDownText'>{msg2}
               <span className="animationText">
               <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'HTML5',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'CSS3',
        1000,
        'JAVASCRIPT',
        1000,
        'REACT',
        1000
      ]}
      wrapper="span"
      speed={30}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
               </span>
                </h3>

               <div  className="hireMe">
               <button  className='hireMeBtn'>
                  <FontAwesomeIcon className='hireMeIcon' icon={faHandshake} /> 
                  Hire Me
                </button>
               </div>
            </div>
           
            </div>
        })
      }

    </div>
  )
}

export default Header
