import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./LandingPage.css"
function LandingPage()
{
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    const updateEmail = (emailString) => {
        setEmail(emailString);
        console.log(email);
    }

    const updatePassword = (passwordString) => {
        setPassword(passwordString);
    }



    return (
      <div>
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(email)=>updateEmail(email)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(password)=>updatePassword(password)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    <div className='welcomeBoard'>
      <h2 id = "welcomeTitle">Welcome to getFit!</h2>
      <p>This is a website for fitness enthusiastes, who happen to also love cooking, AND for people who just love to cook</p>
      <p>Your will find in here thousands of delicious heartwarming recipes, alongside their nutritionnal facts "for peaople whi love tracking their food"</p>
      <p>and you can also share your own recipe for others to enjoy!</p>
    </div>
    </div>
    </div>
      );
    }

export default LandingPage