import React from "react";
import TrackRentScreen from "./TrackRentScreen";
import overDueIcon from "../../assets/images/overdue-icon.svg";
import checkmarkIcon from "../../assets/images/checkmark-icon-paid.svg";
import downloadIcon from "../../assets/images/download-icon.svg";
function PaymentScreen() {
  return (
    <>
      <TrackRentScreen />
      {/* Payment Section */}
      <section className="payment-section-tenant-container">
        <div className="payment-header">
          <div>
            <p id="lease-duration">
              <span>Lease Duration:</span> Annual (1 Year)
            </p>
            <p>
              <span>Rent Amount:</span> ₦1,200,000 per Annum
            </p>
          </div>
        </div>

        {/* Current Payment Card */}
        <div className="current-payment-card">
          <p className="label">CURRENT PAYMENT</p>
          <div className="current-payment-details">
            <h3 className="current-payment-amount">₦1,200,000</h3>
            <div className="payment-meta">
              <p>
                <span>Due Date:</span> May 15, 2026
              </p>
              <div className="status-container">
                <p>
                  <span>Status:</span>
                </p>
                <img src={overDueIcon} alt="" /> Paid
              </div>
            </div>
          </div>
          <button className="receipt-btn">Pay Now</button>
        </div>

        {/* Payment History Table */}
        <h4 className="payment-history-title">Payment History</h4>
        <div className="table-wrapper">
          <table className="table payment-history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>April 14, 2025</td>
                <td>₦1,200,000</td>
                <td>
                  <div className="paid-status-container">
                    <img
                      src={checkmarkIcon}
                      alt=""
                      className="checkmark-icon-paid"
                    />
                    <p className="paid-status">Paid</p>
                  </div>
                </td>
                <td className="payment-method-container">
                  <span>Paystack </span>
                  <img src={downloadIcon} alt="" className="download-icon" />
                </td>
              </tr>
              <tr>
                <td>April 30, 2024</td>
                <td>₦1,200,000</td>
                <td>
                  <div className="paid-status-container">
                    <img
                      src={checkmarkIcon}
                      alt=""
                      className="checkmark-icon-paid"
                    />
                    <p className="paid-status">Paid</p>
                  </div>
                </td>
                <td className="payment-method-container">
                  <span>Bank </span>
                  <img src={downloadIcon} alt="" className="download-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Proceed Button */}
        <div className="proceed-to-pay-container">
          <h5>Want to Make Your Next Payment?</h5>
          <button className="pay-btn mt-2">Proceed To Pay</button>
        </div>
      </section>
    </>
  );
}

export default PaymentScreen;
