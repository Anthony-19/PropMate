
import { useState } from 'react'

import dashboardIcon from '../../assets/images/dashboard-icon.svg'
import maintenanceIcon from '../../assets/images/maintenance-icon.svg'
import paymentIcon from '../../assets/images/payment-icon.svg'
import leaseIcon from '../../assets/images/lease-icon.svg'
import settingIcon from '../../assets/images/setting-icon.svg'

function Sidebar(props) {
    // const [show, setShow] = useState(false)
    // const handleShow = () => {
    //     setShow(prev => !prev)
    // }

  const userName = localStorage.getItem('userName');
  const role = localStorage.getItem('role');
  return (
    <>
 
       {props.show === false ? <nav id="sidebar" className="sidebar expanded">
          <div className="sidebar-header">
            <h4 className="sidebar-brand">PropMate</h4>
            <button className="sidebar-toggle-btn" id="toggleSidebar" onClick={props.handleShow} style={{cursor: "pointer"}}>
              <i className="fas fa-chevron-left arrow-left"></i>
            </button>
          </div>

          <ul className="sidebar-nav" style={{marginTop: '2rem'}}>
            <li className="sidebar-nav-item active">
              <a className="sidebar-nav-link active" href="#">
                <img src={dashboardIcon} className="dashboard-icon" alt='dashboard-icon'/>
                <span>Dashboard</span></a>
            </li>
            <li className="sidebar-nav-item">
              <a className="sidebar-nav-link" href="../pages/maintenance_tenant_.html">
              <img src={maintenanceIcon} className="maintenance-icon" alt='maintenance-icon' />
              <span>Maintenance Request</span></a>
            </li>
            <li className="sidebar-nav-item">
              <a className="sidebar-nav-link" href="../pages/tenant_payment.html">
              <img src={paymentIcon} className="payment-icon" alt='payment-icon' />
              <span>Payments</span></a>
            </li>
            <li className="sidebar-nav-item">
              <a className="sidebar-nav-link" href="../pages/tenant_lease.html">
             <img src={leaseIcon} className="lease-icon" alt='lease-icon' />
              <span>Lease</span></a>
            </li>
            <li className="sidebar-nav-item">
              <a className="sidebar-nav-link" href="../pages/tenant_settings.html">
              <img src={settingIcon} className="settings-icon" alt='setting-icon' />
              <span>Settings</span></a>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="sidebar-footer mt-auto text-center">
            <div className="profile-section text-center my-4">
              <label htmlFor="profile-upload">
                <img src="../Assets/Images/blessing.jpeg" alt="Profile" id="profile-pic" className="rounded-circle mb-2" />
              </label>
              {/* <input type="file" id="profile-upload" accept="image/*" /> */}
              <h6 className="mb-0 sidebar-user-name">{userName}</h6>
              <h6 className="sidebar-user-name">{role}</h6>
            </div>
            <button className="btn btn-sm btn-outline-secondary mt-2 sidebar-logout-btn">
              <span> Log out</span><i className="fas fa-sign-out"></i>
            </button>
          </div>
        </nav> : 


        <nav id="sidebars" className="sidebar expanded">
          <div className="sidebar-header">
            <h4 className="sidebar-brand s-brand">PropMate</h4>
          </div>

          <ul className="sidebar-nav" style={{marginTop: '2rem'}}>
            <li className="sidebar-nav-item s-nav-item active">
              <a className="sidebar-nav-link active" href="#">
                <img src={dashboardIcon} className="dashboard-icon" alt='dashboard-icon' title='dashboard'/>
                {/* <span>Dashboard</span> */}
                </a>
            </li>
            <li className="sidebar-nav-item s-nav-item">
              <a className="sidebar-nav-link" href="../pages/maintenance_tenant_.html">
              <img src={maintenanceIcon} className="maintenance-icon" alt='maintenance-icon' title='Request Maintenance' />
              {/* <span>Maintenance Request</span> */}
              </a>
            </li>
            <li className="sidebar-nav-item s-nav-item">
              <a className="sidebar-nav-link" href="../pages/tenant_payment.html">
              <img src={paymentIcon} className="payment-icon" alt='payment-icon' title='payment'/>
              {/* <span>Payments</span> */}
              </a>
            </li>
            <li className="sidebar-nav-item s-nav-item">
              <a className="sidebar-nav-link" href="../pages/tenant_lease.html">
             <img src={leaseIcon} className="lease-icon" alt='lease-icon' title='Lease'/>
              {/* <span>Lease</span> */}
              </a>
            </li>
            <li className="sidebar-nav-item s-nav-item">
              <a className="sidebar-nav-link" href="../pages/tenant_settings.html">
              <img src={settingIcon} className="settings-icon" alt='setting-icon' title='Settings' />
              {/* <span>Settings</span> */}
              </a>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="sidebar-footer mt-auto text-center">
            <div className="profile-section text-center my-4">
              <label htmlFor="profile-upload">
                <img src="../Assets/Images/blessing.jpeg" alt="Profile" id="profile-pic" className="rounded-circle mb-2" />
              </label>
              {/* <input type="file" id="profile-upload" accept="image/*" /> */}
              <h6 className="mb-0 sidebar-user-name">{userName}</h6>
              <h6 className="sidebar-user-name">{role}</h6>
            </div>
            <button className="btn btn-sm btn-outline-secondary mt-2 sidebar-logout-btn s-l-btn" >
              {/* <span> Log out</span> */}
              <i className="fas fa-sign-out"></i>
            </button>
          </div>
        </nav>
        
    }
       </>
  )
}

export default Sidebar

