import React from 'react'
import CompletedScreenIcon from '../assets/images/completed-screen-icon.svg'
import HeaderInvited from './HeaderInvited'
import '../Css/completedScreen.css'

function CompletedScreen() {
  return (
    <>
      <HeaderInvited />
    <div className='completed-screen-container'>
      <div className='completed-screen-content'>
        <img src={CompletedScreenIcon} alt="completed-screen" className='completed-screen-img'/>
        <h3 className='completed-screen-title'>Completed</h3>
      </div>
      <button className='p-dashboard'>Proceed to Dashboard</button>
    </div>
    </>
  )
}

export default CompletedScreen
