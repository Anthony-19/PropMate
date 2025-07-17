import React from 'react'

export default function MaintenanceScreenLandlord() {
  return (
        <section className="maintenance-landlord-dashboard-container">

          <div className="sub-header">
            <h4>Request List</h4>
            <div className="property-location">
                <div>
                    <h4>Property Location</h4>
                    <i className="fa fa-chevron-down"></i>
                </div>
              {/* <select className="property-dropdown" id="propertySelect" defaultValue="">
                <option value="" disabled>Select Property Location</option>
                <option value="ikoyi">15, Governor’s street, Admiralty Bus-stop, Ikoyi</option>
                <option value="ikeja">23, Adekoya Street, allen avenue, Ikeja</option>
                <option value="ikorodu">2, Onigbogbon street, Ajakaye Bus-stop, Ikorodu</option>
              </select> */}
            </div>
          </div>

          <div className="table-wrapper">
            <table className="maintenance-table">
              <thead>
                <tr className="property-address">
                  <td colSpan="5">
                    <div className="address-row">
                      <span className="address-text">15, Governor Street, Admiralty Bus-stop, Ikoyi</span>
                      <span className="new-issues">2 new issues</span>
                    </div>
                  </td>
                </tr>
                <tr className="table-header">
                  <th>Tenant Name</th>
                  <th>Unit</th>
                  <th>Issue Title</th>
                  <th>
                    Date Reported
                    <select id="filterMonth">
                      <option value="">All</option>
                      <option value="2024-10">Oct 2024</option>
                      <option value="2025-01">Jan 2025</option>
                      <option value="2025-02">Feb 2025</option>
                      <option value="2025-04">Apr 2025</option>
                      <option value="2025-05">May 2025</option>
                      <option value="2025-06">Jun 2025</option>
                      <option value="2025-07">Jul 2025</option>
                      <option value="2025-08">Aug 2025</option>
                      <option value="2025-09">Sep 2025</option>
                      <option value="2025-10">Oct 2025</option>
                      <option value="2025-11">Nov 2025</option>
                      <option value="2025-12">Dec 2025</option>
                    </select>
                  </th>
                  <th>
                    Status
                    <select id="filterStatus">
                      <option value="">All</option>
                      <option value="pending">Pending</option>
                      <option value="progress">In Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </th>
                </tr>
              </thead>
                   <tbody>
                <tr>
                  <td>Blessing Eke</td>
                  <td>Flat 2B</td>
                  <td>
                    Leaking Roof <br />
                    <span className="see-details" data-message="Good day sir, I would like to report a leaking roof in my apartment (Flat 2B). Anytime it rains, water starts dripping from the ceiling, especially in the living room area. It’s getting worse and I’m worried it might damage my furniture or cause a short circuit. Please look into it as soon as possible. Thank you.">see details...</span>
                  </td>
                  <td>January 12, 2025</td>
                  <td><span className="status pending">● Pending</span></td>
                </tr>
                <tr>
                  <td>Michael Wilson</td>
                  <td>Flat 1A</td>
                  <td>Faulty AC<br /><span className="see-details">see details...</span></td>
                  <td>February 13, 2025</td>
                  <td><span className="status progress">● In Progress</span></td>
                </tr>
                <tr>
                  <td>Adenuga Shade</td>
                  <td>Boys-quarter, Room 1</td>
                  <td>Broken Door<br /><span className="see-details">see details...</span></td>
                  <td>March 14, 2025</td>
                  <td><span className="status progress">● In Progress</span></td>
                </tr>
                <tr>
                  <td>Chukwuka Ebuka</td>
                  <td>Flat 3</td>
                  <td>Broken Window<br /><span className="see-details">see details...</span></td>
                  <td>April 15, 2025</td>
                  <td><span className="status resolved">● Resolved</span></td>
                </tr>
                <tr>
                  <td>Ebube Chibuzor</td>
                  <td>Boys-quarter, Room 3</td>
                  <td>Plumbing<br /><span className="see-details">see details...</span></td>
                  <td>May 16, 2025</td>
                  <td><span className="status resolved">● Resolved</span></td>
                </tr>
                <tr>
                  <td>Wsdom Eke</td>
                  <td>Flat 2B</td>
                  <td>Leaking Roof<br /><span className="see-details">see details...</span></td>
                  <td>June 12, 2025</td>
                  <td><span className="status pending">● Pending</span></td>
                </tr>
                <tr>
                  <td>Thomas Wilson</td>
                  <td>Flat 1A</td>
                  <td>Faulty AC<br /><span className="see-details">see details...</span></td>
                  <td>July 13, 2025</td>
                  <td><span className="status progress">● In Progress</span></td>
                </tr>
                <tr>
                  <td>Patient Shade</td>
                  <td>Boys-quarter, Room 1</td>
                  <td>Broken Door<br /><span className="see-details">see details...</span></td>
                  <td>May 14, 2025</td>
                  <td><span className="status progress">● In Progress</span></td>
                </tr>
                <tr>
                  <td>Promise Ebuka</td>
                  <td>Flat 3</td>
                  <td>Broken Window<br /><span className="see-details">see details...</span></td>
                  <td>August 15, 2025</td>
                  <td><span className="status resolved">● Resolved</span></td>
                </tr>
                <tr>
                  <td>Gloria Amos</td>
                  <td>Boys-quarter, Room 3</td>
                  <td>Plumbing<br /><span className="see-details">see details...</span></td>
                  <td>September 16, 2025</td>
                  <td><span className="status resolved">● Resolved</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
  )
}
