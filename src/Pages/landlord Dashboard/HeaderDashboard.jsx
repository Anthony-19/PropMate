import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HamburgerIcon from '../../assets/images/dashbord-hamburger-icon.svg'
function HeaderDashboard(props) {
  const location = useLocation()
  let text = ""

  if(location.pathname.includes('properties')) {
    text="Properties"
  }  else if(location.pathname.includes('maintenance-landlord-screen')) {
    text="Maintenace"
  }
  else{
    text = "Dashboards"
  }

  const navigate = useNavigate()
  const handleClick = () => {
      navigate('/landlord-dashboard')
  }
    
  return (
    <>
    <section style={{display: 'flex', width: '100%',justifyContent: 'space-between'}}>
         <div className="dashboard-title-container">
           {props.show && <img
            onClick={props.handleShow}
          src={HamburgerIcon}
          className="hamburger-icon"
          alt="hamburger-icon"
        />}
        <h5 className="dashboard-title">{text}</h5>
      </div>
     { location.pathname.includes('add-property-landlord-screen') && 
     <div>
        <h4 style={{cursor: 'pointer'}} onClick={handleClick} >Back</h4>
      </div>}
    </section>
   
    </>
  );
}

export default HeaderDashboard;
