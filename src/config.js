const configs = {
    //firebase project configuration object
    firebaseConfig: {
        apiKey: "",
        authDomain: "",
        projectId: "",  
        databaseURL: "" ,
        storageBucket: "",
        messagingSenderId: "",  
        appId: "",  
        measurementId: ""
    },
    //path of the realtime database node
    FIREBASE_RDB_DIR: 'realtime-database/feedback/' ,
    //this will appear in the title
    ORG_NAME: 'Organization Name',
    //Google My Business Review link
    GOOGLE_REVIEW_LINK: 'https://g.page/someplace/review',
    //type of organization. example: hospital
    EN_ORG_CAT: 'hospital' ,
    HI_ORG_CAT: 'अस्पताल',
    MR_ORG_CAT: 'रुग्णालय',
    //number of days before same person can post another review
    COOKIE_AGE_DAYS: '2'
};

export default configs;