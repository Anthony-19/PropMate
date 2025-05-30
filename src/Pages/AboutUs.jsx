import React from 'react'
import { useLocation } from 'react-router-dom';
import '../Css/AboutUs.css';

function AboutUs() {

    // const Location = useLocation()
    // const isAboutUs = {
    //     width:
    //     Location.pathname === '/aboutus' ? 'about-us-background' : ''};
  return (
    <>
      <div className="hero-container " id='about-us'>
        <div className="hero-text">
          <h1>About Us</h1>
          <p>
            At PropMate, we understand how stressful property management can be, from keeping track of rent payments, 
            handling endless paperwork, to searching for trustworthy tenants or the right place to call home. That's why we built a solution with you in mind.
          </p>
          <br />
          <p>
            PropMate is a digital property management platform designed to make things simpler, smarter, and entirely paperless. 
            Whether you're a landlord trying to stay organized, a tenant navigating your next move, or a buyer exploring investment opportunities, 
            PropMate brings everything you need into one seamless space.
          </p>
          <br />
          <p>
            We're not just building a platform, we're building peace of mind. 
            With secure digital tools, real-time communication, and personalized property recommendations, 
            we're here to support you every step of the way.
          </p>
          <br />
          <p>
            Property should be easy; and with PropMate, it finally is.
          </p>
        </div>

        <div className="hero-image">
          <img src="../Assets/Images/about us image.jpg" alt="Building" />
        </div>
      </div>
    </>
  );
};

export default AboutUs

