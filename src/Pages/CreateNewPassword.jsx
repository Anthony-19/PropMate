import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import '../Assets/Styles/global.css';
import '../Css/createNewPassword.css'; 
import OtpVerification from '../components/OtpVerification';

function CreateNewPassword() {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || ''; 
    const otp = location.state?.otp || ''; 
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    localStorage.setItem('email', email); // Store email in local storage
    localStorage.setItem('otp', otp); // Store OTP in local storage

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (newPassword !== repeatPassword) {
      setMessage('Passwords do not match');
      return;
    }

    if (newPassword.length < 8) {
      setMessage('Password must be exactly 8 characters');
      return;
    }

    // Add password update logic here (API call etc.)
    if (newPassword === repeatPassword) {
        setIsSuccess(true);
        try {
            const response = await fetch('https://pms-bd.onrender.com//api/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp, newPassword }),
            });

            if (response.ok) {
               const data = await response.json();
               alert('Password updated successfully');
               if(data.role === 'landlord'){
                window.location.href = '/landlord-dashboard'; //Come back and change this later
                navigate('/otp-verification');
               }
               else{
                setMessage('Please verify your OTP.');
               }
            }
            //  {isSuccess && <OtpVerification />}
           
        } 
        catch (error) {
            setMessage(error.message);
            setMessage('An error occurred while updating the password.');
            console.error('Error:', error);
        }
  };
    };

  return (
    <div>

      <main className="create-new-password-page">
        <section className="createnewpassword-box">
          <h2 className='create-new-password-title'>Create a new password</h2>

          <form id="createnewpassword-form" onSubmit={handleSubmit}>
            <label htmlFor="new-pasw">New password</label>
            <input
              type="password"
              id="new-pasw"
              name="new-pasw"
              placeholder="enter your password"
              minLength={8}
              // maxLength={8}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <p>must be at least 8 characters</p>

            <label htmlFor="rptNew-ps">Repeat your new password</label>
            <input
              type="password"
              id="rptNew-ps"
              name="rptNew-ps"
              placeholder="enter your password"
              minLength={8}
              // maxLength={8}
              required
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />

            <button type="submit" className="btn-primary">Submit</button>
          </form>

          {/* Form message */}
          {message && <div className="form-message" id="reset-msg" style={{color: 'red'}}>{message}</div>}
        </section>
      </main>
    {/* {isSuccess && <OtpVerification />} */}
    </div>
  );
}

export default CreateNewPassword;
