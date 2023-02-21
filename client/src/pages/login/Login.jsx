import React from 'react';
import './login.scss';

function Login() {
  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' 
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
                alt="" 
                />
            </div>
        </div>
        <div className="container">
            <form>
                <h1>Sing In</h1>
                <input type="email" placeholder='input email' />
                <input type="password" placeholder='password' />
                <button className="loginButton">Sign In</button>
                <span>
                    New to netflix <b>Sign up Now </b> 
                </span>
                <small>
                    This page is proctected by google reCAPTCHA to ensure you're not a bot
                    <b>Lean More</b>
                </small>
            </form>
        </div>
    </div>
  )
}

export default Login