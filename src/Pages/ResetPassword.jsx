import React from 'react'
import '../Css/resetPassword.css'
import { Link, useNavigate , useLocation} from 'react-router-dom'

function ResetPassword() {
    const location = useLocation();
    // const email = location.state?.email || ''; // Get email from state or default to empty string

    const storedEmail= localStorage.getItem('email')

    const navigate = useNavigate();
    const [otpReset, setOtpReset] = React.useState('');
    const [error, setError] = React.useState('');
    const handleChange = (e) => {
        const { value } = e.target;
        if(isNaN(value)) return;
        // Ensure the input is a number and has a maximum length of 6
       setOtpReset(value);
    }
    async function handleSubmit(e) {
    e.preventDefault();
    if (otpReset.length !== 6) return;
    localStorage.setItem('otp', otpReset); // Store OTP in local storage
    navigate('/create-new-password'); // Navigate to create new password page
    }
  return (
    <div className='reset-password-page'>
      <img src="/public/Assets/Images/email-icon.svg" alt="email-icon" className='email-icon'/>
      <h2 className='reset-password-header'>Check your email</h2>
      <p className='reset-password-subheader'>We have sent an OTP to your email. <br /> Please check your inbox. </p>
      {/* <p className='timing'><small>This code will expire in <span>01:56s</span></small></p> */}
      <form action="" onSubmit={handleSubmit} className='reset-password-form'>
        <input type="text" 
        id='reset-otp-input'
        placeholder='Enter the OTP sent to your email'
        maxLength={6}
        value={otpReset}
        // name=''
        onChange={handleChange}
        />
        <button type='submit' className='reset-password-button'>Reset Password</button>
        {error && <p className='error-message'>{error}</p>}
      </form>
         <button className='re-enter-password'><small><Link to='/forgot-password' className='re-enter-password-link'>Re-enter Email Address</Link></small></button>

         <h3 className='didnt-get-email'>Didn’t receive the email ? <Link className='resend-btn' to="/forgot-password" type='submit'>Resend </Link></h3>
    </div>
  )
}

export default ResetPassword
