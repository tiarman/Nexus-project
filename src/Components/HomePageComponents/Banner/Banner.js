import React from 'react';
import { Button, Col, Container, Image, Row, Carousel } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import flight1 from '../../../Images/header/flight1.png';
import flight2 from '../../../Images/header/flight2.png';
import flight23 from '../../../Images/header/flight23.png';
import './Banner.css';


const headerBanner = [
    {
        "id": 1,
        "name": "Booth Infrastructure Compact ATM Booth (CAB)",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the",
        "img": flight1
    },
    {
        "id": 1,
        "name": "Booth Infrastructure Compact ATM Booth (CAB)",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the",
        "img": flight2
    },
    {
        "id": 1,
        "name": "Booth Infrastructure Compact ATM Booth (CAB)",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the",
        "img": flight23
    },
]


const Banner = () => {

    return (
        <div>
            <Carousel fade className='banner'>
            
            <Carousel.Item interval={1000}>
            <Fade left duration={2000} distance="40px"></Fade>
              <img
                className="d-block w-100"
                src={flight1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={flight2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={flight23}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    //     <Carousel fade>
            
           
    //    {
    //        headerBanner.map(banner=> 
            
    //         <Carousel.Item interval={3000}>
                
    //         <Container fluid>
            
    //             <Row className="align-items-center justify-content-center banner">
    //                 <Col md={6} className="p-md-5 order-2 order-md-1">
    //                     <Fade left duration={2000} distance="40px">
    //                         <h2>{banner.name}</h2>
    //                         <p className="text-muted my-4 pr-md-5">{banner.description}</p>
    //                         <Button
    //                             className="btn-main"
    //                             href="#services">
    //                             Learn More
    //                         </Button>
    //                     </Fade>
    //                 </Col>
    //                 <Col md={6} className="order-1 order-md-2">
    //                     <Fade right duration={2000} distance="40px">
    //                         <Image className='banner-img' src={banner.img} fluid />
    //                     </Fade>
    //                 </Col>
    //             </Row>
               
    //             </Container>
    //             </Carousel.Item>
    //         )
    //    }
            
    //     </Carousel>
        
)};

export default Banner;