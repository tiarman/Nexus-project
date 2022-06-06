/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';

const Notice = () => {
    return (
        <div>
            <h4 style={{backgroundColor: "black", borderRadius: "20px 20px 0px 0px", color: "white", padding: "15px"}}>News & Notice</h4>
                    <marquee className="marque-welcome-text" behavior="scroll" direction="up">
                        <p>this is Lorem ipsum dolor sit amet.</p>
                        <p>this is Lorem ipsum dolor sit amet.</p>
                        <p>this is Lorem ipsum dolor sit amet.</p>
                    </marquee>
        </div>
    );
};

export default Notice;