import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { setCookie, getCookie } from '../utils/cookie'
import configs from '../config';

const app = initializeApp(configs.firebaseConfig);
const db = getDatabase(app);

function pushData(ratingValue, feedbackValue){
  var dateObj = new Date()
  const dateValue = ( dateObj.getDate() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getFullYear() )
  const timestamp = + dateObj

  if(getCookie()) {return false};
  
  set(ref(db, (configs.FIREBASE_RDB_DIR + dateValue + '/' + timestamp)), {
    rating: ratingValue,
    feedback: feedbackValue
  }).then(() => {
    setCookie();
    return true;
  }).catch((error) => {
    return false;
  });
};

export default pushData;

