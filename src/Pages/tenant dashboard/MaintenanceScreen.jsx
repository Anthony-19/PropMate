import React from "react";
import { Outlet } from "react-router-dom";
import TrackRentScreen from "./TrackRentScreen";

const MaintenanceSection = () => {
  return (
    <>
      <TrackRentScreen />
      <section className="maintenance-section-tenant-container">
        <section className="maintenance-section-tenant">
       

          <div className="maintenance-content">
            <h3>Your Submitted Request</h3>
            {/* <p className="space-location">
              You Space Location:{" "}
              <strong>15, Governor Street, Admiralty Bus-stop, Ikoyi</strong>
            </p> */}

            <div className="table-wrapper">
              <div className="space-location-container">
                <p className="space-location">Your Space Location: </p>
                <h4>15, Governor Street, Admiralty Bus-stop, Ikoyi</h4>
              </div>
              <table className="request-table">
                <thead>
                  <tr>
                    <th>Issue Title</th>
                    <th>Unit</th>
                    <th>
                      Date Reported <i class="fas fa-chevron-down"></i>
                      {/* <select
                        id="filterMonth"
                        style={{
                          marginTop: "0.3rem",
                          padding: "2px 6px",
                          fontSize: "0.85rem",
                          borderRadius: "4px",
                        }}
                      >
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
                      </select> */}
                    </th>
                    <th>
                      Status <i class="fas fa-chevron-down"></i>
                      {/* <select
                        id="filterStatus"
                        style={{
                          padding: "2px 6px",
                          fontSize: "0.85rem",
                          borderRadius: "4px",
                        }}
                      >
                        <option value="">All</option>
                        <option value="pending">Pending</option>
                        <option value="progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                      </select> */}
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Leaking Roof
                      <p className="see-details">
                        <a
                          href="#"
                          className="see-details-link"
                          data-message="Good day sir, I would like to report a leaking roof in my apartment (Flat 2B)..."
                        >
                          see details...
                        </a>
                      </p>
                    </td>
                    <td>Flat 1A</td>
                    <td className="date">May 12, 2025</td>
                    <td className="status">
                      <span className="pending">• Pending</span>
                    </td>
                    <td className="message">Message</td>
                  </tr>
                  <tr>
                    <td>
                      Faulty AC <p className="see-details">
                        <a
                          href="#"
                          className="see-details-link"
                          data-message="Good day sir, I would like to report a faulty AC in my apartment (Flat 2B)..."
                        >
                          see details...
                        </a>
                      </p>
                    </td>
                    <td>Flat 1A</td>
                    <td className="date">May 13, 2025</td>
                    <td className="status ">
                      <span className="pending">• Pending</span>
                    </td>
                    <td className="message">Message</td>
                  </tr>
                  <tr>
                    <td>
                      Broken Door <p className="see-details">
                        <a
                          href="#"
                          className="see-details-link"
                          data-message="Good day sir, I would like to report a broken door in my apartment (Flat 2B)..."
                        >
                          see details...
                        </a>
                      </p>
                    </td>
                    <td>Flat 1B</td>
                    <td className="date">April 30, 2025</td>
                    <td className="status">
                      <span className="progress">• In Progress</span>
                    </td>
                    <td className="message">Message</td>
                  </tr>
                  <tr>
                    <td>
                      Broken Window<p className="see-details">
                        <a
                          href="#"
                          className="see-details-link"
                          data-message="Good day sir, I would like to report a leaking roof in my apartment (Flat 2B)..."
                        >
                          see details...
                        </a>
                      </p>
                    </td>
                    <td>Flat 1B</td>
                    <td className="date">February 15, 2025</td>
                    <td className="status">
                      <span className="resolved">• Resolved</span>
                    </td>
                    <td className="message">
                      <a href="#" className="view-more-link">
                        View &gt;
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Plumbing <p className="see-details">
                        <a
                          href="#"
                          className="see-details-link"
                          data-message="Good day sir, I would like to report a plumbing issue in my apartment (Flat 2B)..."
                        >
                          see details...
                        </a>
                      </p>
                    </td>
                    <td>Flat 1B</td>
                    <td className="date">January 16, 2025</td>
                    <td className="status ">
                      <span className="resolved">• Resolved</span>
                    </td>
                    <td className="message">
                      <a href="#" className="view-more-link">
                        View &gt;
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Leaking Roof <p className="see-details">
                        <a
                          href="#"
                          className="see-details-link"
                          data-message="Good day sir, I would like to report a leaking roof in my apartment (Flat 2B)..."
                        >
                          see details...
                        </a>
                      </p>
                    </td>
                    <td>Flat 1B</td>
                    <td className="date">October 12, 2024</td>
                    <td className="status">
                      <span className="resolved">• Resolved</span>
                    </td>
                    <td className="message">
                      <a href="#" className="view-more-link">
                        View &gt;
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
     <Outlet /> 
    </>
  );
};

export default MaintenanceSection;
