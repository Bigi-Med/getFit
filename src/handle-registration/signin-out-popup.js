import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import "./signin-out-popup.css";
const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="popup">
        <div className="popup-content">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          {children}
          <div className="top-section">
              <h2>Sign in</h2>
          </div>

          <div className="middle-section">
          <form>
            <div id="email">
              <div id="email-icon" >
                <FontAwesomeIcon icon={faEnvelope}/>
              </div><div id="email-input" >
                <input type="email" placeholder='email' ></input>
              </div>
            </div>
         </form>
          </div>
          <div className="bottom-section">
            <form>
              <div id="password">
                <div id="password-icon">
                  <FontAwesomeIcon icon={faLock}/>
                </div>
              <div id="password-input">
                <input type="password"  placeholder='password' />
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  Popup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
  
  export default Popup;
  