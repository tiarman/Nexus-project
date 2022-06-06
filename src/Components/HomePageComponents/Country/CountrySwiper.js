import React, {useState, useEffect} from 'react';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import softwaresolution from '../../../Images/services/softwaresolution.png';
import SECURITIES from '../../../Images/services/SECURITIES.png';
import SOLUTION from '../../../Images/services/SOLUTION.png';
import CONTROL from '../../../Images/services/CONTROL.png';
import INFRASTRUCTURE from '../../../Images/services/INFRASTRUCTURE.png';
import AOS from 'aos';
import { Spinner } from 'react-bootstrap';
import './CountrySwiper.css'
import DataLoad from './DataLoad';


AOS.init();


SwiperCore.use([EffectCoverflow,Pagination]);

const serviceSlide = [
    {
        id:1,
        name: 'SOFTWARE SOLUTION' ,
        description:'ERP,IIS, AMS, POS, HR & Payroll, HMS, MCMS (Micro Credit Management System)',
        img:softwaresolution
    },
    {
        id:2,
        name: 'TESTING & SECURITIES' ,
        description:'The right IT security solutions. Security analysis and testing of softwares & web applications',
        img:SECURITIES
    },
    {
        id:3,
        name: 'SURVEILLANCE SOLUTION' ,
        description:'CCTV Sales, Installation, Service & Maintenance -IP Camera Sales, Installation, Service & Maintenance',
        img:SOLUTION
    },
    {
        id:4,
        name: 'ACCESS CONTROL' ,
        description:'We provide full access control such as Finger access, Card, Face recognition, Flap gate, Flap -Barrier etc.',
        img:CONTROL
    },
    {
        id:5,
        name: 'ATM BOOTH INFRASTRUCTURE' ,
        description:'Booth Infrastructure / Compact ATM Booth (CAB)',
        img:INFRASTRUCTURE
    }
]

const CountrySwiper = () => {

    return (
       <section className="service-container" id="service">
           <h4 data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine"data-aos-duration="1000">Our Gallery</h4>
           <h3 data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine"data-aos-duration="1000">Services We Provide</h3>
           <br />
           <br />
         
           <div className="container text-center">
       </div> :
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true}   
             autoplay={{  delay: 2500, disableOnInteraction: false}} slidesPerView={'auto'} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 92,
                    "modifier": 6,
                    "slideShadows": true
                }} pagination={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                }}
          > 
                {   
                        serviceSlide.map(service => { 
                            return(
                                <SwiperSlide  key={service.id}> 
                                    <DataLoad key={service.id} service={service} />
                                </SwiperSlide>
                            )
                        })
                }
            
          
            </Swiper>
                
       </section>
    );
};

export default CountrySwiper;