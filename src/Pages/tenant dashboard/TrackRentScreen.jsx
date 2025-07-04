import React from 'react'
import { useLocation } from 'react-router-dom';
import MessagesIcon from '../../assets/images/messages-badge-icon.svg'
import NotificationIcon from '../../assets/images/notification-icon.svg'
function TrackRentScreen() {
  const userName = localStorage.getItem('userName');
  // const role = localStorage.getItem('role');
  const location = useLocation();
  let text = '';
  if (location.pathname === '/tenant-dashboard') {
    text = 'Track your rent and maintenance requests';
  } else if (location.pathname.includes('/maintenance-tenant-screen')) {
    text = 'Easily report and track maintenance issues, and communicate directly with your landlord.';
  } else {
    text = 'Welcome to the dashboard';
  }
  return (
    <>
      <section className="dashboard-intro">
              <div className='track-rent-container'>
                <h3 className='track-rent-name'>Hello, {userName}!</h3>
                <p className="track-rent-text">{text}</p>
              </div>
              <div className='track-rent-left'>
                <button className="btn-request" id="openRequestModal">
                  <i className="fas fa-plus"></i> New Maintenance Request
                </button>
                <img src={MessagesIcon} alt="message-icon" className='message-icon' />
                <img src={NotificationIcon} alt="notification-icon" className='notification-icon' />
              </div>
            </section>
    </>
  )
}

export default TrackRentScreen
