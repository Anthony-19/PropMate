import { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardScreen from "./DashboardScreen";
import ChatBotSupport from "./ChatBotSupport";
import Footer from "./Footer";
import HeaderDashboard from "./HeaderDashboard";
import TrackRentScreen from "./TrackRentScreen";
import { Outlet } from "react-router-dom";
import './landlordDashboard.css'

function LandLordDashboard() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <div className="page-wrapper" style={{ margin: "0rem" }}>
        <div className="d-flex" id="dashboard-wrapper">
          {/* Sidebar */}
          <Sidebar show={show} handleShow={handleShow} />

          {/* Main Content */}
           <div className="dashboard-content-container">
            <HeaderDashboard
                    show = {show}
                    handleShow = {handleShow}
                  />

             <TrackRentScreen />

                 <Outlet context={{show, handleShow}}/>
           </div>
         
          {/* <DashboardScreen show={show} handleShow={handleShow} /> */}

          {/* More sections to follow */}
        </div>
      </div>
      <ChatBotSupport />
      <Footer />
    </>
  );
}

export default LandLordDashboard;
