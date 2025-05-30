import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Css/landingPage.css'
import { Link } from 'react-router-dom';
import VerificationSuccess from '../components/VerificationSuccess';

function LandingPage() {

  const serviceSection = React.useRef(null);

  const handleServiceScroll = () => {
    if(serviceSection.current){
      serviceSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (

    <>
    
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to PropMate</h2>
          <h1>
            Manage, Rent & Discover Properties;<br />
            The Smart, Paperless Way
          </h1>
          <p>PropMate connects landlords, tenants, and buyers on a single digital platform.</p>
          <Link to="/signup-role">
            <button>Get Started</button>
          </Link>
        </div>
      </section>

      {/* How it works section */}
      <section className="how-it-works section">
        <div className="how-it-works-container">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step highlight">
              <img src="Assets/Images/signup.jpeg" alt="Sign Up" />
              <p>Sign Up</p>
            </div>
            <span className="arrow">→</span>
            <div className="step">
              <img src="Assets/Images/properties.jpeg" alt="List or View Properties" />
              <p>List or View <br /> properties</p>
            </div>
            <span className="arrow">→</span>
            <div className="step">
              <img src="Assets/Images/online.jpeg" alt="Manage Online" />
              <p>Manage Online</p>
            </div>
            <span className="arrow">→</span>
            <div className='step'>
              <img src="Assets/Images/secure payment.jpeg" alt="Secure Payment" />
              <p>Secure Payment</p>
            </div>
          </div>
          <div className="ln-more-btn">
            <Link to="learn-more"><button>Learn More</button></Link>
          </div>
        </div>
      </section>

      {/* Why choose PropMate section */}
      <section className="why-choose">
        <div className="why-choose-container">
          <h2>Why Choose PropMate?</h2>
          <div className="reasons">
            <div className="reason-card">
              <img src="Assets/Images/paperless.jpeg" alt="100% Paperless" />
              <p>100% Paperless</p>
            </div>
            <div className="reason-card">
              <img src="Assets/Images/digital payment.jpeg" alt="Secure Payment" />
              <p>Secure Digital Payments</p>
            </div>
            <div className="reason-card">
              <img src="Assets/Images/Ai powered.jpeg" alt="AI Powered" />
              <p>AI-powered Recommendations</p>
            </div>
          </div>
          <div className="one-platform">
            <h3>All-In-One Platform</h3>
          </div>
        </div>
      </section>

      {/* Services We Offer section */}
      <section className="service-offer" ref={serviceSection} id='services'>
        <div className="service-offers-container">
          <h2>Services We Offer You</h2>
          <p>Our Core Services Include:</p>
          <div className="service-offer-container">
            <div className="service">
              <img src="Assets/Images/property listing.jpeg" alt="property listing" />
              <h4>Property Listing & Management</h4>
              <p>List, edit, and manage property details <br /> all in one place.</p>
            </div>
            <div className="service">
              <img src="Assets/Images/payment tracking.jpeg" alt="payment tracking" />
              <h4> Rent Payment Tracking</h4>
              <p>Track due payments and get <br />notified instantly</p>
            </div>
            <div className="service">
              <img src="Assets/Images/secure message.jpeg" alt="Secure Messaging" />
              <h4>Secure Messaging</h4>
              <p>Communicate safely with tenants, landlords, or agents.</p>
            </div>
          </div>
          {/* <div className="view-more-btn">
            <button>View More</button>
          </div> */}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="promo-contaianer">
        <div className="promo">
          <h2>List your property for FREE this month!</h2>
          <div className="promo-card">
            <div className="promo-text">
              <p>Limited offer for early birds.</p>
              <div className="promo-btn">
                <Link to="/signup-role"><button className="btn">Get Started</button></Link>
              </div>
            </div>
            <div className="promo-img">
              <img src="Assets/Images/ppp.jpeg" alt="Promo graphic" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimony section */}
      <section className="testimony-section-container">
        <section className="testimonies section">
          <h2>Our Happy Clients</h2>
          <div className="testimony-container">
            <div className="testimony">
              <p>"Propmate has completely transformed how I manage my properties. No more paperwork or chasing tenants for documents; everything is neatly organized and accessible. It feels like I hired a digital assistant!"</p>
              <div className="testimony-profile">
                <img src="Assets/Images/Mr. Tunde A..jpeg" alt="Mr. Tunde A." />
                <div className="testimony-profile-details">
                  <p><b>Mr. Tunde A.</b></p>
                  <p>Landlord, Abuja</p>
                </div>
              </div>
            </div>
            <div className="testimony">
              <p>"Finding and renting an apartment has never been this easy! I signed my lease online, got all the details I needed, and even tracked my rent payments through Propmate. Smooth experience from start to finish."</p>
              <div className="testimony-profile">
                <img src="Assets/Images/blessing.jpeg" alt="Blessing Eke." />
                <div className="testimony-profile-details">
                  <p><b>Blessing Eke.</b></p>
                  <p>Tenant, Uyo</p>
                </div>
              </div>
            </div>
            <div className="testimony">
              <p>"Propmate has completely transformed the way I manage multiple properties. I no longer juggle paperwork or endless calls — everything from tenant onboarding to rent tracking is streamlined and stress-free. It’s like having a digital assistant 24/7!"</p>
              <div className="testimony-profile">
                <img src="Assets/Images/okeke.jpeg" alt="Mrs. Chidimma Okeke." />
                <div className="testimony-profile-details">
                  <p><b>Mrs. Chidimma Okeke.</b></p>
                  <p>Property Manager, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* FOOTER */}
      <div className="landing-Pg-Footer">
        <footer className='landing-page-footer'>
          <div className="footer-main">
            <div className="footer-col footer-branding">
              <h3>PropMate</h3>
              <p>Propmate; Where property meets convenience, without the paperwork.</p>
            </div>
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/aboutus">About Us</Link></li>
                <li onClick={handleServiceScroll}><Link>Services</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Account</h4>
              <ul>
                <li><Link to="/signup-role">Sign Up</Link></li>
                <li><Link to='/signin'>Login</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Quick Link</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col" id='contact'>
              <div className="footer-col social">
                <h4>Connect with us</h4>
                <a href="#" className="whatsapp"><i className="fab fa-whatsapp"></i></a>
                <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" className="linkedin"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 PropMate. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default LandingPage