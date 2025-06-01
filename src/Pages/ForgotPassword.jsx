import { useState } from 'react';
import '../Css/forgetPassword.css';
import { useNavigate } from 'react-router-dom';


export default function ForgotPassword() {

 
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return emailPattern.test(email);
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    setError('');
    return true
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can replace this with your API call logic
    console.log("Submitted email:", email);
    if(!validateEmail(email)) return
    try {
        const response = await fetch('https://pms-bd.onrender.com/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
        });

        if(response.ok){
            const data = await response.json();
            console.log(data);
            localStorage.setItem('email', email)
            navigate('/reset-password');
            // navigate('/reset-password' , {state: {email}});
        }
        else{
            const errorData = await response.json();
            console.error('Error:', errorData);
            setError(errorData.message || 'An error occurred while processing your request.');
        }
        
    }
    catch (err) {
        setError('An error occurred while processing your request.');
    }
   
  };

  return (
    <div className="forgot-password-page">
      <main className="forgot-password-page-main-content">
        <section className="forgot-password-box">
          <h2>Forgot password</h2>
          <p className="instruction">
            No worries !!<br />
            Enter your email address below and <br />
            we'll send you a link to reset your password
          </p>

          <form id="forgot-password-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="btn-primary">Continue</button>
          </form>
        </section>
      </main>
    </div>
  );
}
