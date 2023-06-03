import React, {useEffect, useRef} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./LandingPage.css"
function LandingPage()
{

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
            <button className='join-button'> Join Now!</button>
          </div>
        </div>
  )

}

export default LandingPage