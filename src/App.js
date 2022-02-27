import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import InputArea from './Components/InputArea/InputArea';
import { getCookie } from './utils/cookie';
import Success from './Components/Success/Success'

function App(props){
    const [isResponseSent, setResponseSent] = useState(getCookie());
    return (
        <div className="app">
        <Navbar />
        {isResponseSent? <Success /> : <InputArea onResponse={setResponseSent} /> }
        </div>  
    )
};

export default App;
