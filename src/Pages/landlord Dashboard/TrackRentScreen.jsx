import React from 'react'
import { useLocation } from 'react-router-dom'
import MessagesIcon from '../../assets/images/messages-badge-icon.svg'
import NotificationIcon from '../../assets/images/notification-icon.svg'
function TrackRentScreen() {
  const location = useLocation()
  let text = ""
  if (location.pathname.includes('properties')) {
    text = "View and manage all your listed properties. "
  }
  else{
    text = "Explore information and activity about your property"
  }
  return (
    <>
      <section className="dashboard-intro">
              <div className='track-rent-container'>
                <h3 className='track-rent-name'>Hello, John!</h3>
                <p className="track-rent-text">{text}</p>
              </div>
              <div className='track-rent-left'>
                <button className="btn-request" id="openRequestModal">
                  <i className="fas fa-plus"></i>Add Property
                </button>
                <img src={MessagesIcon} alt="message-icon" className='message-icon' />
                <img src={NotificationIcon} alt="notification-icon" className='notification-icon' />
              </div>
            </section>
    </>
  )
}

export default TrackRentScreen
