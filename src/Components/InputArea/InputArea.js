import React, { useState } from "react";
import './InputArea.css'

import RatingBar from "../RatingBar/RatingBar";
import FeedbackArea from "../FeedbackArea/FeedbackArea";
import SubmitButton from "../SubmitButton/SubmitButton";
import pushData from "../../database/push";
import configs from "../../config";

function InputArea (props){
    //props: onResponse
    const [value, setValue] = useState(0);
    const [toggleFeedback, setToggleFeedback] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [disableButton, setDisableButton] = useState(true);
    const [disableRating, setDisableRating] = useState(false);

    return (
        <div className="main flex__center">
            <RatingBar notActive={disableRating} value={value} onRatingChange={handleRatingChange(setValue, setToggleFeedback, setDisableButton)} size={'3rem'} />
            <FeedbackArea show={toggleFeedback} onFeedbackChange={handleFeedbackChange(setFeedback)} feedback={feedback}/>
            <SubmitButton notActive={disableButton} onButtonClick={() => handleButtonClick(value, feedback, setDisableButton, setDisableRating, props.onResponse)}/>
        </div>
    )
}

const handleRatingChange = (setValueFunc, setToggleFeedbackFunc, setDisableButtonFunc) => (liftedRating) => {
    let toggle;
    (liftedRating < 4) ? toggle = true : toggle = false;
    setValueFunc(liftedRating);
    setToggleFeedbackFunc(toggle);
    setDisableButtonFunc(false);
};

const handleFeedbackChange = (setFeedbackFunc) => (liftedFeedback) => {
    setFeedbackFunc(liftedFeedback);
};

function handleButtonClick(stateValue, stateFeedback, setDisableButtonFunc, setDisableRatingfunc, setResponseSentFunc){

    if (stateValue >= 4){
        pushData(stateValue, stateFeedback)
        window.location.href = configs.GOOGLE_REVIEW_LINK
    } else {
        pushData(stateValue, stateFeedback);
        setDisableButtonFunc(true);
        setDisableRatingfunc(true);
        setResponseSentFunc(true);
    };
};

export default InputArea;


