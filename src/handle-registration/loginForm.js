import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import "./loginForm.css";

const LoginForm = () => {
  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <div className="card-container">

      <div>
        <h2>Sign in</h2>
      </div>
      
      <div className="container">
      <form>
       <div id="email">
        <div id="email-icon" >
          <FontAwesomeIcon icon={faEnvelope}/>
        </div><div id="email-input" >
          <input type="email" placeholder='email' ></input>
        </div>
      </div>
      <div id="password">
        
        <div id="password-icon" style = {{ display:'inline-block'}}>
          <FontAwesomeIcon icon={faLock}/>
        </div>
        <div id="password-input" style = {{ display:'inline-block'}}>
          <input type="password" style={{   marginBottom:'20%', marginLeft:'-2.5%', paddingBottom:'6.62%' }} placeholder='password' />
        </div>
      </div>
       
        <button type="button" onClick={handleLogin}>
          Login
        </button>

        </form>
      </div>

      <div>
        <p>Or login with:</p>
        <button className="google-login" >
          Login with Gmail
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
