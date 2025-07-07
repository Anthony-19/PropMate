import React from "react";
import TrackRentScreen from "./TrackRentScreen";
import downloadIcon from "../../assets/images/download-icon-tenant-white.svg";

function LeaseScreen() {
  return (
    <>
      <TrackRentScreen />

      <section className="lease-tenant-screen-container">
        <h4 className="review-lease-title">Review Lease Agreement</h4>
        <section className="lease-tenant-details-container">
          <div className="lease-details-box">
            <p>
              <span>Landlord:</span> Sharon Alakija
            </p>
            <p>
              <span>Lease Duration:</span> Annual (1 Year)
            </p>
          </div>
          <section className="lease-details-container">
            <h5 className="subsection-title">Summary</h5>
            <div className="lease-duration-details lease-item">
              <h5 className="detail-label"> Lease Duration:</h5>
              <p className="detail-value">
                {" "}
                June 1, 2025 - May 1, 2026 (12 Months){" "}
              </p>
            </div>
            <div className="property-location-details lease-item">
              <h5 className="detail-label">Property Location:</h5>
              <p className="detail-value">
                {" "}
                15, Governor Street, Admiralty Way, Ikoyi{" "}
              </p>
            </div>
            <div className="Agreement-type-details lease-item">
              <h5 className="detail-label">Agreement Type:</h5>
              <p className="detail-value">Fixed Term</p>
            </div>
          </section>
          <section className="lease-action">
            <button className="lease-agreement-btn view-full-lease">
              View Full lease Agreement
            </button>
            <button className="lease-agreement-btn lease-agreement-btn-download">
                Download

                <img src={downloadIcon} alt="download-icon" className="lease-agreement-download-icon"/>
            </button>
          </section>
        </section>

        <div className="terms-box">
        <h3 className="terms-title">Accept Terms and Conditions</h3>
          <label id="terms-label" className="terms-label">
            <input type="checkbox" id="terms-label"/> I have read and agree to the{" "}
            <a href="#">Terms</a> and <a href="#">Conditions</a>.
          </label>
          <p className="note">
            <span>Note:</span> Lease agreement, <a href="#">Terms</a> and{" "}
            <a href="#">Conditions</a> must be accepted before proceeding to
            make payment.
          </p>
        </div>
      </section>
    </>
  );
}

export default LeaseScreen;
