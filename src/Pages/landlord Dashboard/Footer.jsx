import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
      <div className="landing-Pg-Footer" style={{margin: '0rem', padding: "0rem"}}>
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
                <li><Link>Services</Link></li>
                {/* <li onClick={handleServiceScroll}><Link>Services</Link></li> */}
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
  )
}

export default Footer
