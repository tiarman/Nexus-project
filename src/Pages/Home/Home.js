import React from 'react';
import Header from './../../Components/HomePageComponents/Header/Header';
import Footer from '../../Components/HomePageComponents/Footer/Footer';
import './Home.css'
import AboutUs from '../../Components/HomePageComponents/AboutUs/AboutUs';
import Blogs from '../../Components/HomePageComponents/Blogs/Blogs';
import MarqueeText from '../../Components/HomePageComponents/MarqueeText/MarqueeText';
import WelcomeSection from '../../Components/HomePageComponents/WelcomeSection/WelcomeSection';
import Country from '../../Components/HomePageComponents/Country/Country';
import DataLoad from '../../Components/HomePageComponents/Country/DataLoad';
import CountrySwiper from '../../Components/HomePageComponents/Country/CountrySwiper';
import Gallery from '../../Components/HomePageComponents/Gallery/Gallery';

const home = () => {
    return (
        <div className='scrool-align'> 
            <Header />
            <MarqueeText />
            <WelcomeSection />
            <CountrySwiper />
            <Gallery />
            {/* <AboutUs />
            <Blogs /> */}
            <Footer />
        </div>
    );
};

export default home;