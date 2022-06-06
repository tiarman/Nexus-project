import React from 'react';
import { Image } from 'react-bootstrap';
import './CountrySwiper.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';


AOS.init();

const DataLoad = ({service}) => {
    return (
        <Link  className='services-align'>
        <div className='service-member'>
            <Image style={{height:'300px'}} src={service.img}  alt="Images" />
            <h5 data-aos-offset="-50" data-aos-easing="ease-in-sine"data-aos-duration="1000" data-aos="fade-up">{service.tittle}</h5>
        </div>
        </Link>
    );
};

export default DataLoad;