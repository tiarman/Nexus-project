/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import NavBar from '../../NavBar/NavBar';
import './OurPerformence.css';
import img1 from '../../../../Images/aboutus.png';
import Footer from '../../Footer/Footer';

const imgSlide = [
    {
        img:img1
    },
    {
        img:img1
    },
    {
        img:img1
    },
    {
        img:img1
    },
    {
        img:img1
    },
    {
        img:img1
    },
]

const OurPerformence = () => {
    return (
        <section>
            <div>
                <NavBar />
            </div>
            <div className='welcom-sector text-center'>
            <div className='container'>
            <div className="row">
                <div className="col-md-4">
                <h4 style={{backgroundColor: "black", borderRadius: "20px 20px 0px 0px", color: "white", padding: "15px"}}>News & Notice</h4>
                    <div className="marque-welcome-texts">
                        <p>this is Lorem ipsum dolor sit amet.</p>
                        <p>this is Lorem ipsum dolor sit amet.</p>
                        <p>this is Lorem ipsum dolor sit amet.</p>
                    </div>

                    <h4 style={{backgroundColor: "black", borderRadius: "20px 20px 0px 0px", color: "white", padding: "15px", marginTop: "20px"}}>News & Notice</h4>
                    <marquee className="marque-welcome-text" behavior="scroll" direction="up">
                        <div style={{hight:"500px"}}>
                        <p>this is Lorem ipsum dolor sit amet.</p>
                        <p>this is Lorem ipsum dolor sit amet.</p>
                        <p>this is Lorem ipsum dolor sit amet.</p>
                        </div>
                    </marquee>
                </div>
                <div className="col-md-8">
                    <h4 style={{backgroundColor: "black", borderRadius: "20px 20px 0px 0px", color: "white", padding: "15px"}}>Our Performence</h4>
                    <div className="row">
                        <div className="col-md-12">
                           {
                               imgSlide.map((slide) => 
                               <img src={img1} width="200px" height="350px" alt="" />
                               
                               )
                           }
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='mt-5'>
                <Footer />
        </div>
        </section>
    );
};

export default OurPerformence;