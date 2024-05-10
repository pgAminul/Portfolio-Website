import React, { useEffect, useState } from 'react'
import { ServicesData } from './ServicesData'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Card from 'react-bootstrap/Card';
import '../Style/Services/Servicess.css'
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Service() {
    useEffect(() => {
        AOS.init();
      }, [])
    const [Blogs, setBlogs]= useState(ServicesData)
    const truncateString=(str,num)=>{
        if(str.length > num){
            return str.slice(0, num) + '...'
        }else{
            return str
        }   
    }
  
  return (
    <div className='ServicesHeader'>
        <h2 className='serviceHeaderContent display-5' data-aos="zoom-in-right">My Services</h2>
        <section  className='ServiceCard'>
            {
                Blogs.map((Blog)=>{
                    const {title,body,img}= Blog
                    return <Card className='CardMain'  key={uuidv4()} data-aos="zoom-out-up">
                        <div className="serviceImages">
                        <Card.Img className='serviceImg ' src={img} alt="" />

                        </div>
                        <Card.Body className='serviceBody'>
                        <Card.Title className="serviceTitle">{title}</Card.Title>
                        <Card.Text>{truncateString(body,100)}</Card.Text>
                      <Link  to={'/blogs/' + title} state={{body,img}}>
                        <Button className='ServiceBtn'>Learn More</Button>
                      </Link>

                        </Card.Body>
                    </Card>
                })
            }
        </section>
    </div>
  )
}

export default Service
