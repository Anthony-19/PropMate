import React, { useState } from 'react';
import { useNavigate, useLocation, Link} from 'react-router-dom';
import '../Css/signUp.css';
import "../Css/confirmEmail.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';

const Signup = () => {
    const navigate = useNavigate()

    // const location = useLocation();
    // const selectedRole = location.state?.role || 'tenant'; 
    const role = localStorage.getItem('selectedRole')
    // console.log('Selected Role', selectedRole);
    const handleSignInClick = (e) => {
        e.preventDefault(); 
         navigate('/signin'); 
      };



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    // role: selectedRole,
    role: role,
    phone: "",
    termsAccepted: false,
  });
  console.log('Form Data:', formData.role);

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  
  const [otpError, setOtpError] = useState("")

  const handleOtpChange = (e) => {
    const inputValue = e.target.value.trim();
    if(isNaN(inputValue)){
      setOtpError('Please enter a valid numeric OTP');
      return;
    }; // Prevent non-numeric input


    setOtp(inputValue);
    setOtpError(''); // Clear error if input is valid
  }
  // const handleInput = (value, index) => {
  //     setOtp((prev) => {
  //       const newOtp = [...prev];
  //       newOtp[index] = value

  //   const nextInput = document.querySelectorAll('.otp-input')[index + 1];
  //   // if (value.length > 1) return;
  //   // if(isNaN(value)) return; // Prevent non-numeric input
  //   if (nextInput && value) nextInput.focus();


  //   // Check if all digits are entered
  //   if (newOtp.every((digit) => digit !== '')) {
  //     // All digits entered, trigger verification
  //     handleVerifyOtp(new Event('submit')); // fake submit event
  //     console.log('All OTP digits entered:', newOtp.join(''));
  //   }
  //       return newOtp; 
  //     })
  // }
   const handleVerifyOtp = async (e) => {
      e.preventDefault();
      // const otps = otp.join(''); 
      try{
        const response = await fetch('https://pms-bd.onrender.com/api/auth/verify-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: formData.email, otp}),
        })

        if(response.ok){
          const data = await response.json();
          setOtpSent(true);
          setErrors('')
          console.log('OTP verified successfully:', data);
          navigate("/otp-verification"); // Redirect to OTP verification page
        }
        else{
          throw new Error('OTP verification failed');
        }
      }

      catch (error) {
        console.error('Error verifying OTP:', error);
        setOtpError('Invalid OTP. Please try again.' || error.message);
      }

  }
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be greater than 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      if (validate()) {
      console.log('Form submitted', formData);
      const response = await fetch('https://pms-bd.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: (JSON.stringify({name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          phone: formData.phone
          }))
      });

      const data = await response.json();
        if(response.ok) {
          console.log('Registration successful:',);
          setOtpSent(true);
          
          // Redirect to sign-in page or show success message
          // navigate('/signin');
        }
        else{
          throw new Error(data.message || 'Registration failed');
        }
    }
    }
    catch (error) {
      console.error('Error submitting form:', error);
        setErrors({ submit: error.message || 'User Already Exist' });
      // setErrors({ submit: 'User Already Exist' });
      // setErrors({ submit: error });
    }
  };

  const handleGoogle = async () => {
     if (role) {
    // Redirect user to backend endpoint which starts the OAuth flow
    window.location.href = `https://pms-bd.onrender.com/api/auth/google?role=${role}`;
  } else {
    alert("Please select a role first.");
   
  }
}

 
  return (


    <>
    <div className="signup-container">
        <main>
          <div className="card">
            <h2>Let's get you onboard. It's easy</h2>
           {errors.submit && <p className="error-message">{errors.submit}</p>}
            <form className="signup-form" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <div className="placeholder-icon">
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'input-error' : ''}
                    required
                  />
                </div>
                {errors.name && <small className="error-message">{errors.name}</small>}
              </div>
              {/* Email */}
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <div className="placeholder-icon">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                    required
                  />
                </div>
                {errors.email && <small className="error-message">{errors.email}</small>}
              </div>
              {/* Password */}
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="placeholder-icon password-wrapper">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type={showPassword.password ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter your Password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength="8"
                    // maxLength="8"
                    className={errors.password ? 'input-error' : ''}
                    required
                  />
                  <span className="toggle" onClick={() => toggleVisibility('password')} id='password-icon'>
                    <i className={`fa-regular ${showPassword.password ? 'fa-eye-slash' : 'fa-eye'}`} ></i>
                  </span>
                </div>
                {errors.password && <small className="error-message">{errors.password}</small>}
              </div>
              {/* Confirm Password */}
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="placeholder-icon password-wrapper">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type={showPassword.confirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    minLength="8"
                    // maxLength="8"
                    className={errors.confirmPassword ? 'input-error' : ''}
                    required
                  />
                  <span className="toggle" onClick={() => toggleVisibility('confirmPassword')} id='confirm-password-icon'>
                    <i className={`fa-regular ${showPassword.confirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </span>
                </div>
                {errors.confirmPassword && <small className="error-message">{errors.confirmPassword}</small>}
              </div>
              {/* Terms */}
              <div className="checked-container">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                  />
                  <label htmlFor="termsAccepted">
                    By signing up, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                  </label>
                </div>
                {errors.termsAccepted && <small className="error-message" id='error-message'>{errors.termsAccepted}</small>}
              </div>
              <button type="submit" className="signup-btn" id='signup-btn'>Sign up</button>
              <div className="divider"><span className='divider-span'></span> <p>or</p> <span className='.divider-span'></span></div>
              <button type="button" className="google-btn" onClick={handleGoogle}>
                <img src="/public/Assets/Images/google-icon.svg" alt=""  id='google-icon'/>
                Sign Up with Google
              </button>
              <p><a href="#" className="signin-link">Have an account? <span onClick={handleSignInClick}>Sign in</span></a></p>
            </form>
          </div>
        </main>
      </div>  

      {
      otpSent === true && <div className="modal-overlay">
      <div className="modal-wrapper">
        <h1 className="confirm-header">CONFIRM YOUR EMAIL</h1>

        <div className="modal">
          <img src="/Assets/Images/securityicon.jpg" alt="Security Icon" className="security-image" />

          <p className="email-info">
            We’ve sent a code to <span id="user-email">{formData.email}</span>
          </p>

          <p className="enter-code">
            <strong>Enter the verification code here</strong>
          </p>

          {/* <p className="expire-msg">
            This code will expire in <span id="countdown">02:00s</span>
          </p> */}

          <div className="otp-inputs">
          <input type="text" 
                      maxLength={6}
                      onChange={handleOtpChange}
                      value={otp}
                      className='otp-input' />
          </div>
          {otpError && <p className="error-message">{otpError}</p>}
          <button className="verify-btn" onClick={handleVerifyOtp}>Verify</button>

          <p className="change-email">
            Not my Email Address? <Link to="/signup-role">Change</Link>
          </p>

          <p className="resend">
            Didn’t receive the OTP ? <Link to="/forgot-password">Resend</Link>
          </p>
        </div>
      </div>
    </div>
      
    }
     
    </>
  );
};

export default Signup;
