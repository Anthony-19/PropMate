import React from "react";

import NotificationIcon from "../../assets/images/notification-icon.svg";
import MessagesIcon from "../../assets/images/messages-badge-icon.svg";
import HeaderDashboard from "./HeaderDashboard";
import TrackRentScreen from "./TrackRentScreen";
import rentStatusIcon from "../../assets/images/rent-status-icon.svg";
import messageIcon from "../../assets/images/messages-badge-icon.svg";
import maintenanceIcon from "../../assets/images/maintenance-icon.svg";
import spaceHomeIcon from "../../assets/images/space-home-image.svg";
import rentalIncomeIcon from '../../assets/images/rental-income-icon.svg'
import house1Image from "../../assets/images/house1.png";
import house2Image from "../../assets/images/house2.png";
import house3Image from "../../assets/images/house3.png";
import house4Image from "../../assets/images/house3.png";
// import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardScreen() {
  const propertyInfo = {
    title: "2 Bedroom Flat @ 15, Governor’s Street, Admiralty, Iju-Ishaga",
    img: spaceHomeIcon,
    details: [
      { label: "Landlord", value: "Mr. Zaccheus" },
      { label: "Contact", value: "+234 000 000 0000" },
      { label: "Lease Start Date", value: "February 1, 2025" },
      { label: "Lease End Date", value: "March 1, 2026" },
    ],
  };

  const notifications = [
    {
      icon: maintenanceIcon,
      title: "Maintenance Request Update",
      message: "Your AC repair request is now in progress",
      time: "2 hours ago",
    },
    {
      icon: messageIcon,
      title: "New Message",
      message: "New broadcast from your landlord",
    },
    {
      icon: rentStatusIcon,
      title: "Rent Payment Update",
      message: "Your payment of ₦850,000 was successful.",
      time: "February 1, 2025",
    },
    {
      icon: rentalIncomeIcon,
      title: "Lease Agreement Update",
      message: "The lease document just got updated",
    },
  ];

  const properties = [
    {
      id: 1,
      vacancy: "1 Vacancy",
      image: house1Image,
      alt: "Property 1",
      type: "1 Bedroom Flat",
      price: "₦1,200,000",
      address: "15, Governor Street, Admiralty, Ikoyi",
      units: "5 Units",
      occupied: "4 Occupied",
      vacant: "1 Vacant",
    },
    {
      id: 2,
      vacancy: "1 Vacancy",
      image: house2Image,
      alt: "Property 2",
      type: "2 Bedroom Flat",
      price: "₦850,000",
      address: "13, Adeoye Adeyemi Street, Maryland",
      units: "5 Units",
      occupied: "4 Occupied",
      vacant: "1 Vacant",
    },
    {
      id: 3,
      vacancy: "2 Vacancy",
      image: house3Image,
      alt: "Property 3",
      type: "2 & 3 Bedroom Flat",
      price: "₦850,000 & ₦1,000,000",
      address: "18, Adeoye Adeyemi Street, Maryland",
      units: "4 Units",
      occupied: "2 Occupied",
      vacant: "2 Vacant",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      {/* <HeaderDashboard show={props.show} handleShow={props.handleShow} /> */}

      <TrackRentScreen />

      {/* Summary Cards */}
      <div className="dashbord-summary-card-container">
        <div className="dashboard-summary-card">
          <h6 className="dashbord-current-rent-title">
            <img
              src={rentStatusIcon}
              className="rent-status-icon"
              alt="rent-status-icon"
            />
            Current Rent
          </h6>
          <h3 className="text-success">₦850,000</h3>
          <p>Due in May 2026</p>
        </div>

        <div className="dashboard-summary-card">
          <h6 className="dashbord-rent-status-title">
            <img
              src={rentStatusIcon}
              className="rent-status-icon"
              alt="rent-status-icon"
            />
            Rent Status
          </h6>
          <h3 className="text-success">Paid</h3>
          <p>Paid February 1, 2025</p>
        </div>

        <div className="dashboard-summary-card">
          <h6 className="dashbord-maintenance-request-title">
            <img
              src={maintenanceIcon}
              className="dashboard-maintenance-icon"
              alt="dashboard-maintenance-icon"
            />
            Maintenance <br /> Requests
          </h6>
          <h3 className="text-success">3</h3>
          <p>1 pending, 2 in-progress</p>
        </div>

        <div className="dashboard-summary-card">
          <h6 className="dashboard-message-icon-title">
            <img
              src={messageIcon}
              className="dashboard-message-icon"
              alt="dashboard-message-icon"
            />
            Messages
          </h6>
          <h3 className="text-success">5</h3>
          <p>2 Unread Messages</p>
        </div>
      </div>

      <div className="tenant-dashboard-property-notify-section">
        {/* Property Info */}
        <div className="property-card-wrapper">
          <h3 className="section-title">All About Your Space</h3>
          <div className="property-card">
            <div className="property-card-content">
              <div className="property-img-box">
                <img src={propertyInfo.img} alt="Property" />
                <p className="property-title">{propertyInfo.title}</p>
              </div>
              <div className="property-info">
                <div className="property-details">
                  {propertyInfo.details.map((item, index) => (
                    <div key={index}>
                      <p className="property-label">
                        {item.label}:
                      </p>
                      <p className="property-value">{item.value}</p>
                    </div>
                  ))}
                </div>
      
              <button href="../pages/tenant_chat.html" className="chat-landlord-btn">
                Chat Landlord
              </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="tenant-dashboard-notifications-card-wrapper">
          <h3 className="section-title">Recent Activities / Notifications</h3>
          <div className="notifications-card">
            {notifications.map((notif, index) => (
              <div key={index} className="notification-item">
                <div className="notif-icon">
                  <img className={notif.icon} src={notif.icon} alt={notif.icon}/>
                </div>
                <div className="notification-content-container">
                  <p className="notification-title">{notif.title}</p>
                
                  <p className="notification-message">{notif.message}</p>
                  {notif.time && (
                    <>
                     
                      <p className="notification-time">{notif.time}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Property listing */}
      <section className="tenant-dashboeard-explore-section">
        <div className="explore-header">
          <h3>Explore Other Listed Properties</h3>
          <div className="search-location">
            <input type="text" placeholder="Search location" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="property-list">
          {properties.map((property) => (
            <div key={property.id} className="property-card-listing">
              
              <div className="image-wrapper">
                <img src={property.image} alt={property.alt} />
                <div className="property-type">{property.type}</div>
                <span className="vacancy-badge">{property.vacancy}</span>
              </div>
              <div className="card-body">
                <h4>
                  {property.price} <span>per annum</span>
                </h4>
                <p>{property.address}</p>
                <button className="request-btn">Send Request</button>
                <div className="unit-info-container">
                  <div className="unit-info" >
                    <span>{property.units}</span>
                    <span>{property.occupied}</span>
                    <span>{property.vacant}</span>
                  </div>
                  <div>
                    <a href="#" className="see-details">
                      See Details...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rent Chart */}
      {/* <div className="chart-wrapper">
        <img
          src="../Assets/Images/chart.png"
          alt="Rent Chart"
          className="chart-image"
        />
        <div className="chart-overlay">
          <h6>What’s Rent Saying Today?</h6>
          <div className="chart-buttons">
            <button className="chart-btn active">Property Type</button>
            <button className="chart-btn">Location</button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default DashboardScreen;
