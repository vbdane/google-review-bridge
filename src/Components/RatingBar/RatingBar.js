import React from 'react';
import Rating from '@mui/material/Rating';
import './RatingBar.css'

class RatingBar extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //props onRatingChange, value, notActive
    }
    
    handleChange(newValue){
     this.props.onRatingChange(newValue)
    }
    
    render(){      
        const value = this.props.value;
        const size = this.props.size;
    
        return(
            <div className='app__ratingbar'>
                <div className='app__ratingbar-title'>
                    FEEDBACK FORM <br />(प्रतिक्रिया फॉर्म)
                </div>
                <div className='app__ratingbar-label'>
                Please rate your experience with us<br />कृपया अपने अनुभव का मूल्यांकन करें<br />कृपया तुमच्या अनुभवाचे मूल्यमापन करा
                </div>
                <Rating disabled={this.props.notActive} margin="normal" name="simple-controlled"value={value} onChange={(event, newValue) => this.handleChange(newValue)} size="large" sx={{fontSize:size}}/>
            </div>
        )
    }
}

export default RatingBar;