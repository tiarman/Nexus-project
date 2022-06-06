/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Country.css';
import CountrySwiper from './CountrySwiper';
import './CountrySwiper.css'
import DataLoad from './DataLoad';

const Country = ({service}) => {
    return (
        <div className='welcom-sector text-center'>
            <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <h4 style={{backgroundColor: "black", borderRadius: "20px 20px 0px 0px", color: "white", padding: "15px"}}>Photo Gallery</h4>
                    <marquee className="marque-welcome-text" behavior="scroll" direction="up">
                        <p>this is Lorem ipsum dolor sit amet.</p>
                        <p>this is Lorem ipsum dolor sit amet.</p>
                        <p>this is Lorem ipsum dolor sit amet.</p>
                    </marquee>
                </div>
                <div className="col-md-8">
                    <CountrySwiper />
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Country;