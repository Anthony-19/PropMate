import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import '../Assets/Styles/global.css';
import '../Css/createNewPassword.css'; 
import eyeIcon from '../assets/images/eye-icon.svg'
import eyeHidden from '../assets/images/eye-hidden.png'
import OtpVerification from '../components/OtpVerification';

function CreateNewPassword() {
    const navigate = useNavigate();
    const location = useLocation();
    // const email = location.state?.email || ''; 

        const [flip, setFlip] = useState(true);
        const [showRepeatPassword, setShowRepeatPassword] = useState(true)

    const handleFlip = (e) => {
      const flipItem = e.currentTarget.dataset.toggle;
      if(flipItem === 'password'){
          setFlip(prevFlip => !prevFlip)
        console.log(e)
      }
      if(flipItem === 'repeat'){
          setShowRepeatPassword(prevFlip => !prevFlip)
        console.log(e)
      }
      
    }
    
    // const otp = location.state?.otp || ''; 
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    // localStorage.setItem('email', email); // Store email in local storage
    const storedEmail = localStorage.getItem('email')
    const storedOtp = localStorage.getItem('otp'); // Store OTP in local storage

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
            const response = await fetch('https://pms-bd.onrender.com/api/auth/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: storedEmail, otp: storedOtp, newPassword: newPassword }),
            });
            console.log("Email:", storedEmail);
            console.log("OTP:", storedOtp);

            if (response.ok) {
               const data = await response.json();
               
               if(data){
                alert('Password updated successfully');
                console.log(data)
                // window.location.href = '/landlord-dashboard'; //Come back and change this later
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
              <div id='rtp-input-container'>
                <input
                  type={flip === true ? "password": "text"}
                  id="new-pasw"
                  name="new-pasw"
                  placeholder="enter your password"
                  minLength={8}
                  // maxLength={8}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              
                {flip === true ? <img src={eyeIcon} alt="visibility" id='visibility' onClick={handleFlip} data-toggle="password"/> :
                <img src={eyeHidden} alt="visibility" id='visibility' className='eye-hidden-confirm eye-icons' onClick={handleFlip} data-toggle="password"/>
                }
              </div>
              <p>must be at least 8 characters</p>
            

            
      
              <label htmlFor="rptNew-ps">Repeat your new password</label>
              <div id='rtp-input-containers'>
                <input
                  type={showRepeatPassword === true ? "password": "text"}
                  id="rptNew-ps"
                  name="rptNew-ps"
                  placeholder="enter your password"
                  minLength={8}
                  // maxLength={8}
                  required
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                 {showRepeatPassword === true ? <img src={eyeIcon} alt="visibility" className='confirm-pss-visibility' onClick={handleFlip} data-toggle="repeat"/> : 
                 <img src={eyeHidden} alt="visibility" className='confirm-pss-visibility eye-hidden-confirm' onClick={handleFlip} data-toggle="repeat"/> 
                 }
              </div>
          

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
