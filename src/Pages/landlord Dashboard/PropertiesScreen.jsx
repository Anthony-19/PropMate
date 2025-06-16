import React from "react";
import house1Image from "../../assets/images/house1.png";
import house2Image from "../../assets/images/house2.png";
import house3Image from "../../assets/images/house3.png";
import house4Image from "../../assets/images/house3.png";
import listMoreBtn from '../../assets/images/list_more_properties.png'
import rentStatusIcon from '../../assets/images/rent-status-icon.svg'
import propertyIcon from '../../assets/images/property-icon.svg'
import rentalIncomeIcon from '../../assets/images/rental-income-icon.svg'
import overdueIcon from '../../assets/images/overdue-payment-icon.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';

function PropertiesScreen() {
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

    // Add more as needed
  ];
  return (
    <>
      {/* MAIN DASHBOARD */}
      <div className="landlord-property-container">
        {/* Overview Cards */}
        <div className="landlord-overview-container">
          <div className="landlord-overview-body">
            {[
              {
                icon: propertyIcon,
                title: "Total Property Listed",
                value: 5,
              },
              {
                icon: rentStatusIcon,
                title: "Rental Income",
                value: "₦1,250,000",
              },
              { icon: rentalIncomeIcon, title: "Expenses", value: "₦85,000" },
              {
                icon: overdueIcon,
                title: "Overdue Payment",
                value: "₦1,200,000",
                overdue: true,
              },
              {
                icon: rentStatusIcon,
                title: "Upcoming Payment",
                value: "₦1,250,000",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`landlord-overview-card ${
                  card.overdue ? "overdue" : ""
                }`}
              >
                <div className="top-section">
                  <div className="icon-container">
                    <img src={card.icon} alt={card.title} />
                  </div>
                  <div className="text">
                    <h3>{card.title}</h3>
                  </div>
                </div>
                <div className="value">{card.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Listed Properties */}

        <section className="landlord-properties-section">
          <div className="landlord-properties-header">
              <h2>Your Listed Properties</h2>
              <h4>Occupancy Status <i className="fas fa-chevron-down"></i></h4>
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
                    ₦{property.price}{" "}
                    <span className="per-annum">per Annum</span>
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

            <div className="landlord-add-more-container">
              <img src={listMoreBtn} alt="Add More" />
              <span>List more properties</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PropertiesScreen;
