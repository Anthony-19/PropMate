import React from 'react'
import HeaderInvited from './HeaderInvited'
import OnboardingLandlord from './OnboardingLandlord'

import { useLocation, useNavigate, Route, Routes } from 'react-router-dom'
import './Landlord.css'

function LandlordWelcome() {
  const navigate = useNavigate()
  const location = useLocation()
  const handleClick = () => {
    navigate('onboarding-landlord')
  }

    const WelcomeContent = () => (
    <div className='landlord-welcome-container'>
      <h2 className='welcome-title'>Welcome John</h2>
      <h2 className='welcome-text'>
        Let’s set up your profile so you can start managing your properties with ease.
      </h2>
      <button className='welcome-get-started-btn' onClick={handleClick}>
        Get Started
      </button>
    </div>
  )
  return (
    
    <>
  
      {location.pathname === '/landlord-welcome' && <HeaderInvited />}
      <Routes> 
        <Route index element={<WelcomeContent />}  />
        <Route path='onboarding-landlord' element={<OnboardingLandlord/>} />
      </Routes>
    </>
    
  )
}

export default LandlordWelcome
