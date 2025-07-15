import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import dashboardIcon from "../../assets/images/dashboard-icon.svg";
import maintenanceIcon from "../../assets/images/maintenance-icon.svg";
import paymentIcon from "../../assets/images/payment-icon.svg";
import propertyIcon from "../../assets/images/property-icon.svg";
import tenantIcon from "../../assets/images/tenants-icon.svg";
import settingIcon from "../../assets/images/setting-icon.svg";

import dashboardIconActive from "../../assets/images/dashboard-icon-active.svg";
import maintenanceIconActive from "../../assets/images/maintenance-icon-active.svg";
import paymentIconActive from "../../assets/images/payment-icon-active.svg";
import leaseIconActive from "../../assets/images/lease-icon-active.svg";
import settingIconActive from "../../assets/images/setting-icon-active.svg";
import tenantIconActive from "../../assets/images/tenants-active-icon.svg";
import propertiesIconActive from "../../assets/images/properties-active-icon.svg";

function Sidebar(props) {
  // const [show, setShow] = useState(false)
  // const handleShow = () => {
  //     setShow(prev => !prev)
  // }

  const userName = localStorage.getItem("userName");
  const role = localStorage.getItem("role");

  const navigate = useNavigate()

  const handleLogOut = () => {
      // localStorage.clear()
      // localStorage.removeItem('role')
      // localStorage.removeItem('userName')

      navigate('/signin')
  }

  return (
    <>
      {props.show === false ? (
        <nav id="sidebar" className="sidebar expanded">
          <div className="sidebar-header">
            <h4 className="sidebar-brand">PropMate</h4>
            <button
              className="sidebar-toggle-btn"
              id="toggleSidebar"
              onClick={props.handleShow}
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-chevron-left arrow-left"></i>
            </button>
          </div>

          <ul className="sidebar-nav" style={{ marginTop: "2rem" }}>
            <li className="sidebar-nav-item active">
              <NavLink
                className={({ isActive }) =>
                  `sidebar-nav-link ${isActive ? "active" : ""} `
                }
                to="/landlord-dashboard"
                end
              >
                {({ isActive, isPending }) => (
                  <>
                    <img
                      src={isActive ? dashboardIcon : dashboardIconActive}
                      className="dashboard-icon"
                      alt="dashboard-icon"
                    />
                    <span>Dashboard</span>
                  </>
                )}
              </NavLink>
            </li>

            <li className="sidebar-nav-item">
              <NavLink
                className={({ isActive }) =>
                  `sidebar-nav-link ${isActive ? "active" : ""} `
                }
                to="../pages/tenant_lease.html"
                end
              >
                {({ isActive, isPending }) => (
                  <>
                    <img
                      src={isActive ? tenantIconActive : tenantIcon}
                      className="tenant-icon"
                      alt="tenant-icon"
                    />
                    <span>Tenants</span>
                  </>
                )}
              </NavLink>
            </li>
            <li className="sidebar-nav-item">
              <NavLink
                to="properties"
                className={({ isActive }) =>
                  `sidebar-nav-link ${isActive ? "active" : ""} `
                }
                end
              >
                {({ isActive, isPending }) => (
                  <>
                    <img
                      src={isActive ? propertiesIconActive : propertyIcon}
                      className="property-icon"
                      alt="property-icon"
                    />
                    <span>Properties</span>
                  </>
                )}
              </NavLink>
            </li>
            <li className="sidebar-nav-item">
              <NavLink
                className={({ isActive }) =>
                  `sidebar-nav-link ${isActive ? "active" : ""} `
                }
                end
                to="../pages/tenant_payment.html"
              >
                {({ isActive, isPending }) => (
                  <>
                    <img
                      src={isActive ? paymentIconActive : paymentIcon}
                      className="payment-icon"
                      alt="payment-icon"
                    />
                    <span>Payments</span>
                  </>
                )}
              </NavLink>
            </li>
            <li className="sidebar-nav-item">
              <NavLink
                className={({ isActive }) =>
                  `sidebar-nav-link ${isActive ? "active" : ""} `
                }
                end
                to="../pages/tenant_payment.html"
              >
                {({ isActive, isPending }) => (
                  <>
                    <img
                      src={isActive ? maintenanceIconActive : maintenanceIcon}
                      className="maintenance-icon"
                      alt="maintenance-icon"
                    />
                    <span>Maintenance Request</span>
                  </>
                )}
              </NavLink>
            </li>
            <li className="sidebar-nav-item">
              <NavLink
                className={({ isActive }) =>
                  `sidebar-nav-link ${isActive ? "active" : ""} `
                }
                end
                to="../pages/tenant_payment.html"
              >
                {({ isActive, isPending }) => (
                  <>
                    <img
                      src={isActive ? settingIconActive : settingIcon}
                      className="settings-icon"
                      alt="settings-icon"
                    />
                    <span>Settings</span>
                  </>
                )}
              </NavLink>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="sidebar-footer mt-auto text-center">
            <div className="profile-section text-center my-4">
              <label htmlFor="profile-upload">
                <img
                  src="../Assets/Images/blessing.jpeg"
                  alt="Profile"
                  id="profile-pic"
                  className="rounded-circle mb-2"
                />
              </label>
              {/* <input type="file" id="profile-upload" accept="image/*" /> */}
              <h6 className="mb-0 sidebar-user-name">{userName}</h6>
              <h6 className="sidebar-user-name">{role}</h6>
            </div>
            <button className="btn btn-sm btn-outline-secondary mt-2 sidebar-logout-btn" onClick={handleLogOut}>
              <span> Log out</span>
              <i className="fas fa-sign-out"></i>
            </button>
          </div>
        </nav>
      ) : (
        <nav id="sidebars" className="sidebar expanded">
          <div className="sidebar-header">
            <h4 className="sidebar-brand s-brand">PropMate</h4>
          </div>

          <ul className="sidebar-nav" style={{ marginTop: "2rem" }}>
            <li className="sidebar-nav-item s-nav-item active">
              <NavLink
                className={({ isActive }) =>
                  `sidebar-nav-link ${isActive ? "active" : ""} `
                }
                to="/landlord-dashboard"
                end
              >
                {({ isActive, isPending }) => (
                  <>
                    <img
                      src={isActive ? dashboardIcon : dashboardIconActive}
                      className="dashboard-icon"
                      alt="dashboard-icon"
                      title="dashboard"
                    />
                  </>
                )}
              </NavLink>
            </li>

            <li className="sidebar-nav-item s-nav-item">
              <NavLink
                className={({ isActive }) =>
                  `sidebar-nav-link ${isActive ? "active" : ""} `
                }
                to="../pages/tenant_lease.html"
                end
              >
                {({ isActive, isPending }) => (
                  <>
                    <img
                      src={isActive ? tenantIconActive : tenantIcon}
                      className="tenant-icon"
                      alt="tenant-icon"
                      title="tenant"
                    />
                  </>
                )}
              </NavLink>
            </li>

            <li className="sidebar-nav-item s-nav-item">
              <NavLink
                to="properties"
                className={({ isActive }) =>
                  `sidebar-nav-link ${isActive ? "active" : ""} `
                }
                end
              >
                {({ isActive, isPending }) => (
                  <>
                    <img
                      src={isActive ? propertiesIconActive : propertyIcon}
                      className="property-icon"
                      alt="property-icon"
                      title="properties"
                    />
                  </>
                )}
              </NavLink>
            </li>
            <li className="sidebar-nav-item s-nav-item">
              <NavLink
                className={({ isActive }) =>
                  `sidebar-nav-link ${isActive ? "active" : ""} `
                }
                end
                to="../pages/tenant_payment.html"
              >
                {({ isActive, isPending }) => (
                  <>
                    <img
                      src={isActive ? paymentIconActive : paymentIcon}
                      className="payment-icon"
                      alt="payment-icon"
                      title="payment"
                    />
                  </>
                )}
              </NavLink>
            </li>
            <li className="sidebar-nav-item s-nav-item">
              <NavLink
                className={({ isActive }) =>
                  `sidebar-nav-link ${isActive ? "active" : ""} `
                }
                end
                to="../pages/tenant_payment.html"
              >
                {({ isActive, isPending }) => (
                  <>
                    <img
                      src={isActive ? maintenanceIconActive : maintenanceIcon}
                      className="maintenance-icon"
                      alt="maintenance-icon"
                      title="Request Maintenance"
                    />
                  </>
                )}
              </NavLink>
            </li>
            <li className="sidebar-nav-item s-nav-item">
              <NavLink
                className={({ isActive }) =>
                  `sidebar-nav-link ${isActive ? "active" : ""} `
                }
                end
                to="../pages/tenant_payment.html"
              >
                {({ isActive, isPending }) => (
                  <>
                    <img
                      src={isActive ? settingIconActive : settingIcon}
                      className="settings-icon"
                      alt="settings-icon"
                      title="Settings"
                    />
                  </>
                )}
              </NavLink>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="sidebar-footer mt-auto text-center">
            <div className="profile-section text-center my-4">
              <label htmlFor="profile-upload">
                <img
                  src="../Assets/Images/blessing.jpeg"
                  alt="Profile"
                  id="profile-pic"
                  className="rounded-circle mb-2"
                />
              </label>
              {/* <input type="file" id="profile-upload" accept="image/*" /> */}
              <h6 className="mb-0 sidebar-user-name">{userName}</h6>
              <h6 className="sidebar-user-name">{role}</h6>
            </div>
            <button className="btn btn-sm btn-outline-secondary mt-2 sidebar-logout-btn s-l-btn" onClick={handleLogOut}>
              {/* <span> Log out</span> */}
              <i className="fas fa-sign-out"></i>
            </button>
          </div>
        </nav>
      )}
    </>
  );
}

export default Sidebar;
