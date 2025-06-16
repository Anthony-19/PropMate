import React from 'react'
import MessagesIcon from '../../assets/images/messages-badge-icon.svg'
import NotificationIcon from '../../assets/images/notification-icon.svg'
function TrackRentScreen() {
  return (
    <>
      <section className="dashboard-intro">
              <div className='track-rent-container'>
                <h3 className='track-rent-name'>Hello, John!</h3>
                <p className="track-rent-text">Track your rent and maintenance requests</p>
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
