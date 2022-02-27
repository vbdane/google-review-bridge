import React from "react";
import './Success.css'
import SuccessImg from './../../assets/success_img.svg'

function Success(props){
    return (
        <div className="app__success">
            <img src={SuccessImg} width='30%' alt="feedback sent successfully"/>
            <div className="app__success-label">
                Thank you for your feedback.<br />आपकी प्रतिक्रिया के लिए धन्यवाद|<br />आपल्या अभिप्रायाबद्दल धन्यवाद.
            </div>
        </div>
    )
};

export default Success;