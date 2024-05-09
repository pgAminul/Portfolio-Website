import React, { useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import { ProtfolioData } from './ProtfolioData'
import '../Style/Protfolio/Protfolio.css'
import Counter from './Counter';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Protfolio() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='protfolioHeader'>
      <h1 className='prtfolioText  display-5' data-aos="fade-left">Work Portfolio</h1>
    <div className="ProtfolioSecondHeader">
        {
        ProtfolioData.map((prot)=>{
          const {img,text}=prot;
          return <div data-aos="fade-up"
          data-aos-duration="2000" className='ProtfolioChild'key={uuidv4()}>
          <center>
          <img  className='protfolioImages' src={img} alt="" />
          <div className="protfolioFoterText">
          <p className='ProtfollioFooter'>{text}</p>

          </div>
          </center>

          </div>
        })
      }
    </div>
    <div className="CounterHere" data-aos="zoom-in">
            <Counter  />
          </div>
    </div>
  )
}

export default Protfolio
