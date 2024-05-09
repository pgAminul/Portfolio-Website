import React from 'react';
import Contactt from '../../Component/Contact/Contact';

function Contact() {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
 
  const iframeStyles = {
    border: 0,
    width: '90%',
    height: '300px',
    margin: "20px auto",
  };

  return (
    <div>
      <Contactt />
    <div  style={containerStyles}> 
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127627.76973374061!2d103.62722440798042!3d1.5450250132869607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da12c6d36b3a27%3A0xd5f4b21db593d4f5!2sJohor%20Bahru%2C%20Johor!5e0!3m2!1sen!2smy!4v1715173070518!5m2!1sen!2smy" 
        style={iframeStyles} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  );
}

export default Contact;
