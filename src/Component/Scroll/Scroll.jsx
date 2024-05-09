import React, { useEffect, useState } from 'react'
import '../Style/Scroll/Scroll.css'
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

function Scroll() {
  const [scroll,SetScroll]=useState(false)
  const ScrollBar =()=>{
    let heightToShow=250;
    const winScroll= document.body.scrollTop || document.documentElement.scrollTop;
    if(winScroll > heightToShow){
      SetScroll(true)
    }else{
      SetScroll(false)
    }
  }
useEffect(()=>{
window.addEventListener('scroll',ScrollBar)
},[])

  const srollTop =()=>{
window.scrollTo({top:0, left:0, behavior:"smooth"})
  }
  return (
    <div className="mainScroll">
      {
        scroll && (
          <div className='scroolToUp' onClick={srollTop}>
      <MdOutlineKeyboardDoubleArrowUp  className='iconUp'/>
    </div>
        )
      }
    </div>
  )
}

export default Scroll
