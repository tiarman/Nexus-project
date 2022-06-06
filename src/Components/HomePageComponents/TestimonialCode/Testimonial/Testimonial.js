import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Testimonial.css'

const showRating = (star) => {
    const stars = [];
    const int = parseInt(star, 10)
    for (let i = 1; i <= int; i++) {
      stars.push(<FontAwesomeIcon className='rating-icon' icon={faStar} />)
    }
    return (
      <div>{ stars }</div>
    )
  }

const Testimonial = ({ testimonial: { id, name, img, description, star, address } }) => {
    return (
          <div className="testimonial-card">
              <div className="testimonial-avatar-box">
                  <img className="testimonial-avatar img-fluid" data-aos="zoom-in-left" data-aos-duration="1000" src={img} alt={name} />
              </div>
              <div className="testimonial-content">
                  <div className="testimonial-description">
                      <p className='des text-muted' data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="1000" >{description}</p>
                  </div>
                  <h5 className="mb-0 mt-0 pb-0 text-info" data-aos="fade-left" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="1000">{name}</h5>
                  <p className='mb-1 mt-1 pb-0' style={{color:'gray'}}>{address}</p>
                    {
                        showRating(star) 
                    } 
              </div>
          </div>
    );
};

export default Testimonial;