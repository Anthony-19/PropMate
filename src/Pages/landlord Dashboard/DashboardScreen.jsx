import React from 'react'
import { useOutletContext } from 'react-router-dom'

import NotificationIcon from '../../assets/images/notification-icon.svg'
import MessagesIcon from '../../assets/images/messages-badge-icon.svg'
import HeaderDashboard from './HeaderDashboard'
import TrackRentScreen from './TrackRentScreen'
import rentStatusIcon from '../../assets/images/rent-status-icon.svg'
import messageIcon from '../../assets/images/messages-badge-icon.svg'
import maintenanceIcon from '../../assets/images/maintenance-icon.svg'
// import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardScreen() {

  const {show, handleShow} = useOutletContext();

  return (
    <>
   
    {/* <div className="dashboard-content-container"> */}
      {/* Top Bar */}
      {/* <HeaderDashboard 
        show = {show}
        handleShow = {handleShow}
      /> */}

      {/* <TrackRentScreen /> */}

      {/* Summary Cards */}
      <div className="dashbord-summary-card-container">
        <div className="dashboard-summary-card">
          <h6 className='dashbord-current-rent-title'>
            <img src={rentStatusIcon} className='rent-status-icon' alt='rent-status-icon' />
            Current Rent
            </h6>
          <h3 className="text-success">₦850,000</h3>
          <p>Due in May 2026</p>
        </div>

        <div className="dashboard-summary-card">
          <h6 className='dashbord-rent-status-title'>
            <img src={rentStatusIcon} className='rent-status-icon' alt='rent-status-icon' />
            Rent Status
            </h6>
          <h3 className="text-success">Paid</h3>
          <p>Paid February 1, 2025</p>
        </div>

        <div className="dashboard-summary-card">
          <h6 className='dashbord-maintenance-request-title'>
            <img src={maintenanceIcon} className='dashboard-maintenance-icon' alt='dashboard-maintenance-icon' />
            Maintenance <br /> Requests
            </h6>
         <h3 className="text-success">3</h3>
          <p>1 pending, 2 in-progress</p>
        </div>

        <div className="dashboard-summary-card">
          <h6 className='dashboard-message-icon-title'>
            <img src={messageIcon} className='dashboard-message-icon' alt='dashboard-message-icon' />
            Messages 
            </h6>
            <h3 className="text-success">5</h3>
          <p>2 Unread Messages</p>
        </div>
      </div>

      <div className="property-notify-section">
        {/* All About Your Space */}
        <div className="property-card-wrapper">
          <h3 className="section-title">All About Your Space</h3>
          <div className="property-card">
            <div className="property-card-content">
              <div className="property-img-box">
                <img src="../Assets/Images/tenant house1.jpg" alt="Property" />
                <p className="property-title">2 Bedroom Flat @ 15, Governor’s Street, Admiralty, Iju-Ishaga</p>
              </div>
              <div className="property-info">
                <div className="property-details">
                  <div>
                    <span><strong>Landlord:</strong></span><br />
                    Mr. Zaccheus
                  </div>
                  <div>
                    <span><strong>Contact:</strong></span><br />
                    +234 000 000 0000
                  </div>
                  <div>
                    <span><strong>Lease Start Date:</strong></span><br />
                    February 1, 2025
                  </div>
                  <div>
                    <span><strong>Lease End Date:</strong></span><br />
                    March 1, 2026
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end">
              <a href="../pages/tenant_chat.html" className="btn btn-primary">Chat Landlord</a>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="notifications-card-wrapper">
          <h3 className="section-title">Recent Activities / Notifications</h3>
          <div className="notifications-card">
            <div className="notification-item">
              <div className="notif-icon"><i className="fas fa-screwdriver-wrench"></i></div>
              <div>
                <strong>Maintenance Request Update</strong><br />
                <small>Your AC repair request is now in progress</small><br />
                <small className="time">2 hours ago</small>
              </div>
            </div>

            <div className="notification-item">
              <div className="notif-icon"><i className="fas fa-envelope"></i></div>
              <div>
                <strong>New Message</strong><br />
                <small>New broadcast from your landlord</small>
              </div>
            </div>

            <div className="notification-item">
              <div className="notif-icon"><i className="fas fa-credit-card"></i></div>
              <div>
                <strong>Rent Payment Update</strong><br />
                <small>Your payment of ₦850,000 was successful.</small><br />
                <small className="time">February 1, 2025</small>
              </div>
            </div>

            <div className="notification-item">
              <div className="notif-icon"><i className="fas fa-file-contract"></i></div>
              <div>
                <strong>Lease Agreement Update</strong><br />
                <small>The lease document just got updated</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rent Chart */}
      <div className="chart-wrapper">
        <img src="../Assets/Images/chart.png" alt="Rent Chart" className="chart-image" />
        <div className="chart-overlay">
          <h6>What’s Rent Saying Today?</h6>
          <div className="chart-buttons">
            <button className="chart-btn active">Property Type</button>
            <button className="chart-btn">Location</button>
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <section className="explore-section">
        <div className="explore-header">
          <h3>Explore Other Listed Properties</h3>
          <div className="search-location">
            <input type="text" placeholder="Search location" />
            <button><i className="fas fa-search"></i></button>
          </div>
        </div>

        <div className="property-list">
          {/* Property Card 1 */}
          <div className="property-card-listing">
            <span className="vacancy-badge">1 Vacancy</span>
            <div className="image-wrapper">
              <img src="../Assets/Images/house4.png" alt="Property 1" />
              <div className="property-type">1 Bedroom Flat</div>
            </div>
            <div className="card-body">
              <h4>₦1,200,000 <span>per annum</span></h4>
              <p>15, Governor Street, Admiralty, Ikoyi</p>
              <button className="request-btn">Send Request</button>
              <div className="unit-info">
                <span>5 Units</span>
                <span>4 Occupied</span>
                <span>1 Vacant</span>
                <a href="#" className="see-details">See Details...</a>
              </div>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="property-card-listing">
            <span className="vacancy-badge">1 Vacancy</span>
            <div className="image-wrapper">
              <img src="../Assets/Images/tenant  house3.png" alt="Property 2" />
              <div className="property-type">2 Bedroom Flat</div>
            </div>
            <div className="card-body">
              <h4>₦850,000 <span>per annum</span></h4>
              <p>13, Adeoye Adeyemi Street, Maryland</p>
              <button className="request-btn">Send Request</button>
              <div className="unit-info">
                <span>5 Units</span>
                <span>4 Occupied</span>
                <span>1 Vacant</span>
                <a href="#" className="see-details">See Details...</a>
              </div>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="property-card-listing">
            <span className="vacancy-badge">2 Vacancy</span>
            <div className="image-wrapper">
              <img src="../Assets/Images/house5.png" alt="Property 3" />
              <div className="property-type">2 & 3 Bedroom Flat</div>
            </div>
            <div className="card-body">
              <h4>₦850,000 & ₦1,000,000 <span>per annum</span></h4>
              <p>18, Adeoye Adeyemi Street, Maryland</p>
              <button className="request-btn">Send Request</button>
              <div className="unit-info">
                <span>4 Units</span>
                <span>2 Occupied</span>
                <span>2 Vacant</span>
                <a href="#" className="see-details">See Details...</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* </div> */}
     </>
  );
};

export default DashboardScreen
