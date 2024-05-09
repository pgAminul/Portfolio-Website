import React from 'react'
import Router from './Component/Router/Router'
import './App.css'
import Whatsapp from './Component/Whatsapp/Whatsapp'
import Scroll from './Component/Scroll/Scroll'
import Footer from './Component/Footer/Footer'
function App() {
  return (
    <div className='allHeder'>
      <Router />
      <Whatsapp />
      <Scroll/>
      <Footer/>
    </div>
  )
}

export default App
