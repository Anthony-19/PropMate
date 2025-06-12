import React from 'react'

import NotificationIcon from '../../assets/images/notification-icon.svg'
import MessagesIcon from '../../assets/images/messages-badge-icon.svg'
import HeaderDashboard from './HeaderDashboard'
// import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardScreen(props) {

  return (
    <div className="dashboard-content-container">
      {/* Top Bar */}
      <HeaderDashboard 
        show = {props.show}
        handleShow = {props.handleShow}
      />
      <section className="dashboard-intro">
        <div className='track-rent-container'>
          <h3 className='track-rent-name'>Hello, John!</h3>
          <p className="track-rent-text">Track your rent and maintenance requests</p>
        </div>
        <div>
          <button className="btn-request" id="openRequestModal">
            <i className="fas fa-plus"></i> New Maintenance Request
          </button>
          <img src={MessagesIcon} alt="message-icon" className='message-icon' />
          <img src={NotificationIcon} alt="notification-icon" className='notification-icon' />
        </div>
      </section>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <h6><i className="fas fa-home icon"></i>Current Rent</h6>
          <b><p className="text-success">₦850,000</p></b>
          <p>Due in May 2026</p>
        </div>

        <div className="summary-card">
          <h6><i className="fas fa-check-circle icon"></i>Status</h6>
          <b><p className="text-success">Paid</p></b>
          <p>Paid February 1, 2025</p>
        </div>

        <div className="summary-card">
          <h6><i className="fas fa-wrench icon"></i>Maintenance</h6>
          <b><p className="text-success">3 Requests</p></b>
          <p>1 pending, 2 in-progress</p>
        </div>

        <div className="summary-card">
          <h6><i className="fas fa-envelope icon"></i>Messages 5</h6>
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
    </div>
  );
};

export default DashboardScreen
