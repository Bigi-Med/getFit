import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <div>
      <h2>Sign in</h2>
      <form>
       
       <div id="email">
       <FontAwesomeIcon icon={faEnvelope} style={{backgroundColor:'red', marginLeft:'-3%' , paddingRight:'1%', paddingTop:'1%' , paddingBottom:'1%',paddingLeft:'1%', position:'fixed'}} />
          <input type="email" style={{  marginBottom:'20%', marginLeft:'2%', paddingBottom:'6%' }} placeholder='email' ></input>
        </div>

        
        <div id="password">
        <FontAwesomeIcon icon={faLock} style = {{backgroundColor:'red', marginLeft:'-3%' , paddingRight:'1%', paddingTop:'1%' , paddingBottom:'1%',paddingLeft:'1%', position:'fixed'}} />
          <input type="password" style={{   marginBottom:'20%', marginLeft:'2%', paddingBottom:'6%' }} placeholder='password' />
        </div>

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
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
