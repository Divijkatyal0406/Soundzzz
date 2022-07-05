import React from 'react';
import './Login.css';
import {loginUrl} from './spotify';


function Login() {
  return (
    <div className="login">
        <img src="https://i.pinimg.com/originals/f0/5c/bc/f05cbc8c0f8b075d2b4f1f68fee49649.jpg" height={170}></img>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login