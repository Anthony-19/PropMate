import React from 'react'
import ChatLandLord from '../assets/images/Chat Landlord.svg'
import TrackRent from '../assets/images/Track Rent.svg'
import SubmitMaintenance from '../assets/images/submit maintenance.svg'

function Walkthrough() {
  return (
    <div className='walkthrough-container'>
      <section className='walkthrouh-card'>
        <div className='card-item'> 
            <img src={TrackRent} alt="" className='card-img' />
            <h4 className='card-description'>Track Rent <br /> Payments</h4>
        </div>

         <div className='card-item'> 
            <img src={SubmitMaintenance} alt="" className='card-img' />
            <h4 className='card-description'>Submit Maintenance <br />
            Requests</h4>
        </div>

         <div className='card-item'> 
            <img src={ChatLandLord} alt="" className='card-img' />
            <h4 className='card-description'>Chat with <br />Landlord</h4>
        </div>
      </section>
      <h4 className='notification-title'>How would you like to be notified about rent due dates and messages from your landlord?</h4>

      <section className='notification-container'>
        <div className='notification-options'>
            <div className='notification-item'>
              <input type="checkbox" id='checked-email'/>
              <label htmlFor="checked-email">Email</label>
            </div>
            <div className='notification-item'>
              <input type="checkbox" id='checked-sms'/>
              <label htmlFor="checked-sms">SMS</label>
            </div>
            <div className='notification-item'>
              <input type="checkbox" id='checked-inApp'/>
              <label htmlFor="checked-inApp">In-App Message only </label>
            </div>
        </div>
        <p className='select-one'>select at least one</p>
      </section>
    </div>
  )
}

export default Walkthrough
