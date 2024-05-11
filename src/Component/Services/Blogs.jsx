import React, { useState,useEffect } from 'react'
import { useParams,useLocation } from 'react-router'
// import { ServicesData } from './ServicesData'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import { FaBackward } from "react-icons/fa";
function Blogs() {

  // const [bodyData, setBodyData]=useState('')
  // useEffect(()=>{
  //   const blogData=ServicesData.filter((blogBody)=> blogBody.title===title);
  //   setBodyData(blogData[0].body)
  // },[])
    const {title}=useParams()
  const lcoation =useLocation()
  const BlogStyle = {
    border: 0,
    width: '90%',
    textAlign:'left',
    margin: "10px auto",
    padding:"5px"
  };
  const blogTitle={
    textAlign: 'center',
    marginBottom:'15px'
  }
  const blogDescription={
    fontSize: '18px'
  }

  const navigate =useNavigate()
  const previousPage =()=>{
    navigate(-1)
  }
  const previous ={
    textAlign:"center",
    marginBottom:'15px'
  }

  return (
   <div>
     <div style={BlogStyle}>
      <h2 style={blogTitle} className='display-5'>{title}</h2>
      {/* using useParams and sliceing  */}
      {/* <p>{bodyData.slice(0,100)}</p> */}
      {/* <p>{bodyData}</p> */}

      {/* use useLocation  */}
      {/* <img src={location.state.img} alt="" /> */}
      <p style={blogDescription}>{lcoation.state.body}</p>
    </div>
    <div style={previous}>
    <Button variant="primary" onClick={previousPage}><FaBackward /> Back To Home</Button>
    </div>
   </div>
  )
}

export default Blogs
