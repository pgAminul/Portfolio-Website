import React, { useState } from 'react'
import CounterUp from 'react-countup'
import ScrollTigger from 'react-scroll-trigger'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faCalendarDays} from '@fortawesome/free-solid-svg-icons'
// import {faListCheck} from '@fortawesome/free-solid-svg-icons'
// import {faFaceGrinHearts} from '@fortawesome/free-solid-svg-icons'
import '../Style/Protfolio/Protfolio.css'
function Counter() {
    const [counterUP, setCounterUp]=useState(false)
  return (
    <div className='HeaderCounter' >
        <ScrollTigger className='CounterHeader' onEnter={()=>setCounterUp(true)} onExit={()=>setCounterUp(false)}>
        <div className='CounterChildHeader'> 
            {
                counterUP && 
                <div>
                     <Image fluid className='gifImage' src="./Images/doneProject.gif" alt="" />
                <span className='Counter'>
                   <CounterUp start={0} end={100} duration={2} delay={0} />+ 

                </span>
                </div>

            }  <p className='CounterFoter'> Completed Project </p>
      </div>

      <div className='CounterChildHeader'> 
            {
                counterUP && 
                   <div>
                     <Image fluid className='gifImage' src="./Images/expirince.gif" alt="" />
                  <span className='Counter'>
                  <CounterUp  start={0} end={3} duration={2} delay={0} />+
                  </span>

                   </div>


            } <p className='CounterFoter'>Years Experience </p>
      </div>

      <div className='CounterChildHeader'>
            {
                counterUP && 
                <div>
                     <Image fluid className='gifImage' src="./Images/satisfiction.gif" alt="" />
                     <span className='Counter'>
                    <CounterUp  start={0} end={99} duration={2} delay={0} />%

                     </span>
                </div>

            } <p className='CounterFoter'> Client Satisfied </p>
      </div>
        </ScrollTigger>
      
    </div>
  )
}

export default Counter
