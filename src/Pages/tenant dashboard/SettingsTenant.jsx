import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TrackRentScreen from "./TrackRentScreen";
import changePasswordIcon from "../../assets/images/change-password-tenant-icon.svg";
import twoFactorIcon from "../../assets/images/two-factor-authentication-tenant-icon.svg";
import languageIcon from "../../assets/images/language-tenant-icon.svg";
import emailNotificationIcon from "../../assets/images/email-notification-tenant-icon.svg";
import smsAlertIcon from "../../assets/images/sms-alert-tenant-icon.svg";
import paymentHistoryIcon from "../../assets/images/payment-history-tenant-icon.svg";
import pushNotificationIcon from "../../assets/images/push-notification-tenant-icon.svg";
import rentRemindersIcon from "../../assets/images/rent-reminders-tenant-icon.svg";
import faqsIcon from "../../assets/images/faq-tenant-icon.svg";
import chatbotIcon from "../../assets/images/chatbot-access-tenant-icon.svg";

const SettingsTenant = () => {
  const [showEdit, setShowEdit] = useState(false);
  // const location = useLocation();
  const userName = localStorage.getItem('userName');
  const role = localStorage.getItem('role');
  const capitalizeFirstLetter = role ? role.charAt(0).toUpperCase() + role.slice(1) : '';
  const email = localStorage.getItem('email');

  // const [isOn, setIsOn] = useState(false);
  // const toggleSwitch = () => {
  //   setIsOn(!isOn);
  // };
  const [toggleSwitches, setToggleSwitches] = useState({})

  const handleToggleSwitch = (sectionIndex, rowIndex) => {
    const key = `${sectionIndex}-${rowIndex}`
    setToggleSwitches(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }
  return (
    <>
      <TrackRentScreen />
      <section className="settings-tenants-wrapper">
        <div className="profile-info">
          <div className="profile-pic">
            <img
              src="../Assets/Images/blessing.jpeg"
              alt="Profile"
              id="user-profile-pic"
            />
            <p>{capitalizeFirstLetter}</p>
          </div>

          <div className="user-details" id="userDetails">
            <h3 id="displayName">{userName}</h3>
            <p id="displayEmail">{email}</p>
            <p id="displayPhone">+234 000 000 0000</p>
            <p id="emergency-contact">
              <span id="display-emergency">Emergency Contact:</span> <br />
              +234 000 000 0000
            </p>
          </div>

          <button
            type="button"
            className="edit-btn"
            onClick={() => setShowEdit(!showEdit)}
          >
            Edit
          </button>

          {/* {showEdit && (
          <div className="editable-fields" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
            <input type="text" className="form-control" defaultValue="Blessing Okeke" />
            <input type="email" className="form-control" defaultValue="blessingokeke@gmail.com" />
            <input type="tel" className="form-control" defaultValue="+234 000 000 0000" />
            <input type="tel" className="form-control" defaultValue="+234 000 000 0000" />
            <button type="button" className="btn btn-sm btn-primary mt-2">
              Save
            </button>
          </div>
        )} */}
        </div>

        {/* Settings Sections */}
        {[
          {
            title: "Profile",
            rows: [
              {
                icon: changePasswordIcon,
                text: "Change Password",
              },
              {
                icon: twoFactorIcon,
                text: "Two-Factor Authentication",
                toggle: true,
                checked: true,
              },
              {
                icon: languageIcon,
                text: "Language",
                trailing: "English",
              },
            ],
          },
          {
            title: "Notifications",
            rows: [
              {
                icon: emailNotificationIcon,
                text: "Email Notifications",
                toggle: true,
                checked: true,
              },
              {
                icon: smsAlertIcon,

                text: "SMS Alert",
                toggle: true,
              },
              {
                icon: pushNotificationIcon,
                text: "Push Notifications",
                toggle: true,
                checked: true,
              },
            ],
          },
          {
            title: "Account & Payment",
            rows: [
              {
                icon: paymentHistoryIcon,
                text: "Payment History",
              },
              {
                icon: rentRemindersIcon,
                text: "Rent Reminders",
                toggle: true,
              },
            ],
          },
          {
            title: "Help & Support",
            rows: [
              {
                icon: faqsIcon,
                text: "FAQs",
              },
              {
                icon: chatbotIcon,
                text: "Chatbot Access",
              },
            ],
          },
        ].map((section, sectionIndex) => (
          <div className="settings-section expanded" key={sectionIndex}>
            <div className="section-header">
              <h4>{section.title}</h4>
              <i class="fas fa-chevron-down dropup-icon"></i>
            </div>
            <div className="section-body">
              {section.rows.map((row, rowIndex) => {
                const key = `${sectionIndex}-${rowIndex}`
                return(    
                <div className="section-row" key={rowIndex}>
                  <div className="section-row-content">
                    <img src={row.icon} alt="" />
                    <p className="section-row-text">{row.text}</p>
                  </div>
                  {row.toggle ? (
                    <button className={`toggle-switch-btn ${toggleSwitches[key] ? 'on': ''}`} onClick={() => handleToggleSwitch(sectionIndex,rowIndex)}>
                      <span className={`thumb ${toggleSwitches[key] ? 'on' : ''} `}></span>
                    </button>
                    // <label className="switch">
                    //   <input type="checkbox" defaultChecked={row.checked} />
                    //   <span className="slider round"></span>
                    // </label>
                  ) : row.trailing ? (
                    <span>{row.trailing}</span>
                  ) : (
                    <i class="fas fa-chevron-down dropleft-icon"></i>
                  )}
                </div>)
})}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default SettingsTenant;
