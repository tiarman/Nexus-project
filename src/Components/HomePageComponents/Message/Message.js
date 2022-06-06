import React from 'react';
import NavBar from '../NavBar/NavBar';
import Notice from '../WelcomeSection/Notice';
import director from '../../../Images/siteimage/director.jpg'
import Footer from '../Footer/Footer';

const Message = () => {
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
                        </div>
                        <div className="col-md-8">
                            <h4 style={{ backgroundColor: "black", borderRadius: "20px 20px 0px 0px", color: "white", padding: "15px" }}>Welcome to Winner Overseas LTD</h4>

                            <div className='margue-section-2'>
                                <img width="100%" src={director} alt="" />
                                <h3>Message from Managing Director</h3>
                                <br />
                                <br />
                                <p>Assalamu'alaikumWarahmatullahi Wabarakatuh <br />
                                    A Cordial Welcome to Winner Overseas Ltd, which is representing services in the field of Manpower Recruitment for the global markets as per its requirements in various categories. In this context, we especially welcome those people who are willing to work abroad diligently and earn handsomely thereby improving their living principles & quality of lifestyle.

                                    <br />
                                    <br />

                                    I would like to invite you to visit our office and offer you to take the opportunities of our excellent services of all of your requirements pertaining to manpower placement. If you are from any part of the glove and looking for skilled/semi-skilled/unskilled manpower from Bangladesh,we are eagerly waiting to serve you with your entire satisfaction. We are vast with all types of skilled/semi-skilled/unskilled works and laborers for any part of the world.

                                    <br />
                                    <br />

                                    If you consider our office to be a part of your business, please feel free to let us know about your requirements in any format. Our dedicated and well-experienced employees are ready to play positive roles with all your requirements in any format. Our dedicated and well-experienced employees are ready to play a positive role with all your requirements. We do care about the standards of the global market and act accordingly. Our workforce is representing quality services in the field of manpower recruitment in Bangladesh. You will find us prompt and responsive to meet your various categories requirements of manpower requirements for the global market. We assure you to provide the most competent and befitting manpower of all fields at the most competitive cost with the best satisfaction as per our principles.</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <Footer />
            </div>
        </div>
    );
};

export default Message;