import React, { useState } from 'react'
import CounterUp from 'react-countup'
import ScrollTigger from 'react-scroll-trigger'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/Services/Skill/Skill.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSass} from '@fortawesome/free-brands-svg-icons'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
function Counter() {
    const [counterUP, setCounterUp]=useState(false)
  return (
        <div className='HeaderSkill' >
         <h2 className="display-6 Skills">My Skills</h2>
            <ScrollTigger className='Skill' onEnter={()=>setCounterUp(true)} onExit={()=>setCounterUp(false)}>

            {/* HTML Start Here  */}

            <div className='SkillChildHeader'> 
            <div className="outer">
                <div className="inner"> 
                {
        counterUP && 
        <div className='progressText'>
             <FaHtml5 className='html'/>
          <br />
        <CounterUp start={0} end={95} duration={2} delay={0} />%

        </div>
         

    } 
                </div>
                <p className="skillTag">HTML5</p>
    <svg className='Svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
                <linearGradient id="GradientColor">
                <stop offset="0%"  />
                <stop offset="100%"  />
                </linearGradient>
            </defs>
            <circle className='forHtml' cx="50" cy="50" r="40"  />
    </svg>

            </div>
        </div>

        {/* Css Start Here  */}

      <div className='SkillChildHeader'> 
           <div className="outer">
            <div className="inner">
             {
    counterUP && 
    <div className='progressText'>
<IoLogoCss3 className='css'/> <br />
    <CounterUp start={0} end={85} duration={2} delay={0} />%

    </div>
    

} 
            </div>
            <p className="skillTag">CSS3</p>
<svg className='Svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%"  />
               <stop offset="100%"  />
            </linearGradient>
         </defs>
         <circle className='forCss' cx="50" cy="50" r="40"   />
 </svg>

           </div>
      </div>

    {/* Javascript start Here  */}
    <div className='SkillChildHeader'> 
           <div className="outer">
            <div className="inner">
             {
    counterUP && 
    <div className='progressText'>
      <IoLogoJavascript className='javascript'/> <br />
    <CounterUp start={0} end={90} duration={2} delay={0} />%

    </div>
    

} 
            </div>
            <p className="skillTag">JAVASCRIPT</p>
<svg className='Svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%"  />
               <stop offset="100%"  />
            </linearGradient>
         </defs>
         <circle className='forJavascript' cx="50" cy="50" r="40"   />
 </svg>

           </div>
      </div>

      {/* Boostrap Start Here  */}

      <div className='SkillChildHeader'> 
           <div className="outer">
            <div className="inner">
             {
    counterUP && 
    <div className='progressText'>
      <FaBootstrap className='bootstrap'/> <br />
    <CounterUp start={0} end={80} duration={2} delay={0} />%

    </div>
    

} 
            </div>
            <p className="skillTag">BOOTSTRAP</p>
<svg className='Svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%"  />
               <stop offset="100%"  />
            </linearGradient>
         </defs>
         <circle className='forBoostrap'cx="50" cy="50" r="40"   />
 </svg>

           </div>
      </div>



       {/* Scss Start Here  */}

       <div className='SkillChildHeader'> 
            <div className="outer">
                <div className="inner">
                {
        counterUP && 
        <div className='progressText'>
         <FontAwesomeIcon icon={faSass} className='scss'/> <br />
        <CounterUp start={0} end={75} duration={2} delay={0} />%

        </div>
        

    } 
                </div>
                <p className="skillTag">SCSS</p>
    <svg className='Svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
                <linearGradient id="GradientColor">
                <stop offset="0%"  />
                <stop offset="100%"  />
                </linearGradient>
            </defs>
            <circle className='forScss' cx="50" cy="50" r="40"   />
    </svg>

            </div>
        </div>

        {/* React Start Here  */}

      <div className='SkillChildHeader'> 
           <div className="outer">
            <div className="inner">
             {
    counterUP && 
    <div className='progressText'>
      <IoLogoReact className='react'/> <br />
    <CounterUp start={0} end={80} duration={2} delay={0} />%

    </div>
    

} 
            </div>
            <p className="skillTag">REACT</p>
<svg className='Svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%"  />
               <stop offset="100%"  />
            </linearGradient>
         </defs>
         <circle className='forReact'cx="50" cy="50" r="40"    />
 </svg>

           </div>
      </div>

    {/* Redux start Here  */}
    <div className='SkillChildHeader'> 
           <div className="outer">
            <div className="inner">
             {
    counterUP && 
    <div className='progressText'>
      <SiRedux className='redux'/> <br />
    <CounterUp start={0} end={80} duration={2} delay={0} />%

    </div>
    

} 
            </div>
            <p className="skillTag">REDUX</p>
<svg className='Svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%"  />
               <stop offset="100%"  />
            </linearGradient>
         </defs>
         <circle className='forRedux' cx="50" cy="50" r="40"    />
 </svg>

           </div>
      </div>

      {/* TYPESCRIPT Start Here  */}

      <div className='SkillChildHeader'> 
           <div className="outer">
            <div className="inner">
             {
    counterUP && 
    <div className='progressText'>
      <SiTypescript className='typescript'/> <br />
    <CounterUp start={0} end={85} duration={2} delay={0} />%

    </div>
    

} 
            </div>
            <p className="skillTag">TYPESCRIPT</p>
<svg className='Svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%"  />
               <stop offset="100%"  />
            </linearGradient>
         </defs>
         <circle className='forTypescript'cx="50" cy="50" r="40"   />
 </svg>

           </div>
      </div>
        </ScrollTigger>
      
    </div>
  )
}

export default Counter

// {
//     counterUP && 
//     <div>
//     <CounterUp start={0} end={100} duration={2} delay={0} />+ 

//     </div>

// }  <p className='CounterFoter'> Completed Project </p>