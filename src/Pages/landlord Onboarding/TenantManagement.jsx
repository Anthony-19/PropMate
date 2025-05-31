import React from 'react'

function TenantManagement() {
  return (
    <div className="tenant-management-container">
        <p className='tenant-management-text'>
          Invite tenants to join and access the dashboard to manage your properties
        </p>

      <div className="tenant-management-input">
        <div className="tenant-management-tenant-info">
          <div className="tenant-management-item">
            <input
              type="text"
              placeholder="Email or Phone number"
              className="tenant-management-tenant-input"
            />
            <div className="tenant-management-add-more-container">
              <button className="add-icon">+</button>
              <span className="add-text">Add More Tenants</span>
            </div>
          </div>
        </div>
        <button className="tenant-management-send-invite">Send Invite</button>
      </div>

      <div className="video-placeholder">
        <iframe
          width="440"
          height="248"
          src="https://www.veed.io/view/691c5f14-6ed5-4cec-bb63-6fc19ecbe3f3?panel=share"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Tenant Dashboard Intro"
        ></iframe>
      </div>
    </div>
  )
}

export default TenantManagement
