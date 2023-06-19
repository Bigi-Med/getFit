import React, {useEffect, useRef, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./LandingPage.css"
import Popup from "../handle-registration/signin-out-popup.js"
import Login from "../handle-registration/loginForm.js"
import LoginForm from '../handle-registration/loginForm.js'
function LandingPage()
{

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const joinButton = useRef();

  useEffect(()=>{
    const applyAnimationToJoin = () =>{
      joinButton.current.querySelector('button').className = "join-button-with-animation";
    };

    const removeAnimationFromJoin = () => {
      joinButton.current.querySelector('button').className = "join-button";
    };

    const fillJoinButtonWhite = () => {
      joinButton.current.querySelector('button').className = "join-button-clicked";
    }

  //we want animation on hover, so useEffect applies when hovering

  //adding event listener on button
  
  const onHoverOver = ()=>{
    applyAnimationToJoin();
  };

  const onHoverOut = () => {
    removeAnimationFromJoin();  
  };

  const onClick = () =>{
    fillJoinButtonWhite();
  }

  joinButton.current.addEventListener("mouseover",onHoverOver);
  joinButton.current.addEventListener("mouseout",onHoverOut);
  joinButton.current.addEventListener("click",onClick);
});

  return (
        <div className="welcomeBar">
          <h2 className="appTitle">getFit</h2>
          <p className="intro">Share and explore new recipes</p>
          <p className="introDescription">Join our community of thousands of fitness enthusiasts, who also happend to love exploring and sharing new recipes!</p>
          <div className="Join-container" ref={joinButton}>
            <button className='join-button' onClick={handleOpen}> Join Now!</button>
            <Popup isOpen={isOpen} onClose={handleClose}>
      </Popup>
          </div>
        </div>
  )

}

export default LandingPage