import React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Main/Home';
import Contact from '../Pages/Contact';
import Service from '../Pages/Services'
import Error from '../Pages/Error';
import AboutMe from '../Pages/AboutMe' 
import Blogs from '../Services/Blogs';

function Router() {
    
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Services' element={<Service/>}/>
        <Route path='About' element={<AboutMe/>}/>
        <Route path='/blogs/:title' element={<Blogs/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default Router
