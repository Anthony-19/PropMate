import React from 'react'
import { Link } from 'react-router-dom';

function NavigationLinks() {
  // const serviceSection = React.useRef(null);
   const handleScroll = () => {
    const serviceSection = document.getElementById('services');
    if(serviceSection){
      serviceSection.scrollIntoView({behavior: 'smooth'});
    }
  };

  const contactScroll = () => {
    const contactSection = document.getElementById('contact');
    if(contactSection){
      contactSection.scrollIntoView({behavior: 'smooth'});
    }
  }
  // console.log(serviceSection);
  return (
    <div className='navigation-container'>
      <ul className="navigation-links">
            <li className="active home nav-item">
                <Link to="" >Home</Link>
                </li>
            <li className="services nav-item" onClick={handleScroll}>Services</li>
            <li className="about-us nav-item"><Link to="/aboutus">About Us</Link></li>
            <li className="contact nav-item" onClick={contactScroll}><Link>Contact</Link></li>
          </ul>
    </div>
  )
}

export default NavigationLinks
