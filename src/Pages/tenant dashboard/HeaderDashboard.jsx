import React from "react";
import { useLocation } from "react-router-dom";
import HamburgerIcon from '../../assets/images/dashbord-hamburger-icon.svg'
function HeaderDashboard(props) {
  const location = useLocation();
  let text = null;
  if (location.pathname.includes('maintenance-tenant-screen')) {  
    text = "Maintenance Requests";
   }
   else if (location.pathname.includes('payment-tenant-screen')) {
    text = "Payment";
   }
    else if (location.pathname.includes('lease-tenant-screen')) {
    text = "Lease Agreement";
   }
   else{
    text = "Dashboard";
   }
  return (
    <>
      <div className="dashboard-title-container">
       {props.show && <img
            onClick={props.handleShow}
          src={HamburgerIcon}
          className="hamburger-icon"
          alt="hamburger-icon"
        />}
        <h5 className="dashboard-title">{text}</h5>
      </div>
    </>
  );
}

export default HeaderDashboard;
