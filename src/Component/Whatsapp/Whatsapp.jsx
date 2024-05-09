import React, { useState } from 'react';
import '../Style/Whatsapp/Whatsapp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Whatsapp() {
  const [show, setShow] = useState(true);

  const toggleBar = () => {
    setShow(!show);
  };

  return (
    <div className='whatsappForcontact'>
        <a href="https://wa.me/60132194479" target="_blank">
        <img src="./Images/Whatsapp.png" alt="" />
      </a>
      <p onClick={toggleBar}>
        {
          show ? (
            <>
              Chat With Me
              <FontAwesomeIcon className='FontAwesomeIcon' icon={faCircleChevronLeft} /> 
            </>
          ) : (
            <>
               <FontAwesomeIcon className='FontAwesomeIcon' icon={faCircleChevronRight} />

            </>
          )
        } 
      </p>
    
    </div>
  );
}

export default Whatsapp;
