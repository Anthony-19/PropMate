import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/signUpRole.css'; // Adjust path if needed

function RoleSelection() {
  const navigate = useNavigate();

  const selectRole = (role) => {
    // You can save the selected role in state, context, or localStorage
    console.log('Selected role:', role);
    // For example: localStorage.setItem('selectedRole', role);
    localStorage.setItem('selectedRole', role)
    // navigate('/signup', {state: role});
    navigate('/signup')
  };

  return (
    <>

      <main className='role-selection-container'>
        <div className="role-selection-card">
          <h2>How will you like to use PropMate?</h2>

          <button className="role-btn" onClick={() => selectRole('landlord')}>
            As Landlord
          </button>
          <p className="desc">
           Easily onboard and manage tenants, track rent payments in real time, get notified of due rent, and respond to maintenance requests with ease.
          </p>

          <button className="role-btn" onClick={() => selectRole('tenant')}>
            As Tenant
          </button>
          <p className="desc">
             Access lease agreement, submit maintenance requests, stay connected with your landlord, get rent reminders and track your full payment history anytime.
          </p>

          <a href="/signin" className="signin-link">
            Have an account? <span>Sign in</span>
          </a>
        </div>
      </main>
    </>
  );
}

export default RoleSelection;
