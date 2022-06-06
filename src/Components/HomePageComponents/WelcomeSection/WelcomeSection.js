/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import Notice from './Notice';
import './WelcomeSection.css';

const WelcomeSection = () => {
    return (
        <div className='welcom-sector text-center'>
            <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <Notice />
                </div>
                <div className="col-md-8">
                    <h4 style={{backgroundColor: "black", borderRadius: "20px 20px 0px 0px", color: "white", padding: "15px"}}>Welcome to Winner Overseas LTD</h4>
                    <p className='margue-section-2'>Winner Overseas Ltd is one of the best Manpower Recruiting agencies in Bangladesh, known for its professional and excellent services. It is our motto to supply the right people, with the right skills, at the right time and place.

Winner has been providing recruitment, training, and consultancy services to clients throughout the world since 1999.Our staffs are skilled and trained in their perspective fields. We always try to stay with our valued clients through the latest technologies and giving up to date information. Above all, we give the biggest priority to our valued customers.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default WelcomeSection;