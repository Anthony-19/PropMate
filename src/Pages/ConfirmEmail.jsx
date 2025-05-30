import React from 'react'
// import './style.css' 
import OtpVerification from '../components/OtpVerification';
import { Link } from 'react-router-dom';

function EmailConfirmation() {

  return (
    <div className="modal-overlay">9
      <div className="modal-wrapper">
        <h1 className="confirm-header">CONFIRM YOUR EMAIL</h1>

        <div className="modal">
          <img src="securityicon.jpg" alt="Security Icon" className="security-image" />

          <p className="email-info">
            We’ve sent a code to <span id="user-email">Johndoe@gmail.com</span>
          </p>

          <p className="enter-code">
            <strong>Enter the verification code here</strong>
          </p>

          <p className="expire-msg">
            This code will expire in <span id="countdown">02:00s</span>
          </p>

          <div className="otp-inputs">
            <input type="text" maxLength={1} />
          </div>

          <p className="change-email">
            Not my Email Address? <Link to="#">Change</Link>
          </p>

          <p className="resend">
            Didn’t receive the email ? <Link to="/forgot-password">Resend</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default EmailConfirmation
