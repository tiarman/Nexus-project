import React from 'react';
import './Header.css'
import Banner from './../Banner/Banner';
import NavBar from './../NavBar/NavBar';
import TopBar from '../TopBar/TopBar';
import CurveImage from '../Banner/CurveImage';

const header = () => {
    return (
        <div className='header-container'>
            <TopBar />
            <NavBar />
            <Banner />
            {/* <CurveImage /> */}
            
        </div>
    );
};

export default header;