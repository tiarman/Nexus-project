import React from 'react';
import CountrySwiper from '../Country/CountrySwiper';
import NavBar from '../NavBar/NavBar';
import Notice from '../WelcomeSection/Notice';

const Management = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className='welcom-sector text-center'>
            <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <Notice />
                    <br />
                    <br />
                    <br />
                    <CountrySwiper />
                </div>
                <div className="col-md-8">
                    <h4 style={{backgroundColor: "black", borderRadius: "20px 20px 0px 0px", color: "white", padding: "15px"}}>Welcome to Winner Overseas LTD</h4>
                    <p className='margue-section-2'>Winner Overseas Ltd is one of the best Manpower Recruiting agencies in Bangladesh, known for its professional and excellent services. It is our motto to supply the right people, with the right skills, at the right time and place.

Winner has been providing recruitment, training, and consultancy services to clients throughout the world since 1999.Our staffs are skilled and trained in their perspective fields. We always try to stay with our valued clients through the latest technologies and giving up to date information. Above all, we give the biggest priority to our valued customers.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quasi, saepe blanditiis non ipsum ipsa error officia! Accusamus beatae nisi repudiandae nemo quibusdam voluptatibus quaerat quis fuga vero, aspernatur ducimus illum quod voluptates ad eum recusandae laudantium, distinctio molestiae! Quod!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam error explicabo in temporibus? Necessitatibus minima dolorum nulla! Nisi aut consequuntur illo, architecto incidunt obcaecati recusandae aliquid. Minus iste fugit <eos className="lorem77"></eos>
</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Management;