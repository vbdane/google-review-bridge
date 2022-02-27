# GOOGLE REVIEW BRIDGE 
This application lets small businesses accept reviews and feedbacks in a constructive way while directing happy customers/clients to the business' google review page, helping businesses build search authority. 

## Objective
This application will ask for text feedback from reviewees who rate the service three or less than three stars and save this response to the connected firebase realtime database and will direct users who rate more than that to the business' google review page.

## Dependancies
This project uses Material UI's [Rating Component](https://mui.com/components/rating/) to accept 'Star' rating and saves it to [Firebase Realtime Database](https://firebase.google.com/docs/database).

## Screenshots
Screen which will appear on the home page
![Mobile Screen Rating Bar](https://raw.githubusercontent.com/vbdane/google-review-bridge/master/docs/images/mobile-rating.PNG)

Screen which will appear if user rates less than or equal to three stars
![Mobile Screen Feedback Box](https://github.com/vbdane/google-review-bridge/blob/master/docs/images/mobile-feedback.PNG)

Screen which will appear after submission of feedback
![Mobile Success Screen](https://github.com/vbdane/google-review-bridge/blob/master/docs/images/mobile-success.PNG)