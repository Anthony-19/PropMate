import React from "react";
import { useOutletContext } from "react-router-dom";

import NotificationIcon from "../../assets/images/notification-icon.svg";
import MessagesIcon from "../../assets/images/messages-badge-icon.svg";
import HeaderDashboard from "./HeaderDashboard";
import TrackRentScreen from "./TrackRentScreen";
import rentStatusIcon from "../../assets/images/rent-status-icon.svg";
import messageIcon from "../../assets/images/messages-badge-icon.svg";
import maintenanceIcon from "../../assets/images/maintenance-icon.svg";
import tenantIcon from "../../assets/images/tenants-icon.svg";
import propertyIcon from "../../assets/images/property-icon.svg";
import rentalIncome from "../../assets/images/rental-income-icon.svg";
import overDuePaymentIcon from "../../assets/images/overdue-payment-icon.svg";

import house1Image from "../../assets/images/house1.png";
import house2Image from "../../assets/images/house2.png";
import house3Image from "../../assets/images/house3.png";
// import house4Image from "../../assets/images/house3.png";
// import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardScreen() {
  const { show, handleShow } = useOutletContext();

  const properties = [
    {
      img: house1Image,
      occupied: false,
      price: "1,200,000 - 2,500,000",
      address: "15, Governor Street, Admiralty, Ikoyi",
      units: 5,
      tenants: 4,
      vacant: 1,
    },
    {
      img: house2Image,
      occupied: true,
      price: "85,000 - 250,000",
      address: "18, Adeoye Adeyemi Street, Maryland",
      units: 6,
      tenants: 6,
      vacant: 0,
    },
    {
      img: house3Image,
      occupied: false,
      price: "900,000 - 1,800,000",
      address: "22, Banana Island, Ikoyi",
      units: 4,
      tenants: 3,
      vacant: 1,
    },
    // {
    //   img: house1Image,
    //   occupied: false,
    //   price: "1,200,000 - 2,500,000",
    //   address: "15, Governor Street, Admiralty, Ikoyi",
    //   units: 5,
    //   tenants: 4,
    //   vacant: 1,
    // },
    // {
    //   img: house2Image,
    //   occupied: true,
    //   price: "85,000 - 250,000",
    //   address: "18, Adeoye Adeyemi Street, Maryland",
    //   units: 6,
    //   tenants: 6,
    //   vacant: 0,
    // },

    // Add more as needed
  ];

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

      {/* Dashboard Section */}
      <section
        className="landlord-dashboard-screen-container"
        id="landlord-dashboard-screen"
      >
        <div className="layout">
          <div className="left-column">
            {[
              { icon: propertyIcon, text: "Total Property Listed", count: 5 },
              { icon: tenantIcon, text: "Total No. of Tenants", count: 4 },
              { icon: maintenanceIcon, text: "Maintenance Request", count: 4 },
            ].map(({ icon, text, count }, index) => (
              <div className="landlord-dashboard-card large" key={index}>
                <div className="top-row">
                  <img src={icon} alt={text} />
                </div>
                <div className="bottom-row">
                  <p>{text}</p>
                  <h3>{count}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="right-column">
            {[
              {
                icon: rentalIncome,
                text: "Rental Income",
                value: "₦1,250,000",
              },
              {
                icon: rentStatusIcon,
                text: "Upcoming Payments",
                value: "₦850,000",
              },
              {
                icon: overDuePaymentIcon,
                text: "Overdue Payments",
                value: "₦800,000",
                red: true,
              },
              { icon: rentalIncome, text: "Expenses", value: "₦150,000" },
            ].map(({ icon, text, value, red }, index) => (
              <div className="landlord-dashboard-card small" key={index}>
                <div className="landlord-dashboard-card-top-row-container">
                  <div className="top-row-img-container">
                    <img src={icon} alt={text} />
                  </div>
                  <p>{text}</p>
                </div>
                <h3 className={red ? "text-red" : ""}>{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Section */}
      <div className="dashboard-overview-section-container">
        {/* Revenue Overview */}
        <div className="card2 revenue-card">
          <div className="card-header">
            <h3>
              Revenue Overview<i class="fa-solid fa-chevron-down"></i>
            </h3>
            <p className="location">Admiralty Bus-stop, Ikoyi</p>
          </div>

          <section className="revenue-table-container">
            <table className="revenue-table">
              <thead>
                <tr>
                  <th>Tenants</th>
                  <th>Amount</th>
                  <th>Dates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Blessing Eke</td>
                  <td>₦1,250,000.00</td>
                  <td>15/04/2025</td>
                </tr>
                <tr>
                  <td>Michael Wilson</td>
                  <td>₦800,000.00</td>
                  <td>15/04/2025</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="total-row" style={{ paddingBottom: "0rem" }}>
                  <td>Total Revenue:</td>
                  <td>₦2,050,000.00</td>
                </tr>
              </tfoot>
            </table>
            <div className="card-footer">
              <p>
                {" "}
                <a href="#">See All</a>{" "}
              </p>
            </div>
          </section>
        </div>

        {/* Recent Activities */}
        <section className="recent-activities-container card2 activity-card">
          <div className="card-header">
            <h3>Recent Activities</h3>
          </div>
          <div className="revenue-table-container">
            <ul className="activity-list">
              {[
                "Blessing Eke just paid ₦1,250,000 for rent.",
                "Daniel submitted maintenance request.",
                "Michael Wilson just got added to your property at Ikoyi.",
              ].map((activity, index) => (
                <li key={index}>
                  <span>{activity}</span>
                  <p>
                    <a href="#">View details</a>
                  </p>
                </li>
              ))}
            </ul>
            <div className="card-footer">
              <p><a href="#">See More</a></p>
            </div>
          </div>
        </section>
      </div>

      {/* {listed Properties} */}

      <section className="landlord-properties-section">
        <div className="landlord-properties-header">
          <h2>Your Listed Properties</h2>
          <p>See all</p>
        </div>
        <div className="landlord-properties-list">
          {properties.map((property, i) => (
            <div key={i} className="landlord-property-card">
              <img src={property.img} alt={`Property ${i + 1}`} />
              <div
                className={`vacancy ${
                  property.occupied ? "fully-occupied" : ""
                }`}
              >
                {property.occupied
                  ? "Fully Occupied"
                  : `${property.vacant} Vacancy`}
              </div>
              <div className="property-details">
                <p className="price">
                  ₦{property.price} <span className="per-annum">per Annum</span>
                </p>
                <p className="address">{property.address}</p>
                <div className="button-container">
                  <button>Accept Request</button>
                </div>
                <div className="link-stats-container">
                  <div className="property-stats">
                    <span>{property.units} Units</span>
                    <span>{property.tenants} Tenants</span>
                    <span>{property.vacant} Vacant</span>
                  </div>
                  <a href="#" className="property-link">
                    See Details...
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default DashboardScreen;
