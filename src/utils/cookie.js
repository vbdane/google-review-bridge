import configs from './../config'

function setCookie(){
    var expires = new Date();
    const days = parseInt(configs.COOKIE_AGE_DAYS)
    expires.setTime(expires.getTime()+(days*24*60*60*1000))
    document.cookie = "feedback_sent=true; expires="+expires.toUTCString();
};

function getCookie(){
    let responded;
    (document.cookie.includes("feedback_sent=true")) ? responded = true : responded = false;
    return responded  
};

export {
    setCookie,
    getCookie
}