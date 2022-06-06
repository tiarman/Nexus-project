import React from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import spinner from '../../../../Images/loader.gif';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import AOS from 'aos';


AOS.init();


const testimonials = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "description":"Best product in our shop lorem safaof djskd ewoiaks alsaow alsakld ewhff alsjkaf efkw alsakld ewhff alsjkaf efkw",
        "star":3,
        "img": "https://i.ibb.co/QvK4zW5/image-32.png"
    },
    {
        "id": 1,
        "name": "Leanne Graham",
        "description":"Best product in our shop Best product in our shop lorem safaof djskd ewoiaks alsaow alsakld ewhff alsjkaf efkw alsakld ewhff alsjkaf efkw",
        "star":2,
        "img": "https://i.ibb.co/QvK4zW5/image-32.png"
    },
    {
        "id": 1,
        "name": "Leanne Graham",
        "description":"Best product in our shop Best product in our shop lorem safaof djskd ewoiaks alsaow alsakld ewhff alsjkaf efkw alsakld ewhff alsjkaf efkw",
        "star":4,
        "img": "https://i.ibb.co/QvK4zW5/image-32.png"
    },
    {
        "id": 1,
        "name": "Leanne Graham",
        "description":"Best product in our shop Best product in our shop lorem safaof djskd ewoiaks alsaow alsakld ewhff alsjkaf efkw alsakld ewhff alsjkaf efkw",
        "star":5,
        "img": "https://i.ibb.co/QvK4zW5/image-32.png"
    }
]

SwiperCore.use([Pagination, Autoplay]);

const Testimonials = () => {
    // const [testimonials, setTestimonials] = useState([]);

    // useEffect(() => {
    //     fetch('https://moto-repair.herokuapp.com/all-review')
    //         .then(res => res.json())
    //         .then(data => setTestimonials(data))
    //         .catch(error => toast.error(error.message))
    // }, []);

    return (
            <section id="reviews" className="testimonials p-md-3">
                <div className="my-5 py-4">
                    <div className="review-title text-center">
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine"data-aos-duration="1000">What Our Clients Says</span>
                        <h3 data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine"data-aos-duration="1000">Testimonials</h3>
                    </div>
                    <div>
                    {testimonials.length > 0 ?
                        <Swiper   loop={true}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
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
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={10} >
                            {
                                testimonials.map(testimonial => <SwiperSlide key={testimonial._id}><Testimonial testimonial={testimonial} /></SwiperSlide>)    
                            }
                        </Swiper>
                        : <div className="text-center">
                            <img  className='img-fluid' src={spinner} alt="..." />
                        </div>
                    }
                </div>
                </div>
        </section>
    );
};

export default Testimonials;