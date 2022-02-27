import React from "react";
import { TextField } from "@mui/material";
import './FeedbackArea.css'
import configs from "../../config";

class FeedbackArea extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //props: show, onFeedbackChange, feedback

    }

    handleChange(e){
        this.props.onFeedbackChange(e.target.value)
    }

    render(){
        if(this.props.show == true) {
            return(
                <div className="app__feedbackarea">
                <div className="app__feedbackarea-label">
                    In your opinion which facilities in our {configs.EN_ORG_CAT} have a scope of betterment?<br />आपके हिसाब से {configs.HI_ORG_CAT} की कौनसी सुविधाओं में बेहतरी की गुंजाईश है? <br />तुमच्या मते {configs.MR_ORG_CAT}ातील कोणत्या सुविधेत सुधारणा करण्यास जागा आहे?
                </div>
                <TextField style={{width: '80%'}} multiline maxRows={3} margin="normal" onChange={this.handleChange} value={this.props.feedback} label="Feedback"/>
                </div>
            )
         } else {
            return (<div></div>)
         };
    };
};

export default FeedbackArea;