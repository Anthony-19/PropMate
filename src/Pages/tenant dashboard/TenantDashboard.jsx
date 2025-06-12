import {useState} from 'react';
import './tenantDashboard.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './Sidebar';
import DashboardScreen from './DashboardScreen';
import ChatBotSupport from './ChatBotSupport';
import Footer from './Footer';

const TenantDashboard = () => {
     const [show, setShow] = useState(false)
        const handleShow = () => {
            setShow(prev => !prev)
        }
  return (
     <>
    <div className="page-wrapper" style={{margin: '0rem'}}>
      <div className="d-flex" id="dashboard-wrapper">
        {/* Sidebar */}
       <Sidebar 
        show = {show}
        handleShow = {handleShow}
       />

        {/* Main Content */}
        <DashboardScreen 
            show = {show}
             handleShow = {handleShow}
        />
       
          {/* More sections to follow */}
        
      </div>
      
    </div>
    <ChatBotSupport />
    <Footer />
   </>
  );
};

export default TenantDashboard;
