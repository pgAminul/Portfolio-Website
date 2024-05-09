import React from 'react'
import '../Style/Main/Home.css'
import Header from '../Header/Header'
import Protfolio from '../Protfolio/Protfolio'
import Service from '../Services/Service'
import AboutMe from '../AboutMe/AboutMe'
import Testomonial from '../Testomonial/Testomonial'
import Contact from '../Contact/Contact'
function Home() {
  return (
<div className="HomeHeader">
<div className='HomeChild'>
<Header/>
<Protfolio />
<Service />
<AboutMe />
<Testomonial/>
<Contact />
</div>
</div>  
)
}

export default Home
