import { Button } from "@mui/material";
import React from "react";
import './SubmitButton.css'

class SubmitButton extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //props notActive, onButtonClick
    }

    handleChange(e){
        this.props.onButtonClick()
    }

    render(){
        return(
            <div className="app__submitbutton">
                <Button style={{width: '40%', margin: '20px'}} disabled={this.props.notActive} variant="contained" onClick={this.handleChange}>Send</Button>
            </div>
        )
    }
};

export default SubmitButton;