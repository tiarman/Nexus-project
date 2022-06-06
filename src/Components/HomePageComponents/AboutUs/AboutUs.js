/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import aboutus from '../../../Images/aboutus.png';
import './AboutUs.css';
import AOS from 'aos';


AOS.init();

const AboutUs = () => {
    return (
        <section className='about-us-alignment'>
            <div className='container'>
                <br />
                <br />
                <br />
            <h4 className='about-us-tittle-align' data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine"data-aos-duration="1000" style={{textAlign: 'center', marginBottom: '15px', color: '#10bad4'}}>About Us</h4>
            <h3 className='about-us-tittle2-align' data-aos="fade-left" data-aos-offset="50" data-aos-easing="ease-in-sine"data-aos-duration="1000">We provide best service for our valuable clients</h3>
            {/* <marquee behavior="left" direction="">this is arman</marquee> */}
            <br />
            <br />
            <br />
        <div className='row text-center'>
            <div className='col-md-6'>
                <p data-aos="fade-up-left" data-aos-duration="1500">Among the IT giants across Bangladesh, Touch & Solve is one of the renowned IT companies that offer various kinds of IT services to its esteemed clients. Through the purpose of building software, Touch & Solve build the dreams of their clients and prospects by providing them with standard and well-designed fully responsive website development services along with the development of mobile and desktop application. Apart from this, Touch & Solve also offers its clients ICT solutions, IT Infrastructure, LAN-Wifi, Computer & Accessories, customized software- POS, Institute Management, Hospital Management Software, Computer & Accessories, Networking solutions, CCTV & Time attendance & service in Bangladesh. The Company possesses a team of efficient and highly technically skilled developers and designers who work hard and smart to provide the epitome of the services to their clients. The technical team of Touch & Solve follows a specific working process to save time, money, and even improve the productivity of the clients.</p>

            </div>
            <div className='col-md-6 aboutus-img-align'>
                <img data-aos="fade-up-right" data-aos-duration="1500" src={aboutus} alt="" />

            </div>
        </div>
        </div>
        </section>
    );
};

export default AboutUs;