import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestomonialData } from './TestomonialData';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../Style/Testomonial/Testomonial.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';

export default function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <h2 className='testomonialHead display-5'data-aos="zoom-out-down">What My Clients Say</h2>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
    
        {
          TestomonialData.map((reviews,index)=>{
            const {clientName,review,position,img}=reviews;
            return     <SwiperSlide  key={index}>
       <Container  data-aos="zoom-in">
       <Image src={img} className='testomonialImg' />
       <p  className='reviewTestomonial'>{clientName}</p>
        <p>{review}</p>
        <p className='reviewPosition'>{position}</p>
       </Container>
            </SwiperSlide>
          })
        }
      </Swiper>
    </>
  );
}
