import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';

import "../Css/propmateSteps.css"
function PropmateSteps() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup-role')
  }
  return (
    <>
      <main className="learn-more-card">
        <div className="left">
          <div className="block">
            <h2>Sign Up</h2>
            <p>
              Get started by creating your account. Whether you're a landlord looking to list your property or a tenant searching for a new place, simply choose your preferred role and fill in your details. It's quick, easy, and sets you on the path to hassle-free property management.
            </p>
          </div>

          <div className="block">
            <h2>List or view Properties</h2>
            <p>
              Landlords can upload available lands and properties along with details such as location, features, and rent amount. Tenants can browse the listings to find a property that fits their needs. All listings are up-to-date and clearly priced for transparency.
            </p>
          </div>

          <div className="block">
            <h2>Manage Online</h2>
            <p>
              Say goodbye to paperwork and long phone calls. Our platform helps you monitor and manage your properties with ease. Landlords can track rent payments, receive alerts on due dates, and communicate directly with tenants for updates or property issues. Tenants can also use the app to report maintenance issues or contact landlords directly, bridging the communication gap.
            </p>
          </div>

          <div className="block">
            <h2>Secure Payments</h2>
            <p>
              Make and receive payments safely and conveniently right within the app. Our platform ensures all transactions are protected and recorded (no more missing receipts), providing a seamless payment experience for both landlords and tenants. No need to leave the app—just tap, pay, and go.
            </p>
          </div>
        </div>

        <div className="right">
          <img
            src="../Assets/Images/learn more image.jpg"
            alt="Professional man reading document"
          />
          <button className="start-btn" onClick={handleClick}>Get Started</button>
        </div>
      </main>
    </>
  );
}



export default PropmateSteps
