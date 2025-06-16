import React from "react";
import HamburgerIcon from '../../assets/images/dashbord-hamburger-icon.svg'
function HeaderDashboard(props) {

    
  return (
    <>
      <div className="dashboard-title-container">
       {props.show && <img
            onClick={props.handleShow}
          src={HamburgerIcon}
          className="hamburger-icon"
          alt="hamburger-icon"
        />}
        <h5 className="dashboard-title">Dashboard</h5>
      </div>
    </>
  );
}

export default HeaderDashboard;
